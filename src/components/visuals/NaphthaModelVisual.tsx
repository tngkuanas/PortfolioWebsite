import React from 'react';

export const NaphthaModelVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span>APAC NAPHTHA / CRACKER BALANCE SHEET</span>
        <span>FEEDSTOCK ECONOMICS</span>
      </div>

      {/* SVG Crack Spread Balance diagram */}
      <div className="w-full h-32 relative flex items-center justify-center">
        <svg viewBox="0 0 500 120" className="w-full h-full stroke-[#121315] fill-none overflow-visible">
          {/* Feedstock Switching Threshold */}
          <line x1="0" y1="60" x2="500" y2="60" stroke="#121315" strokeOpacity="0.2" strokeDasharray="3 3" />
          <text x="10" y="52" fill="#706f6a" fontSize="8" fontFamily="monospace" letterSpacing="1">
            LPG / NAPHTHA SWITCHING PARITY
          </text>

          {/* Crack Spread Curve */}
          <path
            d="M 10,40 Q 70,30 130,55 T 250,75 L 310,85 L 370,45 L 430,35 T 490,40"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Region Annotations */}
          <rect x="240" y="70" width="120" height="25" fill="#121315" fillOpacity="0.08" stroke="none" />
          <text x="245" y="86" fill="#121315" fontSize="8" fontFamily="monospace">
            CRACKER FEEDSTOCK SWITCH
          </text>
        </svg>
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>INPUTS: REFINERY RUNS &amp; SHIPPING FIXTURES</span>
        <span>MARKET: SINGAPORE / NORTH ASIA</span>
      </div>
    </div>
  );
};
