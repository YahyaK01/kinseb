import React, { useState, useEffect, useRef } from 'react';

const CaseStudyOutcomes = ({ slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const componentRef = useRef(null);

  // Outcomes data array - each case study has its own outcomes
  const outcomesData = [
    {
      id: 1,
      slug: 'personalization-engine-transforms-user-experience',
      outcomes: [
        {
          number: '+37%',
          heading: 'Conversion Rate',
          description: 'Significant increase in overall conversion through personalized experiences'
        },
        {
          number: '+28%',
          heading: 'Revenue Growth',
          description: 'Direct revenue impact from optimized user journeys and CTAs'
        },
        {
          number: '+45%',
          heading: 'AOV Increase',
          description: 'Average order value boost through strategic upselling tactics'
        },
        {
          number: '2.3x',
          heading: 'ROI Multiple',
          description: 'Return on investment achieved within first quarter of implementation'
        }
      ]
    },
    {
      id: 2,
      slug: 'e-commerce-revenue-uplift-through-testing',
      outcomes: [
        {
          number: '+52%',
          heading: 'Lead Generation',
          description: 'Dramatic increase in qualified leads through funnel optimization'
        },
        {
          number: '+41%',
          heading: 'Engagement Rate',
          description: 'Higher user engagement across all touchpoints and channels'
        },
        {
          number: '+33%',
          heading: 'Time on Site',
          description: 'Extended session duration indicating improved content relevance'
        },
        {
          number: '3.2x',
          heading: 'Click-Through',
          description: 'Multiplied CTR through A/B tested design variations'
        }
      ]
    },
    {
      id: 3,
      slug: 'saas-lead-generation-conversion-breakthrough',
      outcomes: [
        {
          number: '+200%',
          heading: 'Lead Quality',
          description: 'Triple the qualified leads through refined targeting strategies'
        },
        {
          number: '+65%',
          heading: 'Form Completion',
          description: 'Reduced friction leading to higher form submission rates'
        },
        {
          number: '+89%',
          heading: 'Demo Requests',
          description: 'Increased product demo bookings from improved messaging'
        },
        {
          number: '4.1x',
          heading: 'Pipeline Value',
          description: 'Enhanced sales pipeline value through quality lead generation'
        }
      ]
    },
    {
      id: 4,
      slug: 'fashion-retailer-cart-abandonment-solution',
      outcomes: [
        {
          number: '+48%',
          heading: 'Checkout Rate',
          description: 'Streamlined checkout process reducing abandonment friction'
        },
        {
          number: '+35%',
          heading: 'Cart Recovery',
          description: 'Effective recovery campaigns bringing back lost customers'
        },
        {
          number: '+58%',
          heading: 'Repeat Purchase',
          description: 'Customer loyalty increase through optimized post-purchase flow'
        },
        {
          number: '2.8x',
          heading: 'Customer LTV',
          description: 'Lifetime value growth from retention optimization strategies'
        }
      ]
    },
    {
      id: 5,
      slug: 'mobile-app-engagement-revolution',
      outcomes: [
        {
          number: '+120%',
          heading: 'User Retention',
          description: 'Doubled retention through gamification and personalization'
        },
        {
          number: '+78%',
          heading: 'Session Length',
          description: 'Extended app usage time indicating higher engagement'
        },
        {
          number: '+92%',
          heading: 'Feature Adoption',
          description: 'Increased usage of key app features through better onboarding'
        },
        {
          number: '5.2x',
          heading: 'Daily Active Users',
          description: 'Multiplied DAU through improved mobile experience'
        }
      ]
    },
    {
      id: 6,
      slug: 'enterprise-pipeline-growth-strategy',
      outcomes: [
        {
          number: '+156%',
          heading: 'MQL Volume',
          description: 'Marketing qualified leads surge through multi-channel strategy'
        },
        {
          number: '+87%',
          heading: 'SQL Quality',
          description: 'Sales qualified leads improvement via better qualification'
        },
        {
          number: '+43%',
          heading: 'Close Rate',
          description: 'Higher conversion rate from SQL to closed-won deals'
        },
        {
          number: '6.3x',
          heading: 'Pipeline ROI',
          description: 'Return on marketing investment across all channels'
        }
      ]
    }
  ];

  // Find the current case study outcomes by slug
  const currentOutcomes = outcomesData.find(data => data.slug === slug) || outcomesData[0];

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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: windowWidth <= 768 ? '40px 20px' : '60px 20px',
      gap: '10px',
      width: '100%',
      background: '#0a1628',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Main Card Container */}
      <div style={{
        display: 'flex',
        flexDirection: windowWidth <= 1024 ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: windowWidth <= 768 ? '30px 20px' : '40px',
        gap: windowWidth <= 768 ? '40px' : '78px',
        width: '100%',
        maxWidth: '1236px',
        background: '#041629',
        boxShadow: '0px 0px 15px #98BA0D',
        borderRadius: '20px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        {currentOutcomes.outcomes.map((outcome, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '15px',
            margin: '0 auto',
            width: windowWidth <= 768 ? '100%' : '267px',
            maxWidth: '267px',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.8s ease-out ${0.2 + index * 0.15}s, transform 0.8s ease-out ${0.2 + index * 0.15}s`
          }}>
            {/* Number */}
            <div style={{
              width: '100%',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: windowWidth <= 768 ? '40px' : '50px',
              lineHeight: windowWidth <= 768 ? '50px' : '61px',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {outcome.number}
            </div>

            {/* Heading and Description Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              gap: '6px',
              width: '100%'
            }}>
              {/* Heading */}
              <div style={{
                width: '100%',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '150%',
                textAlign: 'center',
                letterSpacing: '-0.006em',
                background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {outcome.heading}
              </div>

              {/* Description */}
              <div style={{
                width: '100%',
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#FFFFFF'
              }}>
                {outcome.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyOutcomes;