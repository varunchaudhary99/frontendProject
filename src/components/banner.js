export default function Banner() {
  return (
    <div className="home-banner">
      <div>
        <h3 className="text-lg font-semibold">Get the Best Insurance Advisor at Home</h3>
        <a href="#" className="text-red-500 font-medium">Book Home Visit &gt;</a>
        <div className="text-sm text-gray-600 mt-2 space-y-1">
          <p>✅ ID Certified Experts</p>
          <p>✅ Free Meeting</p>
          <p>✅ Lifetime Claim Support</p>
        </div>
      </div>
      <img src="https://www.insurancedekho.com/static/media/posp_home_visit.4f44ac33.png" alt="advisor" className="h-24 hidden sm:block" />
    </div>
  );
}
