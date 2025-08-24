import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Divyansh Singh</h2>
          <p className="text-gray-400 text-sm">
            Full Stack Developer | Learner 
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Socials */}
       
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Divyansh Singh. All rights reserved.
      </div>
    </footer>
  );
}
