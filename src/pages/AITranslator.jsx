import { useState } from 'react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { translatorLanguages } from '../utils/aiEngine'

export default function AITranslator() {
  const [activeTab, setActiveTab] = useState('text')
  const [textToTranslate, setTextToTranslate] = useState('')
  const [selectedLang, setSelectedLang] = useState('hi')
  const [translatedOutput, setTranslatedOutput] = useState('')
  
  // Voice translation simulation state
  const [isRecording, setIsRecording] = useState(false)
  const [voiceText, setVoiceText] = useState('')
  
  // Menu translation simulation state
  const [menuImage, setMenuImage] = useState(null)
  const [translatingMenu, setTranslatingMenu] = useState(false)
  const [translatedMenuText, setTranslatedMenuText] = useState(null)

  // Signboard translation simulation state
  const [signImage, setSignImage] = useState(null)
  const [translatingSign, setTranslatingSign] = useState(false)
  const [translatedSignText, setTranslatedSignText] = useState(null)

  const languagesList = [
    { code: 'hi', name: 'Hindi 🇮🇳' },
    { code: 'es', name: 'Spanish 🇪🇸' },
    { code: 'fr', name: 'French 🇫🇷' }
  ]

  const handleTranslateText = () => {
    if (!textToTranslate.trim()) return
    // Simple mock translation
    const normalized = textToTranslate.toLowerCase()
    const dict = translatorLanguages[selectedLang]
    
    let result = ''
    if (normalized.includes('hello') || normalized.includes('hi')) {
      result = dict.greetings
    } else if (normalized.includes('where') || normalized.includes('toilet') || normalized.includes('bathroom')) {
      result = dict.directions
    } else if (normalized.includes('water') || normalized.includes('drink') || normalized.includes('bill')) {
      result = dict.dining
    } else if (normalized.includes('how much') || normalized.includes('price') || normalized.includes('cost')) {
      result = dict.shopping
    } else if (normalized.includes('help') || normalized.includes('police') || normalized.includes('hospital')) {
      result = dict.emergency
    } else {
      // Fallback simple dictionary simulation
      const langNames = { hi: 'यह एक अनुवाद है (Yeh ek anuvaad hai)', es: 'Esta es una traducción.', fr: 'Ceci est une traduction.' }
      result = langNames[selectedLang]
    }
    setTranslatedOutput(result)
  }

  // Simulate voice recording
  const startVoiceRecording = () => {
    setIsRecording(true)
    setVoiceText('')
    setTimeout(() => {
      setIsRecording(false)
      const voiceDict = {
        hi: "आपसे मिलकर खुशी हुई (Aap-se milkar khushi hui) -> Nice to meet you",
        es: "Mucho gusto -> Nice to meet you",
        fr: "Enchanté de vous rencontrer -> Nice to meet you"
      }
      setVoiceText(voiceDict[selectedLang])
    }, 2800)
  }

  // Simulate menu upload & OCR
  const handleMenuUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMenuImage(URL.createObjectURL(e.target.files[0]))
      setTranslatingMenu(true)
      setTranslatedMenuText(null)
      setTimeout(() => {
        setTranslatingMenu(false)
        setTranslatedMenuText([
          { original: "Sopa de Tomate", translated: "Tomato Soup (₹250)" },
          { original: "Paella de Marisco", translated: "Seafood Rice Platter (₹780)" },
          { original: "Tarta de Tres Leches", translated: "Three Milks Cake Dessert (₹300)" }
        ])
      }, 2500)
    }
  }

  // Simulate signboard upload & overlay
  const handleSignUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSignImage(URL.createObjectURL(e.target.files[0]))
      setTranslatingSign(true)
      setTranslatedSignText(null)
      setTimeout(() => {
        setTranslatingSign(false)
        setTranslatedSignText("⚠️ DANGER: HIGH TIDE & ROUGH CURRENTS. SWIMMING STRICTLY PROHIBITED.")
      }, 2500)
    }
  }

  return (
    <Container className="py-12 max-w-4xl">
      <Section
        title="AI Travel Translator"
        subtitle="Translate voice, text, signs, and menus instantly across multiple languages"
      >
        {/* TAB CONTROLS */}
        <div className="flex flex-wrap gap-2 mb-8 bg-slate-100 p-1.5 rounded-xl">
          {[
            { id: 'text', label: '🔤 Text' },
            { id: 'voice', label: '🎙️ Voice' },
            { id: 'menu', label: '🍴 Menu OCR' },
            { id: 'sign', label: '🛑 Signboards' },
            { id: 'phrases', label: '📖 Common Phrases' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SELECT TARGET LANGUAGE */}
        {activeTab !== 'phrases' && (
          <div className="mb-6 flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto text-sm">
            <span className="font-bold text-slate-700">Translate to:</span>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="px-3 py-1.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 font-bold"
            >
              {languagesList.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* TEXT TRANSLATION */}
        {activeTab === 'text' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
              <h4 className="font-bold text-slate-800 text-sm mb-3">Input English Text</h4>
              <textarea
                rows={5}
                className="w-full p-3 border border-slate-300 rounded-2xl text-sm outline-none focus:border-purple-500"
                placeholder="Type hello, where is the toilet, how much does this cost..."
                value={textToTranslate}
                onChange={(e) => setTextToTranslate(e.target.value)}
              />
              <Button onClick={handleTranslateText} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-xl text-xs mt-3 shadow">
                Translate
              </Button>
            </Card>

            <Card className="p-6 bg-purple-50/50 border border-purple-100 rounded-3xl shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-3">Translated Output</h4>
                <div className="text-lg font-bold text-purple-900 leading-relaxed min-h-[80px]">
                  {translatedOutput || "Translation will appear here..."}
                </div>
              </div>
              {translatedOutput && (
                <button 
                  onClick={() => {
                    const speech = new SpeechSynthesisUtterance(translatedOutput.split(' (')[0])
                    speech.lang = selectedLang === 'hi' ? 'hi-IN' : selectedLang === 'es' ? 'es-ES' : 'fr-FR'
                    window.speechSynthesis.speak(speech)
                  }}
                  className="text-left text-xs font-bold text-purple-600 hover:underline mt-4 flex items-center gap-1"
                >
                  🔊 Listen Pronunciation
                </button>
              )}
            </Card>
          </div>
        )}

        {/* VOICE TRANSLATION */}
        {activeTab === 'voice' && (
          <Card className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm max-w-xl mx-auto text-center animate-fadeIn">
            <h4 className="font-bold text-slate-800 text-base mb-2">Speak into Microphone</h4>
            <p className="text-xs text-slate-500 mb-6">Hold button and say a travel phrase in English.</p>

            <div className="flex flex-col items-center gap-6 justify-center">
              {isRecording ? (
                /* Animated Audio Waveform */
                <div className="flex items-center gap-1.5 justify-center h-16 w-full">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(bar => (
                    <div
                      key={bar}
                      className="bg-purple-600 w-1.5 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 40 + 20}px`,
                        animationDuration: `${Math.random() * 400 + 400}ms`
                      }}
                    />
                  ))}
                </div>
              ) : (
                <button
                  onClick={startVoiceRecording}
                  className="w-20 h-20 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-3xl flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                >
                  🎙️
                </button>
              )}

              <div className="w-full">
                <span className="text-xs font-semibold uppercase text-slate-400">AI Recognized & Translated:</span>
                <Card className="mt-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl min-h-[60px] text-sm font-bold text-purple-900 flex items-center justify-center leading-relaxed">
                  {isRecording ? "Listening & computing audio waves..." : voiceText || "Press microphone to talk..."}
                </Card>
              </div>
            </div>
          </Card>
        )}

        {/* MENU TRANSLATION */}
        {activeTab === 'menu' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-2">Upload Menu Photo</h4>
                <p className="text-xs text-slate-400 mb-4">Upload a photo of local food menus to translate descriptions and prices.</p>
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMenuUpload}
                  className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>

              {menuImage && (
                <div className="h-44 rounded-xl overflow-hidden mt-4 border border-slate-100">
                  <img src={menuImage} alt="Menu preview" className="w-full h-full object-cover" />
                </div>
              )}
            </Card>

            <Card className="p-6 bg-purple-50/30 border border-purple-100 rounded-3xl shadow-xs">
              <h4 className="font-bold text-slate-800 text-sm mb-3">AI Translated Menu Items</h4>
              
              {translatingMenu && (
                <div className="text-center py-12 text-slate-500 text-xs font-semibold">
                  <span className="animate-spin inline-block mr-2">🔄</span> Running OCR text overlay scans...
                </div>
              )}

              {translatedMenuText && (
                <div className="space-y-3">
                  {translatedMenuText.map((item, idx) => (
                    <div key={idx} className="bg-white p-3 border border-slate-100 rounded-xl text-xs">
                      <span className="text-slate-400 line-through block font-medium">{item.original}</span>
                      <span className="text-purple-800 font-bold block mt-0.5">{item.translated}</span>
                    </div>
                  ))}
                </div>
              )}

              {!menuImage && !translatingMenu && (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Upload an image to start translation scans.
                </div>
              )}
            </Card>
          </div>
        )}

        {/* SIGNBOARD TRANSLATION */}
        {activeTab === 'sign' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-2">Upload Signboard Photo</h4>
                <p className="text-xs text-slate-400 mb-4">Upload warning signs, road signs, or directions to translate overlay.</p>
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSignUpload}
                  className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>

              {signImage && (
                <div className="h-44 rounded-xl overflow-hidden mt-4 border border-slate-100">
                  <img src={signImage} alt="Signboard preview" className="w-full h-full object-cover" />
                </div>
              )}
            </Card>

            <Card className="p-6 bg-purple-50/30 border border-purple-100 rounded-3xl shadow-xs">
              <h4 className="font-bold text-slate-800 text-sm mb-3">AI Overlay Sign Translation</h4>
              
              {translatingSign && (
                <div className="text-center py-12 text-slate-500 text-xs font-semibold">
                  <span className="animate-spin inline-block mr-2">🔄</span> Reconstructing camera overlays...
                </div>
              )}

              {translatedSignText && (
                <div className="bg-red-50 p-4 border border-red-200 text-red-800 rounded-2xl font-bold text-xs leading-relaxed shadow-xs">
                  {translatedSignText}
                </div>
              )}

              {!signImage && !translatingSign && (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Upload signboard image to run OCR overlay overlays.
                </div>
              )}
            </Card>
          </div>
        )}

        {/* COMMON PHRASES */}
        {activeTab === 'phrases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {Object.entries(translatorLanguages).map(([langKey, dict]) => {
              const langLabel = langKey === 'hi' ? 'Hindi 🇮🇳' : langKey === 'es' ? 'Spanish 🇪🇸' : 'French 🇫🇷'
              return (
                <Card key={langKey} className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs">
                  <h4 className="font-bold text-slate-900 text-sm mb-3 border-b pb-2 border-slate-100">{langLabel} Key Phrases</h4>
                  <div className="space-y-3.5 text-xs font-semibold text-slate-600">
                    <div className="flex justify-between">
                      <span>Greetings:</span>
                      <span className="text-slate-900">{dict.greetings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Directions:</span>
                      <span className="text-slate-900">{dict.directions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dining:</span>
                      <span className="text-slate-900">{dict.dining}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shopping:</span>
                      <span className="text-slate-900">{dict.shopping}</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>Emergency:</span>
                      <span className="font-extrabold">{dict.emergency}</span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </Section>
    </Container>
  )
}
