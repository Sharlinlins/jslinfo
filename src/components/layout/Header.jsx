import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { COMPANY_CONFIG } from '../../config/companyConfig';

const Header = ({ scrollToSection, activeSection, isServicePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: "Home", id: "home", path: "/" },
    { name: "About", id: "about", path: "/#about" },
    { name: "Solutions", id: "solutions", path: "/#solutions" },
    { name: "Contact", id: "contact", path: "/#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: item.id } });
    } else {
      scrollToSection(item.id);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}></div>
      
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
              N
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {COMPANY_CONFIG.logoText}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative transition duration-300 font-medium ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } hover:text-indigo-600 group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full ${
                  !isServicePage && activeSection === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick({ id: 'contact' })}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 py-4 px-5 shadow-xl animate-fade-in-up">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left py-3 text-gray-700 hover:text-indigo-600 transition font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick({ id: 'contact' })}
              className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Get Started
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;