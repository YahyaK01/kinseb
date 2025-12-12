import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
const App = () => {
  return (
    <Router>


        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
          {/* About Route */}
         
        </Routes>
        <Footer />
    
    </Router>
  );
};

export default App;