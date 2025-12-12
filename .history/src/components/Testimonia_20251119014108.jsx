import React, { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "Their mix of data analytics and behavioral psychology changed how we make every marketing decision. Each A/B test gave us insights worth gold. Their mix of data analytics and behavioral psychology changed how we make every marketing decision. Each A/B test gave us insights worth gold.",
      logo: "/images/company-logo-1.png",
      position: "Senior Director of Digital Product, AuraBloom"
    },
    {
      id: 2,
      quote: "Their mix of data analytics and behavioral psychology changed how we make every marketing decision. Each A/B test gave us insights worth gold. Their mix of data analytics and behavioral psychology changed how we make every marketing decision. Each A/B test gave us insights worth gold.",
      logo: "/images/company-logo-2.png",
      position: "Senior Director of Digital Product, AuraBloom"
    },
    {
      id: 3,
      quote: "Working with this team has been transformative. The insights they provided helped us increase our conversion rate by 45% in just three months.",
      logo: "/images/company-logo-3.png",
      position: "Marketing Director, TechCorp"
    },
    {
      id: 4,
      quote: "Their strategic approach to CRO is unmatched. Every recommendation is backed by solid data and psychological principles that actually work.",
      logo: "/images/company-logo-4.png",
      position: "CEO, Digital Solutions Inc"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
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

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleNextSlide = () => {
    // Show 2 cards at a time, so max slide is testimonials.length - 2
    if (currentSlide < testimonials.length - 2) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < testimonials.length - 2;

  return (
    <div style={styles.wrapper} ref={sectionRef}>
      <div style={styles.container}>
        {/* Background blur effects */}
        <div style={{
          ...styles.ellipseLeft,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s ease-out 0.3s'
        }}></div>
        <div style={{
          ...styles.ellipseRight,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s ease-out 0.3s'
        }}></div>

        {/* Main content wrapper */}
        <div style={styles.mainContent}>
          {/* Left side - Header and navigation */}
          <div style={{
            ...styles.leftSection,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s'
          }}>
            <h2 style={styles.heading}>
              <span style={styles.headingGradient}>Client Success</span>
              <br />
              Stories
            </h2>

            <p style={styles.paragraph}>
              Real results from businesses that transformed their growth with strategic optimization.
            </p>

            <div style={styles.navigationButtons}>
              <button 
                onClick={handlePrevSlide}
                style={{
                  ...styles.navButton,
                  opacity: canGoPrev ? 1 : 0.3,
                  cursor: canGoPrev ? 'pointer' : 'not-allowed',
                  transform: canGoPrev ? 'scale(1)' : 'scale(0.9)',
                }}
                disabled={!canGoPrev}
                onMouseEnter={(e) => {
                  if (canGoPrev) {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (canGoPrev) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
                onMouseDown={(e) => {
                  if (canGoPrev) {
                    e.currentTarget.style.transform = 'scale(0.95)';
                  }
                }}
                onMouseUp={(e) => {
                  if (canGoPrev) {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }
                }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path 
                    d="M18.75 22.5L11.25 15L18.75 7.5" 
                    stroke={canGoPrev ? "#0D98BA" : "#444"} 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button 
                onClick={handleNextSlide}
                style={{
                  ...styles.navButton,
                  opacity: canGoNext ? 1 : 0.3,
                  cursor: canGoNext ? 'pointer' : 'not-allowed',
                  transform: canGoNext ? 'scale(1)' : 'scale(0.9)',
                }}
                disabled={!canGoNext}
                onMouseEnter={(e) => {
                  if (canGoNext) {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (canGoNext) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
                onMouseDown={(e) => {
                  if (canGoNext) {
                    e.currentTarget.style.transform = 'scale(0.95)';
                  }
                }}
                onMouseUp={(e) => {
                  if (canGoNext) {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }
                }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path 
                    d="M11.25 7.5L18.75 15L11.25 22.5" 
                    stroke={canGoNext ? "#0D98BA" : "#444"} 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Testimonial cards with overflow wrapper */}
          <div style={styles.cardsWrapper}>
            <div style={{
              ...styles.testimonialsContainer,
              transform: `translateX(-${currentSlide * 544}px)`, // 504px card width + 40px gap
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  style={{
                    ...styles.testimonialCard,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 1s ease-out ${0.6 + (index * 0.1)}s, transform 1s ease-out ${0.6 + (index * 0.1)}s`
                  }}
                >
                  <div style={styles.testimonialContent}>
                    {/* Quote icon */}
                    <img 
                      src="/images/6.svg" 
                      alt="Quote" 
                      style={styles.quoteIcon}
                    />

                    {/* Testimonial text */}
                    <div style={styles.quoteContainer}>
                      <p style={styles.quoteText}>
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Company info */}
                    <div style={styles.companyInfo}>
                      <img 
                        src={testimonial.logo} 
                        alt="Company Logo" 
                        style={styles.companyLogo}
                      />
                      <p style={styles.positionText}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020B15',
  },

  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '100px 0px 100px 103px',
    gap: '10px',
    isolation: 'isolate',
    width: '100%',
    maxWidth: '1440px',
    minHeight: '522px',
    overflow: 'hidden',
  },

  ellipseLeft: {
    position: 'absolute',
    width: '346px',
    height: '171px',
    left: '254px',
    bottom: '67.79px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(150px)',
    zIndex: 0,
    pointerEvents: 'none',
  },

  ellipseRight: {
    position: 'absolute',
    width: '346px',
    height: '171px',
    right: '125px',
    top: '0.5px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(150px)',
    zIndex: 1,
    pointerEvents: 'none',
  },

  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '40px',
    width: '100%',
    maxWidth: '1413px',
    minHeight: '322px',
    zIndex: 2,
  },

  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '30px',
    width: '325px',
    minHeight: '322px',
    flexShrink: 0,
  },

  heading: {
    width: '302px',
    minHeight: '180px',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '60px',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: '0',
  },

  headingGradient: {
    background: 'linear-gradient(90deg, #0D98BA 0%, #3AA1DE 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  paragraph: {
    width: '325px',
    minHeight: '52px',
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '-0.09px',
    color: '#FFFFFF',
    margin: '0',
  },

  navigationButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '5px',
    width: '65px',
    height: '30px',
  },

  navButton: {
    width: '30px',
    height: '30px',
    background: 'transparent',
    border: 'none',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
  },

  cardsWrapper: {
    width: '1048px',
    overflow: 'hidden',
    position: 'relative',
  },

  testimonialsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '40px',
    minHeight: '294px',
  },

  testimonialCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '30px',
    gap: '10px',
    width: '504px',
    minHeight: '294px',
    background: '#041629',
    borderRadius: '10px',
    flexShrink: 0,
    boxSizing: 'border-box',
  },

  testimonialContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '444px',
    minHeight: '234px',
  },

  quoteIcon: {
    width: '43px',
    height: '41px',
  },

  quoteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '10px',
    width: '444px',
    minHeight: '120px',
  },

  quoteText: {
    width: '444px',
    minHeight: '120px',
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '24px',
    color: '#FFFFFF',
    margin: '0',
  },

  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '324px',
    minHeight: '57px',
  },

  companyLogo: {
    width: '183px',
    height: '35px',
    objectFit: 'contain',
  },

  positionText: {
    width: '324px',
    height: '22px',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.03em',
    color: '#7D818D',
    margin: '0',
  },
};

export default TestimonialsSection;