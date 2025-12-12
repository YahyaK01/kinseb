import React, { useState, useEffect, useRef } from 'react';

const RallyingCall = () => {
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '36px 80px',
    gap: '10px',
    isolation: 'isolate',
    width: '100%',
    minHeight: '253px',
    background: '#04091D',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  };

  const innerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
    gap: '10px',
    width: '100%',
    maxWidth: '1254px',
    position: 'relative',
    zIndex: 0,
  };

  const topTextContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 10px',
    gap: '10px',
    width: '100%',
    maxWidth: '476px',
  };

  const topTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 'clamp(20px, 4vw, 32px)',
    lineHeight: '1.5',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 0,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s ease-out',
  };

  const bottomTextContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 10px',
    gap: '10px',
    width: '100%',
    position: 'relative',
  };

  const bottomTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'clamp(28px, 5.5vw, 52px)',
    lineHeight: '1.5',
    textAlign: 'center',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
    maxWidth: '1126px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 1s ease-out 0.3s',
  };

  const glowEffectStyle = {
    position: 'absolute',
    width: '100%',
    maxWidth: '1126px',
    height: '35px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(150px)',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1.2s ease-out 0.5s',
    pointerEvents: 'none',
  };

  const responsiveStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    
    @media (max-width: 768px) {
      .rallying-call-container {
        padding: 24px 20px !important;
        min-height: auto !important;
      }
      
      .rallying-call-inner {
        gap: 15px !important;
      }
    }
    
    @media (max-width: 480px) {
      .rallying-call-container {
        padding: 20px 16px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section 
        ref={sectionRef} 
        style={containerStyle} 
        className="rallying-call-container"
      >
        <div style={innerContainerStyle} className="rallying-call-inner">
          <div style={topTextContainerStyle}>
            <p style={topTextStyle}>Don't just optimize numbers.</p>
          </div>
          <div style={bottomTextContainerStyle}>
            <h2 style={bottomTextStyle}>Transform the way your website performs.</h2>
            <div style={glowEffectStyle}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RallyingCall;