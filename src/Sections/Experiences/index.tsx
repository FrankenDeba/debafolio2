import "./Experiences.css";
import Experience from "../../Components/Experience";
import InfaLogo from "../../assets/infa.png";
import cpLogo from "../../assets/classplus.avif";
import learngramLogo from "../../assets/learngram.png";
import spLogo from "../../assets/superprocure.png";
import alien from "../../assets/alien.png";

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
        {
          text: "JavaScript",
          col: "rgb(250, 128, 114)",
          bgCol: "rgb(250, 128, 114, 0.25)",
        },
        {
          text: "Redux",
          col: "rgb(187, 62, 3)",
          bgCol: "rgb(187, 62, 3, 0.25)",
        },
        { text: "Jest unit test", col: "", bgCol: "" },
        { text: "E2E", col: "", bgCol: "" },
      ],
      role: "Software Engineer",
      points: [
        "Fixed 15+ bugs to stabilize sequential edit feature.",
        "Contributed to category filtering system for making it international presentation ready.",
        "Added 60+ E2E & unit tests to increase test coverage by 20%.",
      ],
      logo: InfaLogo,
    },
    {
      companyName: "Classplus",
      year: "June 2021 - June 2022",
      desc: "I was contributing mainly to their in-house CRM & other growth related products.",
      technologies: [],
      role: "Software Engineer (UI)",
      points: [],
      logo: cpLogo,
    },
    {
      companyName: "Learngram",
      year: "February 2021 - May 2021",
      desc: "",
      technologies: [""],
      role: "",
      points: [],
      logo: learngramLogo,
    },
    {
      companyName: "SuperProcure",
      year: "August 2020 - February 2021",
      desc: "",
      technologies: [""],
      role: "",
      points: [],
      logo: spLogo,
    },
    {
      companyName: "Alien Brains",
      year: "January 2020 - July 2020",
      desc: "",
      technologies: [""],
      role: "Web developer trainee (Internship)",
      points: [],
      logo: alien,
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
