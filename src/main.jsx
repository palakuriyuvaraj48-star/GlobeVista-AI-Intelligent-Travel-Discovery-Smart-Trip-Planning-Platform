import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppWithRoutes from './AppWithRoutes'
import './index.css'
import 'leaflet/dist/leaflet.css'
import './i18n/i18n'
import { LanguageProvider } from './LanguageContext'
import { TripCartProvider } from './context/TripCartContext'
import { TravelProvider } from './context/TravelContext'

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMessage: '' }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || 'Unknown render error',
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('RootErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-slate-50 px-4">
          <div className="w-full max-w-xl rounded-2xl border border-red-200 bg-white p-6 shadow">
            <h1 className="text-2xl font-bold text-red-600">Render Error</h1>
            <p className="mt-3 text-sm text-slate-700">{this.state.errorMessage}</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <LanguageProvider>
        <TravelProvider>
          <TripCartProvider>
            <BrowserRouter>
              <AppWithRoutes />
            </BrowserRouter>
          </TripCartProvider>
        </TravelProvider>
      </LanguageProvider>
    </RootErrorBoundary>
  </React.StrictMode>,
)
