import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Login extends Component {

  state = {
    statusRedirect: false
  }

  LoginFunction = (e) => {
    var Self = this
    axios.post('http://localhost:8000/Login', {
      username: e.username.value,
      password: e.password.value
    }).then((hasil) => {
        var Respon = hasil.data
        if(Respon !==0) {
          cookies.set("GetID", Respon, {path: '/Homepage'})
          Self.setState({
            statusRedirect: true
          })
        }

    })
  }

render() {
  if (this.state.statusRedirect === true) return <Redirect to="/Homepage"/>

return (

<div>
  <div>
    <div className="container" style={{textAlign: 'center'}}>
      <div className="row">
        <div className="main">
          <h3>Please Log-In</h3>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <a href="#" className="btn btn-lg btn-primary btn-block">Facebook</a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <a href="#" className="btn btn-lg btn-info btn-block">Google</a>
            </div>
          </div>
          <div className="login-or">
            <hr className="hr-or" />
            <span className="span-or">or</span>
          </div>
          <form role="form">
            <div className="form-group">
              <label htmlFor="inputUsernameEmail">Username or email</label>
              <input ref='username' className="form-control" id="inputUsernameEmail" type="text" />
            </div>
            <div className="form-group">
              <Link to ="/ForgotAccount" className="pull-right">Forgot password?</Link>
              <label htmlFor="inputPassword">Password</label>
              <input ref='password' className="form-control" id="inputPassword" type="password" />
            </div>
            <div className="checkbox pull-right">
              <label>
                <input type="checkbox" />
                Remember me </label>
            </div>
            <button onClick={() => this.LoginFunction(this.refs)} type="button" className="btn btn btn-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <hr />
</div>

        );
    }
} 

export default Login;