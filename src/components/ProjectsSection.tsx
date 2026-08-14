import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Derivative Analytics', 'Time-Series', 'Yield Optimization', 'AI Agent'];

  const filteredProjects = PROJECTS.filter(project => {
    if (filterCategory === 'ALL') return true;
    if (filterCategory === 'Derivative Analytics') return project.category.includes('Derivative') || project.category.includes('Spread');
    if (filterCategory === 'Time-Series') return project.category.includes('Time-Series');
    if (filterCategory === 'Yield Optimization') return project.category.includes('Yield') || project.category.includes('Optimization') || project.category.includes('Matrix');
    if (filterCategory === 'AI Agent') return project.category.includes('AI Agent') || project.title.includes('AIRA');
    return true;
  });

  return (
    <section id="projects" className="py-24 border-t border-[#e3ded5] bg-[#f7f5f0] relative paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#0f1115]">
          <div>
            <div className="flex items-center space-x-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#626773]">
              <span>[ SECTION II ]</span>
              <span>·</span>
              <span>QUANTITATIVE MODELS & SYSTEMS</span>
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl font-medium text-[#0f1115] tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Category Filter Toolbar */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 font-mono text-xs uppercase transition-all ${
                  filterCategory === cat
                    ? 'bg-[#0f1115] text-[#f7f5f0] font-semibold shadow-xs'
                    : 'bg-white border border-[#d4cebe] text-[#333740] hover:border-[#0f1115]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#fcfbfa] border border-[#e3ded5] p-6 sm:p-8 card-engraved-edge flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#0f1115] group relative"
            >
              {/* Corner Registration Mark */}
              <div className="absolute top-2 right-2 font-mono text-[9px] text-[#b5b0a3]">+</div>

              <div>
                {/* Category & Status */}
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 bg-[#f7f5f0] border border-[#e3ded5] text-[#626773]">
                    {project.category}
                  </span>
                  <div className="p-1 border border-transparent group-hover:border-[#0f1115] transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#0f1115] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-custom text-xl sm:text-2xl font-semibold text-[#0f1115] mb-3 group-hover:text-[#0f1115] transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="font-sans text-xs sm:text-sm text-[#525866] leading-relaxed mb-6">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                {/* Key Metric Ticker Highlight */}
                {project.metrics.length > 0 && (
                  <div className="bg-[#0f1115] text-[#f7f5f0] p-3 mb-4 font-mono text-xs flex justify-between items-center border border-[#333740]">
                    <span className="text-[#a0a7b5] text-[10px] uppercase">
                      {project.metrics[0].label}:
                    </span>
                    <span className="font-bold text-[#ffffff]">
                      {project.metrics[0].value}
                    </span>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#e3ded5]">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#f7f5f0] border border-[#e3ded5] font-mono text-[10px] text-[#333740]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 font-mono text-[10px] text-[#626773]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
