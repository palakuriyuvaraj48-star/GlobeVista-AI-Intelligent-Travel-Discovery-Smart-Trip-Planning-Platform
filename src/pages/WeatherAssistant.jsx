import { useState } from 'react'
import Container from '../components/ui/Container'

export default function WeatherAssistant() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const checkWeather = () => {
    setWeather({
      temp: '28°C',
      condition: 'Sunny',
      forecast: 'Clear skies throughout the day. Perfect for sightseeing.',
      bestTime: 'Early morning or late afternoon.'
    })
  }

  return (
    <Container className="py-12 max-w-2xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Weather Assistant</h1>
        <p className="text-lg text-slate-600">Check current conditions and travel forecasts for your destination.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Enter city name..." 
            className="flex-1 p-3 rounded-xl border border-slate-300"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button 
            onClick={checkWeather}
            className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition"
          >
            Check
          </button>
        </div>

        {weather && (
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-slate-900">{city || 'Destination'}</h3>
              <span className="text-4xl font-light text-purple-600">{weather.temp}</span>
            </div>
            <p className="text-lg text-slate-700 font-medium mb-2">{weather.condition}</p>
            <p className="text-slate-600 mb-4">{weather.forecast}</p>
            <div className="bg-white p-4 rounded-lg text-sm text-slate-700">
              <span className="font-bold">💡 Tip:</span> {weather.bestTime}
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
