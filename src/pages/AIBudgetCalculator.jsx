import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'

export default function AIBudgetCalculator() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [budgetData, setBudgetData] = useState({
    destination: '',
    duration: '',
    travelers: '2',
    accommodation: 'mid',
    transport: 'mid',
    food: 'mid',
    activities: 'mid',
    totalBudget: ''
  })
  const [calculation, setCalculation] = useState(null)
  const [loading, setLoading] = useState(false)

  const accommodationOptions = [
    { id: 'budget', name: 'Budget', dailyRate: 1500, multiplier: 0.7 },
    { id: 'mid', name: 'Mid-range', dailyRate: 3500, multiplier: 1 },
    { id: 'luxury', name: 'Luxury', dailyRate: 8000, multiplier: 2 }
  ]

  const transportOptions = [
    { id: 'budget', name: 'Public Transport', multiplier: 0.5 },
    { id: 'mid', name: 'Rideshare/Taxi', multiplier: 1 },
    { id: 'luxury', name: 'Private Car', multiplier: 2 }
  ]

  const foodOptions = [
    { id: 'budget', name: 'Street Food/Casual', dailyRate: 800, multiplier: 0.6 },
    { id: 'mid', name: 'Mid-range Restaurants', dailyRate: 1500, multiplier: 1 },
    { id: 'luxury', name: 'Fine Dining', dailyRate: 3000, multiplier: 2 }
  ]

  const activityOptions = [
    { id: 'budget', name: 'Free/Low-cost Activities', dailyRate: 500, multiplier: 0.5 },
    { id: 'mid', name: 'Mixed Activities', dailyRate: 1500, multiplier: 1 },
    { id: 'luxury', name: 'Premium Experiences', dailyRate: 4000, multiplier: 2.5 }
  ]

  const calculateBudget = async () => {
    setLoading(true)
    
    // Simulate AI calculation
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const days = parseInt(budgetData.duration)
    const travelers = parseInt(budgetData.travelers)
    
    const accommodation = accommodationOptions.find(opt => opt.id === budgetData.accommodation)
    const transport = transportOptions.find(opt => opt.id === budgetData.transport)
    const food = foodOptions.find(opt => opt.id === budgetData.food)
    const activities = activityOptions.find(opt => opt.id === budgetData.activities)
    
    const accommodationCost = accommodation.dailyRate * days * travelers
    const transportCost = 2000 * transport.multiplier * travelers
    const foodCost = food.dailyRate * days * travelers
    const activitiesCost = activities.dailyRate * days * travelers
    const miscellaneousCost = (accommodationCost + transportCost + foodCost + activitiesCost) * 0.15
    
    const totalCost = accommodationCost + transportCost + foodCost + activitiesCost + miscellaneousCost
    
    const result = {
      destination: budgetData.destination,
      duration: days,
      travelers,
      breakdown: {
        accommodation: accommodationCost,
        transport: transportCost,
        food: foodCost,
        activities: activitiesCost,
        miscellaneous: miscellaneousCost
      },
      totalCost,
      perPerson: totalCost / travelers,
      budgetStatus: budgetData.totalBudget ? (totalCost <= parseInt(budgetData.totalBudget) ? 'within' : 'exceeds') : null,
      recommendations: [
        'Book flights 2-3 months in advance for better rates',
        'Consider staying in hostels or Airbnb for budget accommodation',
        'Eat at local restaurants for authentic and affordable meals',
        'Use public transport passes for unlimited travel',
        'Look for free walking tours and city attractions',
        'Travel during off-peak seasons for lower prices'
      ],
      savingsTips: [
        'Cook some meals instead of eating out every time',
        'Use travel apps for discounts and deals',
        'Consider travel insurance to avoid unexpected costs',
        'Pack light to avoid baggage fees',
        'Stay in locations slightly outside city centers'
      ]
    }
    
    setCalculation(result)
    setLoading(false)
  }

  const saveCalculation = () => {
    const savedCalculations = JSON.parse(localStorage.getItem('budgetCalculations') || '[]')
    savedCalculations.push({
      ...calculation,
      id: Date.now(),
      createdAt: new Date().toISOString()
    })
    localStorage.setItem('budgetCalculations', JSON.stringify(savedCalculations))
    navigate('/saved-trips')
  }

  return (
    <Container>
      <Section
        title="AI Budget Calculator"
        subtitle="Plan your trip expenses with intelligent budget optimization"
      >
        {!calculation ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Calculate Your Trip Budget</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <Input
                    placeholder="Where are you going?"
                    value={budgetData.destination}
                    onChange={(e) => setBudgetData(prev => ({ ...prev, destination: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Days)</label>
                    <Input
                      type="number"
                      placeholder="Number of days"
                      value={budgetData.duration}
                      onChange={(e) => setBudgetData(prev => ({ ...prev, duration: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                    <select
                      value={budgetData.travelers}
                      onChange={(e) => setBudgetData(prev => ({ ...prev, travelers: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Style</label>
                  <div className="grid grid-cols-3 gap-2">
                    {accommodationOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setBudgetData(prev => ({ ...prev, accommodation: option.id }))}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          budgetData.accommodation === option.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <div className="font-medium">{option.name}</div>
                        <div className="text-xs opacity-75">₹{option.dailyRate}/day</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transportation</label>
                  <div className="grid grid-cols-3 gap-2">
                    {transportOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setBudgetData(prev => ({ ...prev, transport: option.id }))}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          budgetData.transport === option.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <div className="font-medium">{option.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Food Preferences</label>
                  <div className="grid grid-cols-3 gap-2">
                    {foodOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setBudgetData(prev => ({ ...prev, food: option.id }))}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          budgetData.food === option.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <div className="font-medium">{option.name}</div>
                        <div className="text-xs opacity-75">₹{option.dailyRate}/day</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Activities & Entertainment</label>
                  <div className="grid grid-cols-3 gap-2">
                    {activityOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setBudgetData(prev => ({ ...prev, activities: option.id }))}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          budgetData.activities === option.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <div className="font-medium">{option.name}</div>
                        <div className="text-xs opacity-75">₹{option.dailyRate}/day</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Budget (Optional)</label>
                  <Input
                    type="number"
                    placeholder="Enter your total budget"
                    value={budgetData.totalBudget}
                    onChange={(e) => setBudgetData(prev => ({ ...prev, totalBudget: e.target.value }))}
                  />
                </div>

                <Button
                  onClick={calculateBudget}
                  disabled={!budgetData.destination || !budgetData.duration || loading}
                  className="w-full"
                >
                  {loading ? 'Calculating...' : 'Calculate Budget'}
                </Button>
              </div>
            </Card>

            {/* Budget Tips */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Smart Budget Tips</h3>
                <div className="space-y-3">
                  {[
                    'Set aside 15-20% for unexpected expenses',
                    'Track daily spending to stay within budget',
                    'Use travel reward points and credit card benefits',
                    'Book accommodation with kitchen facilities',
                    'Research free attractions and activities'
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">💡</span>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cost-Saving Strategies</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Travel Off-Season</h4>
                      <p className="text-sm text-gray-600">Save up to 40% on flights and hotels</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">High Impact</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Stay Outside City Center</h4>
                      <p className="text-sm text-gray-600">Lower accommodation costs</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Medium Impact</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Pack Light</h4>
                      <p className="text-sm text-gray-600">Avoid baggage fees</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Low Impact</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          /* Budget Calculation Results */
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Your Budget Breakdown</h3>
              <p className="text-xl mb-4">{calculation.destination} • {calculation.duration} days • {calculation.travelers} travelers</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold">₹{calculation.totalCost.toLocaleString()}</div>
                  <div className="text-sm opacity-90">Total Cost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₹{calculation.perPerson.toLocaleString()}</div>
                  <div className="text-sm opacity-90">Per Person</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₹{Math.round(calculation.totalCost / calculation.duration).toLocaleString()}</div>
                  <div className="text-sm opacity-90">Per Day</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {calculation.budgetStatus === 'within' ? '✓' : '⚠️'}
                  </div>
                  <div className="text-sm opacity-90">
                    {calculation.budgetStatus === 'within' ? 'Within Budget' : 'Exceeds Budget'}
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-xl font-semibold mb-4">Expense Breakdown</h4>
                <div className="space-y-3">
                  {Object.entries(calculation.breakdown).map(([category, cost]) => (
                    <div key={category} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-600 rounded"></div>
                        <span className="capitalize">{category}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">₹{cost.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">{Math.round((cost / calculation.totalCost) * 100)}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-xl font-semibold mb-4">AI Recommendations</h4>
                <div className="space-y-2">
                  {calculation.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">🎯</span>
                      <span className="text-gray-700 text-sm">{rec}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-4">Additional Savings Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {calculation.savingsTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">💰</span>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex gap-4">
              <Button onClick={saveCalculation} className="flex-1">
                Save Budget Plan
              </Button>
              <Button variant="ghost" onClick={() => navigate('/booking')} className="flex-1">
                Start Booking
              </Button>
              <Button variant="ghost" onClick={() => {
                setCalculation(null)
                setBudgetData({
                  destination: '',
                  duration: '',
                  travelers: '2',
                  accommodation: 'mid',
                  transport: 'mid',
                  food: 'mid',
                  activities: 'mid',
                  totalBudget: ''
                })
              }} className="flex-1">
                Calculate Another
              </Button>
            </div>
          </div>
        )}
      </Section>
    </Container>
  )
}
