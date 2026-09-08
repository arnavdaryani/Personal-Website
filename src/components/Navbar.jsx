import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Home", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      // On mobile: hide when scrolling down, show when scrolling up.
      // Only kick in after scrolling past 80px so the nav doesn't vanish immediately.
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHidden(true);
        setIsMenuOpen(false);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-6 bg-background/90 backdrop-blur-md shadow-xs" : "py-7",
        // Hide on mobile when scrolling down; always visible on sm+ (desktop)
        isHidden ? "-translate-y-full sm:translate-y-0" : "translate-y-0"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl sm:text-2xl font-bold text-primary flex items-center"
          href="#about"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Arnav </span>{" "}
            Daryani
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="nav-link text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile hamburger — sits above the overlay */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* mobile menu overlay */}
        <div
          id="mobile-navigation"
          inert={isMenuOpen ? undefined : ""}
          className={cn(
            "fixed inset-x-0 top-0 h-dvh bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "invisible opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-10">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="nav-link text-2xl font-medium text-foreground/80 hover:text-primary transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
