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

The checkout process underwent radical simplification, reducing from 7 steps to a seamless 3-step flow with persistent progress indicators and inline form validation. We implemented guest checkout as the default option, moved shipping cost calculation to the cart page, and integrated one-click payment options including Apple Pay and Google Pay for mobile users.

To address psychological barriers, we added comprehensive trust signals throughout the journey—verified customer reviews with photos, clear return policy messaging at key decision points, live chat support visibility, and security badges prominently displayed. We created a robust FAQ system that anticipated common objections and provided immediate answers without leaving the page.

Mobile optimization became a priority, with a mobile-first redesign that ensured fast image loading through lazy loading and WebP formats, touch-optimized form fields with smart keyboards, and a streamlined mobile checkout that could be completed in under 60 seconds. We implemented progressive web app features for app-like performance without download friction.

Beyond tactical changes, we established an experimentation culture with a structured A/B testing framework, prioritized based on potential impact and implementation complexity. We set up comprehensive analytics tracking for micro-conversions throughout the funnel, created custom dashboards for real-time performance monitoring, and implemented heat mapping and session recording for continuous optimization insights.`,
      images: [
        { src: 'images/solution-1-1.jpg', alt: 'Personalized homepage design', type: 'large' },
        { src: 'images/solution-1-2.jpg', alt: 'Simplified checkout flow', type: 'small' },
        { src: 'images/solution-1-3.jpg', alt: 'Mobile-first design', type: 'small' }
      ]
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Solution',
      content: `For UrbanCart, we implemented a systematic testing framework that would scale conversion optimization across all product categories while maintaining brand consistency. Our solution began with establishing a robust experimentation infrastructure using a dedicated A/B testing platform integrated with their analytics stack.

We redesigned the homepage with dynamic personalization that served different experiences based on traffic source, device type, and returning visitor status. First-time visitors received educational content explaining the brand story and unique value, while returning customers saw personalized product recommendations based on browsing history and similar customer purchases.

The product discovery experience underwent complete transformation. We implemented an AI-powered search that learned from user behavior, understanding synonyms and intent rather than just exact keyword matches. Category pages received dynamic sorting based on popularity, reviews, and individual user preferences, with infinite scroll replacing traditional pagination for seamless browsing.

Product detail pages were optimized with high-converting elements: prominent customer reviews with photos, detailed size guides, comprehensive product specifications in scannable format, and strategic trust signals. We added urgency elements like low-stock notifications and time-limited promotions, tested extensively to ensure they drove conversion without eroding trust.

The checkout experience became frictionless with the addition of express checkout options, dynamic payment method display based on cart value and location, smart form fields that auto-completed addresses, and progress bars showing clear steps to completion. We implemented cart abandonment prevention tactics including exit-intent popups offering help or incentives.

We established a structured testing methodology with clear hypothesis formation, statistical rigor in experiment design, and cross-functional reviews of results. We created a centralized testing roadmap prioritized by expected impact, resource requirements, and strategic alignment, ensuring every test built on previous learnings rather than random optimization attempts.`,
      images: [
        { src: 'images/solution-2-1.jpg', alt: 'A/B testing framework', type: 'large' },
        { src: 'images/solution-2-2.jpg', alt: 'Personalized recommendations', type: 'small' },
        { src: 'images/solution-2-3.jpg', alt: 'Optimized product pages', type: 'small' }
      ]
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Solution',
      content: `Our solution for TechFlow SaaS transformed their landing page from a feature-focused brochure into a conversion-optimized lead generation machine. We started with complete message architecture, replacing jargon-heavy headlines with benefit-driven copy that spoke directly to the pain points of marketing operations managers.

The hero section received a comprehensive redesign with a clear, compelling headline that communicated the core value proposition in plain language, a sub-headline that elaborated on specific benefits and outcomes, and a prominent CTA button with action-oriented copy that set clear expectations. We replaced generic stock photos with authentic product screenshots showing the actual interface and key workflows.

We restructured the content flow into a persuasive narrative arc that took visitors on a journey from problem recognition through solution understanding to action. Each section built on the previous one, addressing objections as they naturally arose in the decision-making process. We implemented strategic social proof placement with specific, results-focused testimonials featuring real customer names, titles, and photos.

Form optimization was critical—we reduced fields from 12 to just 3 essential items for the initial submission: name, email, and company. We implemented progressive profiling that gathered additional information through subsequent interactions, making the initial commitment as low-friction as possible. The form design included clear value propositions above the submit button, privacy reassurance messaging, and validation that caught errors in real-time.

Trust building became systematic throughout the page. We added prominent customer logo bars showing recognizable brands, detailed case studies with measurable outcomes and specific use cases, security certifications and compliance badges, integration showcases with popular marketing tools, and transparent pricing information to eliminate uncertainty.

Mobile optimization received special attention given the target audience's on-the-go research habits. We implemented a mobile-first design with thumb-friendly navigation, tap-optimized forms with appropriate keyboard types, strategic content condensation that prioritized key messages, and fast loading through image optimization and code minification.`,
      images: [
        { src: 'images/solution-3-1.jpg', alt: 'Optimized landing page', type: 'large' },
        { src: 'images/solution-3-2.jpg', alt: 'Form optimization', type: 'small' },
        { src: 'images/solution-3-3.jpg', alt: 'Trust signals implementation', type: 'small' }
      ]
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Solution',
      content: `For FashionHub, we implemented a comprehensive cart recovery and checkout optimization strategy that addressed both technical friction and psychological barriers. Our solution transformed the path to purchase from a obstacle course into a seamless, trust-building experience.

The cart experience received immediate enhancements with prominent visual confirmation when items were added, an enhanced mini-cart showing full product details including size, color, and availability, save-for-later functionality that created wishlists automatically, and early shipping cost visibility with a calculator requiring just a zip code.

We revolutionized checkout with a guest checkout default that collected only essential information upfront, progressive disclosure that revealed form fields only when needed, smart field validation that caught errors immediately, and address autocomplete that reduced typing to a minimum. The entire flow condensed from 7 pages to a single-page checkout with collapsible sections.

Payment flexibility became a major differentiator. We integrated PayPal, Apple Pay, Google Pay, and Shop Pay for one-click purchasing, added buy-now-pay-later options from Affirm and Klarna, implemented saved payment methods for returning customers, and displayed all payment options upfront rather than hiding them until the final step.

Trust and security concerns were systematically addressed with prominent SSL badges and security messaging, clear return policy information at each step, visible customer service contact options, product authenticity guarantees, and progress saving that allowed customers to complete purchase later without losing their cart.

Mobile checkout underwent complete reconstruction with thumb-optimized button placement, mobile-specific form fields that triggered appropriate keyboards, reduced information density that eliminated scrolling, and persistent cart totals that remained visible throughout the flow.

We implemented a sophisticated cart abandonment recovery system with a three-email sequence triggered at strategic intervals, personalized product recommendations in recovery emails, dynamic discount offers based on cart value and customer segment, and SMS reminders for high-value abandoned carts with customer opt-in.`,
      images: [
        { src: 'images/solution-4-1.jpg', alt: 'Simplified checkout flow', type: 'large' },
        { src: 'images/solution-4-2.jpg', alt: 'Payment options', type: 'small' },
        { src: 'images/solution-4-3.jpg', alt: 'Cart recovery system', type: 'small' }
      ]
    },
    'mobile-app-engagement-revolution': {
      tag: 'Solution',
      content: `Our solution for FitLife App focused on creating habit-forming experiences through progressive engagement, personalization, and strategic gamification. We completely reimagined the user journey from first launch to long-term retention.

Onboarding received a radical overhaul, reducing from 9 screens to a 2-minute contextual introduction that showed features during actual use rather than upfront tutorials. We implemented smart defaults based on user goals, allowing immediate engagement with core features, and created an interactive first workout that demonstrated value within 5 minutes of download.

Goal setting became adaptive and realistic. Instead of asking for ambitious long-term commitments, we introduced a progressive challenge system that started with micro-goals achievable in the first week, gradually increased difficulty based on actual completion rates, celebrated small wins with immediate positive feedback, and adapted to individual ability levels through machine learning.

Feature discovery happened naturally through contextual tooltips, personalized feature recommendations based on usage patterns, strategic in-app messaging that highlighted unused features at optimal moments, and a progressive unlock system that revealed advanced features as users demonstrated engagement with core functionality.

Engagement mechanics became sophisticated and personalized. We implemented smart push notifications triggered by behavior rather than schedules, streak tracking with recovery options that didn't punish occasional lapses, achievement systems tied to meaningful health outcomes, and social features that connected users with similar goals and fitness levels rather than creating intimidating competition.

Content experience improved dramatically with workout variety across difficulty levels and preferences, nutrition tracking enhanced with barcode scanning and photo recognition, progress tracking that told compelling stories of improvement, and AI-powered workout recommendations that adapted to user feedback and performance data.

Personalization became comprehensive with dynamic homepages that adapted to individual goals and preferences, content recommendations based on engagement patterns and stated interests, adaptive difficulty in workouts based on performance, and personalized coaching messages that encouraged and motivated appropriately.`,
      images: [
        { src: 'images/solution-5-1.jpg', alt: 'Redesigned onboarding', type: 'large' },
        { src: 'images/solution-5-2.jpg', alt: 'Gamification features', type: 'small' },
        { src: 'images/solution-5-3.jpg', alt: 'Personalized content', type: 'small' }
      ]
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Solution',
      content: `For DataCore, we implemented an end-to-end pipeline optimization strategy that aligned marketing and sales, improved lead quality, shortened sales cycles, and increased close rates through systematic process improvements and enabling technology.

Content strategy became buyer journey-centric with early-stage content addressing business problems and industry trends, mid-stage content demonstrating differentiation and unique approaches, late-stage content providing ROI calculators, case studies, and proof points, and executive briefings tailored for C-suite stakeholders reviewing purchasing decisions.

Lead nurturing transformed from basic email sequences to sophisticated, behavior-triggered campaigns that adapted based on engagement signals, industry-specific content tracks that spoke to unique challenges, progressive profiling that gathered information gradually, and automated hand-off to sales when engagement reached predetermined thresholds.

We implemented a formalized lead scoring system that combined explicit criteria like company size, budget authority, and decision timeline with implicit signals such as website behavior, content engagement, and email interactions. The scoring model was continuously refined based on closed-won analysis, ensuring it predicted actual purchase likelihood.

Sales process optimization began with structured discovery frameworks that qualified both parties' fit before investing time, industry-specific demo playbooks that showcased relevant use cases, proof of value delivered early through ROI calculators and case studies, and multi-stakeholder engagement strategies that armed champions with materials to sell internally.

We established a systematic testing and optimization culture with weekly deal reviews analyzing wins and losses, documented best practices from top performers, regular refinement of messaging and positioning, and cross-functional collaboration between marketing and sales on lead quality and conversion.

Technology integration tied everything together with Salesforce enhancements that provided complete customer journey visibility, marketing automation platform optimization that enabled sophisticated nurturing, conversation intelligence tools that captured what worked in sales calls, and attribution reporting that showed which activities actually influenced deals.`,
      images: [
        { src: 'images/solution-6-1.jpg', alt: 'Lead nurturing system', type: 'large' },
        { src: 'images/solution-6-2.jpg', alt: 'Sales enablement tools', type: 'small' },
        { src: 'images/solution-6-3.jpg', alt: 'Attribution dashboard', type: 'small' }
      ]
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

export default SolutionSection;