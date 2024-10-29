// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/ContactComponent/Contact';
import Home from './Components/HomeComponent/Home';
import TopHeader from './Pages/Navbar/TopHeader';
import Hero from './Components/HomeComponent/Hero';
import Navbar from './Pages/Navbar/Navbar';
import Innovation from './Components/HomeComponent/Innovation';
import MainProducts from './Components/HomeComponent/MainProducts';
import Footer from './Pages/Footer/Footer';
import About from './Components/AboutComponent/About';
import OurProducts from './Components/ProductComponent/OurProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Turnover from './Components/HomeComponent/Turnover';
import PrivacyPolicy from './Pages/Footer/PrivacyPolicy';
import TermsAndConditions from './Pages/Footer/TermsAndConditions';
import ScrollToTop from '../src/Components/ScrollToTop'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <TopHeader />
      <Navbar />
      <ScrollToTop /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Hero' element={<Hero />} />
        <Route path='/Innovation' element={<Innovation />} />
        <Route path='/MainProducts' element={<MainProducts />} />
        <Route path='/About' element={<About />} />
        <Route path='/OurProducts' element={<OurProducts />} />
        <Route path='/Turnover' element={<Turnover />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
