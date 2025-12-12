// components/CaseStudySections/SolutionSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const SolutionSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const solutionData = {
    'personalization-engine-transforms-user-experience': {
      title: 'Our Solution',
      content: 'We implemented a comprehensive CRO strategy that included advanced analytics, personalization engines, A/B testing frameworks, and behavioral psychology principles. Our approach was data-driven, iterative, and focused on continuous improvement.',
      solutions: [
        {
          step: '01',
          title: 'Data Analysis & Audit',
          description: 'Comprehensive analysis of user behavior, funnel performance, and conversion blockers'
        },
        {
          step: '02',
          title: 'Personalization Strategy',
          description: 'Developed segmentation framework and personalized content delivery system'
        },
        {
          step: '03',
          title: 'Testing Framework',
          description: 'Established A/B testing protocols and experimentation roadmap'
        },
        {
          step: '04',
          title: 'Implementation & Optimization',
          description: 'Rolled out changes with continuous monitoring and iterative improvements'
        }
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
        padding: windowWidth <= 768 ? '40px 20px' : '60px 102px',
        maxWidth: '1440px',
        margin: '0 auto',
        background: '#0a1628',
        minHeight: '400px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: windowWidth <= 768 ? '28px' : '32px',
        lineHeight: '48px',
        background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '20px'
      }}>
        {data.title}
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: windowWidth <= 768 ? '15px' : '16px',
        lineHeight: '28px',
        color: '#FFFFFF',
        marginBottom: '40px'
      }}>
        {data.content}
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        {data.solutions.map((solution, index) => (
          <div key={index} style={{
            display: 'flex',
            gap: '20px',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
            transition: `opacity 0.8s ease-out ${0.2 + index * 0.15}s, transform 0.8s ease-out ${0.2 + index * 0.15}s`
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0D98BA 0%, #3AA1DE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '20px',
                color: '#FFFFFF'
              }}>
                {solution.step}
              </span>
            </div>
            <div style={{
              flex: 1
            }}>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: windowWidth <= 768 ? '18px' : '20px',
                lineHeight: '30px',
                color: '#FFFFFF',
                marginBottom: '8px'
              }}>
                {solution.title}
              </h3>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                fontSize: windowWidth <= 768 ? '15px' : '16px',
                lineHeight: '26px',
                color: '#B2AFAF',
                margin: 0
              }}>
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;