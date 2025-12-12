import React, { useState, useEffect, useRef } from 'react';

const ServiceCTA = () => {
  // Hardcoded content
  const content = {
    title: "Ready to Boost Conversions & Revenue With Proven CRO Strategies?",
    description: "Let's transform your website into a high-performing conversion engine. From in-depth analytics to A/B testing and UX optimization, we'll guide you through every step — helping you turn visitors into loyal customers and clicks into measurable growth.",
    buttonText: "Start Your Optimization Journey"
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle navigation to contact
  const handleNavigation = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
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
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInScale {
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
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(90deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
            75% { transform: translateY(-15px) rotate(270deg); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              box-shadow: 0 4px 15px rgba(13, 152, 186, 0.3);
            }
            50% { 
              box-shadow: 0 6px 25px rgba(13, 152, 186, 0.5);
            }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .dm-hero-section {
            width: 100%;
            min-height: 100vh;
            background: #04091D;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem 2rem;
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
          }
          
          .dm-hero-card {
            width: 100%;
            max-width: 1200px;
            height: 470px;
            background: url('/images/59.webp');
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            border: 1px solid #7D818D;
            position: relative;
            display: flex;
            align-items: center;
            overflow: hidden;
            opacity: ${isVisible ? 1 : 0};
            transform: ${isVisible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(30px)'};
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          
          .dm-hero-card:hover {
            transform: ${isVisible ? 'translateY(-5px) scale(1)' : 'scale(0.95) translateY(30px)'};
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          }
          
          .dm-hero-content {
            width: 100%;
            max-width: 580px;
            padding: 2.8rem;
            z-index: 2;
            opacity: ${isVisible ? 1 : 0};
            transform: ${isVisible ? 'translateX(0)' : 'translateX(-50px)'};
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
          }
          
          .dm-hero-title {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            font-size: clamp(1.5rem, 3.5vw, 2.2rem);
            line-height: 1.3;
            color: #FFFFFF;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
            margin-bottom: 1.2rem;
            opacity: ${isVisible ? 1 : 0};
            transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s;
          }
          
          .dm-hero-highlight {
            color: #0D98BA;
            position: relative;
            opacity: ${isVisible ? 1 : 0};
            transform: ${isVisible ? 'scale(1)' : 'scale(0.8)'};
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s;
          }
          
          .dm-hero-highlight::before {
            content: '';
            position: absolute;
            top: 0;
            left: -5px;
            right: -5px;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(13, 152, 186, 0.2), transparent);
            z-index: -1;
            border-radius: 4px;
            animation: ${isVisible ? 'shimmer 2s infinite 2s' : 'none'};
            background-size: 200% 100%;
          }
          
          .dm-hero-description {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
            font-size: clamp(0.8rem, 1.5vw, 1rem);
            line-height: 1.5;
            letter-spacing: -0.006em;
            color: #E6E6E6;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
            margin-bottom: 1.8rem;
            opacity: ${isVisible ? 1 : 0};
            transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
          }
          
          .dm-hero-button {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            font-size: 0.95rem;
            background: ${isHovered ? '#0B8AA3' : '#0D98BA'};
            color: #04091D;
            border: 2px solid #0D98BA;
            border-radius: 6px;
            padding: 0.55rem 1.1rem;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: ${isHovered ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)'};
            box-shadow: ${isHovered ? '0 10px 30px rgba(13, 152, 186, 0.4)' : '0 5px 20px rgba(13, 152, 186, 0.3)'};
            width: auto;
            min-width: 230px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            opacity: ${isVisible ? 1 : 0};
            animation: ${isVisible ? 'fadeInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s both, pulse 2s infinite 3s' : 'none'};
          }
          
          .dm-hero-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .dm-hero-button:hover::before {
            left: 100%;
          }
          
          .dm-floating-element {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(13, 152, 186, 0.15) 0%, rgba(13, 152, 186, 0.05) 50%, transparent 100%);
            pointer-events: none;
            opacity: ${isVisible ? 1 : 0};
            transition: opacity 1s ease-out 1.5s;
          }
          
          .dm-floating-1 {
            width: 100px;
            height: 100px;
            top: 10%;
            right: 8%;
            animation: ${isVisible ? 'float 8s ease-in-out infinite 2s' : 'none'};
            background: radial-gradient(circle, rgba(13, 152, 186, 0.2) 0%, rgba(13, 152, 186, 0.1) 50%, transparent 100%);
          }
          
          .dm-floating-2 {
            width: 70px;
            height: 70px;
            top: 65%;
            right: 5%;
            animation: ${isVisible ? 'float 12s ease-in-out infinite 4s' : 'none'};
            background: radial-gradient(circle, rgba(13, 152, 186, 0.15) 0%, rgba(13, 152, 186, 0.08) 50%, transparent 100%);
          }
          
          .dm-floating-3 {
            width: 50px;
            height: 50px;
            top: 30%;
            right: 15%;
            animation: ${isVisible ? 'float 10s ease-in-out infinite 6s' : 'none'};
            background: radial-gradient(circle, rgba(13, 152, 186, 0.18) 0%, rgba(13, 152, 186, 0.09) 50%, transparent 100%);
          }
          
          .dm-floating-4 {
            width: 30px;
            height: 30px;
            top: 20%;
            right: 25%;
            animation: ${isVisible ? 'float 6s ease-in-out infinite 3s' : 'none'};
            background: radial-gradient(circle, rgba(13, 152, 186, 0.12) 0%, rgba(13, 152, 186, 0.06) 50%, transparent 100%);
          }
          
          /* Tablet Styles */
          @media (max-width: 1024px) {
            .dm-hero-section {
              padding: 2rem 1.5rem;
            }
            
            .dm-hero-card {
              height: 400px;
            }
            
            .dm-hero-content {
              padding: 2.5rem;
            }
            
            .dm-hero-button {
              min-width: 220px;
            }
          }
          
          /* Mobile Styles */
          @media (max-width: 768px) {
            .dm-hero-section {
              padding: 1rem 0.5rem;
              min-height: auto;
            }
            
            .dm-hero-card {
              height: auto;
              min-height: 400px;
              margin: 0 0.5rem;
            }
            
            .dm-hero-content {
              padding: 2rem 1.5rem;
            }
            
            .dm-hero-title {
              font-size: clamp(1.4rem, 5vw, 2rem);
              margin-bottom: 1rem;
            }
            
            .dm-hero-description {
              font-size: clamp(0.9rem, 3vw, 1rem);
              margin-bottom: 1.5rem;
            }
            
            .dm-hero-button {
              width: 100%;
              min-width: auto;
              max-width: 100%;
              padding: 1rem 1.5rem;
              font-size: clamp(0.85rem, 3vw, 1rem);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              box-sizing: border-box;
            }
            
            .dm-floating-element {
              display: none;
            }
          }
          
          /* Small Mobile */
          @media (max-width: 480px) {
            .dm-hero-section {
              padding: 0.5rem 0.25rem;
            }
            
            .dm-hero-card {
              margin: 0 0.25rem;
              border-radius: 12px;
            }
            
            .dm-hero-content {
              padding: 1.5rem 1rem;
            }
            
            .dm-hero-title {
              font-size: clamp(1.2rem, 6vw, 1.6rem);
            }
            
            .dm-hero-description {
              font-size: clamp(0.8rem, 4vw, 0.9rem);
            }
            
            .dm-hero-button {
              padding: 0.9rem 1rem;
              font-size: clamp(0.75rem, 4vw, 0.9rem);
            }
          }
          
          /* Extra Small Mobile */
          @media (max-width: 360px) {
            .dm-hero-content {
              padding: 1rem 0.8rem;
            }
            
            .dm-hero-button {
              padding: 0.8rem 0.8rem;
              font-size: clamp(0.7rem, 4.5vw, 0.8rem);
            }
          }
        `}
      </style>
      
      <div ref={sectionRef} className="dm-hero-section">
        {/* Floating Elements */}
        <div className="dm-floating-element dm-floating-1"></div>
        <div className="dm-floating-element dm-floating-2"></div>
        <div className="dm-floating-element dm-floating-3"></div>
        <div className="dm-floating-element dm-floating-4"></div>
        
        <div className="dm-hero-card">
          <div className="dm-hero-content">
            <h1 className="dm-hero-title">
              {content.title.includes('Conversions & Revenue') ? (
                <>
                  {content.title.split('Conversions & Revenue')[0]}
                  <span className="dm-hero-highlight">Conversions & Revenue</span>
                  {content.title.split('Conversions & Revenue')[1] || ''}
                </>
              ) : (
                content.title
              )}
            </h1>
            
            <p className="dm-hero-description">
              {content.description}
            </p>
            
            <button 
              className="dm-hero-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleNavigation}
            >
              {content.buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCTA;