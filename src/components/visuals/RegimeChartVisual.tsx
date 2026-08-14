import React from 'react';

export const RegimeChartVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span>STATISTICAL REGIME DETECTION</span>
        <span className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#121315]" />
          <span>REGIME SWITCH JUMP</span>
        </span>
      </div>

      {/* SVG Regime Chart */}
      <div className="w-full h-32 relative flex items-center justify-center">
        <svg viewBox="0 0 500 120" className="w-full h-full stroke-[#121315] fill-none overflow-visible">
          {/* Regime Background Shading (High Volatility Zone) */}
          <rect x="220" y="10" width="160" height="90" fill="#121315" fillOpacity="0.06" stroke="none" />
          <text x="230" y="25" fill="#706f6a" fontSize="8" fontFamily="monospace" letterSpacing="1">
            HIGH VOLATILITY REGIME
          </text>

          {/* Grid lines */}
          <line x1="0" y1="30" x2="500" y2="30" stroke="#121315" strokeOpacity="0.1" strokeDasharray="3 3" />
          <line x1="0" y1="60" x2="500" y2="60" stroke="#121315" strokeOpacity="0.1" strokeDasharray="3 3" />
          <line x1="0" y1="90" x2="500" y2="90" stroke="#121315" strokeOpacity="0.1" strokeDasharray="3 3" />

          {/* Price Path with Jump */}
          <path
            d="M 10,80 Q 40,75 70,82 T 130,78 T 190,75 L 220,40 L 250,95 L 280,20 L 310,85 L 340,30 L 380,70 L 420,65 T 490,60"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Jump Points */}
          <circle cx="220" cy="40" r="3" fill="#121315" />
          <circle cx="380" cy="70" r="3" fill="#121315" />
        </svg>
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>MODEL: MARKOV JUMP</span>
        <span>DRAWDOWN CONTROL: ACTIVE</span>
      </div>
    </div>
  );
};
