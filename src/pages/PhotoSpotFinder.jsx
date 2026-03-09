import { useState } from 'react';

export default function PhotoSpotFinder() {
  const [destination, setDestination] = useState('');
  const [spots, setSpots] = useState([]);

  const handleFind = () => {
    // Dummy spots
    setSpots([
      { name: 'Eiffel Tower', image: 'https://via.placeholder.com/150', time: 'Morning', desc: 'Best for sunrise photos.' },
      { name: 'Louvre Museum', image: 'https://via.placeholder.com/150', time: 'Evening', desc: 'Golden hour shots.' },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Photo Spot Finder</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
        <button onClick={handleFind} className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:bg-indigo-700 transition">Find Spots</button>
      </div>
      <div className="mt-8 grid gap-4">
        {spots.map((spot, idx) => (
          <div key={idx} className="rounded-xl shadow-md p-4 hover:bg-indigo-50 transition">
            <img src={spot.image} alt={spot.name} className="rounded-xl mb-2 w-full h-32 object-cover" />
            <div className="font-bold text-lg mb-2">{spot.name}</div>
            <div>Best Time: {spot.time}</div>
            <div>{spot.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}