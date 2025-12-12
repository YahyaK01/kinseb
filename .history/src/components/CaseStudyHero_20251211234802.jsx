// CaseStudySections/HeroSection.jsx
import React from 'react';

export const HeroSection = ({ data, windowWidth }) => {
  return (
    <div style={{
      background: '#041629',
      borderRadius: '20px',
      overflow: 'hidden',
      marginBottom: '60px',
      boxShadow: '0px 0px 20px rgba(4, 9, 29, 0.5)'
    }}>
      <div style={{
        width: '100%',
        height: windowWidth <= 768 ? '250px' : '400px',
        backgroundImage: `url(${data.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      
      <div style={{
        padding: windowWidth <= 768 ? '30px 20px' : '50px'
      }}>
        <h1 style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: windowWidth <= 768 ? '28px' : '42px',
          color: '#FFFFFF',
          marginBottom: '20px'
        }}>
          {data.title}
        </h1>
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: '16px',
          lineHeight: '26px',
          color: '#B2AFAF'
        }}>
          {data.description}
        </p>
      </div>
    </div>
  );
};