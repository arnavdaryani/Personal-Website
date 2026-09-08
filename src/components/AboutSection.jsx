import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ArrowUpRight, Mail } from "lucide-react";
import { pointerMotion } from "../lib/pointerMotion";

export const AboutSection = () => {
  return (
    <section id="about" className="hero-section" {...pointerMotion}>
      <div className="hero-copy">
        <h1 aria-label="Arnav Daryani"><span className="name-first" aria-hidden="true">Arnav</span>{" "}<span className="name-last" aria-hidden="true">Daryani.</span></h1>
        <p className="hero-bio">Senior at Purdue University studying Computer Science, with concentrations in Machine Intelligence and Algorithmic Foundations, and a minor in Mathematics.</p>
        <p className="hero-bio hero-passion">Passionate about building scalable, end-to-end software and AI systems that solve challenging problems.</p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">Explore my work <ArrowUpRight size={19} /></a>
        </div>
        <div className="social-row">
          <a href="https://www.linkedin.com/in/arnav-daryani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://github.com/arnavdaryani" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:arnavdaryani@gmail.com" aria-label="Email"><Mail size={19} /></a>
        </div>
      </div>
    </section>
  );
};
