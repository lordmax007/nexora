import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <Testimonials />
      <CTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
