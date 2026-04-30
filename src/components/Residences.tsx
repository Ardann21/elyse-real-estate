import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "./ParallaxImage";
import { Link } from "react-router-dom";

export default function Residences() {
  const properties = [
    {
      id: "01",
      name: "The Penthouse Edition",
      beds: "4 Beds",
      baths: "4.5 Baths",
      sqft: "4,200 sq.ft.",
      image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=70&w=1000&auto=format&fit=crop"
    },
    {
      id: "02",
      name: "Garden Villa",
      beds: "3 Beds",
      baths: "3 Baths",
      sqft: "3,100 sq.ft.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=70&w=1000&auto=format&fit=crop"
    },
    {
      id: "03",
      name: "Terrace Suite",
      beds: "2 Beds",
      baths: "2.5 Baths",
      sqft: "2,400 sq.ft.",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=70&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="residences" className="py-32 bg-[#FBFBFA] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div>
            <h2 className="text-sm tracking-[0.15em] uppercase text-black/50 mb-6 border-b border-black/20 pb-4 inline-block">
              Portfolio
            </h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter">
              Curated <span className="italic font-light">Residences</span>
            </h3>
          </div>
          <Link to="/residences" className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors flex items-center gap-2">
            View All Plans <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                <ParallaxImage 
                  src={prop.image} 
                  alt={prop.name}
                  containerClassName="w-full h-full absolute inset-0"
                />
              </div>
              <div className="flex justify-between items-start border-b border-black/20 pb-6 mb-4">
                <div>
                  <span className="text-xs font-mono text-black/50 mb-2 block">{prop.id}</span>
                  <h4 className="text-2xl font-black tracking-tighter uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">
                    {prop.name}
                  </h4>
                </div>
              </div>
              <div className="flex justify-between text-sm text-black/60 font-light">
                <span>{prop.beds}</span>
                <span>{prop.baths}</span>
                <span>{prop.sqft}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
