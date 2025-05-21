// components/OurPartnersSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    name: "Bajaj Allianz Insurance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnO-HTxCfhfU1RhR5HwuagvTtwISeQYK_SyQ&s"
 ,
  },
  {
    name: "HDFC ERGO Insurance",
    image: "https://staticimg.insurancedekho.com/seo/insurer/hdfc-ergo.jpg",
  },

 {
    name: "TATA AIG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWco14jWReDDhV87KyLxeG7n_j7Pn7DVHsw&s"
,
  },
  {
    name: "Reliance General",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logo-reliance-general-insurance-1.png"
 },
  {
    name: "SBI General",
    image: "https://play-lh.googleusercontent.com/3jv7Zd1h0QaJU0IwmVy4XbP8djJxCygLiCZlPv69ivwca4v3XALaWmJo7yyzXjhKxA"
 
  },
];

const OurPartnersSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="our-partners-section" style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "0.5rem" }}>Our Insurance Partners</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        We're associated with India's popular insurance companies.
      </p>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} style={{ padding: "0 10px" }}>
            <div style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              marginRight:"10px"
            }}>
              <img src={partner.image} alt={partner.name} style={{ height: "80px", objectFit: "contain", marginBottom: "10px",marginLeft:"80px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "500" }}>{partner.name}</h4>
             
            </div>
           
          </div>
         
        ))}
      </Slider>

    </div>
  );
};

export default OurPartnersSlider;
