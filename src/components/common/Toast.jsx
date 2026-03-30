import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? '✅' : '⚠️';

  return (
    <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 ${bgColor} text-white px-6 py-3 rounded-full shadow-lg animate-slide-in`}>
      {icon} {message}
    </div>
  );
};

export default Toast;