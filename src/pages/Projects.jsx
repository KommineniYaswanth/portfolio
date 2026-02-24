import { motion } from "framer-motion";

const projects = [
  {
    title: "Banking Microservices Platform",
    tech: "Java 17, Spring Boot, Kafka, AWS, CockroachDB",
  },
  {
    title: "React Workflow Dashboard",
    tech: "React, TypeScript, REST APIs, Bootstrap",
  },
  {
    title: "Cloud Automation System",
    tech: "AWS Lambda, Docker, Kubernetes, CI/CD",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="page flex flex-col items-start justify-center min-h-screen p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card p-8 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}