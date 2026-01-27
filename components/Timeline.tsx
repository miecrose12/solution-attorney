'use client';

import React from 'react';
import { TimelineItem } from '@/types';

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section id="timeline-section" className="timeline py-20 relative bg-white">
      <div className="container px-lg">
        {/* Header */}
        <div className="text-center mb-20 opacity-0 animate-fade-in">
          <h2 className="font-serif text-5xl font-black text-primary italic">
            Our Journey
          </h2>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent-gold to-transparent transform -translate-x-1/2 pointer-events-none"></div>

        {/* Timeline Items */}
        <div className="relative max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-12 opacity-0 animate-fade-in-up relative"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Dot */}
              <div className="absolute left-1/2 top-5 w-4 h-4 bg-accent-gold border-4 border-white rounded-full transform -translate-x-1/2 transition-all duration-300 hover:scale-150 hover:shadow-lg z-10"></div>

              {/* Content */}
              <div
                className={`${
                  index % 2 === 0 ? 'mr-1/2 ml-0' : 'ml-1/2 mr-0'
                } p-8 bg-primary bg-opacity-3 border border-primary border-opacity-10 rounded-lg transition-all duration-500 hover:bg-opacity-5 hover:border-accent-gold hover:-translate-y-1`}
              >
                <div className="font-serif text-2xl font-black text-accent-gold italic mb-2">
                  {item.year}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-primary text-opacity-70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};