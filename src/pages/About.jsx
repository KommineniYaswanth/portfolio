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
        className="text-2xl font-semibold mb-4 modern-heading"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Skills
      </motion.h3>

      <motion.div
        className="skills-section"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {[
          { title: "Programming Languages", values: ["Java 8/11/17", "SQL", "PL/SQL", "Python", "R"] },
          { title: "Web Technologies", values: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "jQuery", "Bootstrap", "Angular"] },
          { title: "J2EE / Backend", values: ["Servlets", "EJB", "JSF", "JDBC", "SOAP", "REST", "Hibernate", "Spring Boot", "Spring MVC"] },
          { title: "Databases", values: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Cassandra"] },
          { title: "Cloud & DevOps", values: ["AWS (EC2, S3, RDS, Lambda, EKS, SQS)", "Azure", "Docker", "Kubernetes", "CI/CD"] },
        ].map((group) => (
          <div key={group.title} className="skill-card">
            <h4 className="skill-card-title">{group.title}</h4>
            <div className="skill-chip-grid">{group.values.map((value) => <span key={value} className="skill-chip">{value}</span>)}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}