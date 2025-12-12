// CaseStudies/AuraBloomCaseStudy.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { 
  HeroSection, 
  OverviewSection, 
  ResultsGrid, 
  TestimonialSection,
  TwoColumnSection,
  ImageGallery,
  ProcessSteps
} from '../CaseStudySections';

const AuraBloomCaseStudy = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Define sections array here inside this component
  const sections = [
    {
      component: HeroSection,
      data: {
        image: 'images/80.jpg',
        title: 'Personalization Engine Transforms User Experience',
        description: 'Through data-driven experimentation and strategic CTA placement, we transformed a underperforming landing page into a high-converting lead generation engine.'
      }
    },
    {
      component: ResultsGrid,
      data: {
        results: [
          { metric: '+37%', description: 'Conversion Rate Increase' },
          { metric: '+42%', description: 'Revenue Growth' },
          { metric: '-23%', description: 'Bounce Rate Reduction' },
          { metric: '+56%', description: 'Average Order Value' }
        ]
      }
    },
    {
      component: OverviewSection,
      data: {
        heading: 'Project Overview',
        content: 'AuraBloom Co. approached us with a challenge: their landing page was generating traffic but struggling to convert visitors into customers. Through comprehensive analysis and strategic optimization, we transformed their digital presence.'
      }
    },
    {
      component: TwoColumnSection,
      data: {
        leftTitle: 'The Challenge',
        leftContent: 'The original landing page had a 2.1% conversion rate, well below industry standards. User testing revealed confusion around product benefits and a complicated checkout process that was causing significant cart abandonment.',
        rightTitle: 'Our Approach',
        rightContent: 'We implemented a data-driven methodology, combining heat mapping, A/B testing, and user interviews to identify friction points. Our strategy focused on simplifying the user journey while maintaining brand integrity.'
      }
    },
    {
      component: ProcessSteps,
      data: {
        heading: 'Our Process',
        steps: [
          {
            title: 'Discovery & Analysis',
            description: 'Conducted comprehensive site audit, user research, and competitor analysis to establish baseline metrics and identify opportunities.'
          },
          {
            title: 'Strategy Development',
            description: 'Created a prioritized optimization roadmap based on potential impact and implementation complexity.'
          },
          {
            title: 'Implementation & Testing',
            description: 'Rolled out changes systematically with A/B testing to validate each optimization before full deployment.'
          },
          {
            title: 'Monitoring & Iteration',
            description: 'Continuously monitored performance metrics and made iterative improvements based on real user data.'
          }
        ]
      }
    },
    {
      component: ImageGallery,
      data: {
        images: [
          { url: 'images/case-study-1-before.jpg', caption: 'Original Design' },
          { url: 'images/case-study-1-after.jpg', caption: 'Optimized Version' },
          { url: 'images/case-study-1-analytics.jpg', caption: 'Performance Metrics' }
        ]
      }
    },
    {
      component: TestimonialSection,
      data: {
        quote: 'The results exceeded our expectations. The team\'s data-driven approach and attention to detail made all the difference. We saw improvements within the first month.',
        author: 'Sarah Johnson',
        position: 'CEO, AuraBloom Co.'
      }
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#0a1628',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Background Gradients */}
      <div style={{
        position: 'fixed',
        width: '300px',
        height: '300px',
        right: '10%',
        top: '15%',
        background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
        filter: 'blur(225px)',
        opacity: 0.4,
        zIndex: 0
      }} />
      
      <div style={{
        position: 'fixed',
        width: '300px',
        height: '300px',
        left: '5%',
        bottom: '20%',
        background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
        filter: 'blur(225px)',
        opacity: 0.3,
        zIndex: 0
      }} />

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: windowWidth <= 768 ? '40px 20px' : '60px 40px'
      }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/case-studies')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '16px',
            cursor: 'pointer',
            marginBottom: '40px',
            padding: '10px 0',
            transition: 'opacity 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.7'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          <ArrowLeft size={20} />
          Back to Case Studies
        </button>

        {/* Dynamically Render Sections */}
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <SectionComponent 
              key={index}
              data={section.data}
              windowWidth={windowWidth}
            />
          );
        })}

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '40px 0'
        }}>
          <button
            onClick={() => navigate('/case-studies')}
            style={{
              background: 'linear-gradient(90deg, #3AA1DE 0%, #0D98BA 100%)',
              border: 'none',
              borderRadius: '8px',
              padding: '15px 40px',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0px 4px 15px rgba(58, 161, 222, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0px 6px 20px rgba(58, 161, 222, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0px 4px 15px rgba(58, 161, 222, 0.3)';
            }}
          >
            View More Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuraBloomCaseStudy;