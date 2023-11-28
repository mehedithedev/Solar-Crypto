import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import dynamic from 'next/dynamic'
import Navbar from './Components/Navbar'
import Carosoul from './Components/Carosoul'
import Contact from './Components/Contact'
import Testimonial from './Components/Testimonial'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>

      <HeroSection className="my-20"/>
      <Carosoul className="my-20"/>
      <Gallery className="my-20"/>
      <About className="my-20"/>
      <Testimonial className="my-20"/>

      <Contact className="my-20"/>
      <Footer className="my-20"/>
    </main>
  )
}
