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
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= testimonials.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

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
              What Our <span style={styles.headingGradient}>Clients</span>
              <br />
              Are Saying
            </h2>

            <p style={styles.paragraph}>
              Real results from businesses that transformed their growth with strategic optimization.
            </p>

            <div style={styles.navigationButtons}>
              <button 
                onClick={handlePrevSlide}
                style={styles.navButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path 
                    d="M18.75 22.5L11.25 15L18.75 7.5" 
                    stroke="#0D98BA" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button 
                onClick={handleNextSlide}
                style={styles.navButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path 
                    d="M11.25 7.5L18.75 15L11.25 22.5" 
                    stroke="#0D98BA" 
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
              transform: `translateX(-${currentSlide * (window.innerWidth <= 768 ? 100 : window.innerWidth <= 1024 ? 50 : 33.33)}%)`,
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
    padding: '100px 20px',
    paddingLeft: 'clamp(20px, 7vw, 103px)',
    gap: '10px',
    isolation: 'isolate',
    width: '100%',
    maxWidth: '1440px',
    minHeight: '522px',
    overflow: 'hidden',
  },

  ellipseLeft: {
    position: 'absolute',
    width: 'clamp(150px, 24vw, 346px)',
    height: 'clamp(75px, 12vw, 171px)',
    left: 'clamp(50px, 17.6vw, 254px)',
    bottom: '67.79px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(150px)',
    zIndex: 0,
    pointerEvents: 'none',
  },

  ellipseRight: {
    position: 'absolute',
    width: 'clamp(150px, 24vw, 346px)',
    height: 'clamp(75px, 12vw, 171px)',
    right: 'clamp(20px, 8.7vw, 125px)',
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
    gap: 'clamp(20px, 3vw, 40px)',
    width: '100%',
    maxWidth: '1413px',
    minHeight: '322px',
    zIndex: 2,
    flexWrap: 'wrap',
  },

  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: 'clamp(20px, 2vw, 30px)',
    width: '100%',
    maxWidth: 'clamp(280px, 100%, 325px)',
    minHeight: '322px',
    flexShrink: 0,
  },

  heading: {
    width: '100%',
    maxWidth: '302px',
    minHeight: 'clamp(120px, 15vw, 180px)',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 'clamp(28px, 3.5vw, 40px)',
    lineHeight: 'clamp(42px, 5vw, 60px)',
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
    width: '100%',
    maxWidth: '325px',
    minHeight: '52px',
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 'clamp(16px, 1.8vw, 18px)',
    lineHeight: 'clamp(24px, 2.6vw, 26px)',
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
    cursor: 'pointer',
  },

  cardsWrapper: {
    width: '100%',
    maxWidth: 'clamp(300px, 70vw, 1048px)',
    overflow: 'hidden',
    position: 'relative',
    flex: 1,
  },

  testimonialsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: 'clamp(20px, 3vw, 40px)',
    minHeight: '294px',
    width: '100%',
  },

  testimonialCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 'clamp(20px, 2.5vw, 30px)',
    gap: '10px',
    width: '100%',
    minWidth: 'clamp(280px, 90vw, 504px)',
    maxWidth: '504px',
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
    width: '100%',
    minHeight: '234px',
  },

  quoteIcon: {
    width: 'clamp(35px, 4vw, 43px)',
    height: 'clamp(33px, 4vw, 41px)',
  },

  quoteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    fontSize: 'clamp(14px, 1.5vw, 15px)',
    lineHeight: 'clamp(22px, 2.4vw, 24px)',
    color: '#FFFFFF',
    margin: '0',
  },

  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '100%',
    maxWidth: '324px',
    minHeight: '57px',
    gap: '5px',
  },

  companyLogo: {
    width: 'clamp(140px, 18vw, 183px)',
    height: 'clamp(28px, 3.5vw, 35px)',
    objectFit: 'contain',
  },

  positionText: {
    width: '100%',
    maxWidth: '324px',
    height: 'auto',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 'clamp(13px, 1.5vw, 15px)',
    lineHeight: 'clamp(20px, 3vw, 50px)',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.03em',
    color: '#7D818D',
    margin: '0',
  },
};

// Add media query styles for better control
const mediaStyles = `
  @media (max-width: 1024px) {
    .testimonials-main-content {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
  }
  
  @media (max-width: 768px) {
    .testimonials-container {
      padding: 60px 20px !important;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = mediaStyles;
  document.head.appendChild(styleSheet);
}

export default TestimonialsSection;