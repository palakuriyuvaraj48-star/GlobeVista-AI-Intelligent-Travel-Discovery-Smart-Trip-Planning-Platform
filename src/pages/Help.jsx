import Hero from '../components/Hero'
import Card from '../components/Card'

export default function Help() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1499696016275-7f5424ccb65f?w=1920"
        title="Help & Support"
        subtitle="Frequently asked questions and assistance"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8 opacity-0 animate-fadeIn">
          <Card className="p-6">
            <h2 className="text-xl font-semibold">How do I book a hotel?</h2>
            <p className="text-slate-600 mt-2">
              Navigate to the Hotels page, browse our curated list, and select a property. Since this is a static demo,
              click the map button to view location. In a real app you'd be redirected to a booking flow.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold">Can I plan my budget?</h2>
            <p className="text-slate-600 mt-2">
              Use the Budget Planner page to estimate costs by category. Enter days, hotel, food, transport and activity
              expenses and see a breakdown.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold">Is there a voice assistant?</h2>
            <p className="text-slate-600 mt-2">
              Yes! Click the microphone button at the bottom right and ask travel related questions like "Suggest hotel
              in Jaipur" or "Best time to visit Paris".
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}