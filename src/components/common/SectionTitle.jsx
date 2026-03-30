import React from 'react';

const SectionTitle = ({ title, subtitle, highlight }) => {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        {title}{' '}
        {highlight && <span className="text-blue-600">{highlight}</span>}
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto mt-5">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;