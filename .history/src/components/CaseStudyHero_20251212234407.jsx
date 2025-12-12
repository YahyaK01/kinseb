// components/CaseStudyHero.jsx
import React, { useState, useEffect, useRef } from 'react';

const CaseStudyHero = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  const heroData = {
    'personalization-engine-transforms-user-experience': {
      category: 'Case Study',
      titleLine1: 'PERSONALIZATION ENGINE',
      titleLine2: 'USER EXPERIENCE',
      titleHighlight: '37% CONVERSION RATE',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '+37%', label: 'CVR Increase', icon: '/images/130.png' },
        { value: '+156%', label: 'Revenue Growth', icon: '/images/130.png' },
        { value: '2.3x', label: 'User Engagement', icon: '/images/130.png' }
      ]
    },
    'e-commerce-revenue-uplift-through-testing': {
      category: 'Case Study',
      titleLine1: 'URBANCART',
      titleLine2: 'E-COMMERCE',
      titleHighlight: '28% REVENUE UPLIFT',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '+28%', label: 'Revenue Growth', icon: 'images/icons/chart-icon.png' },
        { value: '+156%', label: 'Sales Increase', icon: 'images/icons/chart-icon.png' },
        { value: '3.2x', label: 'ROI Growth', icon: 'images/icons/chart-icon.png' }
      ]
    },
    'saas-lead-generation-conversion-breakthrough': {
      category: 'Case Study',
      titleLine1: 'SAAS LEAD',
      titleLine2: 'GENERATION',
      titleHighlight: '3X CONVERSION BREAKTHROUGH',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '3x', label: 'Lead Generation', icon: 'images/icons/chart-icon.png' },
        { value: '+214%', label: 'Form Conversion', icon: 'images/icons/chart-icon.png' },
        { value: '-47%', label: 'Cost Per Lead', icon: 'images/icons/chart-icon.png' }
      ]
    },
    'fashion-retailer-cart-abandonment-solution': {
      category: 'Case Study',
      titleLine1: 'FASHION',
      titleLine2: 'RETAILER',
      titleHighlight: 'CART ABANDONMENT SOLUTION',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '-68%', label: 'Cart Abandonment', icon: 'images/icons/chart-icon.png' },
        { value: '+42%', label: 'Checkout Complete', icon: 'images/icons/chart-icon.png' },
        { value: '$2.3M', label: 'Revenue Recovered', icon: 'images/icons/chart-icon.png' }
      ]
    },
    'mobile-app-engagement-revolution': {
      category: 'Case Study',
      titleLine1: 'MOBILE',
      titleLine2: 'APP',
      titleHighlight: 'ENGAGEMENT REVOLUTION',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '2.3x', label: 'User Retention', icon: 'images/icons/chart-icon.png' },
        { value: '+128%', label: '30-Day Retention', icon: 'images/icons/chart-icon.png' },
        { value: '+141%', label: 'Daily Active Users', icon: 'images/icons/chart-icon.png' }
      ]
    },
    'enterprise-pipeline-growth-strategy': {
      category: 'Case Study',
      titleLine1: 'ENTERPRISE',
      titleLine2: 'PIPELINE',
      titleHighlight: '+179% GROWTH STRATEGY',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '+179%', label: 'Pipeline Growth', icon: 'images/icons/chart-icon.png' },
        { value: '-25%', label: 'Sales Cycle', icon: 'images/icons/chart-icon.png' },
        { value: '+35%', label: 'Close Rate', icon: 'images/icons/chart-icon.png' }
      ]
    }
  };

  const data = heroData[slug] || heroData['e-commerce-revenue-uplift-through-testing'];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      style={{
        width: '100%',
        minHeight: windowWidth <= 768 ? '600px' : '616px',
        background: 'linear-gradient(180deg, #04091D 16.18%, #0D98BA 219.08%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: windowWidth <= 768 ? '60px 20px' : '80px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        gap: '23px',
        width: '100%',
        maxWidth: '1400px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
      >
        {/* Case Study Badge - Positioned Lower */}
        <div style={{
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px 24px',
          width: windowWidth <= 768 ? '180px' : '215px',
          height: '48px',
          background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
          border: '1px solid #0D94BB',
          boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
          borderRadius: '25px',
          cursor: 'default',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.2s',
          marginTop: '30px',
          marginBottom: '10px'
        }}>
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.02em',
            color: '#04091D'
          }}>
            {data.category}
          </span>
        </div>

        {/* Main Title - TWO Lines */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0px',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.3s'
        }}>
          {/* First Line - Combined White Text */}
          <h1 style={{
            width: '100%',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: windowWidth <= 768 ? '24px' : windowWidth <= 1024 ? '38px' : '50px',
            lineHeight: windowWidth <= 768 ? '32px' : windowWidth <= 1024 ? '48px' : '60px',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            margin: 0,
            whiteSpace: 'nowrap'
          }}>
            {data.titleLine1} {data.titleLine2}
          </h1>

          {/* Second Line - Gradient Text */}
          <h2 style={{
            width: '100%',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: windowWidth <= 768 ? '24px' : windowWidth <= 1024 ? '38px' : '50px',
            lineHeight: windowWidth <= 768 ? '32px' : windowWidth <= 1024 ? '48px' : '60px',
            textAlign: 'center',
            textTransform: 'uppercase',
            background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            margin: 0,
            whiteSpace: 'nowrap'
          }}>
            {data.titleHighlight}
          </h2>
        </div>

        {/* Subtitle */}
        <p style={{
          width: '100%',
          maxWidth: '862px',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 600,
          fontSize: windowWidth <= 768 ? '14px' : '16px',
          lineHeight: '22px',
          textAlign: 'center',
          color: '#FFFFFF',
          margin: 0,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.4s'
        }}>
          {data.subtitle}
        </p>

        {/* Divider Line */}
        <div style={{
          width: windowWidth <= 768 ? '80%' : '654px',
          height: '1px',
          background: '#0D98BA',
          borderRadius: '10px',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.5s'
        }} />

        {/* Metrics Cards - Frame 1160445415 */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0px',
          gap: windowWidth <= 768 ? '10px' : '23px',
          width: '100%',
          maxWidth: windowWidth <= 768 ? '100%' : '796px',
          height: windowWidth <= 768 ? 'auto' : '54px'
        }}>
          {data.metrics.map((metric, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                flexDirection: windowWidth <= 768 ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: windowWidth <= 768 ? '10px 8px' : '15px 20px',
                gap: windowWidth <= 768 ? '5px' : '10px',
                width: windowWidth <= 768 ? 'calc(33.333% - 7px)' : '250px',
                height: windowWidth <= 768 ? 'auto' : '54px',
                background: 'rgba(4, 9, 29, 0.4)',
                boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
                borderRadius: '10px',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ease-out ${0.6 + index * 0.1}s, transform 0.8s ease-out ${0.6 + index * 0.1}s`,
                position: 'relative'
              }}
            >
              {/* Left Corner Image - Hide on mobile */}
              {windowWidth > 768 && (
                <img 
                  src="images/icons/metric-corner-icon.png"
                  alt="Metric"
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '24px',
                    height: '24px'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              
              {/* Icon and Value Container - Frame 1160445390 */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: windowWidth <= 768 ? '5px' : '10px'
              }}>
                {/* Combo Chart Icon - Hide on mobile */}
                {windowWidth > 768 && (
                  <img 
                    src={metric.icon}
                    alt="Chart"
                    style={{
                      width: '20px',
                      height: '20px'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                
                {/* Value with Gradient */}
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: windowWidth <= 768 ? '16px' : '19px',
                  lineHeight: windowWidth <= 768 ? '22px' : '28px',
                  display: 'flex',
                  alignItems: 'center',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {metric.value}
                </span>
              </div>

              {/* Label */}
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: windowWidth <= 768 ? '12px' : '16px',
                lineHeight: windowWidth <= 768 ? '16px' : '24px',
                textAlign: 'center',
                letterSpacing: '0.02em',
                color: '#FFFFFF'
              }}>
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Get Free Audit Button */}
        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 24px',
            gap: '10px',
            width: windowWidth <= 768 ? '180px' : '200px',
            height: '48px',
            background: '#0D98BA',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#0B7A94';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0px 6px 8px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0D98BA';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
          }}
        >
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.02em',
            color: '#000000'
          }}>
            Get Free Audit
          </span>
        </button>
      </div>
    </div>
  );
};

export default CaseStudyHero;