import React from 'react';
import { NOW_STATUS } from '../data/portfolioData';

export const NowSection: React.FC = () => {
  return (
    <section
      id="now"
      className="w-full relative bateman-paper-texture py-24 sm:py-32 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-between overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            06 — NOW
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            N<span className="text-[0.74em] uppercase">ow</span>
          </h2>
        </div>
      </div>

      {/* 5 Quiet Lines Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 font-garamond border-t border-[#121315] pt-12">
        {/* BASED IN */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#706f6a] uppercase">
            BASED IN
          </span>
          <span className="text-base sm:text-xl font-medium text-[#121315] tracking-[0.05em] bateman-letterpress">
            {NOW_STATUS.location}
          </span>
        </div>

        {/* STUDYING */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#706f6a] uppercase">
            STUDYING
          </span>
          <span className="text-base sm:text-xl font-medium text-[#121315] tracking-[0.05em] bateman-letterpress">
            {NOW_STATUS.studying}
          </span>
        </div>

        {/* BUILDING */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#706f6a] uppercase">
            BUILDING
          </span>
          <span className="text-base sm:text-xl font-medium text-[#121315] tracking-[0.05em] bateman-letterpress">
            {NOW_STATUS.building}
          </span>
        </div>

        {/* LEARNING */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#706f6a] uppercase">
            LEARNING
          </span>
          <span className="text-base sm:text-xl font-medium text-[#121315] tracking-[0.05em] bateman-letterpress">
            {NOW_STATUS.learning}
          </span>
        </div>

        {/* LOOKING TOWARD */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#706f6a] uppercase">
            LOOKING TOWARD
          </span>
          <span className="text-base sm:text-xl font-medium text-[#121315] tracking-[0.05em] bateman-letterpress">
            {NOW_STATUS.lookingToward}
          </span>
        </div>
      </div>
    </section>
  );
};
