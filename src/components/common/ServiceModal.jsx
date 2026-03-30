import React from 'react';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in-up"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <div className="text-5xl">{service.icon}</div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <h3 className="text-2xl font-bold mt-3 text-gray-800">{service.name}</h3>
        <p className="text-gray-600 mt-3 leading-relaxed">{service.description}</p>
        <button 
          onClick={onClose} 
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full w-full font-medium transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;