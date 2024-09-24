import logo from './logo.svg';
import './App.css';
import Header from './components/Page_1/Header';
import HeroSection from './components/Page_1/HeroSection';
import PromoSection from './components/Page_1/PromoSection';
import ServiceSection from './components/Page_1/ServiceSection';
import PortfolioSection from './components/Page_1/PortfolioSection';
import Footer from './components/Page_1/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroSection />
     <PromoSection />
     <ServiceSection/>
     <PortfolioSection/>
     <Footer/>
    </div>
  );
}

export default App;
