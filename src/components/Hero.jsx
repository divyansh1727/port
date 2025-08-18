import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I’m Divyansh 🚀
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate Full-Stack Developer creating futuristic web experiences ⚡
      </motion.p>

      <motion.a
        href="#projects"
        className="mt-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-bold shadow-lg hover:shadow-pink-500/50 transition"
        whileHover={{ scale: 1.1 }}
      >
        Explore My Work
      </motion.a>
    </section>
  )
}
