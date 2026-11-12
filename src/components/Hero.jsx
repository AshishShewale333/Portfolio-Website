import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // ✅ correct way

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-4 max-w-6xl mx-auto text-center md:text-left"
    >
      {/* Text */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-sky-400 mb-4">
          Ashish Shewale
        </h1>

        <h2 className="text-2xl md:text-3xl text-yellow-400 mb-6">
          Java Backend Developer
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          I build scalable backend systems using Java, Spring Boot, Kafka,
          Microservices, and Cloud.
        </p>

        {/* ✅ Download CV */}
        <a
          href="/Portfolio-Website/resume/Ashish_Shewale_Resume.pdf"
          download
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Download CV
        </a>
      </motion.div>

      {/* Profile Picture */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={profilePic}
          alt="Ashish Shewale"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-sky-400 mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
