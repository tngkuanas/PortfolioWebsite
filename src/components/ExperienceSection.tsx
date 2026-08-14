import React from 'react';
import { Calendar, MapPin, TrendingUp, Cpu } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-[#e3ded5] bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0f1115]">
          <div>
            <div className="flex items-center space-x-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#626773]">
              <span>[ SECTION I ]</span>
              <span>·</span>
              <span>COMMERCIAL & QUANTITATIVE TRACK RECORD</span>
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl font-medium text-[#0f1115] tracking-tight">
              Institutional Experience
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#626773] text-right">
            <p>PRIMARY DESK: PETRONAS QUANT</p>
            <p className="text-[10px]">ENERGY DERIVATIVES & PHYSICAL YIELDS</p>
          </div>
        </div>

        {/* Main Experience Layout */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#fcfbfa] border border-[#e3ded5] p-8 sm:p-12 card-engraved-edge relative group transition-all duration-300 hover:border-[#0f1115]"
            >
              {/* Registration Corner Marks */}
              <div className="absolute top-3 left-3 font-mono text-[9px] text-[#b5b0a3]">+</div>
              <div className="absolute top-3 right-3 font-mono text-[9px] text-[#b5b0a3]">+</div>

              {/* Role & Company Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[#e3ded5]">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="font-cinzel text-lg font-bold tracking-widest text-[#0f1115]">
                      {exp.company}
                    </span>
                    <span className="px-2.5 py-0.5 border border-[#0f1115] font-mono text-[10px] uppercase font-semibold text-[#0f1115]">
                      COMMERCIAL QUANT
                    </span>
                  </div>
                  <h3 className="font-serif-custom text-2xl sm:text-3xl text-[#0f1115] font-medium">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#626773]">
                  <div className="flex items-center space-x-1.5 bg-[#f7f5f0] px-3 py-1.5 border border-[#e3ded5]">
                    <MapPin className="w-3.5 h-3.5 text-[#0f1115]" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-[#f7f5f0] px-3 py-1.5 border border-[#e3ded5]">
                    <Calendar className="w-3.5 h-3.5 text-[#0f1115]" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Key Impact Callout Box */}
              <div className="my-8 bg-[#0f1115] text-[#f7f5f0] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 border border-[#f7f5f0]/30 shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#f7f5f0]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#a0a7b5]">
                      KEY QUANTITATIVE IMPACT
                    </p>
                    <p className="font-serif-custom text-lg sm:text-xl font-medium mt-0.5">
                      {exp.keyImpact}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 font-mono text-xs text-[#d4cebe] border-t sm:border-t-0 sm:border-l border-[#333740] pt-2 sm:pt-0 sm:pl-6">
                  AUDITED MODEL METRIC
                </div>
              </div>

              {/* Description & Detailed Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                <div className="lg:col-span-5">
                  <p className="font-mono text-xs tracking-wider uppercase text-[#626773] mb-3">
                    SCOPE OF RESPONSIBILITIES
                  </p>
                  <p className="font-sans text-sm sm:text-base text-[#333740] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <p className="font-mono text-xs tracking-wider uppercase text-[#626773] mb-3">
                    QUANTITATIVE & MODELING INITIATIVES
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-[#121417]">
                        <span className="font-mono text-xs font-bold text-[#0f1115] shrink-0 mt-0.5">
                          0{idx + 1}.
                        </span>
                        <span className="font-sans leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies / Quantitative Tools */}
              <div className="pt-6 border-t border-[#e3ded5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-[#626773]" />
                  <span className="font-mono text-xs tracking-wider uppercase text-[#626773]">
                    STACK & ENGINE:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#f7f5f0] border border-[#d4cebe] font-mono text-[11px] text-[#0f1115]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
