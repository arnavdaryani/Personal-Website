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
      <footer className="site-footer"><a href="#about">Arnav Daryani.</a><span>Built with curiosity. © {new Date().getFullYear()}</span><a href="mailto:arnavdaryani@gmail.com">Say hello ↗</a></footer>
    </div>
  );
};
