import { useState } from "react";

const categories = ["All", "Coffee", "Tea", "Snacks", "Desserts"];

const items = [
  { name: "Signature Espresso", price: "₹120", category: "Coffee",   desc: "Double shot, rich crema, silky finish",          img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=85" },
  { name: "Cold Brew Delight",  price: "₹150", category: "Coffee",   desc: "18-hour steep, served over ice",                 img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=85" },
  { name: "Caramel Latte",      price: "₹160", category: "Coffee",   desc: "Velvety milk, house-made caramel drizzle",        img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500&q=85" },
  { name: "Flat White",         price: "₹140", category: "Coffee",   desc: "Micro-foam milk, intense ristretto base",         img: "https://images.unsplash.com/photo-1485808191679-5f86510bd652?w=500&q=85" },
  { name: "Masala Chai",        price: "₹80",  category: "Tea",      desc: "Spiced, bold, traditionally brewed",              img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=85" },
  { name: "Matcha Latte",       price: "₹180", category: "Tea",      desc: "Premium Japanese matcha, oat milk",               img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&q=85" },
  { name: "Avocado Toast",      price: "₹200", category: "Snacks",   desc: "Sourdough, smashed avo, chili flakes",            img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=500&q=85" },
  { name: "Butter Croissant",   price: "₹110", category: "Snacks",   desc: "Fresh-baked, flaky, golden",                     img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=85" },
  { name: "Club Sandwich",      price: "₹220", category: "Snacks",   desc: "Triple-decker, toasted, loaded",                 img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=85" },
  { name: "Chocolate Lava",     price: "₹240", category: "Desserts", desc: "Warm center, vanilla ice cream",                 img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=85" },
  { name: "Tiramisu",           price: "₹200", category: "Desserts", desc: "Mascarpone, espresso-soaked ladyfingers",         img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=85" },
  { name: "Cheesecake Slice",   price: "₹180", category: "Desserts", desc: "New York style, berry compote",                  img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=85" },
];

export default function Menu() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter(i => i.category === active);

  return (
    <section id="menu" className="py-24 px-6" style={{ backgroundColor: "#1a0a00" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Heading */}
        <div className="text-center mb-14">
          <p style={{
            fontFamily: "'Georgia', serif",
            color: "#f59e0b",
            fontSize: "11px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "12px"
          }}>What We Serve</p>
          <h2 style={{
            fontFamily: "'Georgia', serif",
            color: "#ffffff",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "700",
            textShadow: "0 2px 16px rgba(0,0,0,0.5)"
          }}>
            Our <em style={{ color: "#fbbf24" }}>Menu</em>
          </h2>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "48px" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "8px 22px",
                border: active === cat ? "1px solid #f59e0b" : "1px solid rgba(180,83,9,0.35)",
                background: active === cat ? "#f59e0b" : "transparent",
                color: active === cat ? "#1a0a00" : "rgba(252,211,77,0.7)",
                fontWeight: active === cat ? "700" : "400",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: active === cat ? "0 4px 18px rgba(245,158,11,0.35)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "24px",
        }}>
          {filtered.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    setTilt({ x, y, active: true });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0, active: false });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "#0d0500",
        border: tilt.active ? "1px solid rgba(245,158,11,0.45)" : "1px solid rgba(120,40,0,0.3)",
        borderRadius: "2px",
        overflow: "hidden",
        transform: tilt.active
          ? `perspective(700px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.03,1.03,1.03)`
          : "perspective(700px) rotateX(0) rotateY(0) scale3d(1,1,1)",
        transition: tilt.active ? "transform 0.12s ease" : "transform 0.4s ease, border 0.3s ease",
        boxShadow: tilt.active ? "0 20px 50px rgba(180,83,9,0.3), 0 0 0 1px rgba(245,158,11,0.1)" : "0 4px 20px rgba(0,0,0,0.4)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Shine overlay */}
      {tilt.active && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 55%)",
        }} />
      )}

      {/* Image */}
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.6s ease",
            transform: tilt.active ? "scale(1.07)" : "scale(1)",
            display: "block",
          }}
          onError={e => { e.target.style.display = "none"; }}
        />
        {/* Gradient over image */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(13,5,0,0.9) 0%, rgba(13,5,0,0.25) 50%, transparent 100%)",
        }} />

        {/* Price badge */}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          background: "#f59e0b", color: "#1a0a00",
          fontFamily: "'Georgia', serif", fontWeight: "700", fontSize: "13px",
          padding: "4px 12px",
          boxShadow: "0 2px 10px rgba(245,158,11,0.4)",
          zIndex: 3,
        }}>
          {item.price}
        </div>

        {/* Category tag */}
        <div style={{
          position: "absolute", top: "12px", left: "12px",
          background: "rgba(13,5,0,0.75)", color: "#fbbf24",
          fontFamily: "'Georgia', serif", fontSize: "9px",
          letterSpacing: "0.25em", textTransform: "uppercase",
          padding: "4px 10px",
          border: "1px solid rgba(180,83,9,0.4)",
          zIndex: 3,
        }}>
          {item.category}
        </div>
      </div>

      {/* Text */}
      <div style={{ padding: "16px 18px 20px" }}>
        <h3 style={{
          fontFamily: "'Georgia', serif",
          color: "#fde68a",
          fontSize: "14px", fontWeight: "600",
          marginBottom: "6px", margin: "0 0 6px 0"
        }}>
          {item.name}
        </h3>
        <p style={{
          fontFamily: "'Georgia', serif",
          color: "rgba(253,230,138,0.4)",
          fontSize: "12px", lineHeight: "1.6",
          margin: 0,
        }}>
          {item.desc}
        </p>
        {/* Bottom line that grows on hover */}
        <div style={{
          height: "1px", marginTop: "14px",
          background: "linear-gradient(to right, #b45309, transparent)",
          width: tilt.active ? "100%" : "0%",
          transition: "width 0.4s ease",
        }} />
      </div>
    </div>
  );
}