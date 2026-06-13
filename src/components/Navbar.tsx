import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2 cursor-pointer group">
        <motion.div 
          animate={{ scale: isScrolled ? 0.9 : 1 }}
          transition={{ duration: 0.4 }}
          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg leading-none group-hover:bg-primary-light transition-colors"
        >
          M
        </motion.div>
        <motion.span 
          animate={{ scale: isScrolled ? 0.95 : 1 }}
          className="font-heading font-semibold text-xl tracking-tight text-text-main"
        >
          Medicare
        </motion.span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['Home', 'About', 'Services'].map((item, i) => (
          <motion.a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className={`text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer relative group overflow-hidden py-1 ${
              isScrolled ? 'text-text-main' : 'text-text-muted hover:text-text-main'
            }`}
          >
            <span className="group-hover:text-primary transition-colors duration-300">{item}</span>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-[0.22,1,0.36,1]"></div>
            
            {item === 'Services' && (
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-180 transition-transform duration-300 group-hover:text-primary">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </motion.a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-6">
        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          href="#get-started" 
          className="text-sm font-medium text-text-main hover:text-primary transition-colors cursor-pointer relative group py-1"
        >
          Get Started
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
        </motion.a>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, type: "spring" }}>
          <MagneticButton className="flex items-center gap-2 bg-text-main text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all group shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10">
            Contact Us
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-[-45deg] transition-transform duration-300">
              <ArrowRight size={14} />
            </div>
          </MagneticButton>
        </motion.div>
      </div>

      <button 
        className="md:hidden text-text-main p-2 hover:bg-gray-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-6 md:hidden z-40 origin-top"
          >
            <div className="flex flex-col gap-4">
              {['Home', 'About', 'Services'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-lg text-text-main hover:text-primary transition-colors py-2 border-b border-gray-50 flex items-center justify-between"
                >
                  {item}
                  <ArrowRight size={16} className="text-gray-300" />
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-lg text-text-main hover:text-primary transition-colors py-2 border-b border-gray-50 flex items-center justify-between"
              >
                Get Started
                <ArrowRight size={16} className="text-gray-300" />
              </a>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-text-main text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 mt-2 shadow-lg active:scale-95 transition-transform"
            >
              Contact Us <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
