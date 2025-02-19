import "./App.css"
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#1e1e1e", minHeight: "100vh",
      color: "white", }}>
      <Header />

      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="education" className="section">
        <Education />
      </section>
      <section id="project" className="section">
        <Project />
      </section>
      <section id="skills" className="section">
        <Skills />
      </section>
      <section id="experience" className="section">
        <Experience />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
      
    </div>
  );
}

export default App;
