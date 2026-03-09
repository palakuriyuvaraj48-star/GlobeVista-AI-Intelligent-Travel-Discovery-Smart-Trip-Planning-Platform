import { useState } from 'react';

export default function BudgetCalculator() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(1);
  const [travelers, setTravelers] = useState(1);
  const [hotel, setHotel] = useState('Standard');
  const [transport, setTransport] = useState('Train');
  const [cost, setCost] = useState(null);

  const handleCalc = () => {
    // Dummy calculation
    setCost(days * travelers * (hotel === 'Luxury' ? 200 : 100) + (transport === 'Flight' ? 300 : 50));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Smart Budget Calculator</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
        <input type="number" min={1} placeholder="Days" value={days} onChange={e => setDays(Number(e.target.value))} className="rounded-xl border px-4 py-2 shadow-md" />
        <input type="number" min={1} placeholder="Travelers" value={travelers} onChange={e => setTravelers(Number(e.target.value))} className="rounded-xl border px-4 py-2 shadow-md" />
        <select value={hotel} onChange={e => setHotel(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md">
          <option>Standard</option>
          <option>Luxury</option>
        </select>
        <select value={transport} onChange={e => setTransport(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md">
          <option>Train</option>
          <option>Flight</option>
        </select>
      </div>
      <button onClick={handleCalc} className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:bg-indigo-700 transition">Calculate Budget</button>
      {cost !== null && <div className="mt-6 text-lg font-semibold">Estimated Cost: ${cost}</div>}
    </div>
  );
}