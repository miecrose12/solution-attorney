'use client';

import React from 'react';
import { ServiceItem } from '@/types';

interface ServicesProps {
  items: ServiceItem[];
}

export const Services: React.FC<ServicesProps> = ({ items }) => {
  return (
    <section id="services-section" className="services py-20 bg-white">
      <div className="container px-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {items.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-primary border-opacity-10 rounded-lg bg-white opacity-0 animate-fade-in-up relative overflow-hidden transition-all duration-500 hover:border-accent-gold hover:shadow-xl hover:-translate-y-2 group"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent-gold transition-all duration-500 group-hover:h-full"></div>

              <span className="material-symbols-outlined text-4xl text-primary mb-4 block transition-all duration-300 group-hover:text-accent-gold group-hover:-translate-y-1">
                {service.icon}
              </span>
              <h3 className="font-serif text-2xl font-black text-primary mb-3 leading-tight transition-all duration-300 group-hover:text-accent-gold">
                {service.title}
              </h3>
              <p className="text-primary text-opacity-70 font-light leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-primary text-opacity-60 text-sm pl-6 relative">
                    <span className="absolute left-0 text-accent-gold font-black">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};