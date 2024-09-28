import React from 'react';
import './App.css';
import Header from './components/HeaderFooter/Header';
import HeroSection from './components/Page_1/HeroSection';
import PromoSection from './components/Page_1/PromoSection';
import ServiceSection from './components/Page_1/ServiceSection';
import PortfolioSection from './components/Page_1/PortfolioSection';
import Footer from './components/HeaderFooter/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <HeroSection />
      <PromoSection />
      <ServiceSection />
      <PortfolioSection />
    </>
  );
}

// AboutPage Component
function AboutPage() {
  return (
    <>
      
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for the About page */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;