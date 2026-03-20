export default function Footer() {
  return (
    <footer className="bg-[#070200] border-t border-amber-900/20 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="text-amber-400 font-bold tracking-widest uppercase text-lg" style={{ fontFamily: "'Georgia', serif" }}>XYZ Café</span>
            </div>
            <p className="text-amber-200/40 text-xs leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>
              A sanctuary of warmth, handcrafted brews, and moments worth lingering over. Est. 2024, Aligarh.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-amber-500 text-xs tracking-widest uppercase mb-4 font-semibold" style={{ fontFamily: "'Georgia', serif" }}>Explore</h4>
            {["Menu", "Our Team", "Gallery", "Events & Offers"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "").replace("&", "")}`}
                className="block text-amber-200/40 text-xs mb-2 hover:text-amber-400 transition-colors tracking-wide"
                style={{ fontFamily: "'Georgia', serif" }}>{l}</a>
            ))}
          </div>

          {/* Stories */}
          <div>
            <h4 className="text-amber-500 text-xs tracking-widest uppercase mb-4 font-semibold" style={{ fontFamily: "'Georgia', serif" }}>Stories</h4>
            {["Coffee Stories", "Reservations", "Testimonials", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "")}`}
                className="block text-amber-200/40 text-xs mb-2 hover:text-amber-400 transition-colors tracking-wide"
                style={{ fontFamily: "'Georgia', serif" }}>{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-500 text-xs tracking-widest uppercase mb-4 font-semibold" style={{ fontFamily: "'Georgia', serif" }}>Contact</h4>
            <p className="text-amber-200/40 text-xs mb-2" style={{ fontFamily: "'Georgia', serif" }}>123 Coffee Lane, Civil Lines</p>
            <p className="text-amber-200/40 text-xs mb-2" style={{ fontFamily: "'Georgia', serif" }}>Aligarh, UP 202001</p>
            <p className="text-amber-200/40 text-xs mb-2" style={{ fontFamily: "'Georgia', serif" }}>+91 98765 43210</p>
            <p className="text-amber-200/40 text-xs mb-4" style={{ fontFamily: "'Georgia', serif" }}>hello@xyzcafe.in</p>
            <div className="flex gap-4">
              {["Ig", "Fb", "Tw"].map(s => (
                <a key={s} href="#"
                  className="w-8 h-8 border border-amber-800/40 flex items-center justify-center text-amber-600 hover:border-amber-500 hover:text-amber-400 transition-all text-xs font-bold"
                  style={{ fontFamily: "'Georgia', serif" }}>{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-200/20 text-xs" style={{ fontFamily: "'Georgia', serif" }}>
            © {new Date().getFullYear()} XYZ Café. All rights reserved.
          </p>
          <p className="text-amber-200/20 text-xs" style={{ fontFamily: "'Georgia', serif" }}>
            Made with ♥ in Aligarh, India
          </p>
        </div>
      </div>
    </footer>
  );
}