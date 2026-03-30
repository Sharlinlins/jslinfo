import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace with your actual credentials
// Get these from: https://www.emailjs.com/
const EMAILJS_CONFIG = {
  // Public Key from Account → API Keys
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE",
  // Service ID from Email Services
  SERVICE_ID: "YOUR_SERVICE_ID_HERE", 
  // Template ID from Email Templates
  TEMPLATE_ID: "YOUR_TEMPLATE_ID_HERE"
};

// Check if EmailJS is properly configured
const isConfigured = () => {
  const config = EMAILJS_CONFIG;
  return config.PUBLIC_KEY && 
         config.PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE" &&
         config.SERVICE_ID && 
         config.SERVICE_ID !== "YOUR_SERVICE_ID_HERE" &&
         config.TEMPLATE_ID && 
         config.TEMPLATE_ID !== "YOUR_TEMPLATE_ID_HERE";
};

// Initialize EmailJS only if configured
if (isConfigured()) {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  console.log('✅ EmailJS initialized successfully');
} else {
  console.warn('⚠️ EmailJS not configured. Using demo mode. To enable real emails:');
  console.warn('1. Go to https://www.emailjs.com/ and sign up');
  console.warn('2. Create an Email Service and get SERVICE_ID');
  console.warn('3. Create an Email Template and get TEMPLATE_ID');
  console.warn('4. Get your Public Key from Account → API Keys');
  console.warn('5. Update the EMAILJS_CONFIG values in src/services/emailService.js');
}

export const sendContactEmail = async (formData) => {
  // Prepare template parameters
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || "Not provided",
    message: formData.message,
    service_type: formData.service || "General Inquiry",
    // Important: Add recipient email
    to_email: "jslinfotechs@gmail.com",
    reply_to: formData.email
  };

  // Demo mode if not configured
  if (!isConfigured()) {
    console.log('📧 Email would be sent with these details:', templateParams);
    console.log(`📧 To: jslinfotechs@gmail.com`);
    console.log(`📧 From: ${formData.name} <${formData.email}>`);
    console.log(`📧 Message: ${formData.message.substring(0, 100)}...`);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          status: 200, 
          text: 'Demo mode - Email would be sent in production',
          demo: true 
        });
      }, 800);
    });
  }

  // Real EmailJS implementation
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );
    console.log('✅ Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('❌ EmailJS error details:', error);
    
    // Provide user-friendly error message
    let errorMessage = 'Unable to send message. ';
    if (error.text === 'The recipients address is empty') {
      errorMessage += 'Please ensure your EmailJS template includes a "to_email" field.';
    } else if (error.text) {
      errorMessage += error.text;
    } else {
      errorMessage += 'Please check your EmailJS configuration.';
    }
    
    throw new Error(errorMessage);
  }
};