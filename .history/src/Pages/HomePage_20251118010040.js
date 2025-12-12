import React from 'react'
import KinsebCROFAQ from '../components/FAQ'
import ServiceCTA from '../components/CTA'
import MetricsSection from '../components/MetricsSection'
import WhyCROMatters from '../components/WhyCROMatter'
import ProcessSection from '../components/Processsection'
import HeroSection from '../components/Hero'
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyCROMatters />
      <MetricsSection />
      <ProcessSection />
        <KinsebCROFAQ />
        <ServiceCTA />
    </div>
  )
}

export default HomePage