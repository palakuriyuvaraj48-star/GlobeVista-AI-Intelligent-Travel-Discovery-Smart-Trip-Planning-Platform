# GlobeVista AI — Intelligent Travel Discovery Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18-blue" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-4-purple" alt="Vite 4" />
  <img src="https://img.shields.io/badge/Tailwind-3-cyan" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer_Motion-8-black" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Leaflet-1-green" alt="Leaflet" />
  <img src="https://img.shields.io/badge/Recharts-2-orange" alt="Recharts" />
</div>

## 🌟 Overview

GlobeVista AI is a cutting-edge **AI-powered travel discovery and planning platform** inspired by Google Travel, Airbnb Explore, and modern travel startups. It combines intelligent recommendations, interactive maps, and collaborative features to deliver exceptional travel experiences.

## ✨ Key Features

### 🤖 AI-Powered Features
- **AI Trip Planner** - Personalized itinerary generation
- **Smart Recommendations** - AI-driven destination suggestions
- **Budget Calculator** - Intelligent cost estimation
- **Travel Heatmap** - Popular destination visualization
- **Trip Predictor** - AI-powered travel suggestions
- **AI Chat Assistant** - 24/7 travel support

### 🗺️ Interactive Maps
- **Destination Markers** - Visual place exploration
- **Cluster Markers** - Efficient location grouping
- **Heatmap Layers** - Popularity visualization
- **Trip Routes** - Interactive journey planning
- **Real-time Navigation** - Smooth map interactions

### 👥 Group Travel
- **Travel Matchmaker** - Find compatible travel buddies
- **Group Trip Creation** - Collaborative planning
- **Expense Splitting** - Fair cost distribution
- **Activity Voting** - Democratic decision making
- **Shared Itinerary** - Real-time collaboration

### 📊 Analytics Dashboard
- **Travel Trends** - Popular destination insights
- **Budget Analytics** - Spending patterns
- **Seasonal Trends** - Optimal travel times
- **User Demographics** - Audience insights
- **KPI Tracking** - Performance metrics

### 🎨 Professional UI/UX
- **Modern Design System** - Consistent components
- **Responsive Layout** - Mobile-first approach
- **Smooth Animations** - Framer Motion integration
- **Dark Mode Support** - Theme customization
- **Accessibility** - WCAG compliant

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern component framework
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing

### Maps & Visualization
- **React Leaflet** - Interactive maps
- **Leaflet Heat** - Heatmap visualization
- **Recharts** - Data visualization
- **D3.js** - Advanced charts

### Backend (Optional)
- **Node.js** - Server runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication
- **Redis** - Caching layer

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Container.jsx
│   │   ├── Section.jsx
│   │   ├── Badge.jsx
│   │   ├── Avatar.jsx
│   │   ├── Input.jsx
│   │   └── Modal.jsx
│   └── layout/             # Layout components
│       ├── Navbar.jsx
│       ├── NavbarPro.jsx
│       ├── Footer.jsx
│       └── Sidebar.jsx
├── features/               # Feature modules
│   ├── ai/
│   │   ├── AIPlanner.jsx
│   │   ├── AIChat.jsx
│   │   └── AIRecommendations.jsx
│   ├── travel/
│   │   ├── Destinations.jsx
│   │   ├── Hotels.jsx
│   │   ├── Restaurants.jsx
│   │   └── Experiences.jsx
│   ├── group/
│   │   ├── GroupTravel.jsx
│   │   └── TripMatchmaker.jsx
│   ├── map/
│   │   ├── TravelMap.jsx
│   │   ├── TripRoute.jsx
│   │   └── HeatmapLayer.jsx
│   └── dashboard/
│       ├── TravelDashboard.jsx
│       └── AnalyticsDashboard.jsx
├── pages/                  # Route pages
│   ├── Home.jsx
│   ├── HomePro.jsx
│   ├── Explore.jsx
│   ├── AIPlannerPage.jsx
│   ├── TravelDashboard.jsx
│   ├── GroupTravel.jsx
│   └── TravelMapPage.jsx
├── data/                   # Static data
│   ├── destinations.js
│   ├── hotels.js
│   └── restaurants.js
├── utils/                  # Utilities
│   ├── api.js
│   └── helpers.js
└── hooks/                  # Custom hooks
    ├── useAdvancedFilter.js
    └── useTravelData.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/globavista-ai.git
cd globavista-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:5173
```

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000
VITE_MAPBOX_TOKEN=your_mapbox_access_token

# Feature Flags
VITE_ENABLE_AI_FEATURES=true
VITE_ENABLE_DARK_MODE=true

# Analytics
VITE_GA_TRACKING_ID=your_google_analytics_id
```

## 📱 Screenshots

### Homepage
![Homepage](screenshots/homepage.png)
*Modern hero section with AI-powered search*

### AI Trip Planner
![AI Planner](screenshots/ai-planner.png)
*Intelligent itinerary generation*

### Travel Map
![Travel Map](screenshots/travel-map.png)
*Interactive map with heatmap visualization*

### Analytics Dashboard
![Dashboard](screenshots/dashboard.png)
*Comprehensive travel analytics*

### Group Travel
![Group Travel](screenshots/group-travel.png)
*Collaborative trip planning*

## 🎨 Design System

### Color Palette
- **Primary**: Purple to Blue gradient
- **Background**: Gray-50
- **Cards**: White
- **Accent**: Indigo/Cyan
- **Text**: Slate-900

### Typography
- **Font**: Inter (Plus Jakarta Sans alternative)
- **Headings**: `text-3xl font-semibold tracking-tight`
- **Subheadings**: `text-xl font-medium`
- **Body**: `text-gray-600 leading-relaxed`

### Components
- **Consistent spacing**: 4px grid system
- **Rounded corners**: `rounded-xl` and `rounded-2xl`
- **Shadows**: `shadow-lg` and `shadow-2xl`
- **Transitions**: `transition-all duration-300`

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking
npm run format       # Prettier formatting

# Testing
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run coverage     # Coverage report
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: < 500KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - Amazing UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform
- **Unsplash** - Beautiful travel images
- **Mapbox** - Mapping services
- **Framer Motion** - Animation library

## 🚀 Future Roadmap

### Phase 1 (Q2 2024)
- [ ] Mobile app development
- [ ] Real-time collaboration
- [ ] Advanced AI features
- [ ] Payment integration

### Phase 2 (Q3 2024)
- [ ] Multi-language support
- [ ] Social features
- [ ] Premium subscriptions
- [ ] API for third-party integrations

### Phase 3 (Q4 2024)
- [ ] Machine learning models
- [ ] Virtual reality tours
- [ ] Blockchain integration
- [ ] Global expansion

## 📞 Contact

- **Project Lead**: [Your Name](mailto:your.email@example.com)
- **Twitter**: [@yourusername](https://twitter.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🌟 Show Your Support

If you find this project helpful, please consider:

- ⭐ Star the repository
- 🐛 Report issues
- 💡 Suggest features
- 📝 Improve documentation
- 🤝 Contribute code

---

<div align="center">
  <p>Made with ❤️ by the GlobeVista AI Team</p>
  <p>© 2024 GlobeVista AI. All rights reserved.</p>
</div>
