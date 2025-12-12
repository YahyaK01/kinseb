import React, { useState, useEffect, useRef } from 'react';

const WhyCROMatters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const sectionRef = useRef(null);

  // Hardcoded content
  const content = {
    heading: "Why Conversion Optimization Matters",
    highlightedText: "Conversion Optimization",
    paragraph: "Traffic alone doesn't grow your business — conversion does. CRO helps you turn every visitor into a valuable customer by combining data, design, and behavioral insight.",
    points: [
      {
        icon: "/images/inc-roi.png",
        heading: "Increase Your ROI with Data-Backed Decisions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo."
      },
      {
        icon: "/images/get-leads.png",
        heading: "Get More Leads and Sales",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo."
      },
      {
        icon: "/images/understand-users.png",
        heading: "Understand Your Users Better",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo."
      },
      {
        icon: "/images/unlock-growth.png",
        heading: "Unlock Growth from Every Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo."
      }
    ]
  };

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
        rootMargin: '0px 0px -100px 0px'
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

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes iconFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>

      <section
        ref={sectionRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '80px 20px' : '100px 32px',
          width: '100%',
          minHeight: '643.79px',
          background: 'linear-gradient(180deg, #0D98BA -309.11%, #04091D 115.25%)',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}
      >
        {/* Main Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: isMobile ? '60px' : '92px',
            width: '100%',
            maxWidth: '1161.92px'
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '10px',
              width: '100%',
              maxWidth: '945px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.2s'
            }}
          >
            {/* Heading */}
            <h2
              style={{
                width: '100%',
                fontFamily: 'Poppins, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: isMobile ? 'clamp(24px, 6vw, 32px)' : 'clamp(32px, 4vw, 40px)',
                lineHeight: '1.5',
                textAlign: 'center',
                color: '#FFFFFF',
                margin: '0',
                padding: '0'
              }}
            >
              Why <span style={{ color: '#0D98BA' }}>{content.highlightedText}</span> Matters
            </h2>

            {/* Paragraph */}
            <p
              style={{
                width: '100%',
                maxWidth: '606px',
                fontFamily: 'Lato, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(15px, 2vw, 16px)',
                lineHeight: '150%',
                textAlign: 'center',
                letterSpacing: '-0.006em',
                color: '#FFFFFF',
                margin: '0',
                padding: '0'
              }}
            >
              {content.paragraph}
            </p>
          </div>

          {/* Points Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '50px',
              width: '100%',
              maxWidth: '1161.92px'
            }}
          >
            {/* Top Row */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'flex-start',
                padding: '0px',
                gap: isMobile ? '40px' : '79px',
                width: '100%'
              }}
            >
              {/* First Point */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '15px',
                  flex: '1',
                  minWidth: isMobile ? '100%' : '280px',
                  maxWidth: isMobile ? '100%' : '550.92px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? 'translateX(0) translateY(0)'
                    : 'translateX(-60px) translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '0.4s'
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: '80px',
                    height: '80px',
                    minWidth: '80px',
                    animation: isVisible ? 'iconFloat 3s ease-in-out infinite' : 'none',
                    animationDelay: '0s'
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

                {/* Text Content */}
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

              {/* Vertical Divider */}
              {!isMobile && (
                <div
                  style={{
                    width: '1px',
                    height: 'auto',
                    minHeight: '91.9px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                  }}
                />
              )}

              {/* Second Point */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '15px',
                  flex: '1',
                  minWidth: isMobile ? '100%' : '280px',
                  maxWidth: isMobile ? '100%' : '551px',
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
                {/* Icon Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: '80px',
                    height: '80px',
                    minWidth: '80px',
                    animation: isVisible ? 'iconFloat 3s ease-in-out infinite' : 'none',
                    animationDelay: '0.3s'
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

                {/* Text Content */}
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
            </div>

            {/* Horizontal Divider - Goes all the way across */}
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'rgba(255, 255, 255, 0.2)',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.7s'
              }}
            />

            {/* Bottom Row */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'flex-start',
                padding: '0px',
                gap: isMobile ? '40px' : '79px',
                width: '100%'
              }}
            >
              {/* Third Point */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '15px',
                  flex: '1',
                  minWidth: isMobile ? '100%' : '280px',
                  maxWidth: isMobile ? '100%' : '550.92px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? 'translateX(0) translateY(0)'
                    : 'translateX(-60px) translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '0.7s'
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: '80px',
                    height: '80px',
                    minWidth: '80px',
                    animation: isVisible ? 'iconFloat 3s ease-in-out infinite' : 'none',
                    animationDelay: '0.6s'
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

                {/* Text Content */}
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

              {/* Vertical Divider */}
              {!isMobile && (
                <div
                  style={{
                    width: '1px',
                    height: 'auto',
                    minHeight: '91.9px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.9s'
                  }}
                />
              )}

              {/* Fourth Point */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '15px',
                  flex: '1',
                  minWidth: isMobile ? '100%' : '280px',
                  maxWidth: isMobile ? '100%' : '551px',
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
                {/* Icon Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: '80px',
                    height: '80px',
                    minWidth: '80px',
                    animation: isVisible ? 'iconFloat 3s ease-in-out infinite' : 'none',
                    animationDelay: '0.9s'
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

                {/* Text Content */}
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
        </div>
      </section>
    </>
  );
};

export default WhyCROMatters;