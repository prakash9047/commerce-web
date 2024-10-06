// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import SignIn from "./components/signin";
 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className='max-w-7xl mx-auto pt-20 px-6'>
            <HeroSection /> {/* Renamed to PascalCase */}
            <FeatureSection /> 
            <Workflow />
            <Pricing /> 
            <Testimonials />
            <Footer />
          </div>
        } />
        <Route path="/signin" element={<SignIn />} /> {/* Route for SignIn */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
