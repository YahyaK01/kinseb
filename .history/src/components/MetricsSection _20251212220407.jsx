import React from 'react';

const MetricsSection = ({ servicePath = '/services/seo' }) => {
  // Extract service type from path
  const getServiceType = (path) => {
    const segments = path.split('/');
    return segments[segments.length - 1] || 'seo';
  };

  const serviceType = getServiceType(servicePath);

  // Service-specific content
  const serviceContent = {
    seo: {
      title: "SEO Performance Results",
      description: "Our data-driven SEO strategies deliver measurable results that boost organic traffic, improve search rankings, and drive qualified leads to your business.",
      metrics: [
        {
          value: "178%",
          ellipseImage: "/images/webp/e-1.webp",
          iconImage: "/images/webp/18.webp",
          description: "Average increase in organic traffic within 6 months of implementing our comprehensive SEO strategy"
        },
        {
          value: "2.6x",
          ellipseImage: "/images/webp/e-2.webp",
          iconImage: "/images/webp/20.webp",
          description: "Improvement in search engine rankings for target keywords across multiple industries and markets"
        },
        {
          value: "57%",
          ellipseImage: "/images/webp/e-3.webp",
          iconImage: "/images/webp/30.webp",
          description: "Increase in qualified lead generation from organic search results and content marketing efforts"
        }
      ]
    },
    branding: {
      title: "Brand Impact Metrics",
      description: "Our strategic branding solutions create lasting impressions, build customer loyalty, and establish strong market presence that drives business growth.",
      metrics: [
        {
          value: "85%",
          ellipseImage: "/images/webp/e-1.webp",
          iconImage: "/images/webp/18.webp",
          description: "Increase in brand recognition and recall among target audiences within the first quarter"
        },
        {
          value: "3.4x",
          ellipseImage: "/images/webp/e-2.webp",
          iconImage: "/images/webp/20.webp",
          description: "Improvement in customer engagement rates across all brand touchpoints and marketing channels"
        },
        {
          value: "92%",
          ellipseImage: "/images/webp/e-3.webp",
          iconImage: "/images/webp/30.webp",
          description: "Client satisfaction rate with brand identity design and strategic positioning outcomes"
        }
      ]
    },
    'web-development': {
      title: "Development Performance",
      description: "Our custom web development solutions deliver fast, secure, and scalable websites that provide exceptional user experiences and drive conversions.",
      metrics: [
        {
          value: "95%",
          ellipseImage: "/images/webp/e-1.webp",
          iconImage: "/images/webp/18.webp",
          description: "Average page speed improvement and performance optimization across all developed websites"
        },
        {
          value: "4.2x",
          ellipseImage: "/images/webp/e-2.webp",
          iconImage: "/images/webp/20.webp",
          description: "Increase in user engagement and time spent on site with our responsive design solutions"
        },
        {
          value: "68%",
          ellipseImage: "/images/webp/e-3.webp",
          iconImage: "/images/webp/30.webp",
          description: "Average improvement in conversion rates through optimized user experience and interface design"
        }
      ]
    },
    'social-media': {
      title: "Social Media Growth",
      description: "Our social media strategies build engaged communities, increase brand awareness, and drive meaningful interactions that convert followers into customers.",
      metrics: [
        {
          value: "234%",
          ellipseImage: "/images/webp/e-1.webp",
          iconImage: "/images/webp/18.webp",
          description: "Average follower growth across all social media platforms within the first 6 months"
        },
        {
          value: "5.8x",
          ellipseImage: "/images/webp/e-2.webp",
          iconImage: "/images/webp/20.webp",
          description: "Improvement in engagement rates including likes, comments, shares, and meaningful interactions"
        },
        {
          value: "89%",
          ellipseImage: "/images/webp/e-3.webp",
          iconImage: "/images/webp/30.webp",
          description: "Increase in qualified leads and conversions generated from social media marketing campaigns"
        }
      ]
    },
    'paid-search': {
      title: "Paid Search Results",
      description: "Our data-driven paid search campaigns maximize ROI through strategic targeting, compelling ad copy, and continuous optimization for better performance.",
      metrics: [
        {
          value: "312%",
          ellipseImage: "/images/webp/e-1.webp",
          iconImage: "/images/webp/18.webp",
          description: "Average return on ad spend (ROAS) achieved through optimized campaign management and targeting"
        },
        {
          value: "2.9x",
          ellipseImage: "/images/webp/e-2.webp",
          iconImage: "/images/webp/20.webp",
          description: "Improvement in click-through rates compared to industry benchmarks and previous performance"
        },
        {
          value: "76%",
          ellipseImage: "/images/webp/e-3.webp",
          iconImage: "/images/webp/30.webp",
          description: "Reduction in cost-per-acquisition while maintaining or improving lead quality and conversion rates"
        }
      ]
    },
    'email-marketing': {
      title: "Email Marketing Success",
      description: "Our strategic email campaigns nurture leads, retain customers, and drive revenue through personalized, automated communication sequences.",
      metrics: [
        {
          value: "156%",
          ellipseImage: "/images/webp/e-1.webp",
          iconImage: "/images/webp/18.webp",
          description: "Increase in email open rates through strategic subject line optimization and audience segmentation"
        },
        {
          value: "4.7x",
          ellipseImage: "/images/webp/e-2.webp",
          iconImage: "/images/webp/20.webp",
          description: "Improvement in click-through rates with compelling content and optimized call-to-action placement"
        },
        {
          value: "83%",
          ellipseImage: "/images/webp/e-3.webp",
          iconImage: "/images/webp/30.webp",
          description: "Higher conversion rates from email campaigns through personalized messaging and automation workflows"
        }
      ]
    }
  };

  // Get current service content or default to SEO
  const currentService = serviceContent[serviceType] || serviceContent.seo;
  const metricsData = currentService.metrics;

  const sectionStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(180deg, #0D98BA -196.53%, #04091D 81.87%)',
    backgroundImage: 'url("/images/webp/metrics.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    overflow: 'hidden'
  };

  const headerStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '48px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    color: '#0D98BA',
    marginBottom: '15px',
    zIndex: 2
  };

  const subHeaderStyle = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    marginBottom: '40px',
    maxWidth: '600px',
    zIndex: 2
  };

  const cardsContainerStyle = {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    zIndex: 2,
    maxWidth: 'none',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingBottom: '10px',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch'
  };

  const cardStyle = {
    width: '280px',
    height: '340px',
    background: '#041629',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    borderLeft: '3px solid #0D98BA',
    borderBottom: '3px solid #0D98BA',
    flexShrink: 0
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(13, 152, 186, 0.3)'
  };

  const iconContainerStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '65px',
    top: '20px',
    border: '3px solid #0D98BA',
    boxShadow: '0 0 20px rgba(13, 152, 186, 0.3)',
    overflow: 'hidden'
  };

  const ellipseImageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    zIndex: 1
  };

  const iconImageStyle = {
    width: '70px',
    height: '70px',
    objectFit: 'contain',
    zIndex: 2,
    position: 'relative'
  };

  const valueStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '48px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    margin: 0
  };

  const descriptionStyle = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '18px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    opacity: 0.9,
    position: 'absolute',
    bottom: '15px',
    left: '20px',
    right: '20px',
    width: '240px',
    margin: 0
  };

  // Check if it's mobile screen
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mobile-specific styles
  const mobileSectionStyle = {
    ...sectionStyle,
    height: 'auto',
    minHeight: '100vh',
    padding: '60px 20px'
  };

  const mobileHeaderStyle = {
    ...headerStyle,
    fontSize: '28px',
    lineHeight: '40px'
  };

  const mobileSubHeaderStyle = {
    ...subHeaderStyle,
    fontSize: '14px',
    lineHeight: '22px'
  };

  const mobileCardsContainerStyle = {
    ...cardsContainerStyle,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'visible',
    overflowY: 'visible',
    gap: '30px',
    paddingBottom: '0'
  };

  return (
    <div style={isMobile ? mobileSectionStyle : sectionStyle}>
      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, #0D98BA -196.53%, #04091D 81.87%)',
        opacity: 0.85,
        zIndex: 1
      }} />
      
      <h2 style={isMobile ? mobileHeaderStyle : headerStyle}>
        {currentService.title}
      </h2>
      <p style={isMobile ? mobileSubHeaderStyle : subHeaderStyle}>
        {currentService.description}
      </p>
      
      <div style={isMobile ? mobileCardsContainerStyle : cardsContainerStyle}>
        {metricsData.map((metric, index) => (
          <MetricCard
            key={index}
            value={metric.value}
            ellipseImage={metric.ellipseImage}
            iconImage={metric.iconImage}
            description={metric.description}
            cardStyle={cardStyle}
            cardHoverStyle={cardHoverStyle}
            iconContainerStyle={iconContainerStyle}
            ellipseImageStyle={ellipseImageStyle}
            iconImageStyle={iconImageStyle}
            valueStyle={valueStyle}
            descriptionStyle={descriptionStyle}
          />
        ))}
      </div>
    </div>
  );
};

const MetricCard = ({ 
  value, 
  ellipseImage,
  iconImage,
  description, 
  cardStyle, 
  cardHoverStyle, 
  iconContainerStyle, 
  ellipseImageStyle,
  iconImageStyle,
  valueStyle, 
  descriptionStyle 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        ...cardStyle,
        ...(isHovered ? cardHoverStyle : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconContainerStyle}>
        {/* Ellipse background image */}
        <img 
          src={ellipseImage} 
          alt="Ellipse background" 
          style={ellipseImageStyle}
        />
        {/* Icon image on top */}
        <img 
          src={iconImage} 
          alt="Icon" 
          style={iconImageStyle}
        />
      </div>
      
      <div style={valueStyle}>{value}</div>
      
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default MetricsSection;