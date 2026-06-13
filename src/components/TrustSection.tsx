import { motion } from 'motion/react';
import { ArrowRight, Bell, Navigation } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ease = [0.22, 1, 0.36, 1] as const;

export default function TrustSection() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Left Column Text */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease }}
          className="flex flex-col items-start pr-8"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text-main leading-tight mb-6 tracking-tight">
            Your Trusted Healthcare Providers
          </h2>
          <p className="text-text-muted text-base mb-10 leading-relaxed">
            Public does not participate in payment for order flow as a source of revenue. Instead, we route all orders directly.
          </p>
          <MagneticButton className="bg-primary-lighter hover:bg-primary text-text-main hover:text-white pl-6 pr-2 py-2 rounded-full font-medium inline-flex items-center gap-4 transition-all duration-300 group shadow-md hover:shadow-primary">
            Make a schedule
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight size={16} className="text-primary group-hover:text-white transition-colors" />
            </div>
          </MagneticButton>
        </motion.div>

        {/* Center Mobile App Card */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          whileHover={{ y: -8, transition: { duration: 0.4 } }}
          className="bg-primary-light rounded-[32px] p-8 shadow-hover relative mx-auto w-full max-w-md lg:-translate-y-8 cursor-default"
        >
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-white mb-6">
              <h3 className="font-heading text-xl font-semibold mb-2">Very fast and accurate service with us</h3>
              <p className="text-sm opacity-80 leading-relaxed">Connect with our professional doctors who are ready to help you manage your health.</p>
            </div>
            
            <div className="bg-white rounded-[24px] p-4 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-100" />
              <div className="flex justify-between items-center mb-6">
                <span className="font-medium text-sm">9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-3 bg-text-main rounded-sm"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-text-muted mb-1">Hi, Madhu</p>
                  <div className="flex items-center gap-1 text-[10px] text-text-muted">
                    Jakarta, Indonesia <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4 4L7 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-primary relative shadow-sm cursor-pointer"
                >
                  <Bell size={14} />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                </motion.div>
              </div>

              <div className="bg-gradient-primary rounded-[20px] p-4 text-white relative shadow-primary group/inner cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-sm">Appointment</span>
                  <span className="text-white/70"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </div>
                <div className="flex items-center gap-2 text-xs mb-2 opacity-90">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  7 October 2021
                </div>
                <div className="flex items-center gap-2 text-[11px] opacity-80">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  08:00 AM - 10:00 AM
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-main shadow-lg"
                >
                   <Navigation size={16} className="-translate-y-px -translate-x-px" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Analytics Card */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="bg-white rounded-[32px] p-8 shadow-soft border border-gray-50 h-full flex flex-col justify-between hidden lg:flex hover:shadow-hover transition-shadow group cursor-default"
        >
          <div>
            <h3 className="font-heading text-xl font-semibold mb-3">Analysis your physical performance from anywhere</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-8">Body mass index (BMI), skinfold measurements, or bioelectrical impedance analysis.</p>
          </div>
          
          <div className="flex items-end justify-between px-2 pt-8 border-t border-gray-50 h-48 relative overflow-hidden">
            {[
              { id: 1, bg: 'bg-emerald-400', height: '100px', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=64&h=64', name: 'Alex', delay: 0.5 },
              { id: 2, bg: 'bg-primary', height: '50px', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64', name: 'Ham', delay: 0.6 },
              { id: 3, bg: 'bg-pink-400', height: '80px', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=64&h=64', name: 'Jenny', delay: 0.7 },
              { id: 4, bg: 'bg-yellow-400', height: '40px', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=64&h=64', name: 'Methio', delay: 0.8 },
            ].map((bar) => (
              <div key={bar.id} className="flex flex-col items-center gap-2 group/bar">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: bar.height }}
                  transition={{ duration: 1.5, delay: bar.delay, ease }}
                  className={`w-10 rounded-t-full relative ${bar.bg} group-hover/bar:brightness-110 transition-all`}
                >
                  <motion.img 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: bar.delay + 0.5 }}
                    src={bar.img} 
                    alt={bar.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-8 h-8 rounded-full border-2 border-white absolute -top-12 left-1/2 -translate-x-1/2 object-cover shadow-md group-hover/bar:scale-110 transition-transform duration-300" 
                  />
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: bar.delay + 0.8 }}
                  className="text-xs font-semibold text-text-main group-hover/bar:text-primary transition-colors"
                >
                  {bar.name}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
