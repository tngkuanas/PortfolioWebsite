import React, { useState } from 'react';
import { X, Terminal, BarChart3 } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'terminal'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f1115]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#f7f5f0] border border-[#d4cebe] w-full max-w-4xl max-h-[92vh] overflow-y-auto card-engraved-edge relative p-6 sm:p-10 text-[#0f1115]">
        
        {/* Header */}
        <div className="flex justify-between items-start border-b border-[#e3ded5] pb-6 mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="w-2.5 h-2.5 bg-[#0f1115]"></span>
              <p className="font-mono text-xs tracking-widest uppercase text-[#626773]">
                QUANTITATIVE MODEL INSPECTOR · {project.category}
              </p>
            </div>
            <h2 className="font-serif-custom text-2xl sm:text-4xl font-semibold text-[#0f1115]">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-[#d4cebe] hover:border-[#0f1115] hover:bg-[#0f1115] hover:text-[#f7f5f0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toolbar */}
        <div className="flex border-b border-[#e3ded5] mb-8 font-mono text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === 'overview'
                ? 'border-[#0f1115] text-[#0f1115] font-semibold bg-white/60'
                : 'border-transparent text-[#626773] hover:text-[#0f1115]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>MODEL SPECIFICATION</span>
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-4 py-2 border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === 'terminal'
                ? 'border-[#0f1115] text-[#0f1115] font-semibold bg-white/60'
                : 'border-transparent text-[#626773] hover:text-[#0f1115]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>TERMINAL RUN DEMO</span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#0f1115] text-[#f7f5f0] p-6 border border-[#333740]">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="border-l-2 border-[#9e8b65] pl-4">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#a0a7b5]">
                    {metric.label}
                  </p>
                  <p className="font-serif-custom text-2xl font-bold text-[#ffffff] mt-0.5">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description & Mathematical Formulation */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                <h4 className="font-mono text-xs tracking-wider uppercase font-semibold text-[#0f1115]">
                  FULL DESCRIPTION & ARCHITECTURE
                </h4>
                <p className="font-sans text-sm text-[#333740] leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <div className="pt-4 border-t border-[#e3ded5]">
                  <h4 className="font-mono text-xs tracking-wider uppercase font-semibold text-[#0f1115] mb-2">
                    MATHEMATICAL METHODOLOGY
                  </h4>
                  <p className="font-mono text-xs bg-white p-4 border border-[#e3ded5] text-[#121417] leading-relaxed">
                    {project.methodology}
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 space-y-6 bg-white p-6 border border-[#e3ded5]">
                <div>
                  <h4 className="font-mono text-xs tracking-wider uppercase font-semibold text-[#0f1115] mb-3">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#f7f5f0] border border-[#d4cebe] font-mono text-xs text-[#0f1115]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e3ded5] space-y-3">
                  <h4 className="font-mono text-xs tracking-wider uppercase font-semibold text-[#0f1115]">
                    REPOSITORIES & ACCESS
                  </h4>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2.5 bg-[#0f1115] text-[#f7f5f0] font-mono text-xs uppercase flex items-center justify-center space-x-2 hover:bg-[#333740] transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-[#ffffff]" />
                      <span>VIEW REPOSITORY ON GITHUB</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Terminal Simulation */}
        {activeTab === 'terminal' && (
          <div className="bg-[#0f1115] text-[#33ff66] p-6 font-mono text-xs rounded-xs border border-[#333740] space-y-3 overflow-x-auto">
            <div className="flex justify-between items-center border-b border-[#333740] pb-2 text-[#a0a7b5]">
              <span>QUANT_ENGINE // EXECUTION_LOG</span>
              <span>MODEL_ID: {project.id.toUpperCase()}</span>
            </div>
            <p className="text-[#a0a7b5]">[08:14:02] Initializing model parameters for {project.title}...</p>
            <p className="text-[#a0a7b5]">[08:14:03] Loading tick data & physical crude slate arrays from DuckDB...</p>
            <p>[08:14:04] Executing Kalman Filter dynamic regression matrix...</p>
            <p className="text-[#ffff66]">[08:14:05] Optimal spread target calculated: +$2.45/bbl (Confidence: 94.2%)</p>
            <p>[08:14:06] Outputting predictions to Bloomberg API & Trading Desk Dashboard.</p>
            <div className="pt-4 border-t border-[#333740] text-[#a0a7b5] flex justify-between">
              <span>STATUS: LIVE_SUCCESS</span>
              <span>LATENCY: 12ms</span>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#e3ded5] flex justify-between items-center font-mono text-xs text-[#626773]">
          <span>PETRONAS QUANTITATIVE PORTFOLIO</span>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#0f1115] text-[#0f1115] hover:bg-[#0f1115] hover:text-[#f7f5f0] transition-colors uppercase font-semibold"
          >
            CLOSE INSPECTOR
          </button>
        </div>
      </div>
    </div>
  );
};
