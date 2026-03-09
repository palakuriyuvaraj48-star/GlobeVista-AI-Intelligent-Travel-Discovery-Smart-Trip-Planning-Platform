import { useState } from 'react';

export default function DestinationRecommender() {
  const [budget, setBudget] = useState('');
  const [climate, setClimate] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);

  const handleRecommend = () => {
    // Dummy recommendations
    setResults([
      { name: 'Goa', desc: 'Beach paradise', cost: 500, season: 'Winter' },
      { name: 'Manali', desc: 'Mountain escape', cost: 700, season: 'Summer' },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Destination Recommendation Engine</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <input type="text" placeholder="Budget Range" value={budget} onChange={e => setBudget(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
        <input type="text" placeholder="Climate" value={climate} onChange={e => setClimate(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
        <input type="text" placeholder="Travel Type" value={type} onChange={e => setType(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
      </div>
      <button onClick={handleRecommend} className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:bg-indigo-700 transition">Recommend</button>
      <div className="mt-8 grid gap-4">
        {results.map(dest => (
          <div key={dest.name} className="rounded-xl shadow-md p-4 hover:bg-indigo-50 transition">
            <div className="font-bold text-lg mb-2">{dest.name}</div>
            <div>{dest.desc}</div>
            <div>Estimated Cost: ${dest.cost}</div>
            <div>Best Season: {dest.season}</div>
          </div>
        ))}
      </div>
    </div>
  );
}