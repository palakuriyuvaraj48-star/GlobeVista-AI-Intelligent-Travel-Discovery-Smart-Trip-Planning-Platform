import { useState, useCallback } from 'react'

export function useVoiceAssistant(onResult) {
  const [listening, setListening] = useState(false)
  const [error, setError] = useState(null)

  const startListening = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('Speech recognition not supported in this browser.')
      return
    }
    setError(null)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => setListening(true)
    recognition.onend = () => setListening(false)
    recognition.onerror = (e) => {
      setListening(false)
      setError(e.error)
    }
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript
      if (onResult) onResult(transcript)
    }
    recognition.start()
  }, [onResult])

  return { listening, error, startListening }
}
