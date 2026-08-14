import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full relative bateman-paper-texture py-24 sm:py-32 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-between overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Section Header Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
        <div className="lg:col-span-2">
          <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress">
            07 — CONTACT
          </div>
        </div>

        <div className="lg:col-span-10">
          <h2 className="font-garamond text-3xl sm:text-5xl md:text-6xl text-[#121315] font-normal tracking-[0.02em] leading-tight bateman-letterpress uppercase">
            C<span className="text-[0.74em] uppercase">ontact</span>
          </h2>
        </div>
      </div>

      {/* Return of Executive Business Card Container */}
      <div className="w-full my-auto max-w-4xl mx-auto p-10 sm:p-16 border border-[#121315] bg-[#121315]/[0.02] shadow-sm flex flex-col space-y-10 font-garamond">
        {/* Name Heading */}
        <div>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.03em] leading-tight text-[#121315] bateman-letterpress-heading uppercase">
            T<span className="text-[0.72em] uppercase tracking-[0.01em]">engku</span> ANAS<br />
            Z<span className="text-[0.72em] uppercase tracking-[0.01em]">ainal</span> A<span className="text-[0.72em] uppercase tracking-[0.01em]">bidin</span>
          </h3>
          <p className="text-lg sm:text-2xl text-[#5a5b5e] tracking-[0.05em] mt-3 bateman-letterpress">
            Q<span className="text-[0.74em] uppercase">uant</span> &nbsp;·&nbsp; D<span className="text-[0.74em] uppercase">ata</span> S<span className="text-[0.74em] uppercase">cience</span> &nbsp;·&nbsp; AI
          </p>
        </div>

        {/* Contact Coordinates */}
        <div className="flex flex-col space-y-6 pt-6 border-t border-[#121315]">
          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase">
              ELECTRONIC MAIL
            </span>
            <div className="flex items-center space-x-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg sm:text-2xl font-medium text-[#121315] tracking-[0.05em] hover:underline bateman-letterpress"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1 border border-[#121315] font-mono text-[10px] tracking-[0.18em] uppercase hover:bg-[#121315] hover:text-[#f7f6f2] transition-colors"
              >
                {copied ? 'COPIED' : 'COPY'}
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase">
              LINKEDIN
            </span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-2xl font-medium text-[#121315] tracking-[0.05em] hover:underline bateman-letterpress"
            >
              linkedin.com/in/tengkuanas
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-[#706f6a] uppercase">
              GITHUB
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-2xl font-medium text-[#121315] tracking-[0.05em] hover:underline bateman-letterpress"
            >
              github.com/tngkuanas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
