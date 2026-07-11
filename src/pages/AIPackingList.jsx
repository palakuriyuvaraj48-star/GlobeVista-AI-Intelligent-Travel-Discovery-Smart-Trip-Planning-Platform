import { useState, useEffect } from 'react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

export default function AIPackingList() {
  const [inputs, setInputs] = useState({
    destination: '',
    season: 'summer',
    duration: '5',
    activities: []
  })
  const [packingList, setPackingList] = useState(null)

  const activityOptions = ['Hiking & Trekking', 'Beach & Swimming', 'Fine Dining', 'Sightseeing & Walking', 'Business Meetings', 'Snow Sports']

  const handleActivityToggle = (act) => {
    setInputs(prev => ({
      ...prev,
      activities: prev.activities.includes(act)
        ? prev.activities.filter(a => a !== act)
        : [...prev.activities, act]
    }))
  }

  const generateList = () => {
    // Generate mock packing list items based on inputs
    const durationDays = parseInt(inputs.duration) || 3
    const categories = {
      clothing: [
        { item: `${durationDays + 1}x Underwear & Socks`, packed: false },
        { item: `${Math.min(durationDays, 5)}x Light breathable shirts`, packed: false },
        { item: "2x Casual pants or shorts", packed: false },
        { item: "Comfortable walking shoes", packed: false },
        { item: "Sleepwear", packed: false }
      ],
      electronics: [
        { item: "Mobile phone & Charger", packed: false },
        { item: "Power bank (10,000mAh+)", packed: false },
        { item: "Universal travel adapter plug", packed: false }
      ],
      medicines: [
        { item: "Personal prescription medications", packed: false },
        { item: "Painkillers (Paracetamol/Ibuprofen)", packed: false },
        { item: "Band-aids & antiseptic cream", packed: false },
        { item: "Motion sickness pills", packed: false }
      ],
      documents: [
        { item: "Passport / National ID card", packed: false },
        { item: "Flight tickets & Hotel booking vouchers", packed: false },
        { item: "Drivers license & physical cash", packed: false },
        { item: "Travel insurance copy", packed: false }
      ],
      toiletries: [
        { item: "Toothbrush & Toothpaste", packed: false },
        { item: "Travel size shampoo & body wash", packed: false },
        { item: "Deodorant & Perfume", packed: false },
        { item: "Sunscreen lotion (SPF 50+)", packed: false }
      ],
      accessories: [
        { item: "Sunglasses", packed: false },
        { item: "Refillable water bottle", packed: false },
        { item: "Small travel backpack or sling bag", packed: false }
      ],
      emergency: [
        { item: "Mini flashlight / headlamp", packed: false },
        { item: "Emergency contacts list on paper", packed: false },
        { item: "Whistle & multi-tool key", packed: false }
      ]
    }

    // Dynamic additions
    if (inputs.season === 'winter') {
      categories.clothing.push({ item: "Heavy thermal innerwear", packed: false })
      categories.clothing.push({ item: "Winter coat / Down jacket", packed: false })
      categories.clothing.push({ item: "Woolen beanie, scarf & gloves", packed: false })
    } else if (inputs.season === 'monsoon') {
      categories.accessories.push({ item: "Compact travel umbrella", packed: false })
      categories.clothing.push({ item: "Waterproof windbreaker jacket", packed: false })
    }

    if (inputs.activities.includes('Beach & Swimming')) {
      categories.clothing.push({ item: "2x Swimwear & board shorts", packed: false })
      categories.accessories.push({ item: "Quick-dry microfiber beach towel", packed: false })
      categories.toiletries.push({ item: "Aloevera gel (sunburn relief)", packed: false })
    }

    if (inputs.activities.includes('Hiking & Trekking')) {
      categories.clothing.push({ item: "Sturdy hiking boots / trail runners", packed: false })
      categories.clothing.push({ item: "Moisture-wicking athletic socks", packed: false })
      categories.emergency.push({ item: "Basic first-aid survival kit", packed: false })
    }

    if (inputs.activities.includes('Fine Dining')) {
      categories.clothing.push({ item: "1x Smart-casual / Formal dining outfit", packed: false })
      categories.clothing.push({ item: "Dress shoes or heels", packed: false })
    }

    setPackingList(categories)
  }

  const togglePacked = (categoryKey, idx) => {
    setPackingList(prev => {
      const updated = { ...prev }
      updated[categoryKey] = [...updated[categoryKey]]
      updated[categoryKey][idx] = {
        ...updated[categoryKey][idx],
        packed: !updated[categoryKey][idx].packed
      }
      return updated
    })
  }

  const getPackedProgress = () => {
    if (!packingList) return { total: 0, packed: 0, percent: 0 }
    let total = 0
    let packed = 0
    Object.values(packingList).forEach(list => {
      total += list.length
      packed += list.filter(item => item.packed).length
    })
    return {
      total,
      packed,
      percent: total > 0 ? Math.round((packed / total) * 100) : 0
    }
  }

  const progress = getPackedProgress()

  return (
    <Container className="py-12 max-w-4xl">
      <Section
        title="AI Packing List Generator"
        subtitle="Custom, smart checklists based on your destination, weather, and activity plans"
      >
        {!packingList ? (
          <Card className="p-8 max-w-2xl mx-auto border border-slate-200 shadow-sm bg-white rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Configure Your Checklist</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="Where are you heading? (e.g. Manali, Maldives)"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm"
                  value={inputs.destination}
                  onChange={(e) => setInputs(prev => ({ ...prev, destination: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Season / Weather</label>
                  <select
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm"
                    value={inputs.season}
                    onChange={(e) => setInputs(prev => ({ ...prev, season: e.target.value }))}
                  >
                    <option value="summer">☀️ Summer / Hot</option>
                    <option value="winter">❄️ Winter / Cold</option>
                    <option value="monsoon">🌧️ Monsoon / Rainy</option>
                    <option value="moderate">🍃 Autumn / Moderate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Duration (Days)</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm"
                    value={inputs.duration}
                    onChange={(e) => setInputs(prev => ({ ...prev, duration: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Planned Activities</label>
                <div className="flex flex-wrap gap-2">
                  {activityOptions.map(act => (
                    <button
                      key={act}
                      onClick={() => handleActivityToggle(act)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                        inputs.activities.includes(act)
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {act}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={generateList}
                disabled={!inputs.destination || !inputs.duration}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl shadow-md mt-4"
              >
                Generate Packing Checklist
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            {/* Progress Card */}
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="text-2xl font-bold">Your Packing Progress</h3>
                  <p className="text-sm opacity-90">{inputs.destination} trip packing checklist</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold">{progress.percent}%</span>
                  <span className="text-xs block opacity-95">{progress.packed} of {progress.total} packed</span>
                </div>
              </div>
              <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                <div className="bg-green-400 h-full rounded-full transition-all duration-300" style={{ width: `${progress.percent}%` }} />
              </div>
            </Card>

            {/* Checklist items by category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(packingList).map(([categoryName, items]) => (
                <Card key={categoryName} className="p-5 border border-slate-200 bg-white rounded-2xl shadow-xs">
                  <h4 className="font-bold text-slate-900 text-sm capitalize mb-3 border-b pb-2 border-slate-100 flex justify-between items-center">
                    <span>
                      {categoryName === 'clothing' && '👕 '}
                      {categoryName === 'electronics' && '🔌 '}
                      {categoryName === 'medicines' && '💊 '}
                      {categoryName === 'documents' && '📄 '}
                      {categoryName === 'toiletries' && '🧴 '}
                      {categoryName === 'accessories' && '🕶️ '}
                      {categoryName === 'emergency' && '🚨 '}
                      {categoryName}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {items.filter(i => i.packed).length} / {items.length} packed
                    </span>
                  </h4>
                  <div className="space-y-2">
                    {items.map((item, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={item.packed}
                          onChange={() => togglePacked(categoryName, idx)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                        />
                        <span className={`text-sm font-medium ${item.packed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                          {item.item}
                        </span>
                      </label>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex gap-4">
              <Button onClick={() => setPackingList(null)} className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-xl shadow-xs">
                Edit Trip Parameters
              </Button>
              <Button onClick={() => window.print()} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl shadow-md">
                Print / Export Checklist
              </Button>
            </div>
          </div>
        )}
      </Section>
    </Container>
  )
}
