import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-lg z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
        Divyansh<span className="text-gray-400">.</span>
      </h1>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <li>
          <a href="#hero" className="hover:text-pink-400 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Icon (optional for later) */}
    </motion.nav>
  );
}
