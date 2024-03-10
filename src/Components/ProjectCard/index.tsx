import Prof from "../../assets/debaProfile.webp";
import "./ProjectCard.css";

function ProjectCard({ bgCol }: { bgCol: string }) {
  return (
    <div
      className="project__card"
      style={{
        backgroundColor: bgCol,
        boxShadow: `0, 0, 10px ${bgCol}`,
      }}
    >
      <div
        className="bgProj"
        style={{
          border: "2px solid steelblue",
          backgroundImage: "debaProfile.webp",
          //   backgroundImage: `url("../../assets/debaProfile.webp")`,
        }}
      >
        <img src={Prof} />
      </div>
    </div>
  );
}

export default ProjectCard;
