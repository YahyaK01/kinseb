import React from 'react'
import WhoWeAre from '../components/WhoWeAre'
import GrowthEcosystem from '../components/GrowthEcosystem'
import HowWeThink from '../components/HowWeThink'
import FounderQuote from '../components/CEO'
import AboutHeroSection from '../components/AboutHero'
const AboutPage = () => {
  return (
    <div>
        <AboutHeroSection />
        <WhoWeAre />
        <GrowthEcosystem />
        <HowWeThink />
        <FounderQuote />
    </div>
  )
}

export default AboutPage