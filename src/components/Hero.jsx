import { motion } from "framer-motion";

const generateParticles = (count) =>
  Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 5 + 3,
    dx: (Math.random() - 0.5) * 2, // X drift
    dy: (Math.random() - 0.5) * 2, // Y drift
  }));

export default function Hero() {
  const particles = generateParticles(60);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black overflow-hidden">
      {/* Dynamic particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-200/80 rounded-full blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.y}%`,
            left: `${p.x}%`,
          }}
          animate={{
            x: [0, p.dx * 5, 0],
            y: [0, p.dy * 5, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: p.speed,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Heading with floating emoji */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold italic
                   text-transparent bg-clip-text
                   bg-gradient-to-r from-teal-300 via-sky-400 to-violet-400
                   drop-shadow-[0_2px_10px_rgba(56,189,248,0.35)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I’m Divyansh{" "}
        <motion.span
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="inline-block"
        >
          ☄️
        </motion.span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-6 text-lg md:text-2xl italic text-gray-300 max-w-2xl
                   bg-gradient-to-r from-teal-200 via-sky-300 to-violet-300
                   bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate Full-Stack Developer creating futuristic web experiences!!✨
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        className="mt-10 px-8 py-3 rounded-3xl 
                   bg-gradient-to-r from-teal-400 via-sky-400 to-violet-500
                   text-lg font-bold text-white shadow-lg shadow-sky-400/30
                   hover:shadow-violet-500/50 hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Explore My Work
      </motion.a>
    </section>
  );
}
