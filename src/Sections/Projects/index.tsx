import ProjectCard from "../../Components/ProjectCard";
import "./Projects.css";

function Projects() {
  const projectData = [
    {
      desc: {
        head: "A weather app with charting",
        body: "✅ Created a realtime weather app using mapbox api, along with searching & autosuggestions feature. Also drew a chart of 24 hours temperatures trend! :)",
      },
      link: "#",
      code: "#",
      bgCol: "#2a9d8f",
      projImg: "",
    },
    {
      desc: {
        head: "Password strength checker",
        body: `✅ Check your password strength score with my custom algorithm, and a beautiful visualization :)
        Used technologies: React.js, chart.js
        `,
      },
      link: "#",
      code: "#",
      bgCol: "#f28482",
      projImg: "",
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
