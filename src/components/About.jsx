export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-ui text-gold text-xs uppercase tracking-[0.18em]">About Your Advisor</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-medium text-navy">John Rey Bercero</h2>
          <p className="mt-2 font-ui text-sm text-textgrey">Accredited Real Estate Agent · Federal Land, Inc.</p>
          <p className="mt-6 text-textgrey leading-relaxed">
            I position myself not as a transactional broker, but as an operational expert and strategic real estate advisor — guiding clients through long-term wealth building and portfolio expansion with Federal Land's master-planned communities.
          </p>
          <p className="mt-4 text-textgrey leading-relaxed">
            Every recommendation is grounded in place, specification, and a clear-eyed view of value. No pressure, no hype — just shared expertise and a commitment to secure asset development.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div><div className="font-semibold text-navy">Brokerage</div><div className="text-textgrey">Independent Accredited Partner</div></div>
            <div><div className="font-semibold text-navy">DHSUD</div><div className="text-textgrey">[INSERT_DHSUD_NUMBER_HERE]</div></div>
            <div><div className="font-semibold text-navy">Focus</div><div className="text-textgrey">Federal Land Portfolio</div></div>
          </div>
        </div>
        <div className="h-80 rounded-3xl bg-gradient-to-br from-deepblue to-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{backgroundImage:'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80)', backgroundSize:'cover', backgroundPosition:'center'}} />
        </div>
      </div>
    </section>
  )
}