export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-semibold text-lg">John Rey Bercero</div>
          <p className="font-ui text-sm text-white/70 mt-2">Accredited Real Estate Agent · Federal Land, Inc.</p>
          <p className="font-ui text-xs text-white/60 mt-4">DHSUD: [INSERT_DHSUD_NUMBER_HERE]</p>
        </div>
        <div className="text-sm text-white/75 leading-relaxed">
          <p className="font-ui text-xs uppercase tracking-wider text-gold mb-3">Federal Land, Inc.</p>
          <p>20th Floor GT Tower International, 6813 Ayala Avenue corner H.V. Dela Costa Street, 1227 Makati City, Philippines.</p>
          <p className="mt-2">(632) 8883-6888 · (632) 8-354-8888</p>
        </div>
        <div className="text-sm">
          <p className="font-ui text-xs uppercase tracking-wider text-gold mb-3">Links</p>
          <ul className="space-y-2 text-white/75">
            <li><a href="https://federalland.ph" className="hover:text-gold">federalland.ph</a></li>
            <li><a href="https://federalland.ph/about-us" className="hover:text-gold">About Federal Land</a></li>
            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 text-xs text-white/60 font-ui leading-relaxed">
          John Rey Bercero is an accredited sales partner of Federal Land, Inc. This website is independently owned and operated by John Rey Bercero and is not the official website of Federal Land, Inc. For official information, prices, and availability, visit federalland.ph. Prices, promotions, and availability are subject to change without prior notice. All renders are artist's illustrations.
        </div>
      </div>
    </footer>
  )
}