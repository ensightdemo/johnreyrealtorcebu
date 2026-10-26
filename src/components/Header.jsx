export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#home" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white font-semibold text-sm">JR</span>
          <div className="leading-tight">
            <div className="font-semibold text-navy text-sm sm:text-base">John Rey Bercero</div>
            <div className="text-[11px] text-textgrey font-ui">Accredited Real Estate Advisor</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-navy">
          <a href="#home" className="hover:text-gold transition">Home</a>
          <a href="#properties" className="hover:text-gold transition">Properties</a>
          <a href="#about" className="hover:text-gold transition">About</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-navy text-white text-sm font-medium hover:bg-deepblue transition">
          Schedule Private Consultation
        </a>
        <button className="md:hidden text-navy" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </header>
  )
}