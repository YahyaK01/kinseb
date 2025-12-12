import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0',
    paddingTop: '80px',
    margin: '0',
    backgroundColor: '#04091D'
  };

  const backgroundStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: `
      linear-gradient(270deg, rgba(0, 0, 0, 0) -188.54%, rgba(1, 3, 9, 0.35) -8.99%, rgba(1, 3, 10, 0.43) 28.07%, rgba(4, 9, 29, 0.85) 82.22%),
      url('/images/herobanner.jpeg'),
      linear-gradient(270deg, rgba(4, 9, 29, 0) 0%, #04091D 100%)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: '0'
  };

  const contentWrapperStyle = {
    position: 'relative',
    zIndex: '1',
    maxWidth: '1440px',
    width: '100%',
    margin: '0 auto',
    padding: '80px 100px',
    boxSizing: 'border-box'
  };

  // Media query for responsive padding
  const mediaQueryStyle = `
    @media (max-width: 768px) {
      padding: 60px 30px !important;
    }
    @media (max-width: 480px) {
      padding: 40px 20px !important;
    }
  `;

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 30px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
    backdropFilter: 'blur(10px)',
    border: '1px solid #0D94BB',
    borderRadius: '50px',
    marginBottom: '30px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s ease-out',
    boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
    maxWidth: 'fit-content'
  };

  const iconStyle = {
    width: '25px',
    height: '25px',
    filter: 'drop-shadow(0 0 5px rgba(13, 148, 187, 0.6))'
  };

  const badgeTextStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    fontSize: 'clamp(12px, 1.8vw, 16px)',
    color: '#04091D',
    margin: '0',
    whiteSpace: 'nowrap'
  };

  const mainHeadingStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    fontSize: 'clamp(32px, 6vw, 65px)',
    lineHeight: '1.1',
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: '0 0 25px 0',
    maxWidth: '700px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out 0.2s'
  };

  const accentTextStyle = {
    background: 'linear-gradient(135deg, #85CCDD 0%, #0D98BA 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const descriptionStyle = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: '600',
    fontSize: 'clamp(14px, 1.5vw, 16px)',
    lineHeight: '1.5',
    color: '#FFFFFF',
    margin: '0 0 35px 0',
    maxWidth: '600px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out 0.4s'
  };

  const buttonsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out 0.6s'
  };

  const primaryButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    background: '#0D98BA',
    border: 'none',
    borderRadius: '6px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    fontSize: 'clamp(14px, 1.5vw, 16px)',
    color: '#000000',
    letterSpacing: '0.02em',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    minWidth: '150px'
  };

  const secondaryButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    background: 'transparent',
    border: '2px solid #0D98BA',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '600',
    fontSize: 'clamp(14px, 1.5vw, 16px)',
    color: '#0D98BA',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    minWidth: '150px'
  };

  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const primaryButtonHoverStyle = {
    ...primaryButtonStyle,
    transform: primaryHover ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: primaryHover ? '0px 6px 12px rgba(13, 152, 186, 0.4)' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
    background: primaryHover ? '#0BA8CC' : '#0D98BA'
  };

  const secondaryButtonHoverStyle = {
    ...secondaryButtonStyle,
    transform: secondaryHover ? 'translateY(-2px)' : 'translateY(0)',
    background: secondaryHover ? 'rgba(13, 152, 186, 0.1)' : 'transparent',
    boxShadow: secondaryHover ? '0px 4px 12px rgba(13, 152, 186, 0.3)' : 'none'
  };

  return (
    <div style={containerStyle} className="hero-container">
      <style>{`
        @media (max-width: 768px) {
          .content-wrapper {
            padding: 60px 30px !important;
          }
          .hero-container {
            padding-top: 60px !important;
          }
        }
        @media (max-width: 480px) {
          .content-wrapper {
            padding: 40px 20px !important;
          }
          .hero-container {
            padding-top: 50px !important;
          }
          .badge-mobile {
            padding: 8px 20px !important;
            gap: 8px !important;
            margin-bottom: 20px !important;
          }
          .badge-icon {
            width: 20px !important;
            height: 20px !important;
          }
          .badge-text {
            font-size: 13px !important;
          }
          .main-heading {
            font-size: 40px !important;
            line-height: 1.15 !important;
            margin-bottom: 20px !important;
          }
          .buttons-container {
            gap: 10px !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
          }
          .primary-button, .secondary-button {
            padding: 12px 20px !important;
            font-size: 14px !important;
            min-width: 130px !important;
            white-space: nowrap !important;
          }
        }
      `}</style>
      <div style={backgroundStyle}></div>
      <div style={contentWrapperStyle} className="content-wrapper">
        <div style={badgeStyle} className="badge-mobile">
          <img 
            src="/images/herobuttonimg.jpeg" 
            alt="AI Icon" 
            style={iconStyle}
            className="badge-icon"
          />
          <span style={badgeTextStyle} className="badge-text">AI-Powered CRO Platform</span>
        </div>

        <h1 style={mainHeadingStyle} className="main-heading">
          Next-Gen CRO<br />
          Powered by <span style={accentTextStyle}>AI +<br />
          Psychology</span>
        </h1>

        <p style={descriptionStyle}>
          We combine behavioral science and machine learning to scale revenue across your full funnel — not vanity metrics.
        </p>

        <div style={buttonsContainerStyle} className="buttons-container">
          <button 
            style={primaryButtonHoverStyle}
            className="primary-button"
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
          >
            Get Free Audit
          </button>
          <button 
            style={secondaryButtonHoverStyle}
            className="secondary-button"
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
          >
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;