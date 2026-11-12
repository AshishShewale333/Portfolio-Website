// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Kafka Event Processing System",
    description: "Built Kafka producers/consumers to process DB events and trigger external APIs with retry and failure handling."
  },
  {
    title: "External API Orchestration",
    description: "Designed token-based authentication, caching, retries, and DB persistence using Spring Boot."
  },
];

export default function Projects() {
  return (
    <motion.section id="projects" className="px-6 md:px-16 py-16 bg-gray-800 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx}
            className="bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p>{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

