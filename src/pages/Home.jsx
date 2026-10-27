import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <a href="#about" className="skip-link">Skip to content</a>
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
};
