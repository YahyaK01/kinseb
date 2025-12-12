// components/CaseStudySections/SolutionSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const SolutionSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Enhanced responsive breakpoints
  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;
  const isSmallDesktop = windowWidth > 768 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const solutionData = {
    'personalization-engine-transforms-user-experience': {
      tag: 'Solution',
      content: `Our solution for AuraBloom Co. centered on implementing a comprehensive personalization engine powered by behavioral data and psychological triggers. We began with a complete homepage redesign that immediately communicated value proposition within 3 seconds, featuring dynamic hero content that adapted based on traffic source, returning visitor status, and browsing behavior.

We restructured the navigation from 40+ cluttered menu items into a streamlined, AI-powered smart menu that learned from user interactions and highlighted the most relevant categories for each visitor segment. Product pages received a complete overhaul with prominent social proof placement, trust badges, detailed size guides with visual aids, and strategic urgency messaging for low-stock items.

The checkout process underwent radical simplification, reducing from 7 steps to a seamless 3-step flow with persistent progress indicators and inline form validation. We implemented guest checkout as the default option, moved shipping cost calculation to the cart page, and integrated one-click payment options including Apple Pay and Google Pay for mobile users.`,
      images: {
        before: '/images/before.png',
        after: '/images/after.png',
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
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
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

  // Responsive values
  const getPadding = () => {
    if (isMobile) return '40px 16px';
    if (isTablet) return '40px 24px';
    return '40px 74px';
  };

  const getTextFontSize = () => {
    if (isMobile) return '14px';
    if (isTablet) return '15px';
    return '16px';
  };

  const getLabelFontSize = () => {
    if (isMobile) return '20px';
    if (isTablet) return '24px';
    return '32px';
  };

  const getLabelTop = () => {
    if (isMobile) return '10px';
    if (isTablet) return '15px';
    return '114px';
  };

  const getAfterLabelTop = () => {
    if (isMobile) return '10px';
    if (isTablet) return '15px';
    return '53px';
  };

  const getArrowTop = () => {
    if (isMobile) return '40px';
    if (isTablet) return '45px';
    return '85px';
  };

  const getArrowWidth = () => {
    if (isMobile) return '100px';
    if (isTablet) return '120px';
    return '179px';
  };

  const getArrowHeight = () => {
    if (isMobile) return '44px';
    if (isTablet) return '53px';
    return '79px';
  };

  const getImageHeight = () => {
    if (isMobile) return '320px';
    if (isTablet) return '400px';
    return '790px';
  };

  const getAfterImageHeight = () => {
    if (isMobile) return '340px';
    if (isTablet) return '420px';
    return '840px';
  };

  const getImageWidth = () => {
    if (isMobile) return '85%';
    if (isTablet) return '90%';
    return '518px';
  };

  const getAfterImageWidth = () => {
    if (isMobile) return '85%';
    if (isTablet) return '90%';
    return '550px';
  };

  const getContainerMarginTop = () => {
    if (isMobile) return '0px';
    if (isTablet) return '50px';
    return '102px';
  };

  const getContainerHeight = () => {
    if (isMobile || isTablet) return 'auto';
    return '524px';
  };

  return (
    <div 
      id="solution-section" 
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: getPadding(),
        gap: '10px',
        width: '100%',
        background: '#0a1628',
        fontFamily: "'Poppins', sans-serif",
        overflow: 'hidden'
      }}
    >
      {/* Main Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px',
        gap: isMobile ? '40px' : '60px',
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
            fontSize: getTextFontSize(),
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
            fontSize: getTextFontSize(),
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
          minHeight: isMobile || isTablet ? 'auto' : '705px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: isMobile || isTablet ? '40px' : '0'
        }}>
          {/* Before Text */}
          <div style={{
            position: 'absolute',
            left: isMobile || isTablet ? '8%' : '25%',
            top: getLabelTop(),
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: getLabelFontSize(),
            lineHeight: '40px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            color: '#595959',
            zIndex: 2,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
          }}>
            Before
          </div>

          {/* After Text */}
          <div style={{
            position: 'absolute',
            right: isMobile || isTablet ? '8%' : '20%',
            top: getAfterLabelTop(),
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: getLabelFontSize(),
            lineHeight: '40px',
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
            After
          </div>

          {/* Decorative Arrow */}
          <svg 
            style={{
              position: 'absolute',
              top: getArrowTop(),
              left: '50%',
              transform: 'translateX(-50%)',
              width: getArrowWidth(),
              height: getArrowHeight(),
              zIndex: 1,
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-out 0.5s'
            }}
            width="179" 
            height="79" 
            viewBox="0 0 179 79" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M98.9309 20.3658C28.692 21.7234 0 50.1008 0 78.5783C0 78.5783 38.3842 50.974 98.9309 49.4721" fill="url(#paint0_linear_2845_1082)"/>
            <path d="M98.9302 49.472V68.8754L174.421 38.6514C175.541 38.1963 176.442 37.6257 177.06 36.9804C177.679 36.335 177.999 35.6307 177.999 34.9177C177.999 34.2046 177.679 33.5003 177.06 32.855C176.442 32.2096 175.541 31.639 174.421 31.1839L98.9302 0.959961V20.3657" fill="url(#paint1_linear_2845_1082)"/>
            <path d="M98.9302 49.4719V68.8753L174.421 38.6514C175.541 38.1963 176.442 37.6257 177.06 36.9804C177.679 36.335 177.999 35.6307 177.999 34.9177C177.999 34.2046 177.679 33.5003 177.06 32.855C176.442 32.2096 175.541 31.639 174.421 31.1839L98.9302 0.959961V20.3657" stroke="url(#paint2_linear_2845_1082)" strokeWidth="1.92" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_2845_1082" x1="10" y1="49.9329" x2="97.8046" y2="22.0045" gradientUnits="userSpaceOnUse">
                <stop stopColor="#595959"/>
                <stop offset="1" stopColor="#3AA1DE"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2845_1082" x1="267.806" y1="-38.8739" x2="89.5977" y2="-15.9163" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#3AA1DE"/>
              </linearGradient>
              <linearGradient id="paint2_linear_2845_1082" x1="267.806" y1="-38.8739" x2="89.5977" y2="-15.9163" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#3AA1DE"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Images Container */}
          <div style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: isMobile || isTablet ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: isMobile || isTablet ? 'center' : 'flex-start',
            padding: isMobile || isTablet ? '80px 0px 0px' : '10px 0px 0px',
            gap: isMobile ? '20px' : isTablet ? '25px' : '0px',
            width: '100%',
            maxWidth: isMobile || isTablet ? '100%' : '1058px',
            height: getContainerHeight(),
            marginTop: getContainerMarginTop()
          }}>
            {/* Before Image */}
            <div style={{
              width: getImageWidth(),
              height: getImageHeight(),
              maxHeight: getImageHeight(),
              margin: isMobile || isTablet ? '0' : '0px -10px',
              zIndex: 1,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s',
              filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.3))'
            }}>
              <img 
                src={data.images.before}
                alt="Before optimization"
                loading="eager"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '10px',
                  imageRendering: 'crisp-edges',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  display: 'block'
                }}
              />
            </div>

            {/* After Image */}
            <div style={{
              width: getAfterImageWidth(),
              height: getAfterImageHeight(),
              maxHeight: getAfterImageHeight(),
              zIndex: 2,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.8s ease-out 0.7s, transform 0.8s ease-out 0.7s',
              filter: 'drop-shadow(0px 8px 24px rgba(13, 152, 186, 0.4))'
            }}>
              <img 
                src={data.images.after}
                alt="After optimization"
                loading="eager"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '10px',
                  imageRendering: 'crisp-edges',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  display: 'block'
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