import React, { useState } from 'react';

export const AiraPipelineVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { title: 'PDF / TRANSCRIPT', subtitle: 'RAW UNSTRUCTURED', detail: 'TABLE EXTRACTION & CHUNKING' },
    { title: 'LOCAL EMBEDDINGS', subtitle: 'VECTOR DATABASE', detail: 'DENSE SEMANTIC RETRIEVAL' },
    { title: 'LOCAL LLM ENGINE', subtitle: '4-BIT QUANTIZED', detail: 'SYNTHESIS & REPORT SUMMARY' },
  ];

  return (
    <div className="w-full h-48 sm:h-56 border border-[#121315] bg-[#121315]/[0.02] p-4 flex flex-col justify-between select-none">
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[#706f6a] uppercase">
        <span className="text-[#121315] font-semibold">LOCAL RESEARCH AGENT PIPELINE</span>
        <span className="text-[#121315] font-medium">{steps[activeStep].detail}</span>
      </div>

      {/* Interactive Pipeline Diagram */}
      <div className="w-full h-32 flex items-center justify-between px-2 font-mono">
        {/* Step 1: Input PDF */}
        <div
          onMouseEnter={() => setActiveStep(0)}
          className={`p-3 border border-[#121315] cursor-pointer transition-all duration-200 text-center flex flex-col items-center flex-1 max-w-[130px] ${
            activeStep === 0 ? 'bg-[#121315] text-[#f7f6f2]' : 'bg-[#f7f6f2] text-[#121315]'
          }`}
        >
          <span className="text-[10px] font-bold">PDF / DATA</span>
          <span className={`text-[8px] mt-0.5 ${activeStep === 0 ? 'text-[#c8c3b4]' : 'text-[#706f6a]'}`}>UNSTRUCTURED</span>
        </div>

        <span className="text-[#121315] text-xs px-2">→</span>

        {/* Step 2: Vector Search */}
        <div
          onMouseEnter={() => setActiveStep(1)}
          className={`p-3 border border-[#121315] cursor-pointer transition-all duration-200 text-center flex flex-col items-center flex-1 max-w-[130px] ${
            activeStep === 1 ? 'bg-[#121315] text-[#f7f6f2]' : 'bg-[#121315]/5 text-[#121315]'
          }`}
        >
          <span className="text-[10px] font-bold">EMBEDDINGS</span>
          <span className={`text-[8px] mt-0.5 ${activeStep === 1 ? 'text-[#c8c3b4]' : 'text-[#706f6a]'}`}>LOCAL VECTOR</span>
        </div>

        <span className="text-[#121315] text-xs px-2">→</span>

        {/* Step 3: Local LLM */}
        <div
          onMouseEnter={() => setActiveStep(2)}
          className={`p-3 border border-[#121315] cursor-pointer transition-all duration-200 text-center flex flex-col items-center flex-1 max-w-[130px] ${
            activeStep === 2 ? 'bg-[#121315] text-[#f7f6f2]' : 'bg-[#121315]/10 text-[#121315]'
          }`}
        >
          <span className="text-[10px] font-bold">LOCAL LLM</span>
          <span className={`text-[8px] mt-0.5 ${activeStep === 2 ? 'text-[#c8c3b4]' : 'text-[#706f6a]'}`}>SYNTHESIS</span>
        </div>
      </div>

      {/* Visual Footer Caption */}
      <div className="flex justify-between items-center font-mono text-[9px] text-[#706f6a] tracking-[0.14em] uppercase border-t border-[#121315]/20 pt-2">
        <span>SECURITY: 100% AIR-GAPPED</span>
        <span>DEVICE: ON-CHIP METAL ACCEL</span>
      </div>
    </div>
  );
};
