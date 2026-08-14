import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full relative bateman-paper-texture py-20 sm:py-28 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-start space-y-12 overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            04 — EXPERIENCE
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            E<span className="text-[0.74em] uppercase">xperience</span>
          </h2>
        </div>
      </div>

      {/* Minimal 2-Entry Editorial Experience */}
      <div className="w-full space-y-6 font-garamond">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="w-full p-8 border border-[#121315] space-y-3"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <div className="flex items-center space-x-4">
                <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium">
                  {exp.period}
                </span>
                <span className="w-4 h-[1px] bg-[#121315]" />
                <h3 className="font-garamond text-2xl sm:text-4xl text-[#121315] font-semibold tracking-[0.04em] uppercase bateman-letterpress">
                  {exp.company}
                </h3>
              </div>

              <span className="font-mono text-xs tracking-[0.14em] text-[#5a5b5e] uppercase">
                {exp.role} &nbsp;·&nbsp; {exp.location}
              </span>
            </div>

            <p className="text-base sm:text-xl text-[#2a2b2e] leading-relaxed pt-2">
              {exp.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
