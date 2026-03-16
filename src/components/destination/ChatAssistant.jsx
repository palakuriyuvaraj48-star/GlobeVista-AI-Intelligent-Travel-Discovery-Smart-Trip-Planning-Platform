import { useState } from 'react'

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white text-3xl hover:scale-110 active:scale-95 transition-all z-50 animate-bounce hover:animate-none"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 flex flex-col transform transition-all">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
            <h3 className="font-bold text-lg">Travel Assistant AI</h3>
            <p className="text-white/80 text-sm">Ask me anything about this trip!</p>
          </div>
          
          <div className="p-4 bg-slate-50 h-64 overflow-y-auto space-y-4">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 text-sm text-slate-700 w-11/12">
              Hi! I'm your GlobeVista assistant. What would you like to know about this destination?
            </div>
            
            <div className="flex flex-col gap-2 mt-4 items-end">
              <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 px-3 py-2 rounded-2xl rounded-tr-sm text-xs text-right transition">
                Best time to visit?
              </button>
              <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 px-3 py-2 rounded-2xl rounded-tr-sm text-xs text-right transition">
                Hotels near mountains
              </button>
              <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 px-3 py-2 rounded-2xl rounded-tr-sm text-xs text-right transition">
                Budget travel options
              </button>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              placeholder="Type your question..." 
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white p-2 w-10 h-10 rounded-xl hover:bg-purple-700 flex items-center justify-center">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}
