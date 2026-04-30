import { motion } from "motion/react";
import { useEffect } from "react";
import ParallaxImage from "../components/ParallaxImage";
import { Link } from "react-router-dom";

export default function VisionPage() {
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
          Our <span className="italic font-light text-[#D4AF37]">Vision</span>
        </h1>
        <p className="text-xl text-black/60 font-light max-w-2xl mx-auto">
          A sculptural masterpiece rising in the heart of the district. Designed for a living experience that transcends the ordinary.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/5]"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=70&w=1200&auto=format&fit=crop" 
            alt="Interior Vision" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.35}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-4">Architectural Brilliance</h2>
            <p className="text-black/70 font-light leading-relaxed">
              Every angle of Elyse is designed to capture natural light and frame the city's breathtaking skyline. The architecture is not just a structure, but a canvas that interacts with the sun throughout the day.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-4">A Commitment to Wellness</h2>
            <p className="text-black/70 font-light leading-relaxed">
              We have integrated wellness into the very foundation of Elyse. Advanced air and water purification systems ensure a pure environment, while our biophilic design principles effortlessly connect residents with nature.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-4">Sustainable Luxury</h2>
            <p className="text-black/70 font-light leading-relaxed">
              Luxury must be sustainable. Elyse utilizes state-of-the-art energy-efficient technologies, responsibly sourced materials, and eco-friendly landscaping to minimize our carbon footprint.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Manifesto Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-32 border-y border-black/10 my-32 text-center"
      >
        <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-8">The Manifesto</span>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1] max-w-4xl mx-auto">
          "We form our buildings, <br />
          and afterwards, <span className="italic font-light text-black/60">our buildings form us.</span>"
        </h3>
        <p className="mt-8 text-xs uppercase tracking-widest text-black/40">Inspired by historical elegance</p>
      </motion.div>

      {/* Materiality Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Materiality</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">Crafted with Precision</h2>
            <p className="text-black/70 font-light leading-relaxed mb-6">
              Our material palette is an exploration of tactile elegance. From brushed European oak to rare Italian marble and antiqued brass detailing, each element is selected for its intrinsic beauty and longevity.
            </p>
            <p className="text-black/70 font-light leading-relaxed">
              We collaborate with legendary artisans across the globe to source materials that age gracefully, developing an irreplaceable patina over time. It is a home designed to last a century, not a decade.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative w-full aspect-[16/10] order-1 lg:order-2"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=70&w=1200&auto=format&fit=crop" 
            alt="Materiality" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.45}
          />
        </motion.div>
      </div>

      {/* Studio Arkhon Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=70&w=1200&auto=format&fit=crop" 
            alt="Studio Arkhon" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.4}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 lg:pl-10"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">The Curators</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">Studio Arkhon</h2>
          <p className="text-black/70 font-light leading-relaxed">
            Founded by the award-winning duo, Elena Arkhon and Julian Vance, Studio Arkhon has redefined luxury residential architecture over the last two decades.
          </p>
          <p className="text-black/70 font-light leading-relaxed">
            Their philosophy focuses on the profound relationship between human scale, light, and context. Elyse Residence is their magnum opus—a culmination of their distinct design language and uncompromising pursuit of perfection.
          </p>
        </motion.div>
      </div>

      {/* The Context Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 lg:pr-10"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">The Context</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">Rooted in the District</h2>
          <p className="text-black/70 font-light leading-relaxed">
            Elyse does not merely exist within the city; it engages in a continuous dialogue with it. We designed the facade to reflect the evolving sky, ensuring the building becomes a living part of the skyline.
          </p>
          <p className="text-black/70 font-light leading-relaxed">
            The ground level is completely open, seamlessly integrating the public plaza with our private gardens to create an inviting transitional threshold bridging the urban pulse and the serene sanctuary within.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] order-first lg:order-last"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1517505295797-2007ce45903b?q=70&w=1200&auto=format&fit=crop" 
            alt="Urban Context" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.3}
          />
        </motion.div>
      </div>

      {/* Invisible Technology Section */}
      <div className="mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">The Innovation</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">Invisible Technology</h2>
          <p className="text-black/70 font-light leading-relaxed">
            True luxury is effortless. Our homes anticipate your needs through advanced, unobtrusive technology. Biometric entry, circadian lighting systems, and climate adaptation happen quietly in the background, allowing you to focus on the art of living.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[21/9]"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=70&w=1200&auto=format&fit=crop" 
            alt="Smart Home Integration" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.5}
          />
        </motion.div>
      </div>

      {/* Choreographing Light Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-32 items-end">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative w-full aspect-[3/4]"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=70&w=1200&auto=format&fit=crop" 
            alt="Natural Light" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.45}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col pt-12 lg:pt-0"
        >
          <div className="mb-12 max-w-lg">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">The Atmosphere</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Choreographing Light</h2>
            <p className="text-black/70 font-light leading-relaxed">
              Light is our most essential building material. The orientation of every residence maximizes morning sunlight while framing the soft, golden hour glow in the living spaces.
            </p>
          </div>
          <div className="relative w-full aspect-[16/10]">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=70&w=1200&auto=format&fit=crop" 
              alt="Shadows and Architecture" 
              containerClassName="w-full h-full absolute inset-0"
              magnitude={0.35}
            />
          </div>
        </motion.div>
      </div>

      {/* The Legacy Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 md:py-32 mb-10 text-center"
      >
        <div className="w-px h-24 bg-black/20 mx-auto mb-10"></div>
        <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-6">The Legacy</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-8">
          An address for generations.
        </h2>
        <p className="text-black/60 font-light max-w-xl mx-auto mb-12">
          Elyse is not built for the moment, but for history. It stands as a testament to those who refuse to compromise on their surroundings. Welcome to your legacy.
        </p>
        <Link 
          to="/inquire" 
          className="inline-block text-sm uppercase tracking-[0.1em] px-10 py-5 border border-black text-[#111111] hover:bg-black hover:text-white transition-colors"
        >
          Inquire Now
        </Link>
      </motion.div>

    </main>
  );
}
