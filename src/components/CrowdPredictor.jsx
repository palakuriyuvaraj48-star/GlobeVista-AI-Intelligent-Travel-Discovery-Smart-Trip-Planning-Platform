import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { getCrowdPrediction } from '../utils/aiEngine'
import Card from './ui/Card'
import Badge from './ui/Badge'

export default function CrowdPredictor({ destination }) {
  const crowdData = useMemo(() => getCrowdPrediction(destination), [destination])

  return (
    <Card className="p-6 border border-slate-200 shadow-sm bg-white rounded-3xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            📊 Crowd Prediction Assistant
          </h3>
          <p className="text-sm text-slate-500 mt-1">Smart visitor congestion estimates & hourly/daily trends</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-600">Current Status:</span>
          <Badge className={`text-sm py-1.5 px-3 border font-semibold ${crowdData.badgeColor}`}>
            {crowdData.current}
          </Badge>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div>
          <span className="font-semibold text-slate-800">💡 Best Time to Visit:</span>
          <span className="ml-2 text-indigo-700 font-bold">{crowdData.bestTime}</span>
        </div>
        <div className="text-xs text-slate-400">
          *Computed from historical visitor patterns, seasonality, and local holiday data
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Hourly Trend */}
        <div className="border border-slate-100 rounded-2xl p-4 bg-white shadow-sm">
          <h4 className="font-semibold text-slate-800 text-sm mb-3">Hourly Congestion Trend</h4>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={crowdData.hourlyTrend}>
                <XAxis dataKey="hour" fontSize={11} stroke="#64748b" tickLine={false} />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  formatter={(value) => [`${value}% congestion`]}
                  contentStyle={{ background: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '12px', border: 'none' }}
                />
                <Bar dataKey="crowd" fill="#818cf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Trend */}
        <div className="border border-slate-100 rounded-2xl p-4 bg-white shadow-sm">
          <h4 className="font-semibold text-slate-800 text-sm mb-3">Daily Congestion Trend</h4>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={crowdData.dailyTrend}>
                <XAxis dataKey="day" fontSize={11} stroke="#64748b" tickLine={false} />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  formatter={(value) => [`${value}% busy`]}
                  contentStyle={{ background: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '12px', border: 'none' }}
                />
                <Bar dataKey="crowd" fill="#f43f5e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Alternative Attractions */}
      <div>
        <h4 className="font-bold text-slate-900 text-sm mb-3">🛡️ Avoid the Crowds - Alternative Attractions</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {crowdData.alternatives.map((alt, index) => (
            <div key={index} className="p-4 border border-slate-100 rounded-2xl bg-indigo-50/50 hover:bg-indigo-50 transition-colors">
              <div className="flex justify-between items-start gap-2 mb-1">
                <span className="font-bold text-slate-800 text-sm">{alt.name}</span>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                  ⭐ {alt.rating}
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-2">{alt.reason}</p>
              <div className="text-xs text-indigo-600 font-medium flex items-center justify-between">
                <span>📍 Distance: {alt.distance}</span>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(alt.name)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Get Directions ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
