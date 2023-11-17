import Image from 'next/image'
import HeroSection from './Components/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-6">
      <HeroSection/>
    </main>
  )
}
