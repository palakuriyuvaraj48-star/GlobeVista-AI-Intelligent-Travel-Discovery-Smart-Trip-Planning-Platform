import { useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Input from '../components/ui/Input'

export default function AIPlannerPage() {
  const [destination, setDestination] = useState('')
  const [duration, setDuration] = useState('')
  const [budget, setBudget] = useState('')
  const [preferences, setPreferences] = useState('')
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(false)

  const handlePlan = async () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setPlan({
        destination,
        duration,
        budget,
        itinerary: [
          'Day 1: Arrival & City Tour',
          'Day 2: Main Attractions',
          'Day 3: Cultural Experiences',
          'Day 4: Day Trip',
          'Day 5: Departure'
        ],
        tips: [
          'Book accommodations early',
          'Try local cuisine',
          'Use public transport',
          'Learn basic phrases'
        ]
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <Container>
      <Section
        title="AI Trip Planner"
        subtitle="Let AI create your perfect itinerary"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">Tell us about your trip</h3>
            <div className="space-y-4">
              <Input
                placeholder="Where do you want to go?"
                value={destination}
                onChange={e => setDestination(e.target.value)}
              />
              <Input
                placeholder="How many days?"
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />
              <Input
                placeholder="What's your budget?"
                value={budget}
                onChange={e => setBudget(e.target.value)}
              />
              <textarea
                className="w-full p-3 border border-gray-200 rounded-xl"
                rows={4}
                placeholder="Any preferences? (activities, food, transport...)"
                value={preferences}
                onChange={e => setPreferences(e.target.value)}
              />
              <Button onClick={handlePlan} disabled={loading} className="w-full">
                {loading ? 'Generating...' : 'Generate Itinerary'}
              </Button>
            </div>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">Your AI-Generated Plan</h3>
            {plan ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">📍 {plan.destination}</h4>
                  <p className="text-sm text-gray-600">{plan.duration} • Budget: {plan.budget}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">📅 Itinerary</h4>
                  <ul className="space-y-1">
                    {plan.itinerary.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">💡 Tips</h4>
                  <ul className="space-y-1">
                    {plan.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-600">• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-center py-12">
                <p>Fill in the details and let our AI create a personalized travel plan just for you.</p>
                <p className="mt-2">Get recommendations for attractions, restaurants, and activities based on your preferences.</p>
              </div>
            )}
          </Card>
        </div>
      </Section>
    </Container>
  )
}
