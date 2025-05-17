import React, { useState } from 'react';
import Cars from '../assets/icon_car.png';
import Bikes from '../assets/icon_bike.png';
import healths from '../assets/icon_health.png';
import lifes from '../assets/icon_life.png';
import investments from '../assets/icon_investment.png';
import businesses from '../assets/business_insurance.png';
import familys from '../assets/icon_family.png';
import Guaranteeds from '../assets/icon_guaranteeReturn.png';
import viewmores from '../assets/icon_viewmore.png';
import CarPopup from './carNumberPopup'
function AllInsurerance(){
   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const carhandleClick = async () => {
//   try {
//     const response = await fetch('http://localhost:5000/api/carNumber', {
//       method: 'POST',       headers: {
//         'Content-Type': 'application/json',
        
//       },
//       body: JSON.stringify({ carNumber }),
    
//     });

//     if (!response.ok) throw new Error('API request failed');
//       const data = await response.json();
//       console.log('API Response:', data);

//       // Navigate to Car Insurance Page
//       navigate('/car-insurance');
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// };

    return ( 
    
    <div class="service-container">
  <div className="service-item" onClick={() => setIsPopupOpen(true)}>
      <img src={Cars} alt="Car Insurance"/>
      <h4>Car</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={Bikes} alt="Bike Insurance"/>
      <h4>Bike</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={healths} alt="Health Insurance"/>
      <h4>Health</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      
      <img src={lifes}alt="Term Insurance"/>
      <h4>Term</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={investments} alt="Investment Plans"/>
      <h4>Investment</h4>
      <p>Plans</p>
    </div>

    <div class="service-item">
      <img src={businesses} alt="Business Insurance"/>
      <h4>Business</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={familys} alt="Family Health"/>
      <h4>Family Health</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item">
      <img src={Guaranteeds} alt="Return Plans"/>
      <h4>Guaranteed</h4>
      <p>Return Plans</p>
    </div>

    <div class="service-item">
      <img src={viewmores} alt="View More"/>
      <h4>View More</h4>
    </div>
     <CarPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onLoginSuccess={() => {
          setIsPopupOpen(false);
         // setIsLoggedIn(true); 
        }}
      ></CarPopup>
  </div>)
}
export default AllInsurerance