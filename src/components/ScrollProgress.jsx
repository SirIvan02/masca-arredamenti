import { motion, useScroll } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="fixed inset-x-0 top-0 z-60 h-[2px] bg-ink/8">
      <motion.div className="h-full origin-left bg-brass" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
