import React, { useEffect, useRef, useState } from 'react';

const WhyCROMattersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'clamp(40px, 8vw, 80px) 20px',
    gap: 'clamp(40px, 6vw, 60px)',
    maxWidth: '1440px',
    margin: '0 auto',
    width: '100%',
    background: '#04091D',
    opacity: 1,
    willChange: 'transform, opacity',
  };

  const headerSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: 'clamp(30px, 6vw, 79px)',
    width: '100%',
    maxWidth: '1201px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
    flexWrap: 'wrap',
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    flex: '1 1 400px',
    minWidth: '280px',
  };

  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(28px, 5vw, 40px)',
    lineHeight: '1.5',
    color: '#FFFFFF',
    margin: 0,
  };

  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    flex: '1 1 400px',
    minWidth: '280px',
  };

  const paragraphStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.6',
    letterSpacing: '-0.006em',
    color: '#FFFFFF',
    margin: 0,
  };

  const buttonsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '15px',
    flexWrap: 'wrap',
  };

  const primaryButtonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 24px',
    gap: '10px',
    background: '#0D98BA',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: 'fit-content',
  };

  const primaryButtonTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.5',
    letterSpacing: '0.02em',
    color: '#000000',
    margin: 0,
    transition: 'color 0.3s ease',
  };

  const secondaryButtonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 24px',
    gap: '10px',
    background: 'transparent',
    border: '2px solid #0D98BA',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: 'fit-content',
  };

  const secondaryButtonTextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.5',
    color: '#0D98BA',
    margin: 0,
    transition: 'color 0.3s ease',
  };

  const separatorContainerStyle = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const separatorStyle = {
    width: '100%',
    maxWidth: '1152px',
    height: '2px',
    background: '#848586',
    borderRadius: '10px',
    margin: 'clamp(20px, 4vw, 40px) 0',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
  };

  const verticalSeparatorCrossStyle = {
    position: 'absolute',
    width: '2px',
    height: 'clamp(40px, 8vw, 80px)',
    background: '#848586',
    borderRadius: '10px',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const pointsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    gap: 'clamp(30px, 6vw, 60px)',
    width: '100%',
    maxWidth: '1201px',
    flexWrap: 'wrap',
    position: 'relative',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: 'clamp(30px, 5vw, 50px)',
    flex: '1 1 calc(50% - 30px)',
    minWidth: '280px',
  };

  const pointStyle = (index) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '15px',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.1}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.1}s`,
  });

  const iconContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '10px',
    width: 'clamp(60px, 8vw, 80px)',
    height: 'clamp(60px, 8vw, 80px)',
    flexShrink: 0,
  };

  const iconStyle = {
    width: '100%',
    height: '100%',
    maxWidth: '60px',
    maxHeight: '60px',
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    flex: 1,
  };

  const pointHeadingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(16px, 2.5vw, 18px)',
    lineHeight: '1.5',
    letterSpacing: '-0.006em',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
  };

  const pointTextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: 'clamp(14px, 2vw, 15px)',
    lineHeight: '1.6',
    color: '#FFFFFF',
    margin: 0,
  };

  const verticalSeparatorStyle = {
    position: 'absolute',
    width: '2px',
    height: '238px',
    left: 'calc(50% - 1px)',
    top: '0',
    background: '#848586',
    borderRadius: '10px',
    display: isMobile ? 'none' : 'block',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
  };

  const points = [
    {
      icon: '/path-to-brain-icon.png',
      heading: 'Data-Driven Insights',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.',
    },
    {
      icon: '/path-to-testing-icon.png',
      heading: 'Continuous Testing',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.',
    },
    {
      icon: '/path-to-funnel-icon.png',
      heading: 'Optimized Funnel',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.',
    },
    {
      icon: '/path-to-setting-icon.png',
      heading: 'Strategic Implementation',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.',
    },
  ];

  return (
    <div ref={sectionRef} style={containerStyle}>
      {/* Header Section */}
      <div style={headerSectionStyle}>
        <div style={leftColumnStyle}>
          <h2 style={headingStyle}>
            What's Included in Our CRO Audit Process
          </h2>
        </div>

        <div style={rightColumnStyle}>
          <p style={paragraphStyle}>
            Our comprehensive CRO audit provides actionable insights to improve your conversion rates and drive measurable results.
          </p>
          <div style={buttonsContainerStyle}>
            <button 
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0B86A3';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0D98BA';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={primaryButtonTextStyle}>Get Started</span>
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L10 8L1 15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0D98BA';
                e.currentTarget.querySelector('span').style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.querySelector('span').style.color = '#0D98BA';
              }}
            >
              <span style={secondaryButtonTextStyle}>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Separator with Plus Sign */}
      {/* <div style={separatorContainerStyle}>
        <div style={separatorStyle}></div>
        <div style={verticalSeparatorCrossStyle}></div>
      </div> */}

      {/* Points Section */}
      <div style={pointsContainerStyle}>
        {/* Vertical Separator - Hidden on mobile */}
          <div style={separatorContainerStyle}>
        <div style={separatorStyle}></div>
        <div style={verticalSeparatorCrossStyle}></div>
      </div>

        {/* Left Column */}
        <div style={columnStyle}>
          <div style={pointStyle(0)}>
            <div style={iconContainerStyle}>
              <img src={points[0].icon} alt="icon" style={iconStyle} />
            </div>
            <div style={textContainerStyle}>
              <h3 style={pointHeadingStyle}>{points[0].heading}</h3>
              <p style={pointTextStyle}>{points[0].text}</p>
            </div>
          </div>

          <div style={pointStyle(1)}>
            <div style={iconContainerStyle}>
              <img src={points[1].icon} alt="icon" style={iconStyle} />
            </div>
            <div style={textContainerStyle}>
              <h3 style={pointHeadingStyle}>{points[1].heading}</h3>
              <p style={pointTextStyle}>{points[1].text}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={columnStyle}>
          <div style={pointStyle(2)}>
            <div style={iconContainerStyle}>
              <img src={points[2].icon} alt="icon" style={iconStyle} />
            </div>
            <div style={textContainerStyle}>
              <h3 style={pointHeadingStyle}>{points[2].heading}</h3>
              <p style={pointTextStyle}>{points[2].text}</p>
            </div>
          </div>

          <div style={pointStyle(3)}>
            <div style={iconContainerStyle}>
              <img src={points[3].icon} alt="icon" style={iconStyle} />
            </div>
            <div style={textContainerStyle}>
              <h3 style={pointHeadingStyle}>{points[3].heading}</h3>
              <p style={pointTextStyle}>{points[3].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCROMattersSection;