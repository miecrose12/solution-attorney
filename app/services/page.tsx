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
      setAnimatedCards(Array.from({ length: 13 }, (_, i) => i));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const servicesItems: ServiceItem[] = [
    {
      icon: 'gavel',
      title: 'Litigation & Dispute Resolution',
      description:
        'Representing clients in civil and criminal matters across all levels of the court system — from trial hearings to complex appellate advocacy. We build aggressive, evidence-led strategies designed to win.',
      points: [
        'Civil & criminal trial representation',
        'Appellate advocacy across all court levels',
        'Pre-litigation advisory & risk assessment',
      ],
    },
    {
      icon: 'corporate_fare',
      title: 'Corporate & Commercial Law',
      description:
        'Providing expert guidance on company formation, regulatory compliance, mergers and acquisitions, and the drafting of complex commercial agreements that protect your business interests at every stage.',
      points: [
        'Company formation & restructuring',
        'Mergers, acquisitions & due diligence',
        'Commercial contracts & regulatory compliance',
      ],
    },
    {
      icon: 'real_estate_agent',
      title: 'Property & Real Estate Law',
      description:
        'Handling all aspects of property transactions including title searches, perfection of land documents, leases, and tenancy disputes — ensuring your property rights are secured and enforceable.',
      points: [
        'Title searches & land document perfection',
        'Property conveyancing & transfers',
        'Tenancy disputes & lease enforcement',
      ],
    },
    {
      icon: 'family_restroom',
      title: 'Family & Matrimonial Law',
      description:
        'Offering sensitive, professional counsel on divorce proceedings, child custody arrangements, and the administration of estates or probate with discretion, empathy, and strategic legal precision.',
      points: [
        'Divorce proceedings & separation',
        'Child custody & guardianship matters',
        'Estate administration & probate',
      ],
    },
    {
      icon: 'handshake',
      title: 'Alternative Dispute Resolution (ADR)',
      description:
        'Facilitating efficient out-of-court settlements through expert mediation and arbitration services — saving time, reducing costs, and preserving professional relationships where possible.',
      points: [
        'Commercial mediation & arbitration',
        'Negotiated settlement agreements',
        'Dispute prevention & early resolution',
      ],
    },
    {
      icon: 'business_center',
      title: 'Legal Advisory & Consultancy',
      description:
        'Serving as outside general counsel for businesses — providing detailed legal opinions, risk analysis, and ensuring your operations remain fully aligned with current statutory and regulatory requirements.',
      points: [
        'Outside general counsel services',
        'Legal opinions & risk analysis',
        'Statutory & regulatory compliance',
      ],
    },
    {
      icon: 'lightbulb',
      title: 'Intellectual Property Protection',
      description:
        'Assisting with the registration and enforcement of trademarks, copyrights, and patents to safeguard your creative and industrial assets — and aggressively pursuing infringers on your behalf.',
      points: [
        'Trademark, copyright & patent registration',
        'IP enforcement & infringement litigation',
        'IP licensing & monetisation strategy',
      ],
    },
    {
      icon: 'currency_bitcoin',
      title: 'FinTech & Digital Assets',
      description:
        'Navigating the complex regulatory frameworks of the CBN and SEC. We advise on payment service banking, digital lending, cryptocurrency compliance, and blockchain integration for forward-thinking businesses.',
      points: [
        'CBN & SEC regulatory advisory',
        'Cryptocurrency & blockchain compliance',
        'Digital lending & payment service licensing',
      ],
    },
    {
      icon: 'lock',
      title: 'Technology & Data Privacy (NDPA/NDPR)',
      description:
        'Ensuring full compliance with the Nigeria Data Protection Act. We conduct data audits, draft privacy policies, and manage breach notifications to protect your business from hefty regulatory fines.',
      points: [
        'NDPA/NDPR compliance audits',
        'Privacy policy drafting & data governance',
        'Breach notification & regulatory response',
      ],
    },
    {
      icon: 'movie',
      title: 'Entertainment, Media & Sports Law',
      description:
        'Protecting the creative pulse of Nigeria. We handle talent management contracts, licensing for Afrobeats and Nollywood productions, IP monetisation, and athlete image rights.',
      points: [
        'Talent management & artist contracts',
        'Afrobeats & Nollywood production licensing',
        'Sports image rights & sponsorship deals',
      ],
    },
    {
      icon: 'bolt',
      title: 'Energy, Mining & Natural Resources',
      description:
        'Expert guidance on the Petroleum Industry Act (PIA), solid minerals licensing, and the growing transition toward renewable energy projects and carbon credit regulations in Nigeria and beyond.',
      points: [
        'Petroleum Industry Act (PIA) advisory',
        'Solid minerals & mining licensing',
        'Renewable energy & carbon credit compliance',
      ],
    },
    {
      icon: 'rocket_launch',
      title: 'Startup Advisory & Venture Capital',
      description:
        'Supporting the "Next Big Thing" from incorporation to exit. We handle Series A–C funding rounds, Shareholders\' Agreements, and international "Flip" structures to attract global investment.',
      points: [
        'Incorporation & startup structuring',
        'Series A–C funding & SHA negotiation',
        'Flip structures for international investment',
      ],
    },
    {
      icon: 'shield',
      title: 'Cybersecurity & White-Collar Crime',
      description:
        'Defending against and investigating digital fraud, cyberstalking allegations under the Cybercrimes Act, and Anti-Money Laundering (AML) compliance — protecting businesses and individuals in the digital age.',
      points: [
        'Cybercrimes Act defence & investigations',
        'Digital fraud & financial crime defence',
        'AML compliance & white-collar advisory',
      ],
    },
  ];

  return (
    <>
      {/* Font imports only — Tailwind handles everything else */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;300;400;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

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

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#f5f1e8] via-white to-[#fafafa] min-h-[75vh] flex items-center justify-center px-[clamp(1rem,3vw,2rem)] py-16 relative mt-16 overflow-hidden">
        {/* Floating background circles */}
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(95,83,35,0.08)_0%,transparent_70%)] animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[15%] right-[25%] w-[250px] h-[250px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(26,48,94,0.05)_0%,transparent_70%)] animate-[float_6s_ease-in-out_infinite_1s]"></div>

        {/* Decorative lines */}
        <div className="absolute top-[20%] right-[5%] w-[200px] h-px bg-gradient-to-r from-transparent via-[#5f5323] to-transparent opacity-30 rotate-[-30deg]"></div>
        <div className="absolute bottom-[30%] right-[15%] w-[150px] h-px bg-gradient-to-r from-transparent via-[#5f5323] to-transparent opacity-30 rotate-[45deg]"></div>

        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <div className="max-w-[65%] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] mt-16">
            <span className="text-[#5f5323] text-[clamp(0.625rem,1.5vw,0.75rem)] font-black tracking-[0.5em] uppercase block mb-[clamp(0.5rem,2vw,1rem)]">
              Comprehensive Solutions
            </span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,8vw,5rem)] font-black text-[#1a305e] italic leading-[1.05] mb-[clamp(2rem,5vw,4rem)]">
              Our <span className="text-[#5f5323]">Services</span>
            </h1>
            <p className="text-[#1a305e] text-[clamp(0.875rem,2.5vw,1.125rem)] font-light leading-[1.8] border-l-4 border-[#5f5323] pl-[clamp(0.5rem,2vw,1rem)] max-w-[55rem]">
              Comprehensive legal solutions designed to address the complex challenges of modern enterprise and personal affairs. From corporate structuring to digital asset compliance, we have the expertise to protect what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-[clamp(2.5rem,6vw,5rem)] px-[clamp(1rem,3vw,2rem)] bg-white relative">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="mb-[clamp(2.5rem,6vw,5rem)] text-center">
            <span className="text-[#5f5323] text-[clamp(0.625rem,1.5vw,0.7rem)] font-black tracking-[0.4em] uppercase block mb-[clamp(0.5rem,2vw,1rem)]">
              What We Offer
            </span>
            <h2 className="font-['Playfair_Display'] text-[clamp(1.75rem,5vw,3.5rem)] font-black text-[#1a305e] italic">
              Constituted for <span className="text-[#5f5323]">Your Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(1.25rem,3vw,2rem)] mb-[clamp(2.5rem,6vw,5rem)]">
            {servicesItems.map((service, index) => (
              <div
                key={index}
                className={`group p-[clamp(1.5rem,4vw,2.5rem)] border border-[#1a305e]/10 rounded-[clamp(0.75rem,2vw,1rem)] bg-white relative overflow-hidden cursor-pointer opacity-0 translate-y-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(95,83,35,0.15)] ${
                  animatedCards.includes(index) ? 'opacity-100 translate-y-0' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#5f5323] to-[#1a305e] transition-all duration-500 group-hover:h-full"></div>

                {/* Shimmer effect (only on hover) */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_2s_infinite] pointer-events-none"></div>
                )}

                <div className="w-[clamp(3.5rem,8vw,4.5rem)] h-[clamp(3.5rem,8vw,4.5rem)] bg-[#5f5323]/10 rounded-[clamp(0.75rem,2vw,1rem)] flex items-center justify-center mb-[clamp(0.5rem,2vw,1rem)] transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-[#5f5323] group-hover:to-[#6f6630] group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-[0_12px_30px_rgba(95,83,35,0.3)]">
                  <span className="material-symbols-outlined text-[clamp(2rem,5vw,2.5rem)] text-[#5f5323] group-hover:text-white transition-colors">
                    {service.icon}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display'] text-[clamp(1.25rem,3vw,1.5rem)] font-black text-[#1a305e] mb-[clamp(0.5rem,2vw,1rem)] leading-tight transition-colors group-hover:text-[#5f5323]">
                  {service.title}
                </h3>

                <div className="h-0.5 w-12 bg-gradient-to-r from-[#5f5323] to-transparent mb-[clamp(0.5rem,2vw,1rem)] transition-all duration-500 group-hover:w-full"></div>

                <p className="text-[#1a305e] opacity-70 font-light leading-[1.8] mb-[clamp(0.5rem,2vw,1rem)] text-[clamp(0.875rem,2vw,0.95rem)]">
                  {service.description}
                </p>

                <ul className="list-none">
                  {service.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="py-1 text-[#1a305e] opacity-60 text-[clamp(0.8125rem,2vw,0.875rem)] pl-6 relative transition-all group-hover:translate-x-1"
                    >
                      <span className="absolute left-0 text-[#5f5323] font-black text-[clamp(0.875rem,2vw,1rem)]">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-[clamp(2.5rem,6vw,5rem)] px-[clamp(1rem,3vw,2rem)] bg-gradient-to-br from-[#fafafa] to-white relative overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute top-1/2 left-0 w-[30%] h-px bg-gradient-to-r from-[#5f5323] to-transparent opacity-20 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[30%] h-px bg-gradient-to-l from-[#5f5323] to-transparent opacity-20 -translate-y-1/2"></div>

        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex flex-col items-center gap-[clamp(2rem,5vw,4rem)] border-t border-b border-[#1a305e]/10 px-[clamp(1rem,3vw,2rem)] py-[clamp(2.5rem,6vw,5rem)] text-center">
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,5vw,4rem)] font-black text-[#1a305e] italic leading-tight max-w-[800px] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              Ready to engage with <span className="text-[#5f5323]">our team?</span>
            </h2>
            <p className="text-[#1a305e] opacity-70 font-light text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.8] italic max-w-[600px] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
              Schedule a consultation with our attorneys. We'll assess your needs and design a tailored legal strategy.
            </p>

            <a href="/contact" className="inline-block">
              <button
                className="bg-[#1a305e] text-white px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2.5vw,1.25rem)] rounded-lg font-['Public_Sans'] font-bold text-[clamp(0.625rem,1.5vw,0.75rem)] uppercase tracking-[0.3em] transition-all hover:bg-[#0b162e] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,48,94,0.3)]"
              >
                Start Your Consultation
              </button>
            </a>

            <div className="flex items-center gap-3 mt-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
              <span className="material-symbols-outlined text-[#5f5323] text-[clamp(1rem,2.5vw,1.25rem)]">verified</span>
              <span className="text-[#1a305e] opacity-50 text-[clamp(0.625rem,1.5vw,0.75rem)] font-black tracking-[0.2em] uppercase">
                Trusted by Leading Enterprises
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}