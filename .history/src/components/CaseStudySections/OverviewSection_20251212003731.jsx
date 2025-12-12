// components/CaseStudySections/OverviewSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const OverviewSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const overviewData = {
    'personalization-engine-transforms-user-experience': {
      title: 'Project Overview',
      content: 'This comprehensive CRO project focused on implementing personalized user experiences across all touchpoints. Through advanced segmentation and behavioral targeting, we transformed the customer journey and significantly improved conversion metrics.',
      highlights: [
        'Advanced user segmentation implementation',
        'Personalized content delivery system',
        'Real-time behavioral tracking',
        'A/B testing framework establishment'
      ]
    },
    'e-commerce-revenue-uplift-through-testing': {
      title: 'Project Overview',
      content: 'Strategic A/B testing initiative that revolutionized the e-commerce experience. Through systematic experimentation and data analysis, we identified key friction points and optimized the entire customer journey.',
      highlights: [
        'Comprehensive funnel analysis',
        'Multi-variate testing implementation',
        'Checkout flow optimization',
        'Mobile experience enhancement'
      ]
    },
    'saas-lead-generation-conversion-breakthrough': {
      title: 'Project Overview',
      content: 'Landing page redesign project that leveraged behavioral psychology and UX best practices to triple qualified leads. Focus on reducing friction and building trust throughout the conversion funnel.',
      highlights: [
        'User research and persona development',
        'Value proposition refinement',
        'Form optimization strategies',
        'Trust signal implementation'
      ]
    },
    'fashion-retailer-cart-abandonment-solution': {
      title: 'Project Overview',
      content: 'Comprehensive cart abandonment reduction strategy that addressed both technical and psychological barriers. Implementation of trust-building elements and friction elimination across the checkout process.',
      highlights: [
        'Cart abandonment analysis',
        'Checkout process simplification',
        'Recovery email automation',
        'Guest checkout implementation'
      ]
    },
    'mobile-app-engagement-revolution': {
      title: 'Project Overview',
      content: 'Mobile-first optimization project that transformed user engagement through gamification and personalization. Focus on creating habit-forming experiences that increased retention and session length.',
      highlights: [
        'Mobile UX research',
        'Gamification strategy',
        'Personalized onboarding',
        'Push notification optimization'
      ]
    },
    'enterprise-pipeline-growth-strategy': {
      title: 'Project Overview',
      content: 'B2B lead generation and nurture optimization that transformed the sales pipeline. Multi-touch attribution implementation and content strategy development for enterprise buyers.',
      highlights: [
        'Buyer journey mapping',
        'Lead scoring model development',
        'Content strategy optimization',
        'Marketing automation setup'
      ]
    }
  };

  const data = overviewData[slug] || overviewData['personalization-engine-transforms-user-experience'];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="overview-section" 
      ref={sectionRef}
      style={{
        padding: windowWidth <= 768 ? '40px 20px' : '60px 102px',
        maxWidth: '1440px',
        margin: '0 auto',
        background: '#0a1628',
        minHeight: '400px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: windowWidth <= 768 ? '28px' : '32px',
        lineHeight: '48px',
        background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '20px'
      }}>
        {data.title}
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: windowWidth <= 768 ? '15px' : '16px',
        lineHeight: '28px',
        color: '#FFFFFF',
        marginBottom: '30px'
      }}>
        {data.content}
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {data.highlights.map((highlight, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
            transition: `opacity 0.8s ease-out ${0.2 + index * 0.1}s, transform 0.8s ease-out ${0.2 + index * 0.1}s`
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
              flexShrink: 0
            }} />
            <span style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: windowWidth <= 768 ? '15px' : '16px',
              lineHeight: '28px',
              color: '#FFFFFF'
            }}>
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewSection;