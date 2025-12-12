import React, { useState, useEffect } from 'react';

const CROHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [topButtonHover, setTopButtonHover] = useState(false);
  const [bottomButtonHover, setBottomButtonHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    window.location.href = '/contact-us';
  };

 const getResponsiveStyles = () => {
    const width = window.innerWidth;
    
    // Small Mobile
    if (width <= 400) {
      return {
        minHeight: '90vh',
        padding: '90px 20px 0px 20px'
      };
    }
    // Mobile
    else if (width <= 768) {
      return {
        minHeight: '70vh',
        padding: '40px 20px 0px 20px'
      };
    }
    // Tablet
    else if (width <= 1024) {
      return {
        minHeight: '90vh',
        padding: '100px 20px 40px 20px'
      };
    }
    // Desktop
    else {
      return {
        minHeight: '100vh',
        padding: '80px 20px 40px 20px'
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: responsiveStyles.minHeight,
    background: 'linear-gradient(180deg, #04091D 16.18%, #0D98BA 219.08%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveStyles.padding,
    overflow: 'hidden',
    boxSizing: 'border-box'
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '23px',
    maxWidth: '862px',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease-out',
    boxSizing: 'border-box'
  };

  const topButtonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: window.innerWidth <= 768 ? '8px 20px' : '10px 24px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
    border: '1px solid #0D94BB',
    boxShadow: topButtonHover ? '0px 0px 20px 4px rgba(13, 148, 187, 0.9)' : '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
    borderRadius: '25px',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transform: topButtonHover ? 'scale(1.05)' : (isVisible ? 'scale(1)' : 'scale(0.9)'),
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  };

  const topButtonTextStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: window.innerWidth <= 768 ? '14px' : 'clamp(14px, 2vw, 16px)',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#04091D',
    margin: 0
  };

  const mainHeadingStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: 'clamp(36px, 6vw, 70px)',
    lineHeight: '1.1',
    textAlign: 'center',
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: 0,
    width: '100%',
    maxWidth: '701px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.4s'
  };

  const highlightStyle = {
    color: '#85CCDD'
  };

  const subHeadingStyle = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 600,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.4',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 0,
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s ease-out 0.6s'
  };

  const dividerStyle = {
    width: '100%',
    maxWidth: '654px',
    height: '1px',
    background: '#0D98BA',
    borderRadius: '10px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'all 0.8s ease-out 0.8s'
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '23px',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s ease-out 1s'
  };

  const featureItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px'
  };

  const featureIconStyle = {
    width: '25px',
    height: '25px',
    flexShrink: 0,
    objectFit: 'contain'
  };

  const featureTextStyle = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(12px, 1.5vw, 14px)',
    lineHeight: '17px',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    margin: 0,
    whiteSpace: 'nowrap'
  };

  const bottomButtonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    background: bottomButtonHover ? '#0B829F' : '#0D98BA',
    boxShadow: bottomButtonHover ? '0px 6px 12px rgba(0, 0, 0, 0.4)' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transform: bottomButtonHover ? 'translateY(-2px)' : (isVisible ? 'translateY(0)' : 'translateY(20px)'),
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  };

  const bottomButtonTextStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#000000',
    margin: 0
  };

  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <div 
          style={topButtonStyle}
          onMouseEnter={() => setTopButtonHover(true)}
          onMouseLeave={() => setTopButtonHover(false)}
        >
          <span style={topButtonTextStyle}>Case Studies</span>
        </div>

        <h1 style={mainHeadingStyle}>
          {window.innerWidth <= 768 ? (
            <>
              Real Brands. Real<br />
              <span style={highlightStyle}>Revenue Wins.</span>
            </>
          ) : (
            <>
              Real Brands.<br />
              <span style={highlightStyle}>Real Revenue Wins.</span>
            </>
          )}
        </h1>

        <p style={subHeadingStyle}>
          See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.
        </p>

        <div style={dividerStyle}></div>

        <div style={featuresContainerStyle}>
          <div style={featureItemStyle}>
            <img 
              src="images\casestudieshero1.png" 
              alt="Data-Driven icon" 
              style={featureIconStyle}
            />
            <span style={featureTextStyle}>Data-Driven</span>
          </div>

          <div style={featureItemStyle}>
            <img 
              src="images\casestudieshero2.png" 
              alt="UX-Optimized icon" 
              style={featureIconStyle}
            />
            <span style={featureTextStyle}>UX-Optimized</span>
          </div>

          <div style={featureItemStyle}>
            <img 
              src="images\casestudieshero3.png" 
              alt="Faster Experiments icon" 
              style={featureIconStyle}
            />
            <span style={featureTextStyle}>Faster Experiments</span>
          </div>

          <div style={featureItemStyle}>
            <img 
              src="images\casestudieshero4.png" 
              alt="Higher Revenue icon" 
              style={featureIconStyle}
            />
            <span style={featureTextStyle}>Higher Revenue</span>
          </div>
        </div>

        <button 
          style={bottomButtonStyle}
          onMouseEnter={() => setBottomButtonHover(true)}
          onMouseLeave={() => setBottomButtonHover(false)}
          onClick={handleContactClick}
        >
          <span style={bottomButtonTextStyle}>Get Free Audit</span>
        </button>
      </div>
    </div>
  );
};

export default CROHeroSection;