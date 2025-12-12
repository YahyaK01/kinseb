import React, { useEffect, useRef, useState } from 'react';

const HowWeThink = () => {
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

  const philosophies = [
    {
      icon: '/images/3.png',
      title: 'Behavioral Psychology',
      description: 'We study how people actually behave, not how they say they will. Real behavior drives our decisions.'
    },
    {
      icon: '/images/robo-icon.png',
      title: 'AI-Powered Insights',
      description: 'Machine learning helps us spot patterns humans miss and predict what will move the needle.'
    },
    {
      icon: '/images/value-icon.png',
      title: 'Continuous Testing',
      description: 'We test relentlessly. Every change is validated with data before it goes live at scale.'
    },
    {
      icon: '/images/4.png',
      title: 'Full-Funnel Optimization',
      description: 'From first click to final conversion, we optimize every touchpoint in the customer journey.'
    }
  ];

  return (
    <>
      <style>
        {`
          .how-we-think-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 100px 47px;
            gap: 50px;
            width: 100%;
            max-width: 1440px;
            min-height: 549px;
            background: linear-gradient(180deg, #0D98BA -309.11%, #04091D 115.25%);
            margin: 0 auto;
            box-sizing: border-box;
            opacity: 0;
            visibility: hidden;
            transform: translateY(50px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, visibility 0s 0.8s;
          }

          .how-we-think-section.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, visibility 0s 0s;
          }

          .think-header-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            gap: 92px;
            width: 100%;
            max-width: 945px;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;
          }

          .how-we-think-section.visible .think-header-section {
            opacity: 1;
            transform: translateY(0);
          }

          .think-header-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            gap: 10px;
            width: 100%;
          }

          .think-main-heading {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 40px;
            line-height: 60px;
            text-align: center;
            color: #FFFFFF;
            margin: 0;
            width: 100%;
          }

          .think-description {
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            text-align: center;
            letter-spacing: -0.006em;
            color: #FFFFFF;
            margin: 0;
            max-width: 606px;
          }

          .philosophies-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            padding: 0;
            gap: 32px;
            width: 100%;
            max-width: 1236px;
          }

          .philosophy-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            gap: 10px;
            flex: 1;
            max-width: 270px;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .how-we-think-section.visible .philosophy-card {
            opacity: 1;
            transform: translateY(0);
          }

          .how-we-think-section.visible .philosophy-card:nth-child(1) {
            transition-delay: 0.4s;
          }

          .how-we-think-section.visible .philosophy-card:nth-child(2) {
            transition-delay: 0.5s;
          }

          .how-we-think-section.visible .philosophy-card:nth-child(3) {
            transition-delay: 0.6s;
          }

          .how-we-think-section.visible .philosophy-card:nth-child(4) {
            transition-delay: 0.7s;
          }

          .philosophy-icon-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0;
            width: 80px;
            height: 80px;
          }

          .philosophy-icon {
            width: 60px;
            height: 60px;
            object-fit: contain;
          }

          .philosophy-heading {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            background: linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
            max-width: 237px;
          }

          .philosophy-description {
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            text-align: center;
            color: #FFFFFF;
            margin: 0;
            width: 100%;
          }

          /* Tablet styles */
          @media screen and (max-width: 1280px) {
            .how-we-think-section {
              padding: 80px 40px;
            }

            .philosophies-container {
              gap: 24px;
            }

            .philosophy-card {
              max-width: 250px;
            }
          }

          /* Tablet - Stack cards */
          @media screen and (max-width: 1024px) {
            .how-we-think-section {
              padding: 60px 40px;
            }

            .philosophies-container {
              flex-wrap: wrap;
              justify-content: center;
              gap: 30px;
            }

            .philosophy-card {
              max-width: 300px;
              width: 100%;
            }
          }

          /* Mobile styles */
          @media screen and (max-width: 768px) {
            .how-we-think-section {
              padding: 60px 24px;
              gap: 40px;
              min-height: auto;
            }

            .think-header-section {
              gap: 30px;
            }

            .think-main-heading {
              font-size: 24px;
              line-height: 42px;
              white-space: nowrap;
            }

            .think-description {
              font-size: 14px;
              line-height: 24px;
            }

            .philosophies-container {
              flex-direction: column;
              align-items: center;
              gap: 30px;
            }

            .philosophy-card {
              max-width: 100%;
            }

            .philosophy-heading {
              font-size: 16px;
              max-width: 100%;
            }

            .philosophy-description {
              font-size: 14px;
            }
          }

          /* Small mobile styles */
          @media screen and (max-width: 480px) {
            .how-we-think-section {
              padding: 50px 20px;
              gap: 30px;
            }

            .think-main-heading {
              font-size: 20px;
              line-height: 38px;
              white-space: nowrap;
            }

            .think-description {
              font-size: 13px;
              line-height: 22px;
            }

            .philosophy-icon-wrapper {
              width: 70px;
              height: 70px;
            }

            .philosophy-icon {
              width: 50px;
              height: 50px;
            }
          }

          /* Extra small mobile */
          @media screen and (max-width: 375px) {
            .think-main-heading {
              font-size: 18px;
              line-height: 34px;
            }
          }
        `}
      </style>

      <section 
        ref={sectionRef}
        className={`how-we-think-section ${isVisible ? 'visible' : ''}`}
      >
        {/* Header Section */}
        <div className="think-header-section">
          <div className="think-header-content">
            <h2 className="think-main-heading">
              How We Think About Conversion
            </h2>
            <p className="think-description">
              Our approach combines behavioral science, technology, and relentless testing to drive measurable growth.
            </p>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="philosophies-container">
          {philosophies.map((item, index) => (
            <div key={index} className="philosophy-card">
              <div className="philosophy-icon-wrapper">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="philosophy-icon"
                />
              </div>
              <h3 className="philosophy-heading">{item.title}</h3>
              <p className="philosophy-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowWeThink;