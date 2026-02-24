import { motion } from "framer-motion";

export default function About() {
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
        About Me
      </motion.h2>

      <motion.p
        className="text-lg mb-6 max-w-xl modern-text"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I have 7+ years of experience in Java Full Stack Development, working with Spring Boot, Microservices, React, AWS, Docker, Kubernetes and SQL/NoSQL databases.
      </motion.p>

      <motion.h3
        className="text-2xl font-semibold mb-2 modern-heading"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Skills
      </motion.h3>

      <motion.ul
        className="list-disc list-inside space-y-1 modern-text about-skills-list"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <li>Java, Spring Boot, Microservices</li>
        <li>React, TypeScript, HTML, CSS</li>
        <li>AWS, Docker, Kubernetes</li>
        <li>MySQL, PostgreSQL, MongoDB</li>
      </motion.ul>
    </motion.div>
  );
}