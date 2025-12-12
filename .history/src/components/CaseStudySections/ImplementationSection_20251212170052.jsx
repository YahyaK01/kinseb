// components/CaseStudySections/ImplementationSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const ImplementationSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const testimonialData = {
    'personalization-engine-transforms-user-experience': {
      tag: 'Client Testimonial',
      quoteStart: 'Their mix of data analytics and behavioral psychology changed how we make every marketing decision. ',
      quoteBold: 'Each A/B test gave us insights worth gold',
      quoteEnd: '. Their mix of data analytics and behavioral psychology changed how we make every marketing decision. Each A/B test gave us insights worth gold.',
      author: {
        name: 'Alex Shaun',
        title: 'Senior Director of Digital Product',
        company: 'AuraBloom',
        image: 'https://i.pravatar.cc/150?img=12',
        companyLogo: 'images/aurabloom-logo.png'
      }
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Client Testimonial',
      quoteStart: 'The systematic testing framework they established gave us ',
      quoteBold: 'confidence in every optimization decision',
      quoteEnd: '. No more guessing - everything is backed by data. Our conversion rates improved across all product categories.',
      author: {
        name: 'Michael Chen',
        title: 'VP of E-Commerce',
        company: 'UrbanCart',
        image: 'https://i.pravatar.cc/150?img=33',
        companyLogo: 'images/urbancart-logo.png'
      }
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Client Testimonial',
      quoteStart: 'They completely transformed our landing page from a feature dump into a ',
      quoteBold: 'conversion machine',
      quoteEnd: '. Our demo request rate tripled and the quality of leads improved dramatically. The ROI on this project was immediate.',
      author: {
        name: 'Jennifer Park',
        title: 'Head of Marketing',
        company: 'TechFlow SaaS',
        image: 'https://i.pravatar.cc/150?img=47',
        companyLogo: 'images/techflow-logo.png'
      }
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Client Testimonial',
      quoteStart: 'Cart abandonment was killing our business. Their comprehensive approach addressed ',
      quoteBold: 'every friction point we didn\'t even know existed',
      quoteEnd: '. The checkout redesign and recovery system they implemented recovered millions in previously lost revenue.',
      author: {
        name: 'Amanda Rodriguez',
        title: 'Director of E-Commerce',
        company: 'FashionHub',
        image: 'https://i.pravatar.cc/150?img=45',
        companyLogo: 'images/fashionhub-logo.png'
      }
    },
    'mobile-app-engagement-revolution': {
      tag: 'Client Testimonial',
      quoteStart: 'Our retention numbers were abysmal before working with them. They rebuilt our entire onboarding and ',
      quoteBold: 'engagement strategy from the ground up',
      quoteEnd: '. User retention more than doubled and our DAU metrics finally justify our acquisition spend.',
      author: {
        name: 'David Thompson',
        title: 'Product Director',
        company: 'FitLife App',
        image: 'https://i.pravatar.cc/150?img=14',
        companyLogo: 'images/fitlife-logo.png'
      }
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Client Testimonial',
      quoteStart: 'They aligned our marketing and sales teams in ways we couldn\'t accomplish internally. The lead scoring system and ',
      quoteBold: 'nurture campaigns shortened our sales cycle by 45 days',
      quoteEnd: ' and improved close rates significantly.',
      author: {
        name: 'Robert Harrison',
        title: 'Chief Revenue Officer',
        company: 'DataCore',
        image: 'https://i.pravatar.cc/150?img=56',
        companyLogo: 'images/datacore-logo.png'
      }
    }
  };

  const data = testimonialData[slug] || testimonialData['personalization-engine-transforms-user-experience'];

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
      id="implementation-section" 
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: windowWidth <= 768 ? '100px 20px' : windowWidth <= 1024 ? '140px 40px' : '180px 102px',
        gap: '30px',
        width: '100%',
        background: '#0a1628',
        fontFamily: "'Poppins', sans-serif",
        minHeight: windowWidth <= 768 ? 'auto' : '500px'
      }}
    >
      {/* Tag */}
      <span style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        fontSize: windowWidth <= 768 ? '14px' : '16px',
        lineHeight: '24px',
        color: '#979797',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        {data.tag}
      </span>

      {/* Testimonial Card */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: windowWidth <= 768 ? '25px 20px' : windowWidth <= 1024 ? '30px 35px' : '35px 45px',
        gap: '20px',
        width: '100%',
        maxWidth: windowWidth <= 1024 ? '100%' : '1400px',
        background: '#0B1A2E',
        boxShadow: '0px 4px 20px rgba(152, 186, 13, 0.3)',
        borderRadius: '15px',
        border: '1px solid rgba(152, 186, 13, 0.2)',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
        position: 'relative'
      }}>
        {/* Green bottom glow */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #98BA0D, transparent)',
          borderRadius: '0 0 15px 15px',
          opacity: 0.8
        }} />

        {/* Company Logo - Top Right on Mobile Only */}
        {windowWidth <= 768 && (
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            zIndex: 5
          }}>
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              color: '#FFFFFF',
              letterSpacing: '0.5px'
            }}>
              {data.author.company} Co.
            </span>
          </div>
        )}

        {/* Quote Icon Image */}
        <img 
          src="images/quote-icon.png"
          alt="Quote"
          style={{
            width: windowWidth <= 768 ? '40px' : '50px',
            height: windowWidth <= 768 ? '35px' : '43px',
            objectFit: 'contain',
            marginBottom: '-5px'
          }}
        />

        {/* Testimonial Text */}
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          fontSize: windowWidth <= 768 ? '14px' : windowWidth <= 1024 ? '15px' : '16px',
          lineHeight: windowWidth <= 768 ? '24px' : '28px',
          color: '#FFFFFF',
          margin: 0,
          width: '100%',
          paddingRight: windowWidth <= 768 ? '100px' : '0' // Add padding on mobile to avoid overlap with company name
        }}>
          {data.quoteStart}
          <strong style={{ fontWeight: 700 }}>{data.quoteBold}</strong>
          {data.quoteEnd}
        </p>

        {/* Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #848586, transparent)',
          margin: '5px 0'
        }} />

        {/* Author Section */}
        <div style={{
          display: 'flex',
          flexDirection: windowWidth <= 768 ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: windowWidth <= 768 ? 'flex-start' : 'center',
          width: '100%',
          gap: windowWidth <= 768 ? '20px' : '20px'
        }}>
          {/* Author Info Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: windowWidth <= 768 ? '12px' : '18px'
          }}>
            {/* Profile Image */}
            <div style={{
              width: windowWidth <= 768 ? '45px' : '55px',
              height: windowWidth <= 768 ? '45px' : '55px',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              backgroundColor: '#2a2a2a',
              border: '2px solid #3AA1DE'
            }}>
              <img 
                src={data.author.image}
                alt={data.author.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Name and Title */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: windowWidth <= 768 ? '15px' : '17px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}>
                {data.author.name}
              </span>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: windowWidth <= 768 ? '12px' : '13px',
                lineHeight: '18px',
                color: '#9CA3AF'
              }}>
                {data.author.title}, <span style={{ fontWeight: 600 }}>{data.author.company}</span>
              </span>
            </div>
          </div>

          {/* Company Logo - Desktop Only */}
          {windowWidth > 768 && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: '35px',
              marginLeft: 'auto'
            }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#FFFFFF',
                letterSpacing: '0.5px'
              }}>
                {data.author.company} Co.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection;