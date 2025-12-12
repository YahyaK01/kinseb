import React from 'react';

const WhoWeAre = () => {
  const styles = {
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 129px',
      gap: '70px',
      width: '100%',
      maxWidth: '1440px',
      minHeight: '360px',
      background: 'linear-gradient(180deg, #0D98BA -309.11%, #04091D 141.72%)',
      margin: '0 auto',
      boxSizing: 'border-box',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      maxWidth: '1008px',
      width: '100%',
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '40px',
      lineHeight: '60px',
      color: '#FFFFFF',
      margin: 0,
      textAlign: 'center',
    },
    description: {
      fontFamily: "'Lato', sans-serif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '30px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#FFFFFF',
      margin: 0,
      maxWidth: '1008px',
      width: '100%',
    },
  };

  return (
    <section style={styles.section}>
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