import React, { useState, useEffect, useRef } from 'react';

const CTASection = () => {
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
        alignItems: 'flex-start',
        padding: isMobile ? '60px 20px' : isTablet ? '80px 50px' : '80px 102px',
        gap: '10px',
        width: '100%',
        minHeight: isMobile ? 'auto' : '243px',
        background: '#04091D',
        boxSizing: 'border-box'
      }}
    >
      {/* Main CTA Card */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '40px 25px' : isTablet ? '35px 40px' : '30px 50px',
          gap: isMobile ? '30px' : '36px',
          width: '100%',
          maxWidth: '1236px',
          minHeight: isMobile ? 'auto' : '243px',
          background: '#07334C',
          boxShadow: '0px 0px 15px #04091D',
          borderRadius: '20px',
          boxSizing: 'border-box',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '0.2s',
          margin: '0 auto'
        }}
      >
        {/* Left Column - Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '12px',
            margin: isMobile ? '0' : '0 auto',
            width: isMobile ? '100%' : isTablet ? '60%' : '569px',
            minHeight: isMobile ? 'auto' : '149px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.4s'
          }}
        >
          {/* Heading */}
          <h2
            style={{
              width: '100%',
              fontFamily: 'Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: isMobile ? 'clamp(24px, 6vw, 32px)' : isTablet ? 'clamp(32px, 4vw, 36px)' : '40px',
              lineHeight: isMobile ? '1.4' : '60px',
              textTransform: 'capitalize',
              color: '#FFFFFF',
              margin: '0',
              padding: '0'
            }}
          >
            Ready to Boost Your Conversions?
          </h2>

          {/* Subheading */}
          <p
            style={{
              width: '100%',
              fontFamily: 'Lato, sans-serif',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: isMobile ? 'clamp(13px, 3vw, 14px)' : '14px',
              lineHeight: isMobile ? '1.4' : '17px',
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              margin: '0',
              padding: '0'
            }}
          >
            Let's uncover the real reasons your visitors aren't turning into customers.
          </p>
        </div>

        {/* Right Column - Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '20px',
            margin: isMobile ? '0' : '0 auto',
            width: isMobile ? '100%' : 'auto',
            minWidth: isMobile ? '100%' : 'auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.6s'
          }}
        >
          {/* Primary Button */}
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px 24px',
              gap: '10px',
              width: isMobile ? '100%' : '192px',
              height: '48px',
              background: '#0D98BA',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0B86A3';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0D98BA';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
            }}
          >
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.02em',
                color: '#000000',
                whiteSpace: 'nowrap'
              }}
            >
              Get Free Audit
            </span>
          </button>

          {/* Secondary Button */}
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '11px 13px',
              gap: '10px',
              width: isMobile ? '100%' : '174px',
              height: '48px',
              background: 'transparent',
              border: '2px solid #0D98BA',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0D98BA';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.querySelector('span').style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.querySelector('span').style.color = '#0D98BA';
            }}
          >
            <span
              style={{
                fontFamily: 'Lato, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '150%',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#0D98BA',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              Learn More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;