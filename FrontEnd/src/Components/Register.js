import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';

class Register extends Component {

  state =  {
    redirect: false,

  }

  submitregis=(e)=>{
    Axios.post ('http://localhost:8000/Register', {
      Username: e.Username.value,
      Fullname: e.Fullname.value,
      Email: e.Email.value,
      Phonenumber: e.Phonenumber.value,
      Password: e.Password.value,
      RepeatPassword: e.Repeatpassword.value,

    })
  }

render() {

  if ( this.state.redirect) return <Redirect to = "/Login" />

return (

    <div>
        
        <div className="container">
  <div className="card bg-light">
    <article className="card-body mx-auto" style={{maxWidth: 400}}>
      <h4 className="card-title mt-3 text-center">Create Account</h4>
      <p className="text-center">Get started with your free account</p>
      <p>
        <a href className="btn btn-block btn-twitter"> <i className="fab fa-twitter" /> &nbsp; Login via Twitter</a>
        <a href className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f" /> &nbsp; Login via facebook</a>
      </p>
      <p className="divider-text">
        <span className="bg-light">OR</span>
      </p>
      <form>
      <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user" /> </span>
          </div>
          <input ref="Username" className="form-control" placeholder="Username" type="text" />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user" /> </span>
          </div>
          <input ref="Fullname" className="form-control" placeholder="Full name" type="text" />
        </div> {/* form-group// */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
          </div>
          <input ref="Email" className="form-control" placeholder="Email address" type="email" />
        </div> {/* form-group// */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-phone" /> </span>
          </div>
          <select className="custom-select" style={{maxWidth: 120}}>
            <option selected>+971</option>
            <option value={1}>+972</option>
            <option value={2}>+198</option>
            <option value={3}>+701</option>
          </select>
          <input ref="Phonenumber" className="form-control" placeholder="Phone number" type="text" />
        </div> {/* form-group// */}
        <div className="form-group input-group">
        </div> {/* form-group end.// */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
          </div>
          <input ref="Password" className="form-control" placeholder="Create password" type="password" />
        </div> {/* form-group// */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
          </div>
          <input ref="Repeatpassword" className="form-control" placeholder="Repeat password" type="password" />
        </div> {/* form-group// */}                                      
        <div className="form-group">
          <button type="submit" onClick={() => this.submitregis(this.refs)}  className="btn btn-primary btn-block"> Create Account</button>
        </div> {/* form-group// */}      
        <p className="text-center">Have an account? <Link to = "/Login">Log In</Link> </p>                                                                 
      </form>
    </article>
  </div> {/* card.// */}
</div> 
{/*container end.//*/}


    </div>
        );
    }
} 

export default Register;