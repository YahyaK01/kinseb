import React from 'react'
import KinsebCROFAQ from '../components/FAQ'
import ServiceCTA from '../components/CTA'
import MetricsSection from '../components/MetricsSection'
import WhyCROMatters from '../components/WhyCROMatter'
import ProcessSection from '../components/Processsection'
const HomePage = () => {
  return (
    <div>
      <WhyCROMatters />
      <MetricsSection />
        <KinsebCROFAQ />
        <ServiceCTA />
    </div>
  )
}

export default HomePage