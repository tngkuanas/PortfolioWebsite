import React, { useState, useEffect } from 'react';

export const HeaderNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.45;
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
          ? 'translate-y-0 opacity-100 bg-[#0e0f11] text-[#ffffff] py-4 shadow-lg border-b border-[#22242a]' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-full px-8 sm:px-14 md:px-20 lg:px-24 flex items-center justify-between font-garamond">
        {/* Far Left: Logo Stamp + Name (Deep Obsidian Black Theme) */}
        <a 
          href="#hero" 
          className="flex items-center space-x-3.5 group text-left"
        >
          <div className="w-7 h-7 border border-[#ffffff] flex items-center justify-center font-bold text-xs text-[#ffffff] bg-[#121315]">
            TA
          </div>
          <div>
            <p className="text-sm sm:text-base tracking-[0.18em] font-semibold uppercase text-[#ffffff]">
              TENGKU ANAS
            </p>
          </div>
        </a>

        {/* Center: Section Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs sm:text-sm tracking-[0.16em] font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors duration-200 py-1 uppercase ${
                activeSection === item.id 
                  ? 'text-[#ffffff] font-bold border-b-2 border-[#ffffff]' 
                  : 'text-[#a0a4b0] hover:text-[#ffffff]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Far Right: Contact Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="px-4 py-1.5 border border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#0e0f11] text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase transition-all"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Mobile nav bar strip (Deep Obsidian Black Theme) */}
      <div className="lg:hidden flex overflow-x-auto whitespace-nowrap space-x-5 px-8 pt-2 pb-1 border-t border-[#22242a] mt-2 bg-[#0e0f11] scrollbar-none text-xs sm:text-sm tracking-[0.15em] text-[#a0a4b0] font-garamond">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hover:text-[#ffffff] uppercase font-medium"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};
