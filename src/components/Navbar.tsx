
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl md:text-2xl font-bold text-foreground">
              Portfolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#accomplishments">Accomplishments</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#work" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#resume" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Resume</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#education" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Education</a>
            <a href="#accomplishments" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Accomplishments</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
