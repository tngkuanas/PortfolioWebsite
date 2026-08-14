import React from 'react';
import { LAB_EXPLORATIONS } from '../data/portfolioData';

export const LabSection: React.FC = () => {
  return (
    <section
      id="lab"
      className="min-h-screen w-full relative bateman-paper-texture py-24 sm:py-32 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-between overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            06 — LAB
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            C<span className="text-[0.74em] uppercase">urrently</span> E<span className="text-[0.74em] uppercase">xploring</span>
          </h2>
          <p className="font-garamond text-lg sm:text-xl text-[#5a5b5e] mt-3 max-w-3xl">
            Active quantitative research questions, ongoing experiments, and active investigations.
          </p>
        </div>
      </div>

      {/* Lab Explorations Grid (Solid Black Borders) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-garamond">
        {LAB_EXPLORATIONS.map((item) => (
          <div
            key={item.id}
            className="p-8 border border-[#121315] hover:bg-[#121315]/[0.02] transition-all flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs tracking-[0.2em] text-[#706f6a] font-semibold">
                  {item.number}
                </span>
                <span className="w-3 h-[1px] bg-[#121315]" />
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#706f6a] uppercase">
                  ACTIVE EXPERIMENT
                </span>
              </div>

              <h3 className="font-garamond text-2xl sm:text-3xl text-[#121315] font-semibold tracking-[0.03em] uppercase mt-3 bateman-letterpress">
                {item.title}
              </h3>

              <p className="font-garamond text-sm sm:text-base text-[#706f6a] italic mt-1">
                {item.subtitle}
              </p>

              <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed mt-4">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#121315] flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-[#706f6a] uppercase">
              <span>STATUS: IN PROGRESS</span>
              <span>2026</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
