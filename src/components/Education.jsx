import { motion } from "framer-motion";

const educationList = [
  {
    degree: "Post-graduation, Diploma in Advanced Computing",
    school: "CDAC SM-VITA",
    duration: "Mar 2022 - Sep 2022",
  },
  {
    degree: "BE - Bachelor of Engineering, Civil Engineering",
    school: "A P Shah Institute of Technology, Kasarvadavali",
    duration: "2016 - 2019",
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="px-4 md:px-8 pt-28 pb-20 bg-gray-800 text-white" // <-- changed py-20 to pt-28 pb-20
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12 text-center md:text-left">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-300">{edu.school}</p>
            <p className="text-gray-400 text-sm">{edu.duration}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

