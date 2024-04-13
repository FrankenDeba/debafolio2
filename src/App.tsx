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
import Skill from "./Components/Skill";
import SkillsContainer from "./Sections/Skills";

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
      {/* <SkillCloud /> */}
      {/* <Skill level={9} /> */}
      <SkillsContainer />
      {/* <ProjectCard bgCol="salmon" desc="A weather app with charting" /> */}
    </div>
  );
}

export default App;
