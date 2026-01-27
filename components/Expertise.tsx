'use client';

import React from 'react';
import { ExpertiseCard } from '@/types';

interface ExpertiseProps {
  cards: ExpertiseCard[];
  animated: boolean;
}

export const Expertise: React.FC<ExpertiseProps> = ({ cards, animated }) => {
  return (
    <section
      id="expertise-section"
      className="relative py-20 bg-white"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary bg-opacity-2 -skew-x-12 translate-x-1/3 pointer-events-none"></div>

      <div className="container px-lg">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between lg:items-end mb-20">
          <div className="lg:flex-1">
            <span className="badge badge--gold mb-6">Core Competencies</span>
            <h3 className="font-serif text-5xl font-black text-primary italic">
              Featured Expertise
            </h3>
          </div>
          <div className="lg:flex-1">
            <p className="text-primary text-opacity-60 text-lg font-light">
              Modern challenges demand surgical legal precision and structural innovation.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`glass-card p-12 flex flex-col min-h-96 relative z-1 opacity-0 transform translate-y-12 transition-all duration-700 group hover:border-accent-gold hover:bg-opacity-5 hover:-translate-y-3 ${
                animated ? 'opacity-100 translate-y-0' : ''
              }`}
              style={{
                transitionDelay: animated ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="mb-12 transition-all duration-300 group-hover:-translate-y-2">
                <span className="material-symbols-outlined text-6xl text-primary font-light transition-all duration-300 group-hover:text-accent-gold block">
                  {card.icon}
                </span>
              </div>
              <div className="mt-auto">
                <span className="font-serif text-sm text-accent-gold block mb-2 italic opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  {card.number} / {card.label}
                </span>
                <h4 className="font-serif text-2xl font-black text-primary mb-4 group-hover:text-accent-gold transition-all duration-300">
                  {card.title}
                </h4>
                <div className="w-12 h-px bg-accent-gold mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="text-primary text-opacity-60 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};