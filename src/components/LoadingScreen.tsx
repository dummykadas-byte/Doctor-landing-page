import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return p + Math.floor(Math.random() * 5) + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      exit={{ opacity: 0, y: -40, filter: "blur(10px)", transition: { duration: 1.2, ease } }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center pointer-events-none"
    >
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, ease }}
           className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-4xl mb-8 shadow-primary"
        >
          M
        </motion.div>
        
        <div className="w-64 h-1 bg-primary/10 rounded-full overflow-hidden relative mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-heading font-medium text-sm text-primary tracking-widest"
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
}
