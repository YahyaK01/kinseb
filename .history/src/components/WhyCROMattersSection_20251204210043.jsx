import React, { useEffect, useRef, useState } from 'react';

const ServiceTabSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, []);

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
    padding: '100px 20px',
    gap: '100px',
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
    left: '50%',
    top: '913px',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(350px)',
    pointerEvents: 'none',
    zIndex: 2,
  };

  const ellipse4Style = {
    position: 'absolute',
    width: '350px',
    height: '350px',
    right: '-100px',
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
    padding: '0px',
    gap: '30px',
    width: '100%',
    maxWidth: '1236px',
    zIndex: 5,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
  };

  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '64px',
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
    fontSize: '14px',
    lineHeight: '28px',
    textAlign: 'center',
    letterSpacing: '-0.09px',
    color: '#FFFFFF',
    margin: 0,
    maxWidth: '692px',
  };

  // Tabs Section Styles
  const tabsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 40px 0px',
    width: '100%',
    maxWidth: '1440px',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
  };

  const tabsRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    width: '100%',
    maxWidth: '1196px',
    flexWrap: 'wrap',
  };

  const tabStyle = (isActive) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 30px',
    gap: '10px',
    minWidth: '200px',
    flex: '1 1 auto',
    height: '70px',
    borderRadius: '8px 8px 0px 0px',
    background: isActive ? '#07334C' : 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
  });

  const tabIconStyle = {
    width: '50px',
    height: '50px',
    flexShrink: 0,
  };

  const tabTextStyle = (isActive) => ({
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: isActive ? '#0D98BA' : '#FFFFFF',
    margin: 0,
    transition: 'all 0.3s ease',
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
    gap: '50px',
    width: '100%',
    maxWidth: '1196px',
    flexWrap: 'wrap',
  };

  const serviceImageStyle = {
    width: '566px',
    height: '370px',
    maxWidth: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '20px',
    flex: '1 1 400px',
  };

  const serviceTextContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    flex: '1 1 400px',
    minWidth: '300px',
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
  };

  const badgeIconStyle = {
    width: '25px',
    height: '25px',
  };

  const badgeTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#04091D',
    margin: 0,
  };

  const serviceHeadingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '60px',
    textTransform: 'capitalize',
    color: '#0D98BA',
    margin: 0,
  };

  const serviceDescriptionStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '-0.006em',
    color: '#E6E6E6',
    margin: 0,
  };

  // Stats Section Style
  const statsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '10px',
    width: '100%',
    maxWidth: '1440px',
    zIndex: 9,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
  };

  const statsBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    gap: '40px',
    width: '100%',
    maxWidth: '1236px',
    background: '#041629',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '20px',
    flexWrap: 'wrap',
  };

  const statItemStyle = (index) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '15px',
    flex: '1 1 200px',
    minWidth: '200px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.7 + index * 0.1}s`,
  });

  const statNumberStyle = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: '50px',
    lineHeight: '61px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
  };

  const statHeadingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '-0.006em',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
  };

  const statTextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 0,
  };

  // CTA Section Style
  const ctaContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px 20px',
    gap: '10px',
    width: '100%',
    maxWidth: '1440px',
    zIndex: 10,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s',
  };

  const ctaBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 50px',
    gap: '36px',
    width: '100%',
    maxWidth: '1236px',
    background: '#07334C',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '20px',
    flexWrap: 'wrap',
  };

  const ctaTextContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '12px',
    flex: '1 1 400px',
    minWidth: '300px',
  };

  const ctaHeadingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '60px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: 0,
  };

  const ctaSubtextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    margin: 0,
  };

  const ctaButtonsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const primaryButtonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '10px',
    background: '#0D98BA',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '192px',
  };

  const primaryButtonTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#000000',
    margin: 0,
  };

  const secondaryButtonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '11px 13px',
    gap: '10px',
    background: 'transparent',
    border: '2px solid #0D98BA',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '174px',
  };

  const secondaryButtonTextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '150%',
    color: '#0D98BA',
    margin: 0,
  };

  // Tab Data
  const tabs = [
    { icon: '/path-to-icon-1.png', text: 'CRO Audit' },
    { icon: '/path-to-icon-2.png', text: 'A/B Testing' },
    { icon: '/path-to-icon-3.png', text: 'Analytics' },
    { icon: '/path-to-icon-4.png', text: 'UX Design' },
    { icon: '/path-to-icon-5.png', text: 'Consulting' },
  ];

  // Service Content Data
  const services = [
    {
      badge: 'CRO Audit',
      heading: 'Comprehensive CRO Audit',
      description: 'We analyze every touchpoint of your customer journey to identify conversion barriers and opportunities. Our data-driven approach reveals exactly where users drop off and why, giving you actionable insights to improve your conversion rates.',
      image: '/path-to-service-image.jpg',
    },
    {
      badge: 'A/B Testing',
      heading: 'Strategic A/B Testing',
      description: 'Test and validate changes before full implementation. Our systematic testing approach ensures every decision is backed by data, minimizing risk and maximizing ROI on your optimization efforts.',
      image: '/path-to-service-image-2.jpg',
    },
    // Add more services as needed
  ];

  // Stats Data
  const stats = [
    { number: '40%+', heading: 'Conversion Increase', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { number: '250+', heading: 'Projects Completed', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { number: '95%', heading: 'Client Satisfaction', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { number: '$5M+', heading: 'Revenue Generated', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <div ref={sectionRef} style={wrapperStyle}>
      {/* Decorative Blur Ellipses */}
      <div style={ellipse1Style}></div>
      <div style={ellipse2Style}></div>
      <div style={ellipse3Style}></div>
      <div style={ellipse4Style}></div>
      <div style={ellipse5Style}></div>

      <div style={containerStyle}>
        {/* Header Section */}
        <div style={headerContainerStyle}>
          <h2 style={headingStyle}>Our Services</h2>
          <p style={paragraphStyle}>
            Comprehensive conversion rate optimization services to help you grow your business
          </p>
        </div>

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
          <div style={serviceRowStyle}>
            <div
              style={{
                ...serviceImageStyle,
                backgroundImage: `url(${services[activeTab]?.image || services[0].image})`,
              }}
            ></div>
            <div style={serviceTextContainerStyle}>
              <div style={serviceBadgeStyle}>
                <img src="/path-to-badge-icon.png" alt="badge" style={badgeIconStyle} />
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
        </div>

        {/* Pain Points Section - Placeholder */}
        {/* You can insert your PainPointsSection component here */}

        {/* Why CRO Matters Section - Placeholder */}
        {/* You can insert your WhyCROMattersSection component here */}

        {/* Stats Section */}
        <div style={statsContainerStyle}>
          <div style={statsBoxStyle}>
            {stats.map((stat, index) => (
              <div key={index} style={statItemStyle(index)}>
                <div style={statNumberStyle}>{stat.number}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                  <h4 style={statHeadingStyle}>{stat.heading}</h4>
                  <p style={statTextStyle}>{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={ctaContainerStyle}>
          <div style={ctaBoxStyle}>
            <div style={ctaTextContainerStyle}>
              <h3 style={ctaHeadingStyle}>Ready to Boost Your Conversions?</h3>
              <p style={ctaSubtextStyle}>
                Let's uncover the real reasons your visitors aren't turning into customers.
              </p>
            </div>
            <div style={ctaButtonsContainerStyle}>
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
                <span style={primaryButtonTextStyle}>Get Your Free Audit</span>
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
                <span style={secondaryButtonTextStyle}>Schedule a Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabSection;