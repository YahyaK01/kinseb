import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const StickySplitLayout = ({ servicePath = '/services/seo' }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

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
          title: "On-Page & Off-Page ",
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
    },
    'social-media': {
      title: "Social Media Marketing",
      subtitle: "Process",
      description: "Strategic social media management that builds brand awareness, engages your audience, and drives meaningful business results across all platforms.",
      steps: [
        {
          id: 1,
          title: "Social Media Audit",
          description: "Comprehensive analysis of your current social presence, competitor research, and audience insights to inform our strategy.",
          imageUrl: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 2,
          title: "Strategy Development",
          description: "Custom social media strategy aligned with your business goals, including platform selection, content themes, and engagement tactics.",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 3,
          title: "Content Creation",
          description: "Engaging visual and written content tailored to each platform's audience and best practices, including graphics, videos, and copy.",
          imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 4,
          title: "Community Management",
          description: "Active engagement with your audience through comments, messages, and community building to foster brand loyalty and trust.",
          imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 5,
          title: "Paid Social Campaigns",
          description: "Targeted advertising campaigns across social platforms to expand reach, drive traffic, and generate leads and conversions.",
          imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 6,
          title: "Analytics & Reporting",
          description: "Detailed performance tracking and reporting with insights on engagement, reach, conversions, and ROI to optimize future campaigns.",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center"
        }
      ]
    },
    'paid-search': {
      title: "Paid Search Marketing",
      subtitle: "Process",
      description: "Data-driven paid search campaigns that maximize ROI through strategic keyword targeting, compelling ad copy, and continuous optimization.",
      steps: [
        {
          id: 1,
          title: "Account Audit & Strategy",
          description: "Comprehensive analysis of existing campaigns and competitive landscape to develop a high-performance paid search strategy.",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 2,
          title: "Keyword Research & Selection",
          description: "Advanced keyword research using industry tools to identify high-converting search terms that align with your business objectives.",
          imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 3,
          title: "Campaign Setup & Structure",
          description: "Strategic campaign architecture with organized ad groups, targeted keywords, and optimized settings for maximum performance.",
          imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 4,
          title: "Ad Copy & Landing Pages",
          description: "Compelling ad copy and optimized landing pages designed to improve Quality Score, click-through rates, and conversion rates.",
          imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 5,
          title: "Bid Management & Optimization",
          description: "Continuous bid optimization, A/B testing, and performance monitoring to maximize ad spend efficiency and campaign ROI.",
          imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center"
        },
        {
          id: 6,
          title: "Reporting & Performance Analysis",
          description: "Detailed performance reports with insights on cost-per-click, conversion rates, and recommendations for ongoing improvement.",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center"
        }
      ]
    },
    'email-marketing': {
      title: "Email Marketing Automation",
      subtitle: "Process",
      description: "Strategic email marketing campaigns that nurture leads, retain customers, and drive revenue through personalized, automated communication sequences.",
      steps: [
        {
          id: 1,
          title: "Audience Research & Segmentation",
          description: "Analysis of your existing email list, audience segmentation, and development of targeted messaging strategies for each segment.",
          imageUrl: "/images/webp/306.webp"
        },
        {
          id: 2,
          title: "Campaign Strategy",
          description: "Comprehensive email marketing strategy including campaign types, frequency, automation sequences, and performance goals.",
          imageUrl: "/images/webp/307.webp"
        },
        {
          id: 3,
          title: "Email Design & Templates",
          description: "Mobile-responsive email templates that align with your brand identity and optimize for engagement and conversions.",
          imageUrl: "/images/webp/308.webp"
        },
        {
          id: 4,
          title: "Automation Setup",
          description: "Advanced email automation including welcome sequences, abandoned cart recovery, nurture campaigns, and behavioral triggers.",
          imageUrl: "/images/webp/309.webp"
        },
        {
          id: 5,
          title: "A/B Testing & Optimization",
          description: "Continuous testing of subject lines, content, send times, and call-to-actions to improve open rates and click-through rates.",
          imageUrl: "/images/webp/310.webp"
        },
        {
          id: 6,
          title: "Analytics & List Growth",
          description: "Detailed performance analytics and strategic list growth tactics to expand your audience and maximize email marketing ROI.",
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

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerHeight = window.innerHeight;
        const scrollProgress = Math.max(0, -rect.top) / (rect.height - containerHeight);
        const currentStep = Math.floor(scrollProgress * processSteps.length);
        setActiveStep(Math.min(Math.max(0, currentStep), processSteps.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [processSteps.length]);

  // Desktop styles - Full width now
  const desktopContainerStyle = {
    display: 'flex',
    width: '100%',
    position: 'relative',
    minHeight: `${processSteps.length * 80}vh`,
    background: `url('/images/webp/bg process.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    paddingTop: '100px' // Move content upward
  };

  const desktopContentStyle = {
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: 'transparent'
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
            }}
            onTouchStart={(e) => {
              e.target.style.background = '#00b8e6';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onTouchEnd={(e) => {
              e.target.style.background = '#00d4ff';
              e.target.style.transform = 'translateY(0px)';
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
                  {/* Ripple Effect for Active Step */}
                  {index === activeStep && (
                    <>
                      <div style={{
                        position: 'absolute',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: '2px solid #0D98BA',
                        background: 'transparent',
                        animation: 'mobileRipple1 2s infinite',
                        opacity: 0.6
                      }} />
                      <div style={{
                        position: 'absolute',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: '2px solid #0D98BA',
                        background: 'transparent',
                        animation: 'mobileRipple2 2s infinite',
                        opacity: 0.4
                      }} />
                      <div style={{
                        position: 'absolute',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: '2px solid #0D98BA',
                        background: 'transparent',
                        animation: 'mobileRipple3 2s infinite',
                        opacity: 0.2
                      }} />
                    </>
                  )}

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
                      background: index === activeStep ? '#04091D' : '#041629',
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
                        color: index === activeStep ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                        fontFamily: 'Poppins, Inter, sans-serif'
                      }}>
                        {step.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* CSS Animation Styles for Mobile */}
                  <style>
                    {`
                      @keyframes mobileRipple1 {
                        0% {
                          transform: scale(1);
                          opacity: 0.6;
                        }
                        100% {
                          transform: scale(1.5);
                          opacity: 0;
                        }
                      }
                      
                      @keyframes mobileRipple2 {
                        0% {
                          transform: scale(1);
                          opacity: 0.4;
                        }
                        100% {
                          transform: scale(2);
                          opacity: 0;
                        }
                      }
                      
                      @keyframes mobileRipple3 {
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
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(13, 153, 255, 0.2) 0%, rgba(16, 83, 131, 0.3) 100%)',
                      borderRadius: '50%'
                    }} />
                  </div>
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

                {/* Mobile Divider Line (except for last item) */}
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

  // Desktop version - Now full width without left sidebar
  return (
    <>
      <div ref={containerRef} style={desktopContainerStyle}>
        {/* Full Width Content */}
        <div style={desktopContentStyle}>
          {/* Full Height Timeline Line */}
          <div style={{
            position: 'absolute',
            right: '120px',
            top: '0',
            width: '10px',
            height: '100%',
            background: '#0D98BA',
            zIndex: 2
          }} />
          
          {/* Long vertical background image behind all circles */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '-18px',
            width: '340px',
            height: 'calc(100% + 37px)',
            backgroundImage: 'url("/images/vertical-path.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'top center',
            zIndex: 1,
            opacity: 0.7
          }} />
          
          {processSteps.map((step, index) => (
            <div key={step.id} style={{
              width: '100%',
              height: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              position: 'relative',
              padding: '0 20px',
              zIndex: 2,
              overflow: 'hidden',
              boxSizing: 'border-box',
              marginTop: index === 0 ? '0' : index === 4 ? '-50px' : '0'
            }}>
              {/* Individual Timeline Segments for Color Changes */}
              <div style={{
                position: 'absolute',
                right: '120px',
                top: '0',
                width: '10px',
                height: '100%',
                background: index <= activeStep ? '#0D98BA' : '#979797',
                transition: 'background 0.5s ease',
                zIndex: 3
              }} />

              {/* Step Number with Circles */}
              <div style={{
                position: 'absolute',
                right: '80px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                width: '80px',
                height: '80px'
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
                      fontFamily: 'Poppins, Inter, sans-serif',
                      lineHeight: '30px'
                    }}>
                      {step.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* CSS Animation Styles */}
                <style>
                  {`
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
              </div>

              {/* Content Container */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                maxWidth: '100%',
                opacity: index === activeStep ? 1 : 0.7,
                transform: index === activeStep ? 'translateX(0)' : 'translateX(20px)',
                transition: 'all 0.8s ease',
                zIndex: 3,
                marginLeft: '0',
                overflow: 'hidden'
              }}>
                {/* Circle with Image */}
                <div style={{
                  width: '340px',
                  height: '340px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #0D99FF 8.45%, #105383 103.19%)',
                  position: 'relative',
                  flexShrink: 0,
                  transform: index === activeStep ? 'scale(1)' : 'scale(0.9)',
                  transition: 'transform 0.8s ease',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  zIndex: 4
                }}>
                  <div style={{
                    width: '320px',
                    height: '320px',
                    borderRadius: '50%',
                    backgroundImage: `url(${step.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '50%'
                    }} />
                  </div>
                </div>

                {/* Text Content */}
                <div style={{
                  maxWidth: '310px'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '30px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: '0 0 15px 0'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Lato, Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'rgba(255, 255, 255, 1)',
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
    </>
  );
};

export default StickySplitLayout;