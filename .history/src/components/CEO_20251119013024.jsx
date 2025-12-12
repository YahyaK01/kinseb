import React from 'react';

const CEOFounderSection = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Background blur effects */}
        <div style={styles.ellipseRight}></div>
        <div style={styles.ellipseLeft}></div>
        
        {/* Background image */}
        <div style={styles.backgroundImage}>
          <img 
            src="/images/ceo.png" 
            alt="CEO Founder Sania" 
            style={styles.image}
          />
        </div>
        
        {/* Content overlay */}
        <div style={styles.contentWrapper}>
          {/* Quotation mark image */}
          <img 
            src="/images/6.svg" 
            alt="Quote" 
            style={styles.quoteImage}
          />
          
          <div style={styles.textContent}>
            <p style={styles.paragraph}>
              "CRO isn't just about testing buttons — it's about understanding why people act and using that insight to create lasting growth. Behind every metric is a human story — that's what we optimize for."
            </p>
            
            <div style={styles.highlightContainer}>
              <div style={styles.highlightBox1}>
                <span style={styles.highlightText}>
                  DATA SHOWS WHAT HAPPENS. PSYCHOLOGY REVEALS WHY.
                </span>
              </div>
              <div style={styles.highlightBox2}>
                <span style={styles.highlightText}>
                  OUR JOB IS TO BRIDGE THE TWO.
                </span>
              </div>
            </div>
            
            <div style={styles.authorSection}>
              <div style={styles.authorName}>SANIA BAIG</div>
              <div style={styles.authorTitle}>CEO & Founder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '1440px',
    height: '400px',
    overflow: 'hidden',
    backgroundColor: '#1a2f3a',
  },
  
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '400px',
    left: '0px',
    top: '0px',
  },
  
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  
  ellipseRight: {
    position: 'absolute',
    width: '346px',
    height: '171px',
    right: '100px',
    bottom: '0px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(150px)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  
  ellipseLeft: {
    position: 'absolute',
    width: '197px',
    height: '154px',
    left: '-93px',
    top: '-26.71px',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    filter: 'blur(150px)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  
  contentWrapper: {
    position: 'absolute',
    width: '558px',
    height: '261px',
    right: '139px',
    top: '70.5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    isolation: 'isolate',
    zIndex: 2,
  },
  
  quoteImage: {
    position: 'absolute',
    width: '54px',
    height: '54px',
    left: '-9px',
    top: '0px',
    opacity: '0.7',
    zIndex: 1,
  },
  
  textContent: {
    position: 'absolute',
    width: '558px',
    left: '17px',
    top: '13.79px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  
  paragraph: {
    width: '558px',
    minHeight: '81px',
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '150%',
    letterSpacing: '-0.006em',
    color: '#E6E6E6',
    margin: '0',
  },
  
  highlightContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    maxWidth: '534px',
    marginTop: '20px',
  },
  
  highlightBox1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 10px',
    width: '100%',
    maxWidth: '534px',
    height: '31px',
    background: '#0D98BA',
  },
  
  highlightBox2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 10px',
    width: '100%',
    maxWidth: '299px',
    height: '31px',
    background: '#0D98BA',
  },
  
  highlightText: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '150%',
    letterSpacing: '-0.006em',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    whiteSpace: 'nowrap',
  },
  
  authorSection: {
    position: 'absolute',
    width: '153px',
    height: '54px',
    left: '0px',
    top: '207px',
  },
  
  authorName: {
    position: 'absolute',
    width: '122px',
    height: '30px',
    left: '0px',
    top: '0px',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
  },
  
  authorTitle: {
    position: 'absolute',
    width: '153px',
    height: '24px',
    left: '0px',
    top: '30px',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#0D98BA',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
  },
};

export default CEOFounderSection;