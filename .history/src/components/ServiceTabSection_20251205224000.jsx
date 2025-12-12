import React, { useEffect, useRef, useState } from 'react';

const ServiceTabSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
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
  }, [isVisible]);

  // Wrapper Style
  const wrapperStyle = {
    width: '100%',
    background: '#04091D',
    position: 'relative',
    overflow: 'hidden',
  };

  // Main Container Style
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 20px',
    gap: '50px',
        background: '#04091D',
    maxWidth: '1440px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
    isolation: 'isolate',
  };

  // Decorative Blur Ellipses
  const ellipse1Style = {
    position: 'absolute',
    width: '486px',
    height: '486px',
    left: '-213px',
    top: '-187px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(400px)',
    pointerEvents: 'none',
    zIndex: 0,
  };

  const ellipse2Style = {
    position: 'absolute',
    width: '280px',
    height: '280px',
    left: '-151px',
    top: '1739px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(350px)',
    pointerEvents: 'none',
    zIndex: 1,
  };

  const ellipse3Style = {
    position: 'absolute',
    width: '350px',
    height: '350px',
    left: '562px',
    top: '913px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(350px)',
    pointerEvents: 'none',
    zIndex: 2,
  };

  const ellipse4Style = {
    position: 'absolute',
    width: '350px',
    height: '350px',
    left: '941px',
    top: '2277px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(350px)',
    pointerEvents: 'none',
    zIndex: 3,
  };

  const ellipse5Style = {
    position: 'absolute',
    width: '267px',
    height: '267px',
    left: '139px',
    top: '2319px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(275px)',
    pointerEvents: 'none',
    zIndex: 4,
  };

  // Header Section Styles
  const headerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 20px',
    gap: '20px',
    width: '100%',
    maxWidth: '1440px',
    zIndex: 5,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
  };

  const headerInnerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    isolation: 'isolate',
    width: '100%',
    maxWidth: '1236px',
  };

  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(28px, 5vw, 40px)',
    lineHeight: '1.4',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: 0,
    width: '100%',
  };

  const paragraphStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: 'clamp(13px, 2vw, 14px)',
    lineHeight: '1.8',
    textAlign: 'center',
    letterSpacing: '-0.09px',
    color: '#FFFFFF',
    margin: 0,
    maxWidth: '692px',
    width: '100%',
  };

  // Content Area Wrapper Style
  const contentAreaWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    width: '100%',
    zIndex: 5,
  };

  // Tabs Section Styles
  const tabsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 20px',
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
  };

  const tabsRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '10px',
    width: '100%',
    maxWidth: '1196px',
    flexWrap: 'wrap',
  };

  const tabStyle = (isActive) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    gap: '8px',
    minWidth: 'fit-content',
    flex: '1 1 auto',
    height: 'auto',
    minHeight: '60px',
    borderRadius: '8px 8px 0px 0px',
    background: isActive ? '#07334C' : 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
  });

  const tabIconStyle = {
    width: 'clamp(35px, 6vw, 50px)',
    height: 'clamp(35px, 6vw, 50px)',
    flexShrink: 0,
  };

  const tabTextStyle = (isActive) => ({
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: 'clamp(13px, 2vw, 16px)',
    lineHeight: '1.5',
    color: isActive ? '#0D98BA' : '#FFFFFF',
    margin: 0,
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  });

  const tabSeparatorStyle = {
    width: '100%',
    maxWidth: '1196px',
    height: '2px',
    background: '#848586',
    borderRadius: '10px',
    marginTop: '0px',
  };

  // Service Content Style
  const serviceContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 20px',
    gap: '10px',
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    zIndex: 6,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
  };

  const serviceRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: 'clamp(30px, 5vw, 50px)',
    width: '100%',
    maxWidth: '1196px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const serviceImageStyle = {
    width: '100%',
    maxWidth: '566px',
    height: 'clamp(250px, 40vw, 370px)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '20px',
    flex: '1 1 300px',
    order: 1, // Default order for desktop
  };

  const serviceTextContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    flex: '1 1 300px',
    minWidth: '280px',
    maxWidth: '566px',
    width: '100%',
    order: 2, // Default order for desktop
  };

  // Mobile-specific header container (Badge + Heading only)
  const mobileHeaderContainerStyle = {
    display: 'none', // Hidden on desktop
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    marginBottom: '30px',
  };

  // Mobile-specific description container
  const mobileDescriptionContainerStyle = {
    display: 'none', // Hidden on desktop
    width: '100%',
    marginTop: '30px',
  };

  const serviceBadgeStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '10px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
    border: '1px solid #0D94BB',
    boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
    borderRadius: '25px',
    cursor: 'default',
    width: 'fit-content',
  };

  const badgeIconStyle = {
    width: '25px',
    height: '25px',
  };

  const badgeTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.5',
    letterSpacing: '0.02em',
    color: '#04091D',
    margin: 0,
  };

  const serviceHeadingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(24px, 5vw, 40px)',
    lineHeight: '1.5',
    textTransform: 'capitalize',
    color: '#0D98BA',
    margin: 0,
  };

  const serviceDescriptionStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(13px, 2vw, 14px)',
    lineHeight: '1.7',
    letterSpacing: '-0.006em',
    color: '#E6E6E6',
    margin: 0,
  };

  // Tab Data
  const tabs = [
    { icon: '/images/101.png', text: 'CRO Audit' },
    { icon: '/images/102.png', text: 'A/B Testing' },
    { icon: '/images/103.png', text: 'Analytics' },
    { icon: '/images/104.png', text: 'UX Design' },
    { icon: '/images/105.png', text: 'Consulting' },
  ];

  // Service Content Data
  const services = [
    {
      badge: 'CRO Audit',
      heading: 'Comprehensive CRO Audit',
      description: 'We analyze every touchpoint of your customer journey to identify conversion barriers and opportunities. Our data-driven approach reveals exactly where users drop off and why, giving you actionable insights to improve your conversion rates.',
      image: '/images/106.jpg',
    },
    {
      badge: 'A/B Testing',
      heading: 'Strategic A/B Testing',
      description: 'Test and validate changes before full implementation. Our systematic testing approach ensures every decision is backed by data, minimizing risk and maximizing ROI on your optimization efforts.',
      image: '/images/106.jpg',
    },
    {
      badge: 'Analytics',
      heading: 'Advanced Analytics',
      description: 'Deep dive into your data to uncover hidden patterns and opportunities. Our analytics expertise helps you understand user behavior and make informed decisions that drive growth.',
      image: '/images/106.jpg',
    },
    {
      badge: 'UX Design',
      heading: 'User Experience Design',
      description: 'Create intuitive, conversion-focused designs that guide users seamlessly through your funnel. Our UX experts craft experiences that delight users while driving business results.',
      image: '/images/106.jpg',
    },
    {
      badge: 'Consulting',
      heading: 'CRO Consulting',
      description: 'Get expert guidance on your conversion optimization strategy. Our consultants work with your team to build sustainable optimization processes and drive long-term growth.',
      image: '/images/106.jpg',
    },
  ];

  return (
    <div ref={sectionRef} style={wrapperStyle}>
      {/* Decorative Blur Ellipses */}
      {/* <div style={ellipse1Style}></div> */}
      <div style={ellipse2Style}></div>
      <div style={ellipse3Style}></div>
      <div style={ellipse4Style}></div>
      <div style={ellipse5Style}></div>

      <div style={containerStyle}>
        {/* Header Section */}
        <div style={headerContainerStyle}>
          <div style={headerInnerStyle}>
            <h2 style={headingStyle}>How We Improve Your Conversions</h2>
          </div>
          <p style={paragraphStyle}>
      Each service is designed to solve a specific conversion problem — from finding what's broken to optimizing every step of your customer journey for measurable growth.
          </p>
        </div>

        {/* Content Area Wrapper */}
        <div style={contentAreaWrapperStyle}>
          {/* Tabs Section */}
          <div style={tabsContainerStyle}>
            <div style={tabsRowStyle}>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  style={tabStyle(activeTab === index)}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={(e) => {
                    if (activeTab !== index) {
                      e.currentTarget.style.background = 'rgba(7, 51, 76, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== index) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <img src={tab.icon} alt={tab.text} style={tabIconStyle} />
                  <span style={tabTextStyle(activeTab === index)}>{tab.text}</span>
                </button>
              ))}
            </div>
            <div style={tabSeparatorStyle}></div>
          </div>

          {/* Service Content */}
          <div style={serviceContentStyle}>
            <style>
              {`
                @media (max-width: 768px) {
                  .mobile-header {
                    display: flex !important;
                  }
                  .desktop-text-container {
                    display: none !important;
                  }
                  .mobile-description {
                    display: block !important;
                  }
                  .service-image {
                    order: 2 !important;
                  }
                }
              `}
            </style>
            
            {/* Mobile Header - Badge + Heading (visible only on mobile) */}
            <div className="mobile-header" style={mobileHeaderContainerStyle}>
              <div style={serviceBadgeStyle}>
                <img src="/images/5.png" alt="badge" style={badgeIconStyle} />
                <span style={badgeTextStyle}>
                  {services[activeTab]?.badge || services[0].badge}
                </span>
              </div>
              <h3 style={serviceHeadingStyle}>
                {services[activeTab]?.heading || services[0].heading}
              </h3>
            </div>

            <div style={serviceRowStyle}>
              <div
                className="service-image"
                style={{
                  ...serviceImageStyle,
                  backgroundImage: `url(${services[activeTab]?.image || services[0].image})`,
                }}
              ></div>
              
              {/* Desktop Text Container (hidden on mobile) */}
              <div className="desktop-text-container" style={serviceTextContainerStyle}>
                <div style={serviceBadgeStyle}>
                  <img src="/images/5.png" alt="badge" style={badgeIconStyle} />
                  <span style={badgeTextStyle}>
                    {services[activeTab]?.badge || services[0].badge}
                  </span>
                </div>
                <h3 style={serviceHeadingStyle}>
                  {services[activeTab]?.heading || services[0].heading}
                </h3>
                <p style={serviceDescriptionStyle}>
                  {services[activeTab]?.description || services[0].description}
                </p>
              </div>
            </div>

            {/* Mobile Description (visible only on mobile, after image) */}
            <div className="mobile-description" style={mobileDescriptionContainerStyle}>
              <p style={serviceDescriptionStyle}>
                {services[activeTab]?.description || services[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabSection;