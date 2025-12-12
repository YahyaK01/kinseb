// components/CaseStudySections/ResultsSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const ResultsSection = ({ slug }) => {
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

  return (
    <div 
      id="results-section" 
      ref={sectionRef}
      style={{
        padding: windowWidth <= 768 ? '40px 20px 80px' : '60px 102px 100px',
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
        Results & Impact
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: windowWidth <= 768 ? '15px' : '16px',
        lineHeight: '28px',
        color: '#FFFFFF',
        marginBottom: '40px'
      }}>
        The results exceeded all expectations, with significant improvements across all key metrics. The client saw immediate impact within the first 30 days, with compounding benefits over the following quarters. The success of this project led to expansion into additional markets and product lines.
      </p>

      {/* Key Takeaways */}
      <div style={{
        background: '#041629',
        padding: windowWidth <= 768 ? '30px 20px' : '40px',
        borderRadius: '15px',
        border: '2px solid rgba(13, 152, 186, 0.3)',
        marginTop: '40px'
      }}>
        <h3 style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: windowWidth <= 768 ? '20px' : '24px',
          lineHeight: '36px',
          color: '#0D98BA',
          marginBottom: '20px'
        }}>
          Key Takeaways
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          {[
            'Data-driven approach led to measurable ROI within first quarter',
            'Personalization significantly outperformed generic messaging',
            'Continuous testing culture established for ongoing optimization',
            'Results sustained and improved over 12-month period'
          ].map((takeaway, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.8s ease-out ${0.3 + index * 0.1}s, transform 0.8s ease-out ${0.3 + index * 0.1}s`
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0D98BA 0%, #3AA1DE 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  ✓
                </span>
              </div>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                fontSize: windowWidth <= 768 ? '15px' : '16px',
                lineHeight: '26px',
                color: '#FFFFFF'
              }}>
                {takeaway}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;