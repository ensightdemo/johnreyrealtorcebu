export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-deepblue to-navy" />
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920&q=80)', backgroundSize:'cover', backgroundPosition:'center'}} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 lg:py-40 text-white">
        <p className="font-ui text-gold text-xs sm:text-sm uppercase tracking-[0.18em] mb-5">Federal Land, Inc. · Accredited Sales Partner</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] max-w-3xl">
          Master-planned communities. Secure assets. A lifestyle built to last.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
          I'm John Rey Bercero, your dedicated strategic advisor. Together we'll navigate Federal Land's portfolio with clarity, care, and a long-term view of your wealth.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#properties" className="inline-flex items-center px-6 py-3 rounded-full bg-gold text-navy font-medium hover:bg-[#c9a06a] transition">Explore Pre-Selling Portfolios</a>
          <a href="#properties" className="inline-flex items-center px-6 py-3 rounded-full border border-white/60 text-white font-medium hover:bg-white/10 transition">View Ready-For-Occupancy Units</a>
        </div>
      </div>
    </section>
  )
}