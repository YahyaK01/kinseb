// components/CaseStudySections/ChallengeSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const ChallengeSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const challengeData = {
    'personalization-engine-transforms-user-experience': {
      tag: 'Challenge',
      content: `AuraBloom Co. came to us with a critical challenge: despite strong brand awareness and consistent traffic growth, their conversion rate had plateaued at just 2.1%—well below the industry benchmark of 3.5-4% for e-commerce. 

Through our initial discovery phase, we identified several key friction points throughout their customer journey. The homepage failed to communicate the brand's unique value proposition within the crucial first 3 seconds of landing. Navigation was cluttered with over 40 menu items, causing decision paralysis. Product pages lacked social proof and trust signals, leading to high bounce rates at critical decision points.

The checkout process revealed even deeper issues. Cart abandonment sat at 73%, driven by unexpected shipping costs appearing only at the final step, a mandatory account creation requirement, and a 7-step checkout flow that felt endless to mobile users. Form fields weren't optimized for mobile input, causing frustration and abandonment.

Beyond the technical friction, we uncovered psychological barriers through user interviews and session recordings. First-time visitors expressed uncertainty about product quality and authenticity. There was confusion about sizing and fit, with many users abandoning carts to "research more." The lack of clear return policies and shipping information created anxiety at key decision moments.`,
      images: [
        { src: 'images/challenge-1-1.jpg', alt: 'User journey mapping', type: 'large' },
        { src: 'images/challenge-1-2.jpg', alt: 'Analytics dashboard', type: 'small' },
        { src: 'images/challenge-1-3.jpg', alt: 'Cart abandonment data', type: 'small' }
      ]
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Challenge',
      content: `UrbanCart faced a sophisticated challenge that many rapidly growing e-commerce brands encounter: how to scale conversion rate optimization across multiple product categories while maintaining brand consistency and user experience quality.

Despite investing heavily in traffic acquisition through paid channels and content marketing, their conversion rate had stalled at 3.2%. More concerning was the significant variance across product categories—some converting at 5% while others languished below 2%. This inconsistency signaled deeper systemic issues in their approach to merchandising and user experience.

The primary challenge manifested in several critical areas. Their homepage served as a catch-all landing page without clear customer segmentation or personalization. New visitors received the same experience as returning customers, and different audience segments with distinct needs and preferences were treated identically.`,
      images: [
        { src: 'images/challenge-2-1.jpg', alt: 'Product page analysis', type: 'large' },
        { src: 'images/challenge-2-2.jpg', alt: 'Testing framework', type: 'small' },
        { src: 'images/challenge-2-3.jpg', alt: 'Category performance', type: 'small' }
      ]
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Challenge',
      content: `TechFlow SaaS approached us with a challenge familiar to many B2B software companies: their landing page attracted significant traffic from paid campaigns and organic search, but conversion rates for demo requests and free trial signups remained stubbornly low at 1.8%.

The core issue wasn't traffic quality—analytics showed visitors matching their ideal customer profile were landing on the page. Instead, the problem lay in how the landing page communicated value, built trust, and motivated action. Our initial audit revealed a disconnect between what the company thought was important and what potential customers actually needed to see.`,
      images: [
        { src: 'images/challenge-3-1.jpg', alt: 'Landing page heatmap', type: 'large' },
        { src: 'images/challenge-3-2.jpg', alt: 'Form friction points', type: 'small' },
        { src: 'images/challenge-3-3.jpg', alt: 'Trust signals audit', type: 'small' }
      ]
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Challenge',
      content: `FashionHub came to us with a painful problem that was directly impacting their bottom line: 72% of customers who added items to their cart never completed the purchase. With average order values around $150, this represented millions in lost annual revenue.

Initial analysis revealed this wasn't a simple checkout problem—it was a systemic issue spanning the entire path to purchase. The challenge required understanding both the technical friction points and the psychological barriers preventing conversion at each step of the journey.`,
      images: [
        { src: 'images/challenge-4-1.jpg', alt: 'Cart abandonment funnel', type: 'large' },
        { src: 'images/challenge-4-2.jpg', alt: 'Checkout flow issues', type: 'small' },
        { src: 'images/challenge-4-3.jpg', alt: 'Payment friction', type: 'small' }
      ]
    },
    'mobile-app-engagement-revolution': {
      tag: 'Challenge',
      content: `FitLife App faced a challenge that plagues many mobile applications: strong initial download numbers but catastrophically poor retention. After an impressive launch garnering 250,000 downloads in the first quarter, the data told a troubling story—only 18% of users remained active after 30 days, and just 8% were still engaged at the 90-day mark.

The onboarding experience immediately revealed critical issues. New users were greeted with a 9-screen tutorial explaining every feature before being allowed to use the app. This exhaustive introduction overwhelmed rather than engaged, with analytics showing 35% of users abandoning during onboarding itself.`,
      images: [
        { src: 'images/challenge-5-1.jpg', alt: 'Retention curve', type: 'large' },
        { src: 'images/challenge-5-2.jpg', alt: 'Onboarding drop-off', type: 'small' },
        { src: 'images/challenge-5-3.jpg', alt: 'Feature usage data', type: 'small' }
      ]
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Challenge',
      content: `DataCore approached us with a sophisticated challenge typical of enterprise B2B companies: despite generating substantial inbound interest and maintaining a healthy marketing qualified lead (MQL) volume, conversion rates from MQL to sales qualified lead (SQL) remained disappointingly low at 4.2%, with an even more concerning drop-off in the progression to closed-won deals.

The sales cycle was lengthy—averaging 180 days from first touch to close—and lacked visibility into what activities actually moved deals forward. Marketing couldn't demonstrate clear ROI on campaigns. Sales blamed lead quality while marketing insisted the problem was follow-up.`,
      images: [
        { src: 'images/challenge-6-1.jpg', alt: 'Pipeline conversion data', type: 'large' },
        { src: 'images/challenge-6-2.jpg', alt: 'Sales cycle analysis', type: 'small' },
        { src: 'images/challenge-6-3.jpg', alt: 'Lead quality metrics', type: 'small' }
      ]
    }
  };

  const data = challengeData[slug] || challengeData['personalization-engine-transforms-user-experience'];

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
      id="challenge-section" 
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

        {/* Image Grid Section - 1 Large Left, 2 Small Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: windowWidth <= 768 ? '1fr' : '1.2fr 0.8fr',
          gridTemplateRows: windowWidth <= 768 ? 'auto' : 'repeat(2, 1fr)',
          gap: windowWidth <= 768 ? '20px' : '30px',
          width: '100%',
          height: windowWidth <= 768 ? 'auto' : '500px'
        }}>
          {/* Large Image - Left Side */}
          <div style={{
            gridRow: windowWidth <= 768 ? 'auto' : 'span 2',
            width: '100%',
            height: windowWidth <= 768 ? '300px' : '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0px 0px 15px rgba(4, 9, 29, 0.5)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0px 0px 25px rgba(13, 152, 186, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0px 0px 15px rgba(4, 9, 29, 0.5)';
          }}
          >
            <img 
              src={data.images[0].src} 
              alt={data.images[0].alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Small Image 1 - Top Right */}
          <div style={{
            width: '100%',
            height: windowWidth <= 768 ? '250px' : '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0px 0px 15px rgba(4, 9, 29, 0.5)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0px 0px 25px rgba(13, 152, 186, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0px 0px 15px rgba(4, 9, 29, 0.5)';
          }}
          >
            <img 
              src={data.images[1].src} 
              alt={data.images[1].alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Small Image 2 - Bottom Right */}
          <div style={{
            width: '100%',
            height: windowWidth <= 768 ? '250px' : '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0px 0px 15px rgba(4, 9, 29, 0.5)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0px 0px 25px rgba(13, 152, 186, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0px 0px 15px rgba(4, 9, 29, 0.5)';
          }}
          >
            <img 
              src={data.images[2].src} 
              alt={data.images[2].alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;