'use client';

import { useEffect, useState } from 'react';

interface ScrollAnimationReturn {
  animatedSections: Record<string, boolean>;
  headerBackground: boolean;
  scrollPosition: number;
}

export const useScrollAnimation = (): ScrollAnimationReturn => {
  const [animatedSections, setAnimatedSections] = useState<Record<string, boolean>>({});
  const [headerBackground, setHeaderBackground] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setHeaderBackground(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const id = element.id;
            if (id) {
              setAnimatedSections((prev) => ({
                ...prev,
                [id]: true,
              }));
              observer.unobserve(element);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionIds = [
      'expertise-section',
      'manifesto-section',
      'cta-section',
      'footer-section',
      'timeline-section',
      'services-section',
      'process-section',
      'insights-section',
      'contact-form',
    ];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return {
    animatedSections,
    headerBackground,
    scrollPosition,
  };
};