import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { COMPANY_CONFIG } from '../../config/companyConfig';

const Hero = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    createParticles();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleExploreClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'solutions' } });
    } else {
      scrollToSection('solutions');
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'contact' } });
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }}></canvas>
      
      {/* Floating Blur Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 text-center">
        <div className="animate-fade-in-up">
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {COMPANY_CONFIG.heroTitle}{' '}
            <span className="animated-text">{COMPANY_CONFIG.heroHighlight}</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {COMPANY_CONFIG.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={handleExploreClick}
              className="btn-primary group flex items-center justify-center space-x-2"
            >
              <span>Explore Solutions</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={handleContactClick}
              className="btn-outline"
            >
              Schedule Consultation
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {COMPANY_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className="stat-card p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;