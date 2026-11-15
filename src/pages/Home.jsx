import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <a href="#about" className="skip-link">Skip to content</a>
      <main>
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
};
