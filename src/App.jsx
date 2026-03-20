import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Staff from "./components/Staff";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import CustomCursor from "./components/CustomCursor";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const fadeTimer = setTimeout(() => setSplashFading(true), 3000);
    const hideTimer = setTimeout(() => setShowSplash(false), 3800);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      {showSplash && <SplashScreen fading={splashFading} />}
      <div className={`transition-opacity duration-700 ${showSplash ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Staff />
        <Testimonials />
        <Events />
        <Blog />
        <Gallery />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  );
}