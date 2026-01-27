'use client';

import React from 'react';
import Link from 'next/link';
import { FooterSection } from '@/types';

export const Footer: React.FC = () => {
  const footerNavigation: FooterSection[] = [
    {
      title: 'Navigation',
      links: ['Manifesto', 'The Collective', 'Journal', 'Practice'],
    },
    {
      title: 'Legal',
      links: ['Terms of Engagement', 'Privacy Protocol', 'Regulatory Info'],
    },
    {
      title: 'Global Office',
      links: ['Lagos HQ', ],
      hidden: true,
    },
  ];

  return (
    <footer id="footer-section" className="bg-white pt-16 pb-4 border-t border-primary border-opacity-5 opacity-0 animate-fade-in mt-auto">
      {/* Main Container - Matches Navbar Width */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 lg:justify-between lg:items-start mb-12">
          {/* Branding */}
          <div className="flex-none lg:max-w-xs opacity-0 animate-fade-in-up [animation-delay:0.2s]">
            <h2 className="font-serif text-2xl font-black text-primary mb-4 italic">
              Solutions<span className="text-accent-gold">.</span>
            </h2>
            <p className="text-sm text-primary text-opacity-60 font-light leading-relaxed">
              Engineering legal outcomes for the next generation of African industry leaders. Victoria Island, Lagos.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 flex-grow">
            {footerNavigation.map((section, index) => (
              <div
                key={index}
                className={`opacity-0 animate-fade-in-up ${section.hidden ? 'hidden lg:block' : ''}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <h4 className="text-xs font-black uppercase tracking-widest text-accent-gold mb-4">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2 list-none">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-sm text-primary text-opacity-60 font-light no-underline transition-all duration-300 relative inline-block hover:text-opacity-100 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-primary border-opacity-5 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center opacity-0 animate-fade-in-up [animation-delay:0.6s]">
          <p className="text-xs uppercase tracking-widest text-primary text-opacity-30 text-center lg:text-left">
            © 2026 Solutions Attorney — Radical Precision Architecture
          </p>
          <div className="flex gap-6">
            {['public', 'data_exploration', 'architecture'].map((icon) => (
              <Link
                key={icon}
                href="#"
                className="inline-flex items-center text-primary text-opacity-30 transition-all duration-300 no-underline hover:text-opacity-100 hover:text-accent-gold hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};