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
  const containerRef = useRef(null);

  // Static content
  const content = {
    formHeading: "Grow Now!",
    fullNameLabel: "Full Name",
    emailLabel: "Email Address",
    companyLabel: "Company Name",
    contactLabel: "Contact Number",
    messageLabel: "Your Message",
    privacyText: "You agree to our friendly privacy policy.",
    buttonText: "Get in touch"
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      clearTimeout(timer);
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
      // Simulate form submission - replace with your backend API
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

        @keyframes glow {
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
          justify-content: center;
          align-items: center;
          padding: 50px 40px;
          color: #FFFFFF;
          box-sizing: border-box;
          overflow: hidden;
        }

        .kinseb-form-container {
          width: 100%;
          max-width: 463px;
          background: #041629;
          border: 1px solid #07435D;
          box-shadow: 0px 0px 12px 2px rgba(13, 148, 187, 0.7);
          border-radius: 10px;
          padding: 50px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)'};
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: ${isVisible ? 'glow 3s ease-in-out infinite 1s' : 'none'};
        }

        .kinseb-form-heading {
          font-weight: 600;
          font-size: 36px;
          line-height: 54px;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          margin: 0;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .kinseb-status-message {
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
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
          display: flex;
          flex-direction: column;
          gap: 15px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        }

        .kinseb-form-group {
          display: flex;
          flex-direction: column;
          gap: 15px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .kinseb-form-group:nth-child(1) { transition-delay: 0.5s; }
        .kinseb-form-group:nth-child(2) { transition-delay: 0.6s; }
        .kinseb-form-group:nth-child(3) { transition-delay: 0.7s; }
        .kinseb-form-group:nth-child(4) { transition-delay: 0.8s; }
        .kinseb-form-group:nth-child(5) { transition-delay: 0.9s; }

        .kinseb-form-label {
          font-weight: 600;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: -0.006em;
          color: #FFFFFF;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin: 0;
        }

        .kinseb-input-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .kinseb-form-input,
        .kinseb-form-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 2px solid #FFFFFF;
          outline: none;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: -0.006em;
          color: #FFFFFF;
          padding: 10px 0;
          box-sizing: border-box;
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
          min-height: 59px;
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
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s;
        }

        .kinseb-checkbox-input {
          box-sizing: border-box;
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
          font-size: 16px;
          line-height: 24px;
          color: #FFFFFF;
          cursor: pointer;
          user-select: none;
        }

        .kinseb-submit-button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 24px;
          gap: 10px;
          width: 223px;
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
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'};
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

        @media (max-width: 768px) {
          .kinseb-landing-container {
            padding: 30px 20px;
          }

          .kinseb-form-container {
            max-width: 100%;
            padding: 30px 25px;
          }

          .kinseb-form-heading {
            font-size: 30px;
            line-height: 44px;
          }

          .kinseb-submit-button {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .kinseb-landing-container {
            padding: 20px 15px;
          }

          .kinseb-form-container {
            padding: 25px 20px;
          }

          .kinseb-form-heading {
            font-size: 26px;
            line-height: 38px;
          }

          .kinseb-form-label {
            font-size: 14px;
          }

          .kinseb-form-input,
          .kinseb-form-textarea {
            font-size: 14px;
          }
        }
      `}</style>
      
      <div className="kinseb-landing-container" role="main" ref={containerRef}>
        <div className="kinseb-form-container">
          <h1 className="kinseb-form-heading kinseb-poppins-font">{content.formHeading}</h1>
          
          {submitStatus === 'success' && (
            <div className="kinseb-status-message kinseb-success">
              <div className="kinseb-success-icon">✓</div>
              <div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="kinseb-status-message kinseb-error">
              <div className="kinseb-error-icon">✗</div>
              <div>
                <h3>Message Failed to Send</h3>
                <p>Something went wrong. Please try again.</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="kinseb-contact-form">
            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">{content.fullNameLabel}</label>
              <div className="kinseb-input-wrapper">
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
            </div>

            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">{content.emailLabel}</label>
              <div className="kinseb-input-wrapper">
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
            </div>

            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">{content.companyLabel}</label>
              <div className="kinseb-input-wrapper">
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
            </div>

            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">{content.contactLabel}</label>
              <div className="kinseb-input-wrapper">
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
            </div>

            <div className="kinseb-form-group">
              <label className="kinseb-form-label kinseb-lato-font">{content.messageLabel}</label>
              <div className="kinseb-input-wrapper">
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
                {content.privacyText}
              </label>
            </div>

            <button 
              type="submit"
              className="kinseb-submit-button kinseb-poppins-font"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : content.buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}