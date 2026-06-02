import Navbar from "@/components/nav/Navbar"
import Hero from "@/components/sections/Hero"
import CoreCompetence from "@/components/sections/CoreCompetence"
import Evolution from "@/components/sections/Evolution"
import Brands from "@/components/sections/Brands"
import History from "@/components/sections/History"
import Company from "@/components/sections/Company"
import Vision from "@/components/sections/Vision"
import Europe from "@/components/sections/Europe"
import Founders from "@/components/sections/Founders"
import Industry from "@/components/sections/Industry"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CoreCompetence />
        <Evolution />
        <Brands />
        <History />
        <Company />
        <Vision />
        <Europe />
        <Founders />
        <Industry />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
