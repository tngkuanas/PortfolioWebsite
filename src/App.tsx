import { HeaderNav } from './components/HeaderNav';
import { HeroCard } from './components/HeroCard';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#0f1115] transition-colors duration-300 relative selection:bg-[#0f1115] selection:text-[#f7f5f0]">
      {/* Essential Top Header Bar */}
      <HeaderNav />

      {/* Hero Digital Business Card */}
      <HeroCard />

      {/* Desk Portfolio Sections */}
      <main>
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Wall St Registry Footer */}
      <Footer />
    </div>
  );
}

export default App;
