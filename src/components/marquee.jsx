import React, { useEffect, useState } from 'react';

const TrustedBrands = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const brands = [
    { name: 'Brand 1', logo: '/images/8.png' },
    { name: 'Brand 2', logo: '/images/9.png' },
    { name: 'Brand 3', logo: '/images/10.png' },
    { name: 'Brand 4', logo: '/images/11.png' },
    { name: 'Brand 5', logo: '/images/12.png' },
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: windowWidth < 768 ? '40px 0' : '50px 0',
    width: '100%',
    minHeight: windowWidth < 768 ? 'auto' : '228px',
    background: '#04091D',
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  const innerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: windowWidth < 768 ? '24px' : '32px',
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontFamily: "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeight: 600,
    fontSize: windowWidth < 480 ? '16px' : '18px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#FDFFFA',
    margin: 0,
    padding: '0 16px',
  };

  const marqueeContainerStyle = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
  };

  const marqueeStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: windowWidth < 480 ? '20px' : '40px',
    animation: isPaused ? 'none' : 'marquee 30s linear infinite',
    width: 'max-content',
    willChange: 'transform',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: windowWidth < 480 ? '12px 20px' : '16px 30px',
    minWidth: windowWidth < 480 ? '140px' : '180px',
    height: windowWidth < 480 ? '60px' : '72px',
    background: 'transparent',
    flexShrink: 0,
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const logoStyle = {
    width: windowWidth < 480 ? '80px' : windowWidth < 768 ? '100px' : '120px',
    height: 'auto',
    maxHeight: windowWidth < 480 ? '50px' : '60px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  };

  const keyframesStyle = `
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={containerStyle}>
        <div style={innerContainerStyle}>
          <h2 style={titleStyle}>Trusted by Leading Brands</h2>
          
          <div style={marqueeContainerStyle}>
            <div style={marqueeStyle}>
              {duplicatedBrands.map((brand, index) => (
                <div 
                  key={index} 
                  style={cardStyle}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={logoStyle}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedBrands;