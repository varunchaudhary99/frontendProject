export default function AdvisorCard({ advisor }) {
  return (
    <div className="border rounded p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <img src={advisor.image} alt={advisor.name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold">{advisor.name}</h4>
          <p className="text-sm text-gray-600">
            Experience {advisor.experience} | Rating{" "}
            <span className="text-yellow-500">★★★★★</span>
          </p>
          <p className="text-sm text-gray-500">{advisor.city}</p>
          <span className="text-xs bg-gray-200 px-2 py-1 rounded mt-1 inline-block">{advisor.specialty}</span>
        </div>
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Book Home Visit</button>
    </div>
  );
}
