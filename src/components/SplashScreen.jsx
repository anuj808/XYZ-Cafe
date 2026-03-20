export default function SplashScreen({ fading }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1a0a00] transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-amber-800 opacity-20 blur-[120px] animate-pulse" />
      </div>

      {/* Coffee ring decorative circle */}
      <div className="absolute w-64 h-64 rounded-full border border-amber-700/30 animate-[spin_12s_linear_infinite]" />
      <div className="absolute w-80 h-80 rounded-full border border-amber-600/20 animate-[spin_18s_linear_infinite_reverse]" />

      {/* Logo / icon */}
      <div className="relative mb-6 animate-[fadeInDown_0.8s_ease_forwards]">
        <div className="text-6xl">☕</div>
      </div>

      {/* Welcome text */}
      <h1
        className="relative text-white font-serif text-4xl md:text-5xl text-center leading-tight tracking-widest uppercase animate-[fadeInUp_1s_ease_0.3s_forwards] opacity-0"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        Welcome to
      </h1>
      <h2
        className="relative text-amber-400 font-serif text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase mt-2 animate-[fadeInUp_1s_ease_0.6s_forwards] opacity-0"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        XYZ Café
      </h2>
      <p
        className="mt-4 text-amber-200/60 text-sm tracking-[0.3em] uppercase animate-[fadeInUp_1s_ease_0.9s_forwards] opacity-0"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        Sip. Savour. Stay.
      </p>

      {/* Loading bar */}
      <div className="mt-10 w-48 h-[2px] bg-amber-900/40 rounded-full overflow-hidden animate-[fadeIn_1s_ease_1s_forwards] opacity-0">
        <div className="h-full bg-amber-400 animate-[loadBar_2.5s_ease_forwards]" />
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
