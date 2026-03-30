import React from 'react';
import { COMPANY_CONFIG } from '../../config/companyConfig';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              <span className="text-indigo-600 text-sm font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted{' '}
              <span className="animated-text">Technology Partner</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {COMPANY_CONFIG.aboutText}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {COMPANY_CONFIG.whyChooseUs.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary inline-flex items-center space-x-2">
              <span>Learn More About Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <div className="gradient-border p-1 rounded-2xl">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {COMPANY_CONFIG.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-4 rounded-xl hover:bg-gray-50 transition">
                      <div className="text-4xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full filter blur-2xl opacity-20 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;