import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ParallaxImage from "./ParallaxImage";

export default function HomeCallToAction() {
  return (
    <section className="relative py-40 bg-[#111111] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1629079447842-8390f1d18206?q=70&w=1200&auto=format&fit=crop"
          alt="Contact Background"
          containerClassName="w-full h-full"
          magnitude={0.1}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Ownership</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Secure Your <span className="italic font-light text-[#D4AF37]">Legacy</span>
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
            The sales gallery is now open for private presentations. Register your interest to schedule an appointment and receive early access to floor plans.
          </p>
          <Link 
            to="/inquire" 
            className="inline-block text-sm uppercase tracking-[0.1em] px-10 py-5 bg-white text-black hover:bg-[#D4AF37] hover:text-black transition-colors font-medium border border-transparent"
          >
            Inquire Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
