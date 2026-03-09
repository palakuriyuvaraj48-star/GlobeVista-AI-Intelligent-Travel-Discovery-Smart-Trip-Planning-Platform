import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useVoiceAssistant } from '../hooks/useVoiceAssistant'

export default function VoiceAssistant() {
  const navigate = useNavigate()
  const [response, setResponse] = useState('')
  const [showResponse, setShowResponse] = useState(false)

  const handleResult = (transcript) => {
    const t = transcript.toLowerCase()
    let msg = ''
    if (t.includes('hotel') && t.includes('jaipur')) {
      navigate('/hotels')
      msg = 'Showing hotels in Jaipur. Rambagh Palace is a top pick.'
    } else if (t.includes('best time') && t.includes('paris')) {
      msg = 'Best time to visit Paris is April to June and September to October for mild weather and fewer crowds.'
    } else if ((t.includes('budget') || t.includes('calculate')) && (t.includes('bali') || t.includes('5 days'))) {
      navigate('/budget')
      msg = 'Opened Budget Planner. Enter 5 days and your preferences to calculate Bali trip cost.'
    } else if (t.includes('dress code') && t.includes('palace')) {
      navigate('/dress-code')
      msg = 'Opened Dress Code. For palace visits: modest clothing, shoulders and knees covered.'
    } else if (t.includes('airport') && (t.includes('hotel') || t.includes('go'))) {
      navigate('/transport')
      msg = 'Opened Transportation. You can book cab or use the route planner for airport to hotel.'
    } else {
      msg = `You said: "${transcript}". Try: "Suggest hotel in Jaipur", "Best time to visit Paris", "Calculate budget for 5 days in Bali", "Show dress code for palace", or "How to go from airport to hotel".`
    }
    setResponse(msg)
    setShowResponse(true)
    setTimeout(() => setShowResponse(false), 8000)
  }

  const { listening, error, startListening } = useVoiceAssistant(handleResult)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={startListening}
          disabled={listening}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all ${
            listening
              ? 'bg-red-500 text-white scale-110 animate-pulse'
              : 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:from-indigo-700 hover:to-cyan-600'
          }`}
          aria-label="Voice assistant"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
          </svg>
        </button>
        {error && (
          <p className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-red-100 text-red-700 text-xs rounded-xl shadow max-w-[200px]">
            {error}
          </p>
        )}
      </div>
      <div
        className={`fixed bottom-24 right-6 z-40 max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 transition duration-300 ${
          showResponse && response ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-hidden={!(showResponse && response)}
      >
        <p className="text-sm text-slate-700">{response}</p>
        <button
          type="button"
          onClick={() => setShowResponse(false)}
          className="mt-2 text-xs text-indigo-600 hover:underline"
        >
          Dismiss
        </button>
      </div>
    </>
  )
}
