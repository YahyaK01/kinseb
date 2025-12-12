import React, { useState, useEffect, useRef } from 'react';

const ContactMapSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: '700px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px',
    background: 'linear-gradient(180deg, #0D98BA -142.29%, #04091D 100%)',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  const mapWrapperStyle = {
    width: '100%',
    maxWidth: '1199px',
    height: '502px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
    transition: 'all 1s ease-out',
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: '0',
    display: 'block',
  };

  const responsiveStyle = `
    @media (max-width: 1280px) {
      .contact-map-container {
        padding: 60px 40px !important;
        min-height: 600px !important;
      }
      
      .map-wrapper {
        height: 450px !important;
      }
    }
    
    @media (max-width: 768px) {
      .contact-map-container {
        padding: 40px 20px !important;
        min-height: 500px !important;
      }
      
      .map-wrapper {
        height: 400px !important;
        border-radius: 8px !important;
      }
    }
    
    @media (max-width: 480px) {
      .contact-map-container {
        padding: 30px 16px !important;
        min-height: 400px !important;
      }
      
      .map-wrapper {
        height: 300px !important;
        border-radius: 6px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section 
        ref={sectionRef} 
        style={containerStyle}
        className="contact-map-container"
      >
        <div style={mapWrapperStyle} className="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d429185.2607235469!2d-96.73209600000001!3d32.818504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1763617667281!5m2!1sen!2sus"
            style={iframeStyle}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Dallas Location Map"
          />
        </div>
      </section>
    </>
  );
};

export default ContactMapSection;