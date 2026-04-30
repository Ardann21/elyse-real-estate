import { motion } from "motion/react";
import { useEffect } from "react";
import ParallaxImage from "../components/ParallaxImage";

export default function LocationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-[100px] font-sans font-black uppercase tracking-tighter leading-[0.85] mb-6">
          The <span className="italic font-light text-[#D4AF37]">Location</span>
        </h1>
        <p className="text-xl text-black/60 font-light max-w-2xl mx-auto">
          Situated at the epicenter of art, commerce, and gastronomy. A neighborhood defined by its rich heritage and forward-looking vibrancy.
        </p>
      </motion.div>

      {/* Map or Hero Graphic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[21/9] mb-32 bg-black/5"
      >
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=70&w=1200&auto=format&fit=crop" 
          alt="Aerial View" 
          containerClassName="w-full h-full absolute inset-0"
          magnitude={0.2}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm p-8 text-center max-w-sm hidden md:block border border-black/10">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Elyse Address</h3>
            <p className="text-black/60 font-light text-sm">100 Cultural District Blvd<br/>Metropolis, NY 10001</p>
          </div>
        </div>
      </motion.div>

      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-[4/3] md:aspect-[21/9] mb-32 grayscale contrast-125 opacity-90 border border-black/10"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.252799912!2d-74.14448744046524!3d40.69763123336495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Elyse Location"
        ></iframe>
      </motion.div>

      {/* Transit & Access */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white p-16 lg:p-24 flex flex-col md:flex-row gap-16 item-center mb-0"
      >
        <div className="md:w-1/2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Connectivity</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Unrivaled Access</h2>
          <p className="text-white/70 font-light leading-relaxed">
            Global mobility is effortless with immediate proximity to private aviation terminals, major international airports, and private helipads.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
           <div className="flex justify-between border-b border-white/20 pb-4">
             <span className="uppercase text-sm tracking-widest">Private Heliport</span>
             <span className="text-[#D4AF37] text-sm">5 Mins</span>
           </div>
           <div className="flex justify-between border-b border-white/20 pb-4">
             <span className="uppercase text-sm tracking-widest">Financial District</span>
             <span className="text-[#D4AF37] text-sm">15 Mins</span>
           </div>
           <div className="flex justify-between border-b border-white/20 pb-4">
             <span className="uppercase text-sm tracking-widest">International Airport</span>
             <span className="text-[#D4AF37] text-sm">30 Mins</span>
           </div>
           <div className="flex justify-between pb-4">
             <span className="uppercase text-sm tracking-widest">Private Aviation</span>
             <span className="text-[#D4AF37] text-sm">45 Mins</span>
           </div>
        </div>
      </motion.div>

    </main>
  );
}
