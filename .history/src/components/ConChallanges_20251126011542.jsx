import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ConversionChallenges = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
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
  
  const cards = [
    {
      icon: "/images/15.png",
      title: "You're Getting Traffic, But Not Results",
      description: "Visitors come, but bounce fast. We analyze your site's flow and fix what's causing drop-offs — so clicks turn into customers.",
      link: "Optimize My Website →",
      route: "/optimize-website"
    },
    {
      icon: "/images/card-icon-2.png",
      title: "You're Spending More, But Earning Less",
      description: "Your ad spend's climbing, but ROI isn't. We align landing pages and funnels with user intent to make every click count.",
      link: "Improve My Conversions →",
      route: "/improve-conversions"
    },
    {
      icon: "/images/card-icon-3.png",
      title: "Your Users Drop Off Mid-Journey",
      description: "Users start but don't finish. We track where they leave and redesign key steps for smoother, high-conversion experiences.",
      link: "Fix My Funnel →",
      route: "/fix-funnel"
    },
    {
      icon: "/images/card-icon-4.png",
      title: "Your Message Isn't Hitting Home",
      description: "If your value isn't clear, users scroll away. We sharpen your story and visuals so visitors instantly see why they should choose you.",
      link: "Refine My Messaging →",
      route: "/refine-messaging"
    }
  ];

 const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '100px 102px',
  gap: '10px',
  width: '100%',
  minHeight: '812px',
  backgroundColor: '#04091D', // Solid dark background color
  backgroundImage: 'linear-gradient(0deg, rgba(4, 9, 29, 0.8), rgba(4, 9, 29, 0.8)), url(/images/13.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(40px)',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
};

  const backgroundPatternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.03,
    backgroundImage: `
      radial-gradient(circle at 20% 50%, rgba(58, 161, 222, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(58, 161, 222, 0.15) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  };

  const innerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '50px',
    width: '100%',
    maxWidth: '1234px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  };

  const topSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '42px',
    width: '100%',
    flexWrap: 'wrap',
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    flex: '1 1 500px',
    minWidth: '300px',
  };

  const badgeStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 34px',
    gap: '10px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
    border: '1px solid #0D94BB',
    boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
    borderRadius: '25px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
    transition: 'all 0.8s ease-out',
  };

  const badgeIconStyle = {
    width: '25px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const badgeTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#04091D',
    margin: 0,
  };

  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'clamp(28px, 5vw, 40px)',
    lineHeight: '1.5',
    color: '#FFFFFF',
    margin: 0,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.9s ease-out 0.2s',
  };

  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '20px',
    flex: '1 1 450px',
    minWidth: '300px',
  };

  const paragraphStyle = {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 'clamp(15px, 2vw, 17px)',
    lineHeight: '160%',
    letterSpacing: '-0.006em',
    color: '#FFFFFF',
    margin: 0,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.9s ease-out 0.3s',
  };

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px 28px',
    gap: '10px',
    background: '#0D98BA',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transitionDelay: '0.4s',
  };

  const buttonHoverStyle = {
    background: '#0B829F',
    transform: 'translateY(-2px)',
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)',
  };

  const buttonTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '17px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#000000',
    margin: 0,
  };

  const arrowStyle = {
    width: '16px',
    height: '16px',
    objectFit: 'contain',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '34px',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const cardStyle = (index) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '32px 24px',
    gap: '10px',
    flex: '1 1 250px',
    minWidth: '250px',
    maxWidth: '340px',
    background: 'rgba(4, 22, 41, 0.6)',
    border: '1px solid rgba(58, 161, 222, 0.2)',
    backdropFilter: 'blur(2px)',
    borderRadius: '12px',
    boxSizing: 'border-box',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s ease-out ${0.5 + index * 0.15}s`,
    height: 'auto',
  });

  const cardInnerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '15px',
    width: '100%',
  };

  const iconContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '10px',
    width: '80px',
    height: '80px',
  };

  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '10px',
    width: '100%',
  };

  const cardTitleStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '150%',
    letterSpacing: '-0.006em',
    color: '#FFFFFF',
    margin: 0,
    width: '100%',
  };

  const cardDescriptionStyle = {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
    margin: 0,
    width: '100%',
  };

  const cardLineStyle = {
    width: '100%',
    height: '0px',
    border: 'none',
    borderTop: '1px solid rgba(58, 161, 222, 0.9)',
    margin: 0,
  };

  const cardLinkStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.02em',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'opacity 0.3s ease',
  };

  const [buttonHover, setButtonHover] = useState(false);

  const responsiveStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Lato:wght@400;700&display=swap');
    

    body {
  background-color: #04091D;
  margin: 0;
  padding: 0;
}
    @media (max-width: 1200px) {
      .cc-conversion-container {
        padding: 80px 60px !important;
      }
         .cc-right-column {
        gap: 16px !important;
        margin-top: -40px !important;
      }
    }
    
   @media (max-width: 992px) {
      .cc-conversion-container {
        padding: 60px 40px !important;
      }
      
      .cc-top-section {
        flex-direction: column !important;
        gap: 0px !important;
      
      }
      
      .cc-left-column {
        gap: 20px !important;
        margin-bottom: 0px !important;
      }
      
      .cc-right-column {
        gap: 16px !important;
        margin-top: -450px !important;
      }
      
      .cc-cards-container {
        justify-content: center !important;
        margin-top:-100px;
      }
    }
    
    @media (max-width: 768px) {
      .cc-conversion-container {
        padding: 50px 24px !important;
      }
      
      .cc-left-column, .cc-right-column {
        min-width: 100% !important;
      }
      
      .cc-cards-container {
        gap: 0px !important;
     
      }
      
      .cc-challenge-card {
        max-width: 100% !important;
        min-width: 100% !important;
        margin-bottom:13px;
      }

       .cc-right-column {
      
        margin-top: -470px !important;
      }
    }
    
  @media (max-width: 480px) {
      .cc-conversion-container {
        padding: 40px 16px !important;
      }
      
      .cc-challenge-badge {
        padding: 5px 14px !important;
      }
      
      .cc-challenge-badge p {
        font-size: 12px !important;
      }
      
      .cc-challenge-badge img {
        width: 18px !important;
        height: 18px !important;
      }
      
      .cc-right-column {
        gap: 14px !important;
        margin-top: -525px !important;
      }
      
      .cc-main-heading {
        font-size: 22px !important;
        line-height: 1.3 !important;
        max-width: 100% !important;
      }
      
      .cc-right-column p {
        font-size: 13px !important;
        line-height: 140% !important;
      }
      
      .cc-get-touch-btn {
        padding: 8px 16px !important;
      }
      
      .cc-get-touch-btn span {
        font-size: 13px !important;
      }
      
      .cc-cards-container {
        margin-top: -130px !important;
      }
      
     .cc-challenge-card {
        max-width: 75% !important;
        min-width: 75% !important;
        min-height: 280px !important;
      }
    }
    @media (max-width: 390px) {
      .cc-main-heading {
        font-size: 22px !important;
      }
      
      .cc-right-column p {
        font-size: 12px !important;
      }
      
      .cc-right-column {
        margin-top: -530px !important;
      }

      .cc-cards-container {
       margin-top:-130px
      }
          .cc-challenge-card {
        max-width: 80% !important;
        min-width: 80% !important;
        min-height: 280px !important;
         margin-bottom:15px;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section
        ref={sectionRef}
        style={containerStyle}
        className="cc-conversion-container"
      >
        <div style={backgroundPatternStyle}></div>
        <div style={innerContainerStyle}>
          <div style={topSectionStyle} className="cc-top-section">
            <div style={leftColumnStyle} className="cc-left-column">
              <div style={badgeStyle} className="cc-challenge-badge">
                <div style={badgeIconStyle}>
                  <img 
                    src="/images/conchallenge.png" 
                    alt="Conversion Challenges" 
                    style={{width: '25px', height: '25px', objectFit: 'contain'}}
                  />
                </div>
                <p style={badgeTextStyle}>Conversion Challenges</p>
              </div>
              <h2 style={headingStyle} className="cc-main-heading">
                What's Stopping Your Website from Converting?
              </h2>
            </div>

            <div style={rightColumnStyle} className="cc-right-column">
              <p style={paragraphStyle}>
                You don't need more traffic — you need more results.
              </p>
              <p style={{...paragraphStyle, marginTop: '-14px'}}>
                You're doing the hard work — running ads, driving traffic, creating offers. But something's not clicking. We identify the hidden roadblocks that keep visitors from becoming customers — and turn guesswork into measurable growth.
              </p>
              <button
                style={buttonHover ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
                className="cc-get-touch-btn"
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
                onClick={() => navigate('/contact-us')}
              >
                <span style={buttonTextStyle}>Get in Touch</span>
                <img src="/images/arrow.png" alt="Arrow" style={arrowStyle} />
              </button>
            </div>
          </div>

          <div style={cardsContainerStyle} className="cc-cards-container">
            {cards.map((card, index) => (
              <div key={index} style={cardStyle(index)} className="cc-challenge-card">
                <div style={cardInnerStyle}>
                  <div style={iconContainerStyle}>
                    <img 
                      src={card.icon} 
                      alt={card.title} 
                      style={{width: '80px', height: '80px', objectFit: 'contain'}}
                    />
                  </div>
                  <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{card.title}</h3>
                    <p style={cardDescriptionStyle}>{card.description}</p>
                    <hr style={cardLineStyle} />
                    <a
                      href={card.route}
                      style={cardLinkStyle}
                      onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      {card.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConversionChallenges;