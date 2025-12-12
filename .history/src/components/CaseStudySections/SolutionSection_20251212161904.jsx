// components/CaseStudySections/SolutionSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const SolutionSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const solutionData = {
    'personalization-engine-transforms-user-experience': {
      tag: 'Solution',
      content: `Our solution for AuraBloom Co. centered on implementing a comprehensive personalization engine powered by behavioral data and psychological triggers. We began with a complete homepage redesign that immediately communicated value proposition within 3 seconds, featuring dynamic hero content that adapted based on traffic source, returning visitor status, and browsing behavior.

We restructured the navigation from 40+ cluttered menu items into a streamlined, AI-powered smart menu that learned from user interactions and highlighted the most relevant categories for each visitor segment. Product pages received a complete overhaul with prominent social proof placement, trust badges, detailed size guides with visual aids, and strategic urgency messaging for low-stock items.

The checkout process underwent radical simplification, reducing from 7 steps to a seamless 3-step flow with persistent progress indicators and inline form validation. We implemented guest checkout as the default option, moved shipping cost calculation to the cart page, and integrated one-click payment options including Apple Pay and Google Pay for mobile users.`,
      images: {
        before: '/images/before.png',
        after: '/images/after.png'
      }
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Solution',
      content: `For UrbanCart, we implemented a systematic testing framework that would scale conversion optimization across all product categories while maintaining brand consistency. Our solution began with establishing a robust experimentation infrastructure using a dedicated A/B testing platform integrated with their analytics stack.

We redesigned the homepage with dynamic personalization that served different experiences based on traffic source, device type, and returning visitor status. First-time visitors received educational content explaining the brand story and unique value, while returning customers saw personalized product recommendations based on browsing history and similar customer purchases.`,
      images: {
        before: 'images/solution-2-before.jpg',
        after: 'images/solution-2-after.jpg'
      }
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Solution',
      content: `Our solution for TechFlow SaaS transformed their landing page from a feature-focused brochure into a conversion-optimized lead generation machine. We started with complete message architecture, replacing jargon-heavy headlines with benefit-driven copy that spoke directly to the pain points of marketing operations managers.

The hero section received a comprehensive redesign with a clear, compelling headline that communicated the core value proposition in plain language, a sub-headline that elaborated on specific benefits and outcomes, and a prominent CTA button with action-oriented copy that set clear expectations.`,
      images: {
        before: 'images/solution-3-before.jpg',
        after: 'images/solution-3-after.jpg'
      }
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Solution',
      content: `For FashionHub, we implemented a comprehensive cart recovery and checkout optimization strategy that addressed both technical friction and psychological barriers. Our solution transformed the path to purchase from a obstacle course into a seamless, trust-building experience.

The cart experience received immediate enhancements with prominent visual confirmation when items were added, an enhanced mini-cart showing full product details including size, color, and availability, save-for-later functionality that created wishlists automatically, and early shipping cost visibility with a calculator requiring just a zip code.`,
      images: {
        before: 'images/solution-4-before.jpg',
        after: 'images/solution-4-after.jpg'
      }
    },
    'mobile-app-engagement-revolution': {
      tag: 'Solution',
      content: `Our solution for FitLife App focused on creating habit-forming experiences through progressive engagement, personalization, and strategic gamification. We completely reimagined the user journey from first launch to long-term retention.

Onboarding received a radical overhaul, reducing from 9 screens to a 2-minute contextual introduction that showed features during actual use rather than upfront tutorials. We implemented smart defaults based on user goals, allowing immediate engagement with core features, and created an interactive first workout that demonstrated value within 5 minutes of download.`,
      images: {
        before: 'images/solution-5-before.jpg',
        after: 'images/solution-5-after.jpg'
      }
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Solution',
      content: `For DataCore, we implemented an end-to-end pipeline optimization strategy that aligned marketing and sales, improved lead quality, shortened sales cycles, and increased close rates through systematic process improvements and enabling technology.

Content strategy became buyer journey-centric with early-stage content addressing business problems and industry trends, mid-stage content demonstrating differentiation and unique approaches, late-stage content providing ROI calculators, case studies, and proof points, and executive briefings tailored for C-suite stakeholders reviewing purchasing decisions.`,
      images: {
        before: 'images/solution-6-before.jpg',
        after: 'images/solution-6-after.jpg'
      }
    }
  };

  const data = solutionData[slug] || solutionData['personalization-engine-transforms-user-experience'];

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
      id="solution-section" 
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: windowWidth <= 768 ? '40px 20px' : '40px 74px',
        gap: '10px',
        width: '100%',
        background: '#0a1628',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Main Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px',
        gap: '60px',
        width: '100%',
        maxWidth: '1236px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        {/* Text Content Section */}
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

          {/* Content Paragraph */}
          <div style={{
            width: '100%',
            fontFamily: "'Lato', sans-serif",
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '150%',
            letterSpacing: '-0.006em',
            color: '#E6E6E6',
            whiteSpace: 'pre-line'
          }}>
            {data.content}
          </div>
        </div>

        {/* Before/After Image Comparison Section */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: windowWidth <= 768 ? 'auto' : '705px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Number 01 - Before */}
          <div style={{
            position: 'absolute',
            left: windowWidth <= 768 ? '10%' : '25%',
            top: windowWidth <= 768 ? '20px' : '114px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: windowWidth <= 768 ? '36px' : '50px',
            lineHeight: windowWidth <= 768 ? '45px' : '61px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            color: '#595959',
            zIndex: 2,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
          }}>
            01
          </div>

          {/* Number 02 - After */}
          <div style={{
            position: 'absolute',
            right: windowWidth <= 768 ? '10%' : '20%',
            top: windowWidth <= 768 ? '20px' : '53px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: windowWidth <= 768 ? '36px' : '50px',
            lineHeight: windowWidth <= 768 ? '45px' : '61px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            zIndex: 3,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}>
            02
          </div>

          {/* Decorative Arrow/Line */}
          <svg 
            style={{
              position: 'absolute',
              top: windowWidth <= 768 ? '40px' : '80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: windowWidth <= 768 ? '120px' : '177px',
              height: windowWidth <= 768 ? '60px' : '78px',
              zIndex: 1,
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-out 0.5s'
            }}
            viewBox="0 0 177 78"
            fill="none"
          >
            {/* Left line */}
            <path
              d="M0 40 L60 40"
              stroke="url(#gradient1)"
              strokeWidth="3"
            />
            {/* Right line */}
            <path
              d="M117 20 L177 20"
              stroke="url(#gradient2)"
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="16.27%" stopColor="#595959" />
                <stop offset="98.6%" stopColor="#3AA1DE" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#3AA1DE" />
              </linearGradient>
            </defs>
          </svg>

          {/* Images Container */}
          <div style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: windowWidth <= 768 ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: windowWidth <= 768 ? 'center' : 'flex-start',
            padding: windowWidth <= 768 ? '80px 0px 0px' : '10px 0px 0px',
            gap: windowWidth <= 768 ? '30px' : '0px',
            width: '100%',
            maxWidth: windowWidth <= 768 ? '100%' : '1058px',
            height: windowWidth <= 768 ? 'auto' : '524px',
            marginTop: windowWidth <= 768 ? '0px' : '102px'
          }}>
            {/* Before Image */}
            <div style={{
              width: windowWidth <= 768 ? '90%' : '518px',
              height: windowWidth <= 768 ? '450px' : '790px',
              maxHeight: windowWidth <= 768 ? '450px' : '790px',
              filter: 'drop-shadow(-4px 4px 4px #7D7D7D)',
              margin: windowWidth <= 768 ? '0' : '0px -10px',
              zIndex: 1,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
            }}>
              <img 
                src={data.images.before}
                alt="Before optimization"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </div>

            {/* After Image */}
            <div style={{
              width: windowWidth <= 768 ? '90%' : '550px',
              height: windowWidth <= 768 ? '450px' : '840px',
              maxHeight: windowWidth <= 768 ? '450px' : '840px',
              filter: 'drop-shadow(-52px 69px 112px rgba(0, 0, 0, 0.7)) drop-shadow(4px 4px 4px #0D98BA)',
              zIndex: 2,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.8s ease-out 0.7s, transform 0.8s ease-out 0.7s'
            }}>
              <img 
                src={data.images.after}
                alt="After optimization"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;