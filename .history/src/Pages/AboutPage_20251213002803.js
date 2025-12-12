import React from 'react'
import WhoWeAre from '../components/WhoWeAre'
import GrowthEcosystem from '../components/GrowthEcosystem'
import HowWeThink from '../components/HowWeThink'
import FounderQuote from '../components/CEO'
import AboutHeroSection from '../components/AboutHero'
import TrustedBrands from '../components/marquee'
import LandingPage from '../components/ContactForm'
import AboutCTA from '../components/AbouCTA'
import CROProcessSection from '../components/Servicespredicttable'
const AboutPage = () => {
  return (
    <div>
        <AboutHeroSection />
        <TrustedBrands />
        <WhoWeAre />
        <GrowthEcosystem />
        <HowWeThink />
        <FounderQuote />
        <CROProcessSection />
        <AboutCTA />
        <LandingPage />
    </div>
  )
}

export default AboutPage