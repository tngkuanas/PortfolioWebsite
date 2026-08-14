import React, { useState } from 'react';
import { SELECTED_PROJECTS, type ProjectItem } from '../data/portfolioData';

interface Props {
  selectedProject?: ProjectItem;
}

export const CaseStudiesSection: React.FC<Props> = ({ selectedProject }) => {
  const [currentProject, setCurrentProject] = useState<ProjectItem>(
    selectedProject || SELECTED_PROJECTS[0]
  );

  return (
    <section
      id="case-studies"
      className="min-h-screen w-full relative bateman-paper-texture py-24 sm:py-32 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-between overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            03 — CASE STUDIES
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            A<span className="text-[0.74em] uppercase">nalytical</span> C<span className="text-[0.74em] uppercase">ase</span> S<span className="text-[0.74em] uppercase">tudy</span> D<span className="text-[0.74em] uppercase">eep-Dive</span>
          </h2>
          <p className="font-garamond text-lg sm:text-xl text-[#5a5b5e] mt-3 max-w-3xl">
            Detailed analytical breakdown, statistical methodologies, validation metrics, and trade-off decisions.
          </p>
        </div>
      </div>

      {/* Project Selector Tabs */}
      <div className="w-full flex overflow-x-auto whitespace-nowrap space-x-3 mb-12 pb-2 scrollbar-none border-b border-[#d8d3c4]">
        {SELECTED_PROJECTS.map((proj) => (
          <button
            key={proj.id}
            onClick={() => setCurrentProject(proj)}
            className={`px-4 py-2 font-mono text-xs tracking-[0.14em] uppercase transition-all ${
              currentProject.id === proj.id
                ? 'bg-[#121315] text-[#f7f6f2] font-semibold'
                : 'text-[#5a5b5e] hover:text-[#121315] hover:bg-[#121315]/5'
            }`}
          >
            {proj.number}. {proj.title}
          </button>
        ))}
      </div>

      {/* Case Study 7-Step Analytical Framework */}
      <div className="w-full space-y-8 font-garamond">
        {/* Case Study Header Banner */}
        <div className="p-8 border border-[#121315] bg-[#121315]/[0.02]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase">
                CASE STUDY REPO — {currentProject.number}
              </span>
              <h3 className="font-garamond text-3xl sm:text-5xl text-[#121315] font-normal uppercase leading-tight mt-1 bateman-letterpress-heading">
                {currentProject.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.12em]">
              {currentProject.tags.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 border border-[#121315]/30 uppercase bg-[#f7f6f2]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 7-Step Breakdown Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* STEP 1: PROBLEM */}
          <div className="p-6 border border-[#d8d3c4] flex flex-col justify-between space-y-4">
            <div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase font-semibold flex items-center gap-2">
                <span>01</span>
                <span className="w-3 h-[1px] bg-[#706f6a]/50" />
                <span>PROBLEM</span>
              </div>
              <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed mt-3">
                {currentProject.caseStudy.problem}
              </p>
            </div>
          </div>

          {/* STEP 2: DATA */}
          <div className="p-6 border border-[#d8d3c4] flex flex-col justify-between space-y-4">
            <div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase font-semibold flex items-center gap-2">
                <span>02</span>
                <span className="w-3 h-[1px] bg-[#706f6a]/50" />
                <span>DATA</span>
              </div>
              <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed mt-3">
                {currentProject.caseStudy.data}
              </p>
            </div>
          </div>

          {/* STEP 3: METHODOLOGY */}
          <div className="p-6 border border-[#d8d3c4] flex flex-col justify-between space-y-4">
            <div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase font-semibold flex items-center gap-2">
                <span>03</span>
                <span className="w-3 h-[1px] bg-[#706f6a]/50" />
                <span>METHODOLOGY</span>
              </div>
              <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed mt-3">
                {currentProject.caseStudy.methodology}
              </p>
            </div>
          </div>

          {/* STEP 4: MODEL */}
          <div className="p-6 border border-[#d8d3c4] flex flex-col justify-between space-y-4">
            <div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase font-semibold flex items-center gap-2">
                <span>04</span>
                <span className="w-3 h-[1px] bg-[#706f6a]/50" />
                <span>MODEL</span>
              </div>
              <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed mt-3">
                {currentProject.caseStudy.model}
              </p>
            </div>
          </div>

          {/* STEP 5: VALIDATION */}
          <div className="p-6 border border-[#d8d3c4] flex flex-col justify-between space-y-4">
            <div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase font-semibold flex items-center gap-2">
                <span>05</span>
                <span className="w-3 h-[1px] bg-[#706f6a]/50" />
                <span>VALIDATION</span>
              </div>
              <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed mt-3">
                {currentProject.caseStudy.validation}
              </p>
            </div>
          </div>

          {/* STEP 6: RESULTS */}
          <div className="p-6 border border-[#121315] bg-[#121315]/[0.03] flex flex-col justify-between space-y-4">
            <div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#121315] uppercase font-bold flex items-center gap-2">
                <span>06</span>
                <span className="w-3 h-[1px] bg-[#121315]" />
                <span>RESULTS</span>
              </div>
              <p className="text-base sm:text-lg text-[#121315] font-medium leading-relaxed mt-3">
                {currentProject.caseStudy.results}
              </p>
            </div>
          </div>
        </div>

        {/* STEP 7: LIMITATIONS & DECISION TRADE-OFFS */}
        <div className="p-8 border border-[#d8d3c4] bg-[#f7f6f2]">
          <div className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase font-semibold flex items-center gap-2 mb-2">
            <span>07</span>
            <span className="w-3 h-[1px] bg-[#706f6a]/50" />
            <span>LIMITATIONS &amp; MODEL ASSUMPTIONS</span>
          </div>
          <p className="text-base sm:text-xl text-[#2a2b2e] leading-relaxed">
            {currentProject.caseStudy.limitations}
          </p>
        </div>
      </div>
    </section>
  );
};
