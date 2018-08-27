import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactUs extends Component {

render() {

return (

<section id="contact">
  <div className="container">
    <div className="well well-sm">
      <h3><strong>Contact Us</strong></h3>
    </div>
    <div className="container">
        <p>  Please use the customer service portal below to send us your question! You can also choose the "Search Articles" tab to browse our commonly asked questions, or use one of the methods listed below. Please attach any pictures, if you had an issue with your order. Please allow up to 2 business days for responses.</p>
    </div>
    <div className="row">
      <div className="col-md-7">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3736489.7218514383!2d90.21589792292741!3d23.857125486636733!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1506502314230" style={{border: 0}} allowFullScreen width="100%" height={315} frameBorder={0} />
      </div>
      <div className="col-md-5">
        <h4><strong>Get in Touch</strong></h4>
        <form>
          <div className="form-group">
            <input className="form-control" name defaultValue placeholder="Name" type="text" />
          </div>
          <div className="form-group">
            <input className="form-control" name defaultValue placeholder="E-mail" type="email" />
          </div>
          <div className="form-group">
            <input className="form-control" name defaultValue placeholder="Phone" type="tel" />
          </div>
          <div className="form-group">
            <textarea className="form-control" name rows={3} placeholder="Message" defaultValue={""} />
          </div>
          <button className="btn btn-default" type="submit" name="button">
            <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


        );
    }
} 

export default ContactUs;