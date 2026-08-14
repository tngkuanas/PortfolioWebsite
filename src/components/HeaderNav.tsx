import React, { useState, useEffect } from 'react';

export const HeaderNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.5;
      setIsVisible(window.scrollY > heroThreshold);

      const sections = ['about', 'work', 'case-studies', 'research', 'experience', 'lab', 'now', 'contact'];
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: '01 ABOUT' },
    { id: 'work', label: '02 WORK' },
    { id: 'case-studies', label: '03 CASE STUDIES' },
    { id: 'research', label: '04 RESEARCH' },
    { id: 'experience', label: '05 EXPERIENCE' },
    { id: 'lab', label: '06 LAB' },
    { id: 'now', label: '07 NOW' },
    { id: 'contact', label: '08 CONTACT' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 bg-[#0e0f11] text-[#f7f6f2] py-3.5 shadow-md border-b border-[#22242a]' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between font-garamond">
        {/* Left Identity Stamp */}
        <a 
          href="#hero" 
          className="flex items-center space-x-3 group text-left"
        >
          <div className="w-6 h-6 border border-[#f7f6f2]/80 flex items-center justify-center font-garamond text-xs font-semibold text-[#f7f6f2]">
            TA
          </div>
          <div>
            <p className="font-garamond text-sm tracking-[0.14em] font-medium uppercase text-[#f7f6f2]">
              TENGKU ANAS
            </p>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 font-mono text-[11px] tracking-[0.15em]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors duration-200 py-1 uppercase ${
                activeSection === item.id 
                  ? 'text-[#f7f6f2] font-semibold border-b border-[#f7f6f2]' 
                  : 'text-[#9094a0] hover:text-[#f7f6f2]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Contact Quick Link */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="px-3 py-1 border border-[#f7f6f2]/70 text-[#f7f6f2] hover:bg-[#f7f6f2] hover:text-[#0e0f11] font-mono text-[10px] tracking-[0.18em] uppercase transition-all"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Mobile nav bar menu strip */}
      <div className="lg:hidden flex overflow-x-auto whitespace-nowrap space-x-4 px-6 pt-2 pb-1 border-t border-[#22242a] mt-2 bg-[#0e0f11] scrollbar-none font-mono text-[9px] tracking-wider text-[#9094a0]">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hover:text-[#f7f6f2] uppercase"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};
