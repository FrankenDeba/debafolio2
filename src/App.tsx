import React from "react";
import logo from "./logo.svg";
import star from "./star.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Intro from "./Sections/Intro";
import Experiences from "./Sections/Experiences";
import SectionDivider from "./Components/SectionDivider";
import ProjectCard from "./Components/ProjectCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <SectionDivider title="Experiences" col="salmon" />
      <Experiences />
      <SectionDivider title="Projects" col="#2a9d8f" />
      <ProjectCard bgCol="salmon" />
    </div>
  );
}

export default App;
