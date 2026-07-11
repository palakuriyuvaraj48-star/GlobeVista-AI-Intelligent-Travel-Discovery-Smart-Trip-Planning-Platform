import { useState, useMemo } from "react";
import TravelCard from "../components/TravelCard";
import { hiddenPlaces } from "../data/hiddenPlaces";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

export default function HiddenPlaces() {
  const [selectedPreference, setSelectedPreference] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const preferences = ["All", "Nature Trails", "Secret Viewpoints", "Local Cafés", "Cultural Experiences"];

  const filteredPlaces = useMemo(() => {
    return hiddenPlaces.filter((place) => {
      const matchesSearch = 
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPreference = 
        selectedPreference === "All" ||
        (selectedPreference === "Nature Trails" && place.highlights.some(h => h.toLowerCase().includes('trail') || h.toLowerCase().includes('walk'))) ||
        (selectedPreference === "Secret Viewpoints" && place.highlights.some(h => h.toLowerCase().includes('viewpoint') || h.toLowerCase().includes('peak'))) ||
        (selectedPreference === "Local Cafés" && place.description.toLowerCase().includes('escape') || place.name === "Mandu Fort") || // Mock matches
        (selectedPreference === "Cultural Experiences" && place.highlights.some(h => h.toLowerCase().includes('fort') || h.toLowerCase().includes('heritage') || h.toLowerCase().includes('palace')));

      return matchesSearch && matchesPreference;
    });
  }, [selectedPreference, searchQuery]);

  return (
    <Container className="py-12">
      <Section
        title="💎 AI Hidden Gems & Secret Spots"
        subtitle="Explore less-crowded landmarks, scenic trails, and quiet retreats tailored to your interest"
      >
        {/* Preference Filters & Search */}
        <Card className="p-6 mb-8 bg-white border border-slate-200 shadow-sm rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {preferences.map((pref) => (
                <button
                  key={pref}
                  onClick={() => setSelectedPreference(pref)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedPreference === pref
                      ? "bg-purple-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {pref}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search hidden gems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2.5 rounded-xl border border-slate-300 text-xs outline-none focus:border-purple-500 w-full md:max-w-xs font-medium"
            />
          </div>
        </Card>

        {/* Gems List Grid */}
        {filteredPlaces.length === 0 ? (
          <div className="text-center py-16 text-slate-400 bg-white border border-slate-100 rounded-3xl">
            <span className="text-5xl block mb-2">💎</span>
            No secret spots match your filters or preference.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="relative group">
                {/* Low crowd tag overlaid on card top left */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-emerald-500/90 text-white font-bold border-none py-1 px-2.5 shadow-sm text-[10px]">
                    🟢 Low Crowd (95% less busy)
                  </Badge>
                </div>
                <TravelCard item={{
                  ...place,
                  // Tweak parameters to show detailed sub-highlights in travel cards
                  category: `Hidden ${place.category} Gem`,
                  startingPrice: place.startingPrice
                }} />
              </div>
            ))}
          </div>
        )}
      </Section>
    </Container>
  );
}
