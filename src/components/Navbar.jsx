import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [{name: "About", href: "#about"}, {name: "Experience", href: "#experience"}, {name: "Projects", href: "#projects"}];
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="page-width navigation" aria-label="Main navigation">
        <a className="wordmark" href="#about" onClick={() => setOpen(false)} aria-label="Arnav Daryani home">ad<span>.</span></a>
        <div className="desktop-links">{links.map(link => <a className="nav-link" key={link.href} href={link.href}>{link.name}</a>)}</div>
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        {open && <div id="mobile-navigation" className="mobile-links">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.name}</a>)}</div>}
      </nav>
    </header>
  );
};
