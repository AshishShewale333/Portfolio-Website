import React from "react";
import { FaJava } from "react-icons/fa"; // Java
import { FaDocker } from "react-icons/fa"; // Docker
import { SiSpringboot, SiMysql } from "react-icons/si"; // Spring Boot, SQL
// Kafka may not exist, use a generic icon or SVG
import { FaProjectDiagram } from "react-icons/fa"; // fallback for Kafka

const skills = [
  { name: "Java", icon: <FaJava size={40} color="#5382a1" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} color="#6db33f" /> },
  { name: "Kafka", icon: <FaProjectDiagram size={40} color="#231f20" /> },
  { name: "Docker", icon: <FaDocker size={40} color="#2496ed" /> },
  { name: "SQL", icon: <SiMysql size={40} color="#4479a1" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-3xl text-yellow-400 mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            {skill.icon}
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
