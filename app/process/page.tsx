'use client';

import React, { useState, useEffect } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function ProcessPage() {
  const [animatedSteps, setAnimatedSteps] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSteps([0, 1, 2, 3]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description:
        'We begin by understanding your vision, challenges, and objectives through comprehensive consultation.',
      icon: 'search',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Our Sulution design tailored solutions with precision, considering all legal and commercial implications.',
      icon: 'architecture',
    },
    {
      number: '03',
      title: 'Implementation & Documentation',
      description:
        'We execute the plan with meticulous attention to detail, preparing all necessary documentation.',
      icon: 'assignment_turned_in',
    },
    {
      number: '04',
      title: 'Review & Optimization',
      description:
        'Continuous review and optimization ensure your solution remains effective and compliant.',
      icon: 'analytics',
    },
  ];

  const benefits = [
    {
      title: 'Transparent Communication',
      desc: 'Clear updates at each phase ensure you\'re always informed.',
    },
    {
      title: 'Custom Solutions',
      desc: 'No templates—every solution is engineered for your specific needs.',
    },
    {
      title: 'Risk Mitigation',
      desc: 'Proactive identification and management of potential challenges.',
    },
    {
      title: 'Long-term Partnership',
      desc: 'We don\'t disappear after handoff—we\'re your ongoing advisors.',
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
          --color-light: #f5f5f5;
          --font-sans: 'Public Sans', sans-serif;
          --font-serif: 'Playfair Display', serif;
          --fw-light: 300;
          --fw-regular: 400;
          --fw-bold: 700;
          --fw-black: 900;
          --spacing-xs: clamp(0.25rem, 1vw, 0.5rem);
          --spacing-sm: clamp(0.5rem, 2vw, 1rem);
          --spacing-md: clamp(0.75rem, 2.5vw, 1.5rem);
          --spacing-lg: clamp(1rem, 3vw, 2rem);
          --spacing-xl: clamp(1.5rem, 4vw, 3rem);
          --spacing-2xl: clamp(2rem, 5vw, 4rem);
          --spacing-3xl: clamp(2.5rem, 6vw, 5rem);
          --transition-base: all 0.3s ease-in-out;
          --transition-smooth: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          --container-padding: clamp(1rem, 5vw, 2rem);
          --max-width: 1280px;
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

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }

        @keyframes flowPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes drawLine {
          from { width: 0; }
          to { width: 100%; }
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
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(95, 83, 35, 0.12);
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

        /* Responsive Container */
        .responsive-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          width: 100%;
        }
      `}</style>

      {/* HERO SECTION - LIGHT WITH FLOW DIAGRAM */}
      <section style={{
        background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
        minHeight: 'clamp(50vh, 70vh, 80vh)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(3rem, 8vw, 4rem)',
        paddingBottom: 'var(--spacing-2xl)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          opacity: 0.03,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 50px, var(--color-accent-gold) 50px, var(--color-accent-gold) 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, var(--color-accent-gold) 50px, var(--color-accent-gold) 51px)
          `,
          pointerEvents: 'none'
        }}></div>

        <div className="responsive-container" style={{
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            maxWidth: '100%',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
          }}>
            <span style={{
              color: 'var(--color-accent-gold)',
              fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)',
              fontWeight: 'var(--fw-black)',
              letterSpacing: 'clamp(0.2em, 0.5em, 0.5em)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '60px',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
            }}></span>
            
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 7vw, 4.5rem)',
              fontWeight: 'var(--fw-black)',
              color: 'var(--color-primary)',
              fontStyle: 'italic',
              lineHeight: '1.1',
              marginBottom: 'var(--spacing-lg)',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
            }}>
              Our <br />
              <span style={{ color: 'var(--color-accent-gold)' }}>Process</span>
            </h1>
            
            <p style={{
              color: 'var(--color-primary)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
              fontWeight: 'var(--fw-light)',
              lineHeight: '1.8',
              borderLeft: '3px solid var(--color-accent-gold)',
              paddingLeft: 'var(--spacing-md)',
              marginBottom: 0,
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.5s forwards',
              maxWidth: 'min(55rem, 90%)'
            }}>
              A four-phase methodology engineered to transform your vision into reality with precision and transparency at every step.
            </p>
          </div>
        </div>

        {/* Flow Diagram - Right Side - Hidden on mobile */}
        <div className="flow-diagram" style={{
          position: 'absolute',
          right: 'clamp(2%, 8%, 8%)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(180px, 20vw, 280px)',
          height: 'clamp(180px, 20vw, 280px)',
          pointerEvents: 'none',
          opacity: 0,
          animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
        }}>
          {/* Outer Circle */}
          <div style={{
            position: 'absolute',
            inset: 0,
            border: '2px solid rgba(95, 83, 35, 0.15)',
            borderRadius: '50%',
            animation: 'rotate 30s linear infinite'
          }}></div>
          
          {/* Middle Circle */}
          <div style={{
            position: 'absolute',
            inset: '20px',
            border: '1px dashed rgba(95, 83, 35, 0.2)',
            borderRadius: '50%',
            animation: 'rotate 20s linear infinite reverse'
          }}></div>
          
          {/* Inner Circle */}
          <div style={{
            position: 'absolute',
            inset: '40px',
            border: '2px solid rgba(95, 83, 35, 0.25)',
            borderRadius: '50%',
            animation: 'flowPulse 3s ease-in-out infinite'
          }}></div>

          {/* Center Dot */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(8px, 1.2vw, 12px)',
            height: 'clamp(8px, 1.2vw, 12px)',
            background: 'var(--color-accent-gold)',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(95, 83, 35, 0.4)'
          }}></div>

          {/* Connecting Lines */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 'clamp(60px, 10vw, 100px)',
            height: '1px',
            background: 'linear-gradient(90deg, var(--color-accent-gold), transparent)',
            transform: 'translate(-50%, -50%) rotate(0deg)',
            transformOrigin: 'left center',
            animation: 'rotate 15s linear infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 'clamp(60px, 10vw, 100px)',
            height: '1px',
            background: 'linear-gradient(90deg, var(--color-accent-gold), transparent)',
            transform: 'translate(-50%, -50%) rotate(90deg)',
            transformOrigin: 'left center',
            animation: 'rotate 15s linear infinite'
          }}></div>
        </div>

        {/* Floating Geometric Shapes - Hidden on mobile */}
        <div className="floating-shapes" style={{
          position: 'absolute',
          right: '5%',
          top: '15%',
          width: 'clamp(50px, 8vw, 80px)',
          height: 'clamp(50px, 8vw, 80px)',
          border: '2px solid rgba(95, 83, 35, 0.1)',
          transform: 'rotate(45deg)',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        <div className="floating-shapes" style={{
          position: 'absolute',
          right: '15%',
          bottom: '20%',
          width: 'clamp(40px, 6vw, 60px)',
          height: 'clamp(40px, 6vw, 60px)',
          border: '2px solid rgba(95, 83, 35, 0.12)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite 1s',
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* PROCESS STEPS SECTION */}
      <section style={{
        padding: 'var(--spacing-3xl) 0',
        background: 'var(--color-white)',
        position: 'relative'
      }}>
        <div className="responsive-container">
          <div style={{
            marginBottom: 'var(--spacing-2xl)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 'var(--fw-black)',
              color: 'var(--color-primary)',
              fontStyle: 'italic',
              marginBottom: 'var(--spacing-md)'
            }}>
              Four Phases to Excellence
            </h2>
            <p style={{
              color: 'var(--color-primary)',
              opacity: 0.6,
              fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
              fontWeight: 'var(--fw-light)',
              maxWidth: '600px',
              margin: '0 auto',
              padding: '0 var(--spacing-sm)'
            }}>
              A systematic approach designed for clarity and results
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            position: 'relative'
          }}>
            {processSteps.map((step, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-md)',
                position: 'relative',
                opacity: animatedSteps.includes(index) ? 1 : 0,
                transform: animatedSteps.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${index * 0.15}s`
              }}>
                {/* Step Number Badge */}
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                    fontWeight: 'var(--fw-black)',
                    color: 'var(--color-accent-gold)',
                    fontStyle: 'italic'
                  }}>{step.number}</div>
                </div>

                {/* Icon Container */}
                <div style={{
                  width: 'clamp(3.5rem, 8vw, 4rem)',
                  height: 'clamp(3.5rem, 8vw, 4rem)',
                  background: 'rgba(95, 83, 35, 0.08)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-base)'
                }}>
                  <span className="material-symbols-outlined" style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2rem)',
                    color: 'var(--color-accent-gold)'
                  }}>{step.icon}</span>
                </div>

                {/* Content */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-sm)'
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                    fontWeight: 'var(--fw-black)',
                    color: 'var(--color-primary)',
                    fontStyle: 'italic',
                    lineHeight: '1.3'
                  }}>{step.title}</h3>
                  
                  <div style={{
                    height: '1px',
                    width: 'clamp(2.5rem, 5vw, 3rem)',
                    background: 'var(--color-accent-gold)'
                  }}></div>
                  
                  <p style={{
                    color: 'var(--color-primary)',
                    opacity: 0.7,
                    fontWeight: 'var(--fw-light)',
                    lineHeight: '1.8',
                    fontSize: 'clamp(0.875rem, 2vw, 0.95rem)'
                  }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR PROCESS */}
      <section style={{
        padding: 'var(--spacing-3xl) 0',
        background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
        position: 'relative'
      }}>
        {/* Subtle accent */}
        <div className="skew-accent" style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'rgba(26, 48, 94, 0.02)',
          transform: 'skewX(-12deg) translateX(33.33%)',
          pointerEvents: 'none'
        }}></div>

        <div className="responsive-container" style={{
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 'var(--fw-black)',
              color: 'var(--color-primary)',
              fontStyle: 'italic'
            }}>
              Why Choose Our Process
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease-out ${0.4 + idx * 0.1}s forwards`
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                  fontWeight: 'var(--fw-black)',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--spacing-sm)',
                  fontStyle: 'italic'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--color-primary)',
                  opacity: 0.7,
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  lineHeight: '1.8'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section style={{
        position: 'relative',
        padding: 'var(--spacing-3xl) 0',
        background: 'var(--color-primary-dark)',
        overflow: 'hidden'
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
        
        <div className="responsive-container">
          <div style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            padding: '0 var(--spacing-sm)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
              fontWeight: 'var(--fw-black)',
              color: 'var(--color-white)',
              marginBottom: 'var(--spacing-xl)',
              lineHeight: '1.4',
              fontStyle: 'italic',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
            }}>
              "Process without <span style={{ color: 'var(--color-accent-gold)' }}>precision</span> is just procedure."
            </h2>
            <div style={{
              width: 'clamp(3rem, 10vw, 5rem)',
              height: '1px',
              background: 'var(--color-accent-gold)',
              margin: '0 auto var(--spacing-lg)',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
            }}></div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontWeight: 'var(--fw-light)',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)',
              textTransform: 'uppercase',
              letterSpacing: 'clamp(0.2em, 0.5em, 0.5em)',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
            }}>Our Commitment to Excellence</p>
          </div>
        </div>
      </section>

      {/* Enhanced Mobile Responsive Styles */}
      <style jsx>{`
        /* Tablet and below */
        @media (max-width: 1024px) {
          .flow-diagram {
            right: 5% !important;
            width: clamp(150px, 18vw, 220px) !important;
            height: clamp(150px, 18vw, 220px) !important;
          }
        }

        /* Mobile landscape and below */
        @media (max-width: 768px) {
          .flow-diagram,
          .floating-shapes {
            display: none !important;
          }

          .skew-accent {
            display: none !important;
          }

          section:first-of-type {
            min-height: auto !important;
            padding-top: 3rem !important;
            padding-bottom: 2rem !important;
          }

          .glass-card:hover {
            transform: translateY(-4px) !important;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          section:first-of-type {
            padding-top: 2rem !important;
            padding-bottom: 1.5rem !important;
          }

          .glass-card:hover {
            transform: none !important;
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          :root {
            --container-padding: 1rem;
          }
        }

        /* Large screens - prevent excessive scaling */
        @media (min-width: 1920px) {
          .responsive-container {
            max-width: 1600px;
          }

          .flow-diagram {
            width: 300px !important;
            height: 300px !important;
          }
        }

        /* Ultra-wide screens */
        @media (min-width: 2560px) {
          .responsive-container {
            max-width: 1800px;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .glass-card {
            border-width: 2px;
          }
        }

        /* Print styles */
        @media print {
          .flow-diagram,
          .floating-shapes {
            display: none !important;
          }

          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
}