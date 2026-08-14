import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroCard: React.FC = () => {
  const handleScrollClick = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      onClick={handleScrollClick}
      className="h-[100vh] h-[100svh] w-screen relative flex flex-col justify-between p-8 sm:p-14 md:p-20 lg:p-24 bateman-paper-texture overflow-hidden cursor-pointer selection:bg-[#121315] selection:text-[#f7f6f2]"
    >
      {/* TOP REGION: Phone Top Left, Company Top Right */}
      <div className="flex justify-between items-start z-10 w-full pt-2 font-garamond">
        {/* Top Left: Phone Number */}
        <div className="text-left font-medium text-lg sm:text-2xl md:text-3xl lg:text-4xl bateman-letterpress tracking-[0.08em]">
          60 19 269 0399
        </div>

        {/* Top Right: Company & Sub-unit */}
        <div className="flex flex-col items-center text-center space-y-0.5 sm:space-y-1">
          {/* PETRONAS */}
          <p className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl bateman-letterpress tracking-[0.14em] leading-none uppercase text-center">
            PETRONAS
          </p>

          {/* PETCO Trading Labuan Company Ltd */}
          <p className="text-[10px] sm:text-sm md:text-base lg:text-lg bateman-letterpress tracking-[0.03em] font-medium leading-tight whitespace-nowrap text-center">
            PETCO T<span className="text-[0.72em] uppercase">rading</span> L<span className="text-[0.72em] uppercase">abuan</span> C<span className="text-[0.72em] uppercase">ompany</span> L<span className="text-[0.72em] uppercase">td</span>
          </p>
        </div>
      </div>

      {/* CENTER REGION: Name & Position (Quant · Data Science) */}
      <div className="my-auto py-8 z-10 text-center w-full max-w-6xl mx-auto space-y-0.5 sm:space-y-1 font-garamond">
        {/* Name: Tengku ANAS */}
        <h1 className="text-5xl sm:text-7xl md:text-[5.25rem] lg:text-[6rem] font-normal tracking-[0.01em] leading-tight bateman-letterpress-heading">
          T<span className="text-[0.68em] uppercase tracking-normal">engku</span> ANAS
        </h1>

        {/* Position: Quant · Data Science */}
        <p className="text-xl sm:text-3xl md:text-[2.5rem] lg:text-[3rem] font-normal tracking-[0.02em] bateman-letterpress">
          Q<span className="text-[0.68em] uppercase">uant</span> &nbsp;·&nbsp; D<span className="text-[0.68em] uppercase">ata</span> S<span className="text-[0.68em] uppercase">cience</span>
        </p>
      </div>

      {/* BOTTOM REGION: 4 Distinct Components Distributed End-to-End */}
      <div className="z-10 w-full font-garamond pt-4 pb-2">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end text-base sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] tracking-[0.04em] bateman-letterpress gap-2 md:gap-0">
          {/* Component 1: Address */}
          <span className="text-left font-medium">
            M<span className="text-[0.72em] uppercase">enara</span> P<span className="text-[0.72em] uppercase">ermata</span> S<span className="text-[0.72em] uppercase">apura</span>, K<span className="text-[0.72em] uppercase">uala</span> L<span className="text-[0.72em] uppercase">umpur</span>, MY
          </span>

          {/* Component 2: Email */}
          <span className="text-center font-medium">
            E: T<span className="text-[0.72em] uppercase">engkuanas04@gmail.com</span>
          </span>

          {/* Component 3: LinkedIn */}
          <a 
            href={PERSONAL_INFO.linkedin}
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
            className="text-center font-medium hover:underline"
          >
            L<span className="text-[0.72em] uppercase">inkedIn</span>: linkedin.com/in/tengkuanas
          </a>

          {/* Component 4: GitHub */}
          <a 
            href={PERSONAL_INFO.github}
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
            className="text-right font-medium hover:underline"
          >
            G<span className="text-[0.72em] uppercase">itHub</span>: github.com/tngkuanas
          </a>
        </div>
      </div>
    </section>
  );
};
