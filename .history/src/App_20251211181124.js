import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import CaseStudyPage from './Pages/CaseStudyPage';
import ServicePage from './Pages/ServicePage';
import AboutPage from './Pages/AboutPage';
const App = () => {
  return (
    <Router>


        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
                <Route path="/contact-us" element={<ContactPage />} />
                         <Route path="/case-study" element={<CaseStudyPage />} />
                            <Route path="/services" element={<ServicePage />} />
  <Route path="/about-us" element={<AboutPage />} />
         
        </Routes>
        <Footer />
    
    </Router>
  );
};

export default App;