import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'


export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <div className="container-max">
          <Features />
          <HowItWorks />
          <Testimonials />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  )
}