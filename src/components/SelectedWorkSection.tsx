import React, { useState } from 'react';
import { SELECTED_PROJECTS, type ProjectItem } from '../data/portfolioData';
import { RegimeChartVisual } from './visuals/RegimeChartVisual';
import { CurrencyPressureVisual } from './visuals/CurrencyPressureVisual';
import { DashboardVisual } from './visuals/DashboardVisual';
import { NaphthaModelVisual } from './visuals/NaphthaModelVisual';
import { AiraPipelineVisual } from './visuals/AiraPipelineVisual';

export const SelectedWorkSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const renderVisualForProject = (id: string) => {
    switch (id) {
      case 'market-regime':
        return <RegimeChartVisual />;
      case 'em-currency':
        return <CurrencyPressureVisual />;
      case 'investment-dashboard':
        return <DashboardVisual />;
      case 'naphtha-cracker':
        return <NaphthaModelVisual />;
      case 'aira-agent':
        return <AiraPipelineVisual />;
      default:
        return null;
    }
  };

  return (
    <section
      id="work"
      className="min-h-screen w-full relative bateman-paper-texture py-24 sm:py-32 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-between overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            02 — WORK
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            S<span className="text-[0.74em] uppercase">elected</span> W<span className="text-[0.74em] uppercase">ork</span> &amp; M<span className="text-[0.74em] uppercase">odels</span>
          </h2>
        </div>
      </div>

      {/* Projects List (Extremely Sparse & Typographic with Integrated Data Visualizations) */}
      <div className="w-full space-y-16">
        {SELECTED_PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group w-full cursor-pointer p-8 sm:p-10 border border-[#121315] bg-[#121315]/[0.01] hover:bg-[#121315]/[0.03] transition-all duration-300 space-y-6"
          >
            {/* Top Bar: Number & Clean Subtitle */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#121315]/20 pb-4">
              <span className="font-mono text-base text-[#121315] font-bold tracking-[0.2em]">
                {project.number}
              </span>
              <span className="font-mono text-xs text-[#706f6a] tracking-[0.14em] uppercase">
                {project.subtitle}
              </span>
            </div>

            {/* Title & Short Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-garamond text-3xl sm:text-5xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress-heading uppercase group-hover:text-[#000000] transition-colors">
                  {project.title}
                </h3>
                <p className="font-garamond text-base sm:text-xl text-[#2a2b2e] leading-relaxed max-w-2xl">
                  {project.shortDescription}
                </p>
                <div className="pt-2">
                  <span className="font-mono text-xs tracking-[0.18em] text-[#121315] uppercase border-b border-[#121315] pb-0.5 group-hover:font-bold transition-all">
                    EXPLORE CASE STUDY →
                  </span>
                </div>
              </div>

              {/* Data Visualization Preview Component */}
              <div className="lg:col-span-5">
                {renderVisualForProject(project.id)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Immersive Editorial Case Study Modal Drawer */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0e0f11]/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-[#f7f6f2] border border-[#121315] p-8 sm:p-14 shadow-2xl space-y-10 my-auto text-[#121315] font-garamond max-h-[90vh] overflow-y-auto scrollbar-none">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#121315] pb-6">
              <div>
                <span className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase">
                  CASE STUDY REPO — {activeModalProject.number}
                </span>
                <h3 className="font-garamond text-3xl sm:text-5xl font-normal uppercase text-[#121315] bateman-letterpress-heading mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="font-mono text-xs tracking-[0.14em] text-[#5a5b5e] uppercase mt-2">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="w-10 h-10 border border-[#121315] flex items-center justify-center font-mono text-sm hover:bg-[#121315] hover:text-[#f7f6f2] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Embedded Visual Storyteller Chart */}
            <div className="w-full my-6">
              {renderVisualForProject(activeModalProject.id)}
            </div>

            {/* Analytical Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* PROBLEM */}
              <div className="p-6 border border-[#121315] space-y-2">
                <span className="font-mono text-xs tracking-[0.18em] text-[#706f6a] uppercase font-bold">
                  01. PROBLEM
                </span>
                <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed">
                  {activeModalProject.caseStudy.problem}
                </p>
              </div>

              {/* DATA */}
              <div className="p-6 border border-[#121315] space-y-2">
                <span className="font-mono text-xs tracking-[0.18em] text-[#706f6a] uppercase font-bold">
                  02. DATA
                </span>
                <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed">
                  {activeModalProject.caseStudy.data}
                </p>
              </div>

              {/* METHODOLOGY */}
              <div className="p-6 border border-[#121315] space-y-2">
                <span className="font-mono text-xs tracking-[0.18em] text-[#706f6a] uppercase font-bold">
                  03. METHODOLOGY
                </span>
                <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed">
                  {activeModalProject.caseStudy.methodology}
                </p>
              </div>

              {/* MODEL */}
              <div className="p-6 border border-[#121315] space-y-2">
                <span className="font-mono text-xs tracking-[0.18em] text-[#706f6a] uppercase font-bold">
                  04. MODEL
                </span>
                <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed">
                  {activeModalProject.caseStudy.model}
                </p>
              </div>
            </div>

            {/* RESULTS & LIMITATIONS */}
            <div className="space-y-6 pt-2">
              <div className="p-6 border border-[#121315] bg-[#121315]/[0.03]">
                <span className="font-mono text-xs tracking-[0.18em] text-[#121315] uppercase font-bold">
                  05. RESULTS &amp; OUTCOMES
                </span>
                <p className="text-base sm:text-xl text-[#121315] font-medium leading-relaxed mt-2">
                  {activeModalProject.caseStudy.results}
                </p>
              </div>

              <div className="p-6 border border-[#121315]">
                <span className="font-mono text-xs tracking-[0.18em] text-[#706f6a] uppercase font-bold">
                  06. LIMITATIONS &amp; TRADE-OFFS
                </span>
                <p className="text-base sm:text-lg text-[#2a2b2e] leading-relaxed mt-2">
                  {activeModalProject.caseStudy.limitations}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-[#121315]">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-2.5 border border-[#121315] text-[#121315] hover:bg-[#121315] hover:text-[#f7f6f2] font-mono text-xs tracking-[0.2em] uppercase transition-all"
              >
                CLOSE CASE STUDY
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
