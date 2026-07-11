import { useEffect, useState } from "react";
import InteractiveMapSection from "../components/InteractiveMapSection";
import { isWishlisted, toggleWishlistItem } from "../utils/wishlistStorage";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const events = [
  {
    id: 1,
    name: "Sunset Beats Festival",
    city: "Goa",
    location: "Goa",
    date: "March 28, 2026",
    type: "Festival",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200",
    rating: 4.7,
    interests: ["Music", "Beaches", "Nightlife"]
  },
  {
    id: 2,
    name: "Royal Courtyard Concert",
    city: "Jaipur",
    location: "Jaipur",
    date: "April 12, 2026",
    type: "Concert",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200",
    rating: 4.6,
    interests: ["History", "Music", "Heritage"]
  },
  {
    id: 3,
    name: "Kerala Cultural Nights",
    city: "Kochi",
    location: "Kochi",
    date: "May 2, 2026",
    type: "Cultural Event",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",
    rating: 4.5,
    interests: ["Culture", "Dance", "Food"]
  },
  {
    id: 4,
    name: "Himalayan Folk Gathering",
    city: "Manali",
    location: "Manali",
    date: "May 18, 2026",
    type: "Cultural Event",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1200",
    rating: 4.4,
    interests: ["Culture", "Nature", "Mountains"]
  },
  {
    id: 5,
    name: "Premier League Derby",
    city: "Mumbai",
    location: "Mumbai",
    date: "June 7, 2026",
    type: "Sports",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200",
    rating: 4.8,
    interests: ["Sports", "Adventure", "Action"]
  },
  {
    id: 6,
    name: "Grand Monsoon Food Carnival",
    city: "Goa",
    location: "Goa",
    date: "June 25, 2026",
    type: "Food Festival",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
    rating: 4.9,
    interests: ["Food", "Local Cuisine", "Family"]
  },
  {
    id: 7,
    name: "Art & Architecture Biennale",
    city: "Jaipur",
    location: "Jaipur",
    date: "July 10, 2026",
    type: "Exhibition",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200",
    rating: 4.6,
    interests: ["Architecture", "Art", "Exhibitions"]
  },
  {
    id: 8,
    name: "Traditional Temple Festivities",
    city: "Kochi",
    location: "Kochi",
    date: "August 12, 2026",
    type: "Local Celebration",
    image: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?w=1200",
    rating: 4.7,
    interests: ["Culture", "History", "Festivals"]
  }
];

export default function Events() {
  const [savedIds, setSavedIds] = useState([]);
  const [showRecommendedOnly, setShowRecommendedOnly] = useState(false);
  const [userInterests, setUserInterests] = useState(["Culture", "Music", "Food", "History"]); // Mock user interests
  
  // Itinerary addition modal states
  const [itineraries, setItineraries] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [targetItineraryId, setTargetItineraryId] = useState("");
  const [targetDay, setTargetDay] = useState("1");
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    setSavedIds(events.filter((event) => isWishlisted(`event-${event.id}`)).map((event) => event.id));
    const saved = JSON.parse(localStorage.getItem('savedItineraries') || '[]');
    setItineraries(saved);
  }, []);

  const handleOpenAddModal = (event) => {
    const saved = JSON.parse(localStorage.getItem('savedItineraries') || '[]');
    setItineraries(saved);
    if (saved.length === 0) {
      alert("You don't have any saved itineraries yet. Go to the AI Trip Planner and save a trip first!");
      return;
    }
    setSelectedEvent(event);
    setTargetItineraryId(saved[0]?.id || "");
    setTargetDay("1");
  };

  const handleAppendEvent = () => {
    if (!targetItineraryId || !selectedEvent) return;
    
    const updatedItineraries = itineraries.map(itin => {
      if (itin.id !== Number(targetItineraryId)) return itin;
      
      const updatedDays = itin.days.map(day => {
        if (day.day !== Number(targetDay)) return day;
        return {
          ...day,
          evening: `${day.evening} (Attending: ${selectedEvent.name} at ${selectedEvent.city})`
        };
      });

      return {
        ...itin,
        days: updatedDays
      };
    });

    localStorage.setItem('savedItineraries', JSON.stringify(updatedItineraries));
    setItineraries(updatedItineraries);
    
    const targetItin = itineraries.find(i => i.id === Number(targetItineraryId));
    setToastMsg(`Successfully added "${selectedEvent.name}" to Day ${targetDay} of your ${targetItin.destination} itinerary!`);
    setSelectedEvent(null);
    setTimeout(() => setToastMsg(""), 4000);
  };

  const selectedItinDetails = itineraries.find(i => i.id === Number(targetItineraryId));

  // Filter events based on AI personalization toggle
  const filteredEvents = showRecommendedOnly 
    ? events.filter(e => e.interests.some(interest => userInterests.includes(interest)))
    : events;

  return (
    <section className="min-h-screen bg-slate-50 relative">
      <div className="bg-gradient-to-r from-fuchsia-600 to-rose-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-100">Live Local Events</p>
          <h1 className="mt-3 text-4xl font-bold">Concerts, festivals, and local celebrations</h1>
          <p className="mt-3 max-w-2xl text-rose-100 font-medium">
            Plan around the experiences that make each city memorable, including sports, food festivals, and exhibitions.
          </p>
        </div>
      </div>

      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white font-bold p-4 rounded-2xl shadow-2xl border border-slate-700 animate-slideIn">
          ✨ {toastMsg}
        </div>
      )}

      {/* Append to Itinerary Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 animate-fadeIn">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Add to Itinerary</h3>
            <p className="text-xs text-slate-500 mb-4">Append "{selectedEvent.name}" to one of your saved itineraries.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5">Choose Itinerary</label>
                <select
                  value={targetItineraryId}
                  onChange={(e) => {
                    setTargetItineraryId(e.target.value);
                    setTargetDay("1");
                  }}
                  className="w-full p-2.5 border border-slate-300 rounded-xl text-xs outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                >
                  {itineraries.map(itin => (
                    <option key={itin.id} value={itin.id}>{itin.destination} ({itin.duration})</option>
                  ))}
                </select>
              </div>

              {selectedItinDetails && (
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Choose Day</label>
                  <select
                    value={targetDay}
                    onChange={(e) => setTargetDay(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                  >
                    {selectedItinDetails.days?.map(d => (
                      <option key={d.day} value={d.day}>Day {d.day}: {d.title?.split(': ')[1] || d.title}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button onClick={handleAppendEvent} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-xl text-xs">
                  Confirm Addition
                </Button>
                <Button onClick={() => setSelectedEvent(null)} variant="ghost" className="flex-1 border border-slate-200 py-2 rounded-xl text-xs text-slate-600">
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Personalized recommendations toggle */}
        <div className="mb-8 flex items-center justify-between p-4 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <div>
            <span className="font-bold text-slate-800 text-sm">🤖 AI Event Matcher</span>
            <p className="text-xs text-slate-500 mt-0.5">Filter events that match your profile interests ({userInterests.join(', ')}).</p>
          </div>
          <button
            onClick={() => setShowRecommendedOnly(!showRecommendedOnly)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${
              showRecommendedOnly 
                ? 'bg-purple-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {showRecommendedOnly ? 'Recommended Matches Active' : 'Show All Events'}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl border border-slate-100">
              <div className="relative">
                <img src={event.image} alt={event.name} loading="lazy" className="h-56 w-full object-cover" />
                <button
                  type="button"
                  onClick={() => {
                    const next = toggleWishlistItem({
                      id: `event-${event.id}`,
                      title: event.name,
                      description: `${event.type} in ${event.city} on ${event.date}`,
                      image: event.image,
                      rating: event.rating,
                      category: "Event",
                      location: event.city,
                    });
                    setSavedIds(next.filter((item) => item.category === "Event").map((item) => Number(String(item.id).replace("event-", ""))));
                  }}
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    savedIds.includes(event.id) ? "bg-rose-500 text-white" : "bg-white/90 text-slate-700"
                  }`}
                >
                  {savedIds.includes(event.id) ? "Saved" : "Save"}
                </button>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">{event.type}</p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-900">{event.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">{event.city}</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700 shrink-0">
                    ⭐ {event.rating}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {event.interests.map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-medium">#{tag}</span>
                  ))}
                </div>

                <p className="text-sm font-medium text-slate-600">{event.date}</p>
                
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenAddModal(event)}
                    className="flex-1 rounded-lg bg-purple-600 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-purple-700"
                  >
                    ➕ Add to Itinerary
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-lg bg-rose-600 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-rose-700"
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <InteractiveMapSection
            title="Event Map Explorer"
            description="Browse concerts, festivals, and cultural events with quick location previews."
            items={filteredEvents}
            previewLabel="Event preview"
          />
        </div>
      </div>
    </section>
  );
}
