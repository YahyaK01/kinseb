import React, { useState, useEffect, useRef } from 'react';
import { createClient } from 'contentful';

const KinsebCROFAQ = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Default header content
  const [headerContent, setHeaderContent] = useState({
    title: "Kinseb Marketing FAQs",
    highlighted_text: "FAQs"
  });

  // Default FAQ content (shows immediately)
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What sets Kinseb Marketing apart from other agencies?",
      answer: "At Kinseb Marketing, we don't just deliver services; we drive results. We use data-backed strategies and tailor every campaign to your unique business objectives. Unlike one-size-fits-all agencies, we take the time to understand your industry, target market, and goals. Our blend of creativity, analytics, and a focus on ROI ensures every marketing dollar delivers maximum impact. Choose us for a personalized, results-driven approach that transforms your business."
    },
    {
      id: 2,
      question: "How quickly can Kinseb Marketing start working on my project?",
      answer: "We're ready to hit the ground running. Most projects begin within 1-2 weeks of your initial consultation. Our streamlined onboarding process—featuring a thorough audit, competitor analysis, and strategy creation—ensures we dive straight into delivering results without unnecessary delays. We prioritize efficiency so you can start seeing growth as soon as possible."
    },
    {
      id: 3,
      question: "What digital marketing services does Kinseb Marketing specialize in?",
      answer: "Kinseb Marketing is your one-stop shop for all things digital. From SEO and PPC to social media management, content creation, email campaigns, web design, and brand strategy, we cover it all. Our team is equipped to optimize every facet of your online presence, ensuring that every campaign is crafted to meet your unique needs and continuously delivers measurable growth."
    },
    {
      id: 4,
      question: "How does Kinseb Marketing measure and report on campaign success?",
      answer: "Transparency and accountability are key. We provide in-depth monthly reports that focus on the KPIs that matter most to your business. From website traffic and conversion rates to social media engagement, keyword rankings, and ROI analysis, we make sure you understand how each campaign is performing. With clear, actionable insights, we keep you informed about your investment's success and continuously refine strategies to maximize growth."
    }
  ]);

  // Contentful client configuration
  const client = createClient({
    space: 'ju2is5vf4qzh',
    accessToken: 'lnXWOttZRdS9aKepuWsoCk2KoX58HX9gMXhyecL4RgA',
  });

  // Fetch content from Contentful in background
  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log('Fetching FAQ section content from Contentful...');
        
        const allEntries = await client.getEntries();
        console.log('All available entries:', allEntries);
        
        // Look for FAQ section entry - try multiple approaches
        let faqSectionEntry = allEntries.items.find(item => 
          item.fields.title && item.fields.faqs && Array.isArray(item.fields.faqs)
        );
        
        if (!faqSectionEntry) {
          console.log('Trying content type approach...');
          const faqEntries = await client.getEntries({
            content_type: 'faqSection',
            limit: 1
          });
          
          if (faqEntries.items.length > 0) {
            faqSectionEntry = faqEntries.items[0];
          }
        }
        
        console.log('FAQ section entry found:', faqSectionEntry);
        
        if (faqSectionEntry) {
          const sectionData = faqSectionEntry.fields;
          console.log('FAQ section data fields:', sectionData);
          
          // Update header content
          if (sectionData.title || sectionData.highlightedText) {
            setHeaderContent({
              title: sectionData.title || headerContent.title,
              highlighted_text: sectionData.highlightedText || headerContent.highlighted_text
            });
          }
          
          // Update FAQs if available
          if (sectionData.faqs && Array.isArray(sectionData.faqs)) {
            const updatedFaqs = sectionData.faqs.map((faqItem, index) => {
              const fields = faqItem.fields;
              return {
                id: index + 1,
                question: fields.question || faqs[index]?.question || "FAQ Question",
                answer: fields.answer || faqs[index]?.answer || "FAQ Answer"
              };
            });
            
            setFaqs(updatedFaqs);
            console.log('FAQs updated successfully!');
          }
        } else {
          console.log('No FAQ section entry found');
          console.log('Available content types:', [...new Set(allEntries.items.map(item => item.sys.contentType.sys.id))]);
        }
      } catch (error) {
        console.error('Error fetching FAQ section content from Contentful:', error);
        // Keep showing default content on error
      }
    };

    fetchContent();
  }, []);

  // Function to render title with highlighted text
  const renderTitle = (title, highlightedText) => {
    if (!title || !highlightedText) return title;
    
    const parts = title.split(highlightedText);
    if (parts.length === 1) return title; // highlightedText not found
    
    return (
      <>
        {parts[0]}
        <span style={highlightStyle}>{highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 200);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '50px 0px -50px 0px' // Start animation slightly before it's fully in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Handle window resize and scale detection
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setDevicePixelRatio(window.devicePixelRatio || 1);
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);
      
      const mediaQuery = window.matchMedia('(resolution: 1dppx)');
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleResize);
      }
    }
    
    setIsMounted(true);
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      }
    };
  }, []);

  // Simplified mobile detection
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1200;
  const isDesktop = windowWidth > 1200;
  const isLargeScreen = windowWidth > 1600;

  // Enhanced responsive calculations with scale awareness
  const screenScale = Math.max(0.8, Math.min(2, devicePixelRatio));
  const scaleFactor = 1 / screenScale * 1.1;
  
  // Dynamic sizing functions
  const getScaledSize = (mobile, tablet, desktop, large = desktop) => {
    let baseSize;
    if (isMobile) baseSize = mobile;
    else if (isTablet) baseSize = tablet;
    else if (isLargeScreen) baseSize = large;
    else baseSize = desktop;
    
    const factor = isMobile || isTablet ? scaleFactor : 1;
    return Math.round(baseSize * factor);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Dynamic measurements
  const containerPadding = `${getScaledSize(80, 60, 55, 60)}px 0`;
  const contentMaxWidth = getScaledSize(1300, 1350, 1100, 1200);
  const contentPadding = `0 ${getScaledSize(32, 40, 40, 45)}px`;
  const titleFontSize = getScaledSize(48, 40, 36, 40);
  const titleMarginBottom = getScaledSize(60, 55, 45, 50);
  const itemsGap = getScaledSize(40, 20, 18, 20);
  const itemBorderRadius = getScaledSize(22, 12, 12, 14);
  const itemMinHeight = getScaledSize(160, 90, 80, 90);
  const itemOpenMinHeight = getScaledSize(300, 160, 150, 165);
  const numberLeft = getScaledSize(32, 30, 28, 32);
  const numberTop = getScaledSize(32, 20, 18, 20);
  const numberFontSize = getScaledSize(48, 30, 26, 30);
  const contentPaddingLeft = getScaledSize(110, 100, 85, 95);
  const contentPaddingRight = getScaledSize(32, 30, 28, 32);
  const questionFontSize = getScaledSize(24, 17, 16, 17);
  const questionOpenFontSize = getScaledSize(26, 19, 18, 19);
  const questionMarginBottom = getScaledSize(26, 14, 12, 14);
  const answerFontSize = getScaledSize(22, 16, 15, 16);
  const answerPaddingBottom = getScaledSize(40, 22, 20, 22);
  const answerPaddingRight = getScaledSize(44, 45, 40, 45);
  const arrowSize = getScaledSize(32, 19, 18, 20);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '100vw',
    minHeight: isMobile ? 'auto' : '100vh',
    background: 'linear-gradient(180deg, #04091D 67.5%, #0D98BA 381.5%)',
    padding: containerPadding,
    paddingTop: isMobile ? `${getScaledSize(120, 60, 55, 60)}px` : `${getScaledSize(50, 60, 55, 60)}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'hidden',
    overflowX: 'hidden',
    boxSizing: 'border-box'
  };

  const contentStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: `${contentMaxWidth}px`,
    padding: contentPadding,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const titleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    fontSize: `${titleFontSize}px`,
    lineHeight: '1.2',
    color: '#FFFFFF',
    textAlign: 'center',
    margin: `0 0 ${titleMarginBottom}px 0`,
    textShadow: '0 0 20px rgba(13, 152, 186, 0.3)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
  };

  const highlightStyle = {
    color: '#0D98BA',
    position: 'relative',
    display: 'inline-block'
  };

  const itemsContainerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '95%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: `${itemsGap}px`
  };

  const getItemStyle = (index, isOpen) => ({
    position: 'relative',
    width: '100%',
    background: isOpen ? 'rgba(13, 152, 186, 0.12)' : 'rgba(13, 152, 186, 0.08)',
    border: `1px solid ${isOpen ? 'rgba(13, 152, 186, 0.4)' : 'rgba(13, 152, 186, 0.2)'}`,
    borderRadius: `${itemBorderRadius}px`,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    height: isOpen ? 'auto' : `${itemMinHeight}px`,
    minHeight: isOpen ? `${itemOpenMinHeight}px` : `${itemMinHeight}px`,
    boxShadow: isOpen ? '0 8px 32px rgba(13, 152, 186, 0.15)' : 'none',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0) translateY(0)' : `translateX(-80px) translateY(30px)`,
    transitionDelay: isVisible ? `${0.5 + index * 0.15}s` : '0s'
  });

  const numberStyle = (isOpen, index) => ({
    position: 'absolute',
    left: `${numberLeft}px`,
    top: `${numberTop}px`,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    fontSize: `${numberFontSize}px`,
    lineHeight: '1.5',
    color: isOpen ? '#0CC0DF' : '#0D94BB',
    zIndex: 2,
    transition: 'all 0.3s ease',
    transform: isOpen ? 'scale(1.1)' : 'scale(1)',
    textShadow: isOpen ? '0 0 10px rgba(12, 192, 223, 0.5)' : 'none',
    opacity: isVisible ? 1 : 0,
    transitionDelay: isVisible ? `${0.7 + index * 0.1}s` : '0s'
  });

  const contentWrapperStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    paddingLeft: `${contentPaddingLeft}px`,
    paddingRight: `${contentPaddingRight}px`
  };

  const questionButtonStyle = {
    position: 'relative',
    width: '100%',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: `${itemMinHeight}px`,
    textAlign: 'left',
    transition: 'all 0.3s ease'
  };

  const questionStyle = (isOpen) => ({
    fontFamily: isOpen ? 'Poppins, sans-serif' : 'Lato, sans-serif',
    fontWeight: '600',
    fontSize: isOpen ? `${questionOpenFontSize}px` : `${questionFontSize}px`,
    lineHeight: '1.5',
    color: isOpen ? '#0D98BA' : '#FFFFFF',
    margin: isOpen ? `0 0 ${questionMarginBottom}px 0` : '0',
    flex: 1,
    paddingRight: `${getScaledSize(12, 16, 15, 18)}px`,
    transition: 'all 0.3s ease',
    textShadow: isOpen ? '0 0 10px rgba(13, 152, 186, 0.3)' : 'none'
  });

  const arrowStyle = (isOpen) => ({
    width: `${arrowSize}px`,
    height: `${arrowSize}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    color: isOpen ? '#0CC0DF' : '#0D98BA'
  });

  const answerContainerStyle = (isOpen) => ({
    maxHeight: isOpen ? `${getScaledSize(450, 280, 220, 250)}px` : '0',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isOpen ? 1 : 0,
    paddingBottom: isOpen ? `${answerPaddingBottom}px` : '0'
  });

  const answerWrapperStyle = (isOpen) => ({
    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'transform 0.3s ease 0.1s'
  });

  const answerStyle = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: '600',
    fontSize: `${answerFontSize}px`,
    lineHeight: '1.6',
    color: '#E6E6E6',
    margin: '0',
    paddingRight: `${answerPaddingRight}px`
  };

  return (
    <div style={containerStyle} ref={containerRef}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>
          {renderTitle(headerContent.title, headerContent.highlighted_text)}
        </h2>
        
        <div style={itemsContainerStyle}>
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div 
                key={`faq-${faq.id}`} 
                style={getItemStyle(index, isOpen)}
              >
                <div style={numberStyle(isOpen, index)}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div style={contentWrapperStyle}>
                  <button 
                    style={questionButtonStyle}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 style={questionStyle(isOpen)}>{faq.question}</h3>
                    <div style={arrowStyle(isOpen)}>
                      <svg width={arrowSize} height={arrowSize} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  <div style={answerContainerStyle(isOpen)}>
                    <div style={answerWrapperStyle(isOpen)}>
                      <p style={answerStyle}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KinsebCROFAQ;