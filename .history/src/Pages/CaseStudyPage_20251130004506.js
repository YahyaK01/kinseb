import React from 'react'
import CROHeroSection from '../components/casestudieshero'
import MetricsSection2 from '../components/CaseStudiesStats'
import CTASection from '../components/CaseStudiesCta'
import CaseStudiesGrid from '../components/CaaseStudiesServices'
import LandingPage from '../components/ContactForm'
const CaseStudyPage = () => {
  return (
    <div>
        <CROHeroSection />
        <MetricsSection2 />
        <CaseStudiesGrid />
        <CTASection />
        <LandingPage />
    </div>
  )
}

export default CaseStudyPage