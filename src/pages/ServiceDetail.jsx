import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { COMPANY_CONFIG } from '../config/companyConfig';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const service = COMPANY_CONFIG.services.find(s => s.id === serviceId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, [serviceId]);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <Link to="/" className="btn-primary inline-block">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={service.image} 
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover transform scale-105"
          style={{ transform: `scale(${isVisible ? 1 : 1.1})`, transition: 'transform 1s ease' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
        
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-16 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
            <div className="text-8xl mb-4 animate-bounce">{service.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{service.name}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{service.shortDesc}</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Service</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div>
            
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Benefits */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Service?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl">✨</div>
                    <span className="font-medium text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Need this service?</h4>
                <button 
                  onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                  className="w-full btn-primary text-center"
                >
                  Request a Quote
                </button>
              </div>
            </div>
            
            {/* Other Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Explore More</h3>
              <div className="space-y-3">
                {COMPANY_CONFIG.services
                  .filter(s => s.id !== service.id)
                  .slice(0, 3)
                  .map((otherService) => (
                    <Link
                      key={otherService.id}
                      to={`/service/${otherService.id}`}
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition group"
                    >
                      <div className="text-2xl">{otherService.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 group-hover:text-indigo-600 transition">
                          {otherService.name}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-1">{otherService.shortDesc}</p>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;