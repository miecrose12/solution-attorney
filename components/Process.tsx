'use client';

import React from 'react';
import { ProcessStep } from '@/types';

interface ProcessProps {
  steps: ProcessStep[];
  animated: boolean;
}

export const Process: React.FC<ProcessProps> = ({ steps, animated }) => {
  return (
    <section id="process-section" className="process py-20 bg-white">
      <div className="container px-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 relative opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Step Number */}
              <div className="flex items-start relative">
                <span className="font-serif text-4xl font-black text-accent-gold italic">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-20 top-1/2 w-8 h-0.5 bg-accent-gold"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-accent-gold bg-opacity-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20 group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-2xl text-accent-gold">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-black text-primary italic">
                  {step.title}
                </h3>
                <p className="text-primary text-opacity-70 text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};