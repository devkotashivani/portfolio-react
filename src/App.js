import React from "react";
import projectImg from "./assets/img/project.png";
import user1Img from "./assets/img/user1.png";
import Header from "./components/Header";
import Hero from "./components/Hero";

import "./style.scss";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

      <input id="darkMode" type="checkbox" className="dark-mode-check" />
      <div className="wrapper">
      <Routes>
        <Route path="/" element = {<Hero />} /> 
        <Route path="/skills" element = {<Skills />} /> 
        <Route path="/projects" element = {<Projects/ >} /> 
        <Route path="/about" element = {<About />} /> 
        <Route path="/contact" element = {<Contact />} /> 
        <Route path="/hero" element = {<Hero />} /> 
      </Routes>
        {/* <!-- dark mode toggler --> */}
        <label htmlFor="darkMode"
        ><i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i
        ></label>

       
       {/* <Header />
       <Hero />
       <Skills /> 
       <Projects />
        <About />
       <Contact />
        <Footer /> */}
      </div>

    </div>
  );


}

export default App;
