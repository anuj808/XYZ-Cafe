import { useState } from "react";

const photos = [
  { img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",  label: "Our Space",     span: "col-span-2 row-span-2" },
  { img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&q=80",  label: "Latte Art",     span: "col-span-1" },
  { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",  label: "Morning Brew",  span: "col-span-1" },
  { img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",     label: "Cozy Corners",  span: "col-span-1" },
  { img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",  label: "Fresh Bakes",   span: "col-span-1" },
  { img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80",  label: "The Bar",       span: "col-span-2" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="bg-[#1a0a00] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Georgia', serif" }}>Visual Journey</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
            Life at <span className="text-amber-400 italic">XYZ Café</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 grid-rows-3 gap-3 h-[560px] reveal">
          {photos.map((photo, i) => (
            <div key={i}
              onClick={() => setLightbox(photo)}
              className={`${photo.span} relative overflow-hidden group cursor-pointer border border-amber-900/20 img-shimmer`}>
              <img src={photo.img} alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                <span className="text-amber-300 text-xs tracking-widest uppercase" style={{ fontFamily: "'Georgia', serif" }}>{photo.label}</span>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-[#0d0500]/60 border border-amber-700/40 flex items-center justify-center text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                🔍
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img.replace("w=800", "w=1200").replace("w=500","w=1200").replace("w=600","w=1200").replace("w=900","w=1200")}
              alt={lightbox.label}
              className="lightbox-img w-full max-h-[80vh] object-contain rounded-sm shadow-2xl" />
            <div className="bg-[#0d0500]/90 px-6 py-3 flex items-center justify-between">
              <span className="text-amber-400 text-sm tracking-widest uppercase" style={{ fontFamily: "'Georgia', serif" }}>{lightbox.label}</span>
              <button onClick={() => setLightbox(null)} className="text-amber-400 hover:text-white text-2xl transition-colors">✕</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}