import React, { useEffect, useRef, useState } from 'react';

const PainPointsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
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
  }, [isVisible]);

  const wrapperStyle = {
    width: '100%',
    background: '#04091D',
    opacity: 1,
    willChange: 'transform, opacity',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'clamp(40px, 8vw, 80px) 20px',
    gap: 'clamp(40px, 6vw, 60px)',
    maxWidth: '1236px',
    margin: '0 auto',
    width: '100%',
  };

  const headerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    width: '100%',
    maxWidth: '1236px',
    gap: '15px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
  };

  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(28px, 5vw, 40px)',
    lineHeight: '1.4',
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
    fontSize: 'clamp(13px, 2vw, 14px)',
    lineHeight: '1.8',
    textAlign: 'center',
    letterSpacing: '-0.09px',
    color: '#FFFFFF',
    margin: 0,
    maxWidth: '692px',
    width: '100%',
  };

  const painPointsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: 'clamp(20px, 3vw, 30px)',
    width: '100%',
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    gap: 'clamp(20px, 4vw, 40px)',
    width: '100%',
    flexWrap: 'wrap',
  };

  const painPointStyle = (index) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '15px',
    flex: '1 1 calc(50% - 20px)',
    minWidth: '280px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.08}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.08}s`,
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
    marginTop: '2px',
  };

  const crossImageStyle = {
    width: '18px',
    height: '18px',
  };

  const painTextStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: 'clamp(14px, 2vw, 15px)',
    lineHeight: '1.6',
    color: '#FFFFFF',
    margin: 0,
    flex: 1,
  };

  const outcomeBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'clamp(25px, 4vw, 40px)',
    gap: '20px',
    width: '100%',
    background: '#07334C',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '20px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
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
    fontSize: 'clamp(16px, 2.5vw, 18px)',
    lineHeight: '1.5',
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
    fontSize: 'clamp(14px, 2vw, 15px)',
    lineHeight: '1.6',
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
    <div ref={sectionRef} style={wrapperStyle}>
      <div style={containerStyle}>
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
                  src="/images/100.png" 
                  alt="cross" 
                  style={crossImageStyle}
                />
              </div>
              <p style={painTextStyle}>{painPoints[0]}</p>
            </div>
            <div style={painPointStyle(1)}>
              <div style={crossIconStyle}>
                <img 
                  src="/images/100.png" 
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
                  src="/images/100.png" 
                  alt="cross" 
                  style={crossImageStyle}
                />
              </div>
              <p style={painTextStyle}>{painPoints[2]}</p>
            </div>
            <div style={painPointStyle(3)}>
              <div style={crossIconStyle}>
                <img 
                  src="/images/100.png" 
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
    </div>
  );
};

export default PainPointsSection;