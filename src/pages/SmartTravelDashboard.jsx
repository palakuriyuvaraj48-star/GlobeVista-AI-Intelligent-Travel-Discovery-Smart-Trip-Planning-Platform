export default function SmartTravelDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Smart Travel Dashboard</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Trip Overview */}
        <div className="rounded-xl shadow-md p-4">
          <div className="font-bold text-lg mb-2">Trip Overview</div>
          <div>Destination: Paris</div>
          <div>Dates: 2026-03-10 to 2026-03-20</div>
          <div>Budget: $2000</div>
          <div>Weather: Sunny</div>
        </div>
        {/* Travel Itinerary */}
        <div className="rounded-xl shadow-md p-4">
          <div className="font-bold text-lg mb-2">Travel Itinerary</div>
          <div>9:00 Eiffel Tower</div>
          <div>12:00 Lunch</div>
          <div>3:00 Louvre Museum</div>
        </div>
        {/* Budget Tracker */}
        <div className="rounded-xl shadow-md p-4">
          <div className="font-bold text-lg mb-2">Budget Tracker</div>
          <div>Hotel: $800</div>
          <div>Transport: $400</div>
          <div>Food: $300</div>
        </div>
        {/* Weather Widget */}
        <div className="rounded-xl shadow-md p-4 col-span-1">
          <div className="font-bold text-lg mb-2">Weather Widget</div>
          <div>Current: 24°C Sunny</div>
          <div>Forecast: 24, 23, 22, 21, 20, 19, 18°C</div>
        </div>
        {/* Wishlist Destinations */}
        <div className="rounded-xl shadow-md p-4 col-span-2">
          <div className="font-bold text-lg mb-2">Wishlist Destinations</div>
          <div>Paris, Tokyo, Goa</div>
        </div>
      </div>
    </div>
  );
}