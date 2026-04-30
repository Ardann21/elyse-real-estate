import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "The Residences",
    question: "When is the anticipated completion date?",
    answer: "Occupancy is scheduled for late 2026. Buyers will be kept informed with quarterly construction updates and have access to private hard-hat tours beginning next spring."
  },
  {
    category: "The Residences",
    question: "Are custom floor plans or combinations permitted?",
    answer: "Yes, during the pre-construction phase, purchasers may work with our architectural team to combine adjacent residences or customize select interior layouts to suit their specific requirements."
  },
  {
    category: "Amenities & Services",
    question: "What are the common charges and what do they include?",
    answer: "Common charges cover the 24/7 concierge, doorman, valet, fitness center, wellness club, and maintenance of all common areas including the rooftop observatory. Specific estimates are provided upon inquiry."
  },
  {
    category: "Amenities & Services",
    question: "Is there on-site parking available?",
    answer: "Elyse offers private, secure, climate-controlled parking with valet service. Select residences include deeded parking spaces, and additional spaces may be available for purchase."
  },
  {
    category: "Neighborhood",
    question: "How close are the nearest luxury shopping and dining districts?",
    answer: "Elyse is situated immediately adjacent to the Cultural District and within a five-minute walk of premier global boutiques, Michelin-starred restaurants, and high-end grocers."
  },
  {
    category: "Purchasing",
    question: "What is the deposit structure?",
    answer: "Our standard deposit structure requires 10% upon signing the contract, 10% after 6 months, and the remaining 80% due at closing. Different terms may apply for international purchasers."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Inquiries</span>
        <h1 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-[0.85] mb-6">
          Frequently Asked <span className="italic font-light text-[#D4AF37]">Questions</span>
        </h1>
        <p className="text-xl text-black/60 font-light max-w-2xl mx-auto">
          Essential details regarding availability, the purchasing process, and the unique lifestyle at Elyse.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-black/10 bg-white overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between hover:bg-black/5 transition-colors gap-6"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/40 block mb-2">{faq.category}</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">{faq.question}</h3>
                </div>
                <div className="flex-shrink-0 text-[#D4AF37]">
                  {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2">
                       <div className="h-px w-12 bg-[#D4AF37]/50 mb-6" />
                       <p className="text-black/70 font-light leading-relaxed text-lg max-w-3xl">
                         {faq.answer}
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      
      {/* Contact Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-32 text-center p-12 bg-black text-white rounded-sm"
      >
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Further Inquiries?</h2>
        <p className="text-white/70 font-light mb-8 max-w-xl mx-auto">
          Our sales gallery representatives are available to provide comprehensive details and arrange private presentations.
        </p>
        <Link 
          to="/inquire" 
          className="inline-block text-sm uppercase tracking-[0.1em] px-8 py-4 border border-white/20 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-colors"
        >
          Contact Sales Team
        </Link>
      </motion.div>
    </main>
  );
}
