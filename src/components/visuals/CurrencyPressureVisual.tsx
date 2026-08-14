import React from 'react';

export const CurrencyPressureVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span>EXCHANGE MARKET PRESSURE INDEX (EMP)</span>
        <span>VAR MODEL</span>
      </div>

      {/* SVG Currency Pressure Time-Series */}
      <div className="w-full h-32 relative flex items-center justify-center">
        <svg viewBox="0 0 500 120" className="w-full h-full stroke-[#121315] fill-none overflow-visible">
          {/* Pressure Threshold Line */}
          <line x1="0" y1="35" x2="500" y2="35" stroke="#121315" strokeOpacity="0.4" strokeDasharray="4 4" />
          <text x="10" y="28" fill="#706f6a" fontSize="8" fontFamily="monospace" letterSpacing="1">
            ALERT THRESHOLD (+2σ)
          </text>

          {/* Time Series Pressure Path */}
          <path
            d="M 10,90 Q 50,85 90,88 T 170,82 L 230,75 L 290,25 L 330,45 L 370,80 L 430,85 T 490,80"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Alert Marker */}
          <circle cx="290" cy="25" r="4" fill="#121315" />
          <text x="300" y="20" fill="#121315" fontSize="8" fontFamily="monospace" fontWeight="bold">
            PRESSURE SIGNAL
          </text>
        </svg>
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>METRICS: RESERVE DRAWDOWNS + FX SPREADS</span>
        <span>HORIZON: 2-4 WEEKS</span>
      </div>
    </div>
  );
};
