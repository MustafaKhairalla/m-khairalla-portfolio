import React from 'react';
import './App.css';
import Main from "./pages/main";
import About from "./components/aboutMe/about";
import Skills from "./components/skills/skill"
import Projects from "./components/projects/projects"

import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Skills />
      <Projects />
     
      <Footer />
    </div>
  );
}

export default App;
