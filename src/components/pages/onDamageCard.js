import React, { useState } from 'react';

const OnDamageCard = ({ ondamagecompany }) => {
  const [paymentId, setPaymentId] = useState("");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const amountInPaise = parseFloat(ondamagecompany.startingPriceINR) * 100;

    const options = {
      key: "rzp_test_8bWkHX0DRZvFA0",
      amount: amountInPaise.toString(),
      currency: "INR",
      name: "Acme Corp",
      description: "Insurance Payment",
      image: "https://example.com/your_logo",
      order_id: "order_QWJqSzzmkAZCm3",
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
        alert("Order ID: " + response.razorpay_order_id);
        alert("Signature: " + response.razorpay_signature);
        setPaymentId(response.razorpay_payment_id);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on('payment.failed', function (response) {
      alert("Code: " + response.error.code);
      alert("Description: " + response.error.description);
      alert("Source: " + response.error.source);
      alert("Step: " + response.error.step);
      alert("Reason: " + response.error.reason);
      alert("Order ID: " + response.error.metadata.order_id);
      alert("Payment ID: " + response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  return (
    <div className="insurance-card">
      <div className="card-top">
        <img src={ondamagecompany.planUrl} alt="company" className="company-logo" />
        <div>
          <h3>{ondamagecompany.company}</h3>
          <div className="card-details">
            <p><strong>Cashless Garages:</strong> {ondamagecompany.cashlessGarages}</p>
            <p><strong>Claim Settlement Ratio:</strong> {ondamagecompany.claimSettlementRatio}</p>
            <p><strong>Zero Dep Claims:</strong> {ondamagecompany.zeroDepClaims}</p>
          </div>
        </div>
        <div className="price-box">
          <p>Starting From</p>
          <h3>₹ {ondamagecompany.startingPrice}</h3>
          <button className="check-price-btn" onClick={displayRazorpay}>
            Pay Now
          </button>
          {paymentId && <p>Payment Successful! ID: {paymentId}</p>}
        </div>
      </div>
    </div>
  );
};

export default OnDamageCard;
