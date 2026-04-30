import { motion } from "motion/react";
import ParallaxImage from "./ParallaxImage";

export default function Architecture() {
  return (
    <section className="py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 lg:pr-12 order-2 lg:order-1"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">Design Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1]">
            Architectural <br />
            <span className="italic font-light text-[#D4AF37]">Excellence.</span>
          </h2>
          <p className="text-xl text-black/60 font-light leading-relaxed mb-6">
            Conceived by visionary architects, Elyse is a sculptural masterpiece that redefines the skyline. The facade's rhythmic geometry and precise articulation respond dynamically to shifting daylight, creating a living form that transforms from dawn to dusk.
          </p>
          <p className="text-xl text-black/60 font-light leading-relaxed">
            Inside, the boundary between interior and exterior dissolves. Expansive floor-to-ceiling volumes frame unimpeded vistas, while a careful curation of material finishes grounds the towering heights in organic warmth.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/5] order-1 lg:order-2"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=70&w=1200&auto=format&fit=crop"
            alt="Elyse Architecture"
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.2}
          />
        </motion.div>

      </div>
    </section>
  );
}
