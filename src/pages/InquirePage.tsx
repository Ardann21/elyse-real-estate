import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ParallaxImage from "../components/ParallaxImage";

export default function InquirePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#FBFBFA]">
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column - Content & Image */}
        <div className="flex-1 lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-4">Contact</span>
            <h1 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-[0.85] mb-6">
              Inquire
            </h1>
            <p className="text-xl text-black/60 font-light leading-relaxed">
              Register your interest to receive exclusive updates, pricing details, and invitations to private previews of Elyse.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative w-full aspect-[3/4]"
          >
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=70&w=1000&auto=format&fit=crop" 
              alt="Elyse Residence Preview" 
              containerClassName="absolute inset-0 w-full h-full"
              magnitude={0.15}
            />
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 lg:pt-16"
        >
          {isSubmitted ? (
            <div className="bg-black text-white p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-16 h-16 border border-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Thank You</h2>
              <p className="text-white/70 font-light mb-8">
                Your inquiry has been received. A member of our sales gallery will be in touch with you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-sm uppercase tracking-[0.1em] border border-white/20 px-8 py-4 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 relative">
                  <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-black/50 absolute -top-5 left-0">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 focus:border-black py-3 outline-none transition-colors rounded-none placeholder:text-transparent"
                    placeholder="First Name"
                  />
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-black/50 absolute -top-5 left-0">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 focus:border-black py-3 outline-none transition-colors rounded-none placeholder:text-transparent"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="space-y-2 relative mt-4 md:mt-0">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-black/50 absolute -top-5 left-0">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 focus:border-black py-3 outline-none transition-colors rounded-none placeholder:text-transparent"
                    placeholder="Email Address"
                  />
                </div>
                <div className="space-y-2 relative mt-4 md:mt-0">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-black/50 absolute -top-5 left-0">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black/20 focus:border-black py-3 outline-none transition-colors rounded-none placeholder:text-transparent"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="space-y-2 relative mt-10">
                <label htmlFor="interest" className="text-xs uppercase tracking-widest text-black/50 absolute -top-5 left-0">Residence of Interest</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 focus:border-black py-3 outline-none transition-colors rounded-none appearance-none"
                >
                  <option value="" disabled className="text-black/50">Select an option</option>
                  <option value="penthouse">The Penthouse Collection</option>
                  <option value="signature">Signature Residences</option>
                  <option value="garden">Garden Estates</option>
                  <option value="townhomes">The Townhomes</option>
                  <option value="lofts">Executive Lofts</option>
                </select>
                <div className="absolute right-0 top-3 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="space-y-2 relative mt-10">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-black/50 absolute -top-5 left-0">Inquiry Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 focus:border-black py-3 outline-none transition-colors rounded-none resize-none placeholder:text-transparent"
                  placeholder="Inquiry Details"
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto bg-black text-white px-12 py-5 text-sm uppercase tracking-[0.15em] transition-all
                    ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#D4AF37] hover:text-black"}
                  `}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
                <p className="mt-8 text-xs text-black/40 font-light max-w-sm">
                  By submitting this form, you consent to receive communications from Elyse regarding property updates and availability.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
