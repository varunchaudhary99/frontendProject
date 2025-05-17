
let InsuranceCard = ({ company }) => {
  
  console.log("====================")
  console.log(company)
  console.log("==========================")
  return (
    <div className="insurance-card">
      <div className="card-top">
        {/* <img src={photoUrl}  className="company-logo" /> */}
        <div>
          <h3>{company.name}</h3>
          <div className="card-details">
            <p><strong>Cashless Garages:</strong> {company.cashlessGarages}</p>
            <p><strong>Claims Settled:</strong> {company.ReactclaimsSettled}</p>
            {/* {zeroDepClaims && zeroDepClaims.label && (
              <p><strong>{zeroDepClaims.label}:</strong> {zeroDepClaims.value}</p>
            )} */}
          </div>
        </div>
        <div className="price-box">
          <p>Starting From</p>
          <h3>₹ {company.startingPriceINR}</h3>
          <button className="check-price-btn">Check Prices</button>
        </div>
      </div>

      {/* {features && features.length > 0 && (
        <div className="features-list">
          <strong>Key Features:</strong>
          <ul>
            {features.map((feat, idx) => (
              <li key={idx}>✔ {feat}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default InsuranceCard;
