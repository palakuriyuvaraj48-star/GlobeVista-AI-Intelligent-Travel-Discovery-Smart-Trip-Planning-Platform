import { useState } from 'react';

export default function SmartItinerary() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(1);
  const [type, setType] = useState('');
  const [timeline, setTimeline] = useState([]);

  const handleOptimize = () => {
    // Dummy timeline
    setTimeline([
      { time: '9:00', activity: 'Red Fort' },
      { time: '12:00', activity: 'Lunch' },
      { time: '3:00', activity: 'India Gate' },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Smart Itinerary Optimizer</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
        <input type="number" min={1} placeholder="Days" value={days} onChange={e => setDays(Number(e.target.value))} className="rounded-xl border px-4 py-2 shadow-md" />
        <input type="text" placeholder="Travel Type" value={type} onChange={e => setType(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
      </div>
      <button onClick={handleOptimize} className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:bg-indigo-700 transition">Optimize</button>
      <div className="mt-8 grid gap-4">
        {timeline.map((item, idx) => (
          <div key={idx} className="rounded-xl shadow-md p-4 hover:bg-indigo-50 transition">
            <div className="font-bold text-lg mb-2">{item.time}</div>
            <div>{item.activity}</div>
          </div>
        ))}
      </div>
    </div>
  );
}