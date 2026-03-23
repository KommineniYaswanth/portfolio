import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Enterprise Banking Automation",
    problem: "Legacy payment processing had latency spikes and inconsistent fault handling.",
    solution: "Designed and led a microservices architecture using Spring Boot, Kafka, and CockroachDB with auto-retry and observability.",
    tech: "Java 17, Spring Boot, Kafka, CockroachDB, AWS",
    contributions: "Spearheaded service decomposition, implemented resilient circuit breakers, and improved throughput by 42%.",
  },
  {
    title: "Workflow Insights Platform",
    problem: "Operational teams lacked real-time process visibility and analytics.",
    solution: "Built a React dashboard with TypeScript and REST-based data pipelines, supporting role-based views and metrics.",
    tech: "React, TypeScript, Bootstrap, REST APIs",
    contributions: "Owned end-to-end frontend implementation, collaborated closely with UX and backend teams for a 98% adoption rate in pilot.",
  },
  {
    title: "Cloud Infrastructure Orchestration",
    problem: "Manual deployments caused frequent drift and delayed releases.",
    solution: "Created a CI/CD automation framework with AWS Lambda and Kubernetes that enforced policy compliance.",
    tech: "AWS Lambda, Docker, Kubernetes, GitHub Actions",
    contributions: "Implemented environment provisioning and healthy rollback policies, reducing deployment incidents by 35%.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

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
        className="text-3xl font-bold mb-6 modern-heading"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            problem={project.problem}
            solution={project.solution}
            tech={project.tech}
            contributions={project.contributions}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
