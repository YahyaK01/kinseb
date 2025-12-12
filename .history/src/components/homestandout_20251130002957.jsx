import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const slides = [
    {
      title: "Behavioral Science Meets Data Science",
      titleHighlight: "Data Science",
      description: "Every visitor counts. Conversion Rate Optimization turns your existing traffic into consistent revenue growth — using behavioral science, data, and experimentation.",
      buttonText: "Get Started Today!"
    },
    {
      title: "Data-Driven Decision Making",
      titleHighlight: "Decision Making",
      description: "Transform your business with powerful analytics and insights. Make informed decisions that drive real results and maximize your ROI.",
      buttonText: "Learn More"
    },
    {
      title: "Data-Driven Decision Making",
      titleHighlight: "Decision Making",
      description: "Create seamless user experiences that convert. Our proven methodology combines psychology and technology to boost your conversion rates.",
      buttonText: "Start Optimizing"
    }
  ];

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
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

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible, slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div 
      ref={sectionRef}
      style={{
        width: '100%',
        height: windowWidth < 480 ? '90vh' : windowWidth < 768 ? '100vh' : '100vh',
        background: 'linear-gradient(283.45deg, #0D98BA -175.48%, #040D22 115.11%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}>
      {/* Heading */}
      <h1 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: 'clamp(28px, 5vw, 40px)',
        lineHeight: '60px',
        textAlign: 'center',
        letterSpacing: '-0.03em',
        textTransform: 'capitalize',
        color: '#FFFFFF',
        marginBottom: 'clamp(20px, 5vh, 60px)',
        animation: isVisible ? 'fadeInDown 1s ease-out' : 'none',
        opacity: isVisible ? 1 : 0,
        maxWidth: '900px',
        position: 'relative',
        marginTop: windowWidth < 480 ? '-10px' : windowWidth < 768 ? '0px' : '-50px',
        zIndex: 2
      }}>
        How We <span style={{ color: '#0D98BA' }}>Stand Out</span>
      </h1>

      {/* Main Card Container */}
      <div style={{
        width: '100%',
        maxWidth: '1130px',
        height: 'clamp(400px, 60vh, 500px)',
        position: 'relative',
        boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
        borderRadius: '20px',
        overflow: 'hidden',
        animation: isVisible ? 'fadeIn 1.2s ease-out' : 'none',
        opacity: isVisible ? 1 : 0
      }}>
        {/* Background Image - Full Container Coverage */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("images/92.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
          zIndex: 0
        }} />

        {/* Mobile Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(4, 13, 34, 0.7)',
          zIndex: 1,
          display: 'none'
        }} className="mobile-overlay" />

        {/* Content Container */}
        {isVisible && (
          <div style={{
            position: 'absolute',
            left: 'clamp(30px, 5%, 67px)',
            top: 'clamp(60px, 20%, 128px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: 'clamp(350px, 45%, 467px)',
            zIndex: 3
          }}>
            {/* Title */}
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(24px, 3.5vw, 35px)',
              lineHeight: '1.3',
              letterSpacing: '-0.006em',
              color: '#FFFFFF',
              margin: 0,
              animation: `slideInLeft 0.8s ease-out`
            }}>
              <span style={{ color: '#FFFFFF' }}>
                {slides[currentSlide].title.replace(slides[currentSlide].titleHighlight, '')}
              </span>
              <span style={{ color: '#0D98BA' }}>{slides[currentSlide].titleHighlight}</span>
            </h2>

            {/* Description */}
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              lineHeight: '22px',
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              margin: 0,
              opacity: 0.95,
              animation: `slideInLeft 1s ease-out`
            }}>
              {slides[currentSlide].description}
            </p>

            {/* Button */}
            <button style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px 24px',
              background: '#0D98BA',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              lineHeight: '24px',
              letterSpacing: '0.02em',
              color: '#000000',
              width: 'fit-content',
              minWidth: '180px',
              maxWidth: '223px',
              height: '48px',
              transition: 'all 0.3s ease',
              animation: `slideInLeft 1.2s ease-out`
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0px 6px 8px rgba(0, 0, 0, 0.3)';
              e.target.style.background = '#0EAED4';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
              e.target.style.background = '#0D98BA';
            }}>
              {slides[currentSlide].buttonText}
            </button>
          </div>
        )}

        {/* Navigation Dots - Inside Container at Bottom */}
        {isVisible && (
          <div style={{
            position: 'absolute',
            bottom: 'clamp(20px, 5%, 40px)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            zIndex: 4
          }}>
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                style={{
                  width: currentSlide === index ? '50px' : '20px',
                  height: '10px',
                  background: '#0D98BA',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: currentSlide === index ? 1 : 0.6,
                  boxShadow: currentSlide === index ? '0px 0px 8px rgba(13, 152, 186, 0.8)' : 'none'
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        @media (max-width: 1024px) {
          /* Tablet adjustments */
        }

        @media (max-width: 768px) {
          /* Mobile adjustments */
          body {
            overflow-x: hidden;
          }
          
          .mobile-overlay {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;