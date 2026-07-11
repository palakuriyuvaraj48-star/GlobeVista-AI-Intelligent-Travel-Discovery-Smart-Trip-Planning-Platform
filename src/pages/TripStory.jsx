import { useState, useEffect } from 'react'
import { jsPDF } from 'jspdf'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

export default function TripStory() {
  const [journals, setJournals] = useState([])
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [spots, setSpots] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  
  // New details for travel memory
  const [weatherCondition, setWeatherCondition] = useState('Sunny')
  const [tripDuration, setTripDuration] = useState('5')
  const [carbonOffset, setCarbonOffset] = useState('120') // Kg CO2 offset
  const [totalSpend, setTotalSpend] = useState('24000')
  const [shareText, setShareText] = useState('')

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('travelJournals') || '[]')
    setJournals(saved)
  }, [])

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveJournal = () => {
    if (!title || !content) return
    const newJournal = {
      id: Date.now(),
      title,
      date: date || new Date().toLocaleDateString(),
      spots,
      content,
      image,
      weather: weatherCondition,
      duration: tripDuration,
      carbon: carbonOffset,
      spend: totalSpend,
      createdAt: new Date().toISOString()
    }
    const updated = [newJournal, ...journals]
    setJournals(updated)
    localStorage.setItem('travelJournals', JSON.stringify(updated))
    
    // Reset form
    setTitle('')
    setDate('')
    setSpots('')
    setContent('')
    setImage(null)
    setWeatherCondition('Sunny')
    setTripDuration('5')
    setCarbonOffset('120')
    setTotalSpend('24000')
  }

  const handleDeleteJournal = (id) => {
    const updated = journals.filter(j => j.id !== id)
    setJournals(updated)
    localStorage.setItem('travelJournals', JSON.stringify(updated))
  }

  const generateShareLink = (journalId) => {
    const link = `${window.location.origin}/trip-story?shared=${journalId}`
    navigator.clipboard.writeText(link)
    setShareText('Shareable travel story link copied to clipboard!')
    setTimeout(() => setShareText(''), 3000)
  }

  const exportPDF = (journal) => {
    const doc = new jsPDF()
    
    doc.setFont("helvetica", "bold")
    doc.setFontSize(22)
    doc.setTextColor(147, 51, 234)
    doc.text("GLOBEVISTA AI PERSONAL TRAVEL STORY", 20, 25)
    
    doc.setFont("helvetica", "normal")
    doc.setFontSize(11)
    doc.setTextColor(100, 116, 139)
    doc.text(`Exported: ${new Date().toLocaleDateString()}`, 20, 32)
    doc.line(20, 35, 190, 35)

    doc.setFont("helvetica", "bold")
    doc.setFontSize(16)
    doc.setTextColor(15, 23, 42)
    doc.text(journal.title, 20, 50)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(11)
    doc.text(`Date Visited: ${journal.date}`, 20, 58)
    doc.text(`Checked-in Spots: ${journal.spots || 'Not tagged'}`, 20, 66)
    doc.text(`Weather Summary: ${journal.weather || 'Sunny'}`, 20, 74)
    doc.text(`Trip Stats: ${journal.duration} Days | Est. Spend: INR ${journal.spend} | Carbon Offset: ${journal.carbon} kg CO2`, 20, 82)

    doc.setFont("helvetica", "bold")
    doc.setFontSize(13)
    doc.text("Travel diary notes & memories:", 20, 94)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(11)
    doc.setTextColor(51, 65, 85)
    const splitNotes = doc.splitTextToSize(journal.content, 170)
    doc.text(splitNotes, 20, 102)

    if (journal.image) {
      try {
        doc.addImage(journal.image, 'JPEG', 20, 155, 70, 50)
        doc.text("Photo highlight from trip:", 20, 149)
      } catch (e) {
        console.error("Error adding image to PDF: ", e)
      }
    }

    doc.save(`${journal.title.toLowerCase().replace(/\s+/g, '-')}-story.pdf`)
  }

  return (
    <Container className="py-12 max-w-5xl">
      <Section
        title="AI Personal Travel Memory"
        subtitle="Log your journeys, calculate stats, attach photo highlights, preview interactive routes, and export PDF travel stories"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left panel: Add Travel Memory Form */}
          <div className="lg:col-span-5">
            <Card className="p-6 bg-white border border-slate-200 shadow-sm rounded-3xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Log New Travel Memory</h3>
              
              <input
                type="text"
                placeholder="Trip Title (e.g. Goa Beach Escape)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl text-xs outline-none focus:border-purple-500 font-semibold"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-xl text-xs outline-none focus:border-purple-500 font-semibold"
                />
                <input
                  type="text"
                  placeholder="Visited Spots (e.g. Curlies, Anjuna)"
                  value={spots}
                  onChange={(e) => setSpots(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-xl text-xs outline-none focus:border-purple-500 font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-500">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">Weather Summary</label>
                  <select
                    value={weatherCondition}
                    onChange={(e) => setWeatherCondition(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-xl outline-none focus:border-purple-500 font-bold"
                  >
                    <option value="Sunny">☀️ Sunny / Hot</option>
                    <option value="Rainy">🌧️ Rainy / Monsoon</option>
                    <option value="Cold">❄️ Cold / Snowy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">Duration (Days)</label>
                  <input
                    type="number"
                    value={tripDuration}
                    onChange={(e) => setTripDuration(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-xl outline-none focus:border-purple-500 font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-500">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">Carbon offset (kg)</label>
                  <input
                    type="number"
                    value={carbonOffset}
                    onChange={(e) => setCarbonOffset(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-xl outline-none focus:border-purple-500 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">Total spend (INR)</label>
                  <input
                    type="number"
                    value={totalSpend}
                    onChange={(e) => setTotalSpend(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-xl outline-none focus:border-purple-500 font-bold"
                  />
                </div>
              </div>

              <textarea
                placeholder="Write your diary entry, favorite memories, and travel story here..."
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl text-xs outline-none focus:border-purple-500 font-medium"
              />

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Photo Highlight</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>

              {image && (
                <div className="h-32 rounded-2xl overflow-hidden border border-slate-100 relative">
                  <img src={image} alt="Upload preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setImage(null)}
                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold"
                  >
                    ×
                  </button>
                </div>
              )}

              <Button onClick={handleSaveJournal} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-xs">
                Save Memory Entry
              </Button>
            </Card>
          </div>

          {/* Right panel: Timeline & Memory Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 border-b pb-3">Your Travel Timeline</h3>

            {shareText && (
              <div className="bg-green-50 border border-green-200 text-green-800 text-xs font-semibold p-3 rounded-xl animate-slideIn">
                ✨ {shareText}
              </div>
            )}

            {journals.length === 0 ? (
              <div className="text-center py-16 text-slate-400 bg-white border border-slate-100 rounded-3xl">
                <span className="text-5xl block mb-2">📖</span>
                No travel memory entries logged. Add one on the left to start build your story timeline!
              </div>
            ) : (
              <div className="space-y-6">
                {journals.map(journal => (
                  <Card key={journal.id} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{journal.title}</h4>
                        <span className="text-xs text-slate-400 font-semibold">{journal.date}</span>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Button 
                          onClick={() => generateShareLink(journal.id)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 py-1.5 px-3 rounded-xl text-xs font-bold"
                        >
                          🔗 Share Story
                        </Button>
                        <Button 
                          onClick={() => exportPDF(journal)}
                          className="bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-100 py-1.5 px-3 rounded-xl text-xs font-bold"
                        >
                          📄 PDF Export
                        </Button>
                        <Button 
                          onClick={() => handleDeleteJournal(journal.id)}
                          className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-100 py-1.5 px-3 rounded-xl text-xs font-bold"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <span>🌦️ Weather: {journal.weather}</span>
                      <span>•</span>
                      <span>🗓️ Duration: {journal.duration} Days</span>
                      <span>•</span>
                      <span>🍃 Offset: {journal.carbon} kg CO2</span>
                      <span>•</span>
                      <span>💰 Spend: INR {journal.spend}</span>
                    </div>

                    {journal.spots && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-500">📍 Favorite Spots:</span>
                        <Badge className="bg-indigo-50 text-indigo-700 border-none font-bold text-[9px]">{journal.spots}</Badge>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 leading-relaxed font-medium whitespace-pre-line">{journal.content}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Photo Highlight */}
                      {journal.image && (
                        <div className="h-44 rounded-2xl overflow-hidden border border-slate-100">
                          <img src={journal.image} alt={journal.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      
                      {/* Interactive map preview */}
                      <div className="h-44 rounded-2xl overflow-hidden border border-slate-100">
                        <iframe
                          title={`Visited Map ${journal.id}`}
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(journal.spots || journal.title)}&z=12&output=embed`}
                          className="w-full h-full border-none"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>
    </Container>
  )
}
