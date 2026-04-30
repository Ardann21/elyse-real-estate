import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Vision() {
  const pillars = [
    { title: "Holistic well-being", desc: "Spaces meticulously designed to foster physical health, mental clarity, and spiritual balance." },
    { title: "Discretion & exclusivity", desc: "Private entrances, limited residences, and a community that honors your peace." },
    { title: "Cultural enrichment", desc: "Surrounded by world-class art and architecture, bringing inspiration to every moment." },
    { title: "Sustainable elegance", desc: "Forward-thinking ecological design that never compromises on sophisticated luxury." },
  ];

  return (
    <section id="vision" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Sticky or Large Title */}
        <div className="lg:sticky top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-black/60 mb-6 border-b border-black/10 pb-4 inline-block">
              Philosophy
            </h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter max-w-md leading-tight">
              A vision of <span className="italic font-light">inspired</span> living.
            </h3>
            <p className="mt-8 text-lg text-black/70 font-light max-w-md mb-8">
              Elyse Residence redefines the paradigm of luxury. We believe a home is more than a space—it is an experience curated for wellness, art, and timeless elegance.
            </p>

            <Link to="/vision" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors">
              Read Our Vision <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Right: Pillars list */}
        <div className="flex flex-col gap-12 pt-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-black/10 pt-8"
            >
              <h4 className="text-2xl font-black tracking-tighter tracking-wide mb-4">{pillar.title}</h4>
              <p className="text-black/60 font-light leading-relaxed max-w-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
