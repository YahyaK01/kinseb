import { useState, useEffect, useRef } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const componentRef = useRef(null);

  // Detect screen size
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isMediumMobile, setIsMediumMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle resize and reset animation if needed
  useEffect(() => {
    const handleResize = () => {
      const newIsSmallMobile = window.innerWidth < 400;
      const newIsMediumMobile = window.innerWidth >= 400 && window.innerWidth < 768;
      const newIsTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      // Check if screen size category changed
      const sizeChanged = 
        newIsSmallMobile !== isSmallMobile ||
        newIsMediumMobile !== isMediumMobile ||
        newIsTablet !== isTablet;

      setIsSmallMobile(newIsSmallMobile);
      setIsMediumMobile(newIsMediumMobile);
      setIsTablet(newIsTablet);

      // Optionally reset animation on significant resize
      if (sizeChanged && isLoaded) {
        setIsLoaded(false);
        setTimeout(() => setIsLoaded(true), 50);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSmallMobile, isMediumMobile, isTablet, isLoaded]);

  // Intersection Observer for load animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true);
          }
        });
      },
      {
        threshold: 0.1,
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
  }, [isLoaded]);

  const handleNavigation = () => {
    window.location.href = '/case-studies';
  };

  const casestudiesctaContainerStyle = {
    position: 'relative',
    width: '100%',
    height: isSmallMobile ? '280px' : isMediumMobile ? '300px' : isTablet ? '320px' : '350px',
    backgroundImage: 'linear-gradient(90deg, #04091D 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%), url(images/99.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    padding: isSmallMobile || isMediumMobile ? '0 15px' : '0 20px',
    overflow: 'hidden'
  };

  const casestudiesctaContentStyle = {
    maxWidth: '1200px',
    margin: '0',
    marginLeft: isSmallMobile || isMediumMobile ? '10px' : '20px',
    width: '100%',
    padding: isSmallMobile || isMediumMobile ? '0 0px' : isTablet ? '0 0px' : '0 40px'
  };

  const casestudiesctaHeadingStyle = {
    fontSize: isSmallMobile ? '25px' : isMediumMobile ? '28px' : isTablet ? '35px' : '46px',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: isSmallMobile || isMediumMobile ? '12px' : '16px',
    lineHeight: '1.2',
    whiteSpace: isSmallMobile || isMediumMobile ? 'normal' : 'nowrap',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  };

  const casestudiesctaHighlightStyle = {
    color: '#00D9FF',
    fontWeight: '700'
  };

  const casestudiesctaParagraphStyle = {
    fontSize: isSmallMobile ? '11px' : isMediumMobile ? '12px' : isTablet ? '12px' : '14px',
    color: '#FFFFFF',
    lineHeight: '1.6',
    marginBottom: isSmallMobile || isMediumMobile ? '16px' : '24px',
    maxWidth: isSmallMobile ? '89%' : isMediumMobile ? '350px' : isTablet ? '430px' : '570px',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
  };

  const casestudiesctaButtonStyle = {
    display: 'inline-block',
    padding: isSmallMobile ? '10px 20px' : isMediumMobile ? '11px 22px' : isTablet ? '12px 24px' : '14px 28px',
    backgroundColor: '#00D9FF',
    color: '#04091D',
    fontSize: isSmallMobile ? '11px' : isMediumMobile ? '12px' : isTablet ? '13px' : '15px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    transitionDelay: '0.4s'
  };

  const casestudiesctaButtonHoverStyle = {
    ...casestudiesctaButtonStyle,
    backgroundColor: isHovered ? '#00B8D4' : '#00D9FF',
    transform: isHovered 
      ? (isLoaded ? 'translateY(-2px) scale(1.02)' : 'translateY(30px)') 
      : (isLoaded ? 'translateY(0) scale(1)' : 'translateY(30px)'),
    boxShadow: isHovered ? '0 8px 20px rgba(0, 217, 255, 0.3)' : '0 4px 10px rgba(0, 217, 255, 0.2)'
  };

  return (
    <div ref={componentRef} className="casestudiescta-wrapper" style={casestudiesctaContainerStyle}>
      <div className="casestudiescta-content" style={casestudiesctaContentStyle}>
        <h1 className="casestudiescta-heading" style={casestudiesctaHeadingStyle}>
          See The <span className="casestudiescta-highlight" style={casestudiesctaHighlightStyle}>Results</span> For Yourself
        </h1>
        <p className="casestudiescta-paragraph" style={casestudiesctaParagraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis ut labore et dolore magna
        </p>
        <button
          className="casestudiescta-button"
          style={casestudiesctaButtonHoverStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleNavigation}
        >
          View All Case Studies →
        </button>
      </div>
    </div>
  );
}