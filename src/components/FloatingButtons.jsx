import { useState } from "react";
import ReservationModal from "./ReservationModal";

export default function FloatingButtons() {
  const [showModal, setShowModal] = useState(false);
  const phone = "917668943946"; // ← Change to your WhatsApp number
  const msg = encodeURIComponent("Hi XYZ Café! I'd like to know more about your menu and reservations 😊");

  return (
    <>
      {/* Floating button stack */}
      <div style={{
        position: "fixed", bottom: "24px", right: "24px",
        zIndex: 500,
        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px",
      }}>

        {/* Book a Table button */}
        <button
          onClick={() => setShowModal(true)}
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: "#1a0a00",
            border: "1px solid rgba(245,158,11,0.55)",
            color: "#f59e0b",
            fontFamily: "'Georgia', serif",
            fontSize: "11px", fontWeight: "700",
            letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "12px 18px",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,158,11,0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#f59e0b";
            e.currentTarget.style.color = "#0d0500";
            e.currentTarget.style.boxShadow = "0 6px 28px rgba(245,158,11,0.4)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#1a0a00";
            e.currentTarget.style.color = "#f59e0b";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,158,11,0.1)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {/* Fork & knife icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
          </svg>
          Book a Table
        </button>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${phone}?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: "#25D366",
            color: "#fff",
            fontFamily: "'Georgia', serif",
            fontSize: "11px", fontWeight: "700",
            letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "12px 18px",
            textDecoration: "none",
            boxShadow: "0 0 0 0 rgba(37,211,102,0.5)",
            animation: "waPulse 2.2s ease-out infinite",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#20bd5a";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.animation = "none";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#25D366";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.animation = "waPulse 2.2s ease-out infinite";
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Chat on WhatsApp
        </a>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            width: "42px", height: "42px",
            background: "rgba(26,10,0,0.8)",
            border: "1px solid rgba(245,158,11,0.3)",
            color: "#f59e0b", fontSize: "16px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            transition: "all 0.3s",
            backdropFilter: "blur(4px)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#f59e0b"; e.currentTarget.style.color = "#0d0500"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(26,10,0,0.8)"; e.currentTarget.style.color = "#f59e0b"; e.currentTarget.style.transform = "translateY(0)"; }}
          title="Back to top"
        >
          ↑
        </button>
      </div>

      {/* Reservation Modal */}
      {showModal && <ReservationModal onClose={() => setShowModal(false)} />}

      <style>{`
        @keyframes waPulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
          70%  { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </>
  );
}