import Card3D from "./Card3D";

const events = [
  { tag: "Weekly",       title: "Sunday Jazz Mornings",    date: "Every Sunday · 9AM – 12PM",                  desc: "Start your Sunday right with live acoustic jazz, unlimited filter coffee refills, and a complimentary pastry. Reservation recommended.", img: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&q=80", badge: "Free Entry",      badgeColor: "bg-green-700" },
  { tag: "Monthly",      title: "Latte Art Masterclass",   date: "Last Saturday · 3PM",                         desc: "Learn the craft of latte art directly from Arjun. Limited to 12 participants. All equipment provided. Take home café-quality skills.",      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: "₹499 / person",  badgeColor: "bg-amber-600" },
  { tag: "Ongoing Offer",title: "Student Loyalty Card",    date: "All week · AMU & other colleges",             desc: "Show your student ID and get 20% off every order. Collect 10 stamps for a free drink. Because good coffee shouldn't cost your semester.",   img: "https://images.unsplash.com/photo-1541795795328-f073b763494e?w=600&q=80", badge: "20% Off",        badgeColor: "bg-blue-700" },
  { tag: "Upcoming",     title: "Diwali Dessert Festival", date: "Oct 20 – Nov 5",                              desc: "Limited edition mithai-inspired desserts — gulab jamun cheesecake, kesar tiramisu, and the iconic saffron cold brew. Only for the season.",  img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", badge: "Limited Time",   badgeColor: "bg-rose-700" },
];

export default function Events() {
  return (
    <section id="events" className="bg-[#0d0500] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Georgia', serif" }}>Happenings & Deals</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
            Events <span className="text-amber-400 italic">& Offers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((ev, i) => (
            <Card3D key={ev.title} className={`overflow-hidden border border-amber-900/30 flex flex-col reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"} delay-${i * 100 + 100}`}>
              <div className="relative h-48 overflow-hidden">
                <img src={ev.img} alt={ev.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0500] via-[#0d0500]/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#0d0500]/80 text-amber-500 text-[10px] tracking-widest uppercase px-3 py-1 border border-amber-700/40"
                  style={{ fontFamily: "'Georgia', serif" }}>{ev.tag}</div>
                <div className={`absolute top-4 right-4 ${ev.badgeColor} text-white text-xs font-bold px-3 py-1`}
                  style={{ fontFamily: "'Georgia', serif" }}>{ev.badge}</div>
              </div>
              <div className="bg-[#0d0500] p-6 flex-1 flex flex-col">
                <p className="text-amber-600 text-xs tracking-wider mb-2" style={{ fontFamily: "'Georgia', serif" }}>📅 {ev.date}</p>
                <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>{ev.title}</h3>
                <p className="text-amber-200/50 text-sm leading-relaxed flex-1" style={{ fontFamily: "'Georgia', serif" }}>{ev.desc}</p>
                <button className="mt-5 self-start px-5 py-2 border border-amber-600/40 text-amber-400 text-xs tracking-widest uppercase hover:bg-amber-500 hover:text-[#0d0500] hover:border-amber-500 transition-all duration-300 font-semibold hover:-translate-y-0.5"
                  style={{ fontFamily: "'Georgia', serif" }}>
                  Learn More →
                </button>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}