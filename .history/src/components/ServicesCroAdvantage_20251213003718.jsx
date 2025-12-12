import React, { useState, useEffect, useRef } from 'react';

const ServicesWhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const cards = [
    {
      title: "Human-Led Optimization",
      description: "We combine user psychology with real data to understand why people act — not just where they click.",
      image: "/images/136.jpg"
    },
    {
      title: "Predictive Experiences",
      description: "Our models anticipate drop-offs and adapt user journeys in real time to prevent lost conversions.",
      image: "/images/137.jpg"
    },
    {
      title: "Revenue-First Strategy",
      description: "Every optimization is tied to revenue per visitor and long-term growth, not vanity metrics.",
      image: "/images/333.jpg"
    },
    {
      title: "End-to-End Optimization",
      description: "We optimize every digital touchpoint — from first click to final purchase and post-pell engagement.",
      image: "/images/444.jpg"
    }
  ];

  const TargetIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="25" stroke="#0D98BA" strokeWidth="2" fill="none" />
      <circle cx="30" cy="30" r="15" stroke="#0D98BA" strokeWidth="2" fill="none" />
      <circle cx="30" cy="30" r="5" stroke="#0D98BA" strokeWidth="2" fill="none" />
    </svg>
  );

  return (
    <div
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 10px',
        gap: '30px',
        width: '100%',
        minHeight: 'auto',
        background: 'linear-gradient(180deg, #04091D 0%, #0D98BA 366.22%)',
        boxSizing: 'border-box'
      }}
    >
      {/* Header Section */}
      <div
        className="kinseb-cro-header"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          maxWidth: '1236px',
          width: '100%',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <h2
          className="kinseb-cro-title"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(25px, 4vw, 42px)',
            lineHeight: '1.2',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            textTransform: 'capitalize',
            color: '#FFFFFF',
            margin: 0,
            padding: '0 10px',
            whiteSpace: 'nowrap'
          }}
        >
          The Kinseb CRO Advantage
        </h2>
        <p
         className="kinseb-cro-description"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: '16px',
            textAlign: 'center',
            letterSpacing: '-0.09px',
            color: '#FFFFFF',
            margin: 0,
            maxWidth: '750px',
            padding: '0 10px'
          }}
        >
          We combine behavioral science, data, and full-funnel strategy to turn optimization into predictable growth.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="kinseb-cro-cards-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 285px))',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1236px',
          width: '100%',
          padding: '0 10px',
          margin:'10px 0 0 0',
          boxSizing: 'border-box'
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px 20px',
              width: '100%',
              maxWidth: '285px',
              minHeight: '373px',
              background: `linear-gradient(0deg, rgba(4, 9, 29, 0.6), rgba(4, 9, 29, 0.6)), url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0px 0px 15px #04091D',
              borderRadius: '10px',
              boxSizing: 'border-box',
              margin: '0 auto',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '20px',
                width: '100%',
                maxWidth: '245px'
              }}
            >
              {/* Icon */}
              <div style={{ flexShrink: 0 }}>
                <TargetIcon />
              </div>

              {/* Text Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  width: '100%'
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '36px',
                    letterSpacing: '-0.006em',
                    color: '#FFFFFF',
                    margin: 0,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.8s ease-out ${index * 0.15 + 0.3}s, transform 0.8s ease-out ${index * 0.15 + 0.3}s`
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '150%',
                    letterSpacing: '-0.006em',
                    color: '#FFFFFF',
                    margin: 0,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.8s ease-out ${index * 0.15 + 0.5}s, transform 0.8s ease-out ${index * 0.15 + 0.5}s`
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Lato:wght@400&display=swap');

        @media (min-width: 1240px) {
          .kinseb-cro-cards-grid {
            grid-template-columns: repeat(4, 285px) !important;
          }
        }

        @media (max-width: 1239px) and (min-width: 920px) {
          .kinseb-cro-cards-grid {
            grid-template-columns: repeat(3, 285px) !important;
          }
        }

        @media (max-width: 919px) and (min-width: 600px) {
          .kinseb-cro-cards-grid {
            grid-template-columns: repeat(2, 285px) !important;
          }
        }

        @media (max-width: 599px) {
          .kinseb-cro-cards-grid {
            grid-template-columns: repeat(1, 285px) !important;
          }

           .kinseb-cro-title{
            line-height:14px !important;
     

          }

          .kinseb-cro-description {
            line-height:20px !important;
     

          }
        }
      `}</style>
    </div>
  );
};

export default ServicesWhyChooseUs;