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

Beyond the technical friction, we uncovered psychological barriers through user interviews and session recordings. First-time visitors expressed uncertainty about product quality and authenticity. There was confusion about sizing and fit, with many users abandoning carts to "research more." The lack of clear return policies and shipping information created anxiety at key decision moments.

Mobile experience was particularly problematic, accounting for 67% of traffic but only 31% of conversions. The responsive design broke on certain devices, images loaded slowly, and the checkout process was nearly impossible to complete on smaller screens.

The business impact was significant. Lost revenue from cart abandonment exceeded $2.3M annually. Customer acquisition costs were rising while conversion rates stagnated, creating an unsustainable growth trajectory. The team needed a data-driven solution that addressed both the technical and psychological barriers preventing conversions.`
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Challenge',
      content: `UrbanCart faced a sophisticated challenge that many rapidly growing e-commerce brands encounter: how to scale conversion rate optimization across multiple product categories while maintaining brand consistency and user experience quality.

Despite investing heavily in traffic acquisition through paid channels and content marketing, their conversion rate had stalled at 3.2%. More concerning was the significant variance across product categories—some converting at 5% while others languished below 2%. This inconsistency signaled deeper systemic issues in their approach to merchandising and user experience.

The primary challenge manifested in several critical areas. Their homepage served as a catch-all landing page without clear customer segmentation or personalization. New visitors received the same experience as returning customers, and different audience segments with distinct needs and preferences were treated identically. This one-size-fits-all approach diluted the effectiveness of their messaging and product recommendations.

Product discovery was another major pain point. The search functionality returned irrelevant results, lacking intelligent filtering or learning from user behavior. Category pages displayed products in a static grid without dynamic sorting based on popularity, reviews, or individual user preferences. The filtering system was basic, forcing users to manually narrow down hundreds of options.

At the product detail page level, we identified critical conversion blockers. High-quality product imagery existed but wasn't optimized for conversion—lacking lifestyle context shots, 360-degree views, and zoom functionality. Product descriptions were generic and feature-focused rather than benefit-driven. Reviews existed but weren't prominently displayed or filterable by key attributes like size or color.

The checkout and cart experience revealed significant opportunities. Mini-cart functionality was basic, lacking upsell opportunities or showing estimated delivery dates. The checkout process required too many clicks and form fields. Payment options were limited, missing popular methods like Apple Pay, Google Pay, and buy-now-pay-later services.

Perhaps most critical was the absence of a structured testing framework. Optimization decisions were made based on intuition and stakeholder opinions rather than data. There was no systematic approach to hypothesis formation, experiment design, or statistical analysis. Past A/B tests had been run without proper methodology, leading to false positives and wasted development resources.

The business stakes were high. With monthly traffic exceeding 500,000 visitors, every percentage point of conversion improvement represented substantial revenue. Competitors were advancing quickly with sophisticated personalization and testing programs. The team needed a comprehensive, data-driven approach to testing that would deliver consistent, compounding improvements across the entire customer journey.`
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Challenge',
      content: `TechFlow SaaS approached us with a challenge familiar to many B2B software companies: their landing page attracted significant traffic from paid campaigns and organic search, but conversion rates for demo requests and free trial signups remained stubbornly low at 1.8%.

The core issue wasn't traffic quality—analytics showed visitors matching their ideal customer profile were landing on the page. Instead, the problem lay in how the landing page communicated value, built trust, and motivated action. Our initial audit revealed a disconnect between what the company thought was important and what potential customers actually needed to see.

The hero section immediately created confusion. The headline used internal jargon like "Enterprise-Grade Data Orchestration Platform" that resonated with the product team but meant little to the target audience of marketing operations managers. The value proposition focused on features rather than business outcomes, failing to quickly answer the critical question: "How will this solve my specific problem?"

Above-the-fold real estate was squandered on generic stock photography rather than product screenshots or use case demonstrations. The call-to-action button said "Request Demo" without context about what the demo would include, how long it would take, or what they'd learn—creating friction for time-conscious decision-makers.

As users scrolled, they encountered a feature list written in technical language that assumed deep product knowledge. There was no clear narrative arc explaining the customer journey or painting a picture of transformation. Social proof existed but was buried below the fold and lacked specificity—vague testimonials like "Great product!" instead of specific results and use cases.

The form itself presented multiple barriers. It asked for 12 fields of information including company size, annual revenue, and detailed use case information before someone could even schedule a conversation. There was no progressive disclosure or explanation of why each field was necessary. The privacy policy link was nearly invisible, creating subtle anxiety about data handling.

Trust signals were inadequate for enterprise buyers conducting due diligence. Missing were case studies with measurable outcomes, security certifications, integration partnerships with known tools, and transparent pricing information. The team page was generic and didn't establish domain expertise or thought leadership.

Mobile experience was particularly problematic for a tool marketed to busy marketing professionals who often research solutions during commutes or between meetings. The landing page wasn't truly mobile-optimized—forms were difficult to complete, images didn't load efficiently, and key information required excessive scrolling.

Behind these surface issues lay deeper strategic challenges. The company lacked a clear understanding of their buyer journey and the specific objections arising at each stage. Marketing and sales weren't aligned on what constituted a qualified lead, leading to high demo no-show rates. There was no nurture strategy for prospects not ready to buy immediately.

The business impact was substantial. Cost per lead was rising as paid channels became more competitive, yet conversion rates weren't improving. Sales team was frustrated spending time with unqualified leads. The company needed a comprehensive landing page strategy that not only improved conversion rates but qualified leads more effectively and shortened the sales cycle.`
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Challenge',
      content: `FashionHub came to us with a painful problem that was directly impacting their bottom line: 72% of customers who added items to their cart never completed the purchase. With average order values around $150, this represented millions in lost annual revenue.

Initial analysis revealed this wasn't a simple checkout problem—it was a systemic issue spanning the entire path to purchase. The challenge required understanding both the technical friction points and the psychological barriers preventing conversion at each step of the journey.

The cart experience itself created immediate concerns. When customers added items, there was no clear confirmation or path forward—just a small cart icon in the corner that incremented a number. The mini-cart view showed basic product information but lacked crucial details like size, color, and inventory status. There was no way to save items for later or create wishlists, forcing immediate purchase decisions.

Shipping cost transparency was a major pain point. Customers didn't see shipping fees until reaching the final checkout step, often discovering costs that made the total significantly higher than expected. This late-stage surprise was a primary abandonment trigger, particularly for smaller orders. The shipping calculator required a complete address before providing an estimate, adding unnecessary friction.

The checkout flow presented multiple obstacles. It required account creation before proceeding, blocking guest checkout that many customers preferred for one-time purchases. The multi-page checkout process involved 7 different steps, each requiring page loads and creating opportunities for abandonment. Form fields weren't optimized—requesting redundant information and lacking intelligent auto-complete for addresses.

Payment options were limited to credit cards, missing popular alternatives like PayPal, Apple Pay, digital wallets, and buy-now-pay-later services that customers increasingly expected. The payment form looked outdated and didn't clearly communicate security measures, creating subtle anxiety about entering credit card information.

Mobile checkout was particularly problematic. The multi-step process required constant scrolling and zooming. Form fields weren't properly sized for mobile keyboards. Error messages were unclear and sometimes hidden off-screen. The experience felt clunky compared to competitors' streamlined mobile checkouts.

Trust and security concerns manifested throughout. There were no visible security badges or SSL indicators to reassure customers about payment safety. Return policy information was buried in footer links rather than prominently displayed. Customer service contact options weren't obvious if issues arose. Product authenticity wasn't clearly communicated—important for a fashion retailer facing counterfeit concerns.

Urgency and incentive elements were lacking. There were no cart reminders for items low in stock. No visible messaging about sales ending or promotions expiring. No incentive to complete the purchase immediately rather than "thinking about it." The experience let customers easily disengage without consequence.

Behind these tactical issues were strategic gaps. The company had no cart abandonment email recovery system in place. No remarketing campaigns to bring back abandoners. No exit-intent popups offering assistance or incentives. No analytics tracking to understand which specific step caused the most drop-off.

The business stakes were enormous. With 100,000 monthly cart creations and a 72% abandonment rate, even a 10-percentage-point improvement would translate to $1.8M in additional annual revenue. Customer acquisition costs were rising, making it critical to convert existing traffic more effectively rather than constantly chasing new visitors.`
    },
    'mobile-app-engagement-revolution': {
      tag: 'Challenge',
      content: `FitLife App faced a challenge that plagues many mobile applications: strong initial download numbers but catastrophically poor retention. After an impressive launch garnering 250,000 downloads in the first quarter, the data told a troubling story—only 18% of users remained active after 30 days, and just 8% were still engaged at the 90-day mark.

The onboarding experience immediately revealed critical issues. New users were greeted with a 9-screen tutorial explaining every feature before being allowed to use the app. This exhaustive introduction overwhelmed rather than engaged, with analytics showing 35% of users abandoning during onboarding itself. Those who completed it were no more likely to engage with features than those who skipped—suggesting the tutorial wasn't effectively demonstrating value.

The initial goal-setting process asked users to commit to ambitious fitness targets without context or guidance. Many set unrealistic goals, experienced quick failure, and churned. The app didn't offer progressive challenges or adapt to individual ability levels. There was no acknowledgment that behavior change is gradual, treating novices the same as experienced fitness enthusiasts.

Feature discovery was a significant problem. The app contained dozens of workout routines, nutrition tracking, progress analytics, and community features, but new users couldn't find them. Navigation was cluttered with unlabeled icons requiring prior knowledge of fitness app conventions. Key features were buried three or four taps deep. There was no contextual onboarding or tooltips explaining features when users might actually need them.

Engagement mechanics were either non-existent or poorly implemented. Push notifications were generic ("Don't forget to log your workout!") rather than personalized or behavior-triggered. There was no streak tracking or habit-building psychology. Achievement systems felt arbitrary—badges for actions that didn't correlate with actual health improvements. Social features existed but were underutilized, with no prompts to connect with friends or join challenges.

The content experience itself needed refinement. Workout videos had high production value but lacked variety and progressive difficulty. Nutrition tracking required manual input of every meal—tedious compared to competitors offering barcode scanning and AI recognition. Progress tracking showed basic metrics but didn't tell compelling stories about improvement or provide actionable insights.

Personalization was minimal. Every user saw the same homepage regardless of their goals, fitness level, or past behavior. Content recommendations were generic rather than adaptive. The app didn't learn from user preferences or engagement patterns. Someone interested in yoga saw the same strength training promotions as a powerlifter.

Monetization friction added to the retention problem. The freemium model was poorly explained—users hit paywalls for features unexpectedly rather than understanding the value proposition upfront. Premium features weren't compelling enough to justify subscription costs. There was no gradual value demonstration or strategic feature gating.

Technical performance issues compounded engagement problems. The app was battery-intensive, running background processes that drained phones. Load times were slow, particularly for video content and progress screens. There were occasional crashes during workouts—the worst possible time to lose functionality. Syncing with fitness trackers was unreliable.

The broader product strategy lacked clarity around what success looked like. Should the focus be daily active users, workout completions, or long-term behavior change? Different metrics suggested different product directions. The team hadn't clearly defined their "aha moment"—that crucial action predicting long-term retention.

User research revealed deeper psychological barriers. Many users felt intimidated by fitness culture in the app. Progress sharing features caused anxiety rather than motivation. The community felt exclusive rather than welcoming. Workout language assumed knowledge that beginners didn't have.

The business implications were severe. User acquisition costs exceeded $12 per download, but with such poor retention, customer lifetime value was negative. Investors were growing concerned about unit economics. Competitors with stronger retention were capturing market share. The team needed a comprehensive engagement strategy addressing both immediate friction points and long-term habit formation.`
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Challenge',
      content: `DataCore approached us with a sophisticated challenge typical of enterprise B2B companies: despite generating substantial inbound interest and maintaining a healthy marketing qualified lead (MQL) volume, conversion rates from MQL to sales qualified lead (SQL) remained disappointingly low at 4.2%, with an even more concerning drop-off in the progression to closed-won deals.

The sales cycle was lengthy—averaging 180 days from first touch to close—and lacked visibility into what activities actually moved deals forward. Marketing couldn't demonstrate clear ROI on campaigns. Sales blamed lead quality while marketing insisted the problem was follow-up. This misalignment was costing the company both money and opportunity in a competitive market.

Content strategy revealed the first major gap. DataCore's marketing produced high volumes of content—blog posts, whitepapers, webinars—but it wasn't mapped to the buyer journey or addressing specific objections at each stage. Early-stage content focused on product features rather than business problems. Mid-stage content didn't adequately differentiate from competitors. Late-stage content lacked the proof points and ROI calculators that CFOs needed to approve six-figure purchases.

Lead nurturing was essentially non-existent beyond a basic welcome email sequence. There was no automated drip campaign adapting to engagement signals. High-value prospects who weren't ready to buy immediately received the same follow-up as tire-kickers. Marketing automation existed but was underutilized—firing generic emails on schedules rather than intelligently responding to behavior.

The lead qualification process was subjective and inconsistent. What sales considered a qualified lead differed from marketing's definition. There was no formalized lead scoring system accounting for both explicit criteria (company size, budget authority) and implicit signals (content engagement, website behavior). This led to sales wasting time on leads not ready to buy and missing opportunities with highly engaged prospects.

Demo and sales call conversion revealed significant friction. The initial sales conversation often repeated information prospects could have found on the website rather than diving into specific use cases. Product demonstrations followed a generic script regardless of industry or use case specificity. There was no clear qualification framework ensuring both parties' time was well-spent before scheduling lengthy technical evaluations.

Proof of value came too late in the sales process. Case studies existed but weren't strategically deployed—prospects had to search for relevant examples rather than receiving them proactively. ROI calculations were manual and slow, provided only after multiple conversations rather than early to build the business case. Security and compliance documentation came late, causing delays for regulated industries where this was a primary concern.

Multiple stakeholder involvement created complexity that wasn't well-managed. Enterprise deals typically involved 6-8 decision makers—IT, marketing operations, legal, procurement, and executive sponsors. DataCore's sales process was primarily one-to-one, failing to equip champions with materials to sell internally. There were no executive briefing documents, CFO-focused ROI analyses, or technical deep-dives for IT teams.

Competitive differentiation was weak in later stages. While early marketing materials highlighted DataCore's unique approach, the actual sales process reverted to feature comparisons where competitors looked similar. The team hadn't weaponized their key differentiators with compelling proof points, customer testimonials, and demonstrable outcomes.

Post-demo follow-up was inconsistent and lacked urgency creation. After prospects saw the product, there was often a vacuum of 2-3 weeks with minimal engagement. No strategic content delivery. No progressive commitment steps. No business case development. Deals either languished in "thinking about it" status indefinitely or went dark entirely.

Pricing and packaging created friction at critical moments. The tiered structure was complex and not clearly aligned with value delivered at each level. Enterprise customers needed custom quotes that took days to generate. There was no self-service option for smaller deals that fit standard packages. Procurement teams regularly pushed back on terms that hadn't been proactively addressed.

The technology stack wasn't enabling success. Salesforce contained data but wasn't integrated with marketing automation, creating gaps in prospect journey visibility. No conversation intelligence tools captured what actually worked in sales calls. Attribution reporting was rudimentary—unable to show which marketing touches influenced deals. Sales enablement content was scattered across various systems rather than centralized.

Most concerning was the lack of a systematic improvement process. Deal reviews were anecdotal rather than analytical. Win/loss analysis was informal. There was no structured approach to testing different messaging, qualification criteria, or sales plays. The team knew they had a problem but lacked the framework to diagnose root causes and implement solutions systematically.

The business impact was substantial. With sales cycles at 180 days, improvement in conversion rates and velocity had compounding effects on revenue. Customer acquisition costs were high and rising. Sales team morale suffered from low close rates. The company needed an end-to-end pipeline optimization strategy addressing lead quality, nurturing, sales process, and enabling technologies.`
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
        minHeight: windowWidth <= 768 ? 'auto' : '532px',
        background: '#0a1628',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Main Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px',
        gap: '60px',
        width: '100%',
        maxWidth: '1236px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        {/* Content Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '20px',
          margin: '0 auto',
          width: '100%',
          maxWidth: '1236px'
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
      </div>
    </div>
  );
};

export default ChallengeSection;