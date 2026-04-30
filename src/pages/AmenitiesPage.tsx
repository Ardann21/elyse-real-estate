import { motion } from "motion/react";
import { useEffect } from "react";
import ParallaxImage from "../components/ParallaxImage";

export default function AmenitiesPage() {
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
          The <span className="italic font-light text-[#D4AF37]">Amenities</span>
        </h1>
        <p className="text-xl text-black/60 font-light max-w-2xl mx-auto">
          An unprecedented collection of spaces designed to elevate every aspect of your daily life.
        </p>
      </motion.div>

      {/* Wellness Club Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/5]"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=70&w=1200&auto=format&fit=crop" 
            alt="Wellness Club" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.3}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">The Wellness Club</h2>
            <p className="text-black/70 font-light leading-relaxed mb-6">
              A 10,000 square foot sanctuary dedicated to your absolute well-being. Designed to rival the world's most exclusive resorts, our wellness club provides comprehensive health and fitness facilities.
            </p>
            <ul className="space-y-4">
              {[
                "75-foot indoor lap pool with architectural skylights",
                "Thermal suite including saunas, steam rooms, and cold plunge",
                "State-of-the-art fitness center with personalized training rooms",
                "Dedicated yoga and pilates studios"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] aspect-square" />
                  <span className="font-light text-black/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Social & Entertainment Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Entertain</span>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Social Spaces</h2>
            <p className="text-black/70 font-light leading-relaxed mb-6">
              Exclusive social spaces that blur the lines between private residence and elite members' club. Perfect for hosting intimate gatherings or larger celebrations.
            </p>
            <ul className="space-y-4">
              {[
                "Private dining room with catering kitchen",
                "Residents' lounge with curated library and fireplace",
                "State-of-the-art screening room with stadium seating",
                "Tasting room and temperature-controlled wine cellar"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] aspect-square" />
                  <span className="font-light text-black/80">{item}</span>
                </li>
              ))}
            </ul>
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
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=70&w=1200&auto=format&fit=crop" 
            alt="Private Dining" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.35}
          />
        </motion.div>
      </div>

      {/* The Gardens Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=70&w=1200&auto=format&fit=crop" 
            alt="The Gardens" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.3}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 lg:pl-10"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">Tranquility</span>
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">The Gardens</h2>
          <p className="text-black/70 font-light leading-relaxed">
            Meticulously landscaped by renowned horticulturists, the private gardens offer a serene escape from the urban core. Features include secluded seating areas, water elements, and seasonal vegetation.
          </p>
          <ul className="space-y-4 mt-2">
              {[
                "Expansive manicured lawn for recreation",
                "Outdoor meditation and yoga deck",
                "Fire pit lounges for evening relaxation",
                "Sculpture garden featuring curated artworks"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] aspect-square" />
                  <span className="font-light text-black/80">{item}</span>
                </li>
              ))}
            </ul>
        </motion.div>
      </div>

      {/* The Rooftop Observatory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col gap-8 order-2 lg:order-1"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Elevate</span>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Rooftop Observatory</h2>
            <p className="text-black/70 font-light leading-relaxed mb-6">
              Situated at the crown of Elyse, the observatory presents sweeping, unhindered views of the skyline and beyond, transforming sunsets into a daily masterpiece.
            </p>
            <ul className="space-y-4">
              {[
                "Wraparound viewing terrace with infinity-edge water feature",
                "Heated outdoor lounges and fire pits for year-round usability",
                "Private dining pods with retractable glass enclosures",
                "Mixologist-staffed sunset bar"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] aspect-square" />
                  <span className="font-light text-black/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative w-full aspect-[4/3] order-1 lg:order-2"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1533280183060-316b2518e381?q=70&w=1200&auto=format&fit=crop" 
            alt="Rooftop Observatory" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.25}
          />
        </motion.div>
      </div>

      {/* Executive Co-Working Lounge */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/10]"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=70&w=1200&auto=format&fit=crop" 
            alt="Co-Working Lounge" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.2}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 lg:pl-10"
        >
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">Focus</span>
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Executive Workspace</h2>
          <p className="text-black/70 font-light leading-relaxed">
            A sophisticated environment tailored for the modern professional. Seamlessly transition from home to office without ever leaving the building.
          </p>
          <ul className="space-y-4 mt-2">
            {[
              "Private boardrooms equipped with telepresence systems",
              "Acoustically isolated focus pods and phone booths",
              "Open-plan collaborative lounge with espresso bar",
              "Enterprise-grade secure Wi-Fi throughout"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-center">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] aspect-square" />
                <span className="font-light text-black/80">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* The Private Cinema */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Immerse</span>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">The Screening Room</h2>
            <p className="text-black/70 font-light leading-relaxed mb-6">
              A bespoke, acoustically tuned environment designed exclusively for immersive cinematic experiences, private premieres, and sporting events.
            </p>
            <ul className="space-y-4">
              {[
                "20-seat tiered theater with ultra-plush reclining loungers",
                "Dolby Atmos object-based surround sound system",
                "4K dual-laser projection on a 180-inch micro-perforated screen",
                "Adjoining concession lounge and wet bar"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] aspect-square" />
                  <span className="font-light text-black/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative w-full aspect-[4/3] order-1 lg:order-2"
        >
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=70&w=1200&auto=format&fit=crop" 
            alt="Private Cinema" 
            containerClassName="w-full h-full absolute inset-0"
            magnitude={0.3}
          />
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 border-t border-black/10"
      >
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Five-Star Servicing</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">Concierge & Services</h2>
          <p className="text-black/60 font-light max-w-2xl mx-auto">
            A dedicated team providing anticipatory service, ready to assist with every need from global travel arrangements to in-residence spa treatments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "24/7 Operations",
              description: "Round-the-clock white-glove concierge, doorman, and security teams ensuring uninterrupted service."
            },
            {
              title: "Valet & Transportation",
              description: "Secure, climate-controlled parking with multi-vehicle capacity and dedicated valet service."
            },
            {
              title: "Curated Experiences",
              description: "Exclusive access to private events, art exhibitions, and culinary previews within the building."
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 border border-black/5 flex flex-col items-center text-center">
              <span className="text-[#D4AF37] font-mono text-sm mb-4">0{i + 1}</span>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{service.title}</h3>
              <p className="text-black/70 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </main>
  );
}
