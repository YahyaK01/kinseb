import React from 'react'
import LandingPage from '../components/ContactForm'
const ContactPage = () => {
  return (
   <div style={{ 
        marginTop: window.innerWidth <= 768 ? '50px' : '20px' 
      }}>
<LandingPage />

    </div>
  )
}

export default ContactPage