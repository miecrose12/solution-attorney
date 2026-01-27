'use client';

import React, { useState, useEffect } from 'react';

interface ExpertiseCard {
  id: number;
  icon: string;
  number: string;
  label: string;
  title: string;
  description: string;
}

export default function SolutionsAttorney(): JSX.Element {
  const [expertiseVisible, setExpertiseVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const expertiseSection = document.getElementById('expertise');
      if (expertiseSection) {
        const rect = expertiseSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setExpertiseVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expertiseCards: ExpertiseCard[] = [
    {
      id: 1,
      icon: 'account_balance',
      number: '01',
      label: 'Legal Design',
      title: 'Corporate Architecture',
      description: 'Structural governance and elite-tier advisory for Pan-African enterprise ecosystems.',
    },
    {
      id: 2,
      icon: 'payments',
      number: '02',
      label: 'Asset Strategy',
      title: 'Private Wealth Preservation',
      description: 'Sophisticated multi-jurisdictional estate strategy for high-net-worth families.',
    },
    {
      id: 3,
      icon: 'location_city',
      number: '03',
      label: 'Urban Growth',
      title: 'Real Estate Development',
      description: 'Title perfection and structured financing for the evolving urban landscape of Lagos.',
    },
  ];

  return (
    <div className="bg-white font-sans text-[#1A305E] overflow-x-hidden selection:bg-[#5F5323]/30">
      {/* ========== HERO SECTION ========== */}
     <section className="relative min-h-[600px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-screen flex items-center pt-16 sm:pt-20 md:pt-16 lg:pt-20 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Lagos Architecture"
            className="w-full h-full object-cover grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5BKeaFgDmHYfU3rvGEN9x52uagSLuq2q3QkSqGUYBEqeDWn_IGh3ecut3LbPe6u-oSys1n51ujAnkomJswl44jq3IOQchzwETegHj77rR1eOEIot_khQHGMuPbFjkeozjomLCAEzxl8_SjXJNZ1G-lJ3Ji93XJRCYbfDbIyWkV6Hb6CD6KZjvs1Ku5PhVg7Z-Cija2FiG9ZP3wGZyemRiKQDzKjhqOkHB2sN89nR2wfn2wgbAP0xZ3CK47xcinfDat7rx7e3J_0E"
          />
          <div className="absolute inset-0 bg-[#1A305E]/20 mix-blend-multiply"></div>
        </div>

        {/* Decorative Skewed Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-6xl mb-32">
            {/* Badge */}
            {/* <span className="inline-block text-[#f2f2f1] text-xs sm:text-sm md:text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase mb-5 sm:mb-6 md:mb-8">
              Established in Lagos
            </span> */}

            {/* Title */}
            {/* 
              DETAILED CHANGES FOR TITLE SIZE:
              1. Mobile (default): text-6xl (3.75rem / 60px)
              2. Small mobile (sm): text-6xl (same)
              3. Medium/Tablet (md): text-7xl (4.5rem / 72px) - slight increase for tablets
              4. Large/Laptop (lg): text-[8rem] (8rem / 128px) - LOCKED LARGE SIZE
              5. Extra Large (xl): text-[8rem] (same as lg) - CONSISTENT
              6. 2XL (2xl): text-[8rem] (same as lg) - CONSISTENT
              
              Result: On all laptop screens (1024px+), the title stays large at 128px
              This is bigger than text-8xl (96px) but smaller than the previous 11rem (176px)
            */}
            <h2 className="font-serif text-6xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[8rem] 2xl:text-[8rem] leading-[0.85] font-black mt-8 italic text-white">
              Architecting <br />
              <span
                className="text-outline-dark"
                style={{
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
                  color: 'transparent',
                }}
              >
                Solutions.
              </span>
            </h2>
             {/* <span className="inline-block text-[#f2f2f1] text-xs sm:text-sm md:text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase mb-5 sm:mb-6 md:mb-8">
              Established in Lagos
            </span> */}

            {/* Content Row */}
            {/* 
              DETAILED CHANGES:
              1. Kept flex-col at ALL screen sizes (removed lg:flex-row)
              2. Button now ALWAYS appears below the description text
              3. On large screens (lg+), increased top margin significantly (mt-24 xl:mt-32)
              4. This pushes the entire content block (description + button) much further down the page
              5. Added larger gap between description and button on big screens (gap-8 lg:gap-10)
            */}
            <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-16">
              <p className="text-white/80 text-base sm:text-lg md:text-lg lg:text-xl font-light tracking-wide leading-relaxed max-w-lg border-l-2 border-[#5F5323] pl-5 sm:pl-6 md:pl-8">
                Precision-engineered legal strategies for the visionaries redefining the West African commercial landscape.
              </p>
              
              {/* 
                BUTTON POSITIONING DETAILS:
                - The button appears DIRECTLY BELOW the description text at all screen sizes
                - Removed side-by-side layout completely
                - On large screens, the increased top margin (mt-24 xl:mt-32) on the parent div
                  pushes both the description and button much lower on the page
                - This creates a vertical stack that sits lower in the hero section on big screens
              */}
              <a
                href="/contact"
                className="group relative px-8 sm:px-10 md:px-10 lg:px-12 py-4 sm:py-5 md:py-5 lg:py-6 overflow-hidden hover:scale-105 transition-transform duration-300 flex-shrink-0"
              >
                <div className="absolute inset-0 border border-white/30 group-hover:border-[#5F5323] transition-colors duration-500"></div>
                <span className="relative z-10 text-white text-[9px] sm:text-[10px] md:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em]">
                  Begin Consultancy
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-10 hidden lg:flex flex-col items-center gap-6 md:gap-8 z-20">
          <span
            className="text-white/30 text-[8px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.5em]"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            
          </span>
          <div className="h-12 md:h-16 w-px bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#5F5323]"></div>
          </div>
        </div>
      </section>

      {/* ========== EXPERTISE SECTION ========== */}
      <section id="expertise" className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A305E]/[0.02] -skew-x-12 translate-x-1/3 hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-12 md:mb-16 lg:mb-24 gap-6 sm:gap-8">
            <div className="w-full lg:w-2/3 text-center md:text-left">
              <span className="text-[#5F5323] text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">
                Core Competencies
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1A305E] italic">
                Featured Expertise
              </h3>
            </div>
            <div className="w-full lg:w-1/3 text-center md:text-left">
              <p className="text-[#1A305E]/60 font-light text-sm sm:text-base md:text-lg">
                Modern challenges demand surgical legal precision and structural innovation.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {expertiseCards.map((card: ExpertiseCard, index: number) => (
              <div
                key={card.id}
                className={`group relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col h-[380px] sm:h-[420px] md:h-[450px] lg:h-[500px] rounded-lg cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                  expertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  background: 'rgba(26, 48, 94, 0.03)',
                  backdropFilter: 'blur(12px) saturate(180%)',
                  border: '1px solid rgba(26, 48, 94, 0.1)',
                  transitionDelay: expertiseVisible ? `${index * 150}ms` : '0ms',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#5F5323';
                  el.style.background = 'rgba(26, 48, 94, 0.05)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(26, 48, 94, 0.1)';
                  el.style.background = 'rgba(26, 48, 94, 0.03)';
                }}
              >
                {/* Icon */}
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-3xl sm:text-4xl md:text-5xl group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[#1A305E] group-hover:text-[#5F5323] transition-colors text-4xl sm:text-5xl">
                    {card.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <span className="font-serif text-xs sm:text-sm text-[#5F5323] mb-2 block italic">
                    {card.number} / {card.label}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-5 md:mb-6 text-[#1A305E] group-hover:italic transition-all leading-tight">
                    {card.title}
                  </h4>
                  <div className="h-px w-12 bg-[#5F5323] mb-4 sm:mb-6 md:mb-8 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-[#1A305E]/60 font-light leading-relaxed mb-4 sm:mb-6 md:mb-8 transition-opacity duration-500 text-xs sm:text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MANIFESTO SECTION ========== */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-[#0B162E] relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-1/2 left-0 w-full rotate-6"
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #5F5323, transparent)',
            }}
          ></div>
          <div
            className="absolute top-1/3 left-0 w-full -rotate-6"
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #5F5323, transparent)',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-black mb-6 sm:mb-8 md:mb-12 italic leading-tight px-2">
            In the architecture of law, <br />
            <span className="text-[#5F5323]">clarity</span> is the cornerstone.
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-px bg-[#5F5323] mx-auto mb-6 sm:mb-8 md:mb-12"></div>
          <p className="text-white/40 font-light text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em]">
            The Solutions Manifesto
          </p>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 border-y border-[#1A305E]/5 py-10 sm:py-12 md:py-16 lg:py-24">
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A305E] font-black italic mb-4 sm:mb-6 md:mb-8 leading-tight">
                Want to <br /> Know more?
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <p className="text-[#1A305E]/60 text-sm sm:text-base md:text-lg lg:text-xl font-light mb-6 sm:mb-8 md:mb-12 leading-relaxed italic">
                Our collective of legal architects is ready to design your next commercial milestone with surgical precision.
              </p>
              <a
                href="/services"
                className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] flex items-center gap-2 sm:gap-3 md:gap-4 text-[#1A305E] hover:text-[#5F5323] transition-colors"
              >
                Check here
                <span className="material-symbols-outlined text-sm sm:text-base md:text-lg">east</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}