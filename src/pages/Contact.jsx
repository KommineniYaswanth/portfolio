import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="page flex flex-col items-start justify-center min-h-screen p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 modern-heading"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-lg mb-2 modern-text"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Email: yaswanthk6767@gmail.com
      </motion.p>

      <motion.p
        className="text-lg mb-2 modern-text"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Phone: 616-899-9791
      </motion.p>

      <motion.p
        className="text-lg mb-2 modern-text"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        LinkedIn: linkedin.com/in/yaswanthk6767
      </motion.p>

      <motion.p
        className="text-lg modern-text"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        GitHub: github.com/yaswanth
      </motion.p>
    </motion.div>
  );
}