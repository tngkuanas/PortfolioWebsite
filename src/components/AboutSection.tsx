import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const metaRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } });

              tl.fromTo(
                labelRef.current,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.8 },
                0.1
              );

              const headingLines = headingRef.current?.querySelectorAll('.typeset-line');
              if (headingLines && headingLines.length > 0) {
                tl.fromTo(
                  headingLines,
                  { opacity: 0, y: 35 },
                  { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 },
                  0.2
                );
              } else {
                tl.fromTo(
                  headingRef.current,
                  { opacity: 0, y: 35 },
                  { opacity: 1, y: 0, duration: 1.2 },
                  0.2
                );
              }

              tl.fromTo(
                subHeadingRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9 },
                0.4
              );

              tl.fromTo(
                paragraphRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9 },
                0.6
              );

              if (metaRightRef.current) {
                const items = metaRightRef.current.querySelectorAll('.meta-item');
                tl.fromTo(
                  items,
                  { opacity: 0, x: 25 },
                  { opacity: 1, x: 0, duration: 0.8, stagger: 0.12 },
                  0.5
                );
              }

              observer.disconnect();
            }
          });
        },
        { threshold: 0.12 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen w-full relative bateman-paper-texture py-24 sm:py-32 px-8 sm:px-14 md:px-20 lg:px-24 flex flex-col justify-between overflow-hidden selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* Main Editorial Grid: 3-Column Asymmetric Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 my-auto items-start z-10">
        
        {/* COLUMN 1: Understated Section Label */}
        <div className="lg:col-span-2 flex flex-col justify-start">
          <div 
            ref={labelRef}
            className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#706f6a] uppercase font-medium bateman-letterpress"
          >
            01 — ABOUT
          </div>
        </div>

        {/* COLUMN 2: Main Direct Statement */}
        <div className="lg:col-span-7 flex flex-col space-y-8 sm:space-y-10 pr-0 lg:pr-8">
          {/* Main Name Heading */}
          <h2
            ref={headingRef}
            className="font-garamond text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.03em] leading-[0.95] text-[#121315] bateman-letterpress-heading uppercase"
          >
            <div className="typeset-line">
              T<span className="text-[0.72em] uppercase tracking-[0.01em]">engku</span> ANAS
            </div>
            <div className="typeset-line mt-1">
              Z<span className="text-[0.72em] uppercase tracking-[0.01em]">ainal</span> A<span className="text-[0.72em] uppercase tracking-[0.01em]">bidin</span>
            </div>
          </h2>

          {/* Sub-heading Pillars */}
          <div
            ref={subHeadingRef}
            className="font-garamond text-lg sm:text-2xl md:text-3xl text-[#121315] tracking-[0.05em] leading-relaxed bateman-letterpress"
          >
            <p>
              Q<span className="text-[0.74em] uppercase">uant</span> &nbsp;·&nbsp; I<span className="text-[0.74em] uppercase">nvestments</span> &nbsp;·&nbsp; T<span className="text-[0.74em] uppercase">rading</span> &nbsp;·&nbsp; D<span className="text-[0.74em] uppercase">ata</span> S<span className="text-[0.74em] uppercase">cience</span> &nbsp;·&nbsp; AI
            </p>
          </div>

          {/* Direct Statement Profile (Clean & Direct) */}
          <div
            ref={paragraphRef}
            className="font-garamond text-lg sm:text-2xl text-[#2a2b2e] leading-relaxed tracking-[0.03em] bateman-letterpress max-w-3xl pt-2"
          >
            <p>
              Computer Science student focused on quantitative research, data science and AI. Interested in markets, systematic decision-making and building data-driven systems.
            </p>
          </div>
        </div>

        {/* COLUMN 3: Metadata Details */}
        <div 
          ref={metaRightRef}
          className="lg:col-span-3 lg:pl-6 flex flex-col space-y-8 font-garamond"
        >
          {/* Metadata Block 1: Location */}
          <div className="meta-item flex flex-col space-y-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#706f6a] uppercase">
              BASED IN
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-[#121315] tracking-[0.08em] bateman-letterpress">
              K<span className="text-[0.74em] uppercase">uala</span> L<span className="text-[0.74em] uppercase">umpur</span>, M<span className="text-[0.74em] uppercase">alaysia</span>
            </span>
          </div>

          {/* Metadata Block 2: Institution */}
          <div className="meta-item flex flex-col space-y-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#706f6a] uppercase">
              EDUCATION
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-[#121315] tracking-[0.08em] bateman-letterpress">
              U<span className="text-[0.74em] uppercase">niversity of</span> M<span className="text-[0.74em] uppercase">alaya</span><br />
              <span className="text-xs sm:text-sm text-[#706f6a] font-normal">B.S<span className="text-[0.74em] uppercase">c</span>. C<span className="text-[0.74em] uppercase">omputer</span> S<span className="text-[0.74em] uppercase">cience</span> (D<span className="text-[0.74em] uppercase">ata</span> S<span className="text-[0.74em] uppercase">cience</span>)</span>
            </span>
          </div>

          {/* Metadata Block 3: Methodology */}
          <div className="meta-item flex flex-col space-y-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#706f6a] uppercase">
              METHODOLOGY
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-[#121315] tracking-[0.08em] bateman-letterpress">
              Q<span className="text-[0.74em] uppercase">uantitative</span> R<span className="text-[0.74em] uppercase">esearch</span><br />
              M<span className="text-[0.74em] uppercase">achine</span> L<span className="text-[0.74em] uppercase">earning</span>
            </span>
          </div>

          {/* Metadata Block 4: Core Domain */}
          <div className="meta-item flex flex-col space-y-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#706f6a] uppercase">
              CORE DOMAIN
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-[#121315] tracking-[0.08em] bateman-letterpress">
              F<span className="text-[0.74em] uppercase">inancial</span> M<span className="text-[0.74em] uppercase">arkets</span><br />
              S<span className="text-[0.74em] uppercase">ystematic</span> S<span className="text-[0.74em] uppercase">ystems</span>
            </span>
          </div>

          {/* Metadata Block 5: Corporate Desk */}
          <div className="meta-item flex flex-col space-y-1 pt-2">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#706f6a] uppercase">
              CURRENT AFFILIATION
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#121315] tracking-[0.1em] bateman-letterpress uppercase">
              PETRONAS / PETCO TRADING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
