import React, { useEffect, useRef, useState } from 'react';

const CaseStudies = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setVisibleItems((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.case-study-item');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const caseStudiesData = [
    {
      id: 1,
      category: "Design + Funnel Optimization",
      title: "E-Commerce Conversion Rate Optimization",
      description: "Transformed the user experience with strategic design improvements and conversion-focused optimization.",
      image: "/images/130.jpg",
      features: [
        "Redesigned product detail pages for clarity",
        "Streamlined checkout to reduce friction",
        "Tested trust badges and interaction cues"
      ],
      metrics: [
        { value: "+37%", label: "CVR Increase" },
        { value: "+37%", label: "CVR Increase" },
        { value: "+37%", label: "CVR Increase" }
      ],
      buttonText: "View Case Study",
      imagePosition: "left"
    },
    {
      id: 2,
      category: "Design + Funnel Optimization",
      title: "E-Commerce Conversion Rate Optimization",
      description: "Transformed the user experience with strategic design improvements and conversion-focused optimization.",
      image: "/images/130.jpg",
      features: [
        "Redesigned product detail pages for clarity",
        "Streamlined checkout to reduce friction",
        "Tested trust badges and interaction cues"
      ],
      metrics: [
        { value: "+37%", label: "CVR Increase" },
        { value: "+37%", label: "CVR Increase" },
        { value: "+37%", label: "CVR Increase" }
      ],
      buttonText: "View Case Study",
      imagePosition: "right"
    },
    {
      id: 3,
      category: "Design + Funnel Optimization",
      title: "E-Commerce Conversion Rate Optimization",
      description: "Transformed the user experience with strategic design improvements and conversion-focused optimization.",
      image: "/images/130.jpg",
      features: [
        "Redesigned product detail pages for clarity",
        "Streamlined checkout to reduce friction",
        "Tested trust badges and interaction cues"
      ],
      metrics: [
        { value: "+37%", label: "CVR Increase" },
        { value: "+37%", label: "CVR Increase" },
        { value: "+37%", label: "CVR Increase" }
      ],
      buttonText: "View Case Study",
      imagePosition: "left"
    }
  ];

  const styles = {
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 112px',
      gap: '47px',
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      background: '#04091D',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px',
      gap: '40px',
      isolation: 'isolate',
      width: '100%',
      maxWidth: '1224px',
      position: 'relative'
    },
    ellipse1: {
      position: 'absolute',
      width: '280px',
      height: '280px',
      left: '-151px',
      bottom: '300px',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      filter: 'blur(350px)',
      zIndex: 0,
      borderRadius: '50%'
    },
    ellipse2: {
      position: 'absolute',
      width: '560px',
      height: '560px',
      left: '-213px',
      top: '-186px',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      filter: 'blur(350px)',
      zIndex: 1,
      borderRadius: '50%'
    },
    ellipse3: {
      position: 'absolute',
      width: '350px',
      height: '350px',
      right: '-150px',
      top: '50%',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      filter: 'blur(350px)',
      zIndex: 2,
      borderRadius: '50%'
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '40px',
      lineHeight: '60px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      textTransform: 'capitalize',
      color: '#FFFFFF',
      zIndex: 3,
      margin: 0,
      opacity: 0,
      animation: 'fadeInUp 0.8s ease-out forwards'
    },
    caseStudiesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px',
      gap: '80px',
      width: '100%',
      maxWidth: '1224px',
      zIndex: 4
    },
    caseStudyRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '50px',
      width: '100%'
    },
    caseStudyRowReverse: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      padding: '0px',
      gap: '50px',
      width: '100%'
    },
    imageContainer: {
      width: '581px',
      height: '484px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0px 0px 15px #04091D',
      borderRadius: '20px',
      flexShrink: 0
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '22px',
      width: '593px'
    },
    category: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '22px',
      textTransform: 'capitalize',
      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: 0
    },
    title: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '35px',
      lineHeight: '52px',
      letterSpacing: '-0.03em',
      textTransform: 'capitalize',
      color: '#FFFFFF',
      margin: 0
    },
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '20px',
      width: '100%'
    },
    description: {
      fontFamily: "'Lato', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '150%',
      letterSpacing: '-0.006em',
      color: '#E6E6E6',
      margin: 0
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '4px'
    },
    featureItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '5px'
    },
    checkIcon: {
      width: '23px',
      height: '23px',
      color: '#3AA1DE',
      flexShrink: 0
    },
    featureText: {
      fontFamily: "'Lato', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
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
      gap: '15px'
    },
    metricBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 45px',
      background: '#07334C',
      borderRadius: '10px',
      minWidth: '173px'
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
      fontSize: '19px',
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
      height: '20px'
    },
    metricLabel: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      textAlign: 'center',
      letterSpacing: '0.02em',
      color: '#FFFFFF',
      margin: 0
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
      transition: 'all 0.3s ease'
    },
    buttonText: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
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
      opacity: 0,
      animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
    },
    viewAllButtonText: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.02em',
      color: '#0D98BA'
    },
    mobileImageContainer: {
      display: 'none'
    }
  };

  const getAnimationStyles = (id, imagePosition) => {
    const isVisible = visibleItems.includes(id.toString());
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : imagePosition === 'left' ? 'translateX(-50px)' : 'translateX(50px)',
      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
    };
  };

  return (
    <>
      <style>
        {`
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

          .primary-button:hover {
            background: #0BA8CC !important;
            transform: translateY(-2px);
            box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3) !important;
          }

          .view-all-button:hover {
            background: rgba(13, 152, 186, 0.1) !important;
            transform: translateY(-2px);
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .section {
              padding: 50px 20px !important;
              gap: 30px !important;
            }

            .container {
              gap: 30px !important;
            }

            .heading {
              font-size: 28px !important;
              line-height: 42px !important;
            }

            .case-studies-wrapper {
              gap: 50px !important;
            }

            .case-study-row,
            .case-study-row-reverse {
              flex-direction: column !important;
              gap: 25px !important;
            }

            /* Hide desktop image on mobile */
            .case-study-row .image-container,
            .case-study-row-reverse .image-container {
              display: none !important;
            }

            /* Show mobile image */
            .mobile-image-container {
              display: block !important;
              width: 100% !important;
              height: 280px !important;
              background-size: cover !important;
              background-position: center !important;
              box-shadow: 0px 0px 15px #04091D !important;
              border-radius: 20px !important;
            }

            .content-container {
              width: 100% !important;
              gap: 18px !important;
            }

            .category {
              font-size: 13px !important;
              line-height: 20px !important;
            }

            .title {
              font-size: 24px !important;
              line-height: 36px !important;
            }

            .description {
              font-size: 13px !important;
            }

            .feature-text {
              font-size: 13px !important;
            }

            .check-icon {
              width: 20px !important;
              height: 20px !important;
            }

            .metrics-container {
              flex-wrap: nowrap !important;
              gap: 8px !important;
              justify-content: space-between !important;
              width: 100% !important;
            }

            .metric-box {
              padding: 8px 12px !important;
              min-width: auto !important;
              flex: 1 !important;
            }

            .metric-number {
              font-size: 15px !important;
              line-height: 22px !important;
            }

            .metric-label {
              font-size: 10px !important;
              line-height: 14px !important;
            }

            .chart-icon {
              width: 14px !important;
              height: 14px !important;
            }

            .primary-button {
              width: auto !important;
              padding: 12px 32px !important;
              align-self: flex-start !important;
            }

            .view-all-button {
              width: auto !important;
              padding: 12px 32px !important;
              align-self: center !important;
            }

            .button-text,
            .view-all-button-text {
              font-size: 15px !important;
            }

            .ellipse1 {
              width: 180px !important;
              height: 180px !important;
              left: -90px !important;
              bottom: 200px !important;
            }

            .ellipse2 {
              width: 300px !important;
              height: 300px !important;
              left: -150px !important;
              top: -100px !important;
            }

            .ellipse3 {
              width: 200px !important;
              height: 200px !important;
              right: -100px !important;
            }
          }

          @media (max-width: 480px) {
            .section {
              padding: 40px 16px !important;
            }

            .heading {
              font-size: 24px !important;
              line-height: 36px !important;
            }

            .title {
              font-size: 20px !important;
              line-height: 30px !important;
            }

            .mobile-image-container {
              height: 220px !important;
            }

            .metrics-container {
              gap: 6px !important;
            }

            .metric-box {
              padding: 8px 8px !important;
            }

            .metric-number {
              font-size: 14px !important;
              line-height: 20px !important;
            }

            .metric-label {
              font-size: 9px !important;
              line-height: 13px !important;
            }
          }
        `}
      </style>
      <section style={styles.section} className="section">
        <div style={styles.ellipse1} className="ellipse1"></div>
        <div style={styles.ellipse2} className="ellipse2"></div>
        <div style={styles.ellipse3} className="ellipse3"></div>
        
        <div style={styles.container} className="container">
          <h2 style={styles.heading} className="heading">Case Studies</h2>
          
          <div style={styles.caseStudiesWrapper} className="case-studies-wrapper">
            {caseStudiesData.map((caseStudy) => (
              <div 
                key={caseStudy.id}
                data-id={caseStudy.id}
                className={`case-study-item ${caseStudy.imagePosition === 'left' ? 'case-study-row' : 'case-study-row-reverse'}`}
                style={{
                  ...(caseStudy.imagePosition === 'left' ? styles.caseStudyRow : styles.caseStudyRowReverse),
                  ...getAnimationStyles(caseStudy.id, caseStudy.imagePosition)
                }}
              >
                <div 
                  className="image-container"
                  style={{
                    ...styles.imageContainer,
                    backgroundImage: `url(${caseStudy.image})`
                  }}
                ></div>
                
                <div style={styles.contentContainer} className="content-container">
                  <p style={styles.category} className="category">{caseStudy.category}</p>
                  
                  <h3 style={styles.title} className="title">{caseStudy.title}</h3>
                  
                  {/* Mobile Image - Shows after title on mobile only */}
                  <div 
                    className="mobile-image-container"
                    style={{
                      ...styles.mobileImageContainer,
                      backgroundImage: `url(${caseStudy.image})`
                    }}
                  ></div>
                  
                  <div style={styles.detailsContainer} className="details-container">
                    <p style={styles.description} className="description">{caseStudy.description}</p>
                    
                    <div style={styles.featuresList}>
                      {caseStudy.features.map((feature, index) => (
                        <div key={index} style={styles.featureItem}>
                          <svg 
                            style={styles.checkIcon}
                            className="check-icon"
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                          <p style={styles.featureText} className="feature-text">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div style={styles.metricsContainer} className="metrics-container">
                    {caseStudy.metrics.map((metric, index) => (
                      <div key={index} style={styles.metricBox} className="metric-box">
                        <div style={styles.metricValue}>
                          <p style={styles.metricNumber} className="metric-number">{metric.value}</p>
                          <svg 
                            style={styles.chartIcon}
                            className="chart-icon"
                            viewBox="0 0 20 20" 
                            fill="none"
                          >
                            <rect x="2" y="10" width="3" height="8" fill="#3AA1DE"/>
                            <rect x="8" y="6" width="3" height="12" fill="#3AA1DE"/>
                            <rect x="14" y="2" width="3" height="16" fill="#3AA1DE"/>
                          </svg>
                        </div>
                        <p style={styles.metricLabel} className="metric-label">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <button style={styles.primaryButton} className="primary-button">
                    <span style={styles.buttonText} className="button-text">{caseStudy.buttonText}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button style={styles.viewAllButton} className="view-all-button">
            <span style={styles.viewAllButtonText} className="view-all-button-text">View All Case Studies</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;