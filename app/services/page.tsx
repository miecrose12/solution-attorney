'use client';

import React, { useState, useEffect } from 'react';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCards([0, 1, 2, 3, 4, 5]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const servicesItems: ServiceItem[] = [
    {
      icon: 'corporate_fare',
      title: 'Corporate Structuring',
      description:
        'Design optimal corporate architectures for holding companies, subsidiaries, and complex enterprise ecosystems.',
      points: [
        'Entity formation & registration',
        'Governance frameworks',
        'Cross-border structuring',
      ],
    },
    {
      icon: 'account_balance_wallet',
      title: 'Wealth Management',
      description:
        'Strategic preservation and growth planning for sophisticated clients with multi-jurisdictional assets.',
      points: [
        'Estate planning',
        'Trust structures',
        'Asset protection strategies',
      ],
    },
    {
      icon: 'real_estate_agent',
      title: 'Real Estate & Development',
      description:
        'Navigate Lagos\'s evolving landscape with expert guidance on acquisitions, financing, and development.',
      points: [
        'Land acquisition & title',
        'Development agreements',
        'Financing structures',
      ],
    },
    {
      icon: 'handshake',
      title: 'Commercial Transactions',
      description:
        'Facilitate high-value commercial dealings with precision, transparency, and legal rigor.',
      points: [
        'M&A advisory',
        'Joint venture agreements',
        'Commercial contracts',
      ],
    },
    {
      icon: 'gavel',
      title: 'Regulatory Compliance',
      description:
        'Navigate complex regulatory environments with strategies tailored to your industry and jurisdiction.',
      points: [
        'Regulatory filings',
        'Compliance audits',
        'Policy implementation',
      ],
    },
    {
      icon: 'trending_up',
      title: 'Investment Advisory',
      description:
        'Strategic counsel for investors seeking exposure to African markets with risk mitigation.',
      points: [
        'Investment structure',
        'Due diligence',
        'Portfolio optimization',
      ],
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;300;400;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        :root {
          --color-primary: #1a305e;
          --color-primary-dark: #0b162e;
          --color-accent-gold: #5f5323;
          --color-white: #ffffff;
          --color-light: #f8f8f8;
          --font-sans: 'Public Sans', sans-serif;
          --font-serif: 'Playfair Display', serif;
          --fw-light: 300;
          --fw-regular: 400;
          --fw-bold: 700;
          --fw-black: 900;
          
          /* Responsive Spacing */
          --spacing-xs: clamp(0.25rem, 1vw, 0.5rem);
          --spacing-sm: clamp(0.5rem, 2vw, 1rem);
          --spacing-md: clamp(0.75rem, 2.5vw, 1.5rem);
          --spacing-lg: clamp(1rem, 3vw, 2rem);
          --spacing-xl: clamp(1.5rem, 4vw, 3rem);
          --spacing-2xl: clamp(2rem, 5vw, 4rem);
          --spacing-3xl: clamp(2.5rem, 6vw, 5rem);
          
          /* Container Padding */
          --container-padding: clamp(1rem, 3vw, 2rem);
          
          --transition-base: all 0.3s ease-in-out;
          --transition-smooth: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-sans);
          color: var(--color-primary);
          background-color: var(--color-white);
          line-height: 1.6;
          overflow-x: hidden;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
        }

        /* Disable animations on mobile for better performance */
        @media (max-width: 768px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(1deg); }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Animated Background Elements */}
        <div className="bg-float-circle bg-float-circle-1"></div>
        <div className="bg-float-circle bg-float-circle-2"></div>

        {/* Decorative Lines */}
        <div className="decorative-line decorative-line-1"></div>
        <div className="decorative-line decorative-line-2"></div>

        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">Comprehensive Solutions</span>
            
            <h1 className="hero-title">
              Our <br />
              <span style={{ color: 'var(--color-accent-gold)' }}>Services</span>
            </h1>
            
            <p className="hero-description">
              Comprehensive legal solutions designed to address the complex challenges of modern enterprise. From corporate structuring to wealth preservation, we've architected every detail of our practice.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="services-container">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">
              Architected for <span style={{ color: 'var(--color-accent-gold)' }}>Your Success</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {servicesItems.map((service, index) => (
              <div
                key={index}
                className={`service-card ${hoveredCard === index ? 'hovered' : ''} ${animatedCards.includes(index) ? 'animated' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* Accent Bar */}
                <div className="service-card-accent"></div>

                {/* Shimmer Effect */}
                {hoveredCard === index && (
                  <div className="service-card-shimmer"></div>
                )}

                {/* Icon Container */}
                <div className="service-icon-container">
                  <span className="material-symbols-outlined service-icon">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="service-title">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="service-divider"></div>

                {/* Description */}
                <p className="service-description">
                  {service.description}
                </p>

                {/* Points List */}
                <ul className="service-points">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="service-point">
                      <span className="service-point-arrow">→</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Hover Indicator */}
                <div className="service-learn-more">
                  <span className="service-learn-more-text">Learn More</span>
                  <span className="material-symbols-outlined service-learn-more-icon">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        {/* Decorative Elements */}
        <div className="cta-decorative-line cta-decorative-line-left"></div>
        <div className="cta-decorative-line cta-decorative-line-right"></div>

        <div className="cta-container">
          <div className="cta-content">
            {/* Title */}
            <h2 className="cta-title">
              Ready to engage with <span style={{ color: 'var(--color-accent-gold)' }}>our team?</span>
            </h2>

            {/* Description */}
            <p className="cta-description">
              Schedule a consultation with our architects. We'll assess your needs and design a tailored strategy.
            </p>

            {/* CTA Button */}
            <button 
              className="cta-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-primary-dark)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(26, 48, 94, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>Start Your Consultation</span>
            </button>

            {/* Trust Badge */}
            <div className="cta-trust-badge">
              <span className="material-symbols-outlined cta-trust-icon">verified</span>
              <span className="cta-trust-text">Trusted by Leading Enterprises</span>
            </div>
          </div>
        </div>
      </section>

      {/* Component-Specific Styles */}
      <style jsx>{`
        /* ===========================
           HERO SECTION STYLES
        =========================== */
        .hero-section {
          background: linear-gradient(135deg, #f5f1e8 0%, #ffffff 50%, #fafafa 100%);
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem var(--container-padding);
          position: relative;
          margin-top: 4rem;
          overflow: hidden;
        }

        .bg-float-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .bg-float-circle-1 {
          top: 10%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(95, 83, 35, 0.08) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }

        .bg-float-circle-2 {
          bottom: 15%;
          right: 25%;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(26, 48, 94, 0.05) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite 1s;
        }

        .decorative-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-accent-gold), transparent);
          opacity: 0.3;
        }

        .decorative-line-1 {
          top: 20%;
          right: 5%;
          width: 200px;
          transform: rotate(-30deg);
        }

        .decorative-line-2 {
          bottom: 30%;
          right: 15%;
          width: 150px;
          transform: rotate(45deg);
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 65%;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
          margin-top: 4rem;
        }

        .hero-label {
          color: var(--color-accent-gold);
          fontSize: clamp(0.625rem, 1.5vw, 0.75rem);
          font-weight: var(--fw-black);
          letter-spacing: 0.5em;
          text-transform: uppercase;
          display: block;
          margin-bottom: var(--spacing-lg);
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: var(--fw-black);
          color: var(--color-primary);
          font-style: italic;
          line-height: 1.05;
          margin-bottom: var(--spacing-2xl);
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .hero-description {
          color: var(--color-primary);
          font-size: clamp(0.875rem, 2.5vw, 1.125rem);
          font-weight: var(--fw-light);
          line-height: 1.8;
          border-left: 3px solid var(--color-accent-gold);
          padding-left: var(--spacing-lg);
          margin-bottom: 0;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.5s forwards;
          max-width: 55rem;
        }

        /* ===========================
           SERVICES SECTION STYLES
        =========================== */
        .services-section {
          padding: var(--spacing-3xl) var(--container-padding);
          background: var(--color-white);
          position: relative;
        }

        .services-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        .section-header {
          margin-bottom: var(--spacing-3xl);
          text-align: center;
        }

        .section-label {
          color: var(--color-accent-gold);
          font-size: clamp(0.625rem, 1.5vw, 0.7rem);
          font-weight: var(--fw-black);
          letter-spacing: 0.4em;
          text-transform: uppercase;
          display: block;
          margin-bottom: var(--spacing-md);
        }

        .section-title {
          font-family: var(--font-serif);
          font-size: clamp(1.75rem, 5vw, 3.5rem);
          font-weight: var(--fw-black);
          color: var(--color-primary);
          font-style: italic;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          gap: clamp(1.25rem, 3vw, 2rem);
          margin-bottom: var(--spacing-3xl);
        }

        .service-card {
          padding: clamp(1.5rem, 4vw, 2.5rem);
          border: 1px solid rgba(26, 48, 94, 0.1);
          border-radius: clamp(0.75rem, 2vw, 1rem);
          background: var(--color-white);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 4px 20px rgba(26, 48, 94, 0.05);
        }

        .service-card.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card.hovered {
          background: linear-gradient(135deg, rgba(95, 83, 35, 0.02) 0%, var(--color-white) 100%);
          box-shadow: 0 20px 60px rgba(95, 83, 35, 0.15);
        }

        .service-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0%;
          background: linear-gradient(180deg, var(--color-accent-gold), var(--color-primary));
          transition: height 0.5s ease-out;
        }

        .service-card.hovered .service-card-accent {
          height: 100%;
        }

        .service-card-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
          pointer-events: none;
        }

        .service-icon-container {
          width: clamp(3.5rem, 8vw, 4.5rem);
          height: clamp(3.5rem, 8vw, 4.5rem);
          background: rgba(95, 83, 35, 0.1);
          border-radius: clamp(0.75rem, 2vw, 1rem);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-lg);
          transition: all 0.4s ease-out;
        }

        .service-card.hovered .service-icon-container {
          background: linear-gradient(135deg, var(--color-accent-gold), #6f6630);
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 12px 30px rgba(95, 83, 35, 0.3);
        }

        .service-icon {
          font-size: clamp(2rem, 5vw, 2.5rem) !important;
          color: var(--color-accent-gold);
          transition: color 0.3s ease-out;
        }

        .service-card.hovered .service-icon {
          color: var(--color-white);
        }

        .service-title {
          font-family: var(--font-serif);
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: var(--fw-black);
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
          line-height: 1.3;
          transition: color 0.3s ease-out;
        }

        .service-card.hovered .service-title {
          color: var(--color-accent-gold);
        }

        .service-divider {
          height: 2px;
          width: 3rem;
          background: linear-gradient(90deg, var(--color-accent-gold), transparent);
          margin-bottom: var(--spacing-lg);
          transition: width 0.5s ease-out;
        }

        .service-card.hovered .service-divider {
          width: 100%;
        }

        .service-description {
          color: var(--color-primary);
          opacity: 0.7;
          font-weight: var(--fw-light);
          line-height: 1.8;
          margin-bottom: var(--spacing-lg);
          font-size: clamp(0.875rem, 2vw, 0.95rem);
        }

        .service-points {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .service-point {
          padding: var(--spacing-xs) 0;
          color: var(--color-primary);
          opacity: 0.6;
          font-size: clamp(0.8125rem, 2vw, 0.875rem);
          position: relative;
          padding-left: 1.5rem;
          transition: all 0.3s ease-out;
        }

        .service-card.hovered .service-point {
          transform: translateX(4px);
        }

        .service-point-arrow {
          position: absolute;
          left: 0;
          color: var(--color-accent-gold);
          font-weight: var(--fw-black);
          font-size: clamp(0.875rem, 2vw, 1rem);
        }

        .service-learn-more {
          margin-top: var(--spacing-lg);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease-out;
        }

        .service-card.hovered .service-learn-more {
          opacity: 1;
          transform: translateY(0);
        }

        .service-learn-more-text {
          font-size: clamp(0.625rem, 1.5vw, 0.7rem);
          font-weight: var(--fw-black);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--color-accent-gold);
        }

        .service-learn-more-icon {
          font-size: clamp(0.875rem, 2vw, 1rem) !important;
          color: var(--color-accent-gold);
        }

        /* ===========================
           CTA SECTION STYLES
        =========================== */
        .cta-section {
          padding: var(--spacing-3xl) var(--container-padding);
          background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-decorative-line {
          position: absolute;
          top: 50%;
          width: 30%;
          height: 1px;
          opacity: 0.2;
          transform: translateY(-50%);
        }

        .cta-decorative-line-left {
          left: 0;
          background: linear-gradient(90deg, var(--color-accent-gold), transparent);
        }

        .cta-decorative-line-right {
          right: 0;
          background: linear-gradient(90deg, transparent, var(--color-accent-gold));
        }

        .cta-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
          align-items: center;
          border-top: 1px solid rgba(26, 48, 94, 0.08);
          border-bottom: 1px solid rgba(26, 48, 94, 0.08);
          padding: var(--spacing-3xl) var(--container-padding);
          text-align: center;
        }

        .cta-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: var(--fw-black);
          color: var(--color-primary);
          font-style: italic;
          line-height: 1.2;
          max-width: 800px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .cta-description {
          color: var(--color-primary);
          opacity: 0.7;
          font-weight: var(--fw-light);
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          line-height: 1.8;
          font-style: italic;
          max-width: 600px;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .cta-button {
          background: var(--color-primary);
          color: var(--color-white);
          padding: clamp(1rem, 2.5vw, 1.25rem) clamp(2rem, 4vw, 3rem);
          border: none;
          border-radius: 0.5rem;
          font-family: var(--font-sans);
          font-weight: var(--fw-bold);
          font-size: clamp(0.625rem, 1.5vw, 0.75rem);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          cursor: pointer;
          transition: all 0.4s ease-out;
          margin-top: var(--spacing-lg);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }

        .cta-trust-badge {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-lg);
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-trust-icon {
          font-size: clamp(1rem, 2.5vw, 1.25rem) !important;
          color: var(--color-accent-gold);
        }

        .cta-trust-text {
          font-size: clamp(0.625rem, 1.5vw, 0.75rem);
          color: var(--color-primary);
          opacity: 0.5;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        /* ===========================
           RESPONSIVE BREAKPOINTS
        =========================== */

        /* Large Desktop (1440px and above) */
        @media (min-width: 1440px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Desktop (1024px - 1439px) */
        @media (max-width: 1439px) and (min-width: 1024px) {
          .hero-content {
            max-width: 75%;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Tablet Landscape (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .hero-section {
            min-height: 60vh;
            margin-top: 3rem;
            padding-top: 2rem;
          }

          .hero-content {
            max-width: 85%;
          }

          .bg-float-circle-1 {
            width: 300px;
            height: 300px;
            right: 5%;
          }

          .bg-float-circle-2 {
            width: 200px;
            height: 200px;
            right: 20%;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .cta-content {
            padding: var(--spacing-2xl) var(--spacing-sm);
          }
        }

        /* Tablet Portrait (600px - 767px) */
        @media (max-width: 767px) and (min-width: 600px) {
          .hero-section {
            min-height: 50vh;
            margin-top: 2.5rem;
            padding: 2rem var(--spacing-md);
          }

          .hero-content {
            max-width: 100%;
          }

          .bg-float-circle-1,
          .bg-float-circle-2 {
            opacity: 0.5;
          }

          .bg-float-circle-1 {
            width: 250px;
            height: 250px;
            top: 5%;
            right: -50px;
          }

          .bg-float-circle-2 {
            width: 180px;
            height: 180px;
            bottom: 10%;
            right: -30px;
          }

          .decorative-line {
            display: none;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .service-card {
            padding: 1.75rem;
          }

          .cta-content {
            gap: var(--spacing-xl);
            padding: var(--spacing-2xl) var(--spacing-sm);
          }

          .cta-decorative-line {
            width: 20%;
          }
        }

        /* Mobile Large (480px - 599px) */
        @media (max-width: 599px) and (min-width: 480px) {
          .hero-section {
            min-height: auto;
            margin-top: 2rem;
            padding: 2rem var(--spacing-sm) 1.5rem;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-label {
            letter-spacing: 0.3em;
            margin-bottom: var(--spacing-md);
          }

          .hero-title {
            margin-bottom: var(--spacing-xl);
          }

          .hero-description {
            padding-left: var(--spacing-md);
            border-left-width: 2px;
          }

          .bg-float-circle {
            display: none;
          }

          .decorative-line {
            display: none;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-icon-container {
            width: 3.5rem;
            height: 3.5rem;
            margin-bottom: var(--spacing-md);
          }

          .cta-content {
            gap: var(--spacing-lg);
            padding: var(--spacing-2xl) 0;
          }

          .cta-decorative-line {
            display: none;
          }

          .cta-button {
            width: 100%;
            max-width: 320px;
          }
        }

        /* Mobile Small (320px - 479px) */
        @media (max-width: 479px) {
          .hero-section {
            min-height: auto;
            margin-top: 1.5rem;
            padding: 1.5rem var(--spacing-sm);
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-label {
            font-size: 0.625rem;
            letter-spacing: 0.25em;
            margin-bottom: var(--spacing-sm);
          }

          .hero-title {
            font-size: 2rem;
            margin-bottom: var(--spacing-lg);
          }

          .hero-description {
            font-size: 0.875rem;
            padding-left: var(--spacing-sm);
            border-left-width: 2px;
          }

          .bg-float-circle,
          .decorative-line {
            display: none;
          }

          .section-header {
            margin-bottom: var(--spacing-2xl);
          }

          .section-label {
            font-size: 0.625rem;
            letter-spacing: 0.3em;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .service-card {
            padding: 1.25rem;
          }

          .service-icon-container {
            width: 3rem;
            height: 3rem;
            margin-bottom: var(--spacing-sm);
          }

          .service-icon {
            font-size: 1.75rem !important;
          }

          .service-title {
            font-size: 1.125rem;
            margin-bottom: var(--spacing-sm);
          }

          .service-divider {
            margin-bottom: var(--spacing-md);
          }

          .service-description {
            font-size: 0.875rem;
            margin-bottom: var(--spacing-md);
          }

          .service-point {
            font-size: 0.8125rem;
            padding-left: 1.25rem;
          }

          .service-learn-more {
            margin-top: var(--spacing-md);
          }

          .cta-section {
            padding: var(--spacing-2xl) var(--spacing-sm);
          }

          .cta-content {
            gap: var(--spacing-lg);
            padding: var(--spacing-xl) 0;
          }

          .cta-title {
            font-size: 1.75rem;
          }

          .cta-description {
            font-size: 0.9375rem;
          }

          .cta-button {
            width: 100%;
            padding: 1rem 1.5rem;
            font-size: 0.625rem;
            letter-spacing: 0.2em;
          }

          .cta-trust-badge {
            margin-top: var(--spacing-md);
          }

          .cta-trust-text {
            font-size: 0.625rem;
            letter-spacing: 0.15em;
          }

          .cta-decorative-line {
            display: none;
          }
        }

        /* Extra Small Mobile (below 320px) */
        @media (max-width: 319px) {
          .hero-section {
            padding: 1rem var(--spacing-xs);
            margin-top: 1rem;
          }

          .hero-title {
            font-size: 1.75rem;
          }

          .hero-description {
            font-size: 0.8125rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .service-card {
            padding: 1rem;
          }

          .service-title {
            font-size: 1rem;
          }

          .cta-title {
            font-size: 1.5rem;
          }

          .cta-button {
            padding: 0.875rem 1.25rem;
          }
        }

        /* Landscape Mobile Optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-section {
            min-height: auto;
            padding: 2rem var(--container-padding);
          }

          .hero-title {
            margin-bottom: var(--spacing-lg);
          }

          .bg-float-circle {
            display: none;
          }
        }

        /* Touch Device Optimization */
        @media (hover: none) and (pointer: coarse) {
          .service-card {
            transition: none;
          }

          .service-card:active {
            transform: scale(0.98);
          }

          .cta-button:active {
            transform: translateY(0) scale(0.98);
          }
        }

        /* High Resolution Screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .hero-title,
          .section-title,
          .cta-title {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

        /* Print Styles */
        @media print {
          .bg-float-circle,
          .decorative-line,
          .service-card-shimmer,
          .cta-decorative-line {
            display: none !important;
          }

          .service-card,
          .cta-button {
            box-shadow: none !important;
            border: 1px solid #ccc !important;
          }
        }
      `}</style>
    </>
  );
}