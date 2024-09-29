import React from "react";
import "./App.css";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";

import HeroSection from "./components/Page_1/HeroSection";
import PromoSection from "./components/Page_1/PromoSection";
import ServiceSection from "./components/Page_1/ServiceSection";
import PortfolioSection from "./components/Page_1/PortfolioSection";

import Asection01 from "./components/About_US/Asection01";
import Asection02 from "./components/About_US/Asection02";
import Asection03 from "./components/About_US/Asection03";
import Asection04 from "./components/About_US/Asection04";
import Asection05 from "./components/About_US/Asection05";

import Osection01 from "./components/OurProduct/Osection01";
import AvailableProdut from "./components/OurProduct/AvailableProdut";
import UpComingProduct from "./components/OurProduct/UpComingProduct";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <Asection01 />
      <Asection02 />
      <Asection03 />
      <Asection04 />
      <Asection05 />
    </>
  );
}

//Our product Component
function OurProduct() {
  return (
    <>
      <Osection01 />
      <AvailableProdut />
      <UpComingProduct />
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

          {/* Route for the Our product */}
          <Route path="/OurProduct" element={<OurProduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
