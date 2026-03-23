import { motion } from "framer-motion";

export default function ParticleBackground() {
  return (
    <motion.div
      className="particle-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="particle-layer" />
      <div className="particle-layer particle-layer--fade" />
    </motion.div>
  );
}
