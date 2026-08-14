import React, { useState, useEffect } from 'react';

export const PagePositionIndicator: React.FC = () => {
  const [position, setPosition] = useState({ code: '00 / 01', label: 'CARD' });

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.5;
      if (window.scrollY < heroThreshold) {
        setPosition({ code: '00 / 01', label: 'CARD' });
      } else {
        setPosition({ code: '01 / 01', label: 'ABOUT' });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-8 sm:bottom-8 sm:right-12 z-40 pointer-events-none select-none">
      <div className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#121315] opacity-80 uppercase flex items-center gap-3 bateman-letterpress">
        <span className="font-medium">{position.code}</span>
        <span className="w-3 h-[1px] bg-[#121315]/40" />
        <span className="font-semibold">{position.label}</span>
      </div>
    </div>
  );
};
