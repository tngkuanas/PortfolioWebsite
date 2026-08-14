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
          ? 'translate-y-0 opacity-100 bg-[#f7f6f2]/95 backdrop-blur-md text-[#121315] py-4 shadow-sm border-b border-[#121315]' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-full px-8 sm:px-14 md:px-20 lg:px-24 flex items-center justify-between font-garamond">
        {/* Far Left: Logo Stamp + Name (Warm White Paper Background Theme) */}
        <a 
          href="#hero" 
          className="flex items-center space-x-3.5 group text-left"
        >
          <div className="w-7 h-7 border border-[#121315] flex items-center justify-center font-bold text-xs text-[#121315] bg-[#f7f6f2]">
            TA
          </div>
          <div>
            <p className="text-sm sm:text-base tracking-[0.18em] font-semibold uppercase text-[#121315]">
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
                  ? 'text-[#121315] font-bold border-b-2 border-[#121315]' 
                  : 'text-[#706f6a] hover:text-[#121315]'
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
            className="px-4 py-1.5 border border-[#121315] text-[#121315] hover:bg-[#121315] hover:text-[#f7f6f2] text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase transition-all"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Mobile nav bar strip (Warm White Paper Theme) */}
      <div className="lg:hidden flex overflow-x-auto whitespace-nowrap space-x-5 px-8 pt-2 pb-1 border-t border-[#121315] mt-2 bg-[#f7f6f2] scrollbar-none text-xs sm:text-sm tracking-[0.15em] text-[#706f6a] font-garamond">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hover:text-[#121315] uppercase font-medium"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};
