import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "NuSummit",
    duration: "Jul 2025 - Present · 7 mos",
    location: "On-site",
    logo: "/logos/nusummit.png",
  },
  {
    role: "Software Engineer",
    company: "StoxBox",
    duration: "Feb 2025 - Jul 2025 · 6 mos",
    location: "Mumbai, Maharashtra, India",
    logo: "/logos/stoxbox.png",
  },
  {
    role: "Software Engineer",
    company: "Nasdaq",
    duration: "Jan 2023 - Jan 2025 · 2 yrs 1 mo",
    location: "Mumbai, Maharashtra, India",
    logo: "/logos/nasdaq.png",
  },
  {
    role: "Junior Design Engineer",
    company: "J. Kumar Infraprojects Ltd.",
    duration: "Jan 2020 - Sep 2020 · 9 mos",
    location: "Andheri · On-site",
    logo: "/logos/jkumar.png",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="px-4 md:px-8 py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12 text-center md:text-left">
        Experience
      </h2>

      <div className="flex flex-col gap-6 md:gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 gap-6"
          >
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
              <p className="text-gray-400 text-sm">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
