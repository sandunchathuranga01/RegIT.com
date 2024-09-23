import logo from './logo.svg';
import './App.css';
import Header from './components/Page_1/Header';
import HeroSection from './components/Page_1/HeroSection';
import PromoSection from './components/Page_1/PromoSection';
import ServiceSection from './components/Page_1/ServiceSection';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroSection />
     <PromoSection />
     <ServiceSection/>
    </div>
  );
}

export default App;
