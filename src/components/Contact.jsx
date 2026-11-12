import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // LeetCode icon

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-6 md:px-16 pt-28 pb-20 bg-gray-900 text-white text-center md:text-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400 text-center md:text-left">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6">
        {/* Email */}
        <motion.a
          href="mailto:ashishshewale0306@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
        >
          <FaEnvelope />
          Email
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/AshishShewale333"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
        >
          <FaGithub />
          GitHub
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/ashish-shewale-3b041516a/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
        >
          <FaLinkedin />
          LinkedIn
        </motion.a>

        {/* LeetCode */}
        <motion.a
          href="https://leetcode.com/u/Ashish0306/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
        >
          <SiLeetcode />
          LeetCode
        </motion.a>
      </div>
    </motion.section>
  );
}
