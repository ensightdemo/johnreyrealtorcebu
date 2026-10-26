import Header from './components/Header'
import Hero from './components/Hero'
import LegalAnchor from './components/LegalAnchor'
import Portfolio from './components/Portfolio'
import Townships from './components/Townships'
import About from './components/About'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import FloatingChat from './components/FloatingChat'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LegalAnchor />
      <Portfolio />
      <Townships />
      <About />
      <LeadForm />
      <Footer />
      <FloatingChat />
    </div>
  )
}