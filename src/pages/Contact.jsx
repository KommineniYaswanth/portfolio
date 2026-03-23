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

      <motion.div
        className="contact-card-grid"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {[
          { label: "✉️ Email", value: "yaswanthk6767@gmail.com", href: "mailto:yaswanthk6767@gmail.com" },
          { label: "📞 Phone", value: "616-899-9791", href: "tel:+16168999791" },
          { label: "🔗 LinkedIn", value: "linkedin.com/in/yaswanthk6767", href: "https://linkedin.com/in/yaswanthk6767" },
          { label: "💼 GitHub", value: "github.com/KommineniYaswanth", href: "https://github.com/KommineniYaswanth" },
        ].map((item) => (
          <a key={item.label} className="contact-card" href={item.href} target="_blank" rel="noreferrer">
            <span className="contact-label">{item.label}</span>
            <span className="contact-value">{item.value}</span>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}