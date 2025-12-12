import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const StickySplitLayout = ({ servicePath = '/services/seo' }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const containerRef = useRef(null);
  const horizontalScrollRef = useRef(null);
  const scrollPosition = useRef(0);

  // Extract service type from path
  const getServiceType = (path) => {
    const segments = path.split('/');
    return segments[segments.length - 1] || 'seo';
  };

  const serviceType = getServiceType(servicePath);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  // Service-specific content
  const serviceContent = {
    seo: {
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
    },
    branding: {
      title: "Branding & Creative Design",
      subtitle: "Process",
      description: "Complete brand development that creates memorable identities, builds customer loyalty, and establishes a strong market presence through strategic design and messaging.",
      steps: [
        {
          id: 1,
          title: "Brand Discovery & Research",
          description: "Deep dive into your business values, target audience, and competitive landscape to establish a solid foundation for your brand identity.",
          imageUrl: "/images/webp/300.webp"
        },
        {
          id: 2,
          title: "Brand Strategy Development",
          description: "Creating a comprehensive brand strategy including positioning, messaging framework, and unique value proposition that resonates with your audience.",
          imageUrl: "/images/webp/301.webp"
        },
        {
          id: 3,
          title: "Visual Identity Design",
          description: "Development of logo, color palette, typography, and visual elements that create a cohesive and memorable brand appearance.",
          imageUrl: "/images/webp/302.webp"
        },
        {
          id: 4,
          title: "Creative Assets",
          description: "Creation of marketing materials, business cards, letterheads, and digital assets that reinforce your brand identity.",
          imageUrl: "/images/webp/303.webp"
        },
        {
          id: 5,
          title: "Review & Refinement",
          description: "Comprehensive brand guidelines ensuring consistent application across all touchpoints, from digital to print materials.",
          imageUrl: "/images/webp/304.webp"
        },
        {
          id: 6,
          title: "Launch & Implementation",
          description: "Strategic brand rollout across all channels with ongoing support to ensure successful brand adoption and market recognition.",
          imageUrl: "/images/webp/305.webp"
        }
      ]
    },
    'web-development': {
      title: "Web Development & Design",
      subtitle: "Process",
      description: "Custom web development solutions that combine cutting-edge technology with user-centered design to create fast, secure, and scalable websites.",
      steps: [
        {
          id: 1,
          title: "Requirements & Planning",
          description: "Detailed analysis of your business needs, technical requirements, and user goals to create a comprehensive development roadmap.",
          imageUrl: "/images/webp/306.webp"
        },
        {
          id: 2,
          title: "UX/UI Design",
          description: "User experience research and interface design that prioritizes usability, accessibility, and conversion optimization for your target audience.",
          imageUrl: "/images/webp/307.webp"
        },
        {
          id: 3,
          title: "Frontend Development",
          description: "Responsive, interactive frontend development using modern frameworks and technologies to ensure optimal performance across all devices.",
          imageUrl: "/images/webp/308.webp"
        },
        {
          id: 4,
          title: "Backend Development",
          description: "Robust backend architecture with secure databases, APIs, and server-side logic that supports your website's functionality and scalability.",
          imageUrl: "/images/webp/309.webp"
        },
        {
          id: 5,
          title: "Testing & Optimization",
          description: "Comprehensive testing including functionality, performance, security, and cross-browser compatibility to ensure flawless operation.",
          imageUrl: "/images/webp/310.webp"
        },
        {
          id: 6,
          title: "Analytics & Optimization",
          description: "Smooth deployment, ongoing maintenance, security updates, and performance monitoring to keep your website running optimally.",
          imageUrl: "/images/webp/311.webp"
        }
      ]
    }
  };

  // Get current service content or default to SEO
  const currentService = serviceContent[serviceType] || serviceContent.seo;
  const processSteps = currentService.steps;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Horizontal scroll handling with vertical scroll lock
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e) => {
      const container = containerRef.current;
      const scrollContainer = horizontalScrollRef.current;
      
      if (!container || !scrollContainer) return;

      const rect = container.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInView) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;

        // Scrolling down
        if (e.deltaY > 0) {
          if (currentScroll < maxScroll) {
            // Haven't reached the end - prevent vertical scroll and scroll horizontally
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
            setIsScrollLocked(true);
          } else {
            // Reached the end - allow vertical scroll to continue
            setIsScrollLocked(false);
          }
        } 
        // Scrolling up
        else if (e.deltaY < 0) {
          if (currentScroll > 0) {
            // Haven't reached the start - prevent vertical scroll and scroll horizontally
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
            setIsScrollLocked(true);
          } else {
            // Reached the start - allow vertical scroll to continue
            setIsScrollLocked(false);
          }
        }

        // Update active step based on scroll position
        const stepWidth = scrollContainer.scrollWidth / processSteps.length;
        const newActiveStep = Math.floor(scrollContainer.scrollLeft / stepWidth);
        setActiveStep(Math.min(Math.max(0, newActiveStep), processSteps.length - 1));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isMobile, processSteps.length]);

  // Desktop styles
  const desktopContainerStyle = {
    display: 'flex',
    width: '100%',
    position: 'relative',
    minHeight: '100vh',
    background: `url('/images/webp/bg process.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  const desktopRightSideStyle = {
    width: '100%',
    height: '100vh',
    position: 'sticky',
    top: 0,
    alignSelf: 'flex-start',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    overflow: 'hidden'
  };

  // Mobile styles (unchanged)
  const mobileContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    minHeight: 'auto',
    background: `url('/images/webp/scroll-bg.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll'
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

  // Desktop version with horizontal scroll
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
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: 'smooth',
              position: 'relative',
              gap: '120px',
              paddingLeft: '100px',
              paddingRight: '100px'
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
              width: `${((activeStep + 1) / processSteps.length) * 100}%`,
              height: '10px',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#0D98BA',
              zIndex: 2,
              transition: 'width 0.3s ease-out'
            }} />

            {processSteps.map((step, index) => (
              <div key={step.id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
                minWidth: '500px',
                position: 'relative',
                zIndex: 3
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
                    background: 'transparent'
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
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        fontSize: '22px',
                        fontWeight: 600,
                        color: index === activeStep ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                        fontFamily: 'Poppins, Inter, sans-serif'
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
                    transform: index === activeStep ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.5s ease'
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
                      margin: '0 0 10px 0'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Lato, Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      margin: 0
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