import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0d0500] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Georgia', serif" }}>Get In Touch</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            Find <span className="text-amber-400 italic">Us</span>
          </h2>
          {[
            { icon: "📍", label: "Location", value: "123 Coffee Lane, Civil Lines\nAligarh, Uttar Pradesh 202001" },
            { icon: "🕐", label: "Hours", value: "Mon–Fri: 7am–10pm\nSat–Sun: 8am–11pm" },
            { icon: "📞", label: "Phone", value: "+91 98765 43210" },
            { icon: "✉️", label: "Email", value: "hello@xyzcafe.in" },
          ].map((info) => (
            <div key={info.label} className="flex gap-4 mb-7">
              <span className="text-2xl mt-1">{info.icon}</span>
              <div>
                <p className="text-amber-500 text-xs tracking-wider uppercase mb-1" style={{ fontFamily: "'Georgia', serif" }}>{info.label}</p>
                <p className="text-amber-100/70 text-sm whitespace-pre-line" style={{ fontFamily: "'Georgia', serif" }}>{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1a0a00]/40 border border-amber-900/30 p-8">
          <h3 className="text-amber-400 text-xl font-semibold mb-6" style={{ fontFamily: "'Georgia', serif" }}>Send a Message</h3>
          {sent && (
            <div className="mb-4 px-4 py-3 border border-amber-500 text-amber-400 text-sm" style={{ fontFamily: "'Georgia', serif" }}>
              ✓ Message sent! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={submit} className="flex flex-col gap-5">
            {["name", "email"].map((field) => (
              <input key={field} type={field === "email" ? "email" : "text"} name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]} onChange={handle} required
                className="bg-transparent border border-amber-800/40 text-amber-100 placeholder-amber-700/50 px-4 py-3 text-sm outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "'Georgia', serif" }} />
            ))}
            <textarea name="message" placeholder="Your message..." rows={4}
              value={form.message} onChange={handle} required
              className="bg-transparent border border-amber-800/40 text-amber-100 placeholder-amber-700/50 px-4 py-3 text-sm outline-none focus:border-amber-500 transition-colors resize-none"
              style={{ fontFamily: "'Georgia', serif" }} />
            <button type="submit"
              className="bg-amber-500 text-[#1a0a00] font-bold text-sm tracking-widest uppercase py-3 hover:bg-amber-400 transition-all duration-300"
              style={{ fontFamily: "'Georgia', serif" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}