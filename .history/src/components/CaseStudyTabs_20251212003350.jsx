import React, { useState, useEffect, useRef } from 'react';

const CaseStudyTabs = ({ slug }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const componentRef = useRef(null);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
    { id: 'implementation', label: 'Implementation' },
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
    // Smooth scroll to content
    const contentElement = document.getElementById(`${tabId}-content`);
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          overflowY: 'hidden'
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
                transition: 'all 0.3s ease',
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

      {/* Tab Content */}
      <TabContent activeTab={activeTab} slug={slug} />
    </div>
  );
};

// Tab Content Component
const TabContent = ({ activeTab, slug }) => {
  return (
    <div style={{
      width: '100%',
      background: '#0a1628'
    }}>
      {/* Overview Content */}
      <div
        id="overview-content"
        style={{
          display: activeTab === 'overview' ? 'block' : 'none'
        }}
      >
        <OverviewSection slug={slug} />
      </div>

      {/* Challenge Content */}
      <div
        id="challenge-content"
        style={{
          display: activeTab === 'challenge' ? 'block' : 'none'
        }}
      >
        <ChallengeSection slug={slug} />
      </div>

      {/* Solution Content */}
      <div
        id="solution-content"
        style={{
          display: activeTab === 'solution' ? 'block' : 'none'
        }}
      >
        <SolutionSection slug={slug} />
      </div>

      {/* Implementation Content */}
      <div
        id="implementation-content"
        style={{
          display: activeTab === 'implementation' ? 'block' : 'none'
        }}
      >
        <ImplementationSection slug={slug} />
      </div>

      {/* Results Content */}
      <div
        id="results-content"
        style={{
          display: activeTab === 'results' ? 'block' : 'none'
        }}
      >
        <ResultsSection slug={slug} />
      </div>
    </div>
  );
};

// Individual Section Components (Placeholders - you can replace these with actual content)

const OverviewSection = ({ slug }) => {
  const overviewData = {
    'personalization-engine-transforms-user-experience': {
      title: 'Project Overview',
      content: 'This comprehensive CRO project focused on implementing personalized user experiences across all touchpoints. Through advanced segmentation and behavioral targeting, we transformed the customer journey and significantly improved conversion metrics.',
      highlights: [
        'Advanced user segmentation implementation',
        'Personalized content delivery system',
        'Real-time behavioral tracking',
        'A/B testing framework establishment'
      ]
    },
    // Add more case studies as needed
  };

  const data = overviewData[slug] || overviewData['personalization-engine-transforms-user-experience'];

  return (
    <div style={{
      padding: '60px 102px',
      maxWidth: '1440px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '48px',
        color: '#FFFFFF',
        marginBottom: '20px'
      }}>
        {data.title}
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '28px',
        color: '#FFFFFF',
        marginBottom: '30px'
      }}>
        {data.content}
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {data.highlights.map((highlight, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)'
            }} />
            <span style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '28px',
              color: '#FFFFFF'
            }}>
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChallengeSection = ({ slug }) => {
  return (
    <div style={{
      padding: '60px 102px',
      maxWidth: '1440px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '48px',
        color: '#FFFFFF',
        marginBottom: '20px'
      }}>
        The Challenge
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '28px',
        color: '#FFFFFF'
      }}>
        The client faced significant challenges with low conversion rates, high bounce rates, and poor user engagement. Traditional marketing approaches were no longer delivering results, and the company needed a data-driven solution to transform their digital presence.
      </p>
    </div>
  );
};

const SolutionSection = ({ slug }) => {
  return (
    <div style={{
      padding: '60px 102px',
      maxWidth: '1440px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '48px',
        color: '#FFFFFF',
        marginBottom: '20px'
      }}>
        Our Solution
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '28px',
        color: '#FFFFFF'
      }}>
        We implemented a comprehensive CRO strategy that included advanced analytics, personalization engines, A/B testing frameworks, and behavioral psychology principles. Our approach was data-driven, iterative, and focused on continuous improvement.
      </p>
    </div>
  );
};

const ImplementationSection = ({ slug }) => {
  return (
    <div style={{
      padding: '60px 102px',
      maxWidth: '1440px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '48px',
        color: '#FFFFFF',
        marginBottom: '20px'
      }}>
        Implementation Process
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '28px',
        color: '#FFFFFF'
      }}>
        Our implementation followed a structured 90-day roadmap, including discovery phase, strategy development, technical implementation, testing phase, and optimization cycles. We worked closely with the client's team to ensure seamless integration and knowledge transfer.
      </p>
    </div>
  );
};

const ResultsSection = ({ slug }) => {
  return (
    <div style={{
      padding: '60px 102px',
      maxWidth: '1440px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '48px',
        color: '#FFFFFF',
        marginBottom: '20px'
      }}>
        Results & Impact
      </h2>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '28px',
        color: '#FFFFFF'
      }}>
        The results exceeded all expectations, with significant improvements across all key metrics. The client saw immediate impact within the first 30 days, with compounding benefits over the following quarters. The success of this project led to expansion into additional markets and product lines.
      </p>
    </div>
  );
};

export default CaseStudyTabs;