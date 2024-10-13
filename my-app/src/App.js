import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Components
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";

// Landing Page Sections
import HeroSection from "./components/LandingPage/HeroSection";
import PromoSection from "./components/LandingPage/PromoSection";
import ServiceSection from "./components/LandingPage/ServiceSection";
import PortfolioSection from "./components/LandingPage/PortfolioSection";

// About Us Sections
import Asection01 from "./components/AboutUs/Asection01";
import Asection02 from "./components/AboutUs/Asection02";
import Asection03 from "./components/AboutUs/Asection03";
import Asection04 from "./components/AboutUs/Asection04";
import Asection05 from "./components/AboutUs/Asection05";

// Contact Sections
import ContactFormSection from "./components/Contact/ContactFormSection";
import ContactInfoSection from "./components/Contact/ContactInfoSection";
import ContactSection from "./components/Contact/ContactSection";
import SubscribeSection from "./components/Contact/SubscribeSection";

// Service Sections
import DomainSearchSection from "./components/Service/DomainSearchSection";
import ServiceInfoSection from "./components/Service/ServiceInfoSection";
import ToolsSection from "./components/Service/ToolsSection";

// Our Product Sections
import Osection01 from "./components/OurProduct/ourProduct";

// import AvailableProduct from "./components/OurProduct/AvailableProdut";
// import UpComingProduct from "./components/OurProduct/UpComingProduct";

// Video Background Component
import VideoBackground from "./components/VideoBackground/VideoBackground";


import BlogHero from "./components/Blog/BlogHero";

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

function ServicePage() {
  return (
    <>
      <ServiceInfoSection />
      <ToolsSection />
      <DomainSearchSection />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <ContactSection />
      <ContactInfoSection />
      <ContactFormSection />
      <SubscribeSection />
    </>
  );
}

function OurProductPage() {
  return (
    <>
      <Osection01 />
      {/* <AvailableProduct />
      <UpComingProduct /> */}
    </>
  );
}

function BlogPage() {
  return (
    <>
      <BlogHero />

    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Video Background */}
        <VideoBackground />

        {/* Header */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/OurProduct" element={<OurProductPage />} /> */}
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
