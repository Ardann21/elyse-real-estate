import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const container = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=75&w=1600&auto=format&fit=crop" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center text-white flex flex-col items-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.2em] mb-6 font-sans font-medium"
        >
          Timeless Design • Wellness-Focused Living
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[140px] font-sans font-black uppercase tracking-tighter leading-[0.85]"
        >
          Aurelia<br />
          <span className="italic font-light text-[#D4AF37] text-5xl md:text-7xl lg:text-[140px] uppercase tracking-tighter">
            garden suites
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-sm flex flex-col items-center gap-4"
        >
          <span className="uppercase tracking-[0.1em] text-white/70">Scroll to discover</span>
          <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-white absolute top-0"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
