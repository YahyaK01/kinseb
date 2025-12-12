import React, { useEffect, useRef, useState } from 'react';

const FounderQuote = () => {
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
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,600&family=Lato:wght@600;700&display=swap');

          .founder-quote-section {
            position: relative;
            width: 100%;
            max-width: 1440px;
            height: 400px;
            margin: 0 auto;
            background: url('/images/112.png');
            background-size: cover;
            background-position: center;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            transform: translateY(50px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, visibility 0s 0.8s;
          }

          .founder-quote-section.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, visibility 0s 0s;
          }

          .blur-ellipse-right {
            position: absolute;
            width: 346px;
            height: 171px;
            right: -50px;
            bottom: -20px;
            background: linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%);
            filter: blur(150px);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
          }

          .blur-ellipse-left {
            position: absolute;
            width: 197px;
            height: 154px;
            left: -93px;
            top: -26px;
            background: linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%);
            filter: blur(150px);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
          }

          /* Mobile overlay background behind text */
          .mobile-overlay {
            position: absolute;
            width: 85%;
            height: 210px;
            left: 7.5%;
            top: 140px;
            background: linear-gradient(270deg, rgba(255, 255, 255, 0) -1.84%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0) 100%);
            border-radius: 8px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;
            backdrop-filter: blur(5px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            z-index: 1;
            display: none;
          }

          .founder-quote-section.visible .mobile-overlay {
            opacity: 1;
            transform: translateY(0);
          }

          .founder-image-container {
            position: absolute;
            width: 328px;
            height: 400px;
            left: 256px;
            top: auto;
            bottom: 0;
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s;
            z-index: 2;
          }

          .founder-quote-section.visible .founder-image-container {
            opacity: 1;
            transform: scale(1);
          }

          .founder-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center bottom;
          }

          /* Mobile heading in top right */
          .mobile-heading-wrapper {
            position: absolute;
            left: 60%;
            top: 56px;
            width: 35%;
            max-width: 35%;
            z-index: 3;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s;
            text-align: left;
            display: none;
          }

          .founder-quote-section.visible .mobile-heading-wrapper {
            opacity: 1;
            transform: translateY(0);
          }

          .mobile-author-name {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
            margin: 0;
            padding: 0;
          }

          .mobile-author-title {
            font-family: 'Poppins', sans-serif;
            font-style: italic;
            font-weight: 600;
            font-size: 10px;
            line-height: 13px;
            color: #0D98BA;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
            margin: 4px 0 8px 0;
            padding: 0;
          }

          /* Mobile description in overlay */
          .mobile-quote-wrapper {
            position: absolute;
            left: 15%;
            top: 210px;
            width: 70%;
            max-width: 70%;
            z-index: 3;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease-out 0.6s, transform 1s ease-out 0.6s;
            text-align: left;
            display: none;
          }

          .founder-quote-section.visible .mobile-quote-wrapper {
            opacity: 1;
            transform: translateY(0);
          }

          .mobile-quote-text {
            font-family: 'Lato', sans-serif;
            font-weight: 600;
            font-size: 11px;
            line-height: 160%;
            letter-spacing: -0.006em;
            color: #E6E6E6;
            margin: 0 0 7px 0;
            padding: 0;
          }

          .mobile-highlight-tags {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
            margin-top: 14px;
          }

          .mobile-highlight-tag {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2px 7px;
            background: #0D98BA;
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            font-size: 9px;
            line-height: 150%;
            letter-spacing: -0.006em;
            text-transform: uppercase;
            color: #FFFFFF;
            white-space: nowrap;
          }

          /* Desktop layout */
          .quotation-icon {
            position: absolute;
            width: 54px;
            height: 38px;
            right: 521px;
            top: 0px;
            z-index: 2;
          }

          .quotation-icon img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transform: scaleX(-1);
            opacity: 0.7;
          }

          .quote-content-wrapper {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0;
            gap: 20px;
            width: 558px;
            left: 703px;
            top: 70.5px;
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s;
            z-index: 2;
          }

          .founder-quote-section.visible .quote-content-wrapper {
            opacity: 1;
            transform: translateX(0);
          }

          .quote-text {
            width: 100%;
            font-family: 'Lato', sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: -0.006em;
            color: #E6E6E6;
            margin: 0 0 20px 0;
          }

          .highlight-tags {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
            margin-bottom: 20px;
          }

          .highlight-tag {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2px 10px;
            background: #0D98BA;
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: -0.006em;
            text-transform: uppercase;
            color: #FFFFFF;
            white-space: nowrap;
          }

          .author-info {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .author-name {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
            margin: 0;
          }

          .author-title {
            font-family: 'Poppins', sans-serif;
            font-style: italic;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #98BA0D;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
            margin: 0;
          }

          /* Mobile styles - MUST BE AT THE BOTTOM */
          @media screen and (max-width: 768px) {
            .founder-quote-section {
              height: 420px !important;
            }

            .founder-image-container {
              width: 168px !important;
              height: 136px !important;
              left: 0 !important;
              top: 10px !important;
              bottom: auto !important;
            }

            .founder-image {
              object-position: center center !important;
            }

            .mobile-overlay {
              display: block !important;
            }

            .mobile-heading-wrapper {
              display: block !important;
            }

            .mobile-quote-wrapper {
              display: block !important;
            }

            .quote-content-wrapper,
            .quotation-icon,
            .blur-ellipse-right,
            .blur-ellipse-left {
              display: none !important;
            }
          }

          /* Tablet styles */
          @media screen and (max-width: 1280px) and (min-width: 769px) {
            .founder-quote-section {
              height: 450px;
            }

            .founder-image-container {
              width: 280px;
              height: 450px;
              left: 150px;
            }

            .quote-content-wrapper {
              width: 500px;
              left: 500px;
              top: 80px;
            }

            .quote-text {
              font-size: 17px;
            }

            .highlight-tag {
              font-size: 16px;
            }
          }

          /* Small tablet */
          @media screen and (max-width: 1024px) and (min-width: 769px) {
            .founder-quote-section {
              height: 500px;
            }

            .founder-image-container {
              width: 250px;
              height: 500px;
              left: 100px;
            }

            .quote-content-wrapper {
              width: 450px;
              left: 400px;
              top: 100px;
            }

            .quote-text {
              font-size: 16px;
            }

            .highlight-tag {
              font-size: 15px;
            }
          }

          /* Performance optimizations */
          * {
            will-change: auto;
          }
          
          .founder-quote-section * {
            backface-visibility: hidden;
            perspective: 1000px;
          }
        `}
      </style>

      <section 
        ref={sectionRef}
        className={`founder-quote-section ${isVisible ? 'visible' : ''}`}
      >
        {/* Decorative Blur Elements - Desktop only */}
        <div className="blur-ellipse-left"></div>
        <div className="blur-ellipse-right"></div>

        {/* Mobile Overlay Background - Behind text */}
        <div className="mobile-overlay"></div>

        {/* Founder Image */}
        <div className="founder-image-container">
          <img 
            src="/images/113.png" 
            alt="Sania Baig - Founder" 
            className="founder-image"
          />
        </div>

        {/* Mobile Layout - Heading in top right */}
        <div className="mobile-heading-wrapper">
          <h1 className="mobile-author-name">SANIA BAIG</h1>
          <p className="mobile-author-title">CEO & Founder</p>
        </div>

        {/* Mobile Layout - Quote in overlay area */}
        <div className="mobile-quote-wrapper">
          <p className="mobile-quote-text">
            "CRO isn't just about testing buttons — it's about understanding why people act and using that insight to create lasting growth. Behind every metric is a human story — that's what we optimize for."
          </p>

          <div className="mobile-highlight-tags">
            <div className="mobile-highlight-tag">
              Data shows what happens. Psychology reveals why.
            </div>
            <div className="mobile-highlight-tag">
              Our job is to bridge the two.
            </div>
          </div>
        </div>

        {/* Desktop Layout - Quote Content */}
        <div className="quote-content-wrapper">
          {/* Quotation Icon */}
          <div className="quotation-icon">
            <img 
              src="/images/quote.svg" 
              alt="Quote" 
            />
          </div>

          <p className="quote-text">
            "CRO isn't just about testing buttons — it's about understanding why people act and using that insight to create lasting growth. Behind every metric is a human story — that's what we optimize for."
          </p>

          <div className="highlight-tags">
            <div className="highlight-tag">
              Data shows what happens. Psychology reveals why.
            </div>
            <div className="highlight-tag">
              Our job is to bridge the two.
            </div>
          </div>

          <div className="author-info">
            <h3 className="author-name">SANIA BAIG</h3>
            <p className="author-title">CEO & Founder</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FounderQuote;