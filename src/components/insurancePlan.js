import React, { useEffect, useState } from 'react';
import InsuranceCard from '../components/pages/insuranceCard';
import { BASE_URL } from './constants';

function InsurancePlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
const token = localStorage.getItem("token");
  // Fetch insurance plans from API
  async function fetchPlans() {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/getAllCompanies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }});
      const data = await response.json();
      setPlans(data);
      console.log("============plan===========", data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPlans();
  }, []);

  
  const companies = Array.from(
    new Map(plans.map((insurance) => [insurance?.id || insurance?.name, insurance])).values()
  );

  return (
    <div className="insurance-container">
      <h2>Top Insurance Plans</h2>
      
      {loading && <p>Loading plans...</p>}

      {!loading && companies.length === 0 && <p>No plans found.</p>}

      <div className="cards-container">
        {companies.map((company) => (
          <InsuranceCard
            key={company?.id || company?.name}
            company={company}
          />
        ))}
      </div>
    </div>
  );
}

export default InsurancePlans;
