import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../../config/companyConfig';
import { sendContactEmail } from '../../services/emailService';
import Toast from '../common/Toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setToast({ message: 'Please enter your name', type: 'error' });
      return false;
    }
    if (!formData.email.trim()) {
      setToast({ message: 'Please enter your email', type: 'error' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setToast({ message: 'Please enter a valid email address', type: 'error' });
      return false;
    }
    if (!formData.message.trim()) {
      setToast({ message: 'Please enter your message', type: 'error' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setLoading(true);

    try {
      const response = await sendContactEmail(formData);
      
      if (response.demo) {
        setToast({
          message: `📧 Message would be sent to ${COMPANY_CONFIG.contactEmail}! Check console for details.`,
          type: 'success'
        });
      } else {
        setToast({
          message: `✨ Message sent successfully to ${COMPANY_CONFIG.contactEmail}! We'll get back to you soon.`,
          type: 'success'
        });
      }
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => setToast(null), 6000);
    } catch (error) {
      console.error('Send error:', error);
      setToast({
        message: error.message || "Unable to send message. Please try again or contact us directly.",
        type: 'error'
      });
      setTimeout(() => setToast(null), 6000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span className="text-indigo-600 text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Work Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us for a free consultation
          </p>
        </div>

        {toast && (
          <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Talk Business</h3>
              <p className="text-indigo-100 mb-6">
                Have a project in mind? We'd love to hear about it. Our team is ready to help you succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span>📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">Call Us</p>
                    <p className="font-semibold">{COMPANY_CONFIG.contactPhone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span>✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">Email Us</p>
                    <p className="font-semibold">{COMPANY_CONFIG.contactEmail}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span>📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">Visit Us</p>
                    <p className="font-semibold">{COMPANY_CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Why Choose Us?</h4>
              <div className="space-y-3">
                {COMPANY_CONFIG.whyChooseUs.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                >
                  <option value="">Select a service</option>
                  {COMPANY_CONFIG.services.map((svc, idx) => (
                    <option key={idx} value={svc.name}>{svc.name}</option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project *"
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;