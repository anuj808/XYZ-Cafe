import { useState } from "react";

const staff = [
  {
    name: "Arjun Sharma",
    role: "Head Barista & Co-Founder",
    bio: "With 12 years of crafting the perfect cup across Mumbai and Bangalore, Arjun returned to Aligarh to build something rooted and real. He believes coffee is a conversation, not just a beverage.",
    specialty: "Single-Origin Pour Overs",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    quote: "Every bean has a story. I just help tell it.",
    side: "left",
  },
  {
    name: "Priya Nair",
    role: "Pastry Chef & Menu Designer",
    bio: "Trained in classical French patisserie and deeply influenced by South Indian flavours, Priya creates pastries that feel both indulgent and familiar. Her croissants have a waiting list.",
    specialty: "Fusion Pastries & Seasonal Menus",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    quote: "Food should feel like a hug from someone you love.",
    side: "right",
  },
  {
    name: "Rahul Verma",
    role: "Café Manager & Host",
    bio: "Rahul runs the floor with warmth and precision. A former hospitality graduate from IIHM Kolkata, he ensures every guest feels seen, welcomed, and in no rush to leave.",
    specialty: "Guest Experience & Event Curation",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    quote: "A great café visit should feel like the best part of your day.",
    side: "left",
  },
];

export default function Staff() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="staff" className="bg-[#0d0500] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Georgia', serif" }}>The People Behind the Cup</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif", textShadow:"0 2px 12px rgba(0,0,0,0.4)" }}>
            Meet Our <span className="text-amber-400 italic">Team</span>
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          {staff.map((person, i) => (
            <div key={person.name}
              className={`flex flex-col ${person.side === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-stretch border-t border-amber-900/20 ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}>

              {/* ── Image column — fixed smaller height ── */}
              <div className="md:w-2/5 relative overflow-hidden group" style={{ minHeight: "320px", maxHeight: "380px" }}>
                {/* Clickable image */}
                <img
                  src={person.img}
                  alt={person.name}
                  onClick={() => setLightbox(person)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  style={{ minHeight: "320px", maxHeight: "380px" }}
                  title="Click to enlarge"
                />
                {/* Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-${person.side === "right" ? "l" : "r"} from-[#0d0500]/70 via-transparent to-transparent pointer-events-none`} />

                {/* Click hint */}
                <div className="absolute bottom-3 right-3 bg-[#0d0500]/70 border border-amber-700/40 text-amber-400 text-[10px] tracking-wider px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ fontFamily: "'Georgia', serif" }}>
                  🔍 Click to enlarge
                </div>

                {/* Big number */}
                <div className="absolute bottom-2 left-4 text-amber-800/20 font-bold select-none pointer-events-none"
                  style={{ fontFamily: "'Georgia', serif", fontSize: "6rem", lineHeight: 1 }}>
                  0{i + 1}
                </div>
              </div>

              {/* ── Text column ── */}
              <div className={`md:w-3/5 flex flex-col justify-center px-8 py-10 bg-[#0d0500] ${person.side === "right" ? "md:pl-14 md:pr-8" : "md:pr-14 md:pl-8"}`}>
                <p className="text-amber-600 text-xs tracking-[0.35em] uppercase mb-2" style={{ fontFamily: "'Georgia', serif" }}>{person.role}</p>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>{person.name}</h3>
                <p className="text-amber-200/55 leading-relaxed mb-5 text-sm" style={{ fontFamily: "'Georgia', serif" }}>{person.bio}</p>
                <blockquote className="border-l-2 border-amber-500 pl-4 mb-5">
                  <p className="text-amber-400 italic text-sm" style={{ fontFamily: "'Georgia', serif" }}>"{person.quote}"</p>
                </blockquote>
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 text-xs">✦</span>
                  <span className="text-amber-500/70 text-xs tracking-widest uppercase" style={{ fontFamily: "'Georgia', serif" }}>
                    Specialty: {person.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="relative max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.name}
              className="lightbox-img w-full max-h-[80vh] object-cover object-top rounded-sm shadow-2xl" />
            {/* Info bar */}
            <div className="bg-[#0d0500]/90 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "'Georgia', serif" }}>{lightbox.name}</p>
                <p className="text-amber-500 text-xs tracking-wider" style={{ fontFamily: "'Georgia', serif" }}>{lightbox.role}</p>
              </div>
              <button onClick={() => setLightbox(null)}
                className="text-amber-400 hover:text-white text-2xl transition-colors ml-4">✕</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}