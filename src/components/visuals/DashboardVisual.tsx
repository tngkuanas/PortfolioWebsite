import React, { useState } from 'react';

export const DashboardVisual: React.FC = () => {
  const [activeFactor, setActiveFactor] = useState<string | null>(null);

  const factors = [
    { id: 'mkt', label: 'MARKET (β)', val: '0.85', height: 'h-20', pct: '58% VAR' },
    { id: 'smb', label: 'SIZE (SMB)', val: '0.42', height: 'h-12', pct: '14% VAR' },
    { id: 'hml', label: 'VALUE (HML)', val: '0.61', height: 'h-16', pct: '18% VAR' },
    { id: 'mom', label: 'MOMENTUM', val: '0.53', height: 'h-14', pct: '10% VAR' },
  ];

  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span className="text-[#121315] font-semibold">FACTOR EXPOSURE &amp; RISK DECOMPOSITION</span>
        <span>{activeFactor ? factors.find(f => f.id === activeFactor)?.pct : '4-FACTOR MODEL'}</span>
      </div>

      {/* Interactive Bar Chart */}
      <div className="w-full h-32 flex items-end justify-around px-4 pb-2">
        {factors.map((factor) => {
          const isSelected = activeFactor === factor.id;
          return (
            <div
              key={factor.id}
              onMouseEnter={() => setActiveFactor(factor.id)}
              onMouseLeave={() => setActiveFactor(null)}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div
                className={`w-11 ${factor.height} transition-all duration-200 relative flex items-end justify-center ${
                  isSelected ? 'bg-[#121315] scale-y-105' : 'bg-[#121315]/75 group-hover:bg-[#121315]'
                }`}
              >
                <span className="font-mono text-[8px] text-[#f7f6f2] mb-1 font-semibold">
                  {factor.val}
                </span>
              </div>
              <span className={`font-mono text-[9px] uppercase tracking-wider transition-colors ${isSelected ? 'text-[#121315] font-bold' : 'text-[#706f6a]'}`}>
                {factor.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>R² = 0.88 · T-STAT &gt; 2.1</span>
        <span>TOTAL EXP: $124.5K</span>
      </div>
    </div>
  );
};
