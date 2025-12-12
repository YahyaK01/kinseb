import { useState, useEffect, useRef } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    contactNumber: '',
    message: '',
    privacyPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const containerRef = useRef(null);
  const formRef = useRef(null);

  // Static content
  const content = {
    shortTitle: "Transform Your Goals",
    title: "From Vision to Real Growth",
    description: "Set the goal, and we'll engineer the plan—build trust faster, convert higher, and keep customers engaged long after the first purchase.",
    point1: "500+ Clients Served",
    point2: "98% Client Retention Rate",
    point3: "Built for Startups & Scaling Businesses",
    contactInfoHeading: "Contact us",
    email: "info@kinsebmarketing.com",
    phone: "+1 (469) 602 1565",
    formHeading: "Grow Now!"
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 200);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsFormVisible(true);
          }, 100);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (formRef.current) {
      formObserver.observe(formRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (formRef.current) {
        formObserver.unobserve(formRef.current);
      }
    };
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const formTimer = setTimeout(() => {
      setIsFormVisible(true);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(formTimer);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this with your backend API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        contactNumber: '',
        message: '',
        privacyPolicy: false,
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Lato:wght@500;600&display=swap');
        
        .kinseb-poppins-font { font-family: 'Poppins', sans-serif; }
        .kinseb-lato-font { font-family: 'Lato', sans-serif; }

        * {
          box-sizing: border-box;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(13, 152, 186, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(13, 152, 186, 0.5);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(13, 152, 186, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(13, 152, 186, 0.8), 0 0 30px rgba(13, 152, 186, 0.6);
          }
        }

        @keyframes cardGlow {
          0%, 100% {
            box-shadow: 0px 0px 12px 2px rgba(13, 148, 187, 0.7);
          }
          50% {
            box-shadow: 0px 0px 20px 4px rgba(13, 148, 187, 0.9);
          }
        }

        .kinseb-landing-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(180deg, #04091D 16.18%, #0D98BA 219.08%);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px 60px;
          color: #FFFFFF;
          box-sizing: border-box;
          gap: 80px;
          overflow: hidden;
        }

        .kinseb-left-content {
          flex: 1;
          max-width: 600px;
          padding: 10px 30px;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-50px)'};
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .kinseb-background-image {
          position: absolute;
          bottom: 0;
          left: 30%;
          top: 49%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background-image: url('/images/webp/message.webp');
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: contain;
          opacity: ${isVisible ? 0.15 : 0};
          z-index: -1;
          transition: all 2s ease-in-out 0.5s;
          animation: ${isVisible ? 'float 6s ease-in-out infinite 2s' : 'none'};
        }
        
        .kinseb-content-wrapper {
          position: relative;
          z-index: 2;
        }

        .kinseb-tagline {
          font-weight: 600;
          font-size: 22px;
          line-height: 30px;
          color: #0D94BB;
          margin: 0 0 3px 0;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          animation: ${isVisible ? 'glow 4s ease-in-out infinite 2s' : 'none'};
        }

        .kinseb-main-heading {
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;
          color: #0D98BA;
          margin: 0 0 8px 0;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'};
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
          text-shadow: ${isVisible ? '0 0 20px rgba(13, 152, 186, 0.3)' : 'none'};
        }

        .kinseb-description {
          font-weight: 600;
          font-size: 20px;
          line-height: 145%;
          letter-spacing: -0.006em;
          color: #E6E6E6;
          max-width: 850px;
          margin: 0 0 18px 0;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(25px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
        }

        .kinseb-features {
          margin-bottom: 16px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
        }

        .kinseb-feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .kinseb-feature-item:nth-child(1) {
          transition-delay: 1s;
        }

        .kinseb-feature-item:nth-child(2) {
          transition-delay: 1.1s;
        }

        .kinseb-feature-item:nth-child(3) {
          transition-delay: 1.2s;
        }

        .kinseb-check-mark {
          color: #0D98BA;
          margin-right: 10px;
          font-size: 20px;
        }

        .kinseb-feature-text {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          font-size: 20px;
          line-height: 145%;
          letter-spacing: -0.006em;
          color: rgba(230, 230, 230, 1);
          margin: 0;
        }

        .kinseb-contact-info {
          margin-top: 32px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(25px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s;
        }

        .kinseb-contact-heading {
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: -0.03em;
          color: rgba(230, 230, 230, 1);
          margin: 0 0 10px 0;
        }

        .kinseb-contact-item {
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-15px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .kinseb-contact-item:nth-child(2) {
          transition-delay: 1.5s;
        }

        .kinseb-contact-item:nth-child(3) {
          transition-delay: 1.6s;
        }

        .kinseb-contact-icon {
          margin-right: 10px;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0D98BA;
        }

        .kinseb-contact-text {
          font-weight: 700;
          font-size: 20px;
          line-height: 145%;
          letter-spacing: -0.006em;
          color: #E6E6E6;
          margin: 0;
        }

        .kinseb-form-container {
          flex: 0 0 450px;
          background: #041629;
          border: 1px solid #07435D;
          box-shadow: 0px 0px 12px 2px rgba(13, 148, 187, 0.7);
          border-radius: 10px;
          padding: 40px 45px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-self: center;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.95)'};
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: ${isFormVisible ? 'cardGlow 3s ease-in-out infinite 1s' : 'none'};
        }

        .kinseb-form-heading {
          font-weight: 600;
          font-size: 36px;
          line-height: 44px;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          margin: 0 0 10px 0;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .kinseb-status-message {
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
          animation: kinsebSlideIn 0.3s ease-out;
          margin-bottom: 10px;
        }

        .kinseb-status-message.kinseb-success {
          background-color: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .kinseb-status-message.kinseb-error {
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .kinseb-success-icon, .kinseb-error-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .kinseb-success-icon {
          background-color: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .kinseb-error-icon {
          background-color: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .kinseb-status-message h3 {
          margin: 0 0 4px 0;
          font-size: 15px;
          font-weight: 600;
          color: inherit;
        }

        .kinseb-status-message p {
          margin: 0;
          font-size: 13px;
          opacity: 0.9;
          color: inherit;
        }

        .kinseb-status-message.kinseb-success h3, .kinseb-status-message.kinseb-success p {
          color: #22c55e;
        }

        .kinseb-status-message.kinseb-error h3, .kinseb-status-message.kinseb-error p {
          color: #ef4444;
        }

        @keyframes kinsebSlideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .kinseb-contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        }

        .kinseb-form-group {
          width: 100%;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .kinseb-form-group:nth-child(1) { transition-delay: 0.5s; }
        .kinseb-form-group:nth-child(2) { transition-delay: 0.6s; }
        .kinseb-form-group:nth-child(3) { transition-delay: 0.7s; }
        .kinseb-form-group:nth-child(4) { transition-delay: 0.8s; }
        .kinseb-form-group:nth-child(5) { transition-delay: 0.9s; }

        .kinseb-form-label {
          display: block;
          font-weight: 600;
          font-size: 15px;
          line-height: 22px;
          letter-spacing: -0.006em;
          color: #FFFFFF;
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
          margin-bottom: 10px;
        }

        .kinseb-form-input,
        .kinseb-form-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 2px solid #FFFFFF;
          outline: none;
          font-weight: 500;
          font-size: 15px;
          line-height: 22px;
          letter-spacing: -0.006em;
          color: #FFFFFF;
          padding: 10px 0;
          transition: border-color 0.3s ease;
        }

        .kinseb-form-input::placeholder,
        .kinseb-form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .kinseb-form-input:focus,
        .kinseb-form-textarea:focus {
          border-bottom-color: #0D98BA;
        }

        .kinseb-form-textarea {
          resize: vertical;
          min-height: 60px;
          max-height: 100px;
        }

        .kinseb-form-input:disabled,
        .kinseb-form-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .kinseb-privacy-checkbox {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 8px 0;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s;
        }

        .kinseb-checkbox-input {
          width: 20px;
          height: 20px;
          border: 1px solid #D0D5DD;
          border-radius: 6px;
          cursor: pointer;
          flex-shrink: 0;
          accent-color: #0D98BA;
        }

        .kinseb-checkbox-label {
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #FFFFFF;
          cursor: pointer;
          user-select: none;
        }

        .kinseb-submit-button {
          width: 100%;
          max-width: 240px;
          height: 48px;
          background: #0D98BA;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.02em;
          color: #000000;
          transition: all 0.3s ease;
          margin-top: 10px;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s;
        }

        .kinseb-submit-button:hover:not(:disabled) {
          background: #0b7fa0;
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(13, 152, 186, 0.4);
        }

        .kinseb-submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 1600px) {
          .kinseb-landing-container { padding: 40px 50px; gap: 60px; }
          .kinseb-form-container { flex: 0 0 420px; }
          .kinseb-main-heading { font-size: 36px; line-height: 44px; }
        }

        @media (max-width: 1200px) {
          .kinseb-landing-container { padding: 35px 40px; gap: 50px; }
          .kinseb-form-container { flex: 0 0 400px; padding: 35px 40px; }
          .kinseb-left-content { max-width: 550px; }
        }

        @media (max-width: 1024px) {
          .kinseb-landing-container { padding: 30px; gap: 40px; }
          .kinseb-left-content { max-width: 450px; }
          .kinseb-form-container { flex: 0 0 380px; padding: 30px 35px; }
          .kinseb-main-heading { font-size: 34px; line-height: 44px; }
        }

        @media (max-width: 900px) {
          .kinseb-landing-container {
            flex-direction: column;
            align-items: center;
            padding: 25px;
            gap: 30px;
            height: auto;
            min-height: 100vh;
            overflow: auto;
          }
          .kinseb-left-content {
            max-width: 100%;
            margin-bottom: 0;
            padding: 20px;
          }
          .kinseb-form-container {
            flex: 1 1 auto;
            width: 100%;
            max-width: 650px;
          }
        }

        @media (max-width: 768px) {
          .kinseb-main-heading { font-size: 32px; line-height: 42px; }
          .kinseb-form-heading { font-size: 30px; line-height: 38px; }
          .kinseb-tagline { font-size: 20px; line-height: 28px; }
          .kinseb-background-image { display: none; }
          .kinseb-form-container { padding: 30px; }
        }

        @media (max-width: 640px) {
          .kinseb-main-heading { font-size: 28px; line-height: 38px; }
          .kinseb-form-heading { font-size: 28px; line-height: 36px; }
        }

        @media (max-width: 480px) {
          .kinseb-landing-container { padding: 20px; }
          .kinseb-main-heading { font-size: 24px; line-height: 34px; }
          .kinseb-tagline { font-size: 18px; line-height: 26px; }
          .kinseb-description { font-size: 16px; }
          .kinseb-feature-text, .kinseb-contact-text { font-size: 16px; }
          .kinseb-form-heading { font-size: 26px; line-height: 34px; }
          .kinseb-form-container { padding: 25px; }
          .kinseb-submit-button { max-width: 100%; }
        }
      `}</style>
      
      <div className="kinseb-landing-container" role="main" ref={containerRef}>
        {/* Left side content */}
        <div className="kinseb-left-content">
          <div className="kinseb-background-image" aria-hidden="true"></div>
          <div className="kinseb-content-wrapper">
            <p className="kinseb-tagline kinseb-poppins-font">{content.shortTitle}</p>
            
            <h1 className="kinseb-main-heading kinseb-poppins-font">{content.title}</h1>
            
            <p className="kinseb-description kinseb-lato-font">{content.description}</p>

            <div className="kinseb-features" role="list">
              <div className="kinseb-feature-item" role="listitem">
                <div className="kinseb-check-mark" aria-hidden="true">✓</div>
                <p className="kinseb-feature-text kinseb-lato-font">{content.point1}</p>
              </div>
              
              <div className="kinseb-feature-item" role="listitem">
                <div className="kinseb-check-mark" aria-hidden="true">✓</div>
                <p className="kinseb-feature-text kinseb-lato-font">{content.point2}</p>
              </div>
              
              <div className="kinseb-feature-item" role="listitem">
                <div className="kinseb-check-mark" aria-hidden="true">✓</div>
                <p className="kinseb-feature-text kinseb-lato-font">{content.point3}</p>
              </div>
            </div>

            <div className="kinseb-contact-info">
              <h2 className="kinseb-contact-heading kinseb-poppins-font">{content.contactInfoHeading}</h2>
              
              <div className="kinseb-contact-item">
                <div className="kinseb-contact-icon" aria-hidden="true">
                  <img 
                    src="/images/email.svg" 
                    width="20" 
                    height="20" 
                    alt="Email icon" 
                    loading="lazy"
                  />
                </div>
                <p className="kinseb-contact-text kinseb-lato-font">
                  <a href={`mailto:${content.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {content.email}
                  </a>
                </p>
              </div>
              
              <div className="kinseb-contact-item">
                <div className="kinseb-contact-icon" aria-hidden="true">
                  <img 
                    src="/images/phone.svg" 
                    width="24" 
                    height="24" 
                    alt="Phone icon" 
                    loading="lazy"
                  />
                </div>
                <p className="kinseb-contact-text kinseb-lato-font">
                  <a href={`tel:${content.phone.replace(/\s/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {content.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="kinseb-form-container" ref={formRef}>
          <h2 className="kinseb-form-heading kinseb-poppins-font">{content.formHeading}</h2>
          
          {submitStatus === 'success' && (
            <div className="kinseb-status-message kinseb-success">
              <div className="kinseb-success-icon">✓</div>
              <div>
                <h3>Message Sent Successfully!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="kinseb-status-message kinseb-error">
              <div className="kinseb-error-icon">✗</div>
              <div>
                <h3>Message Failed to Send</h3>
                <p>Please try again or contact us directly.</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="kinseb-contact-form">
            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                placeholder="Enter your full name"
                className="kinseb-form-input kinseb-lato-font"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">Email Address</label>
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email address"
                className="kinseb-form-input kinseb-lato-font"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">Company Name</label>
              <input 
                type="text" 
                name="companyName"
                placeholder="Enter your company name"
                className="kinseb-form-input kinseb-lato-font"
                value={formData.companyName}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">Contact Number</label>
              <input 
                type="tel" 
                name="contactNumber"
                placeholder="Enter your contact number"
                className="kinseb-form-input kinseb-lato-font"
                value={formData.contactNumber}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">Your Message</label>
              <textarea 
                name="message"
                placeholder="Enter your message"
                className="kinseb-form-textarea kinseb-lato-font"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="kinseb-privacy-checkbox">
              <input 
                type="checkbox" 
                id="privacyPolicy" 
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                required 
                className="kinseb-checkbox-input"
              />
              <label htmlFor="privacyPolicy" className="kinseb-checkbox-label kinseb-lato-font">
                You agree to our friendly privacy policy.
              </label>
            </div>

            <button 
              type="submit"
              className="kinseb-submit-button kinseb-poppins-font"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get in touch'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}