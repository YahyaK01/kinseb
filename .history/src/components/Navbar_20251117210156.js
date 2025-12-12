import React, { useState, useEffect } from 'react';

// Define an interface for navigation links
const navigationLinks = [
  { href: "/", label: "Home", id: "home", icon: "/images/home.svg" },
  { 
    href: "/services", 
    label: "Services", 
    id: "services", 
    icon: "/images/service.svg",
    hasDropdown: true,
    dropdownItems: [
      { href: "/services/seo", label: "SEO" },
      { href: "/services/branding", label: "Branding" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/social-media", label: "Social Media" },
      { href: "/services/paid-search", label: "Paid Search" },
      { href: "/services/email-marketing", label: "Email Marketing" }
    ]
  },

  { href: "/about", label: "About", id: "about", icon: "/images/about.svg" },
    { href: "/locations", label: "Locations", id: "locations", icon: "/images/location.svg" },
  { href: "/contact", label: "Contact Us", id: "contact", icon: "/images/contact.svg" }
];

// Social media links
const socialLinks = [
  { href: "https://twitter.com", icon: "/images/twitter.svg", label: "Twitter" },
  { href: "https://facebook.com", icon: "/images/facebook.svg", label: "Facebook" },
  { href: "https://instagram.com", icon: "/images/insta.svg", label: "Instagram" },
  { href: "https://linkedin.com", icon: "/images/linkedin.svg", label: "LinkedIn" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Fix hydration issues by only rendering client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  // Set active link based on current URL
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      setActiveLink('home');
    } else if (currentPath.startsWith('/services')) {
      setActiveLink('services');
  
    } else if (currentPath === '/about') {
      setActiveLink('about');
         } else if (currentPath === '/locations') {
      setActiveLink('locations');
    } else if (currentPath === '/contact') {
      setActiveLink('contact');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (!mounted) return;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, mounted]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Add class to body when menu is open to control z-index
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  // Reset dropdown when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setOpenDropdown(null);
    }
  }, [isMenuOpen]);

  // Add keyboard event listener for Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (openDropdown) {
          setOpenDropdown(null);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    if (isMenuOpen || openDropdown) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, openDropdown]);

  // Don't render until client-side to prevent hydration errors
  if (!mounted) {
    return null;
  }

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .navbar * {
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
          font-family: 'Lato', sans-serif;
        }

        /* ========== NAVBAR STYLES ========== */
        .navbar {
          background-color: #091135;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          width: 100%;
          min-height: 70px;
          position: relative;
        }

        .logo-container {
          display: flex;
          align-items: center;
          z-index: 1001;
          flex-shrink: 0;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .logo-container img {
          transition: transform 0.3s ease;
          width: auto !important;
          height: 55px !important;
          max-width: 220px !important;
          object-fit: contain;
        }

        .logo-container:hover img {
          transform: translateY(-2px);
        }

        /* ========== DESKTOP NAVIGATION ========== */
  .desktop-nav {
  display: none;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
  justify-content: flex-end;
  margin: 0 2rem;
  margin-right: 5rem; /* Add this line for right margin */
}

        .desktop-nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-nav-item {
          position: relative;
        }

        .desktop-nav-link {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          position: relative;
          font-family: 'Lato', sans-serif;
          letter-spacing: 0.3px;
        }

        .desktop-nav-link:hover {
          color: #0D98BA;
        }

        .desktop-nav-link.active {
          color: #0D98BA;
        }

        .desktop-nav-link:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #0D98BA;
          transition: width 0.3s ease;
        }

        .desktop-nav-link:hover:after,
        .desktop-nav-link.active:after {
          width: 100%;
        }

     /* Desktop Services Dropdown - With Clickable Categories */
.desktop-services-dropdown {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  width: 100vw;
  margin: 0;
  background: url('/images/webp/dropdown.webp');
  background-size: 500px 100%;
  background-position: left center;
  background-repeat: no-repeat;
  border-radius: 0;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 0;
  border: none;
  backdrop-filter: blur(10px);
  z-index: 9999;
  min-height: 350px;
  max-height: 380px;
  overflow: hidden;
}

.desktop-nav-item:hover .desktop-services-dropdown {
  opacity: 1;
  visibility: visible;
  top: 70px;
}

.desktop-services-dropdown::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(4, 9, 29, 0) 0%, rgba(4, 9, 29, 0.98) 27.5%, #04091D 100%);
  z-index: 1;
  pointer-events: none;
}

.dropdown-content {
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 350px;
}

.dropdown-services {
  width: 100%;
  padding: 2.5rem 2rem 2.5rem 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background: transparent;
  margin-left: auto;
  max-width: calc(100% - 200px);
  position: relative;
  z-index: 3;
}

/* Clickable Category Container */
.dropdown-category {
  position: relative;
  z-index: 4;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.category-title {
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #0D98BA;
  margin-bottom: 1rem;
  display: block;
  border-bottom: 2px solid #0D98BA;
  padding-bottom: 0.4rem;
  position: relative;
  z-index: 5;
}

.category-items {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 5;
}

.category-item {
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 5;
}

.category-item::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #0D98BA;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
}

.desktop-dropdown-link {
  display: block;
  color: #FFFFFF;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  transition: all 0.3s ease;
  flex: 1;
  position: relative;
  z-index: 6;
}

.desktop-dropdown-link:hover {
  color: #0D98BA;
  transform: translateX(5px);
}

        .desktop-nav-item:hover .desktop-services-dropdown {
          opacity: 1;
          visibility: visible;
          margin-top: 0.8rem;
        }

        .button-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        /* Quote Button */
        .quote-button {
          background-color: #0D98BA;
          color: black;
          padding: 0.75rem 1.5rem;
          font-family: 'Lato', sans-serif;
          border-radius: 6px;
          font-size: clamp(0.8rem, 2vw, 0.95rem);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          white-space: nowrap;
          box-shadow: 0 4px 6px rgba(13, 152, 186, 0.2);
          letter-spacing: 0.3px;
          flex-shrink: 0;
        }

        .quote-button:hover {
          background-color: #0B8DAD;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(13, 152, 186, 0.3);
        }

        /* ========== HAMBURGER STYLES (Mobile Only) ========== */
        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger-line {
          display: block;
          width: 24px;
          height: 2px;
          background-color: #809B0D;
          border-radius: 1px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger-line:nth-child(2) {
          width: 16px;
          margin-left: auto;
          transition: all 0.3s ease;
        }

        .hamburger-container {
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 990;
          background-color: #1A1A1A;
          border-radius: 6px;
          width: 48px;
          height: 48px;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
          flex-shrink: 0;
        }

        .hamburger-container:hover {
          background-color: #222222;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .hamburger-container:hover .hamburger-line:nth-child(2) {
          width: 20px;
        }

        .hamburger-container:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(128, 155, 13, 0.2) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hamburger-container:hover:after {
          opacity: 1;
        }

        /* Hamburger to X animation */
        .hamburger.active .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
          width: 24px;
        }

        .hamburger.active .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: translateX(20px);
          width: 24px;
        }

        .hamburger.active .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
          width: 24px;
        }

        /* ========== MENU SIDEBAR STYLES (Mobile Only) ========== */
        .menu-side {
          position: fixed;
          top: 0;
          right: -400px;
          width: 400px;
          height: 100vh;
          background-color: #050922;
          z-index: 1000;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
          overflow-y: auto;
          padding: 2rem 2rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .menu-side.open {
          transform: translateX(-400px);
        }

        .menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          width: 100%;
          flex-shrink: 0;
        }

        .menu-logo {
          display: flex;
          align-items: center;
        }

        .menu-close {
          width: 36px !important;
          height: 36px !important;
          border-radius: 50% !important;
          background-color: #091135 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
          margin: 0 !important;
          position: relative !important;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
          cursor: pointer !important;
          transition: transform 0.3s ease !important;
          border: none;
        }

        .menu-close svg {
          width: 18px !important;
          height: 18px !important;
          display: block !important;
          margin: 0 auto !important;
          position: static !important;
          top: auto !important;
          left: auto !important;
        }

        .menu-close:hover {
          transform: rotate(90deg);
          background-color: #0d1540;
        }

        .menu-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          flex: 1;
          overflow: visible;
        }

        .menu-links {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
          flex-shrink: 0;
        }

        .menu-item {
          margin: 0.3rem 0;
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .menu-side.open .menu-item {
          opacity: 1;
          transform: translateX(0);
        }

        .menu-side.open .menu-item:nth-child(1) { transition-delay: 0.1s; }
        .menu-side.open .menu-item:nth-child(2) { transition-delay: 0.17s; }
        .menu-side.open .menu-item:nth-child(3) { transition-delay: 0.24s; }
        .menu-side.open .menu-item:nth-child(4) { transition-delay: 0.31s; }
        .menu-side.open .menu-item:nth-child(5) { transition-delay: 0.38s; }

        .menu-link {
          color: white;
          text-decoration: none;
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          letter-spacing: 0.5px;
          position: relative;
          font-family: 'Lato', sans-serif;
        }

        .menu-link-icon {
          margin-right: 0.8rem;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.85;
          transition: all 0.3s ease;
        }

        .menu-link:hover {
          color: #00BCD4;
          transform: translateX(5px);
        }

        .menu-link:hover .menu-link-icon {
          opacity: 1;
        }

        .menu-link.active {
          color: #00BCD4;
        }

        .menu-link.active .menu-link-icon {
          opacity: 1;
        }

        .menu-link:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background-color: rgba(0, 188, 212, 0.5);
          transition: width 0.3s ease;
        }

        .menu-link:hover:before {
          width: 30px;
        }

        .menu-link.active:before {
          width: 30px;
          background-color: #00BCD4;
        }

        /* Menu link with dropdown (Services) */
        .menu-link-with-dropdown {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          color: white;
          text-decoration: none;
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          letter-spacing: 0.5px;
          position: relative;
          font-family: 'Lato', sans-serif;
        }
        
        .menu-link-with-dropdown .menu-link-text {
          display: flex;
          align-items: center;
          cursor: pointer;
          color: white;
          text-decoration: none;
          flex: 1;
        }
        
        .menu-link-text:hover {
          color: #00BCD4;
          transform: translateX(5px);
        }

        .menu-link-with-dropdown:hover {
          color: #00BCD4;
        }
        
        .menu-link-with-dropdown.active .menu-link-text {
          color: #00BCD4;
        }

        /* Plus/Minus icon for Services */
        .plus-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          position: relative;
          cursor: pointer;
          margin-left: auto;
          transition: transform 0.3s ease;
          background-color: rgba(13, 152, 186, 0.1);
          border-radius: 50%;
        }

        .plus-icon:before,
        .plus-icon:after {
          content: '';
          position: absolute;
          background-color: #00BCD4;
          transition: all 0.3s ease;
        }

        .plus-icon:before {
          width: 10px;
          height: 2px;
          top: 9px;
          left: 5px;
        }

        .plus-icon:after {
          width: 2px;
          height: 10px;
          top: 5px;
          left: 9px;
        }

        .plus-icon.open:before {
          transform: rotate(180deg);
        }

        .plus-icon.open:after {
          transform: rotate(90deg);
          opacity: 0;
        }

        .plus-icon:hover {
          background-color: rgba(13, 152, 186, 0.2);
          transform: scale(1.1);
        }

        /* Services Dropdown */
        .services-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          margin-top: 0;
          padding-left: 2rem;
          background-color: rgba(0, 188, 212, 0.05);
          border-left: 2px solid rgba(0, 188, 212, 0.3);
          margin-left: 1rem;
          border-radius: 0 8px 8px 0;
        }

        .services-dropdown.open {
          max-height: 300px;
          opacity: 1;
          margin-top: 0.5rem;
          padding: 0.75rem 0 0.75rem 2rem;
        }

        .services-dropdown-item {
          margin: 0.4rem 0;
          transform: translateX(-20px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .services-dropdown.open .services-dropdown-item {
          transform: translateX(0);
          opacity: 1;
        }

        .services-dropdown.open .services-dropdown-item:nth-child(1) { transition-delay: 0.1s; }
        .services-dropdown.open .services-dropdown-item:nth-child(2) { transition-delay: 0.15s; }
        .services-dropdown.open .services-dropdown-item:nth-child(3) { transition-delay: 0.2s; }
        .services-dropdown.open .services-dropdown-item:nth-child(4) { transition-delay: 0.25s; }
        .services-dropdown.open .services-dropdown-item:nth-child(5) { transition-delay: 0.3s; }
        .services-dropdown.open .services-dropdown-item:nth-child(6) { transition-delay: 0.35s; }

        .services-dropdown-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: clamp(0.8rem, 2.2vw, 0.95rem);
          font-weight: 400;
          transition: all 0.3s ease;
          display: block;
          padding: 0.3rem 0;
          letter-spacing: 0.3px;
          position: relative;
          font-family: 'Lato', sans-serif;
        }

        .services-dropdown-link:hover {
          color: #00BCD4;
          transform: translateX(5px);
          padding-left: 0.5rem;
        }

        .services-dropdown-link:before {
          content: '';
          position: absolute;
          left: -0.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          background-color: #00BCD4;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .services-dropdown-link:hover:before {
          opacity: 1;
        }

        .menu-divider {
          height: 1px;
          background-color: #00BCD4;
          margin: 1rem 0;
          width: 100%;
          flex-shrink: 0;
        }

        /* Newsletter section - Compact */
        .menu-newsletter {
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          flex-shrink: 0;
        }

        .menu-newsletter-title {
          color: white;
          font-size: clamp(1rem, 2.8vw, 1.1rem);
          font-weight: 600;
          margin-bottom: 0.8rem;
          display: block;
          font-family: 'Lato', sans-serif;
        }

        .menu-newsletter-form {
          position: relative;
          width: 100%;
          height: 50px;
          background: rgba(36, 36, 36, 0.2);
          border: 1px solid #262626;
          backdrop-filter: blur(6px);
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          margin-bottom: 0.8rem;
        }

        .menu-newsletter-input {
          flex: 1;
          background-color: transparent;
          border: none;
          padding: 0;
          height: 18px;
          font-family: 'Lato', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: clamp(12px, 3vw, 14px);
          line-height: 18px;
          color: #FFFFFF;
          width: 100%;
        }

        .menu-newsletter-input::placeholder {
          color: #98989A;
        }

        .menu-newsletter-input:focus {
          outline: none;
        }

        .menu-newsletter-button {
          position: absolute;
          right: 8px;
          width: 70px;
          height: 34px;
          background: #0D98BA;
          border-radius: 4px;
          border: none;
          font-family: 'Lato', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: clamp(10px, 2.5vw, 12px);
          line-height: 150%;
          text-align: center;
          color: #FFFFFF;
          cursor: pointer;
          transition: all 0.3s ease;
          top: 8px;
        }

        .menu-newsletter-button:hover {
          background: #0B89A9;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(13, 152, 186, 0.3);
        }

        .menu-newsletter-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.80rem;
          line-height: 1.3;
          margin-top: 0.5rem;
        }

        /* Social links - Compact */
        .menu-social {
          display: flex;
          margin-top: 0.5rem;
          gap: 0.8rem;
          flex-shrink: 0;
          justify-content: flex-start;
        }

        .menu-social-link {
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .menu-social-link:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          transform: scale(0.8);
        }

        .menu-social-link:hover {
          transform: translateY(-2px);
        }

        .menu-social-link:hover:before {
          opacity: 0.8;
          transform: scale(1);
        }

        .menu-social-link img {
          width: 16px !important;
          height: 16px !important;
          filter: brightness(1.2);
          position: relative;
          z-index: 2;
        }

        /* Overlay */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 9, 34, 0.85);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          backdrop-filter: blur(8px);
        }

        .overlay.show {
          opacity: 1;
          visibility: visible;
        }

        /* Body classes for menu states */
        .menu-open .navbar {
          z-index: 997;
        }

        .menu-open .navbar .logo-container {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        /* ========== RESPONSIVE BREAKPOINTS ========== */

        /* Desktop view */
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
          }
          
          .hamburger-container {
            display: none !important;
          }
          
          .menu-side,
          .overlay {
            display: none !important;
          }
        }

        /* Tablet view */
        @media (min-width: 769px) and (max-width: 991px) {
          .container {
            padding: 1rem 1.5rem;
          }
          
          .logo-container img {
            height: 48px !important;
            max-width: 200px !important;
          }
          
          .quote-button {
            padding: 0.65rem 1.2rem;
            font-size: 0.85rem;
          }

          .hamburger-container {
            display: flex;
            width: 45px;
            height: 45px;
          }
        }

        /* Mobile view */
        @media (max-width: 768px) {
          .container {
            padding: 1rem 1.5rem;
          }

          .navbar .container .quote-button {
            display: none !important;
          }
          
          .logo-container img {
            width: 160px !important;
            height: 45px !important;
          }

          .hamburger-container {
            display: flex;
            margin-right: -15px;
            width: 45px;
            height: 45px;
          }

          .menu-side {
            width: 100%;
            right: -100%;
            padding: 1.5rem;
          }
          
          .menu-side.open {
            transform: translateX(-100%);
          }
          
          .menu-links {
            margin-bottom: 1rem;
          }
          
          .menu-item {
            margin: 0.4rem 0;
          }
          
          .menu-header {
            margin-bottom: 1.5rem;
            justify-content: space-between;
          }

          .menu-newsletter-form {
            height: 45px;
            padding: 0 15px;
          }
          
          .menu-newsletter-input {
            font-size: 13px;
          }
          
          .menu-newsletter-button {
            width: 60px;
            height: 30px;
            right: 8px;
            font-size: 11px;
            top: 7px;
          }

          .menu-social {
            gap: 1rem;
            justify-content: center;
          }
          
          .menu-social-link {
            width: 40px;
            height: 40px;
          }
        }

        /* Very small mobile screens */
        @media (max-width: 480px) {
          .container {
            padding: 0.8rem 1rem;
          }
          
          .hamburger-container {
            display: flex;
            width: 42px;
            height: 42px;
            margin-right: 0;
          }
          
          .logo-container img {
            width: 140px !important;
            height: 40px !important;
          }

          .menu-newsletter-form {
            height: 42px;
            padding: 0 12px;
          }
          
          .menu-newsletter-button {
            width: 55px;
            height: 28px;
            font-size: 10px;
            right: 7px;
            top: 7px;
          }
        }

        /* Focus states for accessibility */
        .desktop-nav-link:focus,
        .dropdown-category:focus,
        .services-dropdown-link:focus {
          outline: 2px solid #0D98BA;
          outline-offset: 2px;
        }

        /* Prevent body scrolling when menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}
      </style>

      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="container">
          <div className="logo-container">
            <a href="/" aria-label="Homepage">
              <img 
                src="/images/logo.svg" 
                alt="Kinseb Web Development" 
                width={190} 
                height={188} 
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="desktop-nav-links">
              {navigationLinks.map((link) => (
                <li className="desktop-nav-item" key={link.id}>
                  {link.id === 'services' ? (
                    <>
                      <a 
                        href={link.href} 
                        className={`desktop-nav-link ${activeLink === link.id ? 'active' : ''}`}
                        onClick={() => handleLinkClick(link.id)}
                        aria-label={link.label}
                      >
                        {link.label}
                      </a>
                      
                      {/* Desktop Services Dropdown */}
          {/* Desktop Services Dropdown */}
<div className="desktop-services-dropdown">
  <div className="dropdown-content">
    <div className="dropdown-services">
      
      {/* First Row */}
      {/* SEO & Content Marketing */}
      <a href="/services/seo" className="dropdown-category">
        <span className="category-title">SEO & Content Marketing</span>
        <ul className="category-items">
          <li className="category-item">
            <a href="/services/seo" className="desktop-dropdown-link">
              Keyword Research & Strategy
            </a>
          </li>
          <li className="category-item">
            <a href="/services/seo" className="desktop-dropdown-link">
              On-Page & Technical SEO
            </a>
          </li>
          <li className="category-item">
            <a href="/services/seo" className="desktop-dropdown-link">
              Content Strategy Development
            </a>
          </li>
        </ul>
      </a>
      
      {/* Branding & Creative Design */}
      <a href="/services/branding" className="dropdown-category">
        <span className="category-title">Branding & Creative Design</span>
        <ul className="category-items">
          <li className="category-item">
            <a href="/services/branding" className="desktop-dropdown-link">
              Logo & Brand Identity
            </a>
          </li>
          <li className="category-item">
            <a href="/services/branding" className="desktop-dropdown-link">
              Graphic Design for Web & Print
            </a>
          </li>
          <li className="category-item">
            <a href="/services/branding" className="desktop-dropdown-link">
              Marketing Collateral Design
            </a>
          </li>
        </ul>
      </a>
      
      {/* Web Design & Development */}
      <a href="/services/web-development" className="dropdown-category">
        <span className="category-title">Web Design & Development</span>
        <ul className="category-items">
          <li className="category-item">
            <a href="/services/web-development" className="desktop-dropdown-link">
              Custom Website Design
            </a>
          </li>
          <li className="category-item">
            <a href="/services/web-development" className="desktop-dropdown-link">
              E-commerce Store Development
            </a>
          </li>
          <li className="category-item">
            <a href="/services/web-development" className="desktop-dropdown-link">
              UI/UX Design
            </a>
          </li>
        </ul>
      </a>
      
      {/* Second Row */}
      {/* Email & SMS Marketing */}
      <a href="/services/email-marketing" className="dropdown-category">
        <span className="category-title">Email & SMS Marketing</span>
        <ul className="category-items">
          <li className="category-item">
            <a href="/services/email-marketing" className="desktop-dropdown-link">
              Email Campaign Management
            </a>
          </li>
          <li className="category-item">
            <a href="/services/email-marketing" className="desktop-dropdown-link">
              Marketing Automation Setup
            </a>
          </li>
          <li className="category-item">
            <a href="/services/email-marketing" className="desktop-dropdown-link">
              SMS Campaign Design
            </a>
          </li>
        </ul>
      </a>
      
      {/* Paid Search & YouTube Ads */}
      <a href="/services/paid-search" className="dropdown-category">
        <span className="category-title">Paid Search & YouTube Ads</span>
        <ul className="category-items">
          <li className="category-item">
            <a href="/services/paid-search" className="desktop-dropdown-link">
              Google Ads Management
            </a>
          </li>
          <li className="category-item">
            <a href="/services/paid-search" className="desktop-dropdown-link">
              YouTube Video Ad Creation
            </a>
          </li>
          <li className="category-item">
            <a href="/services/paid-search" className="desktop-dropdown-link">
              Performance Analysis & Optimization
            </a>
          </li>
        </ul>
      </a>
      
      {/* Social Media Marketing */}
      <a href="/services/social-media" className="dropdown-category">
        <span className="category-title">Social Media Marketing</span>
        <ul className="category-items">
          <li className="category-item">
            <a href="/services/social-media" className="desktop-dropdown-link">
              Social Media Strategy
            </a>
          </li>
          <li className="category-item">
            <a href="/services/social-media" className="desktop-dropdown-link">
              Content Creation & Scheduling
            </a>
          </li>
          <li className="category-item">
            <a href="/services/social-media" className="desktop-dropdown-link">
              Influencer Marketing
            </a>
          </li>
        </ul>
      </a>
      
    </div>
  </div>
</div>
                    </>
                  ) : (
                    <a 
                      href={link.href} 
                      className={`desktop-nav-link ${activeLink === link.id ? 'active' : ''}`}
                      onClick={() => handleLinkClick(link.id)}
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="button-container">
            <a href="/contact" className="quote-button" aria-label="Request A Quote">
              Request A Quote
            </a>
            
            <div 
              className="hamburger-container"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleMenu();
                }
              }}
            >
              <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Side Menu (Mobile Only) */}
        <div 
          className={`menu-side ${isMenuOpen ? 'open' : ''}`}
          aria-hidden={!isMenuOpen}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div className="menu-header">
            <div className="menu-logo">
              <img 
                src="/images/logo.png" 
                alt="Kinseb Web Development" 
                width={180} 
                height={50}
              />
            </div>
            
            <button 
              className="menu-close" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6L6 16" stroke="#9ACA3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L16 16" stroke="#9ACA3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="menu-content">
            <ul className="menu-links">
              {navigationLinks.map((link) => (
                <li className="menu-item" key={link.id}>
                  {link.id === 'services' ? (
                    <>
                      <div className={`menu-link menu-link-with-dropdown ${activeLink === link.id ? 'active' : ''}`}>
                        <a 
                          href={link.href} 
                          className="menu-link-text"
                          onClick={() => handleLinkClick(link.id)}
                          aria-label={link.label}
                        >
                          <span className="menu-link-icon">
                            {link.icon && (
                              <img 
                                src={link.icon} 
                                alt={`${link.label} icon`} 
                                width={20} 
                                height={20} 
                              />
                            )}
                          </span>
                          {link.label}
                        </a>
                        
                        <span 
                          className={`plus-icon ${openDropdown === 'services' ? 'open' : ''}`}
                          onClick={() => toggleDropdown('services')}
                          aria-expanded={openDropdown === 'services'}
                          aria-label={openDropdown === 'services' ? "Close Services Dropdown" : "Open Services Dropdown"}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              toggleDropdown('services');
                            }
                          }}
                        ></span>
                      </div>
                      
                      {/* Services Dropdown */}
                      <div className={`services-dropdown ${openDropdown === 'services' ? 'open' : ''}`}>
                        {link.dropdownItems?.map((item, index) => (
                          <div className="services-dropdown-item" key={index}>
                            <a 
                              href={item.href} 
                              className="services-dropdown-link"
                              onClick={() => handleLinkClick(link.id)}
                            >
                              {item.label}
                            </a>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a 
                      href={link.href} 
                      className={`menu-link ${activeLink === link.id ? 'active' : ''}`}
                      onClick={() => handleLinkClick(link.id)}
                      aria-label={link.label}
                    >
                      <span className="menu-link-icon">
                        {link.icon && (
                          <img 
                            src={link.icon} 
                            alt={`${link.label} icon`} 
                            width={20} 
                            height={20} 
                          />
                        )}
                      </span>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="menu-divider" aria-hidden="true"></div>

            <div className="menu-newsletter">
              <span className="menu-newsletter-title">Get updates</span>
              
              <form 
                className="menu-newsletter-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Newsletter subscription");
                }}
              >
                <input 
                  type="email" 
                  className="menu-newsletter-input" 
                  placeholder="Enter your email" 
                  aria-label="Email address for newsletter"
                  required
                />
                <button 
                  type="submit" 
                  className="menu-newsletter-button"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="menu-newsletter-text">
                By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.
              </p>
            </div>

            <div className="menu-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="menu-social-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <img 
                    src={social.icon} 
                    alt={social.label} 
                    width={16} 
                    height={16} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div 
          className={`overlay ${isMenuOpen ? 'show' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      </nav>
    </>
  );
};

export default Navbar;