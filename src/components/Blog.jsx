import Card3D from "./Card3D";

const posts = [
  { category: "Origin Stories", title: "From Coorg to Your Cup: The Journey of Our Single-Origin Beans", excerpt: "We visited the Kodava farms of Coorg in Karnataka to find the perfect bean for our signature espresso. Here's the story of that journey, the farmers, and why it matters.", author: "Arjun Sharma", date: "March 10, 2025", readTime: "6 min read", img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&q=80", featured: true },
  { category: "Craft",          title: "Why Brewing Temperature Changes Everything",                       excerpt: "Most people don't realise that a 5°C difference in water temperature can make or break your coffee. We break down the science in plain language.",                              author: "Arjun Sharma", date: "Feb 22, 2025",   readTime: "4 min read", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80" },
  { category: "Kitchen Diaries",title: "The Croissant That Took 47 Attempts to Perfect",                  excerpt: "Priya shares the obsessive, flour-covered, deeply personal story of creating the croissant that's now on every table. Spoiler: it involved crying. Twice.",                 author: "Priya Nair",   date: "Jan 15, 2025",   readTime: "5 min read", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80" },
];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="bg-[#1a0a00] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Georgia', serif" }}>From Our World</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
            Coffee <span className="text-amber-400 italic">Stories</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured */}
          <Card3D className="lg:col-span-2 overflow-hidden border border-amber-900/30 flex flex-col reveal-left">
            <div className="relative h-64 overflow-hidden">
              <img src={featured.img} alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00] via-[#1a0a00]/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-amber-500 text-[#1a0a00] text-[10px] tracking-widest uppercase px-3 py-1 font-bold"
                style={{ fontFamily: "'Georgia', serif" }}>Featured</div>
            </div>
            <div className="bg-[#0d0500] p-7 flex-1 flex flex-col">
              <p className="text-amber-600 text-xs tracking-wider mb-2" style={{ fontFamily: "'Georgia', serif" }}>{featured.category}</p>
              <h3 className="text-white text-2xl font-bold leading-tight mb-3" style={{ fontFamily: "'Georgia', serif" }}>{featured.title}</h3>
              <p className="text-amber-200/50 text-sm leading-relaxed flex-1" style={{ fontFamily: "'Georgia', serif" }}>{featured.excerpt}</p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-amber-900/30">
                <div>
                  <p className="text-amber-400 text-xs font-semibold" style={{ fontFamily: "'Georgia', serif" }}>{featured.author}</p>
                  <p className="text-amber-700/60 text-xs" style={{ fontFamily: "'Georgia', serif" }}>{featured.date}</p>
                </div>
                <span className="text-amber-600/60 text-xs" style={{ fontFamily: "'Georgia', serif" }}>{featured.readTime}</span>
              </div>
            </div>
          </Card3D>

          {/* Smaller */}
          <div className="flex flex-col gap-6 reveal-right">
            {rest.map(post => (
              <Card3D key={post.title} className="overflow-hidden border border-amber-900/30 flex flex-col cursor-pointer">
                <div className="relative h-36 overflow-hidden">
                  <img src={post.img} alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0500]/80 to-transparent" />
                </div>
                <div className="bg-[#0d0500] p-5 flex-1">
                  <p className="text-amber-600 text-[10px] tracking-wider mb-1" style={{ fontFamily: "'Georgia', serif" }}>{post.category}</p>
                  <h3 className="text-amber-100 text-sm font-bold leading-snug mb-2" style={{ fontFamily: "'Georgia', serif" }}>{post.title}</h3>
                  <p className="text-amber-200/40 text-xs leading-relaxed mb-3" style={{ fontFamily: "'Georgia', serif" }}>{post.excerpt.slice(0, 90)}...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-500 text-xs" style={{ fontFamily: "'Georgia', serif" }}>{post.author}</span>
                    <span className="text-amber-700/50 text-xs" style={{ fontFamily: "'Georgia', serif" }}>{post.readTime}</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 reveal">
          <button className="px-8 py-3 border border-amber-700/40 text-amber-400 text-xs tracking-widest uppercase hover:bg-amber-500 hover:text-[#1a0a00] hover:border-amber-500 transition-all duration-300 font-semibold hover:-translate-y-0.5"
            style={{ fontFamily: "'Georgia', serif" }}>
            Read All Stories →
          </button>
        </div>
      </div>
    </section>
  );
}