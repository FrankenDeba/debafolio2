import "./Experiences.css";
import Experience from "../../Components/Experience";

function Experiences() {
  const experiences = [
    {
      companyName: "Informatica Inc",
      year: "June 2022 - December 2023",
      desc: "I was responsible for contriibuting to their product information management system, a master data management solution!",
      technologies: [
        { text: "React.js", col: "#457b9d", bgCol: "rgb(69, 123, 157, 0.25)" },
        {
          text: "TypeScript",
          col: "#219ebc",
          bgCol: "rgb(33, 158, 188, 0.25)",
        },
        { text: "JavaScript", col: "", bgCol: "" },
        { text: "Redux", col: "", bgCol: "" },
        { text: "Jest unit test", col: "", bgCol: "" },
        { text: "E2E", col: "", bgCol: "" },
      ],
      role: "Software Engineer",
      points: ["Fixed 15+ bugs to stabilize sequential edit feature."],
      logo: "",
    },
    {
      companyName: "",
      year: "",
      desc: "",
      technologies: [""],
      role: "",
      points: [],
      logo: "",
    },
    {
      companyName: "",
      year: "",
      desc: "",
      technologies: [""],
      role: "",
      points: [],
      logo: "",
    },
    {
      companyName: "",
      year: "",
      desc: "",
      technologies: [""],
      role: "",
      points: [],
      logo: "",
    },
    {
      companyName: "",
      year: "",
      desc: "",
      technologies: [""],
      role: "",
      points: [],
      logo: "",
    },
  ];
  return (
    <div className="experiences_cont" id="experiences">
      {/* <div> */}
      {/* <div className="border_dot"></div>
        <div className="exp_cont_with_border"> */}
      {experiences.map((exp) => (
        <Experience exp={exp} />
      ))}
      {/* </div> */}y{/* </div> */}
    </div>
  );
}

export default Experiences;
