export default function TrendingDestinations() {
  const trending = [
    { name: 'Paris', type: 'Country' },
    { name: 'Tokyo', type: 'City' },
    { name: 'Goa', type: 'Destination' },
  ];
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Trending Destinations</h2>
      <div className="grid grid-cols-3 gap-6">
        {trending.map((item, idx) => (
          <div key={idx} className="rounded-xl shadow-md p-4 hover:bg-indigo-50 transition">
            <div className="font-bold text-lg mb-2">{item.name}</div>
            <div className="text-sm text-gray-500">{item.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}