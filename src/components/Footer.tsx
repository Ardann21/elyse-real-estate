import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFA] text-[#111111] border-t border-black/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="font-black tracking-tighter text-3xl tracking-widest uppercase">
            Elyse <span className="opacity-70 text-lg tracking-widest block mt-2">Residence</span>
          </Link>
          <p className="text-xs text-black/40 tracking-[0.1em] uppercase">
            © {new Date().getFullYear()} Elyse Dev. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-12 text-xs uppercase tracking-[0.15em] text-black/60">
          <div className="flex flex-col gap-4">
            <Link to="/vision" className="hover:text-black transition-colors">Vision</Link>
            <Link to="/residences" className="hover:text-black transition-colors">Residences</Link>
            <Link to="/amenities" className="hover:text-black transition-colors">Amenities</Link>
            <Link to="/location" className="hover:text-black transition-colors">Location</Link>
            <Link to="/faq" className="hover:text-black transition-colors">FAQ</Link>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Press</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 text-[10px] text-black/30 uppercase tracking-widest leading-relaxed text-justify md:text-center">
        The artist representations and interior decorations, finishes, appliances and furnishings contained herein are provided for illustrative purposes only. Sponsor makes no representations or warranties except as may be set forth in the offering plan. All dimensions are approximate and subject to normal construction variances and tolerances.
      </div>
    </footer>
  );
}
