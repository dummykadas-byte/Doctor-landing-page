import { motion } from 'motion/react';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function TeamSection() {
  const doctors = [
    {
      name: "Martin",
      role: "Strategic & finance",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
      active: false
    },
    {
      name: "Kullok Dash",
      role: "Strategic & finance",
      image: "https://images.unsplash.com/photo-1594824432252-fb9f8ae1770e?auto=format&fit=crop&q=80&w=600",
      active: true
    },
    {
      name: "Shelly",
      role: "Strategic & finance",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
      active: false
    },
    {
      name: "Andrew",
      role: "Strategic & finance",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
      active: false
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-text-main mb-4">
          Meet our expert doctors
        </h2>
        <p className="text-text-muted mb-16">
          We aim to share information about our team
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: i * 0.15, ease }}
            className={`rounded-[28px] p-6 flex flex-col items-center justify-end h-[360px] relative overflow-hidden group cursor-pointer transition-all duration-500
              ${doc.active ? 'bg-gradient-primary shadow-primary -translate-y-2' : 'bg-white hover:-translate-y-4 shadow-soft hover:shadow-hover border border-gray-50'}`}
          >
            {/* Background image masking approach similar to image references */}
            <div className="absolute top-0 inset-x-0 bottom-24 bg-gray-100 rounded-t-[20px] overflow-hidden">
               <img src={doc.image} alt={doc.name} loading="lazy" decoding="async" className="w-full h-full object-cover object-top filter transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className={`relative z-10 w-full rounded-[20px] p-4 flex items-center justify-between transition-colors duration-500
              ${doc.active ? 'bg-white text-text-main' : 'bg-white transparent md:bg-white'} `}
              style={!doc.active ? { boxShadow: '0 -20px 40px rgba(255,255,255,0.9)'} : {}}
             >
              <div className="text-left relative">
                <h3 className="font-heading font-semibold text-lg">{doc.name}</h3>
                <p className="text-xs text-text-muted">{doc.role}</p>
              </div>
              <div className="flex gap-2">
                {[Linkedin, Mail, Twitter].map((Icon, idx) => (
                  <motion.a 
                    key={idx} 
                    href="#" 
                    aria-label={`${doc.name} social link ${idx}`}
                    initial={{ opacity: doc.active ? 1 : 0, scale: doc.active ? 1 : 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm
                    ${doc.active ? (idx === 0 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-text-main hover:bg-gray-200') : 
                                  'bg-gray-100 text-text-main hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100'}`}
                  >
                    <Icon size={12} fill={idx !== 1 ? "currentColor" : "none"} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Active Glow overlay on hover if not active initially */}
            {!doc.active && (
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px] pointer-events-none" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
