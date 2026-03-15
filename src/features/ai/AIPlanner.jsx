import { useState } from 'react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

export default function AIPlanner() {
  const [destination, setDestination] = useState('')
  const [duration, setDuration] = useState('')
  const [budget, setBudget] = useState('')
  const [preferences, setPreferences] = useState('')

  const handlePlan = () => {
    console.log({ destination, duration, budget, preferences })
  }

  return (
    <Container>
      <Section title="AI Trip Planner" subtitle="Let AI create your perfect itinerary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <Button onClick={handlePlan} className="w-full">Generate Itinerary</Button>
            </div>
          </Card>
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">Your AI-Generated Plan</h3>
            <div className="space-y-4 text-gray-600">
              <p>Fill in the details and let our AI create a personalized travel plan just for you.</p>
              <p>Get recommendations for attractions, restaurants, and activities based on your preferences.</p>
            </div>
          </Card>
        </div>
      </Section>
    </Container>
  )
}
