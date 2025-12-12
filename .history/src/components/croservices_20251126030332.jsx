import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const CROServices = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(380);
  const [gap, setGap] = useState(20);
  const [isLoaded, setIsLoaded] = useState(false);
  const componentRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Extensive CRO Audit",
      description: "Your site might look good but leak conversions. Our audit uncovers technical, UX, and psychological barriers holding you back — and gives a roadmap for fixing them fast.",
      features: [
        "End-to-end UX & data analysis",
        "Heatmaps & journey insights",
        "Clear priority-based roadmap"
      ],
      resultTitle: "Results We Deliver",
      resultText: "+142% average lift in conversions",
      cta: "View Audit Process→",
      image: "/images/30.jpg"
    },
    {
      id: 2,
      title: "eCommerce Optimization",
      description: "Your store doesn't need more visitors — it needs more buyers. We refine product pages, checkout flow, and navigation so every step feels smooth and trustworthy.",
      features: [
        "Better checkout & cart UX",
        "Boost buyer trust signals",
        "Reduce decision friction"
      ],
      resultTitle: "Results We Deliver",
      resultText: "+75% AOV · 50% fewer cart drops",
      cta: "Optimize My Store→",
      image: "/images/30.jpg"
    },
    {
      id: 3,
      title: "Lead Funnel Optimization",
      description: "If leads consistently stall mid-journey, the funnel needs clarity. We rebuild it with a persuasive flow, structured messaging, and forms that actually convert.",
      features: [
        "Smarter lead capture flow",
        "Persuasive copy testing",
        "Lower form abandonment"
      ],
      resultTitle: "Results We Deliver",
      resultText: "2× more qualified leads · -40% CPL",
      cta: "Fix My Funnel→",
      image: "/images/30.jpg"
    },
    {
      id: 4,
      title: "Landing Page Design",
      description: "First impressions matter. We design high-converting landing pages that capture attention, communicate value, and drive action from the moment visitors arrive.",
      features: [
        "Conversion-focused design",
        "A/B testing framework",
        "Mobile-first approach"
      ],
      resultTitle: "Results We Deliver",
      resultText: "+200% increase in conversions",
      cta: "Design My Page→",
      image: "/images/30.jpg"
    },
    {
      id: 5,
      title: "Conversion Analytics",
      description: "Data without direction is just noise. We turn your analytics into actionable insights that reveal exactly where and why visitors drop off.",
      features: [
        "Custom tracking setup",
        "User behavior analysis",
        "Revenue attribution modeling"
      ],
      resultTitle: "Results We Deliver",
      resultText: "90% faster decision making",
      cta: "Track My Growth→",
      image: "/images/30.jpg"
    }
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth <= 768) {
        // On mobile, card width should be container width minus padding
        const containerWidth = window.innerWidth - 40; // 20px padding on each side
        setCardWidth(containerWidth);
        setGap(20);
      } else if (window.innerWidth <= 1024) {
        setCardWidth(320);
        setGap(18);
      } else {
        setCardWidth(360);
        setGap(20);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const max = container.scrollWidth - container.clientWidth;
      setMaxScroll(max);
    }
  }, [cardWidth, services.length]);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = cardWidth + gap;
    const container = scrollContainerRef.current;
    
    if (direction === 'left') {
      const newPosition = Math.max(0, scrollPosition - scrollAmount);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    } else {
      const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <div ref={componentRef} style={{
      width: '100%',
      minHeight: '100vh',
      background: '#041629',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Gradient Blur */}
      <div style={{
        position: 'absolute',
        width: '861px',
        height: '171px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
        filter: 'blur(150px)',
        opacity: 0.3,
        zIndex: 0
      }} />

      {/* Content Container */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        position: 'relative',
        zIndex: 1,
        padding: window.innerWidth <= 1024 ? '0 0 0 0px' : '0 0px 0 40px',
        
      }}>
        {/* Header Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: window.innerWidth <= 768 ? '28px' : '40px',
            lineHeight: window.innerWidth <= 768 ? '38px' : '64px',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            textTransform: 'capitalize',
            color: '#FFFFFF',
            margin: 0,
           
          }}>
            CRO Services <span style={{
              background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Built For Growth</span>
          </h2>
          
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '28px',
            textAlign: 'center',
            letterSpacing: '-0.09px',
            color: '#FFFFFF',
            maxWidth: '692px',
            margin: 0,
            padding: '0 20px'
          }}>
            From deep audits to post-purchase flows, each service is designed to uncover friction, enhance clarity, and turn traffic into consistent revenue — without guesswork or full redesigns.
          </p>
        </div>

        {/* Cards Container */}
        <div style={{
          width: '100%',
          position: 'relative'
        }}>
          {/* Left Gradient Fade */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            // width: window.innerWidth <= 1024 ? '20px' : '60px',
            width: window.innerWidth <= 768 ? '20px' : window.innerWidth <= 1024 ? '40px' : '60px',
            background: 'linear-gradient(90deg, #041629 0%, rgba(4, 22, 41, 0.95) 40%, rgba(4, 22, 41, 0.6) 70%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none'
          }} />
          
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              padding: window.innerWidth <= 768 ? '10px 20px' : window.innerWidth <= 1024 ? '10px 20px 10px 40px' : '10px 60px 10px 50px',
              marginLeft: '0',
              scrollSnapType: window.innerWidth <= 768 ? 'x mandatory' : 'none'
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          
          {services.map((service, index) => (
            <div key={service.id} style={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: `${cardWidth}px`,
              height: '580px',
              background: '#03101D',
              boxShadow: '0px 0px 15px #04091D',
              borderRadius: '20px',
              overflow: 'hidden',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.8s ease-out ${0.3 + index * 0.15}s, transform 0.8s ease-out ${0.3 + index * 0.15}s`,
              scrollSnapAlign: window.innerWidth <= 768 ? 'center' : 'start'
            }}>
              {/* Image */}
              <div style={{
                width: '100%',
                height: '190px',
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />

              {/* Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '15px 25px 20px',
                gap: '12px',
                flex: 1
              }}>
                {/* Title */}
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#B2AFAF',
                  margin: 0
                }}>
                  {service.description}
                </p>

                {/* Features */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Check size={18} color="#3AA1DE" />
                      <span style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#E6E6E6'
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Results Box */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '8px 12px',
                  background: 'rgba(13, 152, 186, 0.1)',
                  borderRadius: '10px',
                  gap: '3px',
                  marginTop: 'auto'
                }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#0D98BA'
                  }}>
                    {service.resultTitle}
                  </span>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '26px',
                    color: '#E6E6E6'
                  }}>
                    {service.resultText}
                  </span>
                </div>

                {/* CTA */}
                <a href="#" style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textDecoration: 'none',
                  marginTop: '3px'
                }}>
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        </div>

        {/* Navigation Controls */}
        <div style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '0px',
          marginTop: '-8px',
          // paddingLeft: window.innerWidth <= 1024 ? '20px' : '50px',
          paddingLeft: window.innerWidth <= 768 ? '20px' : window.innerWidth <= 1024 ? '40px' : '50px',
        }}>
         {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            gap: '0px',
            flexShrink: 0,
            background: '#03101D',
            borderRadius: '50%',
            padding: window.innerWidth <= 768 ? '5px' : window.innerWidth <= 1024 ? '6px' : '8px',
            border: '2px solid #1a2c3d',
            marginRight: '-2px',
            zIndex: 2,
            width: window.innerWidth <= 768 ? '46px' : window.innerWidth <= 1024 ? '52px' : '58px',
            height: window.innerWidth <= 768 ? '46px' : window.innerWidth <= 1024 ? '52px' : '58px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => scroll('left')}
              disabled={scrollPosition === 0}
              style={{
                width: window.innerWidth <= 768 ? '22px' : window.innerWidth <= 1024 ? '25px' : '28px',
                height: window.innerWidth <= 768 ? '22px' : window.innerWidth <= 1024 ? '25px' : '28px',
                borderRadius: '0',
                background: 'transparent',
                border: 'none',
                cursor: scrollPosition === 0 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: scrollPosition === 0 ? 0.5 : 1,
                flexShrink: 0,
                padding: 0
              }}
            >
              <ChevronLeft size={window.innerWidth <= 768 ? 20 : window.innerWidth <= 1024 ? 22 : 24} color="#B2AFAF" strokeWidth={2.5} />
            </button>
            
            <button
              onClick={() => scroll('right')}
              disabled={scrollPosition >= maxScroll}
              style={{
                width: window.innerWidth <= 768 ? '22px' : window.innerWidth <= 1024 ? '25px' : '28px',
                height: window.innerWidth <= 768 ? '22px' : window.innerWidth <= 1024 ? '25px' : '28px',
                borderRadius: '0',
                background: 'transparent',
                border: 'none',
                cursor: scrollPosition >= maxScroll ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: scrollPosition >= maxScroll ? 0.5 : 1,
                flexShrink: 0,
                padding: 0
              }}
            >
              <ChevronRight size={window.innerWidth <= 768 ? 20 : window.innerWidth <= 1024 ? 22 : 24} color="#B2AFAF" strokeWidth={2.5} />
            </button>
          </div>

          {/* Progress Line */}
          <div style={{
            position: 'relative',
            flex: 1,
            height: '3px',
            background: 'rgba(13, 152, 186, 0.3)',
            borderRadius: '2px',
            maxWidth: '1220px',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              background: 'linear-gradient(90deg, rgba(58, 161, 222, 0.9) 0%, rgba(58, 161, 222, 1) 30%, rgba(13, 152, 186, 0.8) 70%, rgba(13, 152, 186, 0) 100%)',
              borderRadius: '2px'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CROServices;