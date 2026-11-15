const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => (
  <header className="site-header page-width">
    <nav className="navigation" aria-label="Main navigation">
      {links.map(link => <a key={link.href} href={link.href}>{link.name}</a>)}
    </nav>
  </header>
);
