import React, { useState, useEffect, useRef } from 'react';

const RallyingCallSection = () => {
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

  return (
    <section
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '50px 20px' : isTablet ? '40px 60px' : '36px 80px',
        gap: '10px',
        isolation: 'isolate',
        width: '100%',
        minHeight: isMobile ? 'auto' : '253px',
        background: '#04091D',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Blur Ellipse Effect */}
      <div
        style={{
          position: 'absolute',
          width: isMobile ? '80%' : isTablet ? '90%' : '1126px',
          height: isMobile ? '25px' : '35px',
          left: '50%',
          top: isMobile ? '70%' : '70%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
          filter: 'blur(150px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: isVisible ? 0.8 : 0,
          transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '10px',
          width: '100%',
          maxWidth: isMobile ? '100%' : isTablet ? '90%' : '1254px',
          minHeight: isMobile ? 'auto' : '136px',
          position: 'relative',
          zIndex: 0
        }}
      >
        {/* Top Text - Regular */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px 10px',
            gap: '10px',
            width: '100%',
            maxWidth: isMobile ? '100%' : '641px',
            minHeight: isMobile ? 'auto' : '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.2s'
          }}
        >
          <h3
            style={{
              width: '100%',
              fontFamily: 'Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : isTablet ? '28px' : '32px',
              lineHeight: isMobile ? '1.4' : '48px',
              textAlign: 'center',
              color: '#FFFFFF',
              margin: '0',
              padding: '0'
            }}
          >
            Real problems need focused solutions.
          </h3>
        </div>

        {/* Bottom Text - Gradient Bold */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px 10px',
            gap: '10px',
            width: '100%',
            minHeight: isMobile ? 'auto' : '78px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.4s'
          }}
        >
          <h2
            style={{
              width: '100%',
              fontFamily: 'Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: isMobile ? 'clamp(28px, 7vw, 40px)' : isTablet ? 'clamp(40px, 5vw, 48px)' : '52px',
              lineHeight: isMobile ? '1.3' : '78px',
              textAlign: 'center',
              background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0',
              padding: '0'
            }}
          >
            Explore the CRO services built for performance.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default RallyingCallSection;