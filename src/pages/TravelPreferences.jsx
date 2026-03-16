import Container from '../components/ui/Container'

export default function TravelPreferences() {
  return (
    <Container className="py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 border-b pb-4">My Travel Preferences</h1>
        <p className="mt-4 text-lg text-slate-600">Customize your profile so we can recommend the perfect trips.</p>
      </div>

      <div className="max-w-3xl space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h3 className="text-xl font-semibold mb-4">Favorite Travel Styles</h3>
          <div className="flex flex-wrap gap-3">
            {['Adventure', 'Relaxation', 'Cultural', 'Nature', 'City Life', 'Historical'].map(style => (
              <label key={style} className="flex items-center gap-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100">
                <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Preferred Accommodation</h3>
          <select className="w-full md:w-1/2 p-3 rounded-lg border border-slate-300">
            <option>Luxury Resort</option>
            <option>Boutique Hotel</option>
            <option>Budget Hostel</option>
            <option>Homestay</option>
          </select>
        </div>

        <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition">
          Save Preferences
        </button>
      </div>
    </Container>
  )
}
