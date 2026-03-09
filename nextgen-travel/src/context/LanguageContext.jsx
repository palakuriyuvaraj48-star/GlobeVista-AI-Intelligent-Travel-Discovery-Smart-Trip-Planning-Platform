import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'ntp_language'

const translations = {
  en: {
    brand: 'NextGen Tourism Intelligence',
    tagline: 'Trusted travel guidance. Premium experiences. Smart planning.',
    searchPlaceholder: 'Search states, hotels, restaurants, events, rentals, palaces…',
    filters: 'Filters',
    clear: 'Clear',
    apply: 'Apply',
    favorites: 'My Favorites',
    recommended: 'Recommended Based On Your Interests',
    preferences: 'Profile Preferences',
    openPreferences: 'Set preferences',
    explore: 'Explore',
  },
  hi: {
    brand: 'नेक्स्टजेन टूरिज़्म इंटेलिजेंस',
    tagline: 'विश्वसनीय यात्रा मार्गदर्शन। प्रीमियम अनुभव। स्मार्ट प्लानिंग।',
    searchPlaceholder: 'राज्य, होटल, रेस्टोरेंट, इवेंट, रेंटल, पैलेस खोजें…',
    filters: 'फ़िल्टर',
    clear: 'क्लियर',
    apply: 'लागू करें',
    favorites: 'मेरे फ़ेवरेट',
    recommended: 'आपकी पसंद के अनुसार सुझाव',
    preferences: 'प्रोफ़ाइल पसंद',
    openPreferences: 'पसंद सेट करें',
    explore: 'एक्सप्लोर',
  },
  fr: {
    brand: 'Intelligence Touristique NextGen',
    tagline: 'Conseils fiables. Expériences premium. Planification intelligente.',
    searchPlaceholder: 'Rechercher États, hôtels, restaurants, événements, locations…',
    filters: 'Filtres',
    clear: 'Effacer',
    apply: 'Appliquer',
    favorites: 'Mes favoris',
    recommended: 'Recommandé selon vos intérêts',
    preferences: 'Préférences',
    openPreferences: 'Définir les préférences',
    explore: 'Explorer',
  },
  es: {
    brand: 'Inteligencia Turística NextGen',
    tagline: 'Guía confiable. Experiencias premium. Planificación inteligente.',
    searchPlaceholder: 'Buscar estados, hoteles, restaurantes, eventos, alquileres…',
    filters: 'Filtros',
    clear: 'Limpiar',
    apply: 'Aplicar',
    favorites: 'Mis favoritos',
    recommended: 'Recomendado según tus intereses',
    preferences: 'Preferencias',
    openPreferences: 'Configurar preferencias',
    explore: 'Explorar',
  },
}

function normalizeLanguage(input) {
  const key = String(input || '').toLowerCase()
  if (key.startsWith('hi')) return 'hi'
  if (key.startsWith('fr')) return 'fr'
  if (key.startsWith('es')) return 'es'
  return 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const stored = normalizeLanguage(localStorage.getItem(STORAGE_KEY))
    const initial = stored || normalizeLanguage(navigator.language)
    setLanguage(initial)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const dictionary = translations[language] || translations.en

  const t = useCallback(
    (key) => {
      if (!key) return ''
      return dictionary[key] ?? translations.en[key] ?? key
    },
    [dictionary]
  )

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages: [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'Hindi' },
        { code: 'fr', label: 'French' },
        { code: 'es', label: 'Spanish' },
      ],
      t,
    }),
    [language, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
