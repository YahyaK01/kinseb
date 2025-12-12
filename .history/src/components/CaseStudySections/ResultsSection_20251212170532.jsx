// components/CaseStudySections/ResultsSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const ResultsSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const resultsData = {
    'personalization-engine-transforms-user-experience': {
      tag: 'Results',
      content: `The comprehensive personalization strategy delivered transformative results for AuraBloom Co., exceeding all initial projections and establishing new benchmarks for the brand's digital performance.

Conversion rate optimization was the most immediately visible success. The homepage redesign with dynamic personalization lifted conversion rates from 2.1% to 2.9% within the first month, representing a 38% improvement. By the end of quarter one, sustained optimizations pushed conversion to 3.2%, placing AuraBloom above industry benchmarks for the first time in their history.

Cart abandonment, which had stubbornly remained at 73%, dropped to 58% following the checkout simplification. The streamlined 3-step process, combined with early shipping cost visibility and guest checkout options, removed the primary friction points that had plagued the purchase funnel. This 15-percentage-point improvement translated directly to recovered revenue exceeding $850,000 in the first quarter alone.

Mobile performance improvements were particularly dramatic. Mobile conversion rates, which had lagged at 1.4%, climbed to 2.6%—an 86% increase. The mobile-first redesign with optimized images, touch-friendly forms, and one-click payment options transformed mobile from a traffic source to a genuine revenue driver. Mobile now contributes 45% of total revenue, up from 31%.

Average order value showed unexpected gains as well. The improved product page experience with strategic cross-sells and trust signals increased AOV from $87 to $102—a 17% lift that compounded the conversion rate improvements. This wasn't merely upselling; session recordings showed customers felt more confident in their purchases and added complementary items they previously would have abandoned.

Customer acquisition efficiency improved substantially. With higher conversion rates, the effective cost per acquisition dropped by 24%, allowing AuraBloom to expand paid advertising campaigns profitably into channels previously considered too expensive. Marketing ROI improved across all channels, with paid search efficiency improving by 31%.

The A/B testing framework established a culture of continuous optimization. The team now runs 4-6 experiments monthly, with 60% achieving statistical significance and positive results. This systematic approach to improvement has created a compounding effect—each successful test builds on previous wins, creating sustained growth rather than one-time improvements.

Customer lifetime value metrics began showing positive movement within three months. The improved first-purchase experience, combined with reduced friction, led to higher repeat purchase rates. Second-order conversion improved from 12% to 19%, suggesting that the optimization work improved not just immediate conversion but overall customer satisfaction and brand perception.`
    },
    'e-commerce-revenue-uplift-through-testing': {
      tag: 'Results',
      content: `The systematic testing framework implemented for UrbanCart delivered consistent, compounding improvements across all product categories and customer segments, establishing a scalable model for continuous optimization.

Overall conversion rate improvement exceeded expectations, climbing from 3.2% to 4.6% over six months—a 44% increase that translated to millions in additional revenue without increasing traffic acquisition costs. More importantly, conversion rate variance across categories decreased, indicating that systematic optimization lifted all categories rather than just top performers.

Product category performance converged toward best practices. Previously underperforming categories that converted at 2% improved to 4-4.5% by applying learnings from top categories. This wasn't simply copying elements but understanding underlying principles of effective merchandising, trust building, and friction reduction that could be adapted across categories.

The dynamic homepage personalization system proved highly effective. New visitors shown educational content and brand story elements converted 28% better than the previous one-size-fits-all approach. Returning visitors shown personalized product recommendations based on browsing history converted 41% better, with higher average order values as recommendations proved more relevant than generic bestsellers.

Search functionality improvements delivered measurable impact. The AI-powered search understanding synonyms and intent increased search-to-purchase conversion by 35%. Customers found products faster, reducing frustration and abandonment. Search now drives 31% of all purchases, up from 22%.

Product detail page optimizations showed strong results across all test variations. The winning variation featuring prominent customer reviews with photos, detailed size guides, and strategic trust signals improved add-to-cart rates by 23%. The comprehensive product specifications in scannable format reduced returns by 14% as customers made more informed purchase decisions.

Checkout optimization, particularly the express checkout options and smart form fields, reduced checkout abandonment from 47% to 32%. The addition of payment methods including Apple Pay, Google Pay, and buy-now-pay-later services increased completed purchases by 19% as customers found their preferred payment option readily available.

The testing methodology itself became a competitive advantage. The structured approach to hypothesis formation, statistical rigor, and cross-functional review of results created organizational learning that extended beyond individual test results. The team developed pattern recognition for what works and why, accelerating the pace of successful optimization.

Mobile commerce grew from 47% to 62% of total revenue as mobile-specific optimizations removed friction points unique to smaller screens. Touch-optimized navigation, image optimization for fast loading, and mobile payment options made the mobile experience not just adequate but superior for many use cases.`
    },
    'saas-lead-generation-conversion-breakthrough': {
      tag: 'Results',
      content: `The landing page transformation for TechFlow SaaS delivered immediate and sustained improvements in both lead volume and lead quality, fundamentally changing the economics of their customer acquisition.

Demo request conversion rate tripled from 1.8% to 5.4% within the first month of the new landing page going live. This dramatic improvement came from the combination of benefit-driven messaging, strategic social proof placement, and friction-reduced form design. The page now converts at rates comparable to best-in-class SaaS companies.

Lead quality improvements were equally significant. The three-field form focusing on essential information, combined with progressive profiling in subsequent interactions, resulted in 43% more qualified leads according to sales team feedback. Demo no-show rates dropped from 35% to 18% as the clearer value proposition and expectation setting attracted more genuinely interested prospects.

Form completion rates improved substantially. The reduced field count, combined with clear value proposition above the submit button and privacy reassurance messaging, increased form starts to completions from 64% to 87%. The real-time validation catching errors immediately reduced form abandonment due to technical issues.

Mobile conversion rates showed dramatic improvement, jumping from 0.9% to 4.1%—a 356% increase. The mobile-first design with thumb-friendly navigation, tap-optimized forms, and fast loading addressed the unique needs of prospects researching solutions on mobile devices during commutes or between meetings.

Cost per lead decreased by 47% despite no changes to advertising spend or targeting. The improved conversion rates meant the same traffic investment generated far more leads, dramatically improving marketing efficiency. This allowed TechFlow to expand into more expensive advertising channels that were previously cost-prohibitive.

Sales cycle length shortened by an average of 23 days. The clearer messaging and strategic content delivery meant prospects arrived at demos better informed and further along their decision-making journey. Sales teams spent less time on basic education and more time on value demonstration and objection handling.

Customer acquisition cost decreased by 38% when accounting for the entire funnel from first touch to closed deal. Higher conversion rates and shorter sales cycles compounded to significantly improve unit economics, making previously marginally profitable customer segments highly attractive.

Revenue per visitor increased by 112% when calculating the value of traffic at each stage of the funnel. This metric captured the compounding effects of higher conversion rates, better lead quality, shorter sales cycles, and maintained close rates, demonstrating the landing page's bottom-line impact beyond just lead volume.`
    },
    'fashion-retailer-cart-abandonment-solution': {
      tag: 'Results',
      content: `The comprehensive cart recovery and checkout optimization strategy for FashionHub delivered exceptional results, recovering millions in previously lost revenue and establishing new standards for their e-commerce operations.

Cart abandonment rate dropped from 72% to 53%—a 19-percentage-point improvement representing the single largest impact initiative in FashionHub's digital history. This improvement came from addressing friction at every stage of the purchase journey, from cart experience through final confirmation.

Checkout completion rates improved dramatically with the new single-page checkout design. The streamlined 3-step flow with collapsible sections and persistent progress indicators reduced checkout abandonment from 38% to 22%. The simplified experience removed decision fatigue and created momentum toward purchase completion.

Payment flexibility proved crucial to conversion. The addition of PayPal, Apple Pay, Google Pay, Shop Pay, and buy-now-pay-later options increased completed purchases by 27%. Different customer segments had strong preferences for specific payment methods, and offering comprehensive options removed a significant barrier to purchase.

Mobile checkout transformation delivered outstanding results. The mobile-optimized flow with thumb-friendly buttons, reduced information density, and payment options specifically suited for mobile increased mobile checkout completion from 41% to 68%—a 66% improvement that acknowledged mobile as a primary shopping channel.

The cart abandonment recovery system captured substantial incremental revenue. The three-email sequence with strategic timing, personalized product recommendations, and dynamic discount offers based on cart value recovered 23% of abandoned carts that would have otherwise been lost. SMS reminders for high-value carts recovered an additional 8%.

Average order value increased from $150 to $168 as the improved experience reduced anxiety and increased confidence in purchasing. Customers who previously abandoned to "think about it" completed purchases immediately, and many added additional items when trust signals and return policy information addressed their concerns proactively.

Early shipping cost visibility improved both conversion and customer satisfaction. Moving the shipping calculator to the cart page eliminated the surprise factor that had been the primary abandonment trigger. Cart-to-checkout progression improved by 31% as customers entered checkout already knowing their total investment.

Guest checkout option proved highly valuable. Making it the default with account creation optional removed a major friction point, particularly for first-time customers. Guest checkout accounts for 64% of transactions, with many customers later creating accounts post-purchase when prompted via email.

Customer lifetime value metrics showed positive movement. The improved first purchase experience led to higher repurchase rates, with second-order conversion improving from 15% to 24%. The reduced friction and increased confidence in the purchasing process created lasting positive impressions that drove loyalty.`
    },
    'mobile-app-engagement-revolution': {
      tag: 'Results',
      content: `The comprehensive engagement strategy for FitLife App transformed retention metrics and user behavior, creating the foundation for sustainable growth and improved unit economics.

30-day retention improved from 18% to 41%—a 128% increase that fundamentally changed the app's growth trajectory. This dramatic improvement came from the combination of improved onboarding, strategic gamification, and personalized content that kept users engaged through the critical first month.

90-day retention showed equally impressive gains, climbing from 8% to 19%. This longer-term retention improvement demonstrated that the engagement mechanics weren't just delaying churn but creating genuine habit formation and value realization that drove sustained usage.

Onboarding completion rates improved from 65% to 89% with the new 2-minute contextual introduction. The show-don't-tell approach that demonstrated features during actual use proved far more effective than the exhaustive 9-screen tutorial. Users reached the "aha moment" of completing their first workout within 5 minutes rather than abandoning during setup.

Daily active user rates increased from 12% to 29% of the user base. The smart push notifications triggered by behavior rather than schedules, combined with streak tracking and achievement systems tied to meaningful health outcomes, created compelling reasons to return daily.

Workout completion rates improved significantly. The progressive challenge system starting with achievable micro-goals increased workout completion from 34% to 61%. Users experienced quick wins that built confidence and momentum rather than setting unrealistic targets that led to failure and abandonment.

Feature discovery and utilization improved dramatically. The contextual tooltips and strategic in-app messaging increased usage of nutrition tracking by 156%, progress analytics by 94%, and community features by 127%. Features that previously remained hidden now reached users at moments they were most likely to find them valuable.

Premium subscription conversion improved from 4% to 11% of active users. The strategic feature gating and gradual value demonstration created clear upgrade motivation. The freemium model became not just a user acquisition funnel but a genuine revenue driver.

User acquisition economics improved substantially. With higher retention rates, customer lifetime value increased by 187%, making previously marginal acquisition channels highly profitable. The app could now afford higher cost per install while maintaining positive unit economics.

App store ratings improved from 3.6 to 4.4 stars as the better experience led to more satisfied users. Positive reviews emphasized the app being "actually helpful" and "easy to stick with"—addressing the core retention challenges that had plagued the previous version. Higher ratings created a virtuous cycle of better organic visibility and lower acquisition costs.`
    },
    'enterprise-pipeline-growth-strategy': {
      tag: 'Results',
      content: `The end-to-end pipeline optimization for DataCore delivered transformative improvements in lead quality, conversion rates, and sales efficiency, fundamentally changing the revenue generation model.

MQL to SQL conversion rate improved from 4.2% to 11.7%—a 179% increase that validated the lead scoring system's accuracy and the improved lead nurturing effectiveness. Marketing and sales alignment on lead definition eliminated the previous friction where sales dismissed leads as unqualified.

Sales cycle length decreased from 180 days to 135 days—a 25% reduction that allowed the sales team to close more deals in the same time period. The improved content strategy, strategic proof of value delivery, and multi-stakeholder engagement approach accelerated the decision-making process without feeling pushy.

Close rates improved from 23% to 31% for qualified opportunities. The sales enablement materials, industry-specific demo playbooks, and strategic deployment of case studies gave sales teams the tools to address objections effectively and demonstrate value compellingly. Win rate improvement came from better qualification as much as better closing.

Marketing ROI became clearly demonstrable with improved attribution reporting. The integrated technology stack showing which marketing touches influenced deals allowed for optimization of spend allocation. Budget shifted toward high-performing channels, with some channels showing 3x improvement in cost per closed deal.

Lead nurturing efficiency improved dramatically. The behavior-triggered campaigns with industry-specific content tracks kept prospects engaged without requiring constant sales attention. Marketing-qualified leads stayed warm through the extended B2B buying cycle, entering sales conversations with higher intent and better product understanding.

Content effectiveness was quantified through engagement tracking. Case studies with measurable outcomes and specific use cases generated 4.2x more pipeline than generic content. ROI calculators deployed early in the sales process appeared in 67% of closed-won deals, demonstrating their importance in building the business case.

Sales productivity increased by 34% as the improved lead quality and strategic enablement materials allowed reps to focus on high-value activities. Time spent on unqualified leads decreased by 58% while time spent with decision-ready prospects increased correspondingly.

Multi-stakeholder engagement strategies proved highly effective. Providing executives briefings for C-suite sponsors, technical deep-dives for IT teams, and CFO-focused ROI analyses addressed different buying committee concerns simultaneously. Deals involving 3+ stakeholders closed 42% faster than previously.

Customer acquisition cost decreased by 29% despite maintaining deal sizes. The combination of higher conversion rates, faster sales cycles, and improved marketing efficiency reduced the total investment required to close each deal. This improvement in unit economics allowed for aggressive growth investment while maintaining profitability.`
    }
  };

  const data = resultsData[slug] || resultsData['personalization-engine-transforms-user-experience'];

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
      id="results-section" 
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: windowWidth <= 768 ? '40px 20px 80px' : windowWidth <= 1024 ? '40px 40px 80px' : '40px 74px 80px',
        gap: '10px',
        width: '100%',
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
            fontSize: windowWidth <= 768 ? '14px' : '16px',
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
            fontSize: windowWidth <= 768 ? '15px' : '16px',
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

export default ResultsSection;