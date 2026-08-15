import React, { useState } from 'react';

export const RegimeChartVisual: React.FC = () => {
  const [hoverX, setHoverX] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(500, ((e.clientX - rect.left) / rect.width) * 500));
    setHoverX(x);
  };

  const isHighVol = hoverX !== null && hoverX >= 220 && hoverX <= 380;

  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none group/chart">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span className="text-[#121315] font-semibold">REGIME SWITCHING JUMP MODEL</span>
        <span className="flex items-center space-x-1.5">
          <span className={`inline-block w-2 h-2 rounded-full transition-colors ${isHighVol ? 'bg-[#991b1b] animate-pulse' : 'bg-[#121315]'}`} />
          <span className={isHighVol ? 'text-[#991b1b] font-bold' : ''}>
            {isHighVol ? 'STATE 2: HIGH VOLATILITY' : 'STATE 1: LOW VOLATILITY'}
          </span>
        </span>
      </div>

      {/* Interactive SVG Chart */}
      <div className="w-full h-32 relative flex items-center justify-center">
        <svg
          viewBox="0 0 500 120"
          className="w-full h-full stroke-[#121315] fill-none overflow-visible cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverX(null)}
        >
          {/* Regime Background Shading (High Volatility Zone) */}
          <rect x="220" y="10" width="160" height="90" fill="#121315" fillOpacity="0.06" stroke="none" />
          <text x="230" y="24" fill="#706f6a" fontSize="8" fontFamily="monospace" letterSpacing="1">
            SHOCK REGIME
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

          {/* Key Jump Points */}
          <circle cx="220" cy="40" r="3" fill="#121315" />
          <circle cx="380" cy="70" r="3" fill="#121315" />

          {/* Interactive Crosshair & Value Indicator on Hover */}
          {hoverX !== null && (
            <g>
              <line x1={hoverX} y1="10" x2={hoverX} y2="105" stroke="#121315" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx={hoverX} cy="60" r="3.5" fill="#121315" />
            </g>
          )}
        </svg>
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>PARAM: λ = 0.14 · σ₂/σ₁ = 3.2x</span>
        <span>DYNAMIC HEDGE: ACTIVE</span>
      </div>
    </div>
  );
};
