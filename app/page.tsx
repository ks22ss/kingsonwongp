import Image from 'next/image'
import HeroSection from './components/HeroSection'
import TechStackSection from './components/TechStackSection'
import PortfolioSection from './components/PortfolioSection'
import CareerSection from './components/CareerSection'
import CertificateSection from './components/CertificateSection'
import GetInTouchSection from './components/GetInTouchSection'

export default function Home() {
  return (
    <>
      <HeroSection/>
      <TechStackSection/>
      <PortfolioSection/>
      <CareerSection/>
      <CertificateSection/>
      <GetInTouchSection/>
    </>
  )
}
