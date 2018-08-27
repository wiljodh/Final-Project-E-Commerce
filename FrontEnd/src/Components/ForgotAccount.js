import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotAccount extends Component {

render() {

return (

<div className="container" style={{marginLeft: '25%'}}>
  <div className="row">
    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
      <form role="form" className="sign_up_form">
        <h2 className="sign_up_title">Forgot Password ?</h2>
        <p>Enter your email address we will sent you the password reset link.</p>
        <div className="form-group">
          <input name="email" id="email" className="form-control input-lg" placeholder="Email address" tabIndex={4} type="email" />
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12"><a href="#" className="btn btn-success btn-block btn-lg">Reset</a></div>
        </div>
      </form>
    </div>
  </div>
</div>


        );
    }
} 

export default ForgotAccount;