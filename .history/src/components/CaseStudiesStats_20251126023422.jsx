import React, { useState, useEffect, useRef } from 'react';

const MetricsSection2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const metrics = [
    {
      icon: 'images/23.png',
      value: 250,
      prefix: '+',
      suffix: '%',
      label: 'Conversion Growth'
    },
    {
      icon: 'images/24.png',
      value: 60,
      prefix: '+',
      suffix: '%',
      label: 'Lead Generation'
    },
    {
      icon: 'images/25.png',
      value: 45,
      prefix: '+',
      suffix: '%',
      label: 'Reduced Drop-Off'
    },
    {
      icon: 'images/40.png',
      value: 12,
      prefix: '$',
      suffix: 'M+',
      label: 'Client Revenue'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
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

  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    metrics.forEach((metric, index) => {
      let currentStep = 0;
      const stepValue = metric.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.floor(stepValue * currentStep),
          metric.value
        );

        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = newValue;
          return newValues;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, increment);
    });
  };

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
    minHeight: '200px',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#04091d',
    backgroundImage: 'linear-gradient(0deg, rgba(4, 9, 29, 0.9), rgba(4, 9, 29, 0.9)), url(images/111.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 0
  };

  const metricsContainerStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '1200px',
    width: '100%',
    padding: '0 20px',
    boxSizing: 'border-box'
  };

  const metricItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    minWidth: '200px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease-out',
    flex: '1 1 auto'
  };

  const iconStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '10px',
    objectFit: 'contain',
    flexShrink: 0,
    boxShadow: 'none',
    backgroundColor: 'transparent'
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '5px'
  };

  const valueStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '1.2',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: 0,
    animation: isVisible ? 'fadeInUp 1s ease-out' : 'none'
  };

  const labelStyle = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '1.2',
    color: '#FFFFFF',
    margin: 0,
    whiteSpace: 'nowrap',
    animation: isVisible ? 'fadeInUp 1.2s ease-out' : 'none'
  };

  const styleSheet = document.styleSheets[0];
  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  useEffect(() => {
    // Add dark background to body
    document.body.style.backgroundColor = '#04091d';
    
    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (e) {
      // Rule might already exist
    }
  }, []);

  const getResponsiveStyles = () => {
    const width = window.innerWidth;
    
    if (width <= 768) {
      return {
        value: { ...valueStyle, fontSize: '32px' },
        label: { ...labelStyle, fontSize: '16px' },
        icon: { ...iconStyle, width: '60px', height: '60px' },
        gap: '50px',
        itemGap: '12px'
      };
    } else if (width <= 1024) {
      return {
        value: { ...valueStyle, fontSize: '36px' },
        label: { ...labelStyle, fontSize: '17px' },
        icon: { ...iconStyle, width: '70px', height: '70px' },
        gap: '30px',
        itemGap: '13px'
      };
    }
    
    return {
      value: valueStyle,
      label: labelStyle,
      icon: iconStyle,
      gap: '40px',
      itemGap: '15px'
    };
  };

  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles());

  useEffect(() => {
    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={sectionRef} style={containerStyle}>
      <div style={backgroundStyle} />
      <div style={{ ...metricsContainerStyle, gap: responsiveStyles.gap }}>
        {metrics.map((metric, index) => (
          <div
            key={index}
            style={{
              ...metricItemStyle,
              transitionDelay: `${index * 0.15}s`,
              gap: responsiveStyles.itemGap
            }}
          >
            
              <img
              src={metric.icon}
              alt={metric.label}
              style={{
                ...responsiveStyles.icon,
                boxShadow: 'none',
                backgroundColor: 'transparent'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
           
            <div style={textContainerStyle}>
              <h2 style={responsiveStyles.value}>
                {metric.prefix}
                {animatedValues[index]}
                {metric.suffix}
              </h2>
              <p style={responsiveStyles.label}>{metric.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection2;