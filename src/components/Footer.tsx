import { motion } from 'motion/react';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease }}
      className="bg-[#111111] text-white pt-24 pb-8 px-6 md:px-12 mt-20 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top section: Header & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/10 pb-16 mb-16">
          <div className="max-w-md">
            <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="font-heading text-4xl md:text-5xl font-semibold mb-6"
            >
              Let's Connect with us
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="flex gap-4"
          >
             <MagneticButton className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full font-medium transition-colors shadow-primary">
              Get Started →
             </MagneticButton>
             <MagneticButton className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2">
              Contact Us <span className="w-4 h-4 rounded-full border border-white flex justify-center items-center text-[10px]">+</span>
             </MagneticButton>
          </motion.div>
        </div>

        {/* Main Footer Links */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16"
        >
          
          {/* Brand Col */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer w-fit">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg leading-none group-hover:scale-110 transition-transform">
                M
              </div>
              <span className="font-heading font-semibold text-xl tracking-tight">
                Medicare
              </span>
            </div>
            
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-sm">
              We are dedicated to providing exceptional healthcare through a compassionate, patient-centered approach. Our experts are here to help.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                   <Mail size={16} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email us at</p>
                  <p className="text-sm font-medium text-gray-300">hello@medicare.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                   <Phone size={16} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call us anytime</p>
                  <p className="text-sm font-medium text-gray-300">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                   <MapPin size={16} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Our Location</p>
                  <p className="text-sm font-medium text-gray-300">123 Health Ave, NY 10012</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links Cols */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['People platform', 'Full-service', 'Employee Benefits', 'Hiring and onboarding', 'Talent management', 'Insights and reporting'].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors relative group w-fit block"><span className="relative z-10">{link}</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span></a></li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Features</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Primary Care', 'Telehealth', 'Cardiology', 'Mental Health Services', 'Integrations', 'Pricing'].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors relative group w-fit block"><span className="relative z-10">{link}</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span></a></li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['CareCrafters', 'HealthBridge', 'VitalLink', 'Global Business'].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors relative group w-fit block"><span className="relative z-10">{link}</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span></a></li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">For Accountants</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Become a partner', 'Partner community', 'Professional development', 'People Advisory', 'Resources'].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors relative group w-fit block"><span className="relative z-10">{link}</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span></a></li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 gap-4"
        >
          <div className="flex gap-4 flex-wrap justify-center">
            <span>Medicare© 2024 Privacy</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Licenses</a>
            <a href="#" className="hover:text-white transition-colors">Site map</a>
          </div>
          
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                aria-label={`Social Media Link ${i + 1}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + (i * 0.1), type: "spring" }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors text-gray-400"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
}
