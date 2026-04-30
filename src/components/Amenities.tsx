import { motion } from "motion/react";
import ParallaxImage from "./ParallaxImage";

export default function Amenities() {
  const sections = [
    {
      title: "Wellness-Centered",
      subtitle: "Amenities",
      description: "Immerse yourself in a sanctuary of health. From thermal baths to private meditation suites, every element is designed to restore balance.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=70&w=1200&auto=format&fit=crop",
      alignment: "left"
    },
    {
      title: "Art Inspired",
      subtitle: "Spaces",
      description: "Living at Elyse means being surrounded by curated masterpieces. An ever-evolving gallery enriches the daily experience.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=70&w=1200&auto=format&fit=crop",
      alignment: "right"
    },
    {
      title: "Nature-Infused",
      subtitle: "Retreats",
      description: "Seamless transitions between indoors and out. Lush private gardens provide a serene escape from the energy of the city.",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=70&w=1200&auto=format&fit=crop",
      alignment: "left"
    }
  ];

  return (
    <section id="amenities" className="py-32 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32">
        
        {sections.map((sec, idx) => (
          <div 
            key={sec.title} 
            className={`flex flex-col ${sec.alignment === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 lg:gap-24`}
          >
            {/* Image Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 aspect-[4/5] lg:aspect-[3/4] overflow-hidden oval-mask relative"
            >
              <ParallaxImage 
                src={sec.image} 
                alt={sec.title} 
                containerClassName="w-full h-full absolute inset-0"
              />
            </motion.div>

            {/* Text Box */}
            <motion.div 
              initial={{ opacity: 0, x: sec.alignment === "left" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">
                0{idx + 1}
              </span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase mb-2">
                {sec.title}
              </h3>
              <h4 className="text-3xl md:text-5xl italic font-light text-[#D4AF37] text-black/60 capitalize mb-8">
                {sec.subtitle}
              </h4>
              <p className="text-lg text-black/70 font-light max-w-md leading-relaxed">
                {sec.description}
              </p>
            </motion.div>
          </div>
        ))}
        
      </div>
    </section>
  );
}
