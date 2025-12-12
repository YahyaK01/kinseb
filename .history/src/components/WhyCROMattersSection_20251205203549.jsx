import React, { useState, useEffect, useRef } from 'react';

const MergedCROSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const sectionRef = useRef(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Intersection Observer for scroll detection
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
        threshold: 0.1,
        rootMargin: '50px'
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

  const isMobile = windowWidth <= 768;

  // Content
  const content = {
    heading: "What's Included in Our CRO Audit Process",
    paragraph: "Our comprehensive CRO audit provides actionable insights to improve your conversion rates and drive measurable results.",
    points: [
      {
        icon: "/images/4.png",
        heading: "Increase Your ROI with Data-Backed Decisions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo."
      },
      {
        icon: "/images/2.png",
        heading: "Get More Leads and Sales",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo."
      },
      {
        icon: "/images/3.png",
        heading: "Understand Your Users Better",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo."
      },
      {
        icon: "/images/1.png",
        heading: "Unlock Growth from Every Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo."
      }
    ]
  };

  return (
    <section
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '60px 20px' : 'clamp(60px, 8vw, 100px) 32px',
        width: '100%',
        background: '#04091D',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Ellipse - Bottom Left */}
      <div
        style={{
          position: 'absolute',
          width: isMobile ? '150px' : '267px',
          height: isMobile ? '150px' : '267px',
          left: isMobile ? '20px' : '80px',
          bottom: isMobile ? '-50px' : '-80px',
          background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
          filter: 'blur(275px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: isVisible ? 0.8 : 0,
          transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
        }}
      />

      {/* Ellipse - Bottom Right */}
      <div
        style={{
          position: 'absolute',
          width: isMobile ? '150px' : '267px',
          height: isMobile ? '150px' : '267px',
          right: isMobile ? '20px' : '80px',
          bottom: isMobile ? '-50px' : '-80px',
          background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
          filter: 'blur(275px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: isVisible ? 0.8 : 0,
          transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
        }}
      />

      {/* Main Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isMobile ? '50px' : 'clamp(50px, 6vw, 80px)',
          width: '100%',
          maxWidth: '1201px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header Section with Two Columns */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? '30px' : 'clamp(40px, 6vw, 79px)',
            width: '100%',
            flexWrap: 'wrap',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
          }}
        >
          {/* Left Column - Heading */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '20px',
              flex: '1 1 400px',
              minWidth: '280px'
            }}
          >
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600',
                fontSize: isMobile ? 'clamp(24px, 5vw, 32px)' : 'clamp(28px, 4vw, 40px)',
                lineHeight: '1.5',
                color: '#FFFFFF',
                margin: '0'
              }}
            >
              {content.heading}
            </h2>
          </div>

          {/* Right Column - Description and Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '20px',
              flex: '1 1 400px',
              minWidth: '280px'
            }}
          >
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: '600',
                fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(14px, 2vw, 16px)',
                lineHeight: '1.6',
                letterSpacing: '-0.006em',
                color: '#FFFFFF',
                margin: '0'
              }}
            >
              {content.paragraph}
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: '15px',
                flexWrap: 'wrap'
              }}
            >
              <button
                style={{
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
                  minWidth: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0B86A3';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0D98BA';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '500',
                    fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(14px, 2vw, 16px)',
                    lineHeight: '1.5',
                    letterSpacing: '0.02em',
                    color: '#000000',
                    margin: '0'
                  }}
                >
                  Get Started
                </span>
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 8L1 15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                style={{
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
                  minWidth: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0D98BA';
                  e.currentTarget.querySelector('span').style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.querySelector('span').style.color = '#0D98BA';
                }}
              >
                <span
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: '600',
                    fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(14px, 2vw, 16px)',
                    lineHeight: '1.5',
                    color: '#0D98BA',
                    margin: '0',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Separator with T Shape */}
        <div
          style={{
            display: isMobile ? 'flex' : 'grid',
            gridTemplateColumns: isMobile ? undefined : '1fr 2px 1fr',
            gridTemplateRows: isMobile ? undefined : '2px auto',
            width: '100%',
            maxWidth: '1152px',
            gap: isMobile ? '20px' : '0px'
          }}
        >
          {/* Horizontal Separator */}
          <div
            style={{
              width: '100%',
              height: '2px',
              background: '#848586',
              borderRadius: '10px',
              gridColumn: isMobile ? undefined : '1 / 4',
              gridRow: isMobile ? undefined : '1',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
            }}
          />
          {/* Vertical Separator */}
          {!isMobile && (
            <div
              style={{
                width: '2px',
                height: 'clamp(40px, 8vw, 80px)',
                background: '#848586',
                borderRadius: '10px',
                gridColumn: '2',
                gridRow: '2',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
              }}
            />
          )}
        </div>

        {/* Points Container with Grid (4 Points) */}
        <div
          style={{
            display: isMobile ? 'flex' : 'grid',
            flexDirection: isMobile ? 'column' : undefined,
            gridTemplateColumns: isMobile ? undefined : '1fr 1px 1fr',
            gridTemplateRows: isMobile ? undefined : 'auto 1px auto',
            width: '100%',
            maxWidth: '1161.92px',
            gap: isMobile ? '40px' : '0px'
          }}
        >
          {/* First Point - Top Left */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: isMobile ? '0px' : '0px 39.5px 50px 0px',
              gap: '15px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translateX(0) translateY(0)'
                : 'translateX(-60px) translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.4s'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: '80px',
                height: '80px',
                minWidth: '80px'
              }}
            >
              <img
                src={content.points[0].icon}
                alt={content.points[0].heading}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '6px',
                flex: '1'
              }}
            >
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: isMobile ? 'clamp(16px, 3.5vw, 17px)' : 'clamp(17px, 2vw, 18px)',
                  lineHeight: '150%',
                  letterSpacing: '-0.006em',
                  color: '#0D98BA',
                  margin: '0',
                  padding: '0'
                }}
              >
                {content.points[0].heading}
              </h3>
              <p
                style={{
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(14px, 1.8vw, 15px)',
                  lineHeight: '160%',
                  color: '#FFFFFF',
                  margin: '0',
                  padding: '0',
                  opacity: '0.9'
                }}
              >
                {content.points[0].description}
              </p>
            </div>
          </div>

          {/* Vertical Divider - Full Height */}
          {!isMobile && (
            <div
              style={{
                width: '1px',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.2)',
                gridRow: '1 / 4',
                gridColumn: '2',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
              }}
            />
          )}

          {/* Second Point - Top Right */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: isMobile ? '0px' : '0px 0px 50px 39.5px',
              gap: '15px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translateX(0) translateY(0)'
                : isMobile
                ? 'translateX(-60px) translateY(20px)'
                : 'translateX(60px) translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.55s'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: '80px',
                height: '80px',
                minWidth: '80px'
              }}
            >
              <img
                src={content.points[1].icon}
                alt={content.points[1].heading}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '6px',
                flex: '1'
              }}
            >
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: isMobile ? 'clamp(16px, 3.5vw, 17px)' : 'clamp(17px, 2vw, 18px)',
                  lineHeight: '150%',
                  letterSpacing: '-0.006em',
                  color: '#0D98BA',
                  margin: '0',
                  padding: '0'
                }}
              >
                {content.points[1].heading}
              </h3>
              <p
                style={{
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(14px, 1.8vw, 15px)',
                  lineHeight: '160%',
                  color: '#FFFFFF',
                  margin: '0',
                  padding: '0',
                  opacity: '0.9'
                }}
              >
                {content.points[1].description}
              </p>
            </div>
          </div>

          {/* Horizontal Divider - Full Width */}
          {!isMobile && (
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'rgba(255, 255, 255, 0.2)',
                gridColumn: '1 / 4',
                gridRow: '2',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.7s'
              }}
            />
          )}

          {/* Third Point - Bottom Left */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: isMobile ? '0px' : '50px 39.5px 0px 0px',
              gap: '15px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translateX(0) translateY(0)'
                : 'translateX(-60px) translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.7s'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: '80px',
                height: '80px',
                minWidth: '80px'
              }}
            >
              <img
                src={content.points[2].icon}
                alt={content.points[2].heading}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '6px',
                flex: '1'
              }}
            >
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: isMobile ? 'clamp(16px, 3.5vw, 17px)' : 'clamp(17px, 2vw, 18px)',
                  lineHeight: '150%',
                  letterSpacing: '-0.006em',
                  color: '#0D98BA',
                  margin: '0',
                  padding: '0'
                }}
              >
                {content.points[2].heading}
              </h3>
              <p
                style={{
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(14px, 1.8vw, 15px)',
                  lineHeight: '160%',
                  color: '#FFFFFF',
                  margin: '0',
                  padding: '0',
                  opacity: '0.9'
                }}
              >
                {content.points[2].description}
              </p>
            </div>
          </div>

          {/* Fourth Point - Bottom Right */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: isMobile ? '0px' : '50px 0px 0px 39.5px',
              gap: '15px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translateX(0) translateY(0)'
                : isMobile
                ? 'translateX(-60px) translateY(20px)'
                : 'translateX(60px) translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.85s'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: '80px',
                height: '80px',
                minWidth: '80px'
              }}
            >
              <img
                src={content.points[3].icon}
                alt={content.points[3].heading}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '6px',
                flex: '1'
              }}
            >
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: isMobile ? 'clamp(16px, 3.5vw, 17px)' : 'clamp(17px, 2vw, 18px)',
                  lineHeight: '150%',
                  letterSpacing: '-0.006em',
                  color: '#0D98BA',
                  margin: '0',
                  padding: '0'
                }}
              >
                {content.points[3].heading}
              </h3>
              <p
                style={{
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(14px, 1.8vw, 15px)',
                  lineHeight: '160%',
                  color: '#FFFFFF',
                  margin: '0',
                  padding: '0',
                  opacity: '0.9'
                }}
              >
                {content.points[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MergedCROSection;