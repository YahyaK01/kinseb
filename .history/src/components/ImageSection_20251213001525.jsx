// components/ImageSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const ImageSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      { threshold: 0.1 }
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

  return (
    <div
      ref={sectionRef}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: windowWidth < 768 ? '20px' : '40px',
        boxSizing: 'border-box',
        backgroundColor: '#04091D',
      }}
    >
      {/* Frame 1160445462 - Image Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: windowWidth < 768 ? '50vh' : '80vh',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Frame 1160445463 - Image Placeholder */}
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            position: 'relative',
          }}
        >
          {/* Image Placeholder Icon */}
          <svg
            width={windowWidth < 768 ? '60' : '80'}
            height={windowWidth < 768 ? '60' : '80'}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#999"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              marginBottom: '16px',
            }}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          
          {/* Image Placeholder Text */}
          <div
            style={{
              fontSize: windowWidth < 768 ? '14px' : '18px',
              color: '#666',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Image Placeholder
          </div>
          
          <div
            style={{
              fontSize: windowWidth < 768 ? '12px' : '14px',
              color: '#999',
              marginTop: '8px',
              textAlign: 'center',
            }}
          >
            Click to upload or drag and drop
          </div>

          {/* Optional: Add actual image here */}
          {/* <img 
            src="your-image-url.jpg" 
            alt="Description" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }} 
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;