const cities = [
  "New Delhi", "Gurgaon", "Faridabad", "Ghaziabad", "Noida",
  "Kolkata", "Hyderabad", "Lucknow", "Mumbai", "Pune", "Bangalore"
];

export default function SidebarFilter() {
  return (
    <div className="city-filter">
      <h2 >Filters</h2>
      <p className="text-sm text-blue-600 mb-2 cursor-pointer">Clear All</p>
      <div>
        <p className="font-medium mb-1">City</p>
        <ul className="space-y-1">
          {cities.map((city) => (
            <li key={city}>
              <label className="flex items-center gap-2">
                <input type="radio" name="city" value={city} defaultChecked={city === "New Delhi"} />
                <span>{city}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
