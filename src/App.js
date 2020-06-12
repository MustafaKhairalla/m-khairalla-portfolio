import React from 'react';
import './App.css';
import Main from "./pages/main";
import About from "./components/aboutMe/about";
import Skills from "./components/skills/skill"
import Projects from "./components/projects/projects"
//import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Skills />
      <Projects />
      //<Contact />
      <Footer />
    </div>
  );
}

export default App;
