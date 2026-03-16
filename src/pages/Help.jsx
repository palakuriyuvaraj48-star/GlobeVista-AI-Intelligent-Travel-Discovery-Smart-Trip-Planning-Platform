import Container from '../components/ui/Container'

export default function Help() {
  const faqs = [
    {
      q: "How do I book a hotel?",
      a: "Simply navigate to the Hotels page, search for your destination, and click 'Book Now' on any of the hotel cards. Follow the secure payment process to confirm your stay."
    },
    {
      q: "Can I cancel my trip itinerary?",
      a: "Yes, you can edit or delete your saved AI itineraries from your Dashboard or the Saved Trips section at any time."
    },
    {
      q: "Are the prices shown all-inclusive?",
      a: "Prices usually include base taxes, but some properties or transport options may have local fees collected at the destination. Always check the final booking page for a detailed breakdown."
    }
  ]

  return (
    <Container className="py-12 max-w-3xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Help & Support</h1>
        <p className="text-lg text-slate-600">Find answers to common questions about using GlobeVista.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-6 hover:bg-slate-50 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
            <p className="text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center bg-purple-50 p-8 rounded-2xl border border-purple-100">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Still need help?</h3>
        <p className="text-slate-600 mb-6">Our support team is available 24/7 to assist you with any travel problems.</p>
        <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition">
          Contact Support
        </button>
      </div>
    </Container>
  )
}