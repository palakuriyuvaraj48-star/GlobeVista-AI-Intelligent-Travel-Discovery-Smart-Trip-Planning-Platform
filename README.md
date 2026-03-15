# GlobeVista AI — Intelligent Travel Discovery Platform

An AI-powered travel discovery and planning platform inspired by Google Travel, Airbnb Explore, and modern travel startups.

## 🌟 Features

- **AI Trip Planner**: Let AI create personalized itineraries
- **Smart Recommendations**: Get destination suggestions based on preferences
- **Interactive Travel Map**: Visual exploration with markers and heatmaps
- **Group Travel Engine**: Find travel buddies and create group trips
- **Travel Intelligence Dashboard**: Analytics and insights
- **Premium Hotel & Restaurant Listings**: Curated accommodations and dining
- **Budget Calculator**: Estimate travel costs accurately
- **Real-time Search & Filtering**: Advanced filtering by domain, category, and location

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Maps**: React Leaflet
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Backend**: Node.js, Express, MongoDB Atlas
- **Authentication**: JWT, bcrypt
- **AI Features**: Custom AI-powered recommendations

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
│       └── Footer.jsx
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
│   │   └── GroupTravel.jsx
│   ├── map/
│   │   ├── TravelMap.jsx
│   │   └── TripRoute.jsx
│   └── dashboard/
│       └── TravelDashboard.jsx
├── pages/                  # Route pages
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── AIPlannerPage.jsx
│   ├── TravelDashboard.jsx
│   ├── GroupTravel.jsx
│   └── ...
├── data/                   # Static data
│   ├── destinations.js
│   ├── hotels.js
│   └── restaurants.js
└── utils/                  # Utilities
    ├── api.js
    └── helpers.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/globavista-ai.git
cd globavista-ai
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_MAPBOX_TOKEN=your_mapbox_access_token
```

## 📱 Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### AI Trip Planner
![AI Planner](screenshots/ai-planner.png)

### Travel Map
![Travel Map](screenshots/travel-map.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Group Travel
![Group Travel](screenshots/group-travel.png)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

GlobeVista AI uses a modern design system with:

- **Colors**: Purple to blue gradient primary, gray-50 background
- **Typography**: Inter font family, clean hierarchy
- **Components**: Consistent, reusable UI components
- **Animations**: Smooth transitions with Framer Motion
- **Responsive**: Mobile-first responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Future Improvements

- [ ] Real-time collaboration features
- [ ] Mobile app development
- [ ] Advanced AI chat integration
- [ ] Multi-language support
- [ ] Payment integration
- [ ] Social features and reviews

## 📞 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/globavista-ai](https://github.com/yourusername/globavista-ai)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Unsplash](https://unsplash.com/) for beautiful travel images
- [Mapbox](https://www.mapbox.com/) for mapping services
