import React, { useState } from 'react';

export const NaphthaModelVisual: React.FC = () => {
  const [hoverX, setHoverX] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(500, ((e.clientX - rect.left) / rect.width) * 500));
    setHoverX(x);
  };

  const isLPGAdvantaged = hoverX !== null && hoverX >= 240 && hoverX <= 360;

  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none group/chart">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span className="text-[#121315] font-semibold">APAC CRACKER FEEDSTOCK ECONOMICS</span>
        <span className="flex items-center space-x-1.5">
          <span className={`inline-block w-2 h-2 rounded-full ${isLPGAdvantaged ? 'bg-[#991b1b]' : 'bg-[#121315]'}`} />
          <span className={isLPGAdvantaged ? 'text-[#991b1b] font-bold' : ''}>
            {isLPGAdvantaged ? 'FEEDSTOCK: LPG ADVANTAGED' : 'FEEDSTOCK: NAPHTHA BASE'}
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
          {/* Feedstock Switching Threshold (90% Parity) */}
          <line x1="0" y1="60" x2="500" y2="60" stroke="#121315" strokeOpacity="0.25" strokeDasharray="3 3" />
          <text x="10" y="52" fill="#706f6a" fontSize="8" fontFamily="monospace" letterSpacing="1">
            LPG/NAPHTHA 90% PARITY LINE
          </text>

          {/* Crack Spread Curve */}
          <path
            d="M 10,40 Q 70,30 130,55 T 250,75 L 310,85 L 370,45 L 430,35 T 490,40"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Region Shading for Switch Window */}
          <rect x="240" y="60" width="120" height="35" fill="#121315" fillOpacity="0.08" stroke="none" />
          <text x="245" y="80" fill="#121315" fontSize="8" fontFamily="monospace" fontWeight="bold">
            MAX CRACKER SWITCHING
          </text>

          {/* Interactive Crosshair on Hover */}
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
        <span>YIELD SPREAD: +$42/MT</span>
        <span>REGIONAL RUNS: 89.2% AVG</span>
      </div>
    </div>
  );
};
