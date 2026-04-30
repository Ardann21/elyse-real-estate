import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Vision", href: "/vision" },
    { name: "Residences", href: "/residences" },
    { name: "Amenities", href: "/amenities" },
    { name: "Location", href: "/location" },
    { name: "FAQ", href: "/faq" },
  ];

  // If we are on /vision page and not scrolled, the background is white so we need dark text
  const isDarkText = location.pathname === '/vision' || location.pathname === '/residences' || location.pathname === '/amenities' || location.pathname === '/location' || location.pathname === '/faq' || location.pathname === '/inquire' || isScrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-[#FBFBFA]/90 backdrop-blur-md border-black/10 py-4" 
            : "bg-transparent border-transparent py-6 " + ((location.pathname === '/vision' || location.pathname === '/residences' || location.pathname === '/amenities' || location.pathname === '/location' || location.pathname === '/faq' || location.pathname === '/inquire') ? 'text-[#111111]' : 'text-white')
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="font-black tracking-tighter text-2xl tracking-widest uppercase flex items-center gap-2">
            Elyse <span className="opacity-70 text-sm tracking-widest">Dev</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-xs uppercase tracking-[0.1em] font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`hover:opacity-60 transition-opacity ${isDarkText ? 'text-[#111111]' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Link 
              to="/inquire" 
              className={`text-xs uppercase tracking-[0.1em] px-6 py-3 border transition-colors ${
                isDarkText 
                  ? "border-black/20 text-[#111111] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black" 
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-[#FBFBFA] flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black tracking-tighter tracking-widest uppercase text-[#111111]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/inquire" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 text-sm uppercase tracking-[0.1em] px-8 py-4 border border-black/20 text-[#111111]"
          >
            Inquire Now
          </Link>
        </motion.div>
      )}
    </>
  );
}
