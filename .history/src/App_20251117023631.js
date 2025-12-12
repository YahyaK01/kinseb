import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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