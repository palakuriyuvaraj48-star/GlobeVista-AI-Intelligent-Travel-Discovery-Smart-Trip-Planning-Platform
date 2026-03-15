import { useState } from 'react'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Badge from '../../components/ui/Badge'

const initialMessages = [
  { id: 1, sender: 'ai', text: 'Hello! I\'m your AI travel assistant. How can I help you plan your next adventure?' },
  { id: 2, sender: 'user', text: 'I want to plan a trip to Bali for 5 days' },
  { id: 3, sender: 'ai', text: 'Great choice! Bali is amazing. For a 5-day trip, I recommend:\n\n🏖️ Day 1-2: Beach resorts in Seminyak\n🏛️ Day 3: Cultural sites in Ubud\n🌋 Day 4: Mount Batur sunrise trek\n🏄 Day 5: Surfing lessons in Canggu\n\nWould you like me to create a detailed itinerary?' },
]

export default function AIChat() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now(), sender: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        id: Date.now() + 1, 
        sender: 'ai', 
        text: 'I\'m analyzing your request and preparing personalized recommendations...' 
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <Container>
      <Section
        title="AI Travel Chat"
        subtitle="Get instant help from your AI travel assistant"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Window */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold">AI Travel Assistant</h3>
                  <p className="text-sm text-green-600">● Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about travel..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSend()}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} disabled={!input.trim()}>
                    Send
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  ✈️ Find flights
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  🏨 Book hotels
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  🗺️ Get directions
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  🌤️ Check weather
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  💱 Exchange rates
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Bali Guide</Badge>
                <Badge variant="secondary">Budget Tips</Badge>
                <Badge variant="secondary">Visa Info</Badge>
                <Badge variant="secondary">Local Food</Badge>
                <Badge variant="secondary">Safety</Badge>
                <Badge variant="secondary">Transport</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">AI Capabilities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personalized recommendations</li>
                <li>• Real-time flight prices</li>
                <li>• Weather forecasts</li>
                <li>• Local insights</li>
                <li>• Budget planning</li>
                <li>• 24/7 availability</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  )
}
