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
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              <span className="text-indigo-600 text-sm font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technology Partner</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {COMPANY_CONFIG.aboutText}
            </p>
            
            {/* Why Choose Us Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                {COMPANY_CONFIG.whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 inline-flex items-center space-x-2">
              <span>Learn More About Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          {/* Right Column - Mission & Vision */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">👁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">To be the world's most trusted technology partner, delivering excellence in every solution we provide.</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-sm text-gray-600">Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-sm text-gray-600">Integrity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-sm text-gray-600">Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-sm text-gray-600">Customer First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;