// src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-neutral-950 text-white overflow-hidden">
      {/* Optional subtle background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900 opacity-10 -z-10 animate-[gradientShift_25s_linear_infinite]"
        style={{ backgroundSize: "400% 400%" }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12
                     text-transparent bg-clip-text bg-gradient-to-r from-[#7FDBFF] via-[#2FFFD7] to-[#A18AFF]"
        >
          ✨ Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.2, rotate: 6, y: -5 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-neutral-900 rounded-2xl
                         shadow-lg hover:shadow-[0_0_25px_#00f2ff] cursor-pointer transition-all duration-300"
            >
              <motion.div
                className="text-6xl mb-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 + i * 0.1, ease: "easeInOut" }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
