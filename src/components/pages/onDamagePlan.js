import React, { useEffect, useState } from 'react';
import OnDamageCard from '../pages/onDamageCard';

function OnDamagePlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/ondamage');
      const data = await response.json();
      setPlans(data);
      console.log("============ Fetched Plans ===========", data);
    } catch (error) {
      console.error('Failed to fetch plans:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  // Remove duplicates by company name or id
  const uniqueCompanies = Array.from(
    new Map(plans.map(plan => [plan.company, plan])).values()
  );

  return (
    <div className="insurance-container">
      <h2>Top On Damage Plans</h2>

      {loading && <p>Loading plans...</p>}

      {!loading && uniqueCompanies.length === 0 && (
        <p>No plans found.</p>
      )}

      <div className="cards-container">
        {uniqueCompanies.map((company, index) => (
          <OnDamageCard
            key={company?.id || `${company?.company}-${index}`}
            ondamagecompany={company}
          />
        ))}
      </div>
    </div>
  );
}

export default OnDamagePlans;
