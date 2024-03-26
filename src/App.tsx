import React from "react";
import logo from "./logo.svg";
import star from "./star.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Intro from "./Sections/Intro";
import Experiences from "./Sections/Experiences";
import SectionDivider from "./Components/SectionDivider";
import ProjectCard from "./Components/ProjectCard";
import Projects from "./Sections/Projects";
import SkillCloud from "./Components/SkillCloud";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <SectionDivider title="Experiences" col="salmon" />
      <Experiences />
      <SectionDivider title="Projects" col="#2a9d8f" />
      <Projects />
      <SectionDivider title="Skills" col="steelblue" />
      <SkillCloud />
      {/* <ProjectCard bgCol="salmon" desc="A weather app with charting" /> */}
    </div>
  );
}

export default App;
