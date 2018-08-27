import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {

render() {

return (


    <div>
    <section className="section-topbar border-top padding-y-sm">
      <div className="container">
        <span>Supplier: Vape Supply Co. | Best Vapestore in Jakarta</span>
        <div className="float-right dropdown">
          <a href className="dropdown-toggle" data-toggle="dropdown">English</a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">Russian </a>
            <a className="dropdown-item" href="#">Arabic </a>
          </div>
        </div> 
      </div> {/* container.// */}
    </section>
    {/* ========================= SECTION TOPBAR .// ========================= */}
    {/* ========================= SECTION CONTENT ========================= */}
    <section className="section-content bg padding-y-sm">
      <div className="container">
        <nav className="mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">E-Liquids</a></li>
            <li className="breadcrumb-item active" aria-current="page">Items</li>
          </ol> 
        </nav>
        <div className="row">
          <div className="col-xl-10 col-md-9 col-sm-12">
            <main className="card">
              <div className="row no-gutters">
                <aside className="col-sm-6 border-right">
                  <article className="gallery-wrap"> 
                    <div className="img-big-wrap">
                      <div> <a href="images/items/1.jpg" data-fancybox><img src="images/items/1.jpg" /></a></div>
                    </div> {/* slider-product.// */}
                    <div className="img-small-wrap">
                      <div className="item-gallery"> <img src="images/items/1.jpg" /></div>
                      <div className="item-gallery"> <img src="images/items/1.jpg" /></div>
                      <div className="item-gallery"> <img src="images/items/1.jpg" /></div>
                      <div className="item-gallery"> <img src="images/items/1.jpg" /></div>
                    </div> {/* slider-nav.// */}
                  </article> {/* gallery-wrap .end// */}
                </aside>
                <aside className="col-sm-6">
                  <article className="card-body">
                    {/* short-info-wrap */}
                    <h3 className="title mb-3">VGOD SaltNic E-Juices</h3>
                    <div className="mb-3"> 
                      <var className="price h3 text-warning"> 
                        <span className="currency">US $</span><span className="num">15.99</span>
                      </var> 
                      <span>/ per 1 bottle</span> 
                    </div> {/* price-detail-wrap .// */}
                    <dl>
                      <dt>Description</dt>
                      <dd><p>Our signature watermelon candy flavor climaxing with a fresh breeze of menthol elevated with SaltNic, in 25mg and 50mg, it will to bring your favorite low wattage device to life.</p></dd>
                    </dl>
                    <dl className="row">
                      <dt className="col-sm-3">Model#</dt>
                      <dd className="col-sm-9">12345611</dd>
                      <dt className="col-sm-3">Flavours</dt>
                      <dd className="col-sm-9">LushIce, Luscious, Cubano, Pink Cakes, Cubano Silver</dd>
                      <dt className="col-sm-3">Delivery</dt>
                      <dd className="col-sm-9">Asia, USA, and Europe </dd>
                    </dl>
                    <div className="rating-wrap">
                      <ul className="rating-stars">
                        <li style={{width: '80%'}} className="stars-active"> 
                          <i className="fa fa-star" /> <i className="fa fa-star" /> 
                          <i className="fa fa-star" /> <i className="fa fa-star" /> 
                          <i className="fa fa-star" /> 
                        </li>
                        <li>
                          <i className="fa fa-star" /> <i className="fa fa-star" /> 
                          <i className="fa fa-star" /> <i className="fa fa-star" /> 
                          <i className="fa fa-star" /> 
                        </li>
                      </ul>
                      <div className="label-rating">132 reviews</div>
                      <div className="label-rating">154 orders </div>
                    </div> {/* rating-wrap.// */}
                    <hr />
                    <div className="row">
                      <div className="col-sm-5">
                        <dl className="dlist-inline">
                          <dt>Quantity: </dt>
                          <dd> 
                            <select className="form-control form-control-sm" style={{width: 70}}>
                              <option> 1 </option>
                              <option> 2 </option>
                              <option> 3 </option>
                            </select>
                          </dd>
                        </dl>  {/* item-property .// */}
                      </div> {/* col.// */}
                      <div className="col-sm-7">
                        <dl className="dlist-inline">
                        </dl>  {/* item-property .// */}
                      </div> {/* col.// */}
                    </div> {/* row.// */}
                    <hr />
                    <a href="#" className="btn  btn-warning"> <i className="fa fa-envelope" /> Contact Supplier </a>   
                    <a href="#" className="btn  btn-outline-warning"> Start Order </a>
                    {/* short-info-wrap .// */}
                  </article> {/* card-body.// */}
                </aside> {/* col.// */}
              </div> {/* row.// */}
            </main> {/* card.// */}
            {/* PRODUCT DETAIL */}
            <article className="card mt-3">
              <div className="card-body">
                <h4>Detail overview</h4>
                <p>Our signature watermelon candy flavor climaxing with a fresh breeze of menthol elevated with SaltNic, in 25mg and 50mg, it will to bring your favorite low wattage device to life.</p>
              </div> {/* card-body.// */}
            </article> {/* card.// */}
            {/* PRODUCT DETAIL .// */}
          </div> {/* col // */}
          <aside className="col-xl-2 col-md-3 col-sm-12">
            <div className="card">
              <div className="card-header">
                Trade Assurance
              </div>
              <div className="card-body small">
                <span>Vape Supply Co. | Trading Company</span> 
                <hr />
                Transaction Level: Good <br /> 
                Supplier Assessments: Best 
                <hr />
                11 Transactions $330,000+
                <hr />
                Response Time 24h <br />
                Response Rate: 94%  <br /> 
                <hr />
                <a href="#" className="btn  btn-warning"> <i className="" /> Visit Profile      </a>
              </div> {/* card-body.// */}
            </div> {/* card.// */}
            <div className="card mt-3">
              <div className="card-header">
                You may like
              </div>
              <div className="card-body row">
                <div className="col-md-12 col-sm-3">
                  <figure className="item border-bottom mb-3">
                    <a href="#" className="img-wrap"> <img src="images/items/8.jpg" className="img-md" /></a>
                    <figcaption className="info-wrap">
                      <a href="#" className="title">Vaporflask DNA 166</a>
                      <div className="price-wrap mb-3">
                        <span className="price-new">$400</span>
                      </div> {/* price-wrap.// */}
                    </figcaption>
                  </figure> {/* card-product // */}
                </div> {/* col.// */}
                <div className="col-md-12 col-sm-3">
                  <figure className="item border-bottom mb-3">
                    <a className="img-wrap"> <img src="images/items/3.jpg" className="img-md" /></a>
                    <figcaption className="info-wrap">
                      <a href="#" className="title">AV Mech Mod Brass</a>
                      <div className="price-wrap mb-3">
                        <span className="price-new">$250</span>
                      </div> {/* price-wrap.// */}
                    </figcaption>
                  </figure> {/* card-product // */}
                </div> {/* col.// */}
                <div className="col-md-12 col-sm-3">
                  <figure className="item border-bottom mb-3">
                    <a href="#" className="img-wrap"> <img src="images/items/4.jpg" className="img-md" /></a>
                    <figcaption className="info-wrap">
                      <a href="#" className="title">AV Timekeeper Brass</a>
                      <div className="price-wrap mb-3">
                        <span className="price-new">$280</span>
                      </div> {/* price-wrap.// */}
                    </figcaption>
                  </figure> {/* card-product // */}
                </div> {/* col.// */}
              </div> {/* card-body.// */}
            </div> {/* card.// */}
          </aside> {/* col // */}
        </div> {/* row.// */}
      </div>{/* container // */}
    </section>
    {/* ========================= SECTION CONTENT .END// ========================= */}
  </div>
  

        );
    }
} 

export default ProductDetails;