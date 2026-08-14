import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { HeaderNav } from './components/HeaderNav';
import { HeroCard } from './components/HeroCard';
import { AboutSection } from './components/AboutSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ResearchSection } from './components/ResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { LabSection } from './components/LabSection';
import { NowSection } from './components/NowSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SELECTED_PROJECTS, type ProjectItem } from './data/portfolioData';

export function App() {
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<ProjectItem>(
    SELECTED_PROJECTS[0]
  );

  // Initialize Lenis with Mouse Wheel Step Normalization & Inertia Smoothing
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleSelectProjectForCaseStudy = (project: ProjectItem) => {
    setSelectedCaseStudyProject(project);
  };

  return (
    <div className="min-h-screen relative text-[#121315] selection:bg-[#121315] selection:text-[#f7f6f2]">
      {/* GPU Composited Hardware-Accelerated Fixed Paper Background */}
      <div className="bateman-paper-bg-fixed" />

      {/* Essential Navigation Header Bar */}
      <HeaderNav />

      {/* Hero Digital Business Card */}
      <HeroCard />

      {/* Editorial Master Sections Flow */}
      <main className="relative z-10">
        {/* 01 — ABOUT */}
        <AboutSection />

        {/* 02 — SELECTED WORK */}
        <SelectedWorkSection onSelectProjectForCaseStudy={handleSelectProjectForCaseStudy} />

        {/* 03 — CASE STUDIES */}
        <CaseStudiesSection selectedProject={selectedCaseStudyProject} />

        {/* 04 — RESEARCH */}
        <ResearchSection />

        {/* 05 — EXPERIENCE */}
        <ExperienceSection />

        {/* 06 — LAB */}
        <LabSection />

        {/* 07 — NOW */}
        <NowSection />

        {/* 08 — CONTACT */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
