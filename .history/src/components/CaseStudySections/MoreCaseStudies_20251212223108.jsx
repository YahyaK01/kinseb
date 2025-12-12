// components/CaseStudySections/MoreCaseStudies.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slugify';

const MoreCaseStudies = ({ currentSlug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const allCaseStudies = [
    {
      id: 1,
      image: 'images/case-study-1.jpg',
      metric: '+37%',
      metricLabel: 'CVR Increase',
      title: 'Personalization Engine Transforms User Experience',
      description: 'Through data-driven experimentation and strategic CTA placement, we transformed an underperforming landing page',
      category: 'E-commerce'
    },
    {
      id: 2,
      image: 'images/case-study-2.jpg',
      metric: '+156%',
      metricLabel: 'Revenue Growth',
      title: 'E-Commerce Revenue Uplift Through Testing',
      description: 'Strategic A/B testing and conversion optimization drove unprecedented revenue growth for this retail brand',
      category: 'Retail'
    },
    {
      id: 3,
      image: 'images/case-study-3.jpg',
      metric: '3x',
      metricLabel: 'Lead Generation',
      title: 'SaaS Lead Generation Conversion Breakthrough',
      description: 'Systematic optimization of landing pages and forms tripled qualified lead generation',
      category: 'SaaS'
    },
    {
      id: 4,
      image: 'images/case-study-4.jpg',
      metric: '-68%',
      metricLabel: 'Cart Abandonment',
      title: 'Fashion Retailer Cart Abandonment Solution',
      description: 'Comprehensive checkout optimization reduced cart abandonment and recovered millions in lost revenue',
      category: 'Fashion'
    },
    {
      id: 5,
      image: 'images/case-study-5.jpg',
      metric: '2.3x',
      metricLabel: 'User Retention',
      title: 'Mobile App Engagement Revolution',
      description: 'Strategic onboarding and engagement optimization more than doubled user retention rates',
      category: 'Mobile App'
    },
    {
      id: 6,
      image: 'images/case-study-6.jpg',
      metric: '+179%',
      metricLabel: 'Pipeline Growth',
      title: 'Enterprise Pipeline Growth Strategy',
      description: 'End-to-end optimization of the sales funnel drove dramatic pipeline growth',
      category: 'B2B SaaS'
    }
  ];

  // Filter out the current case study
  const otherCaseStudies = allCaseStudies.filter(study => slugify(study.title) !== currentSlug);

  // Get 3 studies to display based on current index
  const displayedStudies = [
    otherCaseStudies[currentIndex % otherCaseStudies.length],
    otherCaseStudies[(currentIndex + 1) % otherCaseStudies.length],
    otherCaseStudies[(currentIndex + 2) % otherCaseStudies.length]
  ];

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

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + otherCaseStudies.length) % otherCaseStudies.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % otherCaseStudies.length);
  };

  return (
    <div 
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: windowWidth <= 768 ? '60px 20px' : windowWidth <= 1024 ? '70px 40px' : '80px 117px',
        gap: '48px',
        width: '100%',
        background: '#0a1628',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        gap: '10px',
        width: '100%',
        maxWidth: '945px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        <h2 style={{
          width: '100%',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: windowWidth <= 768 ? '28px' : windowWidth <= 1024 ? '34px' : '40px',
          lineHeight: windowWidth <= 768 ? '38px' : windowWidth <= 1024 ? '44px' : '60px',
          textAlign: 'center',
          color: '#FFFFFF',
          margin: 0
        }}>
          See More Success Stories
        </h2>
        <p style={{
          maxWidth: '740px',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '150%',
          textAlign: 'center',
          letterSpacing: '-0.006em',
          color: '#FFFFFF',
          margin: 0
        }}>
          Explore how we've helped other businesses achieve remarkable results
        </p>
      </div>

      {/* Case Studies Grid */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
        maxWidth: '1243px'
      }}>
        {/* Cards Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: windowWidth <= 768 ? '1fr' : windowWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: windowWidth <= 768 ? '30px' : '48px',
          width: '100%',
          justifyItems: 'center'
        }}>
          {displayedStudies.map((study, index) => (
            <Link
              key={study.id}
              to={`/case-study/${slugify(study.title)}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                width: '100%',
                maxWidth: '393px',
                background: '#041629',
                boxShadow: '0px 0px 15px #04091D',
                borderRadius: '15px',
                textDecoration: 'none',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease-out ${0.2 + index * 0.1}s, transform 0.8s ease-out ${0.2 + index * 0.1}s, box-shadow 0.3s ease`,
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 25px rgba(13, 152, 186, 0.4)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 15px #04091D';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '241px',
                overflow: 'hidden'
              }}>
                <img 
                  src={study.image}
                  alt={study.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.style.background = '#1a2332';
                  }}
                />
                
                {/* Metric Badge */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '10px 20px',
                  position: 'absolute',
                  minWidth: '123px',
                  left: '19px',
                  bottom: '20px',
                  background: '#07334C',
                  borderRadius: '8px',
                  gap: '5px'
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
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
                      {study.metric}
                    </span>
                    <img 
                      src="images/icons/chart-icon.png"
                      alt="Chart"
                      style={{
                        width: '20px',
                        height: '20px'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '18px',
                    textAlign: 'center',
                    letterSpacing: '0.02em',
                    color: '#FFFFFF'
                  }}>
                    {study.metricLabel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px',
                gap: '12px',
                width: '100%'
              }}>
                {/* Title */}
                <h3 style={{
                  width: '100%',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0
                }}>
                  {study.title}
                </h3>

                {/* Description */}
                <p style={{
                  width: '100%',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '22px',
                  letterSpacing: '0.02em',
                  color: '#B2AFAF',
                  margin: 0
                }}>
                  {study.description}
                </p>

                {/* Divider */}
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: '#7D818D'
                }} />

                {/* Link */}
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: '#98BA0D'
                }}>
                  View Full Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          width: '100%',
          maxWidth: '1243px',
          height: windowWidth <= 768 ? 'auto' : '118px',
          gap: windowWidth <= 768 ? '20px' : '0px',
          marginTop: '20px',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.6s'
        }}>
          {/* Frame with Line and Arrows */}
          <div style={{
            position: 'relative',
            width: windowWidth <= 768 ? '100%' : '1243px',
            height: windowWidth <= 768 ? '70px' : '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Line 33 */}
            <div style={{
              position: 'absolute',
              width: windowWidth <= 768 ? 'calc(100% - 70px)' : '1225px',
              height: '0px',
              left: windowWidth <= 768 ? '35px' : '9px',
              top: '25px',
              border: '4px solid #0D98BA',
              borderRadius: '4px'
            }} />

            {/* Previous Button - Frame 1160445368 */}
            <div 
              onClick={handlePrevious}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                position: 'absolute',
                width: '50px',
                height: '50px',
                left: windowWidth <= 768 ? '10px' : '0.5px',
                top: '0px',
                background: '#03101D',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '2px solid #0D98BA'