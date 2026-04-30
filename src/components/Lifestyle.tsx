import { motion } from "motion/react";
import ParallaxImage from "./ParallaxImage";
import { Link } from "react-router-dom";

export default function Lifestyle() {
  return (
    <section className="py-32 bg-[#FBFBFA] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4 h-[600px] md:h-[700px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[60%] self-end relative"
          >
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=70&w=1200&auto=format&fit=crop"
              alt="Curated Spaces"
              containerClassName="w-full h-full absolute inset-0"
              magnitude={0.15}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[80%] self-start relative"
          >
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=70&w=1200&auto=format&fit=crop"
              alt="Light and Shadow"
              containerClassName="w-full h-full absolute inset-0"
              magnitude={0.2}
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">The Experience</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1]">
            A Life <br />
            <span className="italic font-light text-[#D4AF37]">Well Lived.</span>
          </h2>
          <p className="text-xl text-black/60 font-light leading-relaxed mb-6">
            Beyond the walls of your residence, Elyse offers a comprehensive ecosystem designed around wellness, connectivity, and refined leisure. Every touchpoint has been choreographed to elevate the everyday.
          </p>
          
          <ul className="space-y-4 mb-8">
             {[
               "24/7 Dedicated White-Glove Concierge",
               "Sommelier-Curated Wine Cellar",
               "Chauffeur Service & Secured Valet",
               "Exclusive Partnerships with Cultural Institutions"
             ].map((item, i) => (
               <li key={i} className="flex gap-4 items-center">
                 <div className="w-1.5 h-1.5 bg-[#D4AF37] aspect-square" />
                 <span className="font-light text-black/80">{item}</span>
               </li>
             ))}
           </ul>

           <Link 
             to="/amenities" 
             className="inline-block text-sm uppercase tracking-[0.1em] border-b border-black w-fit pb-1 hover:text-black/60 hover:border-black/60 transition-colors"
           >
             Explore All Amenities
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
