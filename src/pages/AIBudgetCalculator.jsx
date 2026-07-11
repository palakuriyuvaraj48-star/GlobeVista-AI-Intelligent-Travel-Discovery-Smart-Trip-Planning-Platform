import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { getEcoData } from '../utils/aiEngine'

export default function AIBudgetCalculator() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [budgetData, setBudgetData] = useState({
    destination: '',
    duration: '5',
    travelers: '2',
    accommodation: 'mid',
    transport: 'mid',
    food: 'mid',
    attractionsCost: '3000',
    shoppingCost: '4000',
    fuelCost: '1500',
    parkingCost: '500',
    emergencyFund: '2000',
    totalBudget: '35000'
  })
  const [calculation, setCalculation] = useState(null)
  const [loading, setLoading] = useState(false)

  const accommodationOptions = [
    { id: 'budget', name: 'Budget Hotel / Hostel', dailyRate: 1200, carbon: 8 },
    { id: 'mid', name: 'Mid-range Hotel', dailyRate: 3000, carbon: 15 },
    { id: 'luxury', name: 'Luxury Resort (Green Leaf Certified 🍃)', dailyRate: 7500, carbon: 25 }
  ]

  const transportOptions = [
    { id: 'budget', name: 'Public Transit (Bus/Metro)', multiplier: 0.3, carbon: 4 },
    { id: 'mid', name: 'Taxi / Rideshare', multiplier: 1.0, carbon: 22 },
    { id: 'luxury', name: 'Private Rental Car', multiplier: 1.8, carbon: 35 }
  ]

  const foodOptions = [
    { id: 'budget', name: 'Local Cafes / Street Food', dailyRate: 600 },
    { id: 'mid', name: 'Mid-range Dine-out', dailyRate: 1300 },
    { id: 'luxury', name: 'Fine Dining / Eco-Restaurants', dailyRate: 2500 }
  ]

  const calculateBudget = async () => {
    setLoading(true)
    
    // Simulate AI calculation
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    const days = parseInt(budgetData.duration) || 3
    const travelers = parseInt(budgetData.travelers) || 1
    
    const accommodation = accommodationOptions.find(opt => opt.id === budgetData.accommodation)
    const transport = transportOptions.find(opt => opt.id === budgetData.transport)
    const food = foodOptions.find(opt => opt.id === budgetData.food)
    
    const hotelTotal = accommodation.dailyRate * days * travelers
    const foodTotal = food.dailyRate * days * travelers
    
    // Transport computation: base transportation card cost + fuel + parking
    const transBase = 1500 * transport.multiplier * travelers
    const fuel = parseFloat(budgetData.fuelCost) || 0
    const parking = parseFloat(budgetData.parkingCost) || 0
    const transportTotal = transBase + fuel + parking

    const attractionsTotal = (parseFloat(budgetData.attractionsCost) || 0) * travelers
    const shoppingTotal = parseFloat(budgetData.shoppingCost) || 0
    const emergencyTotal = parseFloat(budgetData.emergencyFund) || 0
    
    const subtotal = hotelTotal + foodTotal + transportTotal + attractionsTotal + shoppingTotal + emergencyTotal
    const taxes = subtotal * 0.12 // 12% GST/tourism tax

    const totalCost = subtotal + taxes
    const perPerson = totalCost / travelers
    const dailySpending = totalCost / days

    // Carbon computation (Feature 16)
    const transportCarbon = transport.carbon * days * travelers
    const hotelCarbon = accommodation.carbon * days * travelers
    const totalCarbon = transportCarbon + hotelCarbon

    // Eco score calculation: 100 - carbon penalties
    let ecoScore = 95 - (transport.id === 'luxury' ? 25 : transport.id === 'mid' ? 10 : 0) - (accommodation.id === 'mid' ? 5 : accommodation.id === 'luxury' ? 0 : 10)
    
    // Retrieve green alternatives from engine
    const ecoMeta = getEcoData(budgetData.destination)

    const budgetGoal = parseFloat(budgetData.totalBudget) || 0
    let budgetUtilization = 0
    if (budgetGoal > 0) {
      budgetUtilization = Math.round((totalCost / budgetGoal) * 100)
    }

    const result = {
      destination: budgetData.destination || 'Goa',
      duration: days,
      travelers,
      totalBudget: budgetGoal,
      breakdown: {
        hotels: hotelTotal,
        food: foodTotal,
        transport: transBase,
        fuel: fuel,
        parking: parking,
        attractions: attractionsTotal,
        shopping: shoppingTotal,
        emergency: emergencyTotal,
        taxes: taxes
      },
      totalCost,
      perPerson,
      dailySpending,
      budgetUtilization,
      budgetStatus: budgetGoal ? (totalCost <= budgetGoal ? 'within' : 'exceeds') : null,
      carbon: totalCarbon,
      ecoScore,
      ecoBadge: ecoScore > 80 ? '🍃 Platinum Eco Rating' : ecoScore > 65 ? '🍃 Gold Eco Rating' : '🍃 Silver Eco Rating',
      ecoAlternatives: ecoMeta.alternatives,
      recommendations: [
        `Save ₹${Math.round(fuel * 0.5)} on fuel by booking eco-friendly hybrid rental vehicles.`,
        'Taxes account for 12% of your budget. Book hotels in advance to claim early pricing credits.',
        'Choose local street food/diners for lunch to reduce food cost by up to 30%.',
        'Look out for free entry hours at local museums & attractions.'
      ],
      savingsTips: [
        'Travel during weekdays to cut hotel rates by 25%.',
        'Use city tourist transport passes for unlimited bus and metro rides.',
        'Choose a home-stay/hostel for accommodation to save up to 40% on room charges.',
        'Limit premium brand shopping; seek out local heritage flea markets.'
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
        subtitle="Estimate trip expenses, optimize budgets, and check your travel carbon footprint"
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
                    placeholder="Where are you going? (e.g. Goa, Paris, Bali)"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                    <select
                      value={budgetData.travelers}
                      onChange={(e) => setBudgetData(prev => ({ ...prev, travelers: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ People</option>
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
                        <div className="font-semibold text-xs sm:text-sm">{option.name.split(' (')[0]}</div>
                        <div className="text-xs opacity-75">₹{option.dailyRate}/day</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transportation Style</label>
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
                        <div className="font-semibold text-xs sm:text-sm">{option.name.split(' (')[0]}</div>
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
                        <div className="font-semibold text-xs sm:text-sm">{option.name.split(' /')[0]}</div>
                        <div className="text-xs opacity-75">₹{option.dailyRate}/day</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional detailed budget fields */}
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">Attractions (₹ / Person)</label>
                    <Input
                      type="number"
                      value={budgetData.attractionsCost}
                      onChange={(e) => setBudgetData(prev => ({ ...prev, attractionsCost: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">Shopping (Total ₹)</label>
                    <Input
                      type="number"
                      value={budgetData.shoppingCost}
                      onChange={(e) => setBudgetData(prev => ({ ...prev, shoppingCost: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500 mb-1">Fuel (₹)</label>
                    <input
                      type="number"
                      className="w-full px-2 py-1.5 border border-gray-300 rounded-lg text-sm"
                      value={budgetData.fuelCost}
                      onChange={(e) => setBudgetData(prev => ({ ...prev, fuelCost: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500 mb-1">Parking (₹)</label>
                    <input
                      type="number"
                      className="w-full px-2 py-1.5 border border-gray-300 rounded-lg text-sm"
                      value={budgetData.parkingCost}
                      onChange={(e) => setBudgetData(prev => ({ ...prev, parkingCost: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500 mb-1">Emergency Fund (₹)</label>
                    <input
                      type="number"
                      className="w-full px-2 py-1.5 border border-gray-300 rounded-lg text-sm"
                      value={budgetData.emergencyFund}
                      onChange={(e) => setBudgetData(prev => ({ ...prev, emergencyFund: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Budget Target (₹)</label>
                  <Input
                    type="number"
                    placeholder="Enter your target budget"
                    value={budgetData.totalBudget}
                    onChange={(e) => setBudgetData(prev => ({ ...prev, totalBudget: e.target.value }))}
                  />
                </div>

                <Button
                  onClick={calculateBudget}
                  disabled={!budgetData.destination || !budgetData.duration || loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {loading ? 'Running AI Budget optimization...' : 'Optimize Travel Budget'}
                </Button>
              </div>
            </Card>

            {/* Budget tips sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Smart Budget Intelligence</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex gap-2">
                    <span>💡</span>
                    <p>We automatically factor in a 12% standard GST/local tourism tax on accommodations, dining, and transit options.</p>
                  </div>
                  <div className="flex gap-2">
                    <span>🍃</span>
                    <p>A green score is computed to help you choose low-carbon transit methods (busses, metros, walking) and green hotels.</p>
                  </div>
                  <div className="flex gap-2">
                    <span>🛡️</span>
                    <p>Setting aside an emergency fund (15% recommended) ensures you have support for unexpected tickets or taxi needs.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          /* Budget Calculation Results */
          <div className="space-y-8 animate-fadeIn">
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Your Budget Breakdown</h3>
              <p className="text-xl mb-4">{calculation.destination} • {calculation.duration} days • {calculation.travelers} travelers</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">₹{calculation.totalCost.toLocaleString('en-IN')}</div>
                  <div className="text-sm opacity-90">Total Trip Cost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₹{Math.round(calculation.perPerson).toLocaleString('en-IN')}</div>
                  <div className="text-sm opacity-90">Cost Per Traveler</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₹{Math.round(calculation.dailySpending).toLocaleString('en-IN')}</div>
                  <div className="text-sm opacity-90 font-medium text-yellow-300">Daily Spending</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {calculation.totalBudget > 0 ? `${calculation.budgetUtilization}%` : 'N/A'}
                  </div>
                  <div className="text-sm opacity-90">Budget Utilization</div>
                </div>
              </div>

              {calculation.totalBudget > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between text-xs mb-1 font-semibold">
                    <span>Utilization Progress</span>
                    <span>{calculation.totalCost <= calculation.totalBudget ? '✓ Within Budget Goal' : '⚠️ Target Exceeded!'}</span>
                  </div>
                  <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${calculation.totalCost <= calculation.totalBudget ? 'bg-green-400' : 'bg-red-400'}`} 
                      style={{ width: `${Math.min(100, calculation.budgetUtilization)}%` }} 
                    />
                  </div>
                </div>
              )}
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Breakdown list */}
              <Card className="p-6 bg-white border border-slate-200 rounded-3xl md:col-span-2">
                <h4 className="text-xl font-semibold mb-4">Detailed Itemized Expenses</h4>
                <div className="space-y-3.5">
                  {[
                    { key: 'Hotels & Lodging', val: calculation.breakdown.hotels },
                    { key: 'Food & Dining', val: calculation.breakdown.food },
                    { key: 'Transport Base', val: calculation.breakdown.transport },
                    { key: 'Fuel Charges', val: calculation.breakdown.fuel },
                    { key: 'Parking Fees', val: calculation.breakdown.parking },
                    { key: 'Attractions Entry', val: calculation.breakdown.attractions },
                    { key: 'Shopping Fund', val: calculation.breakdown.shopping },
                    { key: 'Emergency Reserves', val: calculation.breakdown.emergency },
                    { key: 'GST & Local Taxes (12%)', val: calculation.breakdown.taxes }
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 font-medium">{item.key}</span>
                      <span className="font-semibold text-slate-900">₹{Math.round(item.val).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Eco Travel Metrics */}
              <Card className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🍃</span>
                  <h4 className="text-lg font-bold text-emerald-950">Eco-Friendly Travel Score</h4>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-emerald-100/50 shadow-xs mb-4 text-center">
                  <div className="text-4xl font-extrabold text-emerald-700">{calculation.ecoScore} / 100</div>
                  <Badge className="bg-emerald-100 text-emerald-800 border-none mt-2 font-bold text-xs">{calculation.ecoBadge}</Badge>
                </div>
                <div className="space-y-3 text-xs text-emerald-800">
                  <div>
                    <span className="font-bold">Estimated Carbon footprint:</span>
                    <p className="mt-0.5 font-medium">{calculation.carbon} kg CO2 total</p>
                  </div>
                  <div>
                    <span className="font-bold">Greener Suggestions:</span>
                    <p className="mt-0.5 leading-relaxed font-medium">{calculation.ecoAlternatives}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border border-slate-200 rounded-3xl">
                <h4 className="text-lg font-bold text-slate-800 mb-3">🛡️ AI Recommendations</h4>
                <div className="space-y-2">
                  {calculation.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-purple-600 font-bold">🎯</span>
                      <span className="text-slate-700 leading-relaxed">{rec}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-white border border-slate-200 rounded-3xl">
                <h4 className="text-lg font-bold text-slate-800 mb-3">💰 Additional Savings Tips</h4>
                <div className="space-y-2">
                  {calculation.savingsTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-slate-700 leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Feature 4: Dynamic Budget Tracker & AI Predictor */}
            <Card className="p-6 bg-slate-900 text-white border border-slate-800 rounded-3xl space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <Badge className="bg-purple-900/60 text-purple-200 border-none font-bold text-[9px] mb-1">💸 AI Expense Predictor</Badge>
                  <h4 className="font-extrabold text-base">Dynamic Expense & Budget Tracker</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Planned Budget: ₹{calculation.totalCost.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-slate-400 block">Target Cap: ₹{calculation.totalBudget ? parseInt(calculation.totalBudget).toLocaleString('en-IN') : 'N/A'}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-semibold">
                <div className="space-y-2 bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <span className="text-slate-400 block">Actual Spend So Far:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300">₹</span>
                    <input 
                      type="number" 
                      defaultValue="18500" 
                      className="bg-transparent border-none text-white outline-none font-bold text-sm w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2 bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <span className="text-slate-400 block">AI Predicted Final Cost:</span>
                  <span className="text-sm font-extrabold text-yellow-400 block">₹{Math.round(calculation.totalCost * 1.08).toLocaleString('en-IN')}</span>
                  <span className="text-[9px] text-red-400 block">⚠️ Warning: Likely to exceed planned cost by 8% due to high shopping activity.</span>
                </div>

                <div className="space-y-2 bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <span className="text-slate-400 block">Remaining Under Cap:</span>
                  <span className="text-sm font-extrabold text-emerald-400 block">
                    {calculation.totalBudget > 0 ? `₹${(parseInt(calculation.totalBudget) - 18500).toLocaleString('en-IN')}` : 'N/A'}
                  </span>
                  <span className="text-[9px] text-slate-400 block font-bold">Cap remains positive.</span>
                </div>
              </div>

              <div className="p-3 bg-purple-950/40 border border-purple-900/60 rounded-2xl text-xs text-purple-200 font-medium leading-relaxed">
                💡 <strong>AI Cost Saving Advice:</strong> Reduce activities spending by booking combined monument passes (saves ₹750) and swap private taxi transfers to public electric shuttle services (saves ₹1,200).
              </div>
            </Card>

            <div className="flex gap-4">
              <Button onClick={saveCalculation} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                Save Budget Plan
              </Button>
              <Button variant="ghost" onClick={() => navigate('/booking')} className="flex-1 border border-slate-200">
                Start Booking Stays
              </Button>
              <Button variant="ghost" onClick={() => {
                setCalculation(null)
                setBudgetData({
                  destination: '',
                  duration: '5',
                  travelers: '2',
                  accommodation: 'mid',
                  transport: 'mid',
                  food: 'mid',
                  attractionsCost: '3000',
                  shoppingCost: '4000',
                  fuelCost: '1500',
                  parkingCost: '500',
                  emergencyFund: '2000',
                  totalBudget: '35000'
                })
              }} className="flex-1 border border-slate-200">
                Calculate Another
              </Button>
            </div>
          </div>
        )}
      </Section>
    </Container>
  )
}
