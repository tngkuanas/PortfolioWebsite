import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="min-h-screen w-full relative bateman-paper-texture py-24 sm:py-32 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-between overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            05 — EXPERIENCE
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            I<span className="text-[0.74em] uppercase">nstitutional</span> E<span className="text-[0.74em] uppercase">xperience</span> &amp; T<span className="text-[0.74em] uppercase">rack</span>
          </h2>
          <p className="font-garamond text-lg sm:text-xl text-[#5a5b5e] mt-3 max-w-3xl">
            Institutional commodity desk deployment and academic analytics leadership.
          </p>
        </div>
      </div>

      {/* Short Editorial Timeline (Solid Black Borders) */}
      <div className="w-full space-y-6 font-garamond">
        {EXPERIENCES.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div
              key={exp.id}
              onClick={() => toggleExpand(exp.id)}
              className="w-full p-8 border border-[#121315] cursor-pointer hover:bg-[#121315]/[0.02] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium">
                    {exp.period}
                  </span>
                  <span className="w-4 h-[1px] bg-[#121315]" />
                  <h3 className="font-garamond text-2xl sm:text-4xl text-[#121315] font-semibold tracking-[0.04em] uppercase bateman-letterpress">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="font-mono text-xs tracking-[0.14em] text-[#5a5b5e] uppercase">
                    {exp.role}
                  </span>
                  <span className="font-mono text-xs text-[#121315] font-bold">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-xl text-[#2a2b2e] leading-relaxed mt-4">
                {exp.shortSummary}
              </p>

              {/* Expandable Interaction Details */}
              {isExpanded && (
                <div className="pt-6 border-t border-[#121315] mt-6 text-sm sm:text-lg text-[#5a5b5e] leading-relaxed">
                  <p>{exp.details}</p>
                  <p className="font-mono text-xs tracking-[0.15em] text-[#706f6a] uppercase mt-3">
                    LOCATION: {exp.location}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
