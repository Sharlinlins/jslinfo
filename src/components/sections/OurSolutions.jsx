import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPANY_CONFIG } from '../../config/companyConfig';

const OurSolutions = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span className="text-indigo-600 text-sm font-semibold">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive{' '}
            <span className="animated-text">IT Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored technology solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {COMPANY_CONFIG.services.map((service, idx) => (
            <div
              key={idx}
              className="group card-modern p-8 cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="icon-container w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300">
                <span className="transition-all duration-300">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.shortDesc}
              </p>
              <div className="mt-6 flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;