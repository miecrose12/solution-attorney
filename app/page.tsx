'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import principalImg from './assets/principal.jpeg';
import associateImg from './assets/associate.jpeg';
import counselImg from './assets/counsel.jpeg';
import itImg from './assets/it2.png';
import litigationImg from './assets/li.png';
import building from './assets/build.png';

interface ExpertiseCard {
  id: number;
  icon: string;
  number: string;
  label: string;
  title: string;
  description: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  yearsExp: string;
  imageUrl: StaticImageData;
  accentColor: string;
}

export default function SolutionsAttorney(): JSX.Element {
  const [expertiseVisible, setExpertiseVisible] = useState<boolean>(false);
  const [teamVisible, setTeamVisible] = useState<boolean>(false);
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      const expertiseSection = document.getElementById('expertise');
      if (expertiseSection) {
        const rect = expertiseSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setExpertiseVisible(true);
        }
      }
      const teamSection = document.getElementById('team');
      if (teamSection) {
        const rect = teamSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setTeamVisible(true);
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

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Mr.Tayo Olowookere',
      role: 'The principal partner',
      specialty: 'Corporate Governance',
      yearsExp: '**yrs',
      imageUrl: principalImg,
      accentColor: '#5F5323',
    },
    {
      id: 2,
      name: 'Ehinomen Musa-Agboneni',
      role: 'Associate counsel',
      specialty: 'M&A Transactions',
      yearsExp: '**yrs',
      imageUrl: associateImg,
      accentColor: '#1A305E',
    },
    {
      id: 3,
      name: 'Ruth Enagbonro',
      role: 'Counsel',
      specialty: 'Real Estate Law',
      yearsExp: '**yrs',
      imageUrl: counselImg,
      accentColor: '#5F5323',
    },
    {
      id: 4,
      name: 'Veronica Hembaor',
      role: 'Litigation Officer',
      specialty: 'Pan-African Expansion',
      yearsExp: '**yrs',
      imageUrl: litigationImg,
      accentColor: '#5F5323',
    },
    {
      id: 5,
      name: 'Oyenowo David',
      role: 'IT Support',
      specialty: 'Private Wealth',
      yearsExp: '**yrs',
      imageUrl: itImg,
      accentColor: '#1A305E',
    },
  ];

  return (
    <div className="bg-white font-sans text-[#1A305E] overflow-x-hidden selection:bg-[#5F5323]/30">

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[600px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-screen flex items-center pt-16 sm:pt-20 md:pt-16 lg:pt-20 overflow-hidden">

        {/* Hero background using Next.js Image — same pattern as team member images */}
        <div className="absolute inset-0 z-0">
          <Image
            src={building}
            alt="Lagos Architecture"
            fill
            priority
            className="object-cover grayscale brightness-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1A305E]/20 mix-blend-multiply"></div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-6xl mb-32">
            <h2 className="font-serif text-6xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[8rem] 2xl:text-[8rem] leading-[0.85] font-black mt-8 text-white italic">
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

            <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-32">
              <p className="text-white/80 text-base sm:text-lg md:text-lg lg:text-xl font-light tracking-wide leading-relaxed max-w-lg border-l-2 border-[#5F5323] pl-5 sm:pl-6 md:pl-8">
                Precision-engineered legal strategies for the visionaries redefining the West African commercial landscape.
              </p>
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

        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-10 hidden lg:flex flex-col items-center gap-6 md:gap-8 z-20">
          <div className="h-12 md:h-16 w-px bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#5F5323]"></div>
          </div>
        </div>
      </section>

      {/* ========== MEET THE TEAM SECTION ========== */}
      <section
        id="team"
        className="relative py-16 sm:py-20 md:py-28 lg:py-40 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F8F6F0 0%, #FFFEF9 40%, #F0F4FB 100%)',
        }}
      >
        {/* Decorative background geometry */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 opacity-[0.06]"
            style={{
              background: '#1A305E',
              transform: 'rotate(25deg)',
              borderRadius: '2rem',
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #5F5323 30%, #BFA84E 60%, transparent 100%)',
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(circle, #1A305E 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          ></div>
          <div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{ background: '#1A305E' }}
          ></div>
          <div
            className="absolute top-1/3 right-[8%] w-24 h-24 rounded-full opacity-10 hidden lg:block"
            style={{ border: '2px solid #5F5323' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ---- Section Header ---- */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-28">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-8 h-px bg-[#5F5323]"></div>
                </div>
                <h2
                  className="font-serif font-black text-[#1A305E] leading-[0.9]"
                  style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
                >
                  Meet the <br />
                  <span
                    style={{
                      WebkitTextStroke: '2px #1A305E',
                      color: 'transparent',
                    }}
                  >
                    Team.
                  </span>
                </h2>
              </div>
              <div className="lg:max-w-xs">
                <p className="text-[#1A305E]/55 font-light text-sm sm:text-base md:text-lg leading-relaxed border-l-2 border-[#5F5323]/40 pl-4">
                  Five seasoned minds united by one mandate — to construct advantage for our clients at every tier of the commercial landscape.
                </p>
              </div>
            </div>
          </div>

          {/* ---- Team Hierarchy ---- */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* ── ROW 1: LEADER — split layout ── */}
            <div
              className={`group w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{
                background: 'linear-gradient(135deg, #0B162E 0%, #1A305E 100%)',
                transitionDelay: '0ms',
                boxShadow: activeTeamMember === teamMembers[0].id
                  ? '0 40px 100px rgba(26,48,94,0.35)'
                  : '0 12px 50px rgba(26,48,94,0.15)',
              }}
              onMouseEnter={() => setActiveTeamMember(teamMembers[0].id)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              {/* Top gold line */}
              <div
                className="w-full h-[3px]"
                style={{ background: 'linear-gradient(90deg, #BFA84E 0%, #5F5323 60%, transparent 100%)' }}
              ></div>

              <div className="flex flex-col lg:flex-row">

                {/* ── LEFT: Text content panel ── */}
                <div className="relative flex flex-col justify-between p-8 sm:p-10 lg:p-14 lg:w-[55%] xl:w-[52%] flex-shrink-0">

                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #BFA84E 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  ></div>

                  <div
                    className="absolute bottom-4 right-4 font-serif font-black select-none pointer-events-none"
                    style={{
                      fontSize: 'clamp(7rem, 15vw, 12rem)',
                      lineHeight: 1,
                      color: 'rgba(255,255,255,0.03)',
                      letterSpacing: '-0.05em',
                    }}
                  >
                    01
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8 sm:mb-10 lg:mb-16">
                      <div
                        className="px-3 py-1.5 rounded-sm"
                        style={{ background: 'rgba(191,168,78,0.15)', border: '1px solid rgba(191,168,78,0.3)' }}
                      >
                        <span className="text-[#F5E196] text-[8px] sm:text-[9px] font-black uppercase tracking-[0.45em]">
                          ★ Founding Partner
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3 sm:mb-4">
                      <div className="h-px w-10 bg-[#BFA84E]"></div>
                      <span className="text-[#BFA84E] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.45em]">
                        {teamMembers[0].role}
                      </span>
                    </div>
                    <h3
                      className="font-serif text-white font-black leading-[0.88] mb-6 sm:mb-8"
                      style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)' }}
                    >
                      {teamMembers[0].name}
                    </h3>

                    <div
                      className="h-px bg-[#5F5323] mb-6 sm:mb-8 transition-all duration-700"
                      style={{ width: activeTeamMember === teamMembers[0].id ? '100%' : '3rem' }}
                    ></div>

                    <p className="text-white/50 font-light text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                      The founding intelligence behind every mandate. Structuring governance frameworks and M&amp;A architectures for Pan-African enterprises for over two decades.
                    </p>
                  </div>

                  <div className="relative z-10 mt-10 sm:mt-12 lg:mt-16 flex flex-wrap gap-6 sm:gap-8 items-end">
                    <div>
                      <span className="font-serif font-black text-[#BFA84E]" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                        {teamMembers[0].yearsExp}
                      </span>
                      <p className="text-white/30 text-[8px] uppercase tracking-[0.3em] mt-0.5">Experience</p>
                    </div>
                    <div
                      className="px-4 py-3 rounded-sm"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      
                    </div>
                    <a
                      href="/contact"
                      className="ml-auto flex items-center gap-3 group/btn"
                    >
                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-white/40 group-hover/btn:text-[#BFA84E] transition-colors">
                        Connect
                      </span>
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#5F5323]"
                        style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <span className="material-symbols-outlined text-white text-sm">east</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* ── RIGHT: Full photo using Next.js Image ── */}
                <div className="relative lg:flex-1 overflow-hidden" style={{ minHeight: '360px' }}>
                  {/* Fade from left */}
                  <div
                    className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, #0F1F45, transparent)' }}
                  ></div>
                  {/* Fade bottom on mobile */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none lg:hidden"
                    style={{ background: 'linear-gradient(to top, #0B162E, transparent)' }}
                  ></div>
                  <Image
                    src={teamMembers[0].imageUrl}
                    alt={teamMembers[0].name}
                    fill
                    className="transition-transform duration-1000 group-hover:scale-105 object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

              </div>
            </div>

            {/* ── Connector visual ── */}
            <div className="relative flex-col items-center py-2 hidden sm:flex">
              <div className="flex items-center gap-4 w-full justify-center">
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(95,83,35,0.3))' }}></div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5F5323]"></div>
                  <span className="text-[#5F5323] text-[8px] font-black uppercase tracking-[0.4em]">The Team</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5F5323]"></div>
                </div>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(95,83,35,0.3), transparent)' }}></div>
              </div>
            </div>

            {/* ── ROW 2: 4 team members grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {teamMembers.slice(1).map((member, index) => (
                <div
                  key={member.id}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
                    teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                  style={{
                    transitionDelay: teamVisible ? `${(index + 1) * 100}ms` : '0ms',
                    height: 'clamp(340px, 38vw, 460px)',
                    boxShadow: activeTeamMember === member.id
                      ? '0 28px 70px rgba(26,48,94,0.22)'
                      : '0 6px 30px rgba(26,48,94,0.09)',
                    transform: activeTeamMember === member.id ? 'translateY(-6px)' : 'translateY(0)',
                  }}
                  onMouseEnter={() => setActiveTeamMember(member.id)}
                  onMouseLeave={() => setActiveTeamMember(null)}
                >
                  {/* Next.js Image — fill the card */}
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 z-10"
                    style={{
                      background: activeTeamMember === member.id
                        ? 'linear-gradient(to top, rgba(10,22,50,0.97) 0%, rgba(10,22,50,0.55) 50%, rgba(10,22,50,0.1) 100%)'
                        : 'linear-gradient(to top, rgba(10,22,50,0.92) 0%, rgba(10,22,50,0.35) 55%, transparent 100%)',
                    }}
                  ></div>

                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 z-20"
                    style={{
                      background: index % 2 === 0
                        ? 'linear-gradient(90deg, #BFA84E, transparent)'
                        : 'linear-gradient(90deg, #1A305E, #5F5323, transparent)',
                    }}
                  ></div>

                  {/* Member number watermark */}
                  <div
                    className="absolute top-4 right-4 font-serif font-black select-none z-20"
                    style={{ fontSize: '5rem', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}
                  >
                    0{member.id}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20">
                    <span className="text-[#BFA84E] text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] block mb-1.5">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-white font-black text-lg sm:text-xl leading-tight">
                      {member.name}
                    </h3>

                    <div
                      className="my-3 h-px bg-[#5F5323] transition-all duration-700"
                      style={{ width: activeTeamMember === member.id ? '100%' : '2rem' }}
                    ></div>

                  

                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: activeTeamMember === member.id ? '70px' : '0px',
                        opacity: activeTeamMember === member.id ? 1 : 0,
                      }}
                    >
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                        <span className="text-white/35 text-[8px] uppercase tracking-[0.3em]">Experience</span>
                        <span className="text-[#BFA84E] font-black text-sm">{member.yearsExp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXPERTISE SECTION ========== */}
      <section id="expertise" className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A305E]/[0.02] -skew-x-12 translate-x-1/3 hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-12 md:mb-16 lg:mb-24 gap-6 sm:gap-8">
            <div className="w-full lg:w-2/3 text-center md:text-left">
              <span className="text-[#5F5323] text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">
                Core Competencies
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1A305E]">
                Featured Expertise
              </h3>
            </div>
            <div className="w-full lg:w-1/3 text-center md:text-left">
              <p className="text-[#1A305E]/60 font-light text-sm sm:text-base md:text-lg">
                Modern challenges demand surgical legal precision and structural innovation.
              </p>
            </div>
          </div>

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
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-3xl sm:text-4xl md:text-5xl group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[#1A305E] group-hover:text-[#5F5323] transition-colors text-4xl sm:text-5xl">
                    {card.icon}
                  </span>
                </div>
                <div className="mt-auto">
                  <span className="text-xs sm:text-sm text-[#5F5323] mb-2 block font-medium">
                    {card.number} / {card.label}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-5 md:mb-6 text-[#1A305E] group-hover:text-[#5F5323] transition-colors leading-tight">
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
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-1/2 left-0 w-full rotate-6"
            style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #5F5323, transparent)' }}
          ></div>
          <div
            className="absolute top-1/3 left-0 w-full -rotate-6"
            style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #5F5323, transparent)' }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-black mb-6 sm:mb-8 md:mb-12 leading-tight px-2 italic">
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
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A305E] font-black mb-4 sm:mb-6 md:mb-8 leading-tight italic">
                Want to <br /> Know more?
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <p className="text-[#1A305E]/60 text-sm sm:text-base md:text-lg lg:text-xl font-light mb-6 sm:mb-8 md:mb-12 leading-relaxed">
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