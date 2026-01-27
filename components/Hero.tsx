'use client';

import React from 'react';

interface HeroProps {
  type: 'home' | 'about' | 'services' | 'process' | 'insights';
  badge: string;
  title: React.ReactNode;
  description: string;
  showButton?: boolean;
  buttonText?: string;
}

export const Hero: React.FC<HeroProps> = ({
  type,
  badge,
  title,
  description,
  showButton = false,
  buttonText = 'Begin Consultancy',
}) => {
  const bgGradients: Record<string, string> = {
    home: 'from-primary-dark to-primary',
    about: 'from-gray-100 to-white',
    services: 'from-primary to-primary',
    process: 'from-primary-dark to-primary',
    insights: 'from-primary to-primary-dark',
  };

  const textColors: Record<string, string> = {
    home: 'text-white',
    about: 'text-primary',
    services: 'text-white',
    process: 'text-white',
    insights: 'text-white',
  };

  const descriptionColors: Record<string, string> = {
    home: 'text-white text-opacity-80',
    about: 'text-primary text-opacity-80',
    services: 'text-white text-opacity-85',
    process: 'text-white text-opacity-85',
    insights: 'text-white text-opacity-85',
  };

  return (
    <section
      className={`relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br ${bgGradients[type]}`}
    >
      {/* Background Image (Home only) */}
      {type === 'home' && (
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5BKeaFgDmHYfU3rvGEN9x52uagSLuq2q3QkSqGUYBEqeDWn_IGh3ecut3LbPe6u-oSys1n51ujAnkomJswl44jq3IOQchzwETegHj77rR1eOEIot_khQHGMuPbFjkeozjomLCAEzxl8_SjXJNZ1G-lJ3Ji93XJRCYbfDbIyWkV6Hb6CD6KZjvs1Ku5PhVg7Z-Cija2FiG9ZP3wGZyemRiKQDzKjhqOkHB2sN89nR2wfn2wgbAP0xZ3CK47xcinfDat7rx7e3J_0E"
            alt="Hero Background"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-20 mix-blend-multiply"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white bg-opacity-5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        </div>
      )}

      {/* Content - Positioned on top of background with proper z-index */}
      <div className="container relative z-20 px-lg">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block text-xs font-black tracking-widest uppercase mb-6 text-accent-gold opacity-0 animate-fade-in-up [animation-delay:0.3s]">
            {badge}
          </span>

          {/* Title */}
          <h1 className={`font-serif text-5xl lg:text-7xl font-black italic mb-8 leading-tight opacity-0 animate-fade-in-up [animation-delay:0.4s] ${textColors[type]}`}>
            {title}
          </h1>

          {/* Description */}
          <p
            className={`text-lg font-light leading-relaxed border-l-4 border-accent-gold pl-lg mb-8 max-w-2xl opacity-0 animate-fade-in-up [animation-delay:0.5s] ${descriptionColors[type]}`}
          >
            {description}
          </p>

          {/* Button */}
          {showButton && (
            <button className="px-16 py-4 border border-white border-opacity-30 bg-transparent text-white text-xs tracking-widest uppercase font-black cursor-pointer overflow-hidden transition-all duration-300 opacity-0 animate-fade-in-up [animation-delay:0.9s] hover:border-accent-gold hover:bg-accent-gold hover:bg-opacity-10 rounded">
              <span>{buttonText}</span>
            </button>
          )}
        </div>
      </div>

      {/* Scroll Indicator (Home only) */}
      {type === 'home' && (
        <div className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-3 z-30 opacity-0 animate-fade-in-up [animation-delay:1s]">
          <span className="text-white text-opacity-30 text-xs uppercase tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Scroll to Explore
          </span>
          <div className="relative h-16 w-0.5 bg-white bg-opacity-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold animate-scroll-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};