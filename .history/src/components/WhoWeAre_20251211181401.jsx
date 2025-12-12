import React, { useEffect, useRef, useState } from 'react';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of component is visible
        rootMargin: '0px',
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

  const styles = {
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: window.innerWidth <= 768 ? '60px 20px' : window.innerWidth <= 1024 ? '80px 60px' : '100px 129px',
      gap: window.innerWidth <= 768 ? '40px' : '70px',
      width: '100%',
      maxWidth: '1440px',
      minHeight: window.innerWidth <= 768 ? 'auto' : '360px',
      background: 'linear-gradient(180deg, #0D98BA -309.11%, #04091D 141.72%)',
      margin: '0 auto',
      boxSizing: 'border-box',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: window.innerWidth <= 768 ? '20px' : '10px',
      maxWidth: '1008px',
      width: '100%',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s',
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: window.innerWidth <= 480 ? '32px' : window.innerWidth <= 768 ? '36px' : '40px',
      lineHeight: window.innerWidth <= 480 ? '42px' : window.innerWidth <= 768 ? '48px' : '60px',
      color: '#FFFFFF',
      margin: 0,
      textAlign: 'center',
    },
    description: {
      fontFamily: "'Lato', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: window.innerWidth <= 480 ? '14px' : window.innerWidth <= 768 ? '15px' : '16px',
      lineHeight: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '26px' : '30px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#FFFFFF',
      margin: 0,
      maxWidth: '1008px',
      width: '100%',
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.contentWrapper}>
        <h2 style={styles.heading}>Who We Are</h2>
        <p style={styles.description}>
          Kinseb is a growth optimization company focused on understanding real user behavior and turning it into meaningful business growth. Through behavioral psychology, AI-powered insights, and continuous experimentation, we help brands remove friction and improve how people experience and convert on their digital platforms.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;