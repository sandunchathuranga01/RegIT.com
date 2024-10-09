import React from "react";
import "./App.css";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";

import HeroSection from "./components/LandingPage/HeroSection";
import PromoSection from "./components/LandingPage/PromoSection";
import ServiceSection from "./components/LandingPage/ServiceSection";
import PortfolioSection from "./components/LandingPage/PortfolioSection";

import Asection01 from "./components/AboutUs/Asection01";
import Asection02 from "./components/AboutUs/Asection02";
import Asection03 from "./components/AboutUs/Asection03";
import Asection04 from "./components/AboutUs/Asection04";
import Asection05 from "./components/AboutUs/Asection05";

import ContactFormSection from "./components/Contact/ContactFormSection";
import ContactInfoSection from "./components/Contact/ContactInfoSection";
import ContactSection from "./components/Contact/ContactSection";
import SubscribeSection from "./components/Contact/SubscribeSection";

import DomainSearchSection from "./components/Service/DomainSearchSection";
import ServiceInfoSection from "./components/Service/ServiceInfoSection";
import ToolsSection from "./components/Service/ToolsSection";

import Osection01 from "./components/OurProduct/ourProduct";
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

//Our service Component
function Service() {
  return (
    <>
    <ServiceInfoSection />
    <ToolsSection />
    <DomainSearchSection />
      
    </>
  );
}

//Our contact Component
function Contact() {
  return (
    <>
      <ContactSection />
      <ContactFormSection />
      <ContactInfoSection />
      <SubscribeSection />
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

          {/* Route for the Our service */}
          <Route path="/services" element={<Service />} />

          {/* Route for the Our contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Route for the Our product */}
          <Route path="/OurProduct" element={<OurProduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
