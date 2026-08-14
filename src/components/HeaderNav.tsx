import React, { useState, useEffect } from 'react';

export const HeaderNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.45;
      setIsVisible(window.scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = ['about', 'work', 'research', 'experience', 'lab', 'now', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-15% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { id: 'about', num: '01', label: 'ABOUT' },
    { id: 'work', num: '02', label: 'WORK' },
    { id: 'research', num: '03', label: 'RESEARCH' },
    { id: 'experience', num: '04', label: 'EXPERIENCE' },
    { id: 'lab', num: '05', label: 'LAB' },
    { id: 'contact', num: '06', label: 'CONTACT' },
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
        {/* Far Left: Logo Stamp + Name */}
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

        {/* Center: Understated Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs sm:text-sm tracking-[0.16em] font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors duration-200 py-1 uppercase flex items-center space-x-1.5 ${
                activeSection === item.id 
                  ? 'text-[#ffffff] font-bold border-b-2 border-[#ffffff]' 
                  : 'text-[#a0a4b0] hover:text-[#ffffff]'
              }`}
            >
              <span className="font-mono text-[9px] text-[#706f6a] tracking-normal font-normal">{item.num}</span>
              <span>{item.label}</span>
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

      {/* Mobile nav bar strip */}
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
