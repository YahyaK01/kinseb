import React from 'react'
import KinsebCROFAQ from '../components/FAQ'
import ServiceCTA from '../components/CTA'
import MetricsSection from '../components/MetricsSection'
import WhyCROMatters from '../components/WhyCROMatter'
import ProcessSection from '../components/Processsection'
import HeroSection from '../components/Hero'
import TrustedBrands from '../components/marquee'
import CEOFounderSection from '../components/CEO'
import TestimonialsSection from '../components/Testimonia'
import ROICalculator from '../components/Roicalculator'
import LandingPage from '../components/ContactForm'
import RallyingCall from '../components/Rallyingcall'
import ConversionChallenges from '../components/ConChallanges'
import CROServices from '../components/croservices'
import CaseStudies from '../components/casestudy'
import HeroSection2 from '../components/homestandout'
import CROAuditHero from '../components/croaudit'
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands />
      <WhyCROMatters />
      <RallyingCall />
      <ConversionChallenges />
      <CEOFounderSection />
      <MetricsSection />
      <CROServices />
      <HeroSection2 />
      {/* <ProcessSection /> */}
      <CaseStudies />
      <ROICalculator />
          <TestimonialsSection />
        <KinsebCROFAQ />
        <ServiceCTA />
    <LandingPage />
    </div>
  )
}

export default HomePage