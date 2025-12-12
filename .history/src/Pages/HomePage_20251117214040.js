import React from 'react'
import KinsebCROFAQ from '../components/FAQ'
import ServiceCTA from '../components/CTA'
import MetricsSection from '../components/MetricsSection'
const HomePage = () => {
  return (
    <div>
      <MetricsSection />
        <KinsebCROFAQ />
        <ServiceCTA />
    </div>
  )
}

export default HomePage