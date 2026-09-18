import { motion } from 'motion/react';

/** Fade + rise once, when the element enters the viewport. */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 0.7, 0.2, 1] }}
    >
      {children}
    </M>
  );
}
