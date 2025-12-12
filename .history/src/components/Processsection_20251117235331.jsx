import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const StickySplitLayout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const horizontalScrollRef = useRef(null);
  const isAutoScrolling = useRef(false);
  const lastScrollTime = useRef(Date.now());

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  // Only SEO content
  const currentService = {
    title: "SEO & Content Marketing",
    subtitle: "Process",
    description: "Comprehensive SEO strategy that drives organic traffic, improves search rankings, and increases your online visibility through data-driven optimization techniques.",
    steps: [
      {
        id: 1,
        title: "Strategy & Planning",
        description: "Comprehensive keyword analysis and competitive research to identify high-value opportunities that align with your business goals and target audience.",
        imageUrl: "/images/webp/201.webp"
      },
      {
        id: 2,
        title: "Content Creation",
        description: "Strategic content development that targets your key phrases while providing genuine value to your audience and establishing topical authority.",
        imageUrl: "/images/webp/202.webp"
      },
      {
        id: 3,
        title: "Technical SEO Optimization",
        description: "Complete technical analysis and optimization of site structure, page speed, crawlability, and indexation to ensure optimal search engine performance.",
        imageUrl: "/images/webp/203.webp"
      },
      {
        id: 4,
        title: "On-Page & Off-Page",
        description: "Optimization of meta tags, internal linking, and content structure combined with strategic link building and digital PR campaigns.",
        imageUrl: "/images/webp/208.webp"
      },
      {
        id: 5,
        title: "Performance Monitoring",
        description: "Continuous tracking of rankings, organic traffic, and conversions with detailed reporting and ongoing optimization recommendations.",
        imageUrl: "/images/webp/204.webp"
      },
      {
        id: 6,
        title: "ROI Analysis & Scaling",
        description: "Regular performance analysis and strategy refinement to maximize return on investment and identify new growth opportunities.",
        imageUrl: "/images/webp/205.webp"
      }
    ]
  };

  const processSteps = currentService.steps;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth bidirectional vertical scroll to horizontal scroll effect
  useEffect(() => {
    if (isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking && !isAutoScrolling.current) {
        window.requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateScrollPosition = () => {
      const container = containerRef.current;
      const scrollContainer = horizontalScrollRef.current;
      
      if (!container || !scrollContainer) return;

      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress with smooth easing
      const scrollY = window.scrollY;
      const startScroll = containerTop - windowHeight * 0.3;
      const endScroll = containerTop + containerHeight - windowHeight;
      
      const progress = (scrollY - startScroll) / (endScroll - startScroll);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      // Apply smooth easing function for both forward and backward
      const easedProgress = easeInOutQuad(clampedProgress);
      setScrollProgress(easedProgress);

      // Calculate horizontal scroll with easing
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const horizontalScroll = easedProgress * maxScroll;
      
      // Smooth scroll application
      scrollContainer.scrollLeft = horizontalScroll;

      // Update active step with smooth transition
      const stepWidth = scrollContainer.scrollWidth / processSteps.length;
      const newActiveStep = Math.floor(horizontalScroll / stepWidth);
      setActiveStep(Math.min(Math.max(0, newActiveStep), processSteps.length - 1));

      // Auto-scroll to next section at 99%
      if (easedProgress >= 0.99) {
        const currentTime = Date.now();
        if (currentTime - lastScrollTime.current > 1000) {
          const nextSection = container.nextElementSibling;
          if (nextSection) {
            isAutoScrolling.current = true;
            lastScrollTime.current = currentTime;
            window.scrollTo({
              top: nextSection.offsetTop,
              behavior: 'smooth'
            });
            
            setTimeout(() => {
              isAutoScrolling.current = false;
            }, 1000);
          }
        }
      }
    };

    // Smoother easing function for both directions
    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollPosition(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, processSteps.length]);

  // Desktop styles with lower positioning
  const desktopContainerStyle = {
    display: 'flex',
    width: '100%',
    position: 'relative',
    minHeight: '600vh',
    background: `url('/images/webp/bg process.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    marginTop: '100px'
  };

  const desktopRightSideStyle = {
    width: '100%',
    height: '100vh',
    position: 'sticky',
    top: '100px',
    alignSelf: 'flex-start',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    overflow: 'hidden'
  };

  // Mobile styles
  const mobileContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    minHeight: 'auto',
    background: `url('/images/webp/scroll-bg.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
    marginTop: '50px'
  };

  const mobileHeaderStyle = {
    width: '100%',
    padding: '40px 20px',
    boxSizing: 'border-box',
    fontFamily: 'Inter, Arial, sans-serif',
    backgroundColor: 'transparent',
    textAlign: 'center'
  };

  const mobileContentStyle = {
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: 'transparent'
  };

  if (isMobile) {
    return (
      <>
        <div ref={containerRef} style={mobileContainerStyle}>
          {/* Mobile Header */}
          <div style={mobileHeaderStyle}>
            <h1 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: '34px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: '0 0 8px 0'
            }}>
              {currentService.title}
            </h1>
            
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: '34px',
              color: '#00d4ff',
              margin: '0 0 20px 0'
            }}>
              {currentService.subtitle}
            </div>

            <p style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0 0 25px 0',
              maxWidth: '300px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {currentService.description}
            </p>

            <button onClick={handleContactClick} style={{
              width: '180px',
              height: '45px',
              background: '#00d4ff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a2847',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.3s ease'
            }}>
              Request A Quote
            </button>
          </div>

          {/* Mobile Content */}
          <div style={mobileContentStyle}>
            {processSteps.map((step, index) => (
              <div key={step.id} style={{
                width: '100%',
                padding: '30px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
                boxSizing: 'border-box'
              }}>
                {/* Mobile Step Number */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  marginBottom: '20px',
                  position: 'relative',
                  zIndex: 3
                }}>
                  {/* Outer Circle */}
                  <div style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid #0D98BA',
                    background: 'transparent'
                  }}>
                    {/* Inner Circle */}
                    <div style={{
                      position: 'absolute',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '2px solid #0D98BA',
                      background: '#041629',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        fontFamily: 'Poppins, Inter, sans-serif'
                      }}>
                        {step.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Image Circle */}
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #0D99FF 8.45%, #105383 103.19%)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '184px',
                    height: '184px',
                    borderRadius: '50%',
                    backgroundImage: `url(${step.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }} />
                </div>

                {/* Mobile Text Content */}
                <div style={{
                  textAlign: 'center',
                  maxWidth: '280px'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '26px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: '0 0 15px 0'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>

                {/* Mobile Divider Line */}
                {index < processSteps.length - 1 && (
                  <div style={{
                    width: '6px',
                    height: '60px',
                    background: '#0D98BA',
                    margin: '30px 0 0 0',
                    opacity: 0.6
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Desktop version with smooth bidirectional scroll
  return (
    <>
      <style>
        {`
          .horizontal-scroll-container::-webkit-scrollbar {
            display: none;
          }
          
          .horizontal-scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          @keyframes ripple1 {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
          
          @keyframes ripple2 {
            0% {
              transform: scale(1);
              opacity: 0.4;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          @keyframes ripple3 {
            0% {
              transform: scale(1);
              opacity: 0.2;
            }
            100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Progress indicator */}
      <div style={{
        position: 'fixed',
        top: '120px',
        right: '20px',
        backgroundColor: scrollProgress >= 0.99 ? 'rgba(16, 185, 129, 0.9)' : 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 1000,
        transition: 'background-color 0.3s ease',
        fontFamily: 'Inter, sans-serif'
      }}>
        {scrollProgress >= 0.99 ? '✓ Complete!' : `${Math.round(scrollProgress * 100)}%`}
      </div>

      <div ref={containerRef} style={desktopContainerStyle}>
        {/* Right Side - Horizontal Scroll - Full Width */}
        <div style={desktopRightSideStyle}>
          <div
            ref={horizontalScrollRef}
            className="horizontal-scroll-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              overflowX: 'hidden',
              overflowY: 'hidden',
              scrollBehavior: 'auto',
              position: 'relative',
              gap: '120px',
              paddingLeft: '100px',
              paddingRight: '100px',
              willChange: 'scroll-position'
            }}
          >
            {/* Horizontal Progress Line Background */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '10px',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#979797',
              zIndex: 1
            }} />

            {/* Horizontal Progress Line Active */}
            <div style={{
              position: 'absolute',
              width: `${scrollProgress * 100}%`,
              height: '10px',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#0D98BA',
              zIndex: 2,
              transition: 'width 0.1s linear'
            }} />

            {processSteps.map((step, index) => (
              <div key={step.id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
                minWidth: '500px',
                position: 'relative',
                zIndex: 3,
                opacity: index === activeStep ? 1 : 0.6,
                transform: index === activeStep ? 'scale(1)' : 'scale(0.95)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}>
                {/* Step Number with Circles */}
                <div style={{
                  position: 'relative',
                  width: '80px',
                  height: '80px',
                  zIndex: 4
                }}>
                  {/* Ripple Effect for Active Step */}
                  {index === activeStep && (
                    <>
                      <div style={{
                        position: 'absolute',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '2px solid #0D98BA',
                        background: 'transparent',
                        animation: 'ripple1 2s infinite',
                        opacity: 0.6
                      }} />
                      <div style={{
                        position: 'absolute',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '2px solid #0D98BA',
                        background: 'transparent',
                        animation: 'ripple2 2s infinite',
                        opacity: 0.4
                      }} />
                      <div style={{
                        position: 'absolute',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '2px solid #0D98BA',
                        background: 'transparent',
                        animation: 'ripple3 2s infinite',
                        opacity: 0.2
                      }} />
                    </>
                  )}
                  
                  {/* Outer Circle */}
                  <div style={{
                    position: 'absolute',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    border: '2px solid #0D98BA',
                    background: 'transparent',
                    transition: 'all 0.3s ease'
                  }}>
                    {/* Inner Circle */}
                    <div style={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      border: '2px solid #0D98BA',
                      background: index === activeStep ? '#04091D' : '#041629',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{
                        fontSize: '22px',
                        fontWeight: 600,
                        color: index === activeStep ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                        fontFamily: 'Poppins, Inter, sans-serif',
                        transition: 'color 0.3s ease'
                      }}>
                        {step.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  {/* Circle with Image */}
                  <div style={{
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #0D99FF 8.45%, #105383 103.19%)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    transform: index === activeStep ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.4s ease'
                  }}>
                    <div style={{
                      width: '260px',
                      height: '260px',
                      borderRadius: '50%',
                      backgroundImage: `url(${step.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                  </div>

                  {/* Text Content */}
                  <div style={{
                    textAlign: 'center',
                    maxWidth: '400px'
                  }}>
                    <h3 style={{
                      fontFamily: 'Poppins, Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '24px',
                      lineHeight: '30px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      margin: '0 0 10px 0',
                      transition: 'all 0.3s ease'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Lato, Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      margin: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StickySplitLayout;