// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Learning Platform",
    desc: "Full-stack platform with React, Firebase, course management, quizzes, and certificates.",
    tech: ["React", "Firebase", "Tailwind"],
    live: "https://course9teen.vercel.app",
    github: "https://github.com/divyansh1727/course9teen",
  },
  {
    title: "Gym Website",
    desc: "Modern gym website with neon-dark theme, animated sections, and membership plans.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://gymsite-pi.vercel.app",
    github: "https://github.com/divyansh1727/gym-website",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with neon-dark aesthetic and smooth animations.",
    tech: ["React", "Framer Motion"],
    live: "https://port-eosin-five.vercel.app",
    github: "https://github.com/divyansh1727/portfolio",
  },
  {
        title: "Art and Craft Website",
    desc: "Art and Craft website with neon-dark aesthetic and fabulous working.",
    tech: ["React", "Framer Motion"],
    live: "https://artpour.vercel.app",
    github: "https://github.com/divyansh1727/pourbykay",
  }, 
  {
    title: "GTA-VI Website",
    desc: "Gaming website with a download option.",
    tech: ["React", "Framer Motion"],
    live: "https://gta-six-mocha.vercel.app",
    github: "https://github.com/divyansh1727/gta",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-neutral-900 px-6 md:px-20 overflow-hidden">
      {/* Optional subtle background gradient for extra cosmic effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900 opacity-20 -z-10 animate-[gradientShift_20s_linear_infinite]"
        style={{
          backgroundSize: "400% 400%",
        }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center
                   text-transparent bg-clip-text bg-gradient-to-r from-[#7FDBFF] via-[#2FFFD7] to-[#A18AFF]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-neutral-950 p-8 rounded-2xl shadow-lg border border-neutral-800
                       hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]
                       transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.25 }}
          >
            {/* Project Title */}
            <h3 className="text-2xl font-extrabold mb-3 text-transparent bg-clip-text
                           bg-gradient-to-r from-[#7FDBFF] via-[#2FFFD7] to-[#A18AFF]">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 italic mb-4">{p.desc}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, j) => (
                <motion.span
                  key={j}
                  className="text-sm bg-neutral-800 px-3 py-1 rounded-full text-cyan-300"
                  whileHover={{ scale: 1.1, textShadow: "0 0 8px #2FFFD7" }}
                  transition={{ duration: 0.2 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-semibold 
                           bg-gradient-to-r from-[#5FFFE7] via-[#7FDBFF] to-[#A18AFF] 
                           text-black shadow-lg hover:shadow-[#2FFFD7]/50 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Live Demo
              </motion.a>

              <motion.a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 font-semibold
                           hover:bg-gradient-to-r hover:from-[#5FFFE7] hover:via-[#7FDBFF] hover:to-[#A18AFF]
                           hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
