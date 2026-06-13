import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ease = [0.22, 1, 0.36, 1] as const;

export default function CtaBanner() {
  return (
    <section className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease }}
        className="bg-gradient-primary rounded-[40px] overflow-hidden relative min-h-[400px] flex items-center justify-center text-center p-10 md:p-20 shadow-primary group block"
      >
        {/* Abstract animated spheres approximation using radial gradients for performance */}
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-16 w-96 h-96 rounded-full opacity-60 mix-blend-screen"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)' }}
        />
        
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 0.9, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full opacity-40 mix-blend-color-dodge"
          style={{ background: 'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.4), transparent)' }}
        />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center mix-blend-overlay mix-blend-luminosity"
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.3, ease }}
             className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-10 leading-[1.1] tracking-tight drop-shadow-sm"
          >
            Bring your customer services the next level of excellence.
          </motion.h2>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.5 }}
          >
            <MagneticButton className="bg-white text-primary pl-8 pr-3 py-3 rounded-full font-semibold inline-flex items-center gap-6 shadow-xl shadow-black/10 transition-all duration-300 group/btn">
              Make a schedule
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:scale-110 transition-all duration-300">
                <ArrowRight size={18} className="group-hover/btn:text-white transition-colors duration-300" />
              </div>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
