import { useState } from 'react';

export default function TravelChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'This is a dummy AI response.' }]);
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Travel Chat Assistant</h2>
      <div className="border rounded-xl shadow-md p-4 mb-4 h-64 overflow-y-auto bg-white">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}> <span className={`inline-block px-3 py-1 rounded-xl ${msg.sender === 'user' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}>{msg.text}</span> </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md flex-1" placeholder="Type your message..." />
        <button onClick={sendMessage} className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:bg-indigo-700 transition">Send</button>
      </div>
    </div>
  );
}