import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import en from './en.json'
import hi from './hi.json'
import es from './es.json'
import fr from './fr.json'

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  es: { translation: es },
  fr: { translation: fr }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
