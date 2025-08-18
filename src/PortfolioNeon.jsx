import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function PortfolioNeon() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar/>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
