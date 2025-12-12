import React, { useState, useEffect, useRef } from 'react';

const CaseStudies = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => entries.forEach(entry => entry.isIntersecting && setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]))), { threshold: 0.1 });
    document.querySelectorAll('.case-study-card').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const caseStudiesData = [
    {
      id: 1,
      category: "Design + Funnel Optimization",
      title: "E-Commerce Conversion Rate Optimization",
      description: "Transformed the user experience with strategic design improvements and conversion-focused optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      features: [
        "Redesigned product detail pages for clarity",
        "Streamlined checkout to reduce friction",
        "Tested trust badges and interaction cues"
      ],
      metrics: [
        { value: "+37%", label: "CVR Increase" },
        { value: "+45%", label: "Revenue Boost" },
        { value: "+28%", label: "AOV Growth" }
      ],
      buttonText: "View Case Study",
      imagePosition: "left"
    },
    {
      id: 2,
      category: "Design + Funnel Optimization",
      title: "SaaS Platform User Experience Redesign",
      description: "Enhanced user engagement through intuitive interface design and strategic UX improvements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      features: [
        "Redesigned product detail pages for clarity",
        "Streamlined checkout to reduce friction",
        "Tested trust badges and interaction cues"
      ],
      metrics: [
        { value: "+52%", label: "User Retention" },
        { value: "+63%", label: "Engagement" },
        { value: "+41%", label: "Conversions" }
      ],
      buttonText: "View Case Study",
      imagePosition: "right"
    },
    {
      id: 3,
      category: "Design + Funnel Optimization",
      title: "Mobile App Performance Enhancement",
      description: "Optimized mobile experience resulting in significant improvements in user satisfaction and retention.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      features: [
        "Redesigned product detail pages for clarity",
        "Streamlined checkout to reduce friction",
        "Tested trust badges and interaction cues"
      ],
      metrics: [
        { value: "+68%", label: "Speed Boost" },
        { value: "+35%", label: "User Growth" },
        { value: "+49%", label: "Satisfaction" }
      ],
      buttonText: "View Case Study",
      imagePosition: "left"
    }
  ];

  const getStyles = () => ({
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 'clamp(40px, 8vw, 100px) clamp(20px, 8vw, 112px)',
      gap: 'clamp(30px, 4vw, 47px)',
      width: '100%',
      background: '#04091D',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px',
      gap: 'clamp(30px, 4vw, 40px)',
      isolation: 'isolate',
      width: '100%',
      maxWidth: '1224px',
      position: 'relative'
    },
    ellipse1: {
      position: 'absolute',
      width: 'clamp(150px, 20vw, 280px)',
      height: 'clamp(150px, 20vw, 280px)',
      left: 'clamp(-100px, -10vw, -151px)',
      bottom: '20%',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      filter: 'blur(clamp(150px, 20vw, 350px))',
      zIndex: 0,
      borderRadius: '50%',
      animation: 'float 8s ease-in-out infinite',
      opacity: 0.6
    },
    ellipse2: {
      position: 'absolute',
      width: 'clamp(250px, 35vw, 560px)',
      height: 'clamp(250px, 35vw, 560px)',
      left: 'clamp(-150px, -15vw, -213px)',
      top: 'clamp(-100px, -12vw, -186px)',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      filter: 'blur(clamp(150px, 20vw, 350px))',
      zIndex: 1,
      borderRadius: '50%',
      animation: 'float 10s ease-in-out infinite',
      animationDelay: '2s',
      opacity: 0.6
    },
    ellipse3: {
      position: 'absolute',
      width: 'clamp(180px, 25vw, 350px)',
      height: 'clamp(180px, 25vw, 350px)',
      right: 'clamp(-100px, -10vw, -150px)',
      top: '50%',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      filter: 'blur(clamp(150px, 20vw, 350px))',
      zIndex: 2,
      borderRadius: '50%',
      animation: 'float 12s ease-in-out infinite',
      animationDelay: '4s',
      opacity: 0.6
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 'clamp(28px, 5vw, 40px)',
      lineHeight: '1.5',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      textTransform: 'capitalize',
      color: '#FFFFFF',
      zIndex: 3,
      margin: 0,
      animation: 'fadeInDown 1s ease-out'
    },
    caseStudiesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px',
      gap: 'clamp(40px, 6vw, 80px)',
      width: '100%',
      zIndex: 4
    },
    caseStudyRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: 'clamp(20px, 4vw, 50px)',
      width: '100%',
      opacity: 0,
      transform: 'translateY(50px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    caseStudyRowVisible: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    imageContainer: {
      width: '100%',
      maxWidth: '581px',
      height: 'clamp(300px, 40vw, 484px)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0px 0px 15px #04091D',
      borderRadius: '20px',
      flexShrink: 0,
      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(4, 9, 29, 0) 0%, rgba(4, 9, 29, 0.6) 100%)',
      opacity: 0,
      transition: 'opacity 0.5s ease'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: 'clamp(16px, 2vw, 22px)',
      width: '100%',
      maxWidth: '593px'
    },
    category: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(13px, 1.5vw, 15px)',
      lineHeight: '22px',
      textTransform: 'capitalize',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: 0,
      animation: 'slideInLeft 0.6s ease-out'
    },
    title: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 'clamp(24px, 3.5vw, 35px)',
      lineHeight: '1.4',
      letterSpacing: '-0.03em',
      textTransform: 'capitalize',
      color: '#FFFFFF',
      margin: 0,
      animation: 'slideInLeft 0.7s ease-out'
    },
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: 'clamp(15px, 2vw, 20px)',
      width: '100%'
    },
    description: {
      fontFamily: "'Lato', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 'clamp(13px, 1.5vw, 14px)',
      lineHeight: '150%',
      letterSpacing: '-0.006em',
      color: '#E6E6E6',
      margin: 0,
      animation: 'slideInLeft 0.8s ease-out'
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '4px',
      width: '100%'
    },
    featureItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '5px',
      animation: 'fadeInUp 0.6s ease-out',
      animationFillMode: 'both'
    },
    checkIcon: {
      width: '23px',
      height: '23px',
      minWidth: '23px',
      color: '#3AA1DE',
      flexShrink: 0,
      animation: 'scale 0.4s ease-out'
    },
    featureText: {
      fontFamily: "'Lato', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 'clamp(12px, 1.5vw, 14px)',
      lineHeight: '150%',
      letterSpacing: '-0.006em',
      color: '#E6E6E6',
      margin: 0,
      flex: 1
    },
    metricsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: 'clamp(10px, 2vw, 15px)',
      flexWrap: 'wrap',
      width: '100%'
    },
    metricBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px clamp(20px, 4vw, 45px)',
      background: '#07334C',
      borderRadius: '10px',
      minWidth: 'clamp(120px, 15vw, 173px)',
      flex: '1',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      animation: 'scaleIn 0.5s ease-out',
      animationFillMode: 'both'
    },
    metricValue: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px'
    },
    metricNumber: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 'clamp(16px, 2vw, 19px)',
      lineHeight: '28px',
      letterSpacing: '0.02em',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: 0
    },
    chartIcon: {
      width: '20px',
      height: '20px',
      minWidth: '20px'
    },
    metricLabel: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'clamp(11px, 1.2vw, 12px)',
      lineHeight: '18px',
      textAlign: 'center',
      letterSpacing: '0.02em',
      color: '#FFFFFF',
      margin: 0,
      marginTop: '5px'
    },
    primaryButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 24px',
      gap: '10px',
      background: '#0D98BA',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      animation: 'fadeInUp 1s ease-out',
      width: 'fit-content',
      minWidth: 'clamp(180px, 20vw, 210px)'
    },
    buttonText: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 'clamp(14px, 1.5vw, 16px)',
      lineHeight: '24px',
      letterSpacing: '0.02em',
      color: '#000000'
    },
    viewAllButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 24px',
      gap: '10px',
      border: '2px solid #0D98BA',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      borderRadius: '6px',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '20px',
      animation: 'fadeInUp 1.2s ease-out',
      minWidth: 'clamp(200px, 25vw, 250px)'
    },
    viewAllButtonText: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 'clamp(14px, 1.5vw, 16px)',
      lineHeight: '24px',
      letterSpacing: '0.02em',
      color: '#0D98BA'
    }
  });

  const styles = getStyles();

  return (
    <>
      <style>
        {`
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

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
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

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes scale {
            from {
              transform: scale(0);
            }
            to {
              transform: scale(1);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(0) translateX(20px);
            }
            75% {
              transform: translateY(20px) translateX(10px);
            }
          }

          .case-study-card .image-container:hover {
            transform: scale(1.05);
            box-shadow: 0px 10px 30px rgba(13, 152, 186, 0.3);
          }

          .case-study-card .image-container:hover .image-overlay {
            opacity: 1;
          }

          .case-study-card .metric-box:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 20px rgba(13, 152, 186, 0.4);
          }

          .case-study-card .primary-button:hover {
            background: #0BA5C9;
            transform: translateY(-2px);
            box-shadow: 0px 6px 12px rgba(13, 152, 186, 0.4);
          }

          .case-study-card .primary-button:active {
            transform: translateY(0);
          }

          .view-all-button:hover {
            background: #0D98BA;
            transform: translateY(-2px);
          }

          .view-all-button:hover .view-all-button-text {
            color: #000000;
          }

          .feature-item:nth-child(1) {
            animation-delay: 0.2s;
          }

          .feature-item:nth-child(2) {
            animation-delay: 0.3s;
          }

          .feature-item:nth-child(3) {
            animation-delay: 0.4s;
          }

          .metric-box:nth-child(1) {
            animation-delay: 0.3s;
          }

          .metric-box:nth-child(2) {
            animation-delay: 0.4s;
          }

          .metric-box:nth-child(3) {
            animation-delay: 0.5s;
          }

          @media (max-width: 1024px) {
            .case-study-row {
              flex-direction: column !important;
            }
            
            .image-container {
              max-width: 100% !important;
            }
            
            .content-container {
              max-width: 100% !important;
            }
          }

          @media (max-width: 768px) {
            .metrics-container {
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .metric-box {
              min-width: 100% !important;
            }
          }
        `}
      </style>
      <section style={styles.section}>
        <div style={styles.ellipse1}></div>
        <div style={styles.ellipse2}></div>
        <div style={styles.ellipse3}></div>
        
        <div style={styles.container}>
          <h2 style={styles.heading}>Case Studies</h2>
          
          <div style={styles.caseStudiesWrapper}>
            {caseStudiesData.map((caseStudy, index) => (
              <div 
                key={caseStudy.id}
                className="case-study-card case-study-row"
                data-index={index}
                style={{
                  ...styles.caseStudyRow,
                  flexDirection: window.innerWidth > 1024 
                    ? (caseStudy.imagePosition === 'left' ? 'row' : 'row-reverse')
                    : 'column',
                  ...(visibleCards.has(String(index)) && styles.caseStudyRowVisible)
                }}
              >
                <div 
                  className="image-container"
                  style={{
                    ...styles.imageContainer,
                    backgroundImage: `url(${caseStudy.image})`
                  }}
                >
                  <div className="image-overlay" style={styles.imageOverlay}></div>
                </div>
                
                <div className="content-container" style={styles.contentContainer}>
                  <p style={styles.category}>{caseStudy.category}</p>
                  
                  <h3 style={styles.title}>{caseStudy.title}</h3>
                  
                  <div style={styles.detailsContainer}>
                    <p style={styles.description}>{caseStudy.description}</p>
                    
                    <div style={styles.featuresList}>
                      {caseStudy.features.map((feature, idx) => (
                        <div key={idx} className="feature-item" style={styles.featureItem}>
                          <svg 
                            style={styles.checkIcon} 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                          <p style={styles.featureText}>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="metrics-container" style={styles.metricsContainer}>
                    {caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="metric-box" style={styles.metricBox}>
                        <div style={styles.metricValue}>
                          <p style={styles.metricNumber}>{metric.value}</p>
                          <svg 
                            style={styles.chartIcon} 
                            viewBox="0 0 20 20" 
                            fill="none"
                          >
                            <rect x="2" y="10" width="3" height="8" fill="#3AA1DE" rx="1"/>
                            <rect x="8" y="6" width="3" height="12" fill="#3AA1DE" rx="1"/>
                            <rect x="14" y="2" width="3" height="16" fill="#3AA1DE" rx="1"/>
                          </svg>
                        </div>
                        <p style={styles.metricLabel}>{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <button className="primary-button" style={styles.primaryButton}>
                    <span style={styles.buttonText}>{caseStudy.buttonText}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="view-all-button" style={styles.viewAllButton}>
            <span className="view-all-button-text" style={styles.viewAllButtonText}>
              View All Case Studies
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;