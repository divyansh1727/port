// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-neutral-950 text-center px-6 md:px-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-lg md:text-xl italic text-neutral-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I’m <span className="text-cyan-400 italic font-semibold">Divyansh</span>, a
        passionate developer who loves building modern, interactive, and
        aesthetic web experiences. I specialize in{" "}
        <span className="text-cyan-400">React</span>,{" "}
        <span className="text-cyan-400">Firebase</span>, and{" "}
        <span className="text-cyan-400">Tailwind CSS</span>.  
        <br />
        <br />
        My mission is to craft web apps that are not only functional but also
        engaging, user-friendly, and visually stunning 🚀.
      </motion.p>
    </section>
  );
}
