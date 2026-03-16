export default function BestTime({ months, highlights }) {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Best Time to Visit</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100">
          <div className="text-5xl mb-6">⛅</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Ideal Season</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {months.map(monthRange => (
              <span key={monthRange} className="bg-white px-4 py-2 rounded-xl text-purple-700 font-bold shadow-sm border border-purple-100">
                {monthRange}
              </span>
            ))}
          </div>
          <p className="mt-6 text-slate-700 leading-relaxed">
            The climate during these months offers the perfect balance of comfortable temperatures and clear skies, making it ideal for sightseeing and outdoor activities.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">✨</span> Season Highlights
          </h3>
          <ul className="space-y-4">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{highlight.title}</h4>
                  <p className="text-slate-600 text-sm mt-1">{highlight.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
