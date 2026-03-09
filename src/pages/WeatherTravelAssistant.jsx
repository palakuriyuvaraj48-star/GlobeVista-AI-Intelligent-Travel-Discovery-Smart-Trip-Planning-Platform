import { useState } from 'react';

export default function WeatherTravelAssistant() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleFetch = () => {
    // Dummy weather data
    setWeather({ temp: 24, condition: 'Sunny', forecast: [24, 23, 22, 21, 20, 19, 18], bestSeason: 'Spring' });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Weather Travel Assistant</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Destination City" value={city} onChange={e => setCity(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md" />
        <button onClick={handleFetch} className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:bg-indigo-700 transition">Get Weather</button>
      </div>
      {weather && (
        <div className="rounded-xl shadow-md p-4 mt-6">
          <div className="font-bold text-lg mb-2">Current: {weather.temp}°C, {weather.condition}</div>
          <div>Best Travel Season: {weather.bestSeason}</div>
          <div className="mt-2">7 Day Forecast: {weather.forecast.join(', ')}°C</div>
        </div>
      )}
    </div>
  );
}