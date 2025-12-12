// components/CaseStudySections/OverviewSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const OverviewSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const overviewData = {
    'personalization-engine-transforms-user-experience': {
      tag: 'Overview',
      title: 'About AuraBloom Co.',
      description: 'Founded in 2020, AuraBloom Co. is a growing e-commerce company serving modern lifestyle consumers. Despite consistent site traffic and an engaged community, their conversion rate remained low at 2.1%. Our team partnered with them to analyze user behavior and identify barriers to conversion across the funnel.',
      image: 'images/overview-1.jpg',
      details: [
        {
          icon: '🔧',
          label: 'Service',
          value: 'E-Commerce Optimization'
        },
        {
          icon: '👥',
          label: 'Business Type',
          value: 'B2C Retail'
        },
        {
          icon: '📊',
          label: 'Industry',
          value: 'Lifestyle & Beauty'
        },
        {
          icon: '🌐',
          label: 'Website',
          value: 'www.aurabloom.com'
        }
      ]
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Overview',
      title: 'About UrbanCart',
      description: 'Founded in 2018, UrbanCart is a growing e-commerce platform serving urban millennials. Despite consistent site traffic and an engaged community, their conversion rate remained low at 3.2%. Our team partnered with them to analyze user behavior and identify barriers to conversion across the funnel.',
      image: 'images/overview-2.jpg',
      details: [
        {
          icon: '🔧',
          label: 'Service',
          value: 'A/B Testing & CRO'
        },
        {
          icon: '👥',
          label: 'Business Type',
          value: 'B2C E-Commerce'
        },
        {
          icon: '📊',
          label: 'Industry',
          value: 'Urban Fashion'
        },
        {
          icon: '🌐',
          label: 'Website',
          value: 'www.urbancart.com'
        }
      ]
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Overview',
      title: 'About TechFlow SaaS',
      description: 'Founded in 2019, TechFlow is a growing SaaS company serving B2B enterprise clients. Despite consistent site traffic and an engaged community, their conversion rate remained low at 1.8%. Our team partnered with them to analyze user behavior and identify barriers to conversion across the funnel.',
      image: 'images/overview-3.jpg',
      details: [
        {
          icon: '🔧',
          label: 'Service',
          value: 'Landing Page Optimization'
        },
        {
          icon: '👥',
          label: 'Business Type',
          value: 'B2B SaaS'
        },
        {
          icon: '📊',
          label: 'Industry',
          value: 'Technology'
        },
        {
          icon: '🌐',
          label: 'Website',
          value: 'www.techflow.io'
        }
      ]
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Overview',
      title: 'About FashionHub',
      description: 'Founded in 2017, FashionHub is a growing fashion retail company serving style-conscious consumers. Despite consistent site traffic and an engaged community, their cart abandonment rate remained high at 72%. Our team partnered with them to analyze user behavior and identify barriers to checkout completion.',
      image: 'images/overview-4.jpg',
      details: [
        {
          icon: '🔧',
          label: 'Service',
          value: 'Checkout Optimization'
        },
        {
          icon: '👥',
          label: 'Business Type',
          value: 'B2C Fashion'
        },
        {
          icon: '📊',
          label: 'Industry',
          value: 'Fashion Retail'
        },
        {
          icon: '🌐',
          label: 'Website',
          value: 'www.fashionhub.com'
        }
      ]
    },
    'mobile-app-engagement-revolution': {
      tag: 'Overview',
      title: 'About FitLife App',
      description: 'Founded in 2021, FitLife is a growing health & fitness app serving wellness enthusiasts. Despite consistent downloads and an engaged user base, their retention rate remained low at 18%. Our team partnered with them to analyze user behavior and identify barriers to long-term engagement.',
      image: 'images/overview-5.jpg',
      details: [
        {
          icon: '🔧',
          label: 'Service',
          value: 'Mobile App Optimization'
        },
        {
          icon: '👥',
          label: 'Business Type',
          value: 'B2C Mobile App'
        },
        {
          icon: '📊',
          label: 'Industry',
          value: 'Health & Fitness'
        },
        {
          icon: '🌐',
          label: 'Website',
          value: 'www.fitlifeapp.com'
        }
      ]
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Overview',
      title: 'About DataCore',
      description: 'Founded in 2016, DataCore is a growing B2B technology company serving enterprise clients. Despite consistent leads and an engaged prospect base, their conversion rate remained low at 4.2%. Our team partnered with them to analyze buyer behavior and identify barriers to pipeline progression.',
      image: 'images/overview-6.jpg',
      details: [
        {
          icon: '🔧',
          label: 'Service',
          value: 'B2B Pipeline Optimization'
        },
        {
          icon: '👥',
          label: 'Business Type',
          value: 'B2B Enterprise'
        },
        {
          icon: '📊',
          label: 'Industry',
          value: 'Data Analytics'
        },
        {
          icon: '🌐',
          label: 'Website',
          value: 'www.datacore.io'
        }
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: windowWidth <= 768 ? '60px 20px' : '80px 74px',
        gap: '10px',
        width: '100%',
        background: '#0a1628',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Main Container */}
      <div style={{
        display: 'flex',
        flexDirection: windowWidth <= 1024 ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0px',
        gap: windowWidth <= 768 ? '40px' : '60px',
        width: '100%',
        maxWidth: '1236px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        {/* Left Content Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '40px',
          width: '100%',
          maxWidth: windowWidth <= 1024 ? '100%' : '594px'
        }}>
          {/* Tag */}
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#979797'
          }}>
            {data.tag}
          </span>

          {/* Heading */}
          <h2 style={{
            width: '100%',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: windowWidth <= 768 ? '32px' : '48px',
            lineHeight: windowWidth <= 768 ? '42px' : '60px',
            color: '#0D98BA',
            margin: 0,
            marginTop: '-20px'
          }}>
            {data.title}
          </h2>

          {/* Description */}
          <p style={{
            width: '100%',
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: windowWidth <= 768 ? '14px' : '16px',
            lineHeight: '150%',
            letterSpacing: '-0.006em',
            color: '#E6E6E6',
            margin: 0,
            marginTop: '-10px'
          }}>
            {data.description}
          </p>

          {/* Details Grid - 2x2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth <= 640 ? '1fr' : 'repeat(2, 1fr)',
            gap: windowWidth <= 640 ? '30px' : '40px',
            width: '100%',
            marginTop: '10px'
          }}>
            {data.details.map((detail, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '15px',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.8s ease-out ${0.2 + index * 0.1}s, transform 0.8s ease-out ${0.2 + index * 0.1}s`
              }}>
                {/* Icon Circle */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(13, 152, 186, 0.2) 0%, rgba(4, 9, 29, 0.8) 100%)',
                  border: '2px solid rgba(13, 152, 186, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0
                }}>
                  {detail.icon}
                </div>

                {/* Text Content */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#979797'
                  }}>
                    {detail.label}
                  </span>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 600,
                    fontSize: windowWidth <= 768 ? '16px' : '18px',
                    lineHeight: '24px',
                    color: '#FFFFFF'
                  }}>
                    {detail.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div style={{
          width: '100%',
          maxWidth: windowWidth <= 1024 ? '100%' : '566px',
          height: windowWidth <= 768 ? '320px' : '400px',
          background: `url(${data.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0px 0px 30px rgba(13, 152, 186, 0.5)',
          borderRadius: '20px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
          flexShrink: 0
        }} />
      </div>
    </div>
  );
};

export default OverviewSection;