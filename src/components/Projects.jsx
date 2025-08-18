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
    live: "https://port-kappa-gray.vercel.app",
    github: "https://github.com/divyansh1727/portfolio",
  },
  {
    title: "Art and Craft Website",
    desc: "Art and Craft website with neon-dark aesthetic and fabulous working.",
    tech: ["React", "Framer Motion"],
    live: "https://artpour-4kra.vercel.app",
    github: "https://github.com/divyansh1727/portfolio",
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
    <section id="projects" className="py-20 bg-neutral-900 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
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
            className="bg-neutral-950 p-6 rounded-2xl shadow-lg border border-neutral-800 hover:border-cyan-400 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">{p.title}</h3>
            <p className="text-neutral-300 mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  className="text-sm bg-neutral-800 px-3 py-1 rounded-full text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
              >
                Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
