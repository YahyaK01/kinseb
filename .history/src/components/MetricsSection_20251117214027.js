import React, { useState, useEffect, useRef } from 'react';

const MetricsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Hardcoded content
  const content = {
    heading: "Results That Speak For Themselves",
    supportingText: "Our data-driven CRO strategies deliver measurable impact across industries",
    metrics: [
      { number: 45, suffix: "%", text: "Average Conversion Increase" },
      { number: 3.2, suffix: "x", text: "ROI Improvement" },
      { number: 89, suffix: "%", text: "Client Satisfaction Rate" }
    ]
  };

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            startCounterAnimation();
          }
        });
      },
      {
        threshold: 0.2,
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

  // Counter animation function
  const startCounterAnimation = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    content.metrics.forEach((metric, index) => {
      let currentStep = 0;
      const increment = metric.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(increment * currentStep, metric.number);
        
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          newCounters[index] = newValue;
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  };

  // Format counter value
  const formatCounter = (value, index) => {
    const metric = content.metrics[index];
    if (metric.suffix === "x") {
      return value.toFixed(1);
    }
    return Math.round(value);
  };

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
          
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes dividerGrow {
            from {
              height: 0;
              opacity: 0;
            }
            to {
              height: 112px;
              opacity: 1;
            }
          }
        `}
      </style>

      <section
        ref={sectionRef}
        style={{
          width: '100%',
          minHeight: '462px',
          background: '#04091D',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '96px 32px',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Header Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '20px',
            width: '100%',
            maxWidth: '768px',
            marginBottom: '64px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.2s'
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 'clamp(28px, 5vw, 36px)',
              lineHeight: '1.22',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: '0',
              width: '100%'
            }}
          >
            {content.heading}
          </h2>

          {/* Supporting Text */}
          <p
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 'clamp(16px, 3vw, 20px)',
              lineHeight: '1.5',
              textAlign: 'center',
              color: '#FFFFFF',
              margin: '0',
              width: '100%',
              maxWidth: '836px',
              opacity: '0.9'
            }}
          >
            {content.supportingText}
          </p>
        </div>

        {/* Metrics Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px',
            gap: '16px',
            width: '100%',
            maxWidth: '1216px',
            flexWrap: 'wrap'
          }}
        >
          {content.metrics.map((metric, index) => (
            <React.Fragment key={index}>
              {/* Metric Item */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '12px',
                  minWidth: '200px',
                  flex: '1',
                  maxWidth: '254px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${0.4 + index * 0.2}s`
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: 'clamp(48px, 8vw, 60px)',
                    lineHeight: '1.2',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    width: '100%'
                  }}
                >
                  {formatCounter(counters[index], index)}
                  {metric.suffix}
                </div>

                {/* Text */}
                <div
                  style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.56',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    width: '100%'
                  }}
                >
                  {metric.text}
                </div>
              </div>

              {/* Divider (not after last item) */}
              {index < content.metrics.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    height: isVisible ? '112px' : '0px',
                    background: '#E9EAEB',
                    opacity: isVisible ? 0.3 : 0,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${0.6 + index * 0.2}s`,
                    display: window.innerWidth < 768 ? 'none' : 'block'
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default MetricsSection;