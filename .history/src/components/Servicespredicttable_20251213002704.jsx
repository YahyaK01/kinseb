import React, { useState, useEffect } from 'react';

const CROProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
    
      iconType: "image",
      iconUrl: "images/132.png",
      step: "Step 1",
      title: "Discovery & Deep Audit",
      description: "We Analyze Traffic, User Journeys, UX, Messaging, And Setup To Find Where Conversions Leak And Revenue Is Lost."
    },
    {
      
      iconType: "image",
      iconUrl: "images/133.png",
      step: "Step 2",
      title: "Behavioral & Data Analysis",
      description: "Using Heatmaps, Session Recordings, Funnels, And Psychology, We Uncover Friction, Hesitation, And Drop-Offs."
    },
    {
      
      iconType: "image",
      iconUrl: "images/33333.png",
      step: "Step 3",
      title: "Conversion Roadmap & Build",
      description: "We Prioritize Fixes Based On Impact, Then Design And Implement High-Confidence Improvements Across Pages."
    },
    {
      
      iconType: "image",
      iconUrl: "images/44444.png",
      step: "Step 4",
      title: "Test, Learn & Scale",
      description: "We Test Improvements, Measure Performance Gains, And Continuously Refine What Works To Scale Results Safely."
    }
  ];

  const isMobileOrTablet = windowWidth < 1024;

  const containerStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobileOrTablet ? '40px 20px' : '40px 20px',
    background: 'linear-gradient(180deg, #0D98BA -309.11%, #04091D 115.25%)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const buttonStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobileOrTablet ? '8px 24px' : '10px 30px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
    border: '1px solid #0D94BB',
    boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
    borderRadius: '25px',
    fontFamily: 'inherit',
    fontWeight: '600',
    fontSize: isMobileOrTablet ? 'clamp(14px, 3.5vw, 16px)' : 'clamp(16px, 2vw, 20px)',
    color: '#04091D',
    cursor: 'pointer',
    marginBottom: '24px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s ease-out'
  };

  const headingStyle = {
    fontSize: isMobileOrTablet ? 'clamp(19px, 4.5vw, 26px)' : 'clamp(22px, 3.5vw, 38px)',
    fontWeight: '600',
    lineHeight: '1.4',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    marginBottom: '8px',
    maxWidth: isMobileOrTablet ? '95%' : '90%',
    paddingLeft: isMobileOrTablet ? '0px' : '0',
    paddingRight: isMobileOrTablet ? '10px' : '0',
    whiteSpace: isMobileOrTablet ? 'nowrap' : 'normal',
    overflow: isMobileOrTablet ? 'visible' : 'visible',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s ease-out 0.2s'
  };

  const paragraphStyle = {
    fontSize: 'clamp(10px, 1.2vw, 13px)',
    fontWeight: '400',
    lineHeight: '1.6',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: isMobileOrTablet ? '40px' : '25px',
    maxWidth: '90%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s ease-out 0.4s'
  };

  // Desktop horizontal layout
  const stepsContainerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '10px',
    width: '100%',
    maxWidth: '1236px',
    flexWrap: 'nowrap',
    padding: '0 20px'
  };

  // Mobile/Tablet vertical layout
  const verticalStepsContainerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0',
    width: '100%',
    maxWidth: '600px',
    padding: '0 20px'
  };

  const getIconContainerSize = () => {
    if (isMobileOrTablet) return { width: '60px', height: '60px', fontSize: '30px' };
    if (windowWidth >= 768 && windowWidth <= 1200) return { width: '70px', height: '70px', fontSize: '35px' };
    return { width: '90px', height: '90px', fontSize: '45px' };
  };

  const iconSize = getIconContainerSize();

  const getIconContainerStyle = () => ({
    width: iconSize.width,
    height: iconSize.height,
    background: 'linear-gradient(180deg, #0D98BA -269%, #04091D 103.97%)',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: iconSize.fontSize,
    transition: 'transform 0.3s ease',
    position: 'relative',
    flexShrink: 0
  });

  const iconContainerHoverStyle = {
    transform: 'scale(1.1)'
  };

  // Vertical layout styles for mobile/tablet
  const verticalStepRowStyle = (index) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    position: 'relative',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
    transition: `all 0.8s ease-out ${0.6 + index * 0.15}s`
  });

  const verticalLineContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
    flexShrink: 0
  };

  const verticalLineStyle = (isLast) => ({
    width: '2px',
    height: isLast ? '0' : '120px',
    background: '#98BA0D',
    borderRadius: '10px',
    marginTop: '0px',
    marginBottom: '0px'
  });

  const verticalContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingTop: '10px'
  };

  const mobileStepLabelStyle = {
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '18px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const mobileStepTitleStyle = {
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    marginTop: '5px'
  };

  const mobileStepDescriptionStyle = {
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '20px',
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: '5px'
  };

  // Desktop step card style
  const stepCardStyle = (index) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
    width: '250px',
    flex: '0 0 250px',
    position: 'relative',
    zIndex: 1,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s ease-out ${0.6 + index * 0.2}s`
  });

  const getStepLabelStyle = () => {
    const isTabletToDesktop = windowWidth >= 768 && windowWidth <= 1200;
    return {
      fontWeight: '600',
      fontSize: isTabletToDesktop ? '12px' : '14px',
      lineHeight: isTabletToDesktop ? '18px' : '20px',
      textAlign: 'center',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0px',
      width: isTabletToDesktop ? '200px' : '250px'
    };
  };

  const getStepTitleStyle = () => {
    const isTabletToDesktop = windowWidth >= 768 && windowWidth <= 1200;
    return {
      fontWeight: '600',
      fontSize: isTabletToDesktop ? '15px' : '17px',
      lineHeight: isTabletToDesktop ? '22px' : '25px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#FFFFFF',
      marginBottom: '5px',
      width: isTabletToDesktop ? '200px' : '250px'
    };
  };

  const getStepDescriptionStyle = () => {
    const isTabletToDesktop = windowWidth >= 768 && windowWidth <= 1200;
    return {
      fontWeight: '400',
      fontSize: isTabletToDesktop ? '11px' : '13px',
      lineHeight: isTabletToDesktop ? '19px' : '22px',
      textAlign: 'center',
      color: '#FFFFFF',
      opacity: 0.9,
      width: isTabletToDesktop ? '200px' : '250px'
    };
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle}>Our Framework</button>
      
      <h1 style={headingStyle}>
        A Proven System For Predictable Growth
      </h1>
      
      <p style={paragraphStyle}>
        A structured, repeatable conversion system designed for continuous growth.
      </p>

      {isMobileOrTablet ? (
        // Mobile/Tablet Vertical Layout
        <div style={verticalStepsContainerStyle}>
          {steps.map((step, index) => (
            <div key={index} style={verticalStepRowStyle(index)}>
              <div style={verticalLineContainerStyle}>
                <div 
                  style={{
                    ...getIconContainerStyle(),
                    ...(hoveredIndex === index ? iconContainerHoverStyle : {})
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {step.iconType === "image" && step.iconUrl ? (
                    <img 
                      src={step.iconUrl} 
                      alt={step.title}
                      style={{
                        width: '60%',
                        height: '60%',
                        objectFit: 'contain'
                      }}
                    />
                  ) : (
                    step.icon
                  )}
                </div>
                <div style={verticalLineStyle(index === steps.length - 1)}></div>
              </div>

              <div style={verticalContentStyle}>
                <div style={mobileStepLabelStyle}>{step.step}</div>
                <h3 style={mobileStepTitleStyle}>{step.title}</h3>
                <p style={mobileStepDescriptionStyle}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Desktop Horizontal Layout
        <div style={stepsContainerStyle}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div style={{
                  width: 'clamp(140px, 17vw, 240px)',
                  height: '2px',
                  background: '#98BA0D',
                  borderRadius: '10px',
                  alignSelf: 'flex-start',
                  marginTop: 'clamp(30px, 3.5vw, 42px)',
                  flexShrink: 0,
                  marginLeft: '-100px',
                  marginRight: '-100px',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.8s ease-out ${0.8 + (index - 1) * 0.2}s`
                }}></div>
              )}
              
              <div style={stepCardStyle(index)}>
                <div 
                  style={{
                    ...getIconContainerStyle(),
                    ...(hoveredIndex === index ? iconContainerHoverStyle : {})
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {step.iconType === "image" && step.iconUrl ? (
                    <img 
                      src={step.iconUrl} 
                      alt={step.title}
                      style={{
                        width: '60%',
                        height: '60%',
                        objectFit: 'contain'
                      }}
                    />
                  ) : (
                    step.icon
                  )}
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '13px', 
                  width: windowWidth >= 768 && windowWidth <= 1200 ? '200px' : '250px' 
                }}>
                  <div style={getStepLabelStyle()}>{step.step}</div>
                  
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '5px', 
                    width: windowWidth >= 768 && windowWidth <= 1200 ? '200px' : '250px' 
                  }}>
                    <h3 style={getStepTitleStyle()}>{step.title}</h3>
                    <p style={getStepDescriptionStyle()}>{step.description}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default CROProcessSection;