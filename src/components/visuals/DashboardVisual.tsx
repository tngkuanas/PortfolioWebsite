import React from 'react';

export const DashboardVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span>FACTOR EXPOSURE &amp; RISK DECOMPOSITION</span>
        <span>LOCAL ANALYTICS</span>
      </div>

      {/* Bar Chart & Risk Decomposition */}
      <div className="w-full h-32 flex items-center justify-around px-4">
        {/* Factor 1: Market */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-10 bg-[#121315] h-20 relative flex items-end justify-center">
            <span className="font-mono text-[8px] text-[#f7f6f2] mb-1">0.85</span>
          </div>
          <span className="font-mono text-[9px] text-[#706f6a] uppercase">MARKET</span>
        </div>

        {/* Factor 2: Size */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-10 bg-[#121315]/70 h-12 relative flex items-end justify-center">
            <span className="font-mono text-[8px] text-[#f7f6f2] mb-1">0.42</span>
          </div>
          <span className="font-mono text-[9px] text-[#706f6a] uppercase">SIZE</span>
        </div>

        {/* Factor 3: Value */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-10 bg-[#121315]/40 h-16 relative flex items-end justify-center">
            <span className="font-mono text-[8px] text-[#121315] mb-1">0.61</span>
          </div>
          <span className="font-mono text-[9px] text-[#706f6a] uppercase">VALUE</span>
        </div>

        {/* Factor 4: Momentum */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-10 bg-[#121315]/80 h-14 relative flex items-end justify-center">
            <span className="font-mono text-[8px] text-[#f7f6f2] mb-1">0.53</span>
          </div>
          <span className="font-mono text-[9px] text-[#706f6a] uppercase">MOMENTUM</span>
        </div>
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>FAMA-FRENCH REGRESSION</span>
        <span>VAR DECOMPOSITION</span>
      </div>
    </div>
  );
};
