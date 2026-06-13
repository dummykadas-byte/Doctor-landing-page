import { motion, useInView } from 'motion/react';
import { ShieldCheck, Users, Activity } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default function StatsSection() {
  const stats = [
    { value: 100, suffix: '%', label: 'Our Doctors Certified', id: '001', icon: ShieldCheck, color: 'text-primary' },
    { value: 25, suffix: 'M+', label: 'Happy global users', id: '002', icon: Users, color: 'text-blue-500' },
    { value: 99, suffix: '%', label: 'Satisfying treatment', id: '003', icon: Activity, color: 'text-pink-500' },
  ];

  return (
    <section className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: idx * 0.15, ease }}
            className="bg-white rounded-[24px] p-8 shadow-soft flex flex-col justify-between border border-gray-50/50 hover:shadow-hover hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-heading text-5xl font-bold tracking-tight text-text-main flex items-center">
                • <span className="ml-2"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></span>
              </h3>
              <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${stat.color} group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500`}>
                <stat.icon size={20} strokeWidth={2.5} />
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <p className="text-text-muted font-medium flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full group-hover:before:bg-primary transition-colors">
                {stat.label}
              </p>
              <span className="text-gray-200 font-heading font-medium tracking-wider group-hover:text-primary-lighter transition-colors">{stat.id}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
