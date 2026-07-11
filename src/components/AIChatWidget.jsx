import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getResponse } from '../ai/AIChat'

const quickQueries = [
  'Best places in Goa',
  '3 day trip plan for Bali',
  'Cheap hotels in Dubai',
  'Top restaurants in Paris',
]

export default function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { id: 'welcome', role: 'assistant', text: 'Ask GlobeVista AI anything about travel.' },
  ])

  const getAIAnswer = (query) => {
    const text = query.toLowerCase()
    if (text.includes('plan') || text.includes('itinerary') || text.includes('schedule')) {
      return "📅 I can create a detailed itinerary for you! Open the 'AI Trip Planner' from the menu to input your destination, days, budget, and travel style to get morning, afternoon, and evening schedules with Google Maps routing."
    }
    if (text.includes('place') || text.includes('destination') || text.includes('suggest')) {
      return "📍 For beach escapes, I suggest Goa or Bali. For culture and history, Paris or Jaipur are excellent. For nature and cooling breezes, try Manali or Munnar. Check out 'Explore Places' for more recommendations!"
    }
    if (text.includes('restaurant') || text.includes('food') || text.includes('dine') || text.includes('eat')) {
      return "🍴 I recommend trying local cuisines! In Delhi, visit 'Indian Accent'. In Jaipur, 'Suvarna Mahal' offers heritage dining. You can filter restaurants in the 'Restaurants' tab by Vegetarian, Vegan, Halal, or Jain options."
    }
    if (text.includes('crowd') || text.includes('busy') || text.includes('queue') || text.includes('avoid')) {
      return "📊 Avoid crowd peaks! In Paris or Bali, the crowd density is High during sunsets. The 'Best Time to Visit' tab on any destination page details hourly trends. Early morning (6:00 AM - 8:30 AM) is generally 🟢 Low Crowd."
    }
    if (text.includes('budget') || text.includes('cost') || text.includes('expense') || text.includes('split')) {
      return "💰 Travel smart! Use the 'AI Budget Calculator' to estimate hotels, food, transport, fuel, parking, and attractions. It includes a progress bar showing budget utilization and suggests eco-friendly savings tips."
    }
    if (text.includes('weather') || text.includes('rain') || text.includes('forecast') || text.includes('temp')) {
      return "🌦️ Check out the 'Weather Assistant' tool. It details live temperatures, UV indexes, AQI metrics, and gives specific clothing suggestions (e.g. breathable linen shirts for Goa, heavy down jackets for winter Manali)."
    }
    if (text.includes('safety') || text.includes('hospital') || text.includes('police') || text.includes('emergency')) {
      return "🛡️ Your safety is priority! The 'Travel Safety Hub' lists safety scores out of 100, crime alerts, night safety, and women safety advisories along with local police and hospital numbers (like GMC Hospital in Goa)."
    }
    if (text.includes('custom') || text.includes('phrase') || text.includes('dress') || text.includes('culture')) {
      return "⛩️ Local Customs: When visiting temples in Bali or shrines in India, always wear a sash/sarong (usually provided) and dress conservatively. Use the 'AI Translator' to learn common travel phrases in Hindi, Spanish, or French."
    }
    if (text.includes('hidden') || text.includes('gem') || text.includes('secret') || text.includes('nature')) {
      return "💎 Discover hidden gems! Go to the 'Hidden Places' tab to find scenic, uncrowded attractions like Sidemen Valley in Bali or Cola Beach lagoon in South Goa, perfect for peaceful nature walks."
    }
    if (text.includes('transport') || text.includes('route') || text.includes('bus') || text.includes('metro') || text.includes('taxi')) {
      return "🚗 Consult the 'AI Live Route Assistant' under the Transport tab. It gives walking directions, bus fares, metro line maps, taxi estimates (like UberX €12-18 in Paris), and shows traffic status."
    }
    return "🤖 I am here to help you plan trips, discover restaurants, check safety scores, translate phrases, and find hidden gems. Try asking: 'Suggest places in Bali', 'Weather guidelines for Goa', or 'Avoid crowds at Taj Mahal'."
  }

  const [isListening, setIsListening] = useState(false)

  const triggerVoiceCompanion = () => {
    setIsListening(true)
    setTimeout(() => {
      setIsListening(false)
      const voiceMocks = [
        "Avoid crowds at Taj Mahal",
        "Plan my itinerary for Goa",
        "Weather forecast for Bali",
        "Suggest restaurants in Jaipur"
      ]
      const prompt = voiceMocks[Math.floor(Math.random() * voiceMocks.length)]
      handleSend(prompt)
    }, 2000)
  }

  const handleSend = (text) => {
    const query = text.trim()
    if (!query) return
    const answer = getAIAnswer(query)
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-user`, role: 'user', text: query },
      { id: `${Date.now()}-assistant`, role: 'assistant', text: answer },
    ])
    setInput('')

    // Playback AI voice response audibly
    try {
      window.speechSynthesis.cancel()
      const cleanText = answer.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '')
      const utterance = new SpeechSynthesisUtterance(cleanText)
      window.speechSynthesis.speak(utterance)
    } catch (e) {
      console.error("Text-to-speech error: ", e)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition duration-300 hover:scale-110"
      >
        ✨ Ask GlobeVista AI
      </button>

      <div
        className={`fixed right-0 top-0 z-50 h-full w-[420px] max-w-full bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">GlobeVista AI Travel Co-Pilot</h2>
              <p className="mt-2 text-sm text-slate-600">
                Your intelligent assistant for discovering destinations, planning trips, and exploring experiences.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              Close
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link to="/ai-planner" className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Plan My Trip
            </Link>
            <Link to="/places" className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Find Destinations
            </Link>
            <Link to="/restaurants" className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Explore Restaurants
            </Link>
            <Link to="/events" className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Discover Events
            </Link>
            <Link to="/travel-map" className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Travel Map
            </Link>
          </div>

          <div className="mt-6 flex-1 space-y-3 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm ${
                  message.role === 'assistant'
                    ? 'bg-white text-slate-700 shadow-sm'
                    : 'ml-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickQueries.map((query) => (
                <button
                  key={query}
                  type="button"
                  onClick={() => handleSend(query)}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100"
                >
                  {query}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') handleSend(input)
                }}
                placeholder={isListening ? "Listening to your voice..." : "Ask anything about travel..."}
                disabled={isListening}
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 font-medium"
              />
              <button
                type="button"
                onClick={triggerVoiceCompanion}
                className={`rounded-xl px-3 flex items-center justify-center text-lg shadow-sm border transition-colors ${
                  isListening 
                    ? 'bg-red-100 text-red-600 border-red-200 animate-pulse'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
                title="AI Voice Travel Companion"
              >
                🎙️
              </button>
              <button
                type="button"
                onClick={() => handleSend(input)}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
