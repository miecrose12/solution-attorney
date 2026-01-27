'use client';

import React from 'react';

interface ManifestoProps {
  quote: string;
  highlight: string;
  attribution: string;
}

export const Manifesto: React.FC<ManifestoProps> = ({
  quote,
  highlight,
  attribution,
}) => {
  const parts = quote.split(highlight);

  return (
    <section className="relative py-20 bg-primary-dark overflow-hidden">
      {/* Accent lines */}
      <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent pointer-events-none" style={{ top: '50%' }}></div>
      <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent pointer-events-none" style={{ top: '33.33%' }}></div>

      <div className="container px-lg">
        <div className="text-center relative z-10">
          <h2 className="font-serif text-4xl lg:text-5xl font-black text-white mb-8 leading-relaxed italic opacity-0 animate-fade-in-up [animation-delay:0.2s]">
            {parts[0]}
            <span className="text-accent-gold">{highlight}</span>
            {parts[1]}
          </h2>
          <div className="w-20 h-px bg-accent-gold mx-auto mb-8 opacity-0 animate-expand-width [animation-delay:0.4s]"></div>
          <p className="text-white text-opacity-40 font-light text-sm uppercase tracking-widest opacity-0 animate-fade-in-up [animation-delay:0.6s]">
            {attribution}
          </p>
        </div>
      </div>
    </section>
  );
};