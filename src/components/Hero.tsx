import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30, mass: 0.5 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30, mass: 0.5 });

  const textEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="pt-32 pb-16 px-6 md:px-12 relative overflow-hidden" 
             style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF7FB 100%)' }}>
      
      {/* Decorative gradient orb */}
      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-[0.04] blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: textEase }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 mb-8"
        >
          <div className="w-5 h-5 rounded-full bg-primary-lighter flex items-center justify-center">
            <Star size={10} className="text-primary fill-primary" />
          </div>
          <span className="text-xs font-medium text-text-muted uppercase tracking-wider">About Us</span>
        </motion.div>

        <motion.h1 
          className="font-heading text-4xl md:text-5xl lg:text-[72px] font-semibold leading-[1.1] tracking-tight text-text-main mb-6 flex flex-wrap justify-center"
        >
          {['Discover Our Mission', 'and Values in', 'Patient-Centered', 'Healthcare'].map((line, i) => (
            <div key={i} className="overflow-hidden w-full flex justify-center pb-2">
              <motion.span
                initial={{ opacity: 0, y: 80, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: i * 0.15 + 0.2, ease: textEase }}
                className="inline-block"
              >
                {line}
              </motion.span>
            </div>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: textEase }}
          className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          We are dedicated to providing exceptional healthcare through a compassionate, patient-centered approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.4 }}
        >
          <MagneticButton className="bg-gradient-primary text-white pl-6 pr-2 py-2 rounded-full font-medium inline-flex items-center gap-4 shadow-primary group overflow-hidden relative">
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">Contact us</span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-colors duration-300">
              <ArrowRight size={16} className="text-white group-hover:text-primary transition-colors" />
            </div>
            {/* Hover shadow glare effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1.5s_ease-out_infinite]" />
          </MagneticButton>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24 grid grid-cols-12 gap-4 max-w-[1400px] mx-auto relative z-10 h-[400px] md:h-[500px]">
        
        {/* Left Small Image */}
        <motion.div 
          style={{ y: springY1 }}
          className="col-span-3 lg:col-span-2 hidden md:block rounded-[30px] overflow-hidden"
        >
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: textEase, delay: 0.4 }}
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800" 
            alt="Patient receiving care" 
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover" 
          />
        </motion.div>

        {/* Center Large Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: textEase, delay: 0.6 }}
          className="col-span-12 md:col-span-6 lg:col-span-7 rounded-[30px] overflow-hidden relative group"
        >
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
              alt="Healthcare procedure" 
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </motion.div>
          
          {/* Glass floating tags */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, delay: 1.2, ease: textEase }}
             whileHover={{ y: -5 }}
             className="absolute right-6 bottom-20 glass-panel rounded-full px-4 py-2 text-sm text-white font-medium flex items-center gap-2 shadow-lg transition-transform cursor-default z-10"
          >
            <span className="font-semibold text-primary-lighter">100%</span> Fast Response
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: textEase }}
            whileHover={{ y: -5 }}
            className="absolute right-12 bottom-6 glass-panel rounded-full px-4 py-2 text-sm text-white font-medium flex items-center gap-2 shadow-lg transition-transform cursor-default z-10"
          >
            <span className="font-semibold text-primary-lighter">90%</span> Satisfying treatment
          </motion.div>
        </motion.div>

        {/* Right Small Image */}
        <motion.div 
          style={{ y: springY2 }}
          className="col-span-3 lg:col-span-3 hidden md:block rounded-[30px] overflow-hidden relative"
        >
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: textEase, delay: 0.8 }}
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800" 
            alt="Doctor smiling" 
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover" 
          />
          {/* Circular button overlapping */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5, type: "spring", bounce: 0.5 }}
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          >
            <div className="w-8 h-8 rounded-full border-2 border-text-main flex items-center justify-center overflow-hidden relative">
              <motion.div 
                animate={{ y: [-5, 15] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute w-[2px] h-[10px] bg-text-main"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
