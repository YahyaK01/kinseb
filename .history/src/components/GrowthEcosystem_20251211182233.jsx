import React, { useEffect, useRef, useState } from 'react';

const GrowthEcosystem = () => {
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

  const cards = [
    {
      title: 'Kinseb CRO',
      description: 'Where we turn traffic into revenue using behavioral science, AI-driven experimentation, and full-funnel CRO.',
      link: 'Visit CRO Website→',
      url: '#'
    },
    {
      title: 'Kinseb Marketing',
      description: 'Performance marketing and growth strategy focused on acquiring high-intent traffic across paid and organic channels.',
      link: 'Visit Marketing Website→',
      url: '#'
    },
    {
      title: 'Kinseb Web Development',
      description: 'Design and development of fast, scalable, high-performance, conversion-focused websites and digital products.',
      link: 'Visit Web Development Website→',
      url: '#'
    }
  ];

  return (
    <>
      <style>
        {`
          .growth-ecosystem-section {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 80px 20px;
            gap: 79px;
            isolation: isolate;
            width: 100%;
            max-width: 1440px;
            min-height: 667px;
            background: linear-gradient(0deg, rgba(4, 9, 29, 0.9), rgba(4, 9, 29, 0.9)), 
                        url('/images/109.jpg');
            background-size: cover;
            background-position: center;
            margin: 0 auto;
            box-sizing: border-box;
            opacity: 0;
            visibility: hidden;
            transform: translateY(50px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, visibility 0s 0.8s;
          }

          .growth-ecosystem-section.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, visibility 0s 0s;
          }

          .main-content-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            gap: 50px;
            width: 100%;
            max-width: 1222px;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;
          }

          .growth-ecosystem-section.visible .main-content-wrapper {
            opacity: 1;
            transform: translateY(0);
          }

          .header-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            gap: 20px;
            width: 100%;
            max-width: 945px;
          }

          .structured-button {
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 10px 24px;
            gap: 10px;
            background: linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%);
            border: 1px solid #0D94BB;
            box-shadow: 0px 0px 12px 2px rgba(13, 148, 187, 0.7);
            border-radius: 25px;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.02em;
            color: #04091D;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
          }

          .structured-button:hover {
            transform: translateY(-2px);
            box-shadow: 0px 0px 16px 4px rgba(13, 148, 187, 0.9);
          }

          .heading-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            gap: 92px;
            width: 100%;
          }

          .heading-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            gap: 10px;
            width: 100%;
          }

          .main-heading {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 40px;
            line-height: 60px;
            text-align: center;
            color: #FFFFFF;
            margin: 0;
          }

          .kinseb-highlight {
            background: linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .description {
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

          .cards-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            padding: 0;
            gap: 20px;
            width: 100%;
            max-width: 1222px;
          }

          .card {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 24px;
            gap: 10px;
            flex: 1;
            max-width: 390px;
            min-height: 277px;
            background: #041629;
            box-shadow: 0px 0px 10px #98BA0D;
            border-radius: 10px;
            box-sizing: border-box;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.3s ease;
          }

          .growth-ecosystem-section.visible .card {
            opacity: 1;
            transform: translateY(0);
          }

          .growth-ecosystem-section.visible .card:nth-child(1) {
            transition-delay: 0.4s;
          }

          .growth-ecosystem-section.visible .card:nth-child(2) {
            transition-delay: 0.6s;
          }

          .growth-ecosystem-section.visible .card:nth-child(3) {
            transition-delay: 0.8s;
          }

          .card:hover {
            box-shadow: 0px 0px 20px #98BA0D;
            transform: translateY(-5px);
          }

          .card-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            gap: 15px;
            width: 100%;
          }

          .card-icon {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card-icon img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .card-text-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            gap: 10px;
            width: 100%;
          }

          .card-heading {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            background: linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
          }

          .card-description {
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
            color: #FFFFFF;
            margin: 0;
          }

          .card-divider {
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            margin: 0;
          }

          .card-link {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.02em;
            color: #98BA0D;
            text-decoration: none;
            transition: color 0.3s ease;
            margin: 0;
          }

          .card-link:hover {
            color: #b4d615;
          }

          /* Tablet styles */
          @media screen and (max-width: 1280px) {
            .growth-ecosystem-section {
              padding: 60px 30px;
            }

            .cards-container {
              gap: 15px;
            }

            .card {
              max-width: 360px;
              padding: 20px;
            }
          }

          /* Tablet - Stack cards */
          @media screen and (max-width: 1024px) {
            .growth-ecosystem-section {
              padding: 60px 40px;
            }

            .cards-container {
              flex-direction: column;
              align-items: center;
              gap: 20px;
            }

            .card {
              max-width: 500px;
              width: 100%;
            }
          }

          /* Mobile styles */
          @media screen and (max-width: 768px) {
            .growth-ecosystem-section {
              padding: 60px 24px;
              min-height: auto;
            }

            .main-content-wrapper {
              gap: 40px;
            }

            .header-section {
              gap: 30px;
            }

            .main-heading {
              font-size: 32px;
              line-height: 48px;
            }

            .description {
              font-size: 14px;
              line-height: 24px;
            }

            .card {
              max-width: 100%;
              min-height: auto;
            }

            .structured-button {
              font-size: 14px;
              padding: 8px 20px;
            }
          }

          /* Small mobile styles */
          @media screen and (max-width: 480px) {
            .growth-ecosystem-section {
              padding: 50px 20px;
            }

            .main-heading {
              font-size: 28px;
              line-height: 40px;
            }

            .description {
              font-size: 13px;
              line-height: 22px;
            }

            .card {
              padding: 20px;
            }

            .card-heading {
              font-size: 18px;
            }

            .card-description {
              font-size: 14px;
              line-height: 22px;
            }
          }
        `}
      </style>

      <section 
        ref={sectionRef}
        className={`growth-ecosystem-section ${isVisible ? 'visible' : ''}`}
      >
        <div className="main-content-wrapper">
          {/* Header Section */}
          <div className="header-section">
            <a href="#" className="structured-button">
              How We're Structured
            </a>

            <div className="heading-wrapper">
              <div className="heading-content">
                <h2 className="main-heading">
                  The <span className="kinseb-highlight">Kinseb</span> Growth Ecosystem
                </h2>
                <p className="description">
                  We operate as a connected growth ecosystem — covering traffic, optimization, and high-performance digital experiences under one brand family.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="cards-container">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <img src="/images/110.png" alt={card.title} />
                  </div>
                  
                  <div className="card-text-content">
                    <h3 className="card-heading">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                  </div>

                  <hr className="card-divider" />

                  <a href={card.url} className="card-link">
                    {card.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthEcosystem;