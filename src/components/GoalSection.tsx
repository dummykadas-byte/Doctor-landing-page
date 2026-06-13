import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function GoalSection() {
  const points = [
    "Providing Accessible Information",
    "Building Trust",
    "Enhancing Patient Engagement",
    "Community Involvement",
    "Promoting Health Education",
    "Security and Privacy"
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease }}
        className="bg-white rounded-[40px] shadow-soft hover:shadow-hover transition-shadow duration-500 border border-gray-50 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="p-10 md:p-16 lg:p-20 flex justify-center flex-col relative z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="font-heading text-4xl md:text-5xl font-semibold text-text-main tracking-tight mb-6 leading-[1.1]"
            >
              Let's know about our<br className="hidden md:block"/> main goal
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="text-text-muted mb-10 leading-relaxed max-w-md"
            >
              We aim to offer clear and comprehensive information about our services, conditions treated, and treatment options. This ensures that patients can make informed decisions about their healthcare.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-text-main font-medium text-sm md:text-base group-hover:text-primary transition-colors">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#FAF7FD] relative min-h-[400px] flex items-end justify-center rounded-br-[40px] lg:rounded-br-[40px] lg:rounded-tr-none overflow-hidden group">
             {/* Decorative background shapes */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white blur-[100px] opacity-60 rounded-full group-hover:scale-110 transition-transform duration-1000" />
             
             <motion.img 
              initial={{ y: 100, opacity: 0, scale: 1.05 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease }}
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Confident caring doctor" 
              loading="lazy"
              decoding="async"
              className="relative z-10 w-auto h-auto max-h-[110%] object-contain object-bottom translate-y-6 drop-shadow-2xl brightness-105 contrast-105 saturate-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 ease-out" 
              style={{
                maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 70%, transparent 100%)'
              }}
             />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
