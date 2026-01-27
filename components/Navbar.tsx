'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Insights', href: '/insights' },
    
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-5 border-b border-[#1A305E]/10'
            : 'bg-white/70 backdrop-blur-md py-6 md:py-6 border-b border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="no-underline flex items-center group">
              <h1 className="text-1xl sm:text-3xl font-black tracking-tighter uppercase  text-[#1A305E] group-hover:text-[#5F5323] transition-colors duration-300">
                Solutions Attorney<span className="text-[#5F5323]"></span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-serif text-sm xl:text-base font-normal italic relative transition-all duration-300 no-underline ${
                    pathname === item.href ? 'text-[#5F5323]' : 'text-[#1A305E]'
                  } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#5F5323] after:transition-all after:duration-300 ${
                    pathname === item.href ? 'after:w-full' : 'after:w-0'
                  } hover:text-[#5F5323] hover:after:w-full`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/contact" className="hidden lg:block">
  <button className="group relative px-6 py-3 overflow-hidden">
    <div className="absolute inset-0 border border-[#1A305E]/20 group-hover:border-[#5F5323] transition-colors duration-500 rounded-lg"></div>
    <span className="relative z-10 text-[#1A305E] text-[9px] font-black uppercase tracking-[0.4em] group-hover:text-[#5F5323] transition-colors duration-300">
      Contact
    </span>
  </button>
</Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#1A305E] hover:text-[#5F5323] transition-all duration-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 sm:px-6 pt-4 pb-6 bg-white border-t border-[#1A305E]/10 mt-2">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 font-serif text-base sm:text-lg italic rounded-lg transition-all duration-300 transform no-underline ${
                    pathname === item.href
                      ? 'text-[#5F5323] bg-[#5F5323]/10 translate-x-2'
                      : 'text-[#1A305E] hover:text-[#5F5323] hover:bg-[#5F5323]/5 hover:translate-x-2'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        pathname === item.href ? 'translate-x-1' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-[#1A305E]/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 px-6 text-center font-serif text-sm font-bold italic text-white bg-[#5F5323] rounded-lg hover:bg-[#5F5323]/90 transition-all duration-300 transform hover:scale-105 no-underline"
              >
                Begin Consultancy
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 top-20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};