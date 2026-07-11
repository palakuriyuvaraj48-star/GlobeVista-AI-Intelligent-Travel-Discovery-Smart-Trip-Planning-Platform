import { useState } from 'react'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { getWeatherData } from '../utils/aiEngine'

export default function WeatherAssistant() {
  const [city, setCity] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [weather, setWeather] = useState(null)

  const handleSearch = () => {
    if (!city.trim()) return
    const data = getWeatherData(city)
    setWeather(data)
    setSearchCity(city)
  }

  return (
    <Container className="py-12 max-w-5xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">🌦️ Smart Weather Assistant</h1>
        <p className="text-lg text-slate-600">Get live updates, UV index, Air Quality details, and smart clothing recommendations for any city.</p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-8 max-w-2xl mx-auto">
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Search destination (e.g. Paris, Goa, Bali)..." 
            className="flex-1 p-3 rounded-xl border border-slate-300 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium text-sm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch()
            }}
          />
          <button 
            onClick={handleSearch}
            className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition shadow-md"
          >
            Check Forecast
          </button>
        </div>
      </div>

      {weather && (
        <div className="space-y-8 animate-fadeIn">
          {/* Main Weather Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute right-4 top-4 text-7xl opacity-35">
                {weather.condition.toLowerCase().includes('sunny') ? '☀️' : weather.condition.toLowerCase().includes('rain') ? '🌧️' : '⛅'}
              </div>
              
              <div>
                <Badge className="bg-white/20 text-white border-none font-bold text-xs mb-2">Live Conditions</Badge>
                <h3 className="text-4xl font-extrabold capitalize">{searchCity}</h3>
                <p className="text-lg mt-1 font-semibold">{weather.condition}</p>
              </div>

              <div className="flex justify-between items-end mt-6">
                <span className="text-5xl font-light">{weather.temp}</span>
                <span className="text-sm opacity-90 font-medium">Updated: Just Now</span>
              </div>
            </Card>

            {/* AI Advisory Panel */}
            <Card className="p-6 bg-purple-50 border border-purple-100 rounded-3xl flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-purple-950 text-sm mb-3">🤖 AI Weather Recommendations</h4>
                <div className="space-y-3.5 text-xs text-purple-900 font-medium leading-relaxed">
                  <div>
                    <span className="font-extrabold block text-[10px] text-purple-500 uppercase tracking-wider">👕 Clothing & Gear:</span>
                    {weather.clothing}
                  </div>
                  <div>
                    <span className="font-extrabold block text-[10px] text-purple-500 uppercase tracking-wider">⏰ Best Sightseeing Hours:</span>
                    {weather.hours}
                  </div>
                  {weather.warning && (
                    <div className="text-red-700 bg-red-50 p-2 rounded-lg border border-red-100">
                      <span className="font-bold block text-[10px] text-red-500 uppercase tracking-wider">⚠️ Alerts:</span>
                      {weather.warning}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Details KPI Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { label: 'UV Index', val: `${weather.uvIndex} / 10`, desc: weather.uvIndex >= 7 ? '⚠️ Very High' : 'Normal' },
              { label: 'Air Quality (AQI)', val: weather.aqi, desc: weather.aqi <= 50 ? '🟢 Excellent' : 'Moderate' },
              { label: 'Humidity', val: `${weather.humidity}%`, desc: 'Relative level' },
              { label: 'Wind Speed', val: weather.wind, desc: 'Steady breeze' },
              { label: 'Rain Probability', val: weather.rainProb, desc: 'Likelihood' },
              { label: 'Sunrise / Sunset', val: 'Sunrise', desc: weather.sunrise }
            ].map((kpi, idx) => (
              <Card key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl text-center shadow-xs">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">{kpi.label}</span>
                <span className="text-lg font-bold text-slate-800 mt-2 block">{kpi.val}</span>
                <span className="text-xs text-slate-500 mt-1 block font-medium">{kpi.desc}</span>
              </Card>
            ))}
          </div>

          {/* 5-Day Forecast Grid */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">5-Day Weather Forecast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {weather.forecast.map((f, idx) => (
                <Card key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl text-center shadow-xs hover:border-purple-200 transition-colors">
                  <span className="font-bold text-slate-700 text-sm block">{f.day}</span>
                  <span className="text-3xl my-3 block">
                    {f.condition.toLowerCase().includes('sunny') ? '☀️' : f.condition.toLowerCase().includes('rain') ? '🌧️' : '⛅'}
                  </span>
                  <span className="text-lg font-semibold text-slate-900 block">{f.temp}</span>
                  <span className="text-xs text-slate-500 mt-1 block font-medium">{f.condition}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Travel Advisories */}
          <Card className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
            <h4 className="font-bold text-slate-800 text-sm mb-2">🚗 Safe Travel Advisory</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">{weather.safeTravel}</p>
          </Card>
        </div>
      )}

      {!weather && (
        <div className="text-center py-16 text-slate-400">
          <span className="text-6xl block mb-4 animate-bounce">🌦️</span>
          Enter a destination above to see weather intelligence.
        </div>
      )}
    </Container>
  )
}
