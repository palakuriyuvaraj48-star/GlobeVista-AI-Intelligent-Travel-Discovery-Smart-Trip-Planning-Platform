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

  const handleSend = (text) => {
    const query = text.trim()
    if (!query) return
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-user`, role: 'user', text: query },
      { id: `${Date.now()}-assistant`, role: 'assistant', text: getResponse(query) },
    ])
    setInput('')
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
                placeholder="Ask anything about travel..."
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
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
