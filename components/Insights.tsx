'use client';

import React from 'react';
import Link from 'next/link';
import { InsightArticle } from '@/types';

interface InsightsProps {
  articles: InsightArticle[];
}

export const Insights: React.FC<InsightsProps> = ({ articles }) => {
  return (
    <section id="insights-section" className="insights py-20 bg-white">
      <div className="container px-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col p-8 border border-primary border-opacity-10 rounded-lg bg-white opacity-0 animate-fade-in-up relative overflow-hidden transition-all duration-500 hover:border-accent-gold hover:shadow-xl hover:-translate-y-2 group"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-gold bg-opacity-10 rounded-lg flex items-center justify-center text-xl text-accent-gold">
                  <span className="material-symbols-outlined">{article.icon}</span>
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-accent-gold">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 mb-4">
                <h3 className="font-serif text-xl font-black text-primary mb-3 leading-tight transition-all duration-300 group-hover:text-accent-gold">
                  {article.title}
                </h3>
                <p className="text-primary text-opacity-70 text-sm font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-primary border-opacity-10">
                <span className="text-xs text-primary text-opacity-50 uppercase tracking-widest">
                  {article.date}
                </span>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-gold no-underline transition-all duration-300 group-hover:gap-3"
                >
                  Read More{' '}
                  <span className="material-symbols-outlined text-base transition-all duration-300">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};