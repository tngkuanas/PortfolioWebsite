import React from 'react';
import { NOW_STATUS } from '../data/portfolioData';

export const NowSection: React.FC = () => {
  return (
    <section
      id="now"
      className="w-full relative bateman-paper-texture py-12 px-8 sm:px-14 md:px-20 lg:px-24 border-t border-[#121315]/20 font-garamond select-none"
    >
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-6 text-xs sm:text-sm">
        {/* BASED IN */}
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#706f6a] uppercase">
            BASED IN
          </span>
          <span className="font-medium text-[#121315] bateman-letterpress">
            {NOW_STATUS.location}
          </span>
        </div>

        {/* STUDYING */}
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#706f6a] uppercase">
            STUDYING
          </span>
          <span className="font-medium text-[#121315] bateman-letterpress">
            {NOW_STATUS.studying}
          </span>
        </div>

        {/* BUILDING */}
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#706f6a] uppercase">
            BUILDING
          </span>
          <span className="font-medium text-[#121315] bateman-letterpress">
            {NOW_STATUS.building}
          </span>
        </div>

        {/* LEARNING */}
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#706f6a] uppercase">
            LEARNING
          </span>
          <span className="font-medium text-[#121315] bateman-letterpress">
            {NOW_STATUS.learning}
          </span>
        </div>

        {/* LOOKING TOWARD */}
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#706f6a] uppercase">
            LOOKING TOWARD
          </span>
          <span className="font-medium text-[#121315] bateman-letterpress">
            {NOW_STATUS.lookingToward}
          </span>
        </div>
      </div>
    </section>
  );
};
