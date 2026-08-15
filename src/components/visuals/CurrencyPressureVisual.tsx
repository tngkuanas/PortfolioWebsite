import React, { useState } from 'react';

export const CurrencyPressureVisual: React.FC = () => {
  const [hoverX, setHoverX] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(500, ((e.clientX - rect.left) / rect.width) * 500));
    setHoverX(x);
  };

  const isStressZone = hoverX !== null && hoverX >= 260 && hoverX <= 340;

  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none group/chart">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span className="text-[#121315] font-semibold">EXCHANGE MARKET PRESSURE (EMP)</span>
        <span className="flex items-center space-x-1.5">
          <span className={`inline-block w-2 h-2 rounded-full transition-colors ${isStressZone ? 'bg-[#991b1b] animate-pulse' : 'bg-[#121315]'}`} />
          <span className={isStressZone ? 'text-[#991b1b] font-bold' : ''}>
            {isStressZone ? 'ALERT: +2.6σ PRESSURE' : 'NORMAL STRESS REGIME'}
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
          {/* Pressure Threshold Line (+2σ) */}
          <line x1="0" y1="35" x2="500" y2="35" stroke="#121315" strokeOpacity="0.35" strokeDasharray="4 4" />
          <text x="10" y="27" fill="#706f6a" fontSize="8" fontFamily="monospace" letterSpacing="1">
            CRITICAL THRESHOLD (+2σ)
          </text>

          {/* Time Series Pressure Path */}
          <path
            d="M 10,90 Q 50,85 90,88 T 170,82 L 230,75 L 290,25 L 330,45 L 370,80 L 430,85 T 490,80"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Alert Marker Peak */}
          <circle cx="290" cy="25" r="4" fill="#121315" />

          {/* Interactive Crosshair on Hover */}
          {hoverX !== null && (
            <g>
              <line x1={hoverX} y1="10" x2={hoverX} y2="105" stroke="#121315" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx={hoverX} cy="55" r="3.5" fill="#121315" />
            </g>
          )}
        </svg>
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>INDICATORS: ΔFX + ΔRESERVES + ΔRATE</span>
        <span>LEAD TIME: 2–4 WEEKS</span>
      </div>
    </div>
  );
};
