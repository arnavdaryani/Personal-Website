import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ArrowUpRight, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

export const AboutSection = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const element = sectionRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const render = () => {
      frame = 0;
      const progress = preference.matches ? 0 : Math.min(1, Math.max(0, -element.getBoundingClientRect().top / element.offsetHeight));
      element.style.setProperty("--scroll-shift", `${progress * 160}px`);
      element.style.setProperty("--light-turn", `${progress * 18 - 12}deg`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(render); };
    window.addEventListener("scroll", onScroll, { passive: true });
    preference.addEventListener("change", onScroll);
    render();
    return () => {
      window.removeEventListener("scroll", onScroll);
      preference.removeEventListener("change", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  const handlePointerMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${(event.clientX - bounds.left) / bounds.width * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${(event.clientY - bounds.top) / bounds.height * 100}%`);
  };
  return (
    <section ref={sectionRef} id="about" className="hero-section" onPointerMove={handlePointerMove}>
      <div className="hero-light" aria-hidden="true"><i /><i /><i /></div>
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
