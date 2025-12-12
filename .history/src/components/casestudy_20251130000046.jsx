import React from 'react';

const CaseStudies = () => {
  const caseStudiesData = [
    {
      id: 1,
      category: "Design + Funnel Optimization",
      title: "E-Commerce Conversion Rate Optimization",
      description: "Transformed the user experience with strategic design improvements and conversion-focused optimization.",
      image: "Whisk_fb19eb740213206921e42635c1911104dr.jpg",
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
      image: "Whisk_fb19eb740213206921e42635c1911104dr.jpg",
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
      image: "Whisk_fb19eb740213206921e42635c1911104dr.jpg",
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
      margin: 0
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
      marginTop: '20px'
    },
    viewAllButtonText: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.02em',
      color: '#0D98BA'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.ellipse1}></div>
      <div style={styles.ellipse2}></div>
      <div style={styles.ellipse3}></div>
      
      <div style={styles.container}>
        <h2 style={styles.heading}>Case Studies</h2>
        
        <div style={styles.caseStudiesWrapper}>
          {caseStudiesData.map((caseStudy) => (
            <div 
              key={caseStudy.id} 
              style={caseStudy.imagePosition === 'left' ? styles.caseStudyRow : styles.caseStudyRowReverse}
            >
              <div 
                style={{
                  ...styles.imageContainer,
                  backgroundImage: `url(${caseStudy.image})`
                }}
              ></div>
              
              <div style={styles.contentContainer}>
                <p style={styles.category}>{caseStudy.category}</p>
                
                <h3 style={styles.title}>{caseStudy.title}</h3>
                
                <div style={styles.detailsContainer}>
                  <p style={styles.description}>{caseStudy.description}</p>
                  
                  <div style={styles.featuresList}>
                    {caseStudy.features.map((feature, index) => (
                      <div key={index} style={styles.featureItem}>
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
                
                <div style={styles.metricsContainer}>
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index} style={styles.metricBox}>
                      <div style={styles.metricValue}>
                        <p style={styles.metricNumber}>{metric.value}</p>
                        <svg 
                          style={styles.chartIcon} 
                          viewBox="0 0 20 20" 
                          fill="none"
                        >
                          <rect x="2" y="10" width="3" height="8" fill="#3AA1DE"/>
                          <rect x="8" y="6" width="3" height="12" fill="#3AA1DE"/>
                          <rect x="14" y="2" width="3" height="16" fill="#3AA1DE"/>
                        </svg>
                      </div>
                      <p style={styles.metricLabel}>{metric.label}</p>
                    </div>
                  ))}
                </div>
                
                <button style={styles.primaryButton}>
                  <span style={styles.buttonText}>{caseStudy.buttonText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button style={styles.viewAllButton}>
          <span style={styles.viewAllButtonText}>View All Case Studies</span>
        </button>
      </div>
    </section>
  );
};

export default CaseStudies;