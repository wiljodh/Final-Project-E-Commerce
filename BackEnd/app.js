const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser = require('body-parser');
const crypto = require('crypto');
const app = express();
const port = 8000;
const secret = 'maqlo';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vapesupplyco',
    port: '3306',
    multipleStatements: true
})

db.connect();

//RegisterUser
app.post('/Register', (req,res ) => {
    var Username = req.body.Username
    var Fullname = req.body.Fullname
    var Email = req.body.Email
    var Phonenumber = req.body.Phonenumber
    var Password = req.body.Password
    var Repeatpassword = req.body.RepeatPassword

    var sql = `INSERT INTO userregister (Username, Fullname, Email, Phonenumber, CreatePassword, RepeatPassword) VALUES ("${Username}", "${Fullname}", "${Email}", "${Phonenumber}", "${Password}", "${Repeatpassword}")`;
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else{
            console.log(result);
        }
    })
})

//LoginUser
app.post('/Login', (req, res) => {

    var sql = `SELECT * FROM userregister`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        } else {
            var username = req.body.username;
            var password = req.body.password;

            for (var i=0; i < result.length; i++ ){
                if (username === result[i].Username && password === result[i].CreatePassword){
                    res.send(username);
                    break;
                } else if (i === result.length -1) {
                    res.send('0');
                }
            }
        }
    })
})

//ProfileUser
app.post('/UserProfile', (req, res) => {
    var username = req.body.username;
    var sql = `SELECT * FROM userregister WHERE Username = "${username}"`;
    db.query(sql, (err, result) =>{
        if (err){
            throw err;
        } else {
            res.send(result);
        }
    })
})

//ProductList
app.get ('/AllProducts', (req, res) => {
    var getData = `SELECT * FROM products;`
    db.query(getData, (iferr, hasilQuery) => {
        if (iferr)
        {
            throw iferr;
        }
        else {
            res.send(hasilQuery);
        }
    })
})

app.listen(port, (req, res) => {
    console.log('Sucsessfully Connected')
});