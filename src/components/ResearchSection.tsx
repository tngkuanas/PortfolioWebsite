import React from 'react';
import { RESEARCH_ARTICLES } from '../data/portfolioData';

export const ResearchSection: React.FC = () => {
  return (
    <section
      id="research"
      className="min-h-screen w-full relative bateman-paper-texture py-24 sm:py-32 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-between overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            04 — RESEARCH
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            T<span className="text-[0.74em] uppercase">hought</span> &amp; T<span className="text-[0.74em] uppercase">echnical</span> R<span className="text-[0.74em] uppercase">esearch</span> A<span className="text-[0.74em] uppercase">rchive</span>
          </h2>
          <p className="font-garamond text-lg sm:text-xl text-[#5a5b5e] mt-3 max-w-3xl">
            Editorial quantitative research, econometrics papers, and technical market notes.
          </p>
        </div>
      </div>

      {/* Editorial Research Archive Listing (Solid Black Separator Lines) */}
      <div className="w-full space-y-12">
        {RESEARCH_ARTICLES.map((article) => (
          <div
            key={article.id}
            className="group w-full border-b border-[#121315] pb-10 flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-4">
              <span className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase">
                {article.year}
              </span>
              <span className="w-4 h-[1px] bg-[#121315]" />
              <div className="flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.14em] text-[#5a5b5e]">
                {article.tags.map((t, idx) => (
                  <span key={idx} className="uppercase">
                    {t} {idx < article.tags.length - 1 ? '·' : ''}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-4">
              <div>
                <h3 className="font-garamond text-2xl sm:text-4xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase group-hover:text-[#000000] transition-colors">
                  {article.title}
                </h3>
                <p className="font-garamond text-lg sm:text-2xl text-[#706f6a] italic mt-1">
                  {article.subtitle}
                </p>
              </div>

              <span className="font-mono text-xs tracking-[0.2em] text-[#121315] uppercase border-b border-[#121315] pb-0.5 self-start lg:self-auto opacity-80 group-hover:opacity-100 transition-opacity">
                READ RESEARCH →
              </span>
            </div>

            <p className="font-garamond text-base sm:text-xl text-[#2a2b2e] leading-relaxed max-w-4xl pt-2">
              {article.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
