import React from "react";
import greet from '../assets/Grating.png'
import smiles from '../assets/happysmiles.png'
import claim from '../assets/claimsetteled.png'
function Reviews() {
    return (
      <>
       <section className="stats-section">
  <div className="stat-card">
    <span className="icon">
        <img src={smiles}  alt="Google"></img>
    </span>
    <div>
      <h3>80 Lacs+</h3>
      <p>Happy Smiles</p>
    </div>
  </div>
  <div className="stat-card">
    <span className="icon">
      <img src= {greet} alt="Google" />
    </span>
    <div>
      <h3>4.8</h3>
      <p>Rated on Google</p>
    </div>
  </div>
  <div className="stat-card">
    <span className="icon">
    <img src= {claim} alt="Google" />
    </span>
    <div>
      <h3>35k+</h3>
      <p>Claims Served</p>
    </div>
  </div>
</section>
      </>
    );
  }
  
  export default Reviews;
  