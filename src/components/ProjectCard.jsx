import { motion } from "framer-motion";

export default function ProjectCard({ title, problem, solution, tech, contributions }) {
  return (
    <motion.article
      className="project-card relative"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-100 mb-3"><strong>Problem:</strong> {problem}</p>
      <p className="text-sm text-slate-600 dark:text-slate-100 mb-3"><strong>Solution:</strong> {solution}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Technologies:</strong> {tech}</p>
      <p className="text-sm text-slate-500 dark:text-slate-300"><strong>Contributions:</strong> {contributions}</p>
    </motion.article>
  );
}
