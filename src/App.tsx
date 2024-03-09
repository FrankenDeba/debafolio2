import React from "react";
import logo from "./logo.svg";
import star from "./star.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Intro from "./Sections/Intro";
import Experiences from "./Sections/Experiences";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Experiences />
    </div>
  );
}

export default App;
