import { useState, useEffect } from "react";
import { Wind } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-primary-10 backdrop-blur-0 shadow-none"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wind className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <span className="text-lg font-semibold text-text tracking-tight">
            BreatheMap
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-8 text-sm text-text/70">
          <a href="#why" className="hover:text-primary transition-colors">
            Why it matters
          </a>
          <a href="#routes" className="hover:text-primary transition-colors">
            Routes
          </a>
          <a href="#community" className="hover:text-primary transition-colors">
            Community
          </a>
          <a
            href="/auth"
            className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:brightness-110 transition-all"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
