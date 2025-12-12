import React from 'react'
import WhoWeAre from '../components/WhoWeAre'
import GrowthEcosystem from '../components/GrowthEcosystem'
import HowWeThink from '../components/HowWeThink'
import FounderQuote from '../components/CEO'
import AboutHeroSection from '../components/AboutHero'
import TrustedBrands from '../components/marquee'
const AboutPage = () => {
  return (
    <div>
        <AboutHeroSection />
        <TrustedBrands />
        <WhoWeAre />
        <GrowthEcosystem />
        <HowWeThink />
        <FounderQuote />
    </div>
  )
}

export default AboutPage