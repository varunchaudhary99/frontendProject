import React from "react";
import Car from '../assets/icon_car.png';
import Bike from '../assets/icon_bike.png';
import health from '../assets/icon_health.png';
import life from '../assets/icon_life.png';
import investment from '../assets/icon_investment.png';
import business from '../assets/business_insurance.png';
import family from '../assets/icon_family.png';
import Guaranteed from '../assets/icon_guaranteeReturn.png';
import viewmore from '../assets/icon_viewmore.png';

function AllInsurerance(){
  const carhandleClick = async () => {
  try {
    const response = await fetch('https://api.example.com/insurance/car', {
      method: 'GET', // Change to 'POST' if needed
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer your_token', // if needed
      },
      // body: JSON.stringify({ key: 'value' }) // only needed for POST
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    console.log('API Response:', data);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
};

    return ( 
    
    <div class="service-container">
  <div className="service-item" onClick={carhandleClick}>
      <img src={Car} alt="Car Insurance"/>
      <h4>Car</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={Bike} alt="Bike Insurance"/>
      <h4>Bike</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={health} alt="Health Insurance"/>
      <h4>Health</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      
      <img src={life}alt="Term Insurance"/>
      <h4>Term</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={investment} alt="Investment Plans"/>
      <h4>Investment</h4>
      <p>Plans</p>
    </div>

    <div class="service-item">
      <img src={business} alt="Business Insurance"/>
      <h4>Business</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={family} alt="Family Health"/>
      <h4>Family Health</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={Guaranteed} alt="Return Plans"/>
      <h4>Guaranteed</h4>
      <p>Return Plans</p>
    </div>

    <div class="service-item">
      <img src={viewmore} alt="View More"/>
      <h4>View More</h4>
    </div>
  </div>)
}
export default AllInsurerance