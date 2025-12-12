import React from 'react'
import CROHeroSection from '../components/casestudieshero'
import TrustedBrands from '../components/marquee'
import PainPointsSection from '../components/PainPointsSection'
import WhyCROMattersSection from '../components/WhyCROMattersSection'
import ServiceTabSection from '../components/ServiceTabSection'
import OutcomesSection from '../components/Outcomessection'
const ServicePage = () => {
  return (
    <div>

        <CROHeroSection />
        <TrustedBrands />
        <PainPointsSection />
        <WhyCROMattersSection />
             <OutcomesSection />
        <ServiceTabSection />
   
    </div>
  )
}

export default ServicePage