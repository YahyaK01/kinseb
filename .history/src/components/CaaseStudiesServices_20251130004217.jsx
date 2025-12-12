import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';

const CaseStudiesGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const componentRef = useRef(null);

  const caseStudies = [
    {
      id: 1,
      image: 'images/80.jpg',
      logo: 'AuraBloom Co.',
      category: 'Design + Funnel Optimization',
      title: 'Personalization Engine Transforms User Experience',
      description: 'Through data-driven experimentation and strategic CTA placement, we transformed a underperforming landing page into a high-converting lead generation engine that exceeded all benchmarks.',
      metrics: [
        { value: '+37%', label: 'CVR Increase' },
        { value: '+37%', label: 'CVR Increase' }
      ],
      cta: 'View Full Case Study→'
    },
    {
      id: 2,
      image: 'images/80.jpg',
      logo: 'AuraBloom Co.',
      category: 'Design + Funnel Optimization',
      title: 'Personalization Engine Transforms User Experience',
      description: 'Through data-driven experimentation and strategic CTA placement, we transformed a underperforming landing page into a high-converting lead generation engine that exceeded all benchmarks.',
      metrics: [
        { value: '+37%', label: 'CVR Increase' },
        { value: '+37%', label: 'CVR Increase' }
      ],
      cta: 'View Full Case Study→'
    },
    {
      id: 3,
      image: 'images/80.jpg',
      logo: 'AuraBloom Co.',
      category: 'Design + Funnel Optimization',
      title: 'Personalization Engine Transforms User Experience',
      description: 'Through data-driven experimentation and strategic CTA placement, we transformed a underperforming landing page into a high-converting lead generation engine that exceeded all benchmarks.',
      metrics: [
        { value: '+37%', label: 'CVR Increase' },
        { value: '+37%', label: 'CVR Increase' }
      ],
      cta: 'View Full Case Study→'
    },
    {
      id: 4,
      image: 'images/80.jpg',
      logo: 'AuraBloom Co.',
      category: 'Design + Funnel Optimization',
      title: 'Personalization Engine Transforms User Experience',
      description: 'Through data-driven experimentation and strategic CTA placement, we transformed a underperforming landing page into a high-converting lead generation engine that exceeded all benchmarks.',
      metrics: [
        { value: '+37%', label: 'CVR Increase' },
        { value: '+37%', label: 'CVR Increase' }
      ],
      cta: 'View Full Case Study→'
    },
    {
      id: 5,
      image: 'images/80.jpg',
      logo: 'AuraBloom Co.',
      category: 'Design + Funnel Optimization',
      title: 'Personalization Engine Transforms User Experience',
      description: 'Through data-driven experimentation and strategic CTA placement, we transformed a underperforming landing page into a high-converting lead generation engine that exceeded all benchmarks.',
      metrics: [
        { value: '+37%', label: 'CVR Increase' },
        { value: '+37%', label: 'CVR Increase' }
      ],
      cta: 'View Full Case Study→'
    },
    {
      id: 6,
      image: 'images/80.jpg',
      logo: 'AuraBloom Co.',
      category: 'Design + Funnel Optimization',
      title: 'Personalization Engine Transforms User Experience',
      description: 'Through data-driven experimentation and strategic CTA placement, we transformed a underperforming landing page into a high-converting lead generation engine that exceeded all benchmarks.',
      metrics: [
        { value: '+37%', label: 'CVR Increase' },
        { value: '+37%', label: 'CVR Increase' }
      ],
      cta: 'View Full Case Study→'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} style={{
      width: '100%',
      minHeight: '100vh',
      background: '#0a1628',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Background Gradient Blurs */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        right: '10%',
        top: '15%',
        background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
        filter: 'blur(225px)',
        opacity: 0.4,
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        left: '5%',
        top: '60%',
        background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
        filter: 'blur(225px)',
        opacity: 0.3,
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        width: '191px',
        height: '191px',
        right: '8%',
        bottom: '10%',
        background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
        filter: 'blur(225px)',
        opacity: 0.35,
        zIndex: 0
      }} />

      {/* Content Container */}
      <div style={{
        width: '100%',
        maxWidth: '1210px',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: windowWidth <= 768 ? '32px' : '40px',
            lineHeight: windowWidth <= 768 ? '48px' : '60px',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            textTransform: 'capitalize',
            color: '#FFFFFF',
            margin: 0,
            padding: '0 20px'
          }}>
            Case Studies
          </h1>
          
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '21px',
            textAlign: 'center',
            letterSpacing: '0.02em',
            color: '#FFFFFF',
            maxWidth: '1085px',
            margin: 0,
            padding: windowWidth <= 768 ? '0 10px' : '0 20px'
          }}>
            Explore how we've helped leading brands unlock growth through data-driven experimentation, behavioral insights, and strategic optimization. Every case study highlights the process behind our proven conversion lifts and ROI gains.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: windowWidth <= 640 
            ? '1fr' 
            : windowWidth <= 1024 
            ? 'repeat(2, 1fr)' 
            : 'repeat(3, 1fr)',
          gap: windowWidth <= 640 ? '30px' : '50px',
          width: '100%',
          justifyItems: 'center'
        }}>
          {caseStudies.map((study, index) => (
            <div key={study.id} style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '370px',
              background: '#041629',
              boxShadow: '0px 0px 15px #04091D',
              borderRadius: '15px',
              overflow: 'hidden',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.8s ease-out ${0.2 + index * 0.15}s, transform 0.8s ease-out ${0.2 + index * 0.15}s`
            }}>
              {/* Image Section */}
              <div style={{
                width: '100%',
                height: '180px',
                position: 'relative',
                backgroundImage: `url(${study.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                {/* Logo Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#FFFFFF',
                  textShadow: '0px 2px 10px rgba(0,0,0,0.5)'
                }}>
                  {study.logo}
                </div>
              </div>

              {/* Content Section */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '15px',
                gap: '8px'
              }}>
                {/* Text Content */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px'
                }}>
                  {/* Category and Title */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px'
                  }}>
                    <span style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '22px',
                      textTransform: 'capitalize',
                      color: '#FFFFFF'
                    }}>
                      {study.category}
                    </span>
                    
                    <h3 style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '30px',
                      letterSpacing: '0.02em',
                      background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      margin: 0
                    }}>
                      {study.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '20px',
                    letterSpacing: '0.02em',
                    color: '#B2AFAF',
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: windowWidth <= 640 ? 5 : 'unset',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {study.description}
                  </p>
                </div>

                {/* Metrics */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '40px',
                  padding: '5px 0'
                }}>
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: '19px',
                          lineHeight: '28px',
                          letterSpacing: '0.02em',
                          background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          {metric.value}
                        </span>
                        <TrendingUp size={20} color="#3AA1DE" />
                      </div>
                      <span style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '18px',
                        textAlign: 'center',
                        letterSpacing: '0.02em',
                        color: '#FFFFFF'
                      }}>
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: '#7D818D'
                }} />

                {/* CTA */}
                <a href="#" style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: '15px',
                  lineHeight: '22px',
                  letterSpacing: '0.02em',
                  color: '#0D98BA',
                  textDecoration: 'none',
                  textAlign: 'center',
                  padding: '8px 0',
                  transition: 'color 0.3s ease'
                }}>
                  {study.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesGrid;