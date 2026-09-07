import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ArrowDown, ArrowUpRight, Download, Mail, Pause, Play } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {
  const [paused, setPaused] = useState(false);
  return (
    <section id="about" className={`hero-section ${paused ? "motion-paused" : ""}`}>
      <div className="hero-copy">
        <a href="#experience" className="incoming-pill"><span /> Incoming at Tesla <span className="pill-date">Fall 2026</span><ArrowUpRight size={16} /></a>
        <p className="eyebrow">SOFTWARE ENGINEER / PURDUE UNIVERSITY</p>
        <h1>Arnav<br /><span>Daryani.</span></h1>
        <p className="hero-intro">From a line of code<br />to something that matters.</p>
        <p className="hero-bio">I build end-to-end software, explore machine learning, and enjoy the problems in between. Computer Science at Purdue, with concentrations in Machine Learning and Algorithmic Foundations, and minors in Mathematics and Economics.</p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">Explore my work <ArrowUpRight size={19} /></a>
          <a className="resume-action" href="/ArnavDaryaniResume.pdf" target="_blank" rel="noopener noreferrer"><Download size={18} /> Résumé</a>
        </div>
        <div className="social-row">
          <a href="https://www.linkedin.com/in/arnav-daryani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://github.com/arnavdaryani" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:arnavdaryani@gmail.com" aria-label="Email"><Mail size={19} /></a>
          <span>Let’s build something.</span>
        </div>
      </div>
      <div className="hero-art">
        <div className="art-coordinate">AD—01 <span>EXPLORING WHAT’S NEXT</span></div>
        <div className="sculpture-scene" aria-hidden="true">
          <div className="sculpture-glow" />
          <div className="sculpture">
            {Array.from({ length: 15 }, (_, i) => <div className="sculpture-ring" key={i} style={{ "--ring": i }} />)}
            <div className="sculpture-core" />
          </div>
          <div className="orbit orbit-one"><i /></div><div className="orbit orbit-two"><i /></div>
        </div>
        <div className="art-footer"><span><i /> SYSTEMS · SOFTWARE · ML</span><button onClick={() => setPaused(!paused)} aria-label={paused ? "Play animation" : "Pause animation"} aria-pressed={paused}>{paused ? <Play size={15} /> : <Pause size={15} />}</button></div>
      </div>
      <div className="hero-bottom"><span>Incoming Software Engineer Intern <b>TESLA ↗</b></span><a href="#experience">Scroll to explore <ArrowDown size={15} /></a></div>
    </section>
  );
};
