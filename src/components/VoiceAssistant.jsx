import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useVoiceAssistant } from '../hooks/useVoiceAssistant'
import { getChatReply } from '../utils/aiTravel'

const quickPrompts = [
  'Suggest hotels in Jaipur',
  'Best time to visit Paris',
  'Budget trip to Kerala',
]

export default function VoiceAssistant() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: 'Ask about destinations, hotels, budgets, seasons, or itinerary ideas.',
    },
  ])

  const handleMessage = (text) => {
    const query = text.trim()
    if (!query) return

    const lower = query.toLowerCase()
    if (lower.includes('hotel')) navigate('/hotels')
    if (lower.includes('budget')) navigate('/budget')
    if (lower.includes('wishlist')) navigate('/wishlist')
    if (lower.includes('plan') || lower.includes('trip')) navigate('/ai-trip-planner')

    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-user`, role: 'user', text: query },
      { id: `${Date.now()}-assistant`, role: 'assistant', text: getChatReply(query) },
    ])
    setInput('')
    setOpen(true)
  }

  const { listening, error, startListening } = useVoiceAssistant(handleMessage)
  const visibleMessages = useMemo(() => messages.slice(-6), [messages])

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {open ? (
          <div className="w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-4 text-white">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Travel Assistant</p>
                <p className="text-sm text-white/90">AI trip help, suggestions, and quick actions</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="text-sm font-semibold">
                Close
              </button>
            </div>

            <div className="max-h-[360px] space-y-3 overflow-y-auto bg-slate-50 p-4">
              {visibleMessages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    message.role === 'assistant'
                      ? 'bg-white text-slate-700 shadow-sm'
                      : 'ml-auto bg-indigo-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleMessage(prompt)}
                    className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') handleMessage(input)
                  }}
                  placeholder="Ask about hotels, seasons, budgets..."
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <button
                  type="button"
                  onClick={() => handleMessage(input)}
                  className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={startListening}
                  disabled={listening}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                    listening ? 'bg-rose-500 text-white' : 'bg-cyan-100 text-cyan-700'
                  }`}
                >
                  Mic
                </button>
              </div>
              {error ? <p className="mt-2 text-xs text-rose-600">{error}</p> : null}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Need a structured plan?</span>
                <Link to="/ai-trip-planner" className="font-semibold text-indigo-600">
                  Open planner
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-xl transition hover:scale-105"
          aria-label="Travel assistant"
        >
          Chat
        </button>
      </div>
    </>
  )
}
