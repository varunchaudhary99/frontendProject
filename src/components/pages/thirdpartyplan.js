import React, { useEffect, useState } from 'react';
import ThirdPartyCard from '../pages/thirdpartyCard';


function ThirdPartyPlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch insurance plans from API
  async function fetchPlans() {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/thirdparty');
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

  
  const thirdpartycompanies = Array.from(
    new Map(plans.map((thirdparty) => [thirdparty?.id || thirdparty?.company, thirdparty])).values()
  );

  return (
    <div className="insurance-container">
      <h2>Top Third Party Plans</h2>
      
      {loading && <p>Loading plans...</p>}

      {!loading && thirdpartycompanies.length === 0 && <p>No plans found.</p>}

      <div className="cards-container">
        {thirdpartycompanies.map((thirdparty) => (
          <ThirdPartyCard
            key={thirdparty?.id || thirdparty?.company}
            thirdparty={thirdparty}
          />
        ))}
      </div>
    </div>
  );
}

export default ThirdPartyPlans;
