// Benefits.jsx
import React from 'react';
import '../App.css'
import policyIcon from '../assets/policy.png';
import happyIcon from '../assets/happybenfits.png';
import supportIcon from '../assets/supportteam.png';

function Benefits  () {
  return (
    <section className="benefits">
      <h2>Benefits of InsuranceDekho</h2>
      <p className="subtitle">
        Understand your insurance policy options. Identify the best value. Enjoy peace of mind.
      </p>
      <div className="benefit-cards">
        <div className="benefit-card">
          <img src={policyIcon} alt="Policy Issuance" />
          <h3>5 Minutes Policy Issuance*</h3>
          <p>
            Say no to spending hours and days in queues doing the paperwork for your insurance policy. 
            Get your insurance issued instantly with InsuranceDekho. The entire process from selecting 
            the best insurance policy to getting it issued takes just 5 minutes on InsuranceDekho.
          </p>
        </div>
        <div className="benefit-card">
          <img src={happyIcon} alt="Happy Customers" />
          <h3>Over 80 Lac Happy Customers</h3>
          <p>
            InsuranceDekho is becoming a household name in India. Till now we have been successful in 
            providing a delightful experience to more than 50 lac customers with the help of our transparent 
            and quick process, a dedicated support team along with the availability of numerous insurers.
          </p>
        </div>
        <div className="benefit-card">
          <img src={supportIcon} alt="Support Team" />
          <h3>Dedicated Support Team</h3>
          <p>
            Our dedicated support team is available for your assistance all the 7 days. Feel free to reach 
            out to us in case of any confusion – be it related to the purchase of an insurance policy or 
            assistance during the settlement of a claim, our team of experts is at your service all days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
