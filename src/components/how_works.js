import React from 'react';
import '../App.css';
import fillDetails from '../assets/dwork.png';
import selectPlan from '../assets/Dwork2.png';
import payment from '../assets/dwork3.png';
import arrow from '../assets/arrow1.png'; // arrow pointing right (use same as image)

function InsuranceDekhoWorks  () {
  return (
    <section className="how-works">
      <h2 className="how-title">How InsuranceDekho Works?</h2>

      <div className="how-container">
        <div className="how-step">
          <img src={fillDetails} alt="Fill Details" className="how-icon" />
          <h3 className="how-heading">Fill in Your Details</h3>
          <p className="how-text">
            Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.
          </p>
        </div>

        <img src={arrow} alt="arrow" className="how-arrow" />

        <div className="how-step">
          <img src={selectPlan} alt="Select Plan" className="how-icon" />
          <h3 className="how-heading">Select a Plan</h3>
          <p className="how-text">
            From numerous available quotes, choose the one that best suits your requirements and budget.
          </p>
        </div>

        <img src={arrow} alt="arrow" className="how-arrow" />

        <div className="how-step">
          <img src={payment} alt="Payment" className="how-icon" />
          <h3 className="how-heading">Make Payment and Sit Back</h3>
          <p className="how-text">
            Pay online and get your policy right away in your inbox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsuranceDekhoWorks;