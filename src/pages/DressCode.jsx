import Container from '../components/ui/Container'

export default function DressCode() {
  return (
    <Container className="py-12 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Travel Dress Codes</h1>
        <p className="text-lg text-slate-600">Cultural and practical guidelines on what to wear during your travels.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-50 rounded-2xl p-8 border border-green-100 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-bold text-xl">✓</span>
            <h2 className="text-2xl font-bold text-slate-900">Do's</h2>
          </div>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Respect local customs</strong> especially when visiting temples or religious sites (cover shoulders and knees).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Wear comfortable clothing</strong> and breathable fabrics like cotton or linen for tropical climates.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Follow local rules</strong> at specific venues (e.g., formal dining requirements).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Bring comfortable walking shoes</strong> because exploring new cities usually involves a lot of walking.</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-2xl p-8 border border-red-100 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white font-bold text-xl">✕</span>
            <h2 className="text-2xl font-bold text-slate-900">Don'ts</h2>
          </div>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Wear disrespectful outfits</strong> bearing offensive language or imagery.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Ignore traditions.</strong> Being oblivious to local conservative dress codes can draw negative attention.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Overdress for outdoor activities.</strong> Keep hiking and adventure gear practical.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Forget layers.</strong> Even hot countries can have heavily air-conditioned transit or cold nights.</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
