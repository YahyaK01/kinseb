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
    formHeading: "Start a Conversation"
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Lato:wght@400;700&family=Barlow:wght@400;500&display=swap');
        
        .kinseb-poppins-font { font-family: 'Poppins', sans-serif; }
        .kinseb-lato-font { font-family: 'Lato', sans-serif; }
        .kinseb-barlow-font { font-family: 'Barlow', sans-serif; }

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

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
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

        .kinseb-landing-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(180deg, #04091D 16.18%, #0D98BA 219.08%);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 50px 40px 30px 40px;
          color: #FFFFFF;
          box-sizing: border-box;
          gap: 40px;
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
          margin-top: 90px;
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
          flex: 0 0 620px;
          background: linear-gradient(180deg, #0D98BA -213.84%, #04091D 103.97%);
          border: 1px solid #07435D;
          backdrop-filter: blur(6px);
          border-radius: 10px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: fit-content;
          align-self: flex-start;
          margin-top: 60px;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.95)'};
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: ${isFormVisible ? '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(13, 152, 186, 0.2)' : '0 10px 30px rgba(0, 0, 0, 0.2)'};
        }

        .kinseb-form-heading {
          font-weight: 600;
          font-size: 34px;
          line-height: 44px;
          color: #FFFFFF;
          margin: 0 0 22px 0;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          text-shadow: ${isFormVisible ? '0 0 20px rgba(13, 152, 186, 0.3)' : 'none'};
        }

        .kinseb-status-message {
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 20px;
          animation: kinsebSlideIn 0.3s ease-out;
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
          margin: 0 0 5px 0;
          font-size: 16px;
          font-weight: 600;
          color: inherit;
        }

        .kinseb-status-message p {
          margin: 0;
          font-size: 14px;
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
          width: 100%;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        }

        .kinseb-form-row {
          display: flex;
          justify-content: space-between;
          gap: 22px;
          margin-bottom: 22px;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .kinseb-form-row:nth-child(1) {
          transition-delay: 0.5s;
        }

        .kinseb-form-row:nth-child(2) {
          transition-delay: 0.6s;
        }

        .kinseb-form-group {
          flex: 1;
          margin-bottom: 0;
        }

        .kinseb-full-width {
          width: 100%;
          margin-bottom: 22px;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s;
        }

        .kinseb-form-label {
          display: block;
          font-weight: 600;
          font-size: 15px;
          line-height: 140%;
          letter-spacing: -0.006em;
          color: #E6E6E6;
          margin-bottom: 7px;
        }

        .kinseb-input-container {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          height: 50px;
          background: rgba(36, 36, 36, 0.2);
          border: 1px solid #7D818D;
          backdrop-filter: blur(6px);
          border-radius: 10px;
          display: flex;
          align-items: center;
          padding-left: 50px;
          transition: all 0.3s ease;
        }

        .kinseb-input-container:focus-within {
          border-color: #0D98BA;
          box-shadow: 0 0 20px rgba(13, 152, 186, 0.3);
        }

        .kinseb-input-icon {
          position: absolute;
          left: 19px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0D98BA;
          width: 21px;
          height: 21px;
          z-index: 1;
          pointer-events: none;
        }

        .kinseb-form-input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          height: 100%;
          font-weight: 400;
          font-size: 15px;
          line-height: 19px;
          color: #98989A;
          padding: 0 17px 0 0;
          transition: color 0.3s ease;
        }

        .kinseb-form-input:focus {
          color: #FFFFFF;
        }

        .kinseb-form-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .kinseb-form-textarea {
          box-sizing: border-box;
          width: 100%;
          height: 105px;
          background: rgba(36, 36, 36, 0.2);
          border: 1px solid #7D818D;
          backdrop-filter: blur(6px);
          border-radius: 10px;
          padding: 15px 17px;
          font-weight: 400;
          font-size: 15px;
          line-height: 19px;
          color: #98989A;
          resize: none;
          outline: none;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .kinseb-form-textarea:focus {
          border-color: #0D98BA;
          color: #FFFFFF;
          box-shadow: 0 0 20px rgba(13, 152, 186, 0.3);
        }

        .kinseb-form-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .kinseb-privacy-checkbox {
          display: flex;
          align-items: center;
          margin: 22px 0;
          gap: 12px;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
        }

        .kinseb-checkbox-input {
          width: 18px;
          height: 18px;
          accent-color: #0D98BA;
          cursor: pointer;
          flex-shrink: 0;
        }

        .kinseb-checkbox-label {
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #7C8DB5;
          cursor: pointer;
          user-select: none;
        }

        .kinseb-checkbox-label:hover {
          color: #9BB5D6;
        }

        .kinseb-submit-button {
          width: 100%;
          height: 50px;
          background: #0D98BA;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 6px;
          font-weight: 500;
          font-size: 15px;
          line-height: 21px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A1A1A;
          border: none;
          cursor: pointer;
          margin: 22px 0 0 0;
          transition: all 0.3s ease;
          opacity: ${isFormVisible ? 1 : 0};
          transform: ${isFormVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s;
          position: relative;
          overflow: hidden;
        }

        .kinseb-submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .kinseb-submit-button:hover::before {
          left: 100%;
        }

        .kinseb-submit-button:hover:not(:disabled) {
          background: #0b7fa0;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(13, 152, 186, 0.4);
        }

        .kinseb-submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .kinseb-submit-button.kinseb-submitting {
          background: #0b7fa0;
          animation: pulse 2s ease-in-out infinite;
        }

        /* Desktop only positioning */
        @media (min-width: 1025px) {
          .kinseb-left-content { margin-top: 90px !important; }
        }

        @media (max-width: 1600px) {
          .kinseb-form-container { flex: 0 0 580px; }
          .kinseb-main-heading { font-size: 36px; line-height: 44px; }
          .kinseb-form-heading { font-size: 30px; line-height: 38px; }
        }

        @media (max-width: 1200px) {
          .kinseb-form-container { flex: 0 0 500px; }
          .kinseb-left-content { max-width: 550px; }
        }

        @media (max-width: 1024px) {
          .kinseb-landing-container { padding: 25px 30px; }
          .kinseb-left-content { max-width: 450px; margin-top: -30px; }
          .kinseb-form-container { flex: 0 0 460px; }
          .kinseb-main-heading { font-size: 34px; line-height: 44px; }
          .kinseb-form-heading { font-size: 30px; line-height: 38px; }
        }

        @media (max-width: 900px) {
          .kinseb-landing-container {
            flex-direction: column;
            align-items: center;
            padding: 20px;
            gap: 0px;
            height: auto;
            min-height: 100vh;
            overflow: auto;
          }
          .kinseb-left-content {
            max-width: 100%;
            margin-bottom: -20px;
            margin-top: 0;
            padding: 20px;
            border-radius: 10px;
          }
          .kinseb-form-container {
            flex: 1 1 auto;
            width: 100%;
            max-width: 700px;
          }
        }

        @media (max-width: 768px) {
          .kinseb-main-heading { font-size: 32px; line-height: 44px; }
          .kinseb-form-heading { font-size: 30px; line-height: 40px; }
          .kinseb-tagline { font-size: 20px; line-height: 28px; }
          .kinseb-background-image { display: none; }
        }

        @media (max-width: 640px) {
          .kinseb-form-row { flex-direction: column; gap: 0; }
          .kinseb-form-group { width: 100%; }
          .kinseb-main-heading { font-size: 28px; line-height: 40px; }
          .kinseb-form-heading { font-size: 26px; line-height: 36px; }
          .kinseb-input-container { height: 50px; background: rgba(4, 9, 29, 0.9); }
          .kinseb-input-icon { left: 15px; }
        }

        @media (max-width: 480px) {
          .kinseb-landing-container { padding: 15px; }
          .kinseb-main-heading { font-size: 24px; line-height: 34px; }
          .kinseb-tagline { font-size: 18px; line-height: 26px; }
          .kinseb-description { font-size: 14px; }
          .kinseb-feature-text, .kinseb-contact-text { font-size: 16px; }
          .kinseb-form-heading { font-size: 24px; line-height: 32px; }
          .kinseb-form-label { font-size: 14px; }
          .kinseb-form-input, .kinseb-form-textarea { font-size: 14px; }
          .kinseb-form-container { padding: 15px; }
          .kinseb-input-container { background: rgba(4, 9, 29, 0.9); border-color: #07435D; }
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
                <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="kinseb-status-message kinseb-error">
              <div className="kinseb-error-icon">✗</div>
              <div>
                <h3>Message Failed to Send</h3>
                <p>Something went wrong. Please try again or contact us directly.</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="kinseb-contact-form">
            <div className="kinseb-form-row">
              <div className="kinseb-form-group">
                <label className="kinseb-form-label kinseb-lato-font">Full Name</label>
                <div className="kinseb-input-container">
                  <div className="kinseb-input-icon" aria-hidden="true">
                    <img 
                      src="/images/user.svg" 
                      width="20" 
                      height="20" 
                      alt="" 
                      loading="lazy"
                    />
                  </div>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Your Name"
                    className="kinseb-form-input kinseb-barlow-font"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="kinseb-form-group">
                <label className="kinseb-form-label kinseb-lato-font">Email Address</label>
                <div className="kinseb-input-container">
                  <div className="kinseb-input-icon" aria-hidden="true">
                    <img 
                      src="/images/email.svg" 
                      width="20" 
                      height="20" 
                      alt="" 
                      loading="lazy"
                    />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email"
                    className="kinseb-form-input kinseb-barlow-font"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="kinseb-form-row">
              <div className="kinseb-form-group">
                <label className="kinseb-form-label kinseb-lato-font">Company Name</label>
                <div className="kinseb-input-container">
                  <div className="kinseb-input-icon" aria-hidden="true">
                    <img 
                      src="/images/company.svg" 
                      width="20" 
                      height="20" 
                      alt="" 
                      loading="lazy"
                    />
                  </div>
                  <input 
                    type="text" 
                    name="companyName"
                    placeholder="Company Name"
                    className="kinseb-form-input kinseb-barlow-font"
                    value={formData.companyName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="kinseb-form-group">
                <label className="kinseb-form-label kinseb-lato-font">Contact Number</label>
                <div className="kinseb-input-container">
                  <div className="kinseb-input-icon" aria-hidden="true">
                    <img 
                      src="/images/phone.svg" 
                      width="20" 
                      height="20" 
                      alt="" 
                      loading="lazy"
                    />
                  </div>
                  <input 
                    type="tel" 
                    name="contactNumber"
                    placeholder="Contact Number"
                    className="kinseb-form-input kinseb-barlow-font"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="kinseb-form-group kinseb-full-width">
              <label className="kinseb-form-label kinseb-lato-font">Your Message</label>
              <textarea 
                name="message"
                placeholder="Describe Your Project Needs..."
                className="kinseb-form-textarea kinseb-barlow-font"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Privacy Policy Checkbox */}
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
              <label htmlFor="privacyPolicy" className="kinseb-checkbox-label kinseb-barlow-font">
                You agree to our friendly privacy policy.
              </label>
            </div>

            <button 
              type="submit"
              className={`kinseb-submit-button kinseb-barlow-font ${isSubmitting ? 'kinseb-submitting' : ''}`}
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