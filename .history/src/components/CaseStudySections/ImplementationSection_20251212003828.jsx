// components/CaseStudySections/ImplementationSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const ImplementationSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

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

  const timeline = [
    { phase: 'Week 1-2', title: 'Discovery & Research', description: 'User research, data analysis, and competitive benchmarking' },
    { phase: 'Week 3-4', title: 'Strategy Development', description: 'Hypothesis formation, testing roadmap, and technical planning' },
    { phase: 'Week 5-8', title: 'Implementation', description: 'Development, QA testing, and staged rollout of optimizations' },
    { phase: 'Week 9-12', title: 'Optimization & Scale', description: 'Performance monitoring, iterative improvements, and expansion' }
  ];

  return (
    <div 
      id="implementation-section" 
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
        Implementation Process
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: windowWidth <= 768 ? '15px' : '16px',
        lineHeight: '28px',
        color: '#FFFFFF',
        marginBottom: '40px'
      }}>
        Our implementation followed a structured 12-week roadmap, including discovery phase, strategy development, technical implementation, testing phase, and optimization cycles. We worked closely with the client's team to ensure seamless integration and knowledge transfer.
      </p>

      {/* Timeline */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
        position: 'relative'
      }}>
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          left: windowWidth <= 768 ? '15px' : '30px',
          top: '30px',
          bottom: '30px',
          width: '2px',
          background: 'linear-gradient(180deg, #0D98BA 0%, rgba(13, 152, 186, 0.3) 100%)'
        }} />

        {timeline.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            gap: windowWidth <= 768 ? '20px' : '30px',
            paddingBottom: '40px',
            position: 'relative',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
            transition: `opacity 0.8s ease-out ${0.2 + index * 0.15}s, transform 0.8s ease-out ${0.2 + index * 0.15}s`
          }}>
            {/* Timeline Dot */}
            <div style={{
              width: windowWidth <= 768 ? '30px' : '60px',
              height: windowWidth <= 768 ? '30px' : '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0D98BA 0%, #3AA1DE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: '4px solid #0a1628',
              zIndex: 1
            }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: windowWidth <= 768 ? '12px' : '14px',
                color: '#FFFFFF'
              }}>
                {index + 1}
              </span>
            </div>

            {/* Content */}
            <div style={{
              flex: 1,
              paddingTop: windowWidth <= 768 ? '0px' : '8px'
            }}>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                color: '#0D98BA',
                marginBottom: '5px'
              }}>
                {item.phase}
              </div>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: windowWidth <= 768 ? '18px' : '20px',
                lineHeight: '30px',
                color: '#FFFFFF',
                marginBottom: '8px'
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                fontSize: windowWidth <= 768 ? '15px' : '16px',
                lineHeight: '26px',
                color: '#B2AFAF',
                margin: 0
              }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImplementationSection;