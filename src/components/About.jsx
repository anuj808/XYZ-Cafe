import Card3D from "./Card3D";

export default function About() {
  return (
    <section id="about" className="bg-[#0d0500] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left image */}
        <div className="relative reveal-left">
          <div className="w-full h-[420px] bg-gradient-to-br from-amber-900/40 to-amber-800/10 border border-amber-800/30 flex items-center justify-center rounded-sm overflow-hidden img-shimmer relative">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80"
              alt="Inside XYZ Café"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0500]/50 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-700/20 rounded-sm pointer-events-none" />
          <div className="absolute -top-5 -left-5 bg-amber-500 text-[#1a0a00] px-5 py-4 text-center shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>
            <p className="text-3xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>10+</p>
            <p className="text-xs tracking-widest uppercase font-semibold">Years Brewing</p>
          </div>
        </div>

        {/* Right text */}
        <div className="reveal-right">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our Story</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Georgia', serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            More Than Just <span className="text-amber-400 italic">Coffee</span>
          </h2>
          <p className="text-amber-200/60 leading-relaxed mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            XYZ Café was born from a simple belief — that a great cup of coffee has the power to transform your day. We source our beans directly from small farms, roast them with care, and brew them with precision.
          </p>
          <p className="text-amber-200/60 leading-relaxed mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            Every corner of our café is designed to make you feel at home, from the warm lighting to the handpicked playlist. We're not just a café — we're your daily ritual.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { num: "50+", label: "Menu Items" },
              { num: "200+", label: "Daily Guests" },
              { num: "100%", label: "Organic" },
            ].map((stat, ) => (
              <Card3D key={stat.label} className="bg-[#1a0a00] border border-amber-800/30 p-4 text-center reveal delay-200">
                <p className="text-amber-400 text-2xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>{stat.num}</p>
                <p className="text-amber-200/50 text-xs tracking-wider uppercase mt-1" style={{ fontFamily: "'Georgia', serif" }}>{stat.label}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}