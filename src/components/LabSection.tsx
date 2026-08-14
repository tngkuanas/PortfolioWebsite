import React from 'react';
import { LAB_EXPLORATIONS } from '../data/portfolioData';

export const LabSection: React.FC = () => {
  return (
    <section
      id="lab"
      className="w-full relative bateman-paper-texture py-20 sm:py-28 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-start space-y-12 overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            05 — LAB
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            L<span className="text-[0.74em] uppercase">ab</span>
          </h2>
          <p className="font-garamond text-lg sm:text-xl text-[#5a5b5e] mt-2 max-w-2xl">
            Things I'm currently building and thinking about.
          </p>
        </div>
      </div>

      {/* Casual Notebook Style Explorations Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 font-garamond">
        {LAB_EXPLORATIONS.map((item) => (
          <div
            key={item.id}
            className="p-8 border border-[#121315] space-y-4"
          >
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs tracking-[0.2em] text-[#706f6a] font-bold">
                {item.number}
              </span>
              <span className="w-3 h-[1px] bg-[#121315]" />
              <h3 className="font-garamond text-2xl sm:text-3xl text-[#121315] font-semibold tracking-[0.03em] uppercase bateman-letterpress">
                {item.title}
              </h3>
            </div>

            <p className="font-garamond text-lg sm:text-xl text-[#121315] font-medium italic">
              {item.question}
            </p>

            <p className="text-base sm:text-lg text-[#5a5b5e] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
