import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="page flex flex-col items-center justify-center min-h-screen p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4 modern-heading text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Hi, I'm Yaswanth <span role="img" aria-label="wave">👋</span>
      </motion.h1>

      <motion.h3
        className="text-2xl font-semibold mb-4 modern-heading text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Senior Java Full Stack Developer
      </motion.h3>

      <motion.p
        className="text-lg max-w-xl modern-text text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 12px 0 rgba(56,189,248,0.08)" }}
      >
        I build scalable enterprise applications using <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>Java</span>, <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>Spring Boot</span>, <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>React</span>, <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>AWS</span>, <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>Microservices</span>.
      </motion.p>
    </motion.div>
  );
}