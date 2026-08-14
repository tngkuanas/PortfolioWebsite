import React, { useState } from 'react';
import { SELECTED_PROJECTS, type ProjectItem } from '../data/portfolioData';

interface Props {
  onSelectProjectForCaseStudy?: (project: ProjectItem) => void;
}

export const SelectedWorkSection: React.FC<Props> = ({ onSelectProjectForCaseStudy }) => {
  const [activeProject, setActiveProject] = useState<ProjectItem>(SELECTED_PROJECTS[0]);

  const handleCaseStudyClick = (project: ProjectItem) => {
    if (onSelectProjectForCaseStudy) {
      onSelectProjectForCaseStudy(project);
    }
    const el = document.getElementById('case-studies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
            02 — SELECTED WORK
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            P<span className="text-[0.74em] uppercase">rimary</span> Q<span className="text-[0.74em] uppercase">uantitative</span> S<span className="text-[0.74em] uppercase">ystems</span> &amp; M<span className="text-[0.74em] uppercase">odels</span>
          </h2>
          <p className="font-garamond text-lg sm:text-xl text-[#5a5b5e] mt-3 max-w-3xl">
            Selected quantitative research projects, statistical models, and production analytics platforms.
          </p>
        </div>
      </div>

      {/* Projects Editorial Layout (Solid Black High-Contrast Borders) */}
      <div className="w-full space-y-8">
        {SELECTED_PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className={`group w-full cursor-pointer transition-all duration-300 p-6 sm:p-10 border ${
              activeProject.id === project.id
                ? 'border-[#121315] bg-[#121315]/[0.03] shadow-xs'
                : 'border-[#121315]/30 hover:border-[#121315]'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Number & Title & Tags */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-sm sm:text-base text-[#706f6a] tracking-[0.18em] font-medium">
                    {project.number}
                  </span>
                  <span className="w-6 h-[1px] bg-[#121315]" />
                  <span className="font-mono text-xs tracking-[0.15em] text-[#5a5b5e] uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-garamond text-2xl sm:text-4xl md:text-5xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase group-hover:text-[#000000] transition-colors">
                  {project.title}
                </h3>

                {/* Tag Chips */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] tracking-[0.12em] text-[#5a5b5e]">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 border border-[#121315] uppercase bg-[#f7f6f2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-garamond text-base sm:text-xl text-[#2a2b2e] leading-relaxed pt-2">
                  {project.shortDescription}
                </p>
              </div>

              {/* Right Column: Case Study Deep-Dive Button */}
              <div className="lg:col-span-4 flex flex-col lg:items-end justify-between pt-4 lg:pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCaseStudyClick(project);
                  }}
                  className="px-5 py-3 border border-[#121315] text-[#121315] hover:bg-[#121315] hover:text-[#f7f6f2] font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-3"
                >
                  <span>CASE STUDY</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
