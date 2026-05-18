import Navbar from "@/components/nav/Navbar"
import Hero from "@/components/sections/Hero"
import Mission from "@/components/sections/Mission"
import Stats from "@/components/sections/Stats"
import Portfolio from "@/components/sections/Portfolio"
import Values from "@/components/sections/Values"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Mission />
        <Stats />
        <Portfolio />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
