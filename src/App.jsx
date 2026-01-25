import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
