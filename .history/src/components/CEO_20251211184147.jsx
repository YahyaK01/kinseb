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
          }

          .founder-image-container {
            position: absolute;
            width: 328px;
            height: 309px;
            left: 256px;
            top: 45px;
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s;
          }

          .founder-quote-section.visible .founder-image-container {
            opacity: 1;
            transform: scale(1);
          }

          .founder-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 164px;
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

          /* Tablet styles */
          @media screen and (max-width: 1280px) {
            .founder-quote-section {
              height: 450px;
            }

            .founder-image-container {
              width: 280px;
              height: 280px;
              left: 150px;
              top: 80px;
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

          /* Tablet - Reposition elements */
          @media screen and (max-width: 1024px) {
            .founder-quote-section {
              height: 500px;
            }

            .founder-image-container {
              width: 250px;
              height: 250px;
              left: 100px;
              top: 120px;
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

          /* Mobile styles - Stack vertically */
          @media screen and (max-width: 768px) {
            .founder-quote-section {
              height: auto;
              min-height: 600px;
              padding: 60px 24px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 30px;
            }

            .founder-image-container {
              position: relative;
              width: 200px;
              height: 200px;
              left: auto;
              top: auto;
              margin: 0 auto;
            }

            .quote-content-wrapper {
              position: relative;
              width: 100%;
              max-width: 500px;
              left: auto;
              top: auto;
              padding: 0 20px;
            }

            .quote-text {
              font-size: 16px;
              text-align: center;
            }

            .highlight-tags {
              align-items: center;
              width: 100%;
            }

            .highlight-tag {
              font-size: 14px;
              padding: 4px 12px;
              text-align: center;
              width: auto;
            }

            .author-info {
              align-items: center;
              text-align: center;
            }

            .author-name {
              font-size: 18px;
              line-height: 28px;
            }

            .author-title {
              font-size: 14px;
              line-height: 22px;
            }
          }

          /* Small mobile styles */
          @media screen and (max-width: 480px) {
            .founder-quote-section {
              min-height: 550px;
              padding: 50px 20px;
              gap: 25px;
            }

            .founder-image-container {
              width: 180px;
              height: 180px;
            }

            .quote-content-wrapper {
              padding: 0 10px;
            }

            .quote-text {
              font-size: 15px;
              line-height: 24px;
            }

            .highlight-tag {
              font-size: 13px;
              padding: 3px 10px;
            }

            .author-name {
              font-size: 17px;
              line-height: 26px;
            }

            .author-title {
              font-size: 13px;
              line-height: 20px;
            }
          }
        `}
      </style>

      <section 
        ref={sectionRef}
        className={`founder-quote-section ${isVisible ? 'visible' : ''}`}
      >
        {/* Decorative Blur Elements */}
        <div className="blur-ellipse-left"></div>
        <div className="blur-ellipse-right"></div>

        {/* Founder Image */}
        <div className="founder-image-container">
          <img 
            src="/images/113.png" 
            alt="Sania Baig - Founder" 
            className="founder-image"
          />
        </div>

        {/* Quote Content */}
        <div className="quote-content-wrapper">
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