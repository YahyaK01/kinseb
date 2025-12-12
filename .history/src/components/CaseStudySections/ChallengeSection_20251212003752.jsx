// components/CaseStudySections/ChallengeSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const ChallengeSection = ({ slug }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  const challengeData = {
    'personalization-engine-transforms-user-experience': {
      title: 'The Challenge',
      content: 'The client faced significant challenges with low conversion rates, high bounce rates, and poor user engagement. Traditional marketing approaches were no longer delivering results, and the company needed a data-driven solution to transform their digital presence. Generic messaging was failing to resonate with different audience segments, leading to missed opportunities.',
      challenges: [
        'Conversion rate below industry benchmarks',
        'High bounce rate on key landing pages',
        'One-size-fits-all approach to content',
        'Limited understanding of user behavior patterns'
      ]
    },
    'e-commerce-revenue-uplift-through-testing': {
      title: 'The Challenge',
      content: 'The e-commerce platform struggled with cart abandonment rates exceeding 70% and declining revenue per visitor. Customers were leaving during checkout, and the mobile experience was particularly problematic. The lack of systematic testing meant optimization decisions were based on assumptions rather than data.',
      challenges: [
        'Cart abandonment rate over 70%',
        'Poor mobile conversion performance',
        'No structured testing framework',
        'Declining average order value'
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
        marginBottom: '30px'
      }}>
        {data.content}
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: windowWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
        gap: '20px'
      }}>
        {data.challenges.map((challenge, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '15px',
            padding: '20px',
            background: '#041629',
            borderRadius: '10px',
            border: '1px solid rgba(13, 152, 186, 0.2)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.8s ease-out ${0.2 + index * 0.1}s, transform 0.8s ease-out ${0.2 + index * 0.1}s`
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'rgba(13, 152, 186, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px'
            }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '12px',
                color: '#0D98BA'
              }}>
                !
              </span>
            </div>
            <span style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: windowWidth <= 768 ? '15px' : '16px',
              lineHeight: '28px',
              color: '#FFFFFF'
            }}>
              {challenge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeSection;