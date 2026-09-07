import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactPage } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}


      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <a href="#about" className="skip-link">Skip to content</a>
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactPage />
      </main>
    </div>
  );
};
