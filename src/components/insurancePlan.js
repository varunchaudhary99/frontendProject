import React, { useEffect, useState } from 'react';
import InsuranceCard from './InsuranceCard';
import './InsurancePlans.css';

function InsurancePlans() {
  const [plans, setPlans] = useState([]);
 

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/getAllCompanies');
      const data = await response.json();
      setPlans(data);
      console.log("============plan===========",data);
    } catch (error) {
      console.error('Failed to fetch products:', error);

  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const companies = Array.from(
    new Map(plans.map((insurance) => [insurance.id || insurance.name, insurance])).values()
  );

  return (
    <div className="insurance-container">
      <h2>Top Car Insurance Plans</h2>
      {loading && <p>Loading plans...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="cards-container">
       {companies.map((company, idx) => (
  <InsuranceCard key={company.id || company.name} company={company}  />
))}
      </div>
    </div>
  );
}

export default InsurancePlans;
