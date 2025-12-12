import React, { useEffect, useRef, useState } from 'react';

const PainPointsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 20px',
    gap: '60px',
    maxWidth: '1236px',
    margin: '0 auto',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const headerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    width: '100%',
    maxWidth: '1236px',
    gap: '10px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
  };

  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '64px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: 0,
    width: '100%',
  };

  const paragraphStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '28px',
    textAlign: 'center',
    letterSpacing: '-0.09px',
    color: '#FFFFFF',
    margin: 0,
    maxWidth: '692px',
  };

  const painPointsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '30px',
    width: '100%',
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '40px',
    width: '100%',
    flexWrap: 'wrap',
  };

  const painPointStyle = (index) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px',
    gap: '15px',
    flex: '1 1 calc(50% - 20px)',
    minWidth: '280px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.1}s`,
  });

  const crossIconStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    width: '30px',
    height: '30px',
    background: '#041629',
    borderRadius: '50px',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  };

  const crossImageStyle = {
    width: '18px',
    height: '18px',
  };

  const painTextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '24px',
    color: '#FFFFFF',
    margin: 0,
    flex: 1,
  };

  const outcomeBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    gap: '20px',
    width: '100%',
    background: '#07334C',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '20px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
  };

  const outcomeContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '10px',
    width: '100%',
  };

  const outcomeHeadingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '150%',
    letterSpacing: '-0.006em',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
  };

  const outcomeTextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '24px',
    color: '#FFFFFF',
    margin: 0,
  };

  const painPoints = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in egestas justo.",
  ];

  return (
    <div ref={sectionRef} style={containerStyle}>
      {/* Header Section */}
      <div style={headerContainerStyle}>
        <h2 style={headingStyle}>Pain Points Heading</h2>
        <p style={paragraphStyle}>
          Subtitle text that describes the pain points section
        </p>
      </div>

      {/* Pain Points Grid */}
      <div style={painPointsContainerStyle}>
        {/* Row 1 */}
        <div style={rowStyle}>
          <div style={painPointStyle(0)}>
            <div style={crossIconStyle}>
              <img 
                src="/path-to-your-cross-icon.png" 
                alt="cross" 
                style={crossImageStyle}
              />
            </div>
            <p style={painTextStyle}>{painPoints[0]}</p>
          </div>
          <div style={painPointStyle(1)}>
            <div style={crossIconStyle}>
              <img 
                src="/path-to-your-cross-icon.png" 
                alt="cross" 
                style={crossImageStyle}
              />
            </div>
            <p style={painTextStyle}>{painPoints[1]}</p>
          </div>
        </div>

        {/* Row 2 */}
        <div style={rowStyle}>
          <div style={painPointStyle(2)}>
            <div style={crossIconStyle}>
              <img 
                src="/path-to-your-cross-icon.png" 
                alt="cross" 
                style={crossImageStyle}
              />
            </div>
            <p style={painTextStyle}>{painPoints[2]}</p>
          </div>
          <div style={painPointStyle(3)}>
            <div style={crossIconStyle}>
              <img 
                src="/path-to-your-cross-icon.png" 
                alt="cross" 
                style={crossImageStyle}
              />
            </div>
            <p style={painTextStyle}>{painPoints[3]}</p>
          </div>
        </div>

        {/* Row 3 */}
        <div style={rowStyle}>
          <div style={painPointStyle(4)}>
            <div style={crossIconStyle}>
              <img 
                src="/images/100.png" 
                alt="cross" 
                style={crossImageStyle}
              />
            </div>
            <p style={painTextStyle}>{painPoints[4]}</p>
          </div>
        </div>
      </div>

      {/* Outcome Box */}
      <div style={outcomeBoxStyle}>
        <div style={outcomeContentStyle}>
          <h3 style={outcomeHeadingStyle}>
            Key Insight or Outcome
          </h3>
          <p style={outcomeTextStyle}>
            Optimization without analysis is like fixing what you think is broken — not what actually is. 
            Our audit gives you a clear foundation before you redesign, develop, or scale traffic. 
            It shows you where your users hesitate, what confuses them, and which changes will actually move revenue. 
            This saves time, budget, and months of trial-and-error testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PainPointsSection;