import { useState } from 'react';

export default function TravelSafety() {
  const [destination, setDestination] = useState('');
  const [alerts, setAlerts] = useState([]);

  const handleAlert = () => {
    // Dummy alerts
    setAlerts([
      { type: 'Weather', msg: 'Heavy rain warning', color: 'bg-yellow-200' },
      { type: 'Safety', msg: 'Pickpocket advisory', color: 'bg-red-200' },
      { type: 'Visa', msg: 'Visa required for entry', color: 'bg-blue-200' },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Travel Safety Alerts</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
        <button onClick={handleAlert} className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:bg-indigo-700 transition">Get Alerts</button>
      </div>
      <div className="mt-8 grid gap-4">
        {alerts.map((alert, idx) => (
          <div key={idx} className={`rounded-xl shadow-md p-4 ${alert.color} hover:bg-indigo-50 transition`}>
            <div className="font-bold text-lg mb-2">{alert.type} Alert</div>
            <div>{alert.msg}</div>
          </div>
        ))}
      </div>
    </div>
  );
}