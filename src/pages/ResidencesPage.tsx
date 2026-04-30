import { motion } from "motion/react";
import { useEffect } from "react";
import ParallaxImage from "../components/ParallaxImage";
import ResidencesSequence from "../components/ResidencesSequence";
import ImageCarousel from "../components/ImageCarousel";
import { Link } from "react-router-dom";

export default function ResidencesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const residenceTypes = [
    {
      id: "penthouses",
      name: "The Penthouses",
      subtitle: "Unrivaled Sky Mansions",
      description: "Occupying the crown of Elyse, these expansive double-height sky mansions offer panoramic, unobstructed 360-degree views of the city skyline. Featuring private infinity pools, grand sweeping staircases, and exclusive elevator access.",
      details: [
        { label: "Size", value: "8,500 - 12,000 Sq Ft" },
        { label: "Bedrooms", value: "4 to 6" },
        { label: "Bathrooms", value: "5.5 to 7.5" },
        { label: "Outdoor", value: "Private Terrace & Pool" }
      ],
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=70&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "signature",
      name: "Signature Suites",
      subtitle: "Elevated Urban Sanctuaries",
      description: "The core of the Elyse experience. Each suite is meticulously curated with bespoke millwork, imported stone, and dual-aspect windows that bathe the open-plan living spaces in natural light from dawn till dusk.",
      details: [
        { label: "Size", value: "3,200 - 5,000 Sq Ft" },
        { label: "Bedrooms", value: "2 to 4" },
        { label: "Bathrooms", value: "2.5 to 4.5" },
        { label: "Outdoor", value: "Wraparound Balconies" }
      ],
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=70&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "garden",
      name: "Garden Villas",
      subtitle: "A Private Urban Oasis",
      description: "Located on the lower podium levels, the Garden Villas blend the conveniences of condominium living with the privacy of a detached home. Direct access to lush, landscaped courtyards designed by world-renowned botanists.",
      details: [
        { label: "Size", value: "4,500 - 6,000 Sq Ft" },
        { label: "Bedrooms", value: "3 to 5" },
        { label: "Bathrooms", value: "3.5 to 5.5" },
        { label: "Outdoor", value: "Private Courtyard Garden" }
      ],
      images: [
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=70&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "townhomes",
      name: "The Townhomes",
      subtitle: "Multi-Level Masterpieces",
      description: "A rare collection of multi-level residences offering a street-level private entrance and the expansive volume of a single-family home. Soaring ceilings and dramatic double-height living areas define these unique spaces.",
      details: [
        { label: "Size", value: "3,800 - 5,200 Sq Ft" },
        { label: "Bedrooms", value: "3 to 4" },
        { label: "Bathrooms", value: "3.5 to 4.5" },
        { label: "Outdoor", value: "Private Entrance & Terrace" }
      ],
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=70&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "lofts",
      name: "Executive Lofts",
      subtitle: "Modern Minimalist Living",
      description: "Designed for the modern professional, these open-concept lofts feature raw architectural elements, exposed concrete, and floor-to-ceiling glass, offering a sophisticated, minimalist aesthetic.",
      details: [
        { label: "Size", value: "1,800 - 2,500 Sq Ft" },
        { label: "Bedrooms", value: "1 to 2" },
        { label: "Bathrooms", value: "1.5 to 2.5" },
        { label: "Outdoor", value: "Juliette Balcony" }
      ],
      images: [
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?q=70&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=70&w=1200&auto=format&fit=crop"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFA]">
      <ResidencesSequence />

      <div className="pt-20 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-32 mb-32">
          {residenceTypes.map((type, index) => (
          <div key={type.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Image Columns */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
            >
              <ImageCarousel images={type.images} />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`lg:col-span-5 flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-3">{type.subtitle}</span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6">{type.name}</h2>
              <p className="text-black/70 font-light leading-relaxed mb-10">
                {type.description}
              </p>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-black/10 pt-8 mb-10">
                {type.details.map((detail) => (
                  <div key={detail.label}>
                    <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-1">{detail.label}</span>
                    <span className="block text-sm font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/inquire" 
                className="inline-flex justify-center text-sm uppercase tracking-[0.1em] px-8 py-4 border border-black text-[#111111] hover:bg-black hover:text-white transition-colors self-start"
              >
                Request Floor Plans
              </Link>
            </motion.div>

          </div>
        ))}
      </div>

      {/* Interior Excellence Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-32"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">Interior Excellence</h2>
          <p className="text-black/60 font-light max-w-2xl mx-auto">
            Every touchpoint within Elyse is considered. From the tactile sensation of the hardware to the acoustic properties of the flooring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
          {[
            {
              title: "Culinary Spaces",
              description: "Custom Italian cabinetry, integrated architectural lighting, and professional-grade Gaggenau appliances set seamlessly into monolithic marble islands.",
            },
            {
              title: "Sanctuary Baths",
              description: "Radiant-heated stone floors, freestanding soaking tubs crafted from composite cast resin, and custom brushed-brass fixtures.",
            },
            {
              title: "Smart Integration",
              description: "Invisible home automation seamlessly controls climate, ambient lighting sequences, automatic window treatments, and immersive audio.",
            },
            {
              title: "Acoustic Purity",
              description: "Advanced acoustic engineering between floors and resilient channel walls ensure pure, undisturbed tranquility within every residence.",
            }
          ].map((feature, i) => (
            <div key={i} className="bg-[#FBFBFA] p-12 lg:p-16 flex flex-col justify-center hover:bg-black/5 transition-colors duration-500">
              <span className="text-[#D4AF37] font-mono text-sm mb-4">0{i + 1}</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{feature.title}</h3>
              <p className="text-black/70 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border-t border-black/10 pt-20 pb-10 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">
          Bespoke Finishes
        </h2>
        <p className="text-black/60 font-light max-w-2xl mx-auto mb-12">
          Purchasing an Elyse residence prior to completion allows owners to engage our design team to select from a suite of rare, curated materials to personalize their home.
        </p>
        <Link 
          to="/inquire" 
          className="inline-block text-xs font-semibold uppercase tracking-[0.15em] border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors"
        >
          Schedule a Private Consultation
        </Link>
      </motion.div>

      </div>
    </main>
  );
}
