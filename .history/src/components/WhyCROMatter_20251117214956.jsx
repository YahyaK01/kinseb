import React, { useState, useEffect, useRef } from 'react';

const WhyCROMatters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Hardcoded content
  const content = {
    heading: "Why Conversion Optimization Matters",
    paragraph: "Turn more visitors into customers without increasing your ad spend. Smart optimization means better results from your existing traffic.",
    points: [
      {
        icon: "/images/inc-roi.png", // Replace with your actual image path
        heading: "Increase ROI Without More Ad Spend",
        description: "Maximize returns from your existing traffic by optimizing what's already working. Small improvements compound into significant revenue growth."
      },
      {
        icon: "/images/brain.png", // Replace with your actual image path
        heading: "Understand User Behavior Deeply",
        description: "Discover exactly why visitors leave and what makes them convert. Data-driven insights reveal hidden opportunities in your funnel."
      },
      {
        icon: "/images/sales-funnel.png", // Replace with your actual image path
        heading: "Optimize Every Stage of the Funnel",
        description: "From first click to final purchase, ensure each touchpoint is fine-tuned for maximum conversions and minimal friction."
      },
      {
        icon: "/images/rocket.png", // Replace with your actual image path
        heading: "Scale Growth Sustainably",
        description: "Build a conversion engine that grows with your business. Proven optimization strategies that deliver consistent, measurable results."
      }
    ]
  };

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
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
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes iconFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>

      <section
        ref={sectionRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '100px 32px',
          width: '100%',
          minHeight: '643.79px',
          background: 'linear-gradient(180deg, #0D98BA -309.11%, #04091D 115.25%)',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}
      >
        {/* Main Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '92px',
            width: '100%',
            maxWidth: '1161.92px'
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '10px',
              width: '100%',
              maxWidth: '945px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.2s'
            }}
          >
            {/* Heading */}
            <h2
              style={{
                width: '100%',
                fontFamily: 'Poppins, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 'clamp(28px, 5vw, 40px)',
                lineHeight: '1.5',
                textAlign: 'center',
                color: '#FFFFFF',
                margin: '0',
                padding: '0'
              }}
            >
              {content.heading}
            </h2>

            {/* Paragraph */}
            <p
              style={{
                width: '100%',
                maxWidth: '606px',
                fontFamily: 'Lato, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: '150%',
                textAlign: 'center',
                letterSpacing: '-0.006em',
                color: '#FFFFFF',
                margin: '0',
                padding: '0'
              }}
            >
              {content.paragraph}
            </p>
          </div>

          {/* Points Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '60px 60px',
              width: '100%',
              maxWidth: '1161.92px'
            }}
          >
            {content.points.map((point, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '15px',
                  width: '100%',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? 'translateX(0) translateY(0)'
                    : index % 2 === 0
                    ? 'translateX(-60px) translateY(20px)'
                    : 'translateX(60px) translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${0.4 + index * 0.15}s`
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    width: '80px',
                    height: '80px',
                    minWidth: '80px',
                    animation: isVisible ? 'iconFloat 3s ease-in-out infinite' : 'none',
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  <img
                    src={point.icon}
                    alt={point.heading}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Text Content */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '6px',
                    flex: '1'
                  }}
                >
                  {/* Heading */}
                  <h3
                    style={{
                      width: '100%',
                      fontFamily: 'Poppins, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: 'clamp(16px, 2.5vw, 18px)',
                      lineHeight: '150%',
                      letterSpacing: '-0.006em',
                      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      margin: '0',
                      padding: '0'
                    }}
                  >
                    {point.heading}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      width: '100%',
                      fontFamily: 'Lato, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 'clamp(14px, 2vw, 15px)',
                      lineHeight: '160%',
                      color: '#FFFFFF',
                      margin: '0',
                      padding: '0',
                      opacity: '0.9'
                    }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyCROMatters;