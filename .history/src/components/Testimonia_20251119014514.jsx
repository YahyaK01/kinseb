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
    // Show 2 cards at a time on desktop, 1 on mobile
    const maxSlide = window.innerWidth >= 768 ? testimonials.length - 2 : testimonials.length - 1;
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const canGoPrev = currentSlide > 0;
  const canGoNext = window.innerWidth >= 768 ? currentSlide < testimonials.length - 2 : currentSlide < testimonials.length - 1;

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
              What Our <span style={styles.headingGradient}>Clients</span> Are Saying
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
              transform: `translateX(-${currentSlide * (window.innerWidth >= 768 ? 544 : window.innerWidth >= 480 ? 320 : 280)}px)`,
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
    padding: '100px 20px 100px 20px',
    gap: '10px',
    isolation: 'isolate',
    width: '100%',
    maxWidth: '1440px',
    minHeight: '522px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '@media (min-width: 768px)': {
      padding: '100px 40px 100px 40px',
    },
    '@media (min-width: 1024px)': {
      padding: '100px 0px 100px 103px',
    },
  },

  ellipseLeft: {
    position: 'absolute',
    width: '200px',
    height: '100px',
    left: '50px',
    bottom: '30px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(100px)',
    zIndex: 0,
    pointerEvents: 'none',
    '@media (min-width: 768px)': {
      width: '346px',
      height: '171px',
      left: '254px',
      bottom: '67.79px',
      filter: 'blur(150px)',
    },
  },

  ellipseRight: {
    position: 'absolute',
    width: '200px',
    height: '100px',
    right: '50px',
    top: '0px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(100px)',
    zIndex: 1,
    pointerEvents: 'none',
    '@media (min-width: 768px)': {
      width: '346px',
      height: '171px',
      right: '125px',
      top: '0.5px',
      filter: 'blur(150px)',
    },
  },

  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '40px',
    width: '100%',
    maxWidth: '1413px',
    minHeight: '322px',
    zIndex: 2,
    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },

  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '30px',
    width: '100%',
    minHeight: 'auto',
    flexShrink: 0,
    '@media (min-width: 768px)': {
      width: '100%',
    },
    '@media (min-width: 1024px)': {
      width: '325px',
      minHeight: '322px',
    },
  },

  heading: {
    width: '100%',
    maxWidth: '400px',
    minHeight: 'auto',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '28px',
    lineHeight: '42px',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: '0',
    '@media (min-width: 480px)': {
      fontSize: '32px',
      lineHeight: '48px',
    },
    '@media (min-width: 768px)': {
      fontSize: '36px',
      lineHeight: '54px',
    },
    '@media (min-width: 1024px)': {
      width: '302px',
      fontSize: '40px',
      lineHeight: '60px',
      minHeight: '180px',
    },
  },

  headingGradient: {
    background: 'linear-gradient(90deg, #0D98BA 0%, #3AA1DE 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  paragraph: {
    width: '100%',
    maxWidth: '500px',
    minHeight: 'auto',
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.09px',
    color: '#FFFFFF',
    margin: '0',
    '@media (min-width: 768px)': {
      fontSize: '18px',
      lineHeight: '26px',
    },
    '@media (min-width: 1024px)': {
      width: '325px',
      minHeight: '52px',
    },
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
    width: '100%',
    maxWidth: '280px',
    overflow: 'hidden',
    position: 'relative',
    '@media (min-width: 480px)': {
      maxWidth: '320px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '650px',
    },
    '@media (min-width: 1024px)': {
      maxWidth: '1048px',
    },
  },

  testimonialsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '20px',
    minHeight: '294px',
    '@media (min-width: 768px)': {
      gap: '40px',
    },
  },

  testimonialCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
    gap: '10px',
    width: '280px',
    minHeight: '294px',
    background: '#041629',
    borderRadius: '10px',
    flexShrink: 0,
    boxSizing: 'border-box',
    '@media (min-width: 480px)': {
      width: '320px',
      padding: '25px',
    },
    '@media (min-width: 768px)': {
      width: '504px',
      padding: '30px',
    },
  },

  testimonialContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '100%',
    minHeight: '234px',
  },

  quoteIcon: {
    width: '35px',
    height: '33px',
    '@media (min-width: 768px)': {
      width: '43px',
      height: '41px',
    },
  },

  quoteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '10px',
    width: '100%',
    minHeight: '120px',
  },

  quoteText: {
    width: '100%',
    minHeight: '120px',
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#FFFFFF',
    margin: '0',
    '@media (min-width: 768px)': {
      fontSize: '15px',
      lineHeight: '24px',
    },
  },

  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '100%',
    minHeight: '57px',
  },

  companyLogo: {
    width: '150px',
    height: '30px',
    objectFit: 'contain',
    '@media (min-width: 768px)': {
      width: '183px',
      height: '35px',
    },
  },

  positionText: {
    width: '100%',
    height: '22px',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.03em',
    color: '#7D818D',
    margin: '0',
    '@media (min-width: 768px)': {
      fontSize: '15px',
      lineHeight: '50px',
    },
  },
};

export default TestimonialsSection;