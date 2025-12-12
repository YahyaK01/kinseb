import React, { useState, useEffect, useRef } from 'react';

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  // Hardcoded content
  const content = {
    heading: "Our Proven CRO Process",
    subheading: "A systematic approach to maximizing your conversion rates",
    steps: [
      {
        number: "01",
        title: "Discovery & Audit",
        description: "We analyze your current performance, identify bottlenecks, and uncover conversion opportunities through comprehensive audits.",
        image: "/images/process/discovery.jpg"
      },
      {
        number: "02",
        title: "Behavioral Data Analysis",
        description: "Deep dive into user behavior patterns, heatmaps, and session recordings to understand why visitors aren't converting.",
        image: "/images/process/analysis.jpg"
      },
      {
        number: "03",
        title: "Conversion Roadmap Creation",
        description: "Strategic planning and prioritization of optimization opportunities based on impact and effort analysis.",
        image: "/images/process/roadmap.jpg"
      },
      {
        number: "04",
        title: "Implementation & Testing",
        description: "Execute A/B tests and multivariate experiments to validate hypotheses and measure impact on conversions.",
        image: "/images/process/testing.jpg"
      },
      {
        number: "05",
        title: "Analysis & Insights",
        description: "Evaluate test results, extract actionable insights, and determine winning variations for deployment.",
        image: "/images/process/insights.jpg"
      },
      {
        number: "06",
        title: "Deployment & Iteration",
        description: "Roll out winning changes and continue the cycle of testing and optimization for sustained growth.",
        image: "/images/process/deployment.jpg"
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

  // Handle scroll to update active step
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const stepWidth = 537; // 417 card width + 120 gap
        const newActiveStep = Math.round(scrollLeft / stepWidth);
        setActiveStep(Math.min(newActiveStep, content.steps.length - 1));
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
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
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          /* Custom scrollbar styles */
          .process-scroll::-webkit-scrollbar {
            height: 8px;
          }
          
          .process-scroll::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }
          
          .process-scroll::-webkit-scrollbar-thumb {
            background: #0D98BA;
            border-radius: 4px;
          }
          
          .process-scroll::-webkit-scrollbar-thumb:hover {
            background: #0CC0DF;
          }
        `}
      </style>

      <section
        ref={sectionRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '30px 0px',
          width: '100%',
          minHeight: '753px',
          background: 'url(/images/bg-process-section.png) center/cover, #04091D',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Main Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '51px 32px',
            width: '100%',
            minHeight: '693px',
            position: 'relative',
            isolation: 'isolate'
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              width: '100%',
              maxWidth: '834px',
              marginBottom: '80px',
              zIndex: 1,
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
                lineHeight: '1.6',
                textAlign: 'center',
                letterSpacing: '-0.03em',
                textTransform: 'capitalize',
                color: '#FFFFFF',
                margin: '0 0 8px 0',
                padding: '0'
              }}
            >
              {content.heading}
            </h2>

            {/* Subheading */}
            <p
              style={{
                width: '100%',
                fontFamily: 'Lato, sans-serif',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 'clamp(13px, 2vw, 14px)',
                lineHeight: '2',
                textAlign: 'center',
                letterSpacing: '-0.09px',
                color: '#FFFFFF',
                margin: '0',
                padding: '0'
              }}
            >
              {content.subheading}
            </p>
          </div>

          {/* Progress Bar Container */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              maxWidth: '3152px',
              height: '87px',
              left: '50%',
              top: '170px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(90deg, rgba(4, 9, 29, 0.8) 5.75%, rgba(7, 67, 93, 0.9) 18.16%, rgba(13, 152, 186, 0.9) 29.89%, rgba(15, 116, 190, 0.8) 42.53%, rgba(13, 153, 255, 0.8) 56.74%, #105588 72.31%, #07435D 86.75%, rgba(4, 9, 29, 0.8) 100%)',
              boxShadow: '0px 0px 19px 1px rgba(0, 0, 0, 0.2)',
              zIndex: 0,
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out 0.4s'
            }}
          />

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="process-scroll"
            style={{
              position: 'relative',
              width: '100%',
              height: '497px',
              overflowX: 'auto',
              overflowY: 'hidden',
              zIndex: 1,
              scrollBehavior: 'smooth',
              paddingBottom: '20px'
            }}
          >
            {/* Steps Container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                gap: '120px',
                minWidth: 'max-content',
                height: '417px',
                paddingLeft: '10%',
                paddingRight: '10%',
                position: 'relative'
              }}
            >
              {/* Progress Line Background (Gray) */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '10px',
                  left: '0',
                  top: '203.5px',
                  background: '#979797',
                  zIndex: 0
                }}
              />

              {/* Progress Line Active (Blue) */}
              <div
                style={{
                  position: 'absolute',
                  width: `${(activeStep / (content.steps.length - 1)) * 100}%`,
                  height: '10px',
                  left: '0',
                  top: '203.5px',
                  background: '#0D98BA',
                  zIndex: 1,
                  transition: 'width 0.3s ease-out'
                }}
              />

              {/* Steps */}
              {content.steps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${0.5 + index * 0.1}s`
                  }}
                >
                  {/* Step Number Diamond */}
                  <div
                    style={{
                      position: 'relative',
                      width: '113px',
                      height: '113px',
                      marginBottom: '40px'
                    }}
                  >
                    {/* Outer Diamond */}
                    <div
                      style={{
                        position: 'absolute',
                        width: '80px',
                        height: '80px',
                        left: '16.5px',
                        top: '16.5px',
                        background: '#041629',
                        border: `2px solid ${index === activeStep ? '#0CC0DF' : '#0D98BA'}`,
                        transform: 'rotate(45deg)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    
                    {/* Inner Diamond */}
                    <div
                      style={{
                        position: 'absolute',
                        width: '70px',
                        height: '70px',
                        left: '21.5px',
                        top: '21.5px',
                        background: '#041629',
                        border: `2px solid ${index === activeStep ? '#0CC0DF' : '#0D98BA'}`,
                        transform: 'rotate(45deg)',
                        transition: 'all 0.3s ease'
                      }}
                    />

                    {/* Number */}
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Poppins, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '30px',
                        lineHeight: '45px',
                        color: index === activeStep ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                        zIndex: 2,
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Card Container (Rotated) */}
                  <div
                    style={{
                      transform: 'rotate(-90deg)',
                      transformOrigin: 'center center',
                      width: '355px',
                      height: '417px'
                    }}
                  >
                    {/* Card Content */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '0px',
                        gap: '28px',
                        width: '417px',
                        height: '355px'
                      }}
                    >
                      {/* Text Content */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          padding: '0px',
                          gap: '6px',
                          width: '355px'
                        }}
                      >
                        {/* Title */}
                        <h3
                          style={{
                            width: '100%',
                            fontFamily: 'Poppins, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '24px',
                            lineHeight: '40px',
                            textAlign: 'center',
                            letterSpacing: '-0.03em',
                            color: '#FFFFFF',
                            margin: '0',
                            padding: '0'
                          }}
                        >
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p
                          style={{
                            width: '100%',
                            fontFamily: 'Lato, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '150%',
                            textAlign: 'center',
                            letterSpacing: '-0.006em',
                            color: '#FFFFFF',
                            margin: '0',
                            padding: '0'
                          }}
                        >
                          {step.description}
                        </p>
                      </div>

                      {/* Circle with Image */}
                      <div
                        style={{
                          position: 'relative',
                          width: '280px',
                          height: '280px',
                          minWidth: '280px'
                        }}
                      >
                        {/* Outer Circle with Gradient */}
                        <div
                          style={{
                            position: 'absolute',
                            width: '280px',
                            height: '280px',
                            left: '0',
                            top: '0',
                            background: 'linear-gradient(45deg, #0D99FF 8.45%, #105383 103.19%)',
                            boxShadow: '0px 0px 17px 6px #04091D',
                            borderRadius: '50%'
                          }}
                        />

                        {/* Inner Circle with Image */}
                        <div
                          style={{
                            position: 'absolute',
                            width: '265px',
                            height: '265px',
                            left: '7.5px',
                            top: '7.5px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            background: '#041629'
                          }}
                        >
                          <img
                            src={step.image}
                            alt={step.title}
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
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Hint (Optional) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '20px',
              fontFamily: 'Lato, sans-serif',
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out 1s'
            }}
          >
            <span>Scroll to explore our process</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L10 13L13 10" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 10 10)"/>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;