import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Homepage extends Component {

render() {

return (

<div>
  {/* ========================= SECTION MAIN ========================= */}
  <section className="section-main bg padding-y-sm">
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row row-sm">
            <aside className="col-md-3">
              <h5 className="text-uppercase">My Markets</h5>
              <ul className="menu-category list-dots">
                <li> <a href="#">E-Liquids</a></li>
                <li> <a href="#">Starter Kits </a></li>
                <li> <a href="#">Mods </a></li>
                <li> <a href="#">Tanks</a></li>
                <li> <a href="#">RDA &amp; RDTA</a></li>
                <li> <a href="#">Batteries</a></li>
              </ul>
            </aside> {/* col.// */}
            <div className="col-md-6">
              {/* ================= main slide ================= */}
              <div className="owl-init slider-main owl-carousel" data-items={1} data-nav="true" data-dots="false">
                <div className="item-slide">
                  <img src="images/banners/slide1.jpg" />
                </div>
                <div className="item-slide">
                  <img src="images/banners/slide2.jpg" />
                </div>
                <div className="item-slide">
                  <img src="images/banners/slide3.jpg" />
                </div>
              </div>
              {/* ============== main slidesow .end // ============= */}
            </div> {/* col.// */}
            <aside className="col-md-3">
              <h6 className="title-bg bg-secondary">Hot Sale !</h6>
              <div style={{height: 280}}>
                <figure className="itemside has-bg border-bottom" style={{height: '36%'}}>
                  <img className="img-bg" src="images/items/item-sm.png" />
                  <figcaption className="p-2">
                    <h6 className="title">Vaporesso Swag 80W TC </h6>
                   <Link to ="/ProductDetails">Details</Link>
                  </figcaption>
                </figure>
                <figure className="itemside has-bg border-bottom" style={{height: '33%'}}>
                  <img className="img-bg" src="images/items/1.jpg" height={80} />
                  <figcaption className="p-2">
                    <h6 className="title">VGOD Salt Nic 25MG </h6>
                    <a href="#">Details</a>
                  </figcaption>
                </figure>
                <figure className="itemside has-bg border-bottom" style={{height: '33%'}}>
                  <img className="img-bg" src="images/items/3.jpg" height={80} />
                  <figcaption className="p-2">
                    <h6 className="title">AV Mech Mod Brass </h6>
                    <a href="#">Details</a>
                  </figcaption>
                </figure>
              </div>
            </aside>
          </div> {/* row.// */}
        </div> {/* card-body .// */}
      </div> {/* card.// */}
      <figure className="mt-3 banner p-3 ">
        <center>
          <a href="starter-alibaba-home.html"><img src="images/banners/banner1.png" width="1200px" height={200} /></a>
        </center>
      </figure>
    </div> {/* container .//  */}
  </section>
  {/* ========================= SECTION MAIN END// ========================= */}
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content padding-y-sm bg">
    <div className="container">
      <header className="section-heading heading-line">
        <h4 className="title-section bg">MECH &amp; ELECTRICAL MOD</h4>
      </header>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-3">
            <article href="#" className="card-banner h-100 bg2">
              <div className="card-body zoom-wrap">
                <br />
                <h5 className="title">Mechanical Mods &amp; Electrical</h5>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <a href="#" className="btn btn-warning">Explore</a>
                <img src="images/items/item-sm.png" className="img-bg zoom-in" height={370} />
              </div>
            </article>
          </div> {/* col.// */}
          <div className="col-md-9">
            <ul className="row no-gutters border-cols">
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">VGOD Pro Mech 2</p>
                    <img className="img-sm" src="images/items/product1.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Shaan Laan Podkit 40W</p>
                    <img className="img-sm" src="images/items/product2.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Geekvape Blade 253W TC</p>
                    <img className="img-sm" src="images/items/product3.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Hugo Vapor Deluxe</p>
                    <img className="img-sm" src="images/items/product4.jpg" />
                  </div>
                </a>	
              </li>
            </ul>
            <ul className="row no-gutters border-cols">
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Smoant Charon TS 218W </p>
                    <img className="img-sm" src="images/items/product5.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">The Rig V3 Vaping AMP</p>
                    <img className="img-sm" src="images/items/product6.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Coil Art Mage Mech Trick</p>
                    <img className="img-sm" src="images/items/product7.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Able Competition Mod AV</p>
                    <img className="img-sm" src="images/items/product8.png" />
                  </div>
                </a>	
              </li>
            </ul>
          </div> {/* col.// */}
        </div> {/* row.// */}
      </div> {/* card.// */}
    </div> {/* container .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content padding-y-sm bg">
    <div className="container">
      <header className="section-heading heading-line">
        <h4 className="title-section bg text-uppercase">E - LIQUIDS</h4>
      </header>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-3">
            <article href="#" className="card-banner h-100 bg2">
              <div className="card-body zoom-wrap">
                <h5 className="title">Breakfast Club E - Juice</h5>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <a href="#" className="btn btn-warning">Explore</a>
                <img src="images/items/lq1.jpg" className="img-bg zoom-in" height={370} />
              </div>
            </article>
          </div> {/* col.// */}
          <div className="col-md-9">
            <ul className="row no-gutters border-cols">
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">VGOD Salt Nic 25MG</p>
                    <img className="img-sm" src="images/items/1.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Funnel Cake By Ruthless</p>
                    <img className="img-sm" src="images/items/liq2.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Supa Milkshake Factory</p>
                    <img className="img-sm" src="images/items/lq3.png" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Cream Puff Factory</p>
                    <img className="img-sm" src="images/items/liq4.jpg" />
                  </div>
                </a>	
              </li>
            </ul>
            <ul className="row no-gutters border-cols">
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">BLVCK Unicorn Salt Nic </p>
                    <img className="img-sm" src="images/items/liq5.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Bubblegum Factory</p>
                    <img className="img-sm" src="images/items/liq6.png" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Cuttwood Legends Line Up</p>
                    <img className="img-sm" src="images/items/liq7.jpg" />
                  </div>
                </a>
              </li>
              <li className="col-6 col-md-3">
                <a href="#" className="itembox"> 
                  <div className="card-body">
                    <p className="word-limit">Five Pawns Gambit</p>
                    <img className="img-sm" src="images/items/liq8.jpg" />
                  </div>
                </a>	
              </li>
            </ul>
          </div> {/* col.// */}
        </div> {/* row.// */}
      </div> {/* card.// */}
    </div> {/* container .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= SECTION REQUEST ========================= */}
  <section className="section-request bg padding-y-sm">
    <div className="container">
      <header className="section-heading heading-line">
        <h4 className="title-section bg text-uppercase">VAPE EVENTS RSVP</h4>
      </header>
      <div className="row">
        <div className="col-md-8">
          <figure className="card-banner banner-size-lg">
            <figcaption className="overlay left">
              <br />
              <h2 style={{maxWidth: 300}}>Vaping Circuit Convention 2017 (VCC) Has Arrived!</h2>
              <br />
              <a className="btn btn-warning" href="#">Detail info » </a>
            </figcaption>
            <img src="images/banners/banner2.jpg" />
          </figure>
        </div> {/* col // */}
        <div className="col-md-4">
          <div className="card card-body">
            <h5 className="title py-4">Book Your Ticket, Bring Your Team !</h5>
            <form>
              <div className="form-group">
                <input className="form-control" name type="text" />
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input className="form-control" name type="text" />
                  <span className="input-group-btn" style={{border: 0, width: 0}} />
                  <select className="form-control">
                    <option>Firstday</option>
                    <option>Day 2</option>
                    <option>Day 3</option>
                    <option>Lastday</option>
                  </select>
                </div>
              </div>
              <div className="form-group text-muted">
                <p>Select template type:</p>
                <label className="form-check form-check-inline">
                  <input className="form-check-input" defaultValue="option1" type="checkbox" />
                  <span className="form-check-label">Regular Ticket</span>
                </label>
                <label className="form-check form-check-inline">
                  <input className="form-check-input" defaultValue="option2" type="checkbox" />
                  <span className="form-check-label">VVIP Ticket</span>
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-warning">Request for Ticket</button>
              </div>
            </form>
          </div>
        </div> {/* col // */}
      </div>{/* row // */}
    </div>{/* container // */}
  </section>
  {/* ========================= SECTION REQUEST .END// ========================= */}
  {/* ========================= SECTION ITEMS ========================= */}
  <section className="section-request bg padding-y-sm">
    <div className="container">
      <header className="section-heading heading-line">
        <h4 className="title-section bg text-uppercase">Recommended items</h4>
      </header>
      <div className="row-sm">
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/3.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">AV Mech Mod Brass</a></h6>
              <div className="price-wrap">
                <span className="price-new">$250</span>
                <del className="price-old">$350</del>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/4.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">AV Timekeeper Brass</a></h6>
              <div className="price-wrap">
                <span className="price-new">$280</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/5.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Stacked Able Brass</a></h6>
              <div className="price-wrap">
                <span className="price-new">$300</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/6.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Hex Ohm V3 By Craving</a></h6>
              <div className="price-wrap">
                <span className="price-new">$350</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/7.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Hex Ohm V3 Regulated</a></h6>
              <div className="price-wrap">
                <span className="price-new">$350</span>
                <del className="price-old">$400</del>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/8.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Vaporflask DNA 166</a></h6>
              <div className="price-wrap">
                <span className="price-new">$400</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/9.png" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Vaporshark rDNA40 V3</a></h6>
              <div className="price-wrap">
                <span className="price-new">$400</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/10.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Triade Mod Lostvape</a></h6>
              <div className="price-wrap">
                <span className="price-new">$400</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/11.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Sigelei Fuchai 213W</a></h6>
              <div className="price-wrap">
                <span className="price-new">$375</span>
                <del className="price-old">$420</del>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/12.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Sigelei Fuchai Glo 230W</a></h6>
              <div className="price-wrap">
                <span className="price-new">$380</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/13.jpg" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Joytech Evic Supreme</a></h6>
              <div className="price-wrap">
                <span className="price-new">$80</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
        <div className="col-md-2">
          <figure className="card card-product">
            <div className="img-wrap"> <img src="images/items/14.png" /></div>
            <figcaption className="info-wrap">
              <h6 className="title "><a href="#">Joytech Elitar Pipe</a></h6>
              <div className="price-wrap">
                <span className="price-new">$115</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </figure> {/* card // */}
        </div> {/* col // */}
      </div> {/* row.// */}
    </div>{/* container // */}
  </section>
  {/* ========================= SECTION ITEMS .END// ========================= */}
  {/* ========================= SECTION LINKS ========================= */}
  <section>
    <div>
      <figure className="mt-3 banner p-3">
        <center>
          <a href="starter-alibaba-home.html"><img src="images/banners/banner3.png" width="1200px" height={200} /></a>
        </center>
      </figure>
    </div>{/* container // */}
  </section>
  {/* ========================= SECTION LINKS END.// ========================= */}
</div>


        );
    }
} 

export default Homepage;