import React from 'react';

export const AiraPipelineVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span>LOCAL FINANCIAL DOCUMENT PARSING PIPELINE</span>
        <span>ZERO CLOUD API</span>
      </div>

      {/* Pipeline Diagram */}
      <div className="w-full h-32 flex items-center justify-between px-2 font-mono">
        {/* Step 1: Input PDF */}
        <div className="p-3 border border-[#121315] bg-[#f7f6f2] text-center flex flex-col items-center">
          <span className="text-[10px] font-bold text-[#121315]">PDF / REPORT</span>
          <span className="text-[8px] text-[#706f6a] mt-0.5">UNSTRUCTURED</span>
        </div>

        <span className="text-[#121315] text-xs">→</span>

        {/* Step 2: Vector Search */}
        <div className="p-3 border border-[#121315] bg-[#121315]/5 text-center flex flex-col items-center">
          <span className="text-[10px] font-bold text-[#121315]">LOCAL VECTOR</span>
          <span className="text-[8px] text-[#706f6a] mt-0.5">EMBEDDINGS</span>
        </div>

        <span className="text-[#121315] text-xs">→</span>

        {/* Step 3: Local LLM */}
        <div className="p-3 border border-[#121315] bg-[#121315] text-[#f7f6f2] text-center flex flex-col items-center">
          <span className="text-[10px] font-bold">LOCAL LLM</span>
          <span className="text-[8px] text-[#c8c3b4] mt-0.5">QUANTIZED</span>
        </div>
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>SECURITY: 100% AIR-GAPPED / LOCAL</span>
        <span>LATENCY: ZERO NETWORK HOPS</span>
      </div>
    </div>
  );
};
