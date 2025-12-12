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
        threshold: 0.1,
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

  return (
    <>
      <style>
        {`
          .who-we-are-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 100px 129px;
            gap: 70px;
            width: 100%;
            max-width: 1440px;
            min-height: 360px;
            background: linear-gradient(180deg, #0D98BA -309.11%, #04091D 141.72%);
            margin: 0 auto;
            box-sizing: border-box;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .who-we-are-section.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            max-width: 1008px;
            width: 100%;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;
          }

          .who-we-are-section.visible .content-wrapper {
            opacity: 1;
            transform: translateY(0);
          }

          .who-we-are-heading {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 60px;
            color: #FFFFFF;
            margin: 0;
            text-align: center;
          }

          .who-we-are-description {
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            letter-spacing: -0.03em;
            color: #FFFFFF;
            margin: 0;
            max-width: 1008px;
            width: 100%;
          }

          /* Tablet styles */
          @media screen and (max-width: 1024px) {
            .who-we-are-section {
              padding: 80px 60px;
              gap: 50px;
            }
          }

          /* Mobile styles */
          @media screen and (max-width: 768px) {
            .who-we-are-section {
              padding: 60px 24px;
              gap: 40px;
              min-height: auto;
            }

            .content-wrapper {
              gap: 20px;
            }

            .who-we-are-heading {
              font-size: 28px;
              line-height: 42px;
              white-space: nowrap;
            }

            .who-we-are-description {
              font-size: 15px;
              line-height: 26px;
            }
          }

          /* Small mobile styles */
          @media screen and (max-width: 480px) {
            .who-we-are-section {
              padding: 50px 20px;
              gap: 30px;
            }

            .who-we-are-heading {
              font-size: 24px;
              line-height: 36px;
              white-space: nowrap;
            }

            .who-we-are-description {
              font-size: 14px;
              line-height: 24px;
            }
          }

          /* Extra small mobile */
          @media screen and (max-width: 375px) {
            .who-we-are-heading {
              font-size: 22px;
              line-height: 34px;
            }
          }
        `}
      </style>
      
      <section 
        ref={sectionRef} 
        className={`who-we-are-section ${isVisible ? 'visible' : ''}`}
      >
        <div className="content-wrapper">
          <h2 className="who-we-are-heading">Who We Are</h2>
          <p className="who-we-are-description">
            Kinseb is a growth optimization company focused on understanding real user behavior and turning it into meaningful business growth. Through behavioral psychology, AI-powered insights, and continuous experimentation, we help brands remove friction and improve how people experience and convert on their digital platforms.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;