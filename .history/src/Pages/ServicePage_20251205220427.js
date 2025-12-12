import React from 'react'
import CROHeroSection from '../components/casestudieshero'
import TrustedBrands from '../components/marquee'
import PainPointsSection from '../components/PainPointsSection'
import WhyCROMattersSection from '../components/WhyCROMattersSection'
import ServiceTabSection from '../components/ServiceTabSection'
import OutcomesSection from '../components/Outcomessection'
import CTASection from '../components/Ctasection'
 import TestimonialsSection from '../components/Testimonia'
const ServicePage = () => {
  return (
    <div>

        <CROHeroSection />
        <TrustedBrands />
        <PainPointsSection />
        <WhyCROMattersSection />
             <OutcomesSection />
        <ServiceTabSection />
        <CTASection />
        <TestimonialsSection />
   
    </div>
  )
}

export default ServicePage