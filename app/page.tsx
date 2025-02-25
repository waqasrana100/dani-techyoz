import { Montserrat } from "next/font/google"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${montserrat.className} bg-black text-white min-h-screen`}>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

