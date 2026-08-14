import React, { useState, useEffect } from 'react';

export const HeaderNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('experience');

  useEffect(() => {
    const handleScroll = () => {
      // Reveal nav only after scrolling past the main hero business card
      const heroThreshold = window.innerHeight * 0.55;
      setIsVisible(window.scrollY > heroThreshold);

      const sections = ['experience', 'projects', 'research', 'about', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'experience', label: 'I. EXPERIENCE' },
    { id: 'projects', label: 'II. PROJECTS' },
    { id: 'research', label: 'III. RESEARCH' },
    { id: 'about', label: 'IV. ABOUT' },
    { id: 'contact', label: 'V. CONTACT' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#e3ded5] py-3 shadow-xs' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Stamp / Identity */}
        <a 
          href="#hero" 
          className="flex items-center space-x-3 group text-left"
        >
          <div className="w-7 h-7 border border-[#0f1115] flex items-center justify-center font-cinzel text-xs font-bold text-[#0f1115] transition-transform group-hover:scale-105">
            TA
          </div>
          <div className="hidden sm:block">
            <p className="font-cinzel text-xs tracking-widest font-semibold uppercase text-[#0f1115]">
              TENGKU ANAS
            </p>
            <p className="font-mono text-[9px] tracking-wider text-[#626773] uppercase">
              QUANT · DATA SCIENCE
            </p>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-mono text-xs tracking-wider transition-all duration-200 relative py-1 ${
                activeSection === item.id 
                  ? 'font-semibold text-[#0f1115] border-b border-[#0f1115]' 
                  : 'text-[#626773] hover:text-[#0f1115]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Contact Quick Link */}
        <div className="flex items-center space-x-3">
          <a
            href="#contact"
            className="px-3 py-1.5 border border-[#0f1115] text-[#0f1115] hover:bg-[#0f1115] hover:text-[#f7f5f0] font-mono text-[11px] tracking-wider transition-all shadow-2xs"
          >
            CONTACT DESK
          </a>
        </div>
      </div>

      {/* Mobile nav bar menu strip */}
      <div className="md:hidden flex justify-center space-x-4 pt-2 pb-1 border-t border-[#e3ded5]/50 mt-2 bg-[#f7f5f0]">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="font-mono text-[10px] tracking-wider text-[#525866] hover:text-[#0f1115] uppercase"
          >
            {item.id}
          </a>
        ))}
      </div>
    </header>
  );
};
