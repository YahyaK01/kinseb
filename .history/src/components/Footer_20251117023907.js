import React, { useState } from 'react';
import { Twitter, Facebook, Linkedin, Instagram, ChevronDown } from 'lucide-react';

// Schema.org Organization JSON-LD
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kinseb Marketing",
  "url": "https://www.kinsebwebdevelopment.com",
  "logo": "https://www.kinsebwebdevelopment.com/images/webp/logo.webp",
  "description": "Professional web development and design team that transforms ideas into amazing digital experiences.",
  "sameAs": [
    "https://twitter.com/kinsebwebdev",
    "https://facebook.com/kinsebwebdevelopment",
    "https://linkedin.com/company/kinsebwebdevelopment",
    "https://instagram.com/kinsebwebdevelopment"
  ]
};

const Footer = () => {
  // State to track which section is expanded on mobile (only one at a time)
  const [expandedSection, setExpandedSection] = useState(null);
  
  // State for newsletter email input
  const [email, setEmail] = useState('');
  
  // Toggle section expansion (close others when opening a new one)
  const toggleSection = (title) => {
    setExpandedSection(prev => prev === title ? null : title);
  };
  
  // Handle newsletter form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log('Subscribing email:', email);
    // Reset email field after submission
    setEmail('');
  };
  
  // Social media links with Lucide icons - Added descriptive labels and aria-labels for accessibility and SEO
  const socialLinks = [
    { href: "https://www.linkedin.com/company/kinsebmarketing/", icon: Linkedin, label: "LinkedIn", description: "Follow our company on LinkedIn" },
  ];
  
  // Footer columns with links - Added descriptions and improved labels for SEO
  const footerColumns = [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us", description: "Learn about our company history and values" },
        { href: "/contact", label: "Contact Us", description: "Get in touch with our team" },
      ]
    },
    {
      title: "Services",
      links: [
        {
          href: "/services/seo",
          label: "SEO",
          description: "Search Engine Optimization to improve your website visibility"
        },
        {
          href: "/services/branding",
          label: "Branding",
          description: "Complete brand identity and strategy development"
        },
        {
          href: "/services/web-development",
          label: "Web Development",
          description: "Custom websites and web applications built for your business"
        },
        {
          href: "/services/social-media",
          label: "Social Media",
          description: "Social media marketing and management services"
        },
        {
          href: "/services/paid-search",
          label: "Paid Search",
          description: "Google Ads and PPC campaign management"
        },
        {
          href: "/services/email-marketing",
          label: "Email Marketing",
          description: "Email marketing campaigns and automation"
        }
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy", description: "Read our privacy policy" },
        { href: "/terms", label: "Terms & Conditions", description: "Review our terms and conditions" },
      ]
    },
  ];

  return (
    <>
      <style>
        {`
        .kinseb-footer {
          background:#04091d;
          color: white;
          padding: 4rem 0 2rem;
          position: relative;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        
          box-sizing: border-box;
        }
        .kinseb-footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }
        .kinseb-footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
          gap: 2rem;
          align-items: start;
        }
        .kinseb-footer-brand {
          display: flex;
          flex-direction: column;
          padding-right: 1rem;
        }
        .kinseb-footer-logo {
          margin-bottom: 1rem;
        }
        .kinseb-footer-description {
          color: #B0B0B0;
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 100%;
        }
        .kinseb-footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .kinseb-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          color: #B0B0B0;
          backdrop-filter: blur(10px);
          text-decoration: none;
          cursor: pointer;
        }
        .kinseb-social-icon:hover {
          background-color: #809B0D;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(128, 155, 13, 0.3);
        }
        .kinseb-footer-column {
          display: flex;
          flex-direction: column;
          padding: 0 0.25rem;
        }
        .kinseb-footer-column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          margin-bottom: 1rem;
        }
        .kinseb-chevron-icon {
          display: none;
          transition: transform 0.3s ease;
        }
        .kinseb-chevron-icon.rotate {
          transform: rotate(180deg);
        }
        .kinseb-footer-column-title {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          position: relative;
          padding-bottom: 0.5rem;
          margin: 0;
        }
        .kinseb-footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
          transition: max-height 0.3s ease;
          overflow: hidden;
          max-height: 500px;
        }
        .kinseb-footer-link {
          color: #B0B0B0;
          text-decoration: none;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 0;
          line-height: 1.5;
          cursor: pointer;
        }
        .kinseb-footer-link:hover {
          color: #809B0D;
          transform: translateX(5px);
        }
        .kinseb-footer-link:before {
          content: '';
          position: absolute;
          left: -12px;
          top: 50%;
          width: 0;
          height: 0;
          background-color: #809B0D;
          border-radius: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .kinseb-footer-link:hover:before {
          width: 6px;
          height: 6px;
          left: -15px;
          opacity: 1;
        }
        .kinseb-newsletter-column {
          display: flex;
          flex-direction: column;
          padding: 0 0.25rem;
          width: 100%;
        }
        .kinseb-newsletter-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .kinseb-newsletter-description {
          color: #B0B0B0;
          font-size: 0.8rem;
          line-height: 1.5;
          margin-bottom: 1.2rem;
        }
        .kinseb-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          width: 100%;
        }
        .kinseb-input-container {
          display: flex;
          width: 100%;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .kinseb-input-container:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(128, 155, 13, 0.3);
        }
        .kinseb-input-container:focus-within {
          background: rgba(255, 255, 255, 0.15);
          border-color: #809B0D;
          box-shadow: 0 0 20px rgba(128, 155, 13, 0.2);
        }
        .kinseb-newsletter-input {
          flex: 1;
          background-color: transparent;
          border: none;
          color: white;
          padding: 0.8rem 1rem;
          font-size: 0.75rem;
          outline: none;
          transition: all 0.3s ease;
          height: 48px;
          padding-right: 120px;
          box-sizing: border-box;
        }
        .kinseb-newsletter-input::placeholder {
          color: #8A8A8A;
          font-weight: 400;
        }
        .kinseb-newsletter-button {
          background:#0D98BA;
          color: black;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          position: absolute;
          right: 4px;
          top: 50%;
          transform: translateY(-50%);
          padding: 0.6rem 1.2rem;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 15px rgba(0, 147, 233, 0.3);
        }
        .kinseb-newsletter-button:hover {
          background: linear-gradient(135deg, #007bb5 0%, #66b8a8 100%);
          transform: translateY(-50%) translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 147, 233, 0.4);
        }
        .kinseb-newsletter-button:active {
          transform: translateY(-50%) translateY(0px);
        }
        .kinseb-consent-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-top: 0.3rem;
        }
        .kinseb-consent-checkbox input {
          margin-top: 0.2rem;
          accent-color: #809B0D;
          transform: scale(1);
        }
        .kinseb-consent-text {
          color: #8A8A8A;
          font-size: 0.75rem;
          line-height: 1.4;
        }
        .kinseb-footer-bottom {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .kinseb-copyright {
          color: #8A8A8A;
          font-size: 0.8rem;
          font-weight: 400;
        }
        
        /* Responsive styles */
        @media (max-width: 1200px) {
          .kinseb-footer-content {
            grid-template-columns: 2fr 1fr 1fr 1fr 1.8fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 1100px) {
          .kinseb-footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          
          .kinseb-footer-brand {
            grid-column: span 2;
            margin-bottom: 2rem;
            padding-right: 0;
            text-align: center;
          }
          
          .kinseb-footer-social {
            justify-content: center;
          }
          
          .kinseb-newsletter-column {
            grid-column: span 2;
            margin-top: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 768px) {
          .kinseb-footer {
      
            padding: 3rem 0 2rem;
          }
          
          .kinseb-footer-container {
            padding: 0 2rem;
          }
          
          .kinseb-footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          
          .kinseb-footer-brand {
            grid-column: span 2;
          }
          
          .kinseb-chevron-icon {
            display: block;
          }
          
          .kinseb-footer-links {
            max-height: 0;
          }
          
          .kinseb-footer-links.expanded {
            max-height: 500px;
          }
          .kinseb-newsletter-column {
            grid-column: span 2;
          }
        }
        @media (max-width: 576px) {
          .kinseb-footer {
            padding: 3rem 0 1.5rem;
        
          }
          
          .kinseb-footer-container {
            padding: 0 1.5rem;
          }
          
          .kinseb-footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .kinseb-footer-brand {
            grid-column: 1;
            margin-bottom: 2rem;
          }
          
          .kinseb-footer-column-header {
            margin-bottom: 0.5rem;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .kinseb-footer-column-title {
            margin-bottom: 0;
            padding-bottom: 0;
          }
          
          .kinseb-footer-column-title:after {
            display: none;
          }
          
          .kinseb-newsletter-column {
            grid-column: 1;
          }
          
          .kinseb-newsletter-input {
            padding-right: 100px;
            font-size: 0.95rem;
          }
          
          .kinseb-newsletter-button {
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
          }
          
          .kinseb-footer-bottom {
            margin-top: 2.5rem;
          }
        }
      `}
      </style>
      <footer className="kinseb-footer" role="contentinfo">
        <div className="kinseb-footer-container">
          <div className="kinseb-footer-content">
            {/* 1. About Section */}
            <div className="kinseb-footer-brand">
              <div className="kinseb-footer-logo">
                <a href="/" aria-label="Kinseb Marketing Homepage" title="Kinseb Marketing">
                  <img 
                    src="/images/logo.svg" 
                    alt="Kinseb Marketing Company Logo" 
                    width={250} 
                    height={80} 
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </a>
              </div>
              <p className="kinseb-footer-description">
Kinseb Marketing Solutions turns ideas into measurable growth—Strategy & Design, SEO, Paid Ads, SMS & Email, CRO, and Automation & Analytics.
              </p>
              <div className="kinseb-footer-social">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="kinseb-social-icon"
                    aria-label={`Follow us on ${social.label}: ${social.description}`}
                    title={social.description}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* 2-4. Footer Link Columns (Company, Services, Legal) */}
            {footerColumns.map((column, index) => (
              <div className="kinseb-footer-column" key={index}>
                <div 
                  className="kinseb-footer-column-header" 
                  onClick={() => toggleSection(column.title)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedSection === column.title}
                >
                  <h3 className="kinseb-footer-column-title">{column.title}</h3>
                  <span className={`kinseb-chevron-icon ${expandedSection === column.title ? 'rotate' : ''}`}>
                    <ChevronDown size={18} aria-hidden="true" />
                  </span>
                </div>
                <ul 
                  className={`kinseb-footer-links ${expandedSection === column.title ? 'expanded' : ''}`}
                  aria-hidden={expandedSection !== column.title}
                >
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="kinseb-footer-link"
                        title={link.description}
                        aria-label={link.description}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* 5. Newsletter Column */}
            <div className="kinseb-newsletter-column">
              <h3 className="kinseb-newsletter-title">Grow Online</h3>
              <p className="kinseb-newsletter-description">
             Get our latest web & marketing insights, pro tips, and offers—right to your inbox.
              </p>
              <div className="kinseb-newsletter-form">
                <div className="kinseb-input-container">
                  <input 
                    type="email" 
                    className="kinseb-newsletter-input" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Your email address"
                  />
                  <button 
                    type="button" 
                    className="kinseb-newsletter-button" 
                    aria-label="Subscribe to our newsletter"
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </button>
                </div>
                <div className="kinseb-consent-checkbox">
                  <input type="checkbox" id="consent" required aria-label="Consent to receive emails" />
                  <label htmlFor="consent" className="kinseb-consent-text">
                    I agree to receive promotional emails and newsletters. You can unsubscribe at any time.
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom / Copyright */}
          <div className="kinseb-footer-bottom">
            <p className="kinseb-copyright">
              © {new Date().getFullYear()} Kinseb Marketing. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Schema.org JSON-LD markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </footer>
    </>
  );
};

export default Footer;