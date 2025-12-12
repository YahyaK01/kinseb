import React from 'react'
import LandingPage from '../components/ContactForm'
import DallasMapComponent from '../components/Map'
const ContactPage = () => {
  return (
   <div style={{ 
        marginTop: window.innerWidth <= 768 ? '50px' : '80px' 
      }}>
<LandingPage />
<DallasMapComponent />

    </div>
  )
}

export default ContactPage