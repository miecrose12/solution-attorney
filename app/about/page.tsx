'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export default function About(): JSX.Element {
  const timelineRef = useRef<HTMLElement>(null);

  const timelineItems: TimelineItem[] = [
    {
      year: '2018',
      title: 'Foundation & Vision',
      description:
        'Solutions was established with a singular vision: to be design precision-engineered legal solutions for Africa\'s most ambitious enterprises.',
    },
    {
      year: '2020',
      title: 'Pan-African Expansion',
      description:
        'Expanded operations across West Africa, establishing ourselves as trusted advisors to multinational corporations and high-net-worth families.',
    },
    {
      year: '2022',
      title: 'Global Recognition',
      description:
        'Recognized as leading legal Solutionists in corporate structuring and wealth preservation, with offices in London and Durban.',
    },
    {
      year: '2024',
      title: 'Innovation & Thought Leadership',
      description:
        'Pioneered AI-integrated legal solutions and published landmark research on African commercial law evolution.',
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;300;400;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');

        :root {
          --color-primary: #1a305e;
          --color-primary-dark: #0b162e;
          --color-accent-gold: #5f5323;
          --color-white: #ffffff;
          --font-sans: 'Public Sans', sans-serif;
          --font-serif: 'Playfair Display', serif;
          --fw-light: 300;
          --fw-regular: 400;
          --fw-bold: 700;
          --fw-black: 900;
          --spacing-xs: 0.5rem;
          --spacing-sm: 1rem;
          --spacing-md: 1.5rem;
          --spacing-lg: 2rem;
          --spacing-xl: 3rem;
          --spacing-2xl: 4rem;
          --spacing-3xl: 5rem;
          --transition-base: all 0.3s ease-in-out;
          --transition-smooth: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }

        @keyframes expandWidth {
          from { width: 0; }
          to { width: 5rem; }
        }

        .glass-card {
          background: rgba(26, 48, 94, 0.03);
          backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(26, 48, 94, 0.1);
          border-radius: 0.5rem;
          transition: var(--transition-smooth);
        }

        .glass-card:hover {
          background: rgba(26, 48, 94, 0.05);
          border-color: var(--color-accent-gold);
          transform: translateY(-12px);
        }
      `}</style>

      {/* ABOUT HERO - WITH PROPER NAVBAR SPACING */}
      <section className="hero hero--about" style={{
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <div className="hero__content hero__content--about" style={{
            maxWidth: '65%',
            zIndex: 10,
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
          }}>
            <span className="hero__badge hero__badge--about" style={{
              color: 'var(--color-accent-gold)',
              fontSize: '0.8rem',
              fontWeight: 'var(--fw-black)',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              display: 'block',
                marginTop: '55px',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
            }}>Our Story</span>
            
            <h1 className="hero__title hero__title--about" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 'var(--fw-black)',
              color: 'var(--color-primary)',
              fontStyle: 'italic',
              lineHeight: '1.1',
              marginBottom: 'var(--spacing-2xl)',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
            }}>
              constitutes of <br /> <span style={{ color: 'var(--color-accent-gold)' }}>Legal Excellence</span>
            </h1>
            
            <p className="hero__description hero__description--about" style={{
              color: 'var(--color-primary)',
              fontSize: 'clamp(1rem, 3vw, 1.125rem)',
              fontWeight: 'var(--fw-light)',
              lineHeight: '1.8',
              borderLeft: '3px solid var(--color-accent-gold)',
              paddingLeft: 'var(--spacing-lg)',
              marginBottom: 0,
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.5s forwards',
              maxWidth: '55rem'
            }}>
              Since 2018, Solutions has been at the forefront of legal innovation in Africa, crafting bespoke solutions for the continent's most ambitious enterprises and forward-thinking leaders.
            </p>
          </div>
        </div>
        
        <div className="hero__geometric" style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          pointerEvents: 'none'
        }}>
          <div className="hero__geometric-item hero__geometric-item--1" style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            border: '2px solid rgba(95, 83, 35, 0.15)',
            borderRadius: '50%',
            top: '5%',
            right: '8%',
            opacity: 0.8,
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div className="hero__geometric-item hero__geometric-item--2" style={{
            position: 'absolute',
            width: '220px',
            height: '220px',
            border: '2px dashed rgba(95, 83, 35, 0.15)',
            borderRadius: '40%',
            bottom: '15%',
            right: '22%',
            opacity: 0.8,
            animation: 'float 6s ease-in-out infinite 1s'
          }}></div>
          <div className="hero__geometric-item hero__geometric-item--3" style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            border: '2px solid rgba(95, 83, 35, 0.15)',
            borderRadius: '30%',
            top: '35%',
            right: '2%',
            opacity: 0.8,
            animation: 'float 6s ease-in-out infinite 2s'
          }}></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="expertise" style={{ 
        marginTop: '0',
        position: 'relative',
        padding: 'var(--spacing-3xl) 0',
        background: 'var(--color-white)',
        opacity: 0,
        animation: 'fadeIn 0.8s ease-out forwards'
      }}>
        <div className="container" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <div className="expertise__header" style={{ marginBottom: '3rem' }}>
            <div className="expertise__header-content">
              <h2 className="expertise__title" style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'var(--fw-black)',
                color: 'var(--color-primary)',
                fontStyle: 'italic',
                lineHeight: '1.2'
              }}>Our Philosophy</h2>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                title: 'Precision',
                description: 'Every detail matters. We engineer solutions with surgical accuracy, leaving nothing to chance.',
              },
              {
                title: 'Innovation',
                description: 'We don\'t follow trends—we set them. Leveraging technology and creative thinking for breakthrough results.',
              },
              {
                title: 'Integrity',
                description: 'Trust is earned through consistent, transparent, and principled practice. It\'s our foundation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '2rem',
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease-out ${0.3 + index * 0.1}s forwards`,
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 'var(--fw-black)',
                  color: 'var(--color-accent-gold)',
                  marginBottom: '1rem',
                  fontStyle: 'italic',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--color-primary)',
                  opacity: 0.7,
                  lineHeight: 1.8,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="timeline-section"
        ref={timelineRef}
        className="timeline"
        style={{
          padding: 'var(--spacing-3xl) 0',
          position: 'relative'
        }}
      >
        <div className="container" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <div className="timeline__header" style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-3xl)',
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out forwards'
          }}>
            <h2 className="timeline__title" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'var(--fw-black)',
              color: 'var(--color-primary)',
              marginBottom: 'var(--spacing-lg)',
              fontStyle: 'italic'
            }}>Our Journey</h2>
          </div>

          <div className="timeline__line" style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '1px',
            height: '100%',
            background: 'linear-gradient(180deg, transparent, var(--color-accent-gold), transparent)',
            transform: 'translateX(-50%)',
            pointerEvents: 'none'
          }}></div>

          <div className="timeline__content" style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline__item" style={{
                marginBottom: 'var(--spacing-3xl)',
                opacity: 0,
                animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s forwards`,
                position: 'relative'
              }}>
                <div style={{
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  top: '20px',
                  width: '16px',
                  height: '16px',
                  background: 'var(--color-accent-gold)',
                  border: '3px solid var(--color-white)',
                  borderRadius: '50%',
                  transform: 'translateX(-50%)',
                  transition: 'var(--transition-base)',
                  zIndex: 10
                }}></div>
                
                <div className="timeline__item-content" style={{
                  padding: 'var(--spacing-2xl)',
                  background: 'rgba(26, 48, 94, 0.03)',
                  border: '1px solid rgba(26, 48, 94, 0.1)',
                  borderRadius: '0.5rem',
                  marginLeft: index % 2 === 0 ? 0 : '50%',
                  marginRight: index % 2 === 0 ? '50%' : 0,
                  transition: 'var(--transition-smooth)'
                }}>
                  <div className="timeline__year" style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    fontWeight: 'var(--fw-black)',
                    color: 'var(--color-accent-gold)',
                    marginBottom: 'var(--spacing-sm)',
                    fontStyle: 'italic'
                  }}>{item.year}</div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.2rem', 
                    fontWeight: 'var(--fw-bold)', 
                    marginBottom: '0.5rem', 
                    color: 'var(--color-primary)' 
                  }}>
                    {item.title}
                  </h3>
                  <p className="timeline__text" style={{
                    color: 'var(--color-primary)',
                    opacity: 0.7,
                    fontWeight: 'var(--fw-light)',
                    lineHeight: 1.8
                  }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="manifesto" style={{
        position: 'relative',
        padding: 'var(--spacing-3xl) 0',
        background: 'var(--color-primary-dark)',
        overflow: 'hidden',
        opacity: 0,
        animation: 'fadeIn 0.8s ease-out forwards'
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--color-accent-gold), transparent)',
          pointerEvents: 'none',
          top: '50%',
          transform: 'rotate(6deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--color-accent-gold), transparent)',
          pointerEvents: 'none',
          top: '33.33%',
          transform: 'rotate(-6deg)'
        }}></div>
        
        <div className="container" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <div className="manifesto__content" style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 10
          }}>
            <h2 className="manifesto__quote" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'var(--fw-black)',
              color: 'var(--color-white)',
              marginBottom: 'var(--spacing-2xl)',
              lineHeight: '1.4',
              fontStyle: 'italic',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
            }}>
              "We don't build walls—<br />
              <span style={{ color: 'var(--color-accent-gold)' }}>we scale bridges</span> between vision and reality."
            </h2>
            <div className="manifesto__divider" style={{
              width: '5rem',
              height: '1px',
              background: 'var(--color-accent-gold)',
              margin: '0 auto var(--spacing-2xl)',
              opacity: 0,
              animation: 'expandWidth 0.8s ease-out 0.4s forwards'
            }}></div>
            <p className="manifesto__attribution" style={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontWeight: 'var(--fw-light)',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5em',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
            }}>Our Commitment</p>
          </div>
        </div>
      </section>

      {/* Comprehensive Mobile Responsive Styles */}
      <style jsx>{`
        /* Large Desktop (1440px+) */
        @media (min-width: 1440px) {
          .hero--about {
            padding-top: 10rem;
          }
        }

        /* Desktop/Laptop (1024px - 1439px) */
        @media (max-width: 1439px) {
          .hero--about {
            padding-top: 7rem;
          }
        }

        /* Tablet Landscape (900px - 1024px) */
        @media (max-width: 1024px) {
          .hero--about {
            padding-top: 6rem !important;
            min-height: 60vh !important;
          }
          
          .hero--about .hero__geometric {
            opacity: 0.5;
            width: 40%;
          }
          
          .hero--about .hero__content--about {
            max-width: 75% !important;
          }

          .hero__geometric-item--1 {
            width: 280px !important;
            height: 280px !important;
          }

          .hero__geometric-item--2 {
            width: 180px !important;
            height: 180px !important;
          }

          .hero__geometric-item--3 {
            width: 220px !important;
            height: 220px !important;
          }
        }

        /* Tablet Portrait (768px - 899px) */
        @media (max-width: 899px) {
          .hero--about {
            padding-top: 5rem !important;
            padding-bottom: 3rem !important;
          }

          .hero--about .hero__geometric {
            display: none;
          }
          
          .hero--about .hero__content--about {
            max-width: 100% !important;
          }

          .expertise, .timeline, .manifesto {
            padding: var(--spacing-2xl) 0 !important;
          }

          .timeline__line {
            left: 30px !important;
          }

          .timeline__item > div:first-child {
            left: 30px !important;
          }

          .timeline__item-content {
            margin-left: 70px !important;
            margin-right: 0 !important;
          }

          .container {
            padding: 0 1.5rem !important;
          }
        }

        /* Mobile Landscape / Small Tablet (640px - 767px) */
        @media (max-width: 767px) {
          .hero--about {
            min-height: auto !important;
            padding-top: 4.5rem !important;
            padding-bottom: 2.5rem !important;
          }

          .hero__badge--about {
            font-size: 0.7rem !important;
            letter-spacing: 0.3em !important;
            margin-bottom: var(--spacing-md) !important;
          }

          .hero__title--about {
            margin-bottom: var(--spacing-xl) !important;
          }

          .hero__description--about {
            padding-left: var(--spacing-md) !important;
            font-size: 1rem !important;
          }

          .expertise__title,
          .timeline__title {
            font-size: clamp(2rem, 8vw, 2.5rem) !important;
          }

          .glass-card {
            padding: 1.5rem !important;
          }

          .timeline__line {
            left: 24px !important;
          }

          .timeline__item > div:first-child {
            left: 24px !important;
            width: 14px !important;
            height: 14px !important;
            top: 16px !important;
          }

          .timeline__item-content {
            margin-left: 60px !important;
            padding: var(--spacing-lg) !important;
          }

          .timeline__year {
            font-size: 1.25rem !important;
          }

          .manifesto__quote {
            font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
            margin-bottom: var(--spacing-xl) !important;
          }
        }

        /* Mobile Portrait (480px - 639px) */
        @media (max-width: 639px) {
          .hero--about {
            padding-top: 4rem !important;
            padding-bottom: 2rem !important;
          }

          .container {
            padding: 0 1.25rem !important;
          }

          .hero__badge--about {
            font-size: 0.65rem !important;
            margin-bottom: var(--spacing-sm) !important;
          }

          .hero__description--about {
            border-left-width: 2px !important;
            padding-left: var(--spacing-sm) !important;
          }

          .expertise, .timeline, .manifesto {
            padding: var(--spacing-xl) 0 !important;
          }

          .expertise__header,
          .timeline__header {
            margin-bottom: 2rem !important;
          }

          .glass-card {
            padding: 1.25rem !important;
          }

          .timeline__item {
            margin-bottom: var(--spacing-2xl) !important;
          }

          .timeline__item-content {
            padding: var(--spacing-md) !important;
          }

          .manifesto {
            padding: var(--spacing-2xl) 0 !important;
          }

          .manifesto__quote br {
            display: none;
          }
        }

        /* Small Mobile (320px - 479px) */
        @media (max-width: 479px) {
          .hero--about {
            padding-top: 3.5rem !important;
            padding-bottom: 1.5rem !important;
          }

          .container {
            padding: 0 1rem !important;
          }

          .hero__badge--about {
            font-size: 0.6rem !important;
            letter-spacing: 0.2em !important;
          }

          .hero__title--about {
            margin-bottom: var(--spacing-lg) !important;
          }

          .hero__description--about {
            padding-left: 0.75rem !important;
          }

          .timeline__line {
            left: 16px !important;
          }

          .timeline__item > div:first-child {
            left: 16px !important;
            width: 12px !important;
            height: 12px !important;
            border-width: 2px !important;
            top: 12px !important;
          }

          .timeline__item-content {
            margin-left: 44px !important;
            padding: 1rem !important;
          }

          .timeline__year {
            font-size: 1.1rem !important;
            margin-bottom: 0.5rem !important;
          }

          .timeline__item-content h3 {
            font-size: 1rem !important;
          }

          .manifesto__attribution {
            font-size: 0.75rem !important;
            letter-spacing: 0.3em !important;
          }

          .glass-card h3 {
            font-size: 1.25rem !important;
          }

          .glass-card p {
            font-size: 0.9rem !important;
          }
        }

        /* Extra Small Mobile (< 320px) */
        @media (max-width: 319px) {
          .hero--about {
            padding-top: 3rem !important;
          }

          .container {
            padding: 0 0.75rem !important;
          }

          .timeline__item-content {
            margin-left: 36px !important;
            padding: 0.75rem !important;
          }

          .glass-card {
            padding: 1rem !important;
          }
        }

        /* Hover effects - disable on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .glass-card:hover {
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}