import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const AboutSection = () => {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused);
    return () => document.documentElement.classList.remove("motion-paused");
  }, [paused]);
  const handlePointerMove = (event) => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${(event.clientX - bounds.left) / bounds.width * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${(event.clientY - bounds.top) / bounds.height * 100}%`);
  };
  return (
    <section id="about" className="hero-section" onPointerMove={handlePointerMove}>
      <div className="hero-copy">
        <p className="eyebrow">SOFTWARE ENGINEER / PURDUE UNIVERSITY</p>
        <h1>Arnav <span>Daryani.</span></h1>
        <p className="hero-bio">Senior at Purdue University studying Computer Science, with concentrations in Machine Intelligence and Algorithmic Foundations, and a minor in Mathematics.</p>
        <p className="hero-bio hero-passion">Passionate about building scalable, end-to-end software and AI systems that solve challenging problems.</p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">Explore my work <ArrowUpRight size={19} /></a>
          <a className="resume-action" href="/ArnavDaryaniResume.pdf" target="_blank" rel="noopener noreferrer"><Download size={18} /> Résumé</a>
        </div>
        <div className="social-row">
          <a href="https://www.linkedin.com/in/arnav-daryani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://github.com/arnavdaryani" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:arnavdaryani@gmail.com" aria-label="Email"><Mail size={19} /></a>
        </div>
      </div>
      <div className="hero-bottom"><a href="#experience">Scroll to explore <ArrowDown size={15} /></a><button className="motion-control" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Resume motion" : "Pause motion"}</button></div>
    </section>
  );
};
