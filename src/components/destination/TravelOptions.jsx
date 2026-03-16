export default function TravelOptions({ options }) {
  const icons = {
    car: '🚗',
    bus: '🚌',
    train: '🚆',
    flight: '✈️'
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Get There</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((option, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-4 border border-slate-100">
              {icons[option.type.toLowerCase()]}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-1">{option.type}</h3>
            <p className="text-slate-500 font-medium text-sm mb-6 bg-slate-50 px-3 py-1 rounded-full">Duration: {option.duration}</p>
            
            <div className="mt-auto w-full pt-4 border-t border-slate-100">
              <div className="text-sm text-slate-500 mb-1">Starting from</div>
              <div className="text-2xl font-black text-slate-900 mb-4">₹{option.price.toLocaleString()}</div>
              <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
