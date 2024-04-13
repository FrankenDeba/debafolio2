import Skill from "../../Components/Skill";
import "./Skills.css";
import jsLogo from "../../assets/js.png";
import tsLogo from "../../assets/typescript.png";
import jestLgo from "../../assets/Jest.png";
import reactLogo from "../../assets/react.png";
import gitLogo from "../../assets/github.svg";
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import reduxLogo from "../../assets/redux.svg";

type skilType = {
  logo: string;
  level: number;
};

const skills = [
  {
    logo: reactLogo,
    level: 9,
  },
  {
    logo: htmlLogo,
    level: 9,
  },
  {
    logo: jsLogo,
    level: 9,
  },
  {
    logo: cssLogo,
    level: 9,
  },
  {
    logo: tsLogo,
    level: 7,
  },
  {
    logo: jestLgo,
    level: 7,
  },

  {
    logo: gitLogo,
    level: 8,
  },
  {
    logo: reduxLogo,
    level: 8,
  },
];

function SkillsContainer() {
  return (
    <div className="skills_cont">
      {skills.map((skill: skilType) => (
        <Skill logo={skill.logo} level={skill.level} />
      ))}
    </div>
  );
}

export default SkillsContainer;
