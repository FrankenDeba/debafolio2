import ProjectCard from "../../Components/ProjectCard";
import "./Projects.css";
import PassStrength from "../../assets/passstrength.jpeg";
import BlueWave from "../../assets/blue-wave.jpeg";
import Burger from "../../assets/burger.jpeg";
import Weather from "../../assets/weather.jpeg";

function Projects() {
  const projectData = [
    {
      desc: {
        head: "A weather app with charting",
        body: "✅ Created a realtime weather app using mapbox api, along with searching & autosuggestions feature. Also drew a chart of 24 hours temperatures trend! :)",
      },
      link: "https://distracted-curran-a99e72.netlify.app/",
      code: "https://github.com/FrankenDeba/deba-weather",
      bgCol: "#2a9d8f",
      projImg: Weather,
    },
    {
      desc: {
        head: "Password strength checker",
        body: `✅ Check your password strength score with my custom algorithm, and a beautiful visualization :)
        Used technologies: React.js, chart.js
        `,
      },
      link: "https://check-my-password-strength.netlify.app/",
      code: "https://github.com/FrankenDeba/password-strength-checker",
      bgCol: "#f28482",
      projImg: PassStrength,
    },
    {
      desc: {
        head: "Blue wave events",
        body: `✅ Demo portfolio website for an event management company :)
        Used technologies: React.js
        `,
      },
      link: "https://blue-wave-event.firebaseapp.com/",
      code: "https://github.com/raunak1993/blue-wave-event",
      bgCol: "#e76f51",
      projImg: BlueWave,
    },
    {
      desc: {
        head: "Burger builder",
        body: `✅ Burger ordering app with visualization of a burger as you order,
        Used technologies: React.js, Redux
        `,
      },
      link: "https://burger-builder1996.firebaseapp.com/",
      code: "#",
      bgCol: "#219ebc",
      projImg: Burger,
    },
  ];

  return (
    <div>
      {projectData.map((proj, index) => {
        return <ProjectCard data={proj} index={index} />;
      })}
    </div>
  );
}

export default Projects;
