import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import ForgotAccount from './Components/ForgotAccount';
import MyCart from './Components/MyCart';
import Checkout from './Components/Checkout'
import ProductDetails from './Components/ProductDetails';
import Shop from './Components/Shop';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Logout from './Components/Logout';
import HeaderLogin from './Components/HeaderLogin';
import Cookies from 'universal-cookie';



class App extends Component {
  render() {

    const cookies = new Cookies();
    let mycookie = cookies.get("GetID");
    let Navigation = (mycookie != undefined) ? <HeaderLogin /> : <Header />
    return (

      <div>
        {Navigation}
        <Route exact path="/" component={Homepage}/>
        <Route  path="/Homepage" component={Homepage}/>
        <Route  path="/Register" component={Register}/>
        <Route  path="/Login" component={Login}/>
        <Route  path="/ForgotAccount" component={ForgotAccount}/>
        <Route  path="/MyCart" component={MyCart}/>
        <Route  path="/Checkout" component={Checkout}/>
        <Route  path="/ProductDetails" component={ProductDetails}/>
        <Route  path="/Shop" component={Shop}/>
        <Route  path="/AboutUs" component={AboutUs}/>
        <Route  path="/ContactUs" component={ContactUs}/>
        <Route  path="/Logout" component={Logout}/>
        <Footer />
      </div>
      
    );
  }
}

export default App;
