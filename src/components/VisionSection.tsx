import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function VisionSection() {
  const visions = [
    { title: "Path to Wellness", desc: "Our vision is to empower patients through personalized care", num: "001" },
    { title: "Mental Health Services", desc: "Counseling, therapy, and psychiatric care for mental health conditions.", num: "002" },
    { title: "Diagnostic Services", desc: "Medical procedures and tests used to identify diseases", num: "003" },
    { title: "Beyond Medicine", desc: "We are ready to serve you with pleasure and fast response", num: "004" },
    { title: "Pediatric Care", desc: "Comprehensive healthcare services for infants, children, adolescents.", num: "005" },
    { title: "Telehealth Services", desc: "Remote consultations and follow-up appointments via video or phone.", num: "006" },
    { title: "Future of Care", desc: "We are ready to serve you with pleasure and fast response", num: "007" },
    { title: "Holistic Health", desc: "Holistic health is an approach to well-being that considers person", num: "008" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto" id="services">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-text-main mb-4">
          Here are some key vision
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          We are committed to upholding the highest standards of medical excellence while ensuring each patient feels valued and heard.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visions.map((vision, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: (Math.floor(i / 4) * 0.2) + ((i % 4) * 0.1), ease }} // Wave pattern stagger
            whileHover={{ y: -8 }}
            className="group bg-white rounded-[24px] p-8 border border-gray-100 hover:border-primary/50 transition-all duration-500 hover:shadow-hover cursor-default relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -translate-y-full translate-x-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <div className="flex justify-between items-start mb-12 relative z-10">
              <span className="text-gray-300 font-heading text-sm font-medium group-hover:text-primary-light transition-colors duration-300">{vision.num}</span>
              <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-text-main group-hover:text-primary group-hover:border-primary/20 transition-all duration-500 group-hover:bg-primary/5 shadow-sm group-hover:shadow-md">
                <Lightbulb size={18} className="group-hover:rotate-15 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-heading font-semibold text-lg text-text-main mb-3 group-hover:text-primary transition-colors duration-300">{vision.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed group-hover:text-text-main transition-colors duration-300">{vision.desc}</p>
            </div>
            
            {/* Soft highlight on hover */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
