import React from 'react';
import licBanner from '../assets/lic-banner.png';
import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.jpeg';

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={licBanner} className="d-block mx-auto" style={{ height: "20vh" }} alt="Banner 1" />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={b1} className="d-block mx-auto" style={{ height: "20vh" ,width:"1000px"}} alt="Banner 2" />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={b2} className="d-block mx-auto" style={{ height: "20vh" ,width:"1000px"}} alt="Banner 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
