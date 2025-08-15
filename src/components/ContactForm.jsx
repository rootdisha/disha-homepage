
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send to your backend or service
    // For now, we'll simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          budget: '',
          timeline: ''
        });
      }, 3000);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className=" bg-green-900/30 border border-green-500 p-8 rounded-lg text-center">
        <div className="text-green-400 text-2xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
        <p className="text-gray-300">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="animate-on-scroll space-y-6">
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg 
                     text-white placeholder-gray-400 focus:border-primary focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg 
                     text-white placeholder-gray-400 focus:border-primary focus:outline-none"
        />
      </div>

      {/* Company */}
      <div>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg 
                     text-white placeholder-gray-400 focus:border-primary focus:outline-none"
        />
      </div>



      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="Tell us about your project *"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg 
                     text-white placeholder-gray-400 focus:border-primary focus:outline-none resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-red-700 text-white px-8 py-4 
                   text-lg font-bold transition-all duration-300 rounded-lg
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Privacy Note */}
      <p className="text-sm text-gray-400 text-center">
        Your information is safe with us and will never be shared.
      </p>
    </form>
  );
};

export default ContactForm;
