import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MyCart extends Component {

render() {

return (

  <div>
  <h3>My Shopping Cart</h3>
  <div style={{marginLeft: '10%'}} className="container">
    <div className="row">
      <div className="col-sm-12 col-md-10 col-md-offset-1">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Total</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-sm-8 col-md-6">
                <div className="media">
                  <a className="thumbnail pull-left" href="#"> <img src="./images/items/3.jpg" style={{width: 72, height: 72}} /></a>
                  <div className="media-body">
                    <h4 className="media-heading"><a href="#">AV Mech Mod Brass</a></h4>
                    <h5 className="media-heading"> by <a href="#">Ameravape Tech</a></h5>
                    <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                  </div>
                </div></td>
              <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
                <input className="form-control" id="exampleInputEmail1" defaultValue={1} type="email" />
              </td>
              <td className="col-sm-1 col-md-1 text-center"><strong>$250</strong></td>
              <td className="col-sm-1 col-md-1 text-center"><strong>$250</strong></td>
              <td className="col-sm-1 col-md-1">
                <button type="button" className="btn btn-danger">
                  <span className="glyphicon glyphicon-remove" /> Remove
                </button></td>
            </tr>
            <tr>
              <td className="col-md-6">
                <div className="media">
                  <a className="thumbnail pull-left" href="#"> <img className="media-object" src="./images/items/6.jpg" style={{width: 72, height: 72}} /> </a>
                  <div className="media-body">
                    <h4 className="media-heading"><a href="#">Hex Ohm V3</a></h4>
                    <h5 className="media-heading"> by <a href="#">Craving Vapor</a></h5>
                    <span>Status: </span><span className="text-warning"><strong>Leaves warehouse in 2 - 3 weeks</strong></span>
                  </div>
                </div></td>
              <td className="col-md-1" style={{textAlign: 'center'}}>
                <input className="form-control" id="exampleInputEmail1" defaultValue={1} type="email" />
              </td>
              <td className="col-md-1 text-center"><strong>$350</strong></td>
              <td className="col-md-1 text-center"><strong>$350</strong></td>
              <td className="col-md-1">
                <button type="button" className="btn btn-danger">
                  <span className="glyphicon glyphicon-remove" /> Remove
                </button></td>
            </tr>
            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td><h5>Subtotal</h5></td>
              <td className="text-right"><h5><strong>$600</strong></h5></td>
            </tr>
            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td><h5>Estimated shipping</h5></td>
              <td className="text-right"><h5><strong>$10</strong></h5></td>
            </tr>
            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td><h3>Total</h3></td>
              <td className="text-right"><h3><strong>$610</strong></h3></td>
            </tr>
            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td>
              <Link to='/Homepage'><button type="button" className="btn btn-warning">
                  <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
                </button></Link></td>
              <td>
                <button type="button" className="btn btn-success">
                  Checkout <span className="glyphicon glyphicon-play" />
                </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

        );
    }
} 

export default MyCart;