import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { slugify } from '../utils/slugify'; // Add this import

const CaseStudyHero = ({ slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const componentRef = useRef(null);

  // Hero data array - each case study has its own hero data
  const heroData = [
    {
      id: 1,
      title: 'Personalization Engine Transforms User Experience',
      tagline: 'AI-Powered CRO Platform',
      heroTitle: 'UrbanCart E-Commerce 28% Revenue Uplift',
      description: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { icon: '📊', value: '+37%', label: 'CVR Increase' },
        { icon: '📊', value: '+28%', label: 'Revenue Uplift' },
        { icon: '📊', value: '+45%', label: 'AOV Growth' }
      ],
      ctaText: 'Download Case Study',
      ctaLink: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Revenue Uplift Through Testing',
      tagline: 'Funnel Optimization',
      heroTitle: 'AuraBloom Co. Conversion Breakthrough',
      description: 'Discover how strategic A/B testing and personalization drove unprecedented conversion rates.',
      metrics: [
        { icon: '📊', value: '+52%', label: 'Lead Generation' },
        { icon: '📊', value: '+41%', label: 'Engagement Rate' },
        { icon: '📊', value: '+33%', label: 'Time on Site' }
      ],
      ctaText: 'Read Full Story',
      ctaLink: '#'
    },
    {
      id: 3,
      title: 'SaaS Lead Generation Conversion Breakthrough',
      tagline: 'Landing Page Redesign',
      heroTitle: 'TechFlow SaaS 3x Lead Conversion',
      description: 'How behavioral psychology and UX optimization tripled qualified leads in 60 days.',
      metrics: [
        { icon: '📊', value: '+200%', label: 'Lead Quality' },
        { icon: '📊', value: '+65%', label: 'Form Completion' },
        { icon: '📊', value: '+89%', label: 'Click-Through' }
      ],
      ctaText: 'View Full Case Study',
      ctaLink: '#'
    },
    {
      id: 4,
      title: 'Fashion Retailer Cart Abandonment Solution',
      tagline: 'E-Commerce Optimization',
      heroTitle: 'FashionHub Checkout Flow Transformation',
      description: 'Strategic cart abandonment reduction through friction elimination and trust building.',
      metrics: [
        { icon: '📊', value: '+48%', label: 'Checkout Rate' },
        { icon: '📊', value: '+35%', label: 'Cart Recovery' },
        { icon: '📊', value: '+58%', label: 'Repeat Purchase' }
      ],
      ctaText: 'Explore Results',
      ctaLink: '#'
    },
    {
      id: 5,
      title: 'Mobile App Engagement Revolution',
      tagline: 'Mobile Experience',
      heroTitle: 'FitLife App Engagement Revolution',
      description: 'Mobile-first optimization and gamification strategies that doubled user retention.',
      metrics: [
        { icon: '📊', value: '+120%', label: 'User Retention' },
        { icon: '📊', value: '+78%', label: 'Session Length' },
        { icon: '📊', value: '+92%', label: 'Feature Adoption' }
      ],
      ctaText: 'See How We Did It',
      ctaLink: '#'
    },
    {
      id: 6,
      title: 'Enterprise Pipeline Growth Strategy',
      tagline: 'B2B Lead Generation',
      heroTitle: 'DataCore Enterprise Pipeline Growth',
      description: 'Multi-touch attribution and nurture optimization that transformed B2B sales pipeline.',
      metrics: [
        { icon: '📊', value: '+156%', label: 'MQL Volume' },
        { icon: '📊', value: '+87%', label: 'SQL Quality' },
        { icon: '📊', value: '+43%', label: 'Close Rate' }
      ],
      ctaText: 'Read Case Study',
      ctaLink: '#'
    }
  ];

  // Find the current case study data by slug
  const currentStudy = heroData.find(study => slugify(study.title) === slug) || heroData[0];

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

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} style={{
      width: '100%',
      height: '616px',
      background: 'linear-gradient(180deg, #04091D 16.18%, #0D98BA 219.08%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Content Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        gap: '23px',
        width: windowWidth <= 768 ? '90%' : '954px',
        maxWidth: '954px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        {/* Tagline (Hidden by default as per Figma) */}
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '48px',
          color: '#0D94BB',
          visibility: 'hidden'
        }}>
          {currentStudy.tagline}
        </div>

        {/* Main Title */}
        <h1 style={{
          width: '100%',
          maxWidth: '954px',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: windowWidth <= 768 ? '40px' : '70px',
          lineHeight: windowWidth <= 768 ? '45px' : '75px',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          margin: 0
        }}>
          {currentStudy.heroTitle}
        </h1>

        {/* Description */}
        <p style={{
          width: windowWidth <= 768 ? '100%' : '862px',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 600,
          fontSize: windowWidth <= 768 ? '14px' : '16px',
          lineHeight: '22px',
          textAlign: 'center',
          color: '#FFFFFF',
          margin: 0
        }}>
          {currentStudy.description}
        </p>

        {/* Divider Line */}
        <div style={{
          width: windowWidth <= 768 ? '90%' : '654px',
          height: '1px',
          background: '#0D98BA',
          borderRadius: '10px'
        }} />

        {/* Metrics Container */}
        <div style={{
          display: 'flex',
          flexDirection: windowWidth <= 768 ? 'column' : 'row',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '23px',
          width: windowWidth <= 768 ? '100%' : '796px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {currentStudy.metrics.map((metric, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px 20px',
              gap: '10px',
              width: windowWidth <= 768 ? '100%' : '250px',
              height: '54px',
              background: 'rgba(4, 9, 29, 0.4)',
              boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
              borderRadius: '10px',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.8s ease-out ${0.3 + index * 0.15}s, transform 0.8s ease-out ${0.3 + index * 0.15}s`
            }}>
              {/* Icon and Value */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '10px'
              }}>
                <TrendingUp size={20} color="#3AA1DE" />
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '19px',
                  lineHeight: '28px',
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
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'center',
                letterSpacing: '0.02em',
                color: '#FFFFFF'
              }}>
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a href={currentStudy.ctaLink} style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px 24px',
          gap: '10px',
          width: windowWidth <= 768 ? '100%' : '215px',
          maxWidth: '215px',
          height: '48px',
          background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
          border: '1px solid #0D94BB',
          boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
          borderRadius: '25px',
          textDecoration: 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0px 0px 16px 3px rgba(13, 148, 187, 0.9)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0px 0px 12px 2px rgba(13, 148, 187, 0.7)';
        }}>
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.02em',
            color: '#04091D'
          }}>
            {currentStudy.ctaText}
          </span>
        </a>
      </div>
    </div>
  );
};

export default CaseStudyHero;