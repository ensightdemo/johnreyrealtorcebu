import { useState } from 'react'

export default function LeadForm() {
  const [consent, setConsent] = useState(false)
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <p className="font-ui text-gold text-xs uppercase tracking-[0.18em]">Strategy Hub</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-medium text-navy">Let's plan your next move</h2>
        <p className="mt-4 text-textgrey leading-relaxed">Share your goals and I'll respond within one business day with a tailored shortlist.</p>

        <form className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="First name" />
          <input className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Last name" />
          <input type="email" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold sm:col-span-2" placeholder="Email address" />
          <div className="sm:col-span-2 flex gap-2">
            <select className="border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-gold w-28">
              <option>+63</option><option>+1</option><option>+44</option><option>+65</option>
            </select>
            <input type="tel" className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Contact number" />
          </div>
          <select className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold">
            <option>Preferred communication: Email</option><option>Phone</option><option>WhatsApp</option><option>Viber</option>
          </select>
          <select className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold">
            <option>Investment horizon: 0–1 year</option><option>1–3 years</option><option>3–5 years</option><option>5+ years</option>
          </select>
          <textarea className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold sm:col-span-2" rows="4" placeholder="Tell me about your goals..." />
          <label className="sm:col-span-2 flex items-start gap-3 text-sm text-textgrey">
            <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1" />
            <span>I consent to the collection and processing of my personal data in accordance with the Data Privacy Act of 2012, and to being contacted regarding this inquiry.</span>
          </label>
          <button type="submit" disabled={!consent} className="sm:col-span-2 inline-flex justify-center px-6 py-3 rounded-full bg-navy text-white font-medium hover:bg-deepblue transition disabled:opacity-50">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}