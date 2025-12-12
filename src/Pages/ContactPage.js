import React from 'react'
import LandingPage from '../components/ContactForm'
import ContactMapSection from '../components/contactlocation'
const ContactPage = () => {
  return (
   <div style={{ 
        marginTop: window.innerWidth <= 768 ? '50px' : '80px' 
      }}>
<LandingPage />
<ContactMapSection />

    </div>
  )
}

export default ContactPage