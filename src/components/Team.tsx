import { motion } from "motion/react";

export default function Team() {
  const teamMembers = [
    {
      role: "Architecture",
      name: "Studio Arkhon",
      description: "An internationally acclaimed firm known for integrating structural innovation with poetic restraint."
    },
    {
      role: "Interior Design",
      name: "Atelier V",
      description: "Masters of tactile minimalism, sourcing rare materials to craft environments of profound serenity."
    },
    {
      role: "Landscape",
      name: "Verdant Terra",
      description: "Redefining urban ecology with regenerative, native planting schemas that thrive in high-altitude environments."
    }
  ];

  return (
    <section className="py-32 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">The Visionaries</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Master <span className="italic font-light text-[#D4AF37]">Craftsmen</span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Elyse represents the culmination of expertise from the world's most disciplined and imaginative minds in architecture and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-6">{member.role}</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{member.name}</h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
