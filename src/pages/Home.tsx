import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Component as FlowGradientHero } from "../components/ui/flow-gradient-hero-section";

const MorphOverlay = () => (
  <motion.div
    className="fixed inset-0 z-50 bg-[#090C22] pointer-events-none"
    initial={{ clipPath: "circle(150% at 50% 50%)" }}
    animate={{ clipPath: "circle(0% at 50% 50%)" }}
    exit={{ clipPath: "circle(150% at 50% 50%)" }}
    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
  />
);

export default function Home() {
  return (
    <motion.div
      className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#090C22]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MorphOverlay />
      
      {/* Section 1: Hero */}
      <section className="h-screen w-full snap-start relative">
        <FlowGradientHero 
          title="DESIGN PORTFOLIO" 
          ctaText="KIM SERIN"
          onCtaClick={() => {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }}
        />
      </section>

      {/* Section 2: Categories */}
      <section className="min-h-screen w-full snap-start flex items-center justify-center py-20 px-4 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Visual Design", "Motion Design", "Data Design"].map((cat, i) => (
            <Link to={`/category/${cat.toLowerCase().replace(' ', '-')}`} key={cat}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-3xl p-10 h-[400px] flex flex-col justify-end relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase relative z-10 text-white/80 group-hover:text-white transition-colors duration-300">
                  {cat}
                </h2>
                <div className="w-12 h-1 bg-white/50 mt-4 group-hover:bg-white transition-colors duration-300 relative z-10" />
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
