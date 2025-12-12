// components/CaseStudyTabs.jsx
import React, { useState, useEffect, useRef } from 'react';

const CaseStudyTabs = ({ activeTab, setActiveTab }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const componentRef = useRef(null);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
    { id: 'client testimonial', label: 'Client Testimonial' },
    { id: 'results', label: 'Results' }
  ];

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

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Smooth scroll to content section
    setTimeout(() => {
      const contentElement = document.getElementById(`${tabId}-section`);
      if (contentElement) {
        const yOffset = -100; // Offset for smooth scrolling
        const y = contentElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div ref={componentRef} style={{
      width: '100%',
      background: '#0a1628',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: windowWidth <= 768 ? '40px 20px 0px' : '60px 40px 0px 102px',
        width: '100%',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        {/* Tabs Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: '0px',
          gap: windowWidth <= 768 ? '20px' : '40px',
          width: '100%',
          maxWidth: '1236px',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'thin',
          scrollbarColor: '#0D98BA #041629'
        }}>
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 20px',
                gap: '10px',
                minWidth: 'fit-content',
                height: '70px',
                borderRadius: '8px 8px 0px 0px',
                cursor: 'pointer',
                background: activeTab === tab.id ? 'rgba(13, 152, 186, 0.1)' : 'transparent',
                borderBottom: activeTab === tab.id ? '3px solid #0D98BA' : '3px solid transparent',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)',
                transition: `all 0.3s ease, opacity 0.8s ease-out ${0.1 + index * 0.1}s, transform 0.8s ease-out ${0.1 + index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(13, 152, 186, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: activeTab === tab.id ? 600 : 500,
                fontSize: windowWidth <= 768 ? '14px' : '16px',
                lineHeight: '24px',
                color: activeTab === tab.id ? '#0D98BA' : '#FFFFFF',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease'
              }}>
                {tab.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Border Line */}
        <div style={{
          width: windowWidth <= 768 ? '100%' : '1196px',
          height: '2px',
          background: '#848586',
          borderRadius: '10px',
          marginTop: '-2px'
        }} />
      </div>
    </div>
  );
};

export default CaseStudyTabs;