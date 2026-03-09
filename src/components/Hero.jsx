export default function Hero({ image, title, subtitle }) {
  return (
    <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-lg md:text-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}