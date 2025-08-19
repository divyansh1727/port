// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com"; // install: npm install emailjs-com
import { useRef } from "react";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service_rlfm7zv, // replace with your EmailJS service ID
        template_pp56nap,// replace with your EmailJS template ID
        form.current,
        STd93kFk82qnINfgE// replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-neutral-950 text-white text-center overflow-hidden"
    >
      {/* Optional subtle animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900 opacity-10 -z-10 animate-[gradientShift_25s_linear_infinite]"
        style={{ backgroundSize: "400% 400%" }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-12
                   text-transparent bg-clip-text bg-gradient-to-r from-[#7FDBFF] via-[#2FFFD7] to-[#A18AFF]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✨ Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-neutral-800 text-white
                     focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-neutral-800 text-white
                     focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg bg-neutral-800 text-white
                     focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#5FFFE7] via-[#7FDBFF] to-[#A18AFF]
                     text-black font-semibold shadow-lg hover:shadow-[#2FFFD7]/50 transition-all"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-12 text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href="https://github.com/divyansh1727"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#2FFFD7" }}
          className="transition-colors"
        >
          <FaGithub />
        </motion.a>
        <motion.a
  href="https://www.linkedin.com/in/divyansh-singh-3a917437b/"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.2 }}
  className="text-gray-400 hover:text-[#2FFFD7] transition-colors"
>
  <FaLinkedin className="text-3xl" />
</motion.a>

        <motion.a
          href="https://instagram.com/divyanshhhhh.27"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#2FFFD7" }}
          className="transition-colors"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://twitter.com/divyansh1727"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#2FFFD7" }}
          className="transition-colors"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="mailto:divys2705@gmail.com"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#2FFFD7" }}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <SiGmail className="text-3xl" />
        </motion.a>
      </motion.div>
    </section>
  );
}

