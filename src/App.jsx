import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import OurSolutions from './components/sections/OurSolutions';
import ContactUs from './components/sections/ContactUs';
import ServiceDetail from './pages/ServiceDetail';
import { useScrollSpy } from './hooks/useScrollSpy';

// Scroll Progress Component
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setProgress(currentProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-200"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sectionIds = ['home', 'about', 'solutions', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 80);

  const navigateToHomeSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 70;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        const sectionId = location.state.scrollTo;
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
        navigate('/', { replace: true, state: {} });
      }, 100);
    }
  }, [location, navigate]);

  const isServicePage = location.pathname.startsWith('/service/');

  return (
    <>
      <ScrollProgress />
      <Layout 
        scrollToSection={navigateToHomeSection} 
        activeSection={activeSection}
        isServicePage={isServicePage}
      >
        <Routes>
          <Route path="/" element={
            <>
              <Hero scrollToSection={navigateToHomeSection} />
              <AboutUs />
              <OurSolutions />
              <ContactUs />
            </>
          } />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  );
}
export default App;