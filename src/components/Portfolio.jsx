import { useState } from 'react'

const preselling = [
  { name: 'Grand Hyatt Manila Residences', loc: 'Bonifacio Global City, Taguig', type: 'High-Rise Luxury Condominium', price: 'PHP 28M – 95M' },
  { name: 'The Seasons Residences', loc: 'Bonifacio Global City, Taguig', type: 'Branded Residence', price: 'PHP 22M – 78M' },
  { name: 'Quantum Residences', loc: 'Manila', type: 'High-Rise Condominium', price: 'PHP 6.5M – 14M' },
  { name: 'Valencia Hills Tower E', loc: 'Quezon City', type: 'Mid-Rise Condominium', price: 'PHP 4.8M – 9.2M' },
  { name: 'Met Park Business Center', loc: 'Pasay City', type: 'Office / Commercial', price: 'PHP 8M – 25M' },
  { name: 'Riverpark', loc: 'General Trias, Cavite', type: 'Master-Planned Horizontal Lot', price: 'PHP 3.2M – 8.5M' },
]

const rfo = [
  { name: 'Paseo De Roces', loc: 'Makati City', type: 'High-Rise Condominium', price: 'PHP 7.5M – 18M' },
  { name: 'Four Season Riviera', loc: 'Binondo, Manila', type: 'High-Rise Condominium', price: 'PHP 5.9M – 12M' },
  { name: 'Siena Towers', loc: 'Quezon City', type: 'Mid-Rise Condominium', price: 'PHP 4.2M – 7.8M' },
  { name: 'Peninsula Garden Midtown Homes', loc: 'Paco, Manila', type: 'Low-Rise Condominium', price: 'PHP 3.8M – 6.5M' },
  { name: 'Marco Polo Residences', loc: 'Cebu City', type: 'High-Rise Condominium', price: 'PHP 9M – 24M' },
  { name: 'Park West', loc: 'Bonifacio Global City, Taguig', type: 'Luxury Condominium', price: 'PHP 18M – 45M' },
]

function Card({ p }) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gradient-to-br from-deepblue to-navy relative">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage:'url(https://images.unsplash.com/photo-1545324403-ec1140c76f86?auto=format&fit=crop&w=800&q=80)', backgroundSize:'cover', backgroundPosition:'center'}} />
        <span className="absolute top-4 left-4 font-ui text-[11px] uppercase tracking-wider text-white bg-navy/70 backdrop-blur px-3 py-1 rounded-full">Artist's illustration</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-navy">{p.name}</h3>
        <p className="text-sm text-textgrey mt-1">{p.loc}</p>
        <p className="text-sm text-textgrey mt-3">{p.type}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-navy">{p.price}</span>
          <a href="#contact" className="font-ui text-sm text-signalblue hover:text-navy transition">View Blueprint & Details →</a>
        </div>
      </div>
    </article>
  )
}

export default function Portfolio() {
  const [tab, setTab] = useState('preselling')
  const list = tab === 'preselling' ? preselling : rfo
  return (
    <section id="properties" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="font-ui text-gold text-xs uppercase tracking-[0.18em]">Curated Portfolio</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-medium text-navy">Properties worth your long-term confidence</h2>
        <p className="mt-4 text-textgrey max-w-2xl leading-relaxed">A selection of Federal Land, Inc. developments — from pre-selling opportunities to ready-for-occupancy homes. Prices are subject to change without prior notice. Availability is not guaranteed until a Reservation Agreement is signed.</p>

        <div className="mt-8 inline-flex rounded-full border border-slate-200 p-1">
          <button onClick={() => setTab('preselling')} className={`px-5 py-2 rounded-full text-sm font-medium transition ${tab==='preselling'?'bg-navy text-white':'text-navy hover:text-gold'}`}>Pre-Selling</button>
          <button onClick={() => setTab('rfo')} className={`px-5 py-2 rounded-full text-sm font-medium transition ${tab==='rfo'?'bg-navy text-white':'text-navy hover:text-gold'}`}>Ready-For-Occupancy</button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(p => <Card key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  )
}