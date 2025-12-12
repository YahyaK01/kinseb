import React, { useState, useEffect, useRef } from 'react';

const CROAuditHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Enable hover after animation completes
            setTimeout(() => {
              setCanHover(true);
            }, 1200);
          }
        });
      },
      {
        threshold: 0.3,
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
    minHeight: '350px',
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(0deg, rgba(4, 9, 29, 0.08) 62.29%, rgba(4, 9, 29, 0.4) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.6) -15.43%, rgba(0, 0, 0, 0) 123.66%), url(/images/croauditbg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px',
    padding: '20px',
  
    width: '100%',
    margin: '0 auto',
  };

  const headingContainerStyle = {
    width: '100%',
    textAlign: 'center',
    padding: '10px 20px',
  };

  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(24px, 5vw, 40px)',
    lineHeight: '1.5',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: 0,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  };

  const highlightStyle = {
    color: '#0D98BA',
  };

  const buttonStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 39px',
    background: '#0D98BA',
    border: '2px solid #0D98BA',
    borderRadius: '6px',
    cursor: canHover ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
    transitionProperty: 'opacity, transform, background, box-shadow',
    transitionDuration: '0.8s, 0.8s, 0.3s, 0.3s',
    transitionDelay: '0.3s, 0.3s, 0s, 0s',
  };

  const buttonHoverStyle = {
    background: '#0A7A94',
    transform: 'translateY(-2px) scale(1)',
    boxShadow: '0 5px 15px rgba(13, 152, 186, 0.4)',
  };

  const buttonTextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '150%',
    color: '#04091D',
    whiteSpace: 'nowrap',
  };

  const responsiveStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Lato:wght@600&display=swap');
    
    body {
      background-color: #041629 !important;
      margin: 0;
      padding: 0;
    }
    
    @media (max-width: 768px) {
      .cro-audit-container {
        height: auto !important;
        min-height: 300px !important;
        padding: 40px 20px !important;
      }
      
      .cro-content-wrapper {
        gap: 20px !important;
      }
      
      .cro-heading-container {
        padding: 10px 10px !important;
      }
    }
    
    @media (max-width: 480px) {
      .cro-audit-container {
        min-height: 250px !important;
        padding: 30px 0px !important;
    
      }
        
      
      .cro-content-wrapper {
        gap: 15px !important;
      }
      
      .cro-heading-container {
        padding: 10px 0px !important;
       
      }
        
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section 
        ref={sectionRef} 
        style={containerStyle}
        className="cro-audit-container"
      >
        <div style={contentWrapperStyle} className="cro-content-wrapper">
          <div style={headingContainerStyle} className="cro-heading-container">
            <h1 style={headingStyle}>
              Want To See What Your <span style={highlightStyle}>Website</span> Is Truly Capable Of?
            </h1>
          </div>
          <button
            style={{
              ...buttonStyle,
              ...(canHover && isHovered ? buttonHoverStyle : {}),
            }}
            onMouseEnter={() => canHover && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span style={buttonTextStyle}>Get My Free CRO Audit</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default CROAuditHero;