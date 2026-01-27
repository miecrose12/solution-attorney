import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',          // ← corrected: no src/
    './components/**/*.{js,ts,jsx,tsx,mdx}',   // ← corrected: no src/
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a305e',
        'primary-dark': '#0b162e',
        'accent-gold': '#5f5323',
        white: '#ffffff',
        black: '#000000',
        'accent-light': '#f5f1e8',
      },
      fontFamily: {
        sans: "'Public Sans', sans-serif",
        serif: "'Playfair Display', serif",
      },
      fontWeight: {
        light: '300',
        regular: '400',
        bold: '700',
        black: '900',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
        '3xl': '5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out',
        'zoom-in': 'zoomIn 0.8s ease-out',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'expand-width': 'expandWidth 0.8s ease-out forwards',
        'rotate': 'rotate 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          from: { transform: 'scale(1.05)', opacity: '0.8' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        scrollPulse: {
          '0%, 100%': { height: '50%' },
          '50%': { height: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        expandWidth: {
          from: { width: '0' },
          to: { width: '5rem' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
        smooth: '500ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      backdropBlur: {
        xs: '5px',
      },
    },
  },
  plugins: [],
};

export default config;