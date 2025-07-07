import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xanjvgpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section id='contact'>
    <div className='h-[900px] bg-white md:mt-[-190px] md:h-[750px] max-w-screen py-[300px] mt-[-130px] md:py-0 mb-[80px]'>
    <div className="max-w-lg mx-auto p-6 bg-gray-400 h-[750px] rounded-lg shadow-md mt-[600px] md:mt-0 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-500">Contact Us</h2>
      <p className='text-center pb-4 text-slate-700 mb-2'>Contact Syntax Synergy to discuss our application process.</p>
      <p className='pb-2 font-bold text-slate-700'>Email </p>
      <p className='pb-4 font-semibold text-gray-600'>syntaxsynergy22@gmail.com</p>
      <p className='pb-2 font-bold text-slate-700'>Phone</p>
      <p className='pb-8 font-semibold text-gray-600'>+234-705-731-9536</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`mt-1 w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300"
          >
            Send Message
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-white text-center mt-4">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
    </div>
    </section>
  );
};

export default ContactForm;