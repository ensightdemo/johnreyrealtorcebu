const towns = [
  { name: 'Grand Central Park', loc: 'BGC, Taguig', desc: 'A vibrant mixed-use township integrating residential, office, and retail within a walkable urban core.' },
  { name: 'Met Park', loc: 'Pasay City', desc: 'A smart, transit-oriented community steps from the bay, designed for modern urban living.' },
  { name: 'Riverpark', loc: 'General Trias, Cavite', desc: 'A master-planned horizontal estate with green corridors and future-ready infrastructure.' },
  { name: 'Meadowcrest', loc: 'Biñan, Laguna', desc: 'A township that balances nature, commerce, and community in a growing southern corridor.' },
]

export default function Townships() {
  return (
    <section className="py-20 sm:py-28 bg-sand/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="font-ui text-gold text-xs uppercase tracking-[0.18em]">Federal Land Communities</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-medium text-navy">Flagship townships, built for everyday life</h2>
        <p className="mt-4 text-textgrey max-w-2xl leading-relaxed">Lifestyle-enhancing, smart-living infrastructure across the country's most strategic locations.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {towns.map(t => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-sand">
              <h3 className="text-lg font-medium text-navy">{t.name}</h3>
              <p className="font-ui text-xs text-gold uppercase tracking-wider mt-1">{t.loc}</p>
              <p className="text-sm text-textgrey mt-3 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}