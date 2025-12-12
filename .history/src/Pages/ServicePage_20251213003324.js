import React from 'react'
import CROHeroSection from '../components/casestudieshero'
import TrustedBrands from '../components/marquee'
import PainPointsSection from '../components/PainPointsSection'
import WhyCROMattersSection from '../components/WhyCROMattersSection'
import ServiceTabSection from '../components/ServiceTabSection'
import OutcomesSection from '../components/Outcomessection'
import CTASection from '../components/Ctasection'
 import TestimonialsSection from '../components/Testimonia'
import KinsebMarketingFAQ from '../components/FAQ'
 import RallyingCallSection from '../components/Rallyingcallsection'
 import CROProcessSection from '../components/Servicespredicttable'
 import ServiceCTA from '../components/CTA'

const ServicePage = () => {
  return (
    <div>

        <CROHeroSection />
        <TrustedBrands />
        <RallyingCallSection />
         <ServiceTabSection />
        <PainPointsSection />
        <WhyCROMattersSection />
             <OutcomesSection />
       
        <CTASection />
        <CROProcessSection />
        <TestimonialsSection />
        <KinsebMarketingFAQ />

   
    </div>
  )
}

export default ServicePage