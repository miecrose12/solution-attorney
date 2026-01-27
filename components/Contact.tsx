'use client';

import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      practiceArea: '',
      message: '',
    });
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Contact Info */}
      <div className="flex-1 bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden mt-24">
        {/* Decorative circles - Hidden on mobile for cleaner look */}
        <div className="absolute -top-32 right-0 w-64 h-64 md:w-96 md:h-96 border border-accent-gold border-opacity-10 rounded-full translate-x-1/2"></div>
        <div className="absolute -bottom-32 left-0 w-64 h-64 md:w-96 md:h-96 border border-accent-gold border-opacity-10 rounded-full -translate-x-1/2"></div>

        <div className="w-full max-w-md relative z-10">
          {/* Tag */}
          <span className="inline-block text-xs font-black tracking-widest uppercase mb-4 md:mb-6 text-accent-gold opacity-0 animate-fade-in-up [animation-delay:0.3s]">
            Get in Touch
          </span>
          
          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white italic mb-6 md:mb-8 opacity-0 animate-fade-in-up [animation-delay:0.4s]">
            Secure Your <br /> <span className="text-accent-gold">Solutions</span>
          </h1>
          
          {/* Description */}
          <p className="text-white text-opacity-75 text-base md:text-lg mb-8 md:mb-12 font-light opacity-0 animate-fade-in-up [animation-delay:0.5s]">
            We provide premium legal counsel at the intersection of innovation and integrity. Our team is ready to redefine your legal experience.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-6 md:space-y-8">
            {[
              {
                icon: 'alternate_email',
                label: 'E-Mail',
                value: 'olowo_tayo@nigerianbar.ng',
              },
              { 
                icon: 'ring_volume', 
                label: 'Phone Number', 
                value: '+2348089524049' 
              },
              { 
                icon: 'near_me', 
                label: 'Global HQ', 
                value: 'no,76b Adeniyi jones avenue, ikeja, lagos state, nigeria' 
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-accent-gold border-opacity-30 rounded-full flex items-center justify-center text-accent-gold flex-shrink-0 transition-all duration-300 hover:bg-accent-gold hover:text-primary hover:border-accent-gold">
                  <span className="material-symbols-outlined text-lg md:text-xl">{item.icon}</span>
                </div>
                
                {/* Contact Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-opacity-60 text-xs font-black tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-base md:text-lg font-normal break-words">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-white">
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          className="w-full max-w-lg opacity-0 animate-fade-in-up [animation-delay:0.6s]"
        >
          {/* Form Header */}
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-primary mb-2 italic">
            Begin the Process
          </h2>
          <p className="text-primary text-opacity-60 mb-6 md:mb-8 text-sm md:text-base">
            Provide your details for a tailored legal assessment.
          </p>

          <div className="space-y-6 md:space-y-8">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full py-2 px-0 border-b-2 border-gray-300 bg-transparent text-primary transition-all duration-300 focus:outline-none focus:border-accent-gold font-sans"
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute text-gray-400 text-sm transition-all duration-300 pointer-events-none left-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:top-[-1.25rem] peer-focus:text-xs peer-focus:text-accent-gold top-[-1.25rem] text-xs"
                >
                  Full Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full py-2 px-0 border-b-2 border-gray-300 bg-transparent text-primary transition-all duration-300 focus:outline-none focus:border-accent-gold font-sans"
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute text-gray-400 text-sm transition-all duration-300 pointer-events-none left-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:top-[-1.25rem] peer-focus:text-xs peer-focus:text-accent-gold top-[-1.25rem] text-xs"
                >
                  Email Address
                </label>
              </div>
            </div>

            {/* Phone & Practice Area Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* Phone Input */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full py-2 px-0 border-b-2 border-gray-300 bg-transparent text-primary transition-all duration-300 focus:outline-none focus:border-accent-gold font-sans"
                />
                <label 
                  htmlFor="phone" 
                  className="absolute text-gray-400 text-sm transition-all duration-300 pointer-events-none left-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:top-[-1.25rem] peer-focus:text-xs peer-focus:text-accent-gold top-[-1.25rem] text-xs"
                >
                  Phone Number
                </label>
              </div>

              {/* Practice Area Dropdown */}
              <div className="relative">
                <select
                  id="practiceArea"
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleChange}
                  className={`peer w-full py-2 px-0 pr-6 border-b-2 border-gray-300 bg-transparent transition-all duration-300 focus:outline-none focus:border-accent-gold font-sans appearance-none ${
                    formData.practiceArea ? 'text-primary' : 'text-gray-400'
                  }`}
                  required
                >
                  <option value="" disabled hidden>Select Practice Area</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Intellectual Property">Intellectual Property</option>
                  <option value="Dispute Resolution">Dispute Resolution</option>
                  <option value="Taxation">Taxation</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-2 pointer-events-none text-gray-400 text-lg">
                  expand_more
                </span>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows={5}
                className="peer w-full py-2 px-0 border-b-2 border-gray-300 bg-transparent text-primary transition-all duration-300 focus:outline-none focus:border-accent-gold font-sans resize-none"
                required
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute text-gray-400 text-sm transition-all duration-300 pointer-events-none left-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:top-[-1.25rem] peer-focus:text-xs peer-focus:text-accent-gold top-[-1.25rem] text-xs"
              >
                Brief Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 md:gap-3 bg-primary text-white py-3 md:py-4 px-6 rounded-lg font-black text-xs uppercase tracking-widest transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-xl mt-6 md:mt-8 cursor-pointer border-none"
            >
              <span>Transmit Inquiry</span>
              <span className="material-symbols-outlined text-base md:text-lg">arrow_forward</span>
            </button>

            {/* Privacy Notice */}
            <p className="text-center text-xs uppercase tracking-widest text-primary text-opacity-50 mt-4">
              Encrypted transmission — Privacy Assured
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};