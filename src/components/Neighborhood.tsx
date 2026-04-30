import { motion } from "motion/react";
import ParallaxImage from "./ParallaxImage";

export default function Neighborhood() {
  return (
    <section className="py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Location</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            The Cultural <span className="italic font-light text-[#D4AF37]">District</span>
          </h2>
          <p className="text-xl text-black/60 font-light max-w-2xl mx-auto leading-relaxed">
            Elyse is situated at the epicenter of art, commerce, and gastronomy. A neighborhood defined by its rich heritage and forward-looking vibrancy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=70&w=1000&auto=format&fit=crop"
                alt="Gastronomy"
                containerClassName="w-full h-full absolute inset-0"
                magnitude={0.15}
              />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Gastronomy</h3>
              <p className="text-black/60 font-light text-sm leading-relaxed">
                Surrounded by Michelin-starred establishments and hidden culinary gems, offering unparalleled dining experiences just steps away.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 md:mt-16 lg:mt-24"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=70&w=1000&auto=format&fit=crop"
                alt="Arts & Culture"
                containerClassName="w-full h-full absolute inset-0"
                magnitude={0.15}
              />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Arts & Culture</h3>
              <p className="text-black/60 font-light text-sm leading-relaxed">
                Immerse yourself in world-class museums, contemporary galleries, and historic performance venues shaping the global cultural zeitgeist.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6 md:mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=70&w=1000&auto=format&fit=crop"
                alt="Boutiques"
                containerClassName="w-full h-full absolute inset-0"
                magnitude={0.15}
              />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Global Boutiques</h3>
              <p className="text-black/60 font-light text-sm leading-relaxed">
                Unrivaled access to flagship stores and independent ateliers defining luxury fashion and avant-garde design.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
