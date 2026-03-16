export default function DestinationHero({ destination, images }) {
  return (
    <div className="relative">
      {/* Main Hero Image */}
      <div className="relative h-[60vh] w-full min-h-[400px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            {destination.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-md">
            "{destination.description}"
          </p>
        </div>
      </div>

      {/* Image Thumbnails */}
      <div className="absolute bottom-[-40px] right-12 hidden lg:flex gap-4">
        {images?.map((img, idx) => (
          <div key={idx} className="w-32 h-24 rounded-xl overflow-hidden border-2 border-white shadow-xl cursor-pointer hover:scale-105 transition-transform">
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
