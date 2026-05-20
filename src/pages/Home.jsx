import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"


import Contact from "../components/Contactus"
import Footer from "../components/Footer"
import Stats from "../components/Stats"
import Work from "../components/Work"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Work />
      <Testimonials />
      <CTA />

      <Contact />
      <Footer />
    </>
  )
}

export default Home