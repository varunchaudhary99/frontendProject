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
import BikePopup from './bikeNumberPopup';
import { useNavigate } from 'react-router-dom';
import Trem from './pages/trem'
import Family from './pages/family'
import Business from './pages/business';
function AllInsurerance(){
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [bikePopupOpen, setBikePopupOpen] = useState(false);
     const navigate = useNavigate();

  const goToHealth = () => {
    navigate('/health'); 
  };
const goToTrem = () => {
    navigate('/trem'); 
  };
const goToFamily = () => {
    navigate('/family'); 
  };
const goToInvestment = () => {
    navigate('/investment'); 
  };
  const goToBusiness = () => {
    navigate('/business'); 
  };
   const goToGuaranteed = () => {
    navigate('/guaranteed'); 
  };
    return ( 
    
    <div class="service-container">
  <div className="service-item" onClick={() => setIsPopupOpen(true)}>
      <img src={Cars} alt="Car Insurance"/>
      <h4>Car</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item" onClick={() => setBikePopupOpen(true)}>
      <img src={Bikes} alt="Bike Insurance"/>
      <h4>Bike</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item"  onClick={goToHealth}>
      <img src={healths} alt="Health Insurance"/>
      <h4>Health</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item"  onClick={goToTrem}>
      
      <img src={lifes}alt="Term Insurance"/>
      <h4>Term</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item"  onClick={goToInvestment}>  
      <img src={investments} alt="Investment Plans"/>
      <h4>Investment</h4>
      <p>Plans</p>
    </div>

    <div class="service-item"  onClick={goToBusiness}>
      <img src={businesses} alt="Business Insurance"/>
      <h4>Business</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item" onClick={goToFamily}>
      <img src={familys} alt="Family Health"/>
      <h4>Family Health</h4>
      <p>Insurance</p>
    </div>

    <div class="service-item" onClick={goToGuaranteed}>
      <img src={Guaranteeds} alt="Return Plans"/>
      <h4>Guaranteed</h4>
      <p>Return Plans</p>
    </div>
     <BikePopup
        isOpen={bikePopupOpen}
        onClose={() => setBikePopupOpen(false)}
        onLoginSuccess={() => {
          setBikePopupOpen(false);
         // setIsLoggedIn(true); 
        }}></BikePopup>
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