// components/CaseStudySections/ImplementationSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const ImplementationSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const testimonialData = {
    'personalization-engine-transforms-user-experience': {
      tag: 'Client Testimonial',
      quote: 'Their mix of data analytics and behavioral psychology changed how we make every marketing decision. Each A/B test gave us insights worth gold. The personalization engine they built transformed our customer experience and the results speak for themselves - we saw a 37% increase in conversion rate within the first quarter.',
      author: {
        name: 'Sarah Mitchell',
        title: 'Senior Director of Digital Product, AuraBloom Co.',
        image: 'images/client-1.jpg',
        companyLogo: 'images/aurabloom-logo.png'
      }
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Client Testimonial',
      quote: 'The systematic testing framework they established gave us confidence in every optimization decision. No more guessing - everything is backed by data. Our conversion rates improved across all product categories and we finally have a repeatable process for continuous improvement.',
      author: {
        name: 'Michael Chen',
        title: 'VP of E-Commerce, UrbanCart',
        image: 'images/client-2.jpg',
        companyLogo: 'images/urbancart-logo.png'
      }
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Client Testimonial',
      quote: 'They completely transformed our landing page from a feature dump into a conversion machine. Our demo request rate tripled and the quality of leads improved dramatically. The ROI on this project was immediate and continues to compound.',
      author: {
        name: 'Jennifer Park',
        title: 'Head of Marketing, TechFlow SaaS',
        image: 'images/client-3.jpg',
        companyLogo: 'images/techflow-logo.png'
      }
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Client Testimonial',
      quote: 'Cart abandonment was killing our business. Their comprehensive approach addressed every friction point we didn\'t even know existed. The checkout redesign and recovery system they implemented recovered millions in previously lost revenue.',
      author: {
        name: 'Amanda Rodriguez',
        title: 'Director of E-Commerce, FashionHub',
        image: 'images/client-4.jpg',
        companyLogo: 'images/fashionhub-logo.png'
      }
    },
    'mobile-app-engagement-revolution': {
      tag: 'Client Testimonial',
      quote: 'Our retention numbers were abysmal before working with them. They rebuilt our entire onboarding and engagement strategy from the ground up. User retention more than doubled and our DAU metrics finally justify our acquisition spend.',
      author: {
        name: 'David Thompson',
        title: 'Product Director, FitLife App',
        image: 'images/client-5.jpg',
        companyLogo: 'images/fitlife-logo.png'
      }
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Client Testimonial',
      quote: 'They aligned our marketing and sales teams in ways we couldn\'t accomplish internally. The lead scoring system, nurture campaigns, and sales enablement materials they created shortened our sales cycle by 45 days and improved close rates significantly.',
      author: {
        name: 'Robert Harrison',
        title: 'Chief Revenue Officer, DataCore',
        image: 'images/client-6.jpg',
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
        padding: windowWidth <= 768 ? '60px 20px' : '80px 102px',
        gap: '30px',
        width: '100%',
        background: '#0a1628',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Tag */}
      <span style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        fontSize: '16px',
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
        padding: windowWidth <= 768 ? '25px' : '30px',
        gap: '10px',
        width: '100%',
        maxWidth: '1234px',
        background: '#041629',
        boxShadow: '0px 0px 15px #98BA0D',
        borderRadius: '10px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
      }}>
        {/* Content Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '25px',
          width: '100%'
        }}>
          {/* Quote Icon */}
          <div style={{
            width: '43px',
            height: '41px',
            fontSize: '48px',
            color: '#0D98BA',
            lineHeight: '41px',
            fontFamily: 'Georgia, serif'
          }}>
            "
          </div>

          {/* Testimonial Text */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '10px',
            width: '100%'
          }}>
            <p style={{
              width: '100%',
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: windowWidth <= 768 ? '14px' : '15px',
              lineHeight: '24px',
              color: '#FFFFFF',
              margin: 0
            }}>
              {data.quote}
            </p>
          </div>

          {/* Author Section */}
          <div style={{
            display: 'flex',
            flexDirection: windowWidth <= 768 ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: windowWidth <= 768 ? 'flex-start' : 'center',
            padding: '15px 0px 0px',
            width: '100%',
            borderTop: '1px solid #848586',
            gap: windowWidth <= 768 ? '20px' : '0px'
          }}>
            {/* Author Info Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '15px',
              margin: windowWidth <= 768 ? '0' : '0 auto'
            }}>
              {/* Profile Image */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                backgroundColor: '#2a2a2a'
              }}>
                <img 
                  src={data.author.image}
                  alt={data.author.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Name and Title */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '5px'
              }}>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '22px',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF'
                }}>
                  {data.author.name}
                </span>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '22px',
                  letterSpacing: '-0.03em',
                  color: '#7D818D'
                }}>
                  {data.author.title}
                </span>
              </div>
            </div>

            {/* Company Logo */}
            <div style={{
              margin: windowWidth <= 768 ? '0' : '0 auto',
              height: '35px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <img 
                src={data.author.companyLogo}
                alt="Company Logo"
                style={{
                  height: '35px',
                  width: 'auto',
                  maxWidth: '183px',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection;