import React, { useState, useEffect, useRef } from 'react';

const OutcomesSection = () => {
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
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  // Content data
  const outcomes = [
    {
      number: "250+",
      heading: "Projects Completed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas"
    },
    {
      number: "98%",
      heading: "Client Satisfaction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas"
    },
    {
      number: "45%",
      heading: "Average ROI Increase",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas"
    },
    {
      number: "15+",
      heading: "Years of Experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas"
    }
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        gap: '10px',
        width: '100%',
        minHeight: isMobile ? 'auto' : '237px',
        boxSizing: 'border-box'
      }}
    >
      {/* Main Container Card */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '30px 20px' : isTablet ? '35px 30px' : '40px',
          gap: isMobile ? '30px' : isTablet ? '40px' : '78px',
          width: '100%',
          maxWidth: isMobile ? '95%' : isTablet ? '90%' : '1236px',
          minHeight: isMobile ? 'auto' : '237px',
          background: '#041629',
          boxShadow: '0px 0px 15px #04091D',
          borderRadius: '20px',
          boxSizing: 'border-box',
          flexWrap: isMobile ? 'wrap' : isTablet ? 'wrap' : 'nowrap',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '0.2s'
        }}
      >
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              gap: '15px',
              margin: '0 auto',
              width: isMobile ? '100%' : isTablet ? 'calc(50% - 20px)' : '267px',
              minHeight: isMobile ? 'auto' : '157px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: `${0.3 + index * 0.1}s`
            }}
          >
            {/* Number */}
            <div
              style={{
                width: '100%',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: isMobile ? 'clamp(36px, 10vw, 50px)' : '50px',
                lineHeight: '61px',
                textAlign: 'center',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: '0',
                padding: '0'
              }}
            >
              {outcome.number}
            </div>

            {/* Text Container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '6px',
                width: '100%',
                minHeight: isMobile ? 'auto' : '81px'
              }}
            >
              {/* Heading */}
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: isMobile ? 'clamp(16px, 4vw, 18px)' : '18px',
                  lineHeight: '150%',
                  textAlign: 'center',
                  letterSpacing: '-0.006em',
                  background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: '0',
                  padding: '0'
                }}
              >
                {outcome.heading}
              </h3>

              {/* Description */}
              <p
                style={{
                  width: '100%',
                  fontFamily: 'Lato, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : '15px',
                  lineHeight: '24px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  margin: '0',
                  padding: '0'
                }}
              >
                {outcome.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutcomesSection;