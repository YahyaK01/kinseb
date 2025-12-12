import React, { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

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
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => {
      if (prev === 0) {
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => {
      if (prev === testimonials.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const getCardWidth = () => {
    if (isMobile) {
      return window.innerWidth - 40; // 20px padding on each side
    }
    return 504;
  };

  const getGap = () => {
    return isMobile ? 20 : 40;
  };

  const getTranslateX = () => {
    const cardWidth = getCardWidth();
    const gap = getGap();
    return currentSlide * (cardWidth + gap);
  };

  return (
    <div style={styles.wrapper} ref={sectionRef}>
      <div style={{
        ...styles.container,
        padding: isMobile ? '60px 20px' : '100px 0px 100px 103px',
      }}>
        {/* Background blur effects */}
        <div style={{
          ...styles.ellipseLeft,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s ease-out 0.3s',
          left: isMobile ? '20px' : '254px',
          bottom: isMobile ? '20px' : '67.79px',
          width: isMobile ? '200px' : '346px',
          height: isMobile ? '100px' : '171px',
        }}></div>
        <div style={{
          ...styles.ellipseRight,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s ease-out 0.3s',
          right: isMobile ? '20px' : '125px',
          top: isMobile ? '20px' : '0.5px',
          width: isMobile ? '200px' : '346px',
          height: isMobile ? '100px' : '171px',
        }}></div>

        {/* Main content wrapper */}
        <div style={{
          ...styles.mainContent,
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '30px' : '40px',
        }}>
          {/* Left side - Header and navigation */}
          <div style={{
            ...styles.leftSection,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
            width: isMobile ? '100%' : '325px',
            gap: isMobile ? '15px' : '30px',
          }}>
            <h2 style={{
              ...styles.heading,
              width: isMobile ? '100%' : '302px',
              fontSize: isMobile ? '28px' : '40px',
              lineHeight: isMobile ? '42px' : '60px',
              minHeight: isMobile ? 'auto' : '180px',
            }}>
              What Our <span style={styles.headingGradient}>Clients</span> Are Saying
            </h2>

            <p style={{
              ...styles.paragraph,
              width: isMobile ? '100%' : '325px',
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: isMobile ? '24px' : '26px',
              minHeight: isMobile ? 'auto' : '52px',
            }}>
              Real results from businesses that transformed their growth with strategic optimization.
            </p>

            <div style={styles.navigationButtons}>
              <button 
                onClick={handlePrevSlide}
                style={{
                  ...styles.navButton,
                  opacity: 1,
                  cursor: 'pointer',
                  transform: 'scale(1)',
                }}
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
                style={{
                  ...styles.navButton,
                  opacity: 1,
                  cursor: 'pointer',
                  transform: 'scale(1)',
                }}
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
          <div style={{
            ...styles.cardsWrapper,
            width: isMobile ? '100%' : '1048px',
          }}>
            <div style={{
              ...styles.testimonialsContainer,
              transform: `translateX(-${getTranslateX()}px)`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              gap: `${getGap()}px`,
            }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  style={{
                    ...styles.testimonialCard,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 1s ease-out ${0.6 + (index * 0.1)}s, transform 1s ease-out ${0.6 + (index * 0.1)}s`,
                    width: isMobile ? `${getCardWidth()}px` : '504px',
                    padding: isMobile ? '20px' : '30px',
                    minHeight: isMobile ? 'auto' : '294px',
                  }}
                >
                  <div style={{
                    ...styles.testimonialContent,
                    width: isMobile ? '100%' : '444px',
                    minHeight: isMobile ? 'auto' : '234px',
                  }}>
                    {/* Quote icon */}
                    <img 
                      src="/images/6.svg" 
                      alt="Quote" 
                      style={{
                        ...styles.quoteIcon,
                        width: isMobile ? '35px' : '43px',
                        height: isMobile ? '33px' : '41px',
                      }}
                    />

                    {/* Testimonial text */}
                    <div style={{
                      ...styles.quoteContainer,
                      width: isMobile ? '100%' : '444px',
                      minHeight: isMobile ? 'auto' : '120px',
                    }}>
                      <p style={{
                        ...styles.quoteText,
                        width: isMobile ? '100%' : '444px',
                        minHeight: isMobile ? 'auto' : '120px',
                        fontSize: isMobile ? '14px' : '15px',
                        lineHeight: isMobile ? '22px' : '24px',
                      }}>
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Company info */}
                    <div style={{
                      ...styles.companyInfo,
                      width: isMobile ? '100%' : '324px',
                      minHeight: isMobile ? 'auto' : '57px',
                    }}>
                      <img 
                        src={testimonial.logo} 
                        alt="Company Logo" 
                        style={{
                          ...styles.companyLogo,
                          width: isMobile ? '150px' : '183px',
                          height: isMobile ? '29px' : '35px',
                        }}
                      />
                      <p style={{
                        ...styles.positionText,
                        width: isMobile ? '100%' : '324px',
                        fontSize: isMobile ? '13px' : '15px',
                        lineHeight: isMobile ? '20px' : '50px',
                      }}>
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
    gap: '10px',
    isolation: 'isolate',
    width: '100%',
    maxWidth: '1440px',
    minHeight: '522px',
    overflow: 'hidden',
  },

  ellipseLeft: {
    position: 'absolute',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(150px)',
    zIndex: 0,
    pointerEvents: 'none',
  },

  ellipseRight: {
    position: 'absolute',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(150px)',
    zIndex: 1,
    pointerEvents: 'none',
  },

  mainContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px',
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
    flexShrink: 0,
  },

  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
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
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
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
    overflow: 'hidden',
    position: 'relative',
  },

  testimonialsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    minHeight: '294px',
  },

  testimonialCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
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
  },

  quoteIcon: {
    objectFit: 'contain',
  },

  quoteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '10px',
  },

  quoteText: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
    margin: '0',
  },

  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
  },

  companyLogo: {
    objectFit: 'contain',
  },

  positionText: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.03em',
    color: '#7D818D',
    margin: '0',
  },
};

export default TestimonialsSection;