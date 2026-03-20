// import { useEffect, useRef } from "react";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  size: `${3 + Math.random() * 5}px`,
  delay: `${Math.random() * 6}s`,
  duration: `${4 + Math.random() * 5}s`,
  bottom: `${Math.random() * 20}%`,
}));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#1a0a00] overflow-hidden">
      {/* Bg layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d1200] via-[#1a0a00] to-[#0a0300]" />
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, #b45309 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, #92400e 0%, transparent 40%)`
      }} />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div key={p.id} className="particle" style={{
          left: p.left, bottom: p.bottom,
          width: p.size, height: p.size,
          animationDelay: p.delay, animationDuration: p.duration,
        }} />
      ))}

      {/* Decorative rings */}
      <div className="absolute right-[-80px] top-[-80px] w-[420px] h-[420px] rounded-full border border-amber-800/15 animate-[spin_20s_linear_infinite]" />
      <div className="absolute right-[-30px] top-[-30px] w-[280px] h-[280px] rounded-full border border-amber-700/15 animate-[spin_14s_linear_infinite_reverse]" />
      <div className="absolute left-[-120px] bottom-[-80px] w-[360px] h-[360px] rounded-full border border-amber-800/10 animate-[spin_25s_linear_infinite]" />

      {/* Coffee cup with steam */}
      <div className="absolute right-10 bottom-20 hidden lg:flex flex-col items-center opacity-20 select-none">
        <div className="flex gap-3 mb-2 h-12 items-end">
          <div className="steam w-1 h-8 bg-amber-400 rounded-full opacity-50" />
          <div className="steam-2 w-1 h-10 bg-amber-400 rounded-full opacity-50" />
          <div className="steam-3 w-1 h-7 bg-amber-400 rounded-full opacity-50" />
        </div>
        <div className="text-[7rem] leading-none">☕</div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-amber-500 text-xs tracking-[0.5em] uppercase mb-6 animate-[fadeInDown_0.8s_ease_forwards]"
          style={{ fontFamily: "'Georgia', serif" }}>
          Est. 2024 · Crafted with Love
        </p>

        {/* 3D layered heading */}
        <h1 className="text-white text-5xl md:text-8xl font-bold leading-none mb-6 animate-[fadeInUp_0.9s_ease_0.2s_forwards] opacity-0"
          style={{
            fontFamily: "'Georgia', serif",
            textShadow: "0 1px 0 #92400e, 0 2px 0 #7c3409, 0 4px 8px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)"
          }}>
          Where Every
          <br />
          <span className="text-amber-400 italic text-glow">Cup Tells</span>
          <br />
          a Story
        </h1>

        <p className="text-amber-200/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.9s_ease_0.4s_forwards] opacity-0"
          style={{ fontFamily: "'Georgia', serif" }}>
          Step into XYZ Café — a sanctuary of warmth, handcrafted brews, and moments worth lingering over.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.9s_ease_0.6s_forwards] opacity-0">
          <a href="#menu"
            className="px-8 py-4 bg-amber-500 text-[#1a0a00] font-bold text-sm tracking-widest uppercase hover:bg-amber-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
            style={{ fontFamily: "'Georgia', serif" }}>
            Explore Menu
          </a>
          <a href="#about"
            className="px-8 py-4 border border-amber-600/50 text-amber-300 font-semibold text-sm tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1"
            style={{ fontFamily: "'Georgia', serif" }}>
            Our Story
          </a>
        </div>
      </div>

      {/* Marquee strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-amber-900/30 bg-[#0d0500]/60 py-3 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap" style={{ width: "max-content" }}>
          {Array(8).fill(["☕ Espresso", "🥐 Croissants", "🍵 Matcha", "🍫 Lava Cake", "🎵 Live Jazz", "🫖 Masala Chai"]).flat().map((item, i) => (
            <span key={i} className="text-amber-700/60 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Georgia', serif" }}>{item}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown { from { opacity:0; transform:translateY(-25px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInUp   { from { opacity:0; transform:translateY(25px);  } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
  );
}