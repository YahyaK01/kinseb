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
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands />
      <WhyCROMatters />
      <CEOFounderSection />
      <MetricsSection />
      {/* <ProcessSection /> */}
        <KinsebCROFAQ />
        <ServiceCTA />
        <TestimonialsSection />
    </div>
  )
}

export default HomePage