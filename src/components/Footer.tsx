import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#0f1115] bg-[#0f1115] text-[#f7f5f0] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Identity Stamp */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border border-[#f7f5f0] flex items-center justify-center font-cinzel text-xs font-bold text-[#f7f5f0]">
            TA
          </div>
          <div>
            <p className="font-cinzel text-sm font-semibold tracking-widest uppercase">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-[10px] text-[#a0a7b5] uppercase">
              QUANTITATIVE RESEARCH · ENERGY & COMMODITIES
            </p>
          </div>
        </div>

        {/* Center Registry Mark */}
        <div className="text-center text-[#a0a7b5] text-[10px] tracking-widest uppercase space-y-1">
          <p>SER# {PERSONAL_INFO.serialNumber} · REGISTRY: {PERSONAL_INFO.registryCode}</p>
          <p>STARK BONE STOCK · 350 GSM · EMBOSSED OBSIDIAN FOIL</p>
        </div>

        {/* Right Copyright & Date */}
        <div className="text-right text-[#a0a7b5] text-[10px] uppercase">
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
          <p>KUALA LUMPUR · MALAYSIA</p>
        </div>
      </div>
    </footer>
  );
};
