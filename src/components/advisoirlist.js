import AdvisorCard from "../components/advisorCard";

const advisors = [
  {
    name: "Deepanshu Jaglan",
    experience: "6 Yrs",
    city: "New Delhi",
    specialty: "Health Insurance",
    image: "https://staticimg.insurancedekho.com/uploads/fusion/GCD38036.jpg"
  },
  {
    name: "Pankaj Singh",
    experience: "2 Yrs",
    city: "New Delhi",
    specialty: "Health Insurance",
    image: "https://staticimg.insurancedekho.com/uploads/fusion/GCD36825.png"
  },
  // Add 4 more...
  {
    name: "Ravi Kumar",
    experience: "3 Yrs",
    city: "New Delhi",
    specialty: "Life Insurance",
    image: "https://staticimg.insurancedekho.com/uploads/fusion/GCD36064.jpeg"
  },
  {
    name: "Priya Sharma",
    experience: "5 Yrs",
    city: "New Delhi",
    specialty: "Car Insurance",
    image: "https://staticimg.insurancedekho.com/uploads/fusion/GCD63090.jpeg"
  },
  {
    name: "Arjun Verma",
    experience: "4 Yrs",
    city: "New Delhi",
    specialty: "Bike Insurance",
    image: "http://fusionstaticimg.insurancedekho.com/1700664759528GID117302.JPG"
  },
  {
    name: "Kavita Mehta",
    experience: "1 Yr",
    city: "New Delhi",
    specialty: "Health Insurance",
    image: "http://fusionstaticimg.insurancedekho.com/1700664759528GID117302.JPG"
  },
];

export default function AdvisorList() {
  return (
   <div className="insurance-card">
      
      <h3 className="advisor-title">Health Insurance</h3>
      <p className="advisor-subtitle">6 Insurance Advisors found</p>
      <div className="advisor-cards-wrapper">
        {advisors.map((advisor, index) => (
          <AdvisorCard key={index} advisor={advisor} />
        ))}
      </div>
    </div>
  );
}
