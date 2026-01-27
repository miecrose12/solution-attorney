'use client';

import React, { useState, useEffect } from 'react';

interface InsightArticle {
  icon: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function InsightsPage() {
  const [email, setEmail] = useState('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCards([0, 1, 2, 3]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const insightArticles: InsightArticle[] = [
    {
      icon: 'article',
      category: 'Commercial Law',
      title: 'The Evolution of African Corporate Law in 2024',
      excerpt:
        'Explore how regulatory frameworks across Africa are adapting to modern business realities.',
      date: 'January 2024',
    },
    {
      icon: 'trending_up',
      category: 'Market Trends',
      title: 'Wealth Preservation in Volatile Markets',
      excerpt:
        'Strategic approaches to protecting and growing assets in dynamic economic environments.',
      date: 'December 2023',
    },
    {
      icon: 'home_work',
      category: 'Real Estate',
      title: 'Lagos Real Estate: Investment Opportunities & Risks',
      excerpt:
        'A comprehensive analysis of Lagos\'s property market from title perfection to financing.',
      date: 'November 2023',
    },
    {
      icon: 'public',
      category: 'Regulation',
      title: 'Cross-Border Compliance: Your Global Checklist',
      excerpt:
        'Navigate multi-jurisdictional requirements with our practical guide.',
      date: 'October 2023',
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

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
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
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
      `}</style>

      {/* HERO SECTION - CREATIVE KNOWLEDGE HUB */}
      <section style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '0',
        paddingBottom: '4rem',
        position: 'relative',
        marginTop: '4rem',
        overflow: 'hidden'
      }}>
        {/* Decorative Knowledge Pattern */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(95, 83, 35, 0.03) 100%)',
          opacity: 0.6,
          pointerEvents: 'none'
        }}></div>

        {/* Vertical Lines Pattern */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '35%',
          height: '100%',
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 25px,
            rgba(95, 83, 35, 0.05) 25px,
            rgba(95, 83, 35, 0.05) 27px
          )`,
          pointerEvents: 'none',
          opacity: 0,
          animation: 'fadeIn 0.8s ease-out 0.5s forwards'
        }}></div>

        {/* Floating Book Icons */}
        <div style={{
          position: 'absolute',
          right: '8%',
          top: '15%',
          width: '80px',
          height: '80px',
          border: '3px solid rgba(95, 83, 35, 0.15)',
          borderRadius: '8px',
          animation: 'float 6s ease-in-out infinite',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)'
        }}>
          <span className="material-symbols-outlined" style={{
            fontSize: '2.5rem',
            color: 'var(--color-accent-gold)',
            opacity: 0.4
          }}>menu_book</span>
        </div>

        <div style={{
          position: 'absolute',
          right: '15%',
          bottom: '20%',
          width: '60px',
          height: '60px',
          border: '3px solid rgba(26, 48, 94, 0.15)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite 1s',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)'
        }}>
          <span className="material-symbols-outlined" style={{
            fontSize: '2rem',
            color: 'var(--color-primary)',
            opacity: 0.4
          }}>lightbulb</span>
        </div>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            maxWidth: '65%',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
          }}>
            <span style={{
              color: 'var(--color-accent-gold)',
              fontSize: '0.75rem',
              fontWeight: 'var(--fw-black)',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              display: 'block',
              marginTop: '46px',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
            }}></span>
            
            <h1 style={{
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
              Latest <br />
              <span style={{ color: 'var(--color-accent-gold)' }}>Insights</span>
            </h1>
            
            <p style={{
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
              Thought leadership and practical guidance on commercial law, wealth strategies, and African market dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* INSIGHTS GRID - MAGAZINE STYLE */}
      <section style={{
        padding: 'var(--spacing-3xl) 0',
        background: 'var(--color-white)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: 'var(--spacing-3xl)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <span style={{
                color: 'var(--color-accent-gold)',
                fontSize: '0.7rem',
                fontWeight: 'var(--fw-black)',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 'var(--spacing-md)'
              }}>Featured Articles</span>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 'var(--fw-black)',
                color: 'var(--color-primary)',
                fontStyle: 'italic'
              }}>
                Strategic <span style={{ color: 'var(--color-accent-gold)' }}>Perspectives</span>
              </h2>
            </div>
          </div>

          {/* Insights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: 'var(--spacing-3xl)'
          }}>
            {insightArticles.map((article, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem',
                  border: '1px solid rgba(26, 48, 94, 0.1)',
                  borderRadius: '0.75rem',
                  background: 'var(--color-white)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  opacity: animatedCards.includes(index) ? 1 : 0,
                  transform: animatedCards.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                  transitionDelay: `${index * 0.1}s`,
                  boxShadow: hoveredCard === index 
                    ? '0 20px 60px rgba(26, 48, 94, 0.12)' 
                    : '0 4px 20px rgba(26, 48, 94, 0.05)'
                }}
              >
                {/* Top Bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: hoveredCard === index ? '100%' : '0%',
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--color-accent-gold), var(--color-primary))',
                  transition: 'width 0.5s ease-out',
                  transformOrigin: 'left'
                }}></div>

                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  {/* Icon */}
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: hoveredCard === index 
                      ? 'linear-gradient(135deg, var(--color-accent-gold), #6f6630)' 
                      : 'rgba(95, 83, 35, 0.1)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s ease-out',
                    flexShrink: 0
                  }}>
                    <span className="material-symbols-outlined" style={{
                      fontSize: '1.5rem',
                      color: hoveredCard === index ? 'var(--color-white)' : 'var(--color-accent-gold)',
                      transition: 'color 0.3s ease-out'
                    }}>{article.icon}</span>
                  </div>

                  {/* Category */}
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 'var(--fw-black)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                    color: 'var(--color-accent-gold)'
                  }}>{article.category}</span>
                </div>

                {/* Content */}
                <div style={{ flex: 1, marginBottom: 'var(--spacing-lg)' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.375rem',
                    fontWeight: 'var(--fw-black)',
                    color: hoveredCard === index ? 'var(--color-accent-gold)' : 'var(--color-primary)',
                    marginBottom: 'var(--spacing-md)',
                    lineHeight: '1.3',
                    transition: 'color 0.3s ease-out'
                  }}>
                    {article.title}
                  </h3>

                  <p style={{
                    color: 'var(--color-primary)',
                    opacity: 0.7,
                    fontWeight: 'var(--fw-light)',
                    lineHeight: '1.8',
                    fontSize: '0.95rem'
                  }}>
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 'var(--spacing-lg)',
                  borderTop: '1px solid rgba(26, 48, 94, 0.1)'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-primary)',
                    opacity: 0.5,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em'
                  }}>{article.date}</span>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: hoveredCard === index ? 1 : 0,
                    transform: hoveredCard === index ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.3s ease-out'
                  }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 'var(--fw-black)',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent-gold)'
                    }}>Read More</span>
                    <span className="material-symbols-outlined" style={{
                      fontSize: '1rem',
                      color: 'var(--color-accent-gold)'
                    }}>arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA - ELEGANT DARK */}
      <section style={{
        padding: 'var(--spacing-3xl) 0',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(95, 83, 35, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 8s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '8%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(95, 83, 35, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 6s ease-in-out infinite 1s',
          pointerEvents: 'none'
        }}></div>

        {/* Diagonal Lines */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.02) 100px,
              rgba(255, 255, 255, 0.02) 101px
            )
          `,
          pointerEvents: 'none'
        }}></div>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3xl)',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: 'var(--spacing-3xl) 0'
          }}>
            {/* Left Side - Text */}
            <div style={{
              flex: 1,
              opacity: 0,
              animation: 'slideInLeft 0.8s ease-out 0.2s forwards',
              textAlign: 'center',
              maxWidth: '600px'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 'var(--fw-black)',
                color: 'var(--color-white)',
                fontStyle: 'italic',
                lineHeight: '1.2',
                marginBottom: 'var(--spacing-md)'
              }}>
                Subscribe to our <br />
                <span style={{ color: 'var(--color-accent-gold)' }}>newsletter</span>
              </h2>
              
              <div style={{
                width: '5rem',
                height: '2px',
                background: 'var(--color-accent-gold)',
                margin: '0 auto var(--spacing-lg)'
              }}></div>
            </div>

            {/* Right Side - Newsletter Content */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
              opacity: 0,
              animation: 'slideInRight 0.8s ease-out 0.4s forwards',
              width: '100%',
              maxWidth: '600px'
            }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.125rem',
                fontWeight: 'var(--fw-light)',
                lineHeight: '1.8',
                textAlign: 'center'
              }}>
                Get insights directly to your inbox. Curated legal strategies and market analysis from our architects.
              </p>

              <div style={{
                display: 'flex',
                gap: 'var(--spacing-md)',
                flexDirection: 'column',
                width: '100%'
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  style={{
                    flex: 1,
                    padding: '1.125rem 1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s ease-out',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-gold)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
                
                <button 
                  onClick={handleNewsletterSubmit}
                  style={{
                    padding: '1.125rem 2.5rem',
                    background: 'var(--color-accent-gold)',
                    color: 'var(--color-white)',
                    fontWeight: 'var(--fw-black)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s ease-out',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#6f6630';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(95, 83, 35, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-accent-gold)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Subscribe Now
                </button>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-sm)',
                marginTop: 'var(--spacing-md)'
              }}>
                <span className="material-symbols-outlined" style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.4)'
                }}>lock</span>
                <span style={{
                  fontSize: '0.7rem',
                  color: 'rgba(255, 255, 255, 0.4)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase'
                }}>Your data is secure and never shared</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section:first-of-type > div > div {
            max-width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          section:first-of-type {
            min-height: auto !important;
            margin-top: 3rem !important;
            padding-top: 2rem !important;
          }
          
          input[type="email"] {
            width: 100% !important;
          }
          
          button {
            width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          section:first-of-type {
            margin-top: 2.5rem !important;
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
}