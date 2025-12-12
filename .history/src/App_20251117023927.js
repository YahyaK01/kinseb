import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <Router>


        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Route */}
         
        </Routes>
        <Footer />
    
    </Router>
  );
};

export default App;