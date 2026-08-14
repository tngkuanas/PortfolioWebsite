import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bateman-paper-texture py-12 px-8 sm:px-14 md:px-20 lg:px-24 border-t border-[#121315] font-garamond select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm tracking-[0.1em] text-[#706f6a] gap-4">
        <div className="bateman-letterpress uppercase">
          TENGKU ANAS ZAINAL ABIDIN &nbsp;·&nbsp; {PERSONAL_INFO.location}
        </div>
        <div className="font-mono text-[10px] sm:text-xs tracking-[0.18em] uppercase">
          2026 QUANTITATIVE &amp; DATA SCIENCE ARCHIVE
        </div>
      </div>
    </footer>
  );
};
