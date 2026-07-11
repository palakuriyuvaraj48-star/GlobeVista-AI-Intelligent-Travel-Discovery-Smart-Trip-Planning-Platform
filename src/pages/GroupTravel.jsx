import { useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'

export default function GroupTravel() {
  const [activeTab, setActiveTab] = useState('trips')
  const [selectedTripId, setSelectedTripId] = useState(null)
  
  // Group trips states
  const [groupTrips, setGroupTrips] = useState([
    {
      id: 1,
      title: 'Bali Adventure Week',
      destination: 'Bali, Indonesia',
      dates: 'Dec 15-22, 2026',
      maxPeople: 8,
      budget: '₹45,000',
      organizer: 'Sarah Chen',
      description: 'Explore temples, beaches, and rice terraces with a small group.',
      members: ['Sarah Chen', 'Raj Patel', 'Mike Johnson'],
      votes: {
        destinations: { 'Seminyak': 2, 'Ubud': 1 },
        hotels: { 'Taj Exotica Resort': 2, 'The Mulia Bali': 1 }
      },
      expenses: [
        { id: 1, desc: 'Resort Booking Deposit', amount: 15000, paidBy: 'Sarah Chen' },
        { id: 2, desc: 'Airport Shuttle Taxi', amount: 3000, paidBy: 'Raj Patel' }
      ],
      responsibilities: [
        { id: 1, task: 'Book Flight Tickets', assignedTo: 'Raj Patel', done: true },
        { id: 2, task: 'Confirm Hotel Stays', assignedTo: 'Sarah Chen', done: false },
        { id: 3, task: 'Reserve Dinner Tables', assignedTo: 'Mike Johnson', done: false }
      ],
      payments: [
        { id: 1, member: 'Raj Patel', amount: 5000, date: '2026-07-09', status: 'Cleared' },
        { id: 2, member: 'Mike Johnson', amount: 5000, date: '2026-07-10', status: 'Pending Verification' }
      ]
    },
    {
      id: 2,
      title: 'Mountain Trek in Himalayas',
      destination: 'Manali, India',
      dates: 'Jan 5-12, 2027',
      maxPeople: 12,
      budget: '₹28,000',
      organizer: 'Raj Patel',
      description: 'Challenging trek through beautiful mountain landscapes.',
      members: ['Raj Patel', 'Aria Gupta', 'Karan Roy'],
      votes: { destinations: {}, hotels: {} },
      expenses: [],
      responsibilities: [],
      payments: []
    }
  ])

  // New Trip form state
  const [newTrip, setNewTrip] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    maxPeople: '6',
    budget: '₹30,000',
    description: ''
  })

  // Selected Trip details sub-tab state
  const [detailTab, setDetailTab] = useState('members')

  // Invite Link feedback
  const [inviteText, setInviteText] = useState('')

  // Expense input state
  const [expenseInput, setExpenseInput] = useState({ desc: '', amount: '', paidBy: '' })

  // Task input state
  const [taskInput, setTaskInput] = useState({ task: '', assignedTo: '' })

  // Buddy Finder states
  const [buddySearch, setBuddySearch] = useState({ destination: 'Goa', budget: 'mid' })
  const [privacyControls, setPrivacyControls] = useState({
    profileVisible: true,
    shareBudget: true,
    shareDates: true
  })
  const [activeChatBuddy, setActiveChatBuddy] = useState(null)
  const [chatMessages, setChatMessages] = useState([])
  const [chatInput, setChatInput] = useState('')
  const [blockedBuddies, setBlockedBuddies] = useState([])

  const buddiesList = [
    { id: 1, name: 'Aria Gupta', verified: true, dest: 'Goa', budget: 'mid', dates: 'March 25-30, 2026', interests: ['Culture', 'Beaches'], avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { id: 2, name: 'Mike Johnson', verified: true, dest: 'Bali', budget: 'luxury', dates: 'Dec 15-22, 2026', interests: ['Adventure', 'Surfing'], avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    { id: 3, name: 'Karan Roy', verified: false, dest: 'Manali', budget: 'budget', dates: 'Jan 5-12, 2027', interests: ['Trekking', 'Photography'], avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' }
  ]

  const handleCreateTrip = () => {
    if (!newTrip.title || !newTrip.destination) return
    const trip = {
      id: Date.now(),
      title: newTrip.title,
      destination: newTrip.destination,
      dates: `${newTrip.startDate} to ${newTrip.endDate}`,
      maxPeople: parseInt(newTrip.maxPeople),
      budget: newTrip.budget,
      organizer: 'John Doe (You)',
      description: newTrip.description,
      members: ['John Doe (You)'],
      votes: { destinations: {}, hotels: {} },
      expenses: [],
      responsibilities: [],
      payments: []
    }
    setGroupTrips([trip, ...groupTrips])
    setNewTrip({
      title: '',
      destination: '',
      startDate: '',
      endDate: '',
      maxPeople: '6',
      budget: '₹30,000',
      description: ''
    })
    setActiveTab('trips')
  }

  const selectedTrip = groupTrips.find(t => t.id === selectedTripId)

  // Invite link generator
  const copyInviteLink = (tripId) => {
    const link = `${window.location.origin}/group-travel?join=${tripId}`
    navigator.clipboard.writeText(link)
    setInviteText('Invite link copied to clipboard! Send to your buddies.')
    setTimeout(() => setInviteText(''), 3000)
  }

  const castVote = (category, option) => {
    setGroupTrips(prev => prev.map(t => {
      if (t.id !== selectedTripId) return t
      const updated = { ...t }
      updated.votes = { ...updated.votes }
      updated.votes[category] = { ...updated.votes[category] }
      updated.votes[category][option] = (updated.votes[category][option] || 0) + 1
      return updated
    }))
  }

  const addExpense = () => {
    if (!expenseInput.desc || !expenseInput.amount || !expenseInput.paidBy) return
    setGroupTrips(prev => prev.map(t => {
      if (t.id !== selectedTripId) return t
      const updated = { ...t }
      updated.expenses = [
        ...updated.expenses,
        { id: Date.now(), desc: expenseInput.desc, amount: parseFloat(expenseInput.amount), paidBy: expenseInput.paidBy }
      ]
      return updated
    }))
    setExpenseInput({ desc: '', amount: '', paidBy: '' })
  }

  const addTask = () => {
    if (!taskInput.task || !taskInput.assignedTo) return
    setGroupTrips(prev => prev.map(t => {
      if (t.id !== selectedTripId) return t
      const updated = { ...t }
      updated.responsibilities = [
        ...updated.responsibilities,
        { id: Date.now(), task: taskInput.task, assignedTo: taskInput.assignedTo, done: false }
      ]
      return updated
    }))
    setTaskInput({ task: '', assignedTo: '' })
  }

  const toggleTaskDone = (taskId) => {
    setGroupTrips(prev => prev.map(t => {
      if (t.id !== selectedTripId) return t
      const updated = { ...t }
      updated.responsibilities = updated.responsibilities.map(task => {
        if (task.id === taskId) return { ...task, done: !task.done }
        return task
      })
      return updated
    }))
  }

  const getExpenseSummary = (trip) => {
    if (!trip.expenses || trip.expenses.length === 0) return { total: 0, perPerson: 0 }
    const total = trip.expenses.reduce((sum, exp) => sum + exp.amount, 0)
    const perPerson = total / Math.max(1, trip.members.length)
    return { total, perPerson }
  }

  const expenseSummary = selectedTrip ? getExpenseSummary(selectedTrip) : { total: 0, perPerson: 0 }

  const filteredBuddies = buddiesList.filter(b => 
    !blockedBuddies.includes(b.id) &&
    b.dest.toLowerCase().includes(buddySearch.destination.toLowerCase())
  )

  const handleSendBuddyMessage = () => {
    if (!chatInput.trim() || !activeChatBuddy) return
    const msgs = [...chatMessages, { sender: 'me', text: chatInput }]
    setChatMessages(msgs)
    setChatInput('')
    
    // Simulate smart secure response
    setTimeout(() => {
      setChatMessages([...msgs, { sender: 'them', text: `Hi! That sounds great. Let's align on travel parameters for our ${activeChatBuddy.dest} trip.` }])
    }, 1500)
  }

  const handleBlockBuddy = (buddyId) => {
    setBlockedBuddies([...blockedBuddies, buddyId])
    setActiveChatBuddy(null)
    alert("Buddy has been blocked and reported to verification admins.")
  }

  return (
    <Container>
      <Section
        title="Group Travel Planner & Buddy Finder"
        subtitle="Invite friends, vote on destinations, split bills, and connect with verified travel buddies"
      >
        {/* TABS */}
        <div className="flex gap-4 mb-8 border-b pb-1">
          {['trips', 'create', 'buddies'].map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setSelectedTripId(null)
                setActiveChatBuddy(null)
              }}
              className={`pb-3 px-1 capitalize border-b-2 transition-colors font-bold text-sm ${
                activeTab === tab && !selectedTripId
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab === 'buddies' ? '👥 Find Travel Buddies' : tab === 'create' ? 'Create Group Trip' : 'Active Group Trips'}
            </button>
          ))}
          {selectedTripId && (
            <span className="pb-3 px-1 border-b-2 border-purple-600 text-purple-600 font-bold text-sm">
              ✨ Managed Trip: {selectedTrip?.title}
            </span>
          )}
        </div>

        {/* TRIP LIST */}
        {activeTab === 'trips' && !selectedTripId && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupTrips.map(trip => (
              <Card key={trip.id} className="overflow-hidden bg-white border border-slate-200 shadow-sm rounded-3xl">
                <div className="p-6">
                  <Badge className="bg-purple-100 text-purple-700 border-none font-bold text-[10px] mb-2">Organizer: {trip.organizer}</Badge>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{trip.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{trip.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-500 mb-4 border-t border-slate-100 pt-3">
                    <div>📍 Destination: <span className="text-slate-800 font-bold block mt-0.5">{trip.destination}</span></div>
                    <div>📅 Dates: <span className="text-slate-800 font-bold block mt-0.5">{trip.dates}</span></div>
                    <div>💰 Est. Budget: <span className="text-slate-800 font-bold block mt-0.5">{trip.budget}</span></div>
                    <div>👥 Group Size: <span className="text-slate-800 font-bold block mt-0.5">{trip.members.length} Members</span></div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={() => setSelectedTripId(trip.id)} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-xl text-xs">
                      Manage Trip Dashboard
                    </Button>
                    <Button onClick={() => copyInviteLink(trip.id)} variant="ghost" className="border border-slate-200 text-xs py-2 rounded-xl">
                      Get Invite Link
                    </Button>
                  </div>
                  {inviteText && <p className="text-xs text-green-600 mt-2 font-semibold">{inviteText}</p>}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* DETAILED TRIP BOARD */}
        {selectedTripId && selectedTrip && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            <div className="lg:col-span-3 flex flex-col gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/50 h-fit">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">Trip Controls</span>
              {[
                { id: 'members', label: '👥 Members & Invites' },
                { id: 'voting', label: '🗳️ Live Voting Polls' },
                { id: 'expenses', label: '💸 Expense Splitter' },
                { id: 'responsibilities', label: '📋 Task assignments' },
                { id: 'payments', label: '💳 Payment tracking' }
              ].map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setDetailTab(sub.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    detailTab === sub.id
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
              <Button onClick={() => setSelectedTripId(null)} variant="ghost" className="mt-4 border border-slate-200 text-xs">
                ← Back to Active List
              </Button>
            </div>

            <div className="lg:col-span-9">
              {detailTab === 'members' && (
                <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Group Members</h3>
                  <div className="space-y-3 mb-6">
                    {selectedTrip.members.map((member, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700 text-xs">
                            {member.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-semibold text-sm text-slate-800">{member}</span>
                        </div>
                        {idx === 0 ? <Badge className="bg-purple-100 text-purple-800 border-none font-bold text-[9px]">Organizer</Badge> : <Badge className="bg-slate-100 text-slate-600 border-none font-bold text-[9px]">Buddy</Badge>}
                      </div>
                    ))}
                  </div>
                  <Button onClick={() => copyInviteLink(selectedTrip.id)} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-xl text-xs">
                    Get Buddy Invite Link
                  </Button>
                </Card>
              )}

              {detailTab === 'voting' && (
                <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Live Voting Polls</h3>
                  <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50">
                    <h4 className="font-bold text-sm text-slate-800 mb-3">📍 Target Destination Vote</h4>
                    <div className="space-y-3">
                      {['Seminyak', 'Ubud', 'Canggu'].map(opt => {
                        const count = selectedTrip.votes.destinations[opt] || 0
                        return (
                          <div key={opt} className="flex justify-between items-center p-2.5 bg-white rounded-xl border border-slate-100 text-xs">
                            <span className="font-bold text-slate-700">{opt} ({count} votes)</span>
                            <button onClick={() => castVote('destinations', opt)} className="text-purple-600 hover:underline font-bold">Cast Vote</button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Card>
              )}

              {detailTab === 'expenses' && (
                <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Group Expense Splitter</h3>
                  <div className="grid grid-cols-3 gap-4 bg-purple-50/40 border border-purple-100 p-4 rounded-2xl text-slate-900 text-xs font-semibold">
                    <div>Total Expenses: <strong>₹{expenseSummary.total.toLocaleString('en-IN')}</strong></div>
                    <div>Split: <strong>{selectedTrip.members.length} people</strong></div>
                    <div>Per Person: <strong className="text-purple-600">₹{Math.round(expenseSummary.perPerson).toLocaleString('en-IN')}</strong></div>
                  </div>
                  
                  <div className="space-y-2">
                    {selectedTrip.expenses.map(exp => (
                      <div key={exp.id} className="flex justify-between p-3 border rounded-xl text-xs">
                        <span>{exp.desc} (Paid by {exp.paidBy})</span>
                        <span className="font-bold">₹{exp.amount}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-bold text-xs uppercase text-slate-500 mb-3">Add Bill</h4>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <input placeholder="Item" className="p-2 border rounded-xl text-xs" value={expenseInput.desc} onChange={(e) => setExpenseInput(prev => ({ ...prev, desc: e.target.value }))} />
                      <input placeholder="₹" className="p-2 border rounded-xl text-xs" type="number" value={expenseInput.amount} onChange={(e) => setExpenseInput(prev => ({ ...prev, amount: e.target.value }))} />
                      <select className="p-2 border rounded-xl text-xs" value={expenseInput.paidBy} onChange={(e) => setExpenseInput(prev => ({ ...prev, paidBy: e.target.value }))}>
                        <option value="">Paid by...</option>
                        {selectedTrip.members.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                    <Button onClick={addExpense} className="bg-slate-900 text-white py-1 px-3 text-xs rounded-xl">Add Bill</Button>
                  </div>
                </Card>
              )}

              {detailTab === 'responsibilities' && (
                <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Task Assignments</h3>
                  <div className="space-y-2">
                    {selectedTrip.responsibilities.map(task => (
                      <label key={task.id} className="flex justify-between p-2 border rounded-xl text-xs items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked={task.done} onChange={() => toggleTaskDone(task.id)} />
                          <span className={task.done ? 'line-through text-slate-400' : ''}>{task.task}</span>
                        </div>
                        <Badge className="bg-purple-50 text-purple-700 border-none font-bold text-[9px]">{task.assignedTo}</Badge>
                      </label>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* CREATE TRIP FORM */}
        {activeTab === 'create' && (
          <Card className="max-w-2xl mx-auto p-8 border border-slate-200 bg-white rounded-3xl animate-fadeIn">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Create a Group Trip</h3>
            <div className="space-y-4">
              <input
                className="w-full p-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-purple-500"
                placeholder="Trip Title (e.g. Paris Reunion)"
                value={newTrip.title}
                onChange={(e) => setNewTrip(prev => ({ ...prev, title: e.target.value }))}
              />
              <input
                className="w-full p-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-purple-500"
                placeholder="Destination"
                value={newTrip.destination}
                onChange={(e) => setNewTrip(prev => ({ ...prev, destination: e.target.value }))}
              />
              <Button onClick={handleCreateTrip} className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl">
                Create Group Board
              </Button>
            </div>
          </Card>
        )}

        {/* TRAVEL BUDDY FINDER */}
        {activeTab === 'buddies' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            {/* Sidebar: Filters & Privacy Controls */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="p-5 bg-white border border-slate-200 rounded-2xl space-y-5">
                <h4 className="font-bold text-slate-900 text-sm border-b pb-2">Filter Buddies</h4>
                
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Destination Search</label>
                  <input
                    type="text"
                    value={buddySearch.destination}
                    onChange={(e) => setBuddySearch(prev => ({ ...prev, destination: e.target.value }))}
                    className="w-full p-2.5 border rounded-xl text-xs outline-none focus:border-purple-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Budget level</label>
                  <select
                    value={buddySearch.budget}
                    onChange={(e) => setBuddySearch(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full p-2.5 border rounded-xl text-xs outline-none focus:border-purple-500 font-semibold"
                  >
                    <option value="budget">Budget (₹2,500/day)</option>
                    <option value="mid">Mid-range (₹5,500/day)</option>
                    <option value="luxury">Luxury (₹12,000/day)</option>
                  </select>
                </div>
              </Card>

              {/* Feature 3: Privacy Controls */}
              <Card className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                <h4 className="font-bold text-slate-900 text-sm border-b pb-2">🔒 Privacy & Security Controls</h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between text-xs cursor-pointer font-semibold text-slate-700">
                    <span>Show my profile to travelers</span>
                    <input
                      type="checkbox"
                      checked={privacyControls.profileVisible}
                      onChange={(e) => setPrivacyControls(prev => ({ ...prev, profileVisible: e.target.checked }))}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                  </label>
                  <label className="flex items-center justify-between text-xs cursor-pointer font-semibold text-slate-700">
                    <span>Share my budget preferences</span>
                    <input
                      type="checkbox"
                      checked={privacyControls.shareBudget}
                      onChange={(e) => setPrivacyControls(prev => ({ ...prev, shareBudget: e.target.checked }))}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                  </label>
                  <label className="flex items-center justify-between text-xs cursor-pointer font-semibold text-slate-700">
                    <span>Share my exact dates</span>
                    <input
                      type="checkbox"
                      checked={privacyControls.shareDates}
                      onChange={(e) => setPrivacyControls(prev => ({ ...prev, shareDates: e.target.checked }))}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                  </label>
                </div>
              </Card>
            </div>

            {/* Main Area: Buddy Listings & Chat Overlay */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b pb-3">Travelers Match List</h3>

              {filteredBuddies.length === 0 ? (
                <Card className="p-8 text-center bg-white border border-slate-200 rounded-3xl text-slate-400">
                  No matching buddies found for "{buddySearch.destination}".
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredBuddies.map(buddy => (
                    <Card key={buddy.id} className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs flex flex-col md:flex-row gap-5 justify-between items-start md:items-center">
                      <div className="flex gap-4 items-center">
                        <img src={buddy.avatar} alt={buddy.name} className="w-12 h-12 rounded-full object-cover border border-slate-100" />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm">{buddy.name}</h4>
                            {buddy.verified && <span className="text-xs text-blue-500 font-bold" title="Identity Verified">✅ ID Verified</span>}
                          </div>
                          <p className="text-xs text-slate-500 font-medium">Dates: {buddy.dates} | Budget: {buddy.budget}</p>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {buddy.interests.map(t => (
                              <span key={t} className="bg-purple-50 text-purple-700 text-[9px] px-1.5 py-0.5 rounded font-bold">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button onClick={() => {
                        setActiveChatBuddy(buddy)
                        setChatMessages([{ sender: 'them', text: `Hey! I am also traveling to ${buddy.dest} during ${buddy.dates}. Would you like to align budgets?` }])
                      }} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1.5 px-4 rounded-xl text-xs shadow-xs shrink-0">
                        💬 Connect Chat
                      </Button>
                    </Card>
                  ))}
                </div>
              )}

              {/* Feature 3: Secure Chat Modal Overlay */}
              {activeChatBuddy && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                  <Card className="max-w-md w-full p-5 bg-white border border-slate-100 rounded-3xl shadow-2xl flex flex-col h-[400px]">
                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <img src={activeChatBuddy.avatar} alt={activeChatBuddy.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <span className="font-bold text-slate-900 text-xs block">{activeChatBuddy.name}</span>
                          <span className="text-[9px] text-green-600 font-bold block">🔒 Secure AES-256 chat active</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleBlockBuddy(activeChatBuddy.id)}
                          className="bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 py-1 px-2.5 rounded-lg text-[9px] font-extrabold"
                        >
                          ⚠️ Block / Report
                        </button>
                        <button onClick={() => setActiveChatBuddy(null)} className="text-slate-400 hover:text-slate-600 font-bold text-sm">×</button>
                      </div>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 overflow-y-auto space-y-3 mb-4 text-xs font-semibold">
                      {chatMessages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${msg.sender === 'me' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chat Footer */}
                    <div className="flex gap-2 pt-2 border-t">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Type secure message..."
                        className="flex-1 p-2.5 border rounded-xl text-xs outline-none focus:border-purple-500 font-medium"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSendBuddyMessage()
                        }}
                      />
                      <Button onClick={handleSendBuddyMessage} className="bg-slate-950 text-white text-xs px-4 py-2.5 rounded-xl font-bold">Send</Button>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </div>
        )}
      </Section>
    </Container>
  )
}
