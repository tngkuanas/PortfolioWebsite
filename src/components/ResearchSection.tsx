import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { RESEARCH_TOPICS } from '../data/portfolioData';
import type { ResearchInterest } from '../types/portfolio';

export const ResearchSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<ResearchInterest>(RESEARCH_TOPICS[0]);

  return (
    <section id="research" className="py-24 border-t border-[#e3ded5] bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0f1115]">
          <div>
            <div className="flex items-center space-x-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#626773]">
              <span>[ SECTION III ]</span>
              <span>·</span>
              <span>METHODOLOGY & THEORETICAL FOUNDATIONS</span>
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl font-medium text-[#0f1115] tracking-tight">
              Research & Core Focus
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#626773] text-right">
            <p>QUANTITATIVE MODEL MATRIX</p>
            <p className="text-[10px]">TAP ANY TOPIC TO INSPECT FORMULATION</p>
          </div>
        </div>

        {/* Two-Column Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Topic Selection Cards */}
          <div className="lg:col-span-5 space-y-3">
            {RESEARCH_TOPICS.map((topic, idx) => (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`p-5 border cursor-pointer transition-all duration-200 flex justify-between items-center ${
                  selectedTopic.id === topic.id
                    ? 'border-[#0f1115] bg-white card-engraved-edge'
                    : 'border-[#e3ded5] hover:border-[#9e8b65] bg-white/40'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-xs font-bold text-[#626773]">
                    0{idx + 1}.
                  </span>
                  <div>
                    <h3 className="font-serif-custom text-lg font-semibold text-[#0f1115]">
                      {topic.title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#626773] uppercase tracking-wider">
                      {topic.keyTopics.length} DOMAIN SUBFIELDS
                    </p>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${
                  selectedTopic.id === topic.id ? 'translate-x-1 text-[#0f1115]' : 'text-[#a0a7b5]'
                }`} />
              </div>
            ))}
          </div>

          {/* Right Column: Active Topic Deep Dive & Mathematical Formulation */}
          <div className="lg:col-span-7 bg-[#fcfbfa] border border-[#0f1115] p-8 card-engraved-edge flex flex-col justify-between relative">
            <div className="absolute top-2 right-2 font-mono text-[9px] text-[#b5b0a3]">+</div>

            <div>
              {/* Header */}
              <div className="flex justify-between items-start pb-6 border-b border-[#e3ded5] mb-6">
                <div>
                  <span className="px-2.5 py-1 bg-[#0f1115] text-[#f7f5f0] font-mono text-[10px] uppercase tracking-widest font-semibold">
                    THEORETICAL SPECIFICATION
                  </span>
                  <h3 className="font-serif-custom text-2xl sm:text-3xl font-semibold text-[#0f1115] mt-2">
                    {selectedTopic.title}
                  </h3>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h4 className="font-mono text-xs tracking-wider uppercase text-[#626773] mb-2">
                  RESEARCH EXECUTIVE SUMMARY
                </h4>
                <p className="font-sans text-sm text-[#333740] leading-relaxed">
                  {selectedTopic.summary}
                </p>
              </div>

              {/* Mathematical Equation Sample */}
              {selectedTopic.equationSample && (
                <div className="mb-6 bg-[#0f1115] text-[#f7f5f0] p-6 border border-[#333740] font-mono">
                  <div className="flex justify-between items-center text-[10px] text-[#a0a7b5] uppercase mb-3 border-b border-[#333740] pb-2">
                    <span>MATHEMATICAL FORMULATION</span>
                    <span>PETRONAS QUANT MATRIX</span>
                  </div>
                  <div className="text-center py-4 text-sm sm:text-base text-[#ffffaa] overflow-x-auto">
                    <code>{selectedTopic.equationSample}</code>
                  </div>
                  <p className="text-[11px] text-[#a0a7b5] border-t border-[#333740] pt-2 text-center italic font-serif-custom">
                    {selectedTopic.equationDescription}
                  </p>
                </div>
              )}

              {/* Key Subfield Badges */}
              <div>
                <h4 className="font-mono text-xs tracking-wider uppercase text-[#626773] mb-3">
                  CORE TECHNICAL SUBFIELDS
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedTopic.keyTopics.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#f7f5f0] border border-[#e3ded5] font-mono text-xs text-[#0f1115] flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#0f1115]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 mt-8 border-t border-[#e3ded5] flex justify-between items-center font-mono text-[10px] text-[#626773] uppercase">
              <span>RESEARCH MATRIX V2.6</span>
              <span>VERIFIED QUANT FOUNDATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
