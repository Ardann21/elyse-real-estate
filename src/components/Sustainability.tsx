import { motion } from "motion/react";
import ParallaxImage from "./ParallaxImage";

export default function Sustainability() {
  return (
    <section className="py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 lg:pr-12"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">Sustainable Future</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1]">
            Conscious <br />
            <span className="italic font-light text-[#D4AF37]">Living.</span>
          </h2>
          <p className="text-xl text-black/60 font-light leading-relaxed mb-6">
            Luxury must not come at the expense of our environment. Elyse is engineered for a sustainable future, targeting LEED Platinum certification through innovative resource management.
          </p>
          
          <ul className="space-y-4 mb-8">
             {[
               "Advanced Geothermal Climate Control",
               "Rainwater Harvesting for Landscape Irrigation",
               "High-Performance Kinetic Glazing",
               "Integrated Electric Vehicle Infrastructure"
             ].map((item, i) => (
               <li key={i} className="flex gap-4 items-center">
                 <div className="w-1.5 h-1.5 bg-[#D4AF37] aspect-square" />
                 <span className="font-light text-black/80">{item}</span>
               </li>
             ))}
           </ul>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/5] md:aspect-square"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=70&w=1200&auto=format&fit=crop"
            alt="Sustainable Design"
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.2}
          />
        </motion.div>
      </div>
    </section>
  );
}
