import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { COMPANY_CONFIG } from '../../config/companyConfig';

const Footer = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Solutions", id: "solutions" },
    { name: "Contact Us", id: "contact" }
  ];

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  const solutionsSpotlight = [
    "Web & Mobile Apps",
    "Security & CCTV",
    "Smart Panels & LED Walls",
    "Networking & Telecom",
    "Computer Sales & Service"
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-bold text-xl text-white">{COMPANY_CONFIG.logoText}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering excellence in IT services worldwide. Your trusted partner for digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Spotlight */}
          <div>
            <h4 className="text-white font-semibold mb-3">Solutions Spotlight</h4>
            <ul className="space-y-2 text-sm">
              {solutionsSpotlight.map((solution, idx) => (
                <li key={idx} className="text-gray-400">{solution}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <p className="text-sm text-gray-400">{COMPANY_CONFIG.contactPhone}</p>
            <p className="text-sm text-gray-400 mt-1">{COMPANY_CONFIG.contactEmail}</p>
            <p className="text-sm text-gray-400 mt-1">{COMPANY_CONFIG.address}</p>
            <div className="flex space-x-4 mt-4">
              <a href={COMPANY_CONFIG.social.facebook} className="text-gray-400 hover:text-blue-400 transition-colors text-xl" target="_blank" rel="noopener noreferrer">
                📘
              </a>
              <a href={COMPANY_CONFIG.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors text-xl" target="_blank" rel="noopener noreferrer">
                🐦
              </a>
              <a href={COMPANY_CONFIG.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors text-xl" target="_blank" rel="noopener noreferrer">
                🔗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; {currentYear} {COMPANY_CONFIG.name}. All IT solutions under one roof. | Messages sent to {COMPANY_CONFIG.contactEmail}
        </div>
      </div>
    </footer>
  );
};

export default Footer;