import { useState, useEffect } from "react";

const timeSlots = [
  "8:00 AM","9:00 AM","10:00 AM","11:00 AM",
  "12:00 PM","1:00 PM","2:00 PM","3:00 PM",
  "4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM",
];

const inputStyle = {
  background: "transparent",
  border: "1px solid rgba(120,40,0,0.5)",
  color: "#fde68a",
  fontFamily: "'Georgia', serif",
  fontSize: "13px",
  padding: "11px 16px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  transition: "border-color 0.25s",
  colorScheme: "dark",
};

const labelStyle = {
  fontFamily: "'Georgia', serif",
  color: "rgba(245,158,11,0.75)",
  fontSize: "10px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  marginBottom: "7px",
  display: "block",
};

export default function ReservationModal({ onClose }) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    date: "", time: "", guests: "2",
    occasion: "", requests: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    // Prevent body scroll while modal open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 3200);
  };

  const getFocusedStyle = (name) => ({
    ...inputStyle,
    borderColor: focused === name ? "#f59e0b" : "rgba(120,40,0,0.5)",
    boxShadow: focused === name ? "0 0 0 1px rgba(245,158,11,0.2)" : "none",
  });

  return (
    /* Backdrop */
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "fadeInBg 0.25s ease",
      }}
    >
      {/* Modal panel */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#0d0500",
          border: "1px solid rgba(180,83,9,0.35)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(245,158,11,0.08)",
          width: "100%", maxWidth: "680px",
          maxHeight: "92vh",
          overflowY: "auto",
          position: "relative",
          animation: "slideUpModal 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #1a0a00, #0d0500)",
          borderBottom: "1px solid rgba(180,83,9,0.25)",
          padding: "28px 32px 24px",
          position: "sticky", top: 0, zIndex: 10,
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <p style={{
                fontFamily: "'Georgia', serif", color: "#f59e0b",
                fontSize: "10px", letterSpacing: "0.4em",
                textTransform: "uppercase", marginBottom: "6px",
              }}>XYZ Café</p>
              <h2 style={{
                fontFamily: "'Georgia', serif", color: "#fff",
                fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: "700",
                margin: 0,
              }}>
                Reserve a <em style={{ color: "#fbbf24" }}>Table</em>
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "rgba(180,83,9,0.15)",
                border: "1px solid rgba(180,83,9,0.3)",
                color: "#f59e0b", fontSize: "18px",
                width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s", flexShrink: 0,
              }}
            >✕</button>
          </div>

          {/* Info pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
            {[
              "📅 Mon–Fri: 7am–10pm",
              "🕐 Sat–Sun: 8am–11pm",
              "📞 +91 98765 43210",
            ].map(t => (
              <span key={t} style={{
                fontFamily: "'Georgia', serif", fontSize: "11px",
                color: "rgba(253,230,138,0.55)",
                background: "rgba(180,83,9,0.12)",
                border: "1px solid rgba(180,83,9,0.2)",
                padding: "4px 10px",
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "28px 32px 32px" }}>
          {submitted ? (
            <div style={{
              textAlign: "center", padding: "40px 20px",
              animation: "fadeInBg 0.4s ease",
            }}>
              <div style={{ fontSize: "52px", marginBottom: "16px" }}>☕</div>
              <h3 style={{
                fontFamily: "'Georgia', serif", color: "#fbbf24",
                fontSize: "22px", fontWeight: "700", marginBottom: "10px",
              }}>Table Reserved!</h3>
              <p style={{
                fontFamily: "'Georgia', serif", color: "rgba(253,230,138,0.6)",
                fontSize: "14px", lineHeight: "1.7",
              }}>
                We'll send a confirmation to <strong style={{ color: "#fbbf24" }}>{form.email || "your email"}</strong>.<br />
                See you soon at XYZ Café!
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "18px",
              }}>

                {/* Name */}
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handle} required
                    placeholder="Your name"
                    style={getFocusedStyle("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handle} required
                    placeholder="+91 XXXXX XXXXX"
                    style={getFocusedStyle("phone")}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused("")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handle} required
                    placeholder="you@email.com"
                    style={getFocusedStyle("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                  />
                </div>

                {/* Guests */}
                <div>
                  <label style={labelStyle}>Guests *</label>
                  <select name="guests" value={form.guests} onChange={handle} required
                    style={{ ...getFocusedStyle("guests"), appearance: "none", cursor: "pointer" }}
                    onFocus={() => setFocused("guests")}
                    onBlur={() => setFocused("")}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n} style={{ background: "#0d0500" }}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label style={labelStyle}>Preferred Date *</label>
                  <input type="date" name="date" value={form.date} onChange={handle} required
                    min={new Date().toISOString().split("T")[0]}
                    style={getFocusedStyle("date")}
                    onFocus={() => setFocused("date")}
                    onBlur={() => setFocused("")}
                  />
                </div>

                {/* Time */}
                <div>
                  <label style={labelStyle}>Preferred Time *</label>
                  <select name="time" value={form.time} onChange={handle} required
                    style={{ ...getFocusedStyle("time"), appearance: "none", cursor: "pointer" }}
                    onFocus={() => setFocused("time")}
                    onBlur={() => setFocused("")}
                  >
                    <option value="" style={{ background: "#0d0500" }}>Select a time</option>
                    {timeSlots.map(t => (
                      <option key={t} value={t} style={{ background: "#0d0500" }}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Occasion - full width */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Occasion (Optional)</label>
                  <select name="occasion" value={form.occasion} onChange={handle}
                    style={{ ...getFocusedStyle("occasion"), appearance: "none", cursor: "pointer" }}
                    onFocus={() => setFocused("occasion")}
                    onBlur={() => setFocused("")}
                  >
                    <option value="" style={{ background: "#0d0500" }}>None / Regular visit</option>
                    <option value="birthday" style={{ background: "#0d0500" }}>🎂 Birthday Celebration</option>
                    <option value="anniversary" style={{ background: "#0d0500" }}>💑 Anniversary</option>
                    <option value="business" style={{ background: "#0d0500" }}>💼 Business Meeting</option>
                    <option value="date" style={{ background: "#0d0500" }}>🌹 Date Night</option>
                    <option value="other" style={{ background: "#0d0500" }}>Other</option>
                  </select>
                </div>

                {/* Special requests - full width */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Special Requests</label>
                  <textarea name="requests" value={form.requests} onChange={handle} rows={3}
                    placeholder="Dietary requirements, seating preference, allergies..."
                    style={{
                      ...getFocusedStyle("requests"),
                      resize: "none",
                    }}
                    onFocus={() => setFocused("requests")}
                    onBlur={() => setFocused("")}
                  />
                </div>

                {/* Submit - full width */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <button type="submit" style={{
                    width: "100%",
                    background: "#f59e0b",
                    color: "#0d0500",
                    fontFamily: "'Georgia', serif",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "16px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
                  }}
                    onMouseEnter={e => { e.target.style.background = "#fbbf24"; e.target.style.boxShadow = "0 6px 28px rgba(245,158,11,0.5)"; }}
                    onMouseLeave={e => { e.target.style.background = "#f59e0b"; e.target.style.boxShadow = "0 4px 20px rgba(245,158,11,0.3)"; }}
                  >
                    Confirm Reservation ✓
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInBg {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
