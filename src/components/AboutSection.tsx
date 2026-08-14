import React from 'react';
import { GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-[#e3ded5] bg-[#f7f5f0] relative paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0f1115]">
          <div>
            <div className="flex items-center space-x-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#626773]">
              <span>[ SECTION IV ]</span>
              <span>·</span>
              <span>BIOGRAPHY & ACADEMIC CREDENTIALS</span>
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl font-medium text-[#0f1115] tracking-tight">
              About & Philosophy
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#626773] text-right">
            <p>UNIVERSITY OF MALAYA ALUMNUS</p>
            <p className="text-[10px]">DATA SCIENCE SPECIALIZATION</p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Formal Executive Dossier Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fcfbfa] border border-[#0f1115] p-8 card-engraved-edge relative">
              <div className="absolute top-2 right-2 font-mono text-[9px] text-[#b5b0a3]">+</div>
              
              <div className="border-b border-[#e3ded5] pb-6 mb-6">
                <p className="font-mono text-[10px] tracking-widest uppercase text-[#626773] mb-1">
                  EXECUTIVE PROFILE
                </p>
                <h3 className="font-serif-custom text-2xl font-bold text-[#0f1115]">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="font-sans text-xs tracking-widest uppercase text-[#626773] mt-1">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Dossier Grid */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-[#f0ece1]">
                  <span className="text-[#626773]">DEGREE:</span>
                  <span className="font-semibold text-[#0f1115] text-right">{PERSONAL_INFO.degree}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#f0ece1]">
                  <span className="text-[#626773]">INSTITUTION:</span>
                  <span className="font-semibold text-[#0f1115] text-right">{PERSONAL_INFO.university}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#f0ece1]">
                  <span className="text-[#626773]">LOCATION:</span>
                  <span className="font-semibold text-[#0f1115] text-right">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#f0ece1]">
                  <span className="text-[#626773]">CURRENT DESK:</span>
                  <span className="font-semibold text-[#0f1115] text-right">PETRONAS Quant / Data Science</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#626773]">SPECIALTY:</span>
                  <span className="font-semibold text-[#0f1115] text-right">Energy & Commodity Markets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quantitative Philosophy & Academic Foundation */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#fcfbfa] border border-[#e3ded5] p-8 card-engraved-edge space-y-6">
              <h3 className="font-serif-custom text-2xl font-semibold text-[#0f1115]">
                Quantitative Analytical Philosophy
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#333740] leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#333740] leading-relaxed">
                My approach bridges rigorous computer science data engineering, high-dimensional statistical learning, and the physical realities of global energy supply chains. Rather than treating markets as abstract stochastic noise, I build models rooted in chemical yield kinetics, freight logistics matrix math, and empirical supply-demand balances.
              </p>
            </div>

            {/* Academic Credentials Box */}
            <div className="bg-[#0f1115] text-[#f7f5f0] p-8 border border-[#333740] space-y-4">
              <div className="flex items-center space-x-3 text-[#d4cebe]">
                <GraduationCap className="w-6 h-6" />
                <span className="font-mono text-xs tracking-widest uppercase">
                  ACADEMIC FOUNDATION
                </span>
              </div>
              <h4 className="font-serif-custom text-xl sm:text-2xl font-semibold">
                University of Malaya — Bachelor of Computer Science (Data Science)
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#a0a7b5] leading-relaxed">
                Rigorous training in algorithm design, machine learning theory, distributed computing, database management systems, applied linear algebra, and multivariate probability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
