'use client';

import React from 'react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  linkText: string;
}

export const CTA: React.FC<CTAProps> = ({ title, description, linkText }) => {
  return (
    <section className="py-20 bg-white opacity-0 animate-fade-in">
      <div className="container px-lg">
        <div className="flex flex-col lg:flex-row gap-12 items-center border-t border-b border-primary border-opacity-5 py-12">
          {/* Text */}
          <div className="flex-1 opacity-0 animate-fade-in-up [animation-delay:0.2s]">
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-primary italic leading-tight">
              {title}
            </h2>
          </div>

          {/* Action */}
          <div className="flex-1 flex flex-col gap-6 items-start opacity-0 animate-fade-in-up [animation-delay:0.4s]">
            <p className="text-primary text-opacity-60 text-xl font-light leading-relaxed italic">
              {description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest no-underline text-primary transition-all duration-300 hover:text-accent-gold group"
            >
              {linkText}
              <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:translate-x-1">
                east
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};