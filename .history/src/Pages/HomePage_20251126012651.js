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
      {/* <ProcessSection /> */}
      <ROICalculator />
          <TestimonialsSection />
        <KinsebCROFAQ />
        <ServiceCTA />
    <LandingPage />
    </div>
  )
}

export default HomePage