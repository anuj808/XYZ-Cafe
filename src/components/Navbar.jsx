import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Team", href: "#staff" },
  { label: "Events", href: "#events" },
  { label: "Blog", href: "#blog" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? "bg-[#1a0a00]/95 backdrop-blur shadow-lg py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <span className="text-amber-400 text-xl font-bold tracking-widest uppercase" style={{ fontFamily: "'Georgia', serif" }}>
            XYZ Café
          </span>
        </a>

        <ul className="hidden lg:flex gap-7">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}
                className="text-amber-100/80 hover:text-amber-400 text-xs tracking-widest uppercase transition-colors duration-200 relative group"
                style={{ fontFamily: "'Georgia', serif" }}>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#reservations"
          className="hidden lg:block px-5 py-2 border border-amber-400 text-amber-400 text-xs tracking-widest uppercase hover:bg-amber-400 hover:text-[#1a0a00] transition-all duration-300 font-bold"
          style={{ fontFamily: "'Georgia', serif" }}>
          Reserve a Table
        </a>

        <button className="lg:hidden text-amber-400 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1a0a00]/98 px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-amber-200 text-sm tracking-widest uppercase hover:text-amber-400"
              style={{ fontFamily: "'Georgia', serif" }}>
              {link.label}
            </a>
          ))}
          <a href="#reservations" onClick={() => setMenuOpen(false)}
            className="text-amber-400 text-sm tracking-widest uppercase font-bold border border-amber-500 px-4 py-2 text-center"
            style={{ fontFamily: "'Georgia', serif" }}>
            Reserve a Table
          </a>
        </div>
      )}
    </nav>
  );
}