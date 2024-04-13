import React from "react";
import ReactLogo from "../../logo.svg";
import "./Skill.css";

function Skill({
  level,
  logo,
}: {
  level: number;
  logo: string;
}): React.JSX.Element {
  return (
    <div className="skill_cont">
      <div className="skill_img">
        <img src={logo} />
      </div>
      <div className="skill_lvl_cont">
        <div
          className="skill_lvl"
          style={{
            width: `${level * 10}%`,
          }}
        >
          level: {level} / 10
        </div>
      </div>
    </div>
  );
}

export default Skill;
