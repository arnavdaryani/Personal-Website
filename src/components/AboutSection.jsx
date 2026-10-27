import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const AboutSection = () => (
  <section id="about" className="intro page-width">
    <div className="intro-layout">
      <h1>Arnav<br /><span>Daryani<span className="name-period">.</span></span></h1>
      <div className="intro-detail">
        <p className="intro-lead">Building scalable, end-to-end software and AI systems that solve challenging problems.</p>
        <p className="intro-bio">Senior at Purdue University studying Computer Science, with concentrations in Machine Intelligence and Algorithmic Foundations, and a minor in Mathematics.</p>
        <a className="text-link intro-cta" href="#projects">Explore my work <ArrowDownRight size={20} /></a>
      </div>
    </div>
    <div className="intro-links">
      <a href="https://github.com/arnavdaryani" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a>
      <a href="https://www.linkedin.com/in/arnav-daryani/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
      <a href="mailto:arnavdaryani@gmail.com">Email <ArrowUpRight size={15} /></a>
    </div>
  </section>
);
