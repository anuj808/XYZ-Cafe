import Card3D from "./Card3D";

const reviews = [
  { name: "Sneha Agarwal", location: "Aligarh",  rating: 5, text: "XYZ Café has become my sacred morning ritual. The espresso is unlike anything I've had in this city — deep, smooth, and just the right intensity. The ambience makes you want to sit for hours.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", date: "March 2025" },
  { name: "Kunal Mehta",   location: "Delhi",     rating: 5, text: "Visited while passing through Aligarh and was blown away. Priya's croissants are absolutely world-class. The cold brew is exceptional. This place deserves to be famous nationally.",              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80", date: "February 2025" },
  { name: "Divya Singh",   location: "Lucknow",   rating: 5, text: "The matcha latte and tiramisu combo is a religious experience. Staff is warm without being intrusive. I drove 2 hours just to come back here. Worth every kilometre.",                           avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80", date: "January 2025" },
  { name: "Aditya Rao",    location: "Agra",      rating: 5, text: "Came for a work meeting, ended up staying 4 hours. The WiFi is fast, the music is perfect, and the masala chai tastes like my grandmother made it. This is my remote office now.",                   avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80", date: "December 2024" },
  { name: "Meera Joshi",   location: "Aligarh",   rating: 5, text: "The chocolate lava cake with vanilla ice cream is the best dessert I've had in UP. Period. The café has soul — something rare these days. I bring every guest I have here.",                      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80", date: "November 2024" },
  { name: "Rohit Kapoor",  location: "Mathura",   rating: 5, text: "Arjun explained the origin of every coffee bean I asked about. That level of passion is infectious. The café is beautifully designed — dark, warm, and intimate. Come here with someone you love.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80", date: "October 2024" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#1a0a00] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Georgia', serif" }}>What Guests Say</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
            Stories of <span className="text-amber-400 italic">Warmth</span>
          </h2>
        </div>

        <div className="flex flex-col items-center mb-12 reveal delay-200">
          <div className="flex gap-1 text-amber-400 text-2xl mb-2">★★★★★</div>
          <p className="text-amber-200/50 text-sm" style={{ fontFamily: "'Georgia', serif" }}>4.9 / 5 · 340+ reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Card3D key={r.name} className={`bg-[#0d0500] border border-amber-900/30 p-7 flex flex-col gap-5 reveal delay-${Math.min((i % 3) * 100 + 100, 400)}`}>
              <div className="flex gap-1 text-amber-400 text-sm">{"★".repeat(r.rating)}</div>
              <p className="text-amber-200/65 text-sm leading-relaxed flex-1 italic" style={{ fontFamily: "'Georgia', serif" }}>"{r.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-amber-900/30">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border border-amber-700/40" />
                <div>
                  <p className="text-amber-300 text-sm font-semibold" style={{ fontFamily: "'Georgia', serif" }}>{r.name}</p>
                  <p className="text-amber-600/60 text-xs" style={{ fontFamily: "'Georgia', serif" }}>{r.location} · {r.date}</p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}