import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class HeaderLogin extends Component {

  state = {
    data: [],
    Fullname: '',
  }

  componentDidMount(){
    var mycookie = cookies.get("GetID");
    axios.post ('http://localhost:8000/UserProfile', {
      username : mycookie
    }).then((Response) => {
      var data = Response.data[0];
      this.setState ({
        Fullname : data.Fullname
      })
    })
  }

render() {

return (

    <div>
        
        <header className="section-header">
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <Link to = "/Homepage"className="navbar-brand"><img className="logo" src="images/logos/logo.jpg" alt="alibaba style e-commerce html template file" title="alibaba e-commerce html css theme" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTop">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link to = "/Homepage" className="nav-link" data-toggle>HOME</Link></li>
          <li className="nav-item"><Link to ="/Shop" className="nav-link" data-toggle>SHOP</Link></li>
          <li className="nav-item"><Link to ="/AboutUs" className="nav-link" data-toggle>ABOUT</Link></li>
          <li className="nav-item"><Link to ="/ContactUs" className="nav-link" data-toggle>CONTACT</Link></li>
          <li className="nav-item"><a href="#" className="nav-link" data-toggle>NEWS</a></li>
        </ul>
      </div> {/* collapse.// */}
    </div>
  </nav>
  <section className="header-main shadow-sm">
    <div className="container">
      <div className="row-sm align-items-center">
        <div className="col-lg-4-24 col-sm-3">
          <div className="category-wrap dropdown py-1">
            <button type="button" className="btn btn-light  dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bars" /> Browse Categories</button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">E-Juices / 30 ML / 50 - 60 ML / 120 - 130 ML</a>
              <a className="dropdown-item" href="#">Hardware / E-Cigs Kits / Combo's / Batteries / Mods / Tanks / RDA &amp; RDTA </a>
              <a className="dropdown-item" href="#">Coils / Aspire / E-Leaf / Joytech / Prebuilt Coils / Smok Coils / Other Brands</a>
              <a className="dropdown-item" href="#">Accessories / Wire &amp; Building Tools / Driptips / Charging / Replacement Glass / Apparel </a>
            </div>
          </div> 
        </div>
        <div className="col-lg-11-24 col-sm-8">
          <form action="#" className="py-1">
            <div className="input-group w-100">
              <select className="custom-select" name="category_name">
                <option value>All type</option>
                <option value>Special</option>
                <option value>Only best</option>
                <option value>Latest</option>
              </select>
              <input className="form-control" style={{width: '50%'}} placeholder="Search" type="text" />
              <div className="input-group-append">
                <button className="btn btn-warning" type="submit">
                  <i className="fa fa-search" /> Search 
                </button>
              </div>
            </div>
          </form> {/* search-wrap .end// */}
        </div> {/* col.// */}
        <div className="col-lg-9-24 col-sm-12">
          <div className="widgets-wrap float-right row no-gutters py-1">
            <div className="col-auto">
              <div className="widget-header dropdown">
                <Link to='/Login' data-offset="20,10">
                  <div className="icontext">
                    <div className="icon-wrap"><i className="text-warning icon-sm fa fa-user" /></div>
                    <div className="text-wrap text-dark">
                      MY ACCOUNT <br />
                      <b>{this.state.Fullname}</b> / <b><Link to= '/Logout'><span>Logout</span></Link></b>
                    </div>
                  </div>
                </Link>
              </div>  {/* widget-header .// */}
            </div> {/* col.// */}
            <div className="col-auto">
              <Link to = "/MyCart" className="widget-header">
                <div className="icontext">
                  <div className="icon-wrap"><i className="text-warning icon-sm fa fa-shopping-cart" /></div>
                  <div className="text-wrap text-dark">
                  <span className="small round badge badge-secondary">2</span>
                  <br/>  
                    My Cart 
                  </div>
                </div>
              </Link>
            </div> {/* col.// */}
            <div className="col-auto">
              <a href="#" className="widget-header">
                <div className="icontext">
                  <div className="icon-wrap"><i className="text-warning icon-sm  fa fa-heart" /></div>
                  <div className="text-wrap text-dark">
                    <span className="small round badge badge-secondary">0</span>
                    <div>Wishlist</div>
                  </div>
                </div>
              </a>
            </div> {/* col.// */}
          </div> {/* widgets-wrap.// row.// */}
        </div> {/* col.// */}
      </div> {/* row.// */}
    </div> {/* container.// */}
  </section> {/* header-main .// */}
</header> {/* section-header.// */}

    </div>
        );
    }
} 

export default HeaderLogin;