import React, { useState, useEffect } from 'react';

const DallasMapComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  // Handle window resize and scale detection
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setDevicePixelRatio(window.devicePixelRatio || 1);
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);
      
      // Listen for zoom/scale changes using matchMedia
      const mediaQuery = window.matchMedia('(resolution: 1dppx)');
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleResize);
      }
    }
    
    setIsMounted(true);
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      }
    };
  }, []);

  // Enhanced responsive calculations with scale awareness
  const screenScale = Math.max(0.8, Math.min(2, devicePixelRatio));
  const scaleFactor = 1 / screenScale * 1.1;
  
  // Dynamic breakpoints that consider both width and scale
  const effectiveWidth = windowWidth * screenScale;
  const effectiveHeight = windowHeight * screenScale;
  
  const isMobile = effectiveWidth <= 768;
  const isTablet = effectiveWidth > 768 && effectiveWidth <= 1200;
  const isDesktop = effectiveWidth > 1200;
  const isLargeScreen = effectiveWidth > 1600;

  // Dynamic sizing functions
  const getScaledSize = (mobile, tablet, desktop, large = desktop) => {
    let baseSize;
    if (isMobile) baseSize = mobile;
    else if (isTablet) baseSize = tablet;
    else if (isLargeScreen) baseSize = large;
    else baseSize = desktop;
    
    return Math.round(baseSize * scaleFactor);
  };

  const getResponsiveValue = (mobile, tablet, desktop, large = desktop) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    if (isLargeScreen) return large;
    return desktop;
  };

  // Dynamic measurements
  const containerHeight = getScaledSize(400, 500, 700, 800);
  const mapWidth = getResponsiveValue('calc(100% - 20px)', 'calc(100% - 60px)', '900px', '1000px');
  const mapHeight = getScaledSize(280, 350, 502, 580);
  const topOffset = getScaledSize(60, 75, 99, 110);
  const horizontalPadding = getScaledSize(10, 20, 20, 30);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: `${containerHeight}px`,
    background: 'linear-gradient(180deg, #0D98BA -142.29%, #04091D 100%)',
    overflow: 'hidden',
    isolation: 'isolate', // Creates a new stacking context to prevent interference
  };

  const contentStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: getResponsiveValue('100%', '100%', '1440px', '1600px'),
    height: '100%',
    margin: '0 auto',
    padding: `0 ${horizontalPadding}px`,
    boxSizing: 'border-box',
  };

  const mapStyle = {
    position: 'absolute',
    width: mapWidth,
    maxWidth: isMobile ? 'calc(100vw - 20px)' : getResponsiveValue('100%', '100%', '900px', '1000px'),
    height: `${mapHeight}px`,
    left: '50%',
    top: `${topOffset}px`,
    transform: 'translateX(-50%)',
    borderRadius: getScaledSize(8, 10, 10, 12) + 'px',
    border: 'none',
    boxShadow: `0 ${getScaledSize(2, 3, 4, 5)}px ${getScaledSize(10, 15, 20, 25)}px rgba(0, 0, 0, 0.3)`,
  };

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div style={{
        position: 'relative',
        width: '100%',
        height: '700px',
        background: 'linear-gradient(180deg, #0D98BA -142.29%, #04091D 100%)',
        overflow: 'hidden'
      }} />
    );
  }

  return (
    <>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.94331264535!2d-96.87194624999999!3d32.776272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
            style={mapStyle}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dallas, Texas Map"
          />
        </div>
      </div>

      {/* Component-specific styles to prevent interference */}
      <style jsx>{`
        /* Scoped styles for this component only */
        div[style*="linear-gradient(180deg, #0D98BA"] {
          contain: layout style;
        }
        
        /* Responsive iframe handling */
        iframe {
          max-width: 100% !important;
          box-sizing: border-box;
        }
        
        /* Prevent horizontal scrolling */
        div[style*="linear-gradient(180deg, #0D98BA"] {
          max-width: 100vw !important;
          overflow-x: hidden !important;
        }
        
        /* High DPI screen optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
          iframe {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          div[style*="linear-gradient(180deg, #0D98BA"] {
            min-height: 400px;
          }
          
          iframe {
            min-height: 280px !important;
            width: calc(100vw - 20px) !important;
          }
        }
        
        /* Tablet specific adjustments */
        @media (min-width: 769px) and (max-width: 1200px) {
          div[style*="linear-gradient(180deg, #0D98BA"] {
            min-height: 500px;
          }
          
          iframe {
            min-height: 350px !important;
          }
        }
        
        /* Desktop specific adjustments */
        @media (min-width: 1201px) {
          div[style*="linear-gradient(180deg, #0D98BA"] {
            max-width: 100%;
            margin: 0 auto;
          }
        }
        
        /* Ultra-wide screen support */
        @media (min-width: 2560px) {
          div[style*="linear-gradient(180deg, #0D98BA"] {
            max-width: 2560px;
            margin: 0 auto;
          }
        }
        
        /* Performance optimizations - scoped to this component */
        div[style*="linear-gradient(180deg, #0D98BA"] * {
          will-change: auto;
          backface-visibility: hidden;
        }
        
        /* Touch device optimizations */
        @media (pointer: coarse) {
          div[style*="linear-gradient(180deg, #0D98BA"] {
            touch-action: pan-y;
          }
          
          iframe {
            touch-action: manipulation;
          }
        }
        
        /* Ensure component isolation */
        div[style*="linear-gradient(180deg, #0D98BA"] {
          z-index: auto;
          transform: translateZ(0);
        }
      `}</style>
    </>
  );
};

export default DallasMapComponent;