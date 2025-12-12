// components/CaseStudySections/OverviewSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const OverviewSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const overviewData = {
    'personalization-engine-transforms-user-experience': {
      tag: 'Overview',
      title: 'Transforming Digital Experiences Through Personalization',
      description: 'This comprehensive CRO project focused on implementing personalized user experiences across all touchpoints. Through advanced segmentation and behavioral targeting, we transformed the customer journey and significantly improved conversion metrics. Our data-driven approach combined behavioral psychology with cutting-edge technology.',
      image: 'images/overview-1.jpg',
      stats: [
        {
          icon: 'images/icon-users.png',
          label: 'Target Audience',
          value: 'E-Commerce Shoppers'
        },
        {
          icon: 'images/icon-calendar.png',
          label: 'Duration',
          value: '3 Months'
        },
        {
          icon: 'images/icon-chart.png',
          label: 'Industry',
          value: 'Retail & E-Commerce'
        },
        {
          icon: 'images/icon-trophy.png',
          label: 'Outcome',
          value: 'Revenue Growth'
        }
      ]
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Overview',
      title: 'E-Commerce Testing & Optimization Strategy',
      description: 'Strategic A/B testing initiative that revolutionized the e-commerce experience. Through systematic experimentation and data analysis, we identified key friction points and optimized the entire customer journey to maximize revenue and customer satisfaction.',
      image: 'images/overview-2.jpg',
      stats: [
        {
          icon: 'images/icon-users.png',
          label: 'Target Audience',
          value: 'Online Shoppers'
        },
        {
          icon: 'images/icon-calendar.png',
          label: 'Duration',
          value: '4 Months'
        },
        {
          icon: 'images/icon-chart.png',
          label: 'Industry',
          value: 'E-Commerce'
        },
        {
          icon: 'images/icon-trophy.png',
          label: 'Outcome',
          value: 'Conversion Uplift'
        }
      ]
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Overview',
      title: 'SaaS Landing Page Conversion Optimization',
      description: 'Landing page redesign project that leveraged behavioral psychology and UX best practices to triple qualified leads. Focus on reducing friction and building trust throughout the conversion funnel with data-backed design decisions.',
      image: 'images/overview-3.jpg',
      stats: [
        {
          icon: 'images/icon-users.png',
          label: 'Target Audience',
          value: 'B2B Decision Makers'
        },
        {
          icon: 'images/icon-calendar.png',
          label: 'Duration',
          value: '2 Months'
        },
        {
          icon: 'images/icon-chart.png',
          label: 'Industry',
          value: 'SaaS Technology'
        },
        {
          icon: 'images/icon-trophy.png',
          label: 'Outcome',
          value: 'Lead Generation'
        }
      ]
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Overview',
      title: 'Cart Abandonment Reduction Strategy',
      description: 'Comprehensive cart abandonment reduction strategy that addressed both technical and psychological barriers. Implementation of trust-building elements and friction elimination across the checkout process to recover lost revenue.',
      image: 'images/overview-4.jpg',
      stats: [
        {
          icon: 'images/icon-users.png',
          label: 'Target Audience',
          value: 'Fashion Consumers'
        },
        {
          icon: 'images/icon-calendar.png',
          label: 'Duration',
          value: '3 Months'
        },
        {
          icon: 'images/icon-chart.png',
          label: 'Industry',
          value: 'Fashion Retail'
        },
        {
          icon: 'images/icon-trophy.png',
          label: 'Outcome',
          value: 'Cart Recovery'
        }
      ]
    },
    'mobile-app-engagement-revolution': {
      tag: 'Overview',
      title: 'Mobile App Engagement Transformation',
      description: 'Mobile-first optimization project that transformed user engagement through gamification and personalization. Focus on creating habit-forming experiences that increased retention and session length with innovative UX patterns.',
      image: 'images/overview-5.jpg',
      stats: [
        {
          icon: 'images/icon-users.png',
          label: 'Target Audience',
          value: 'Mobile App Users'
        },
        {
          icon: 'images/icon-calendar.png',
          label: 'Duration',
          value: '4 Months'
        },
        {
          icon: 'images/icon-chart.png',
          label: 'Industry',
          value: 'Health & Fitness'
        },
        {
          icon: 'images/icon-trophy.png',
          label: 'Outcome',
          value: 'User Retention'
        }
      ]
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Overview',
      title: 'Enterprise B2B Pipeline Growth',
      description: 'B2B lead generation and nurture optimization that transformed the sales pipeline. Multi-touch attribution implementation and content strategy development for enterprise buyers with complex decision-making processes.',
      image: 'images/overview-6.jpg',
      stats: [
        {
          icon: 'images/icon-users.png',
          label: 'Target Audience',
          value: 'Enterprise Buyers'
        },
        {
          icon: 'images/icon-calendar.png',
          label: 'Duration',
          value: '6 Months'
        },
        {
          icon: 'images/icon-chart.png',
          label: 'Industry',
          value: 'B2B Technology'
        },
        {
          icon: 'images/icon-trophy.png',
          label: 'Outcome',
          value: 'Pipeline Growth'
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
        minHeight: windowWidth <= 768 ? 'auto' : '542px',
        background: '#0a1628',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Main Container */}
      <div style={{
        display: 'flex',
        flexDirection: windowWidth <= 1024 ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '44px',
          margin: '0 auto',
          width: '100%',
          maxWidth: windowWidth <= 1024 ? '100%' : '594px'
        }}>
          {/* Text Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '20px',
            width: '100%'
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
              fontSize: windowWidth <= 768 ? '28px' : '40px',
              lineHeight: windowWidth <= 768 ? '42px' : '60px',
              textTransform: 'capitalize',
              color: '#0D98BA',
              margin: 0
            }}>
              {data.title}
            </h2>

            {/* Paragraph */}
            <p style={{
              width: '100%',
              fontFamily: "'Lato', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '150%',
              letterSpacing: '-0.006em',
              color: '#E6E6E6',
              margin: 0
            }}>
              {data.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '0px',
            gap: windowWidth <= 640 ? '30px' : '50px',
            width: '100%',
            flexWrap: 'wrap'
          }}>
            {/* Column 1 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '30px',
              width: windowWidth <= 640 ? '100%' : 'calc(50% - 25px)',
              minWidth: '200px'
            }}>
              {/* Stat Item 1 */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '10px',
                width: '100%',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
              }}>
                {/* Icon Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '10px',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(180deg, #0D98BA -269%, #04091D 103.97%)',
                  boxShadow: '0px 0px 15px #04091D',
                  borderRadius: '100px',
                  flexShrink: 0
                }}>
                  {/* Icon Placeholder */}
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: `url(${data.stats[0].icon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                </div>

                {/* Text Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  flex: 1
                }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '22px',
                    letterSpacing: '0.02em',
                    color: '#979797'
                  }}>
                    {data.stats[0].label}
                  </span>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '22px',
                    color: '#FFFFFF'
                  }}>
                    {data.stats[0].value}
                  </span>
                </div>
              </div>

              {/* Stat Item 2 */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '10px',
                width: '100%',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
              }}>
                {/* Icon Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '10px',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(180deg, #0D98BA -269%, #04091D 103.97%)',
                  boxShadow: '0px 0px 15px #04091D',
                  borderRadius: '100px',
                  flexShrink: 0
                }}>
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: `url(${data.stats[1].icon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                </div>

                {/* Text Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  flex: 1
                }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '22px',
                    letterSpacing: '0.02em',
                    color: '#979797'
                  }}>
                    {data.stats[1].label}
                  </span>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '22px',
                    color: '#FFFFFF'
                  }}>
                    {data.stats[1].value}
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '30px',
              width: windowWidth <= 640 ? '100%' : 'calc(50% - 25px)',
              minWidth: '200px'
            }}>
              {/* Stat Item 3 */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '10px',
                width: '100%',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
              }}>
                {/* Icon Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '10px',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(180deg, #0D98BA -269%, #04091D 103.97%)',
                  boxShadow: '0px 0px 15px #04091D',
                  borderRadius: '100px',
                  flexShrink: 0
                }}>
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: `url(${data.stats[2].icon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                </div>

                {/* Text Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  flex: 1
                }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '22px',
                    letterSpacing: '0.02em',
                    color: '#979797'
                  }}>
                    {data.stats[2].label}
                  </span>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '22px',
                    color: '#FFFFFF'
                  }}>
                    {data.stats[2].value}
                  </span>
                </div>
              </div>

              {/* Stat Item 4 */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '10px',
                width: '100%',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s'
              }}>
                {/* Icon Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '10px',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(180deg, #0D98BA -269%, #04091D 103.97%)',
                  boxShadow: '0px 0px 15px #04091D',
                  borderRadius: '100px',
                  flexShrink: 0
                }}>
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: `url(${data.stats[3].icon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                </div>

                {/* Text Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  flex: 1
                }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '22px',
                    letterSpacing: '0.02em',
                    color: '#979797'
                  }}>
                    {data.stats[3].label}
                  </span>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '22px',
                    color: '#FFFFFF'
                  }}>
                    {data.stats[3].value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div style={{
          margin: '0 auto',
          width: '100%',
          maxWidth: windowWidth <= 1024 ? '100%' : '566px',
          height: windowWidth <= 768 ? '300px' : '372px',
          background: `url(${data.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
          borderRadius: '20px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
        }} />
      </div>
    </div>
  );
};

export default OverviewSection;