// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub,FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-neutral-950 text-white text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        className="max-w-xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 transition-all font-semibold"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-12 text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="https://github.com/divyansh1727"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-500 transition-all"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/Divyansh Singh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-500 transition-all"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-500 transition-all"
        >
          <FaTwitter />
        </a>
        <a
          href="divys2705@email.com"
          className="hover:text-fuchsia-500 transition-all"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://instagram.com/divyanshhhhh.27"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-500 transition-all"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </section>
  );
}
