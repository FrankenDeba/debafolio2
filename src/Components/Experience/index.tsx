import "./Experience.css";
import Logo from "../../infa.png";
import { useState } from "react";
import TexturePaper from "../TexturePaper";

function Experience({ exp }: { exp: any }) {
  const { companyName, year, desc, technologies, role, points, logo } = exp;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function setUnsetExpHovered() {
    setIsHovered((prev: boolean) => !prev);
  }

  return (
    <div onMouseEnter={setUnsetExpHovered} onMouseLeave={setUnsetExpHovered}>
      <div className={`border_dot ${isHovered ? "hovered_dot" : ""}`}></div>
      <div className="exp_cont_with_border">
        <div className="exp_cont">
          <div className="img_cont">
            <img src={Logo} alt="infa" />
          </div>
          <div className="desc_cont">
            <h1 className="company-name">{companyName}</h1>
            <h2>{role}</h2>
            <p
              //   style={{
              //     backgroundColor: "#219ebc",
              //     color: "#fff",
              //     boxShadow: "4px 4px #000",
              //     padding: "5px",
              //   }}
              className="year_cont"
            >
              {year}
            </p>
            <TexturePaper>
              <>
                <p className="desc_para">😎 {desc}</p>
                <ul>
                  {points?.map((p: string) => (
                    <li>{p}</li>
                  ))}
                </ul>
              </>
            </TexturePaper>
          </div>
          <div className="tech_cont">
            <p className="year_cont">Skills:</p>
            {technologies?.map((tech: any) => {
              return (
                <p
                  className="tech_cont_p"
                  style={{
                    color: tech.col,
                    border: `1px solid ${tech.col}`,
                    backgroundColor: tech.bgCol,
                    boxShadow: `0 0 5px ${tech.col}`,
                    //   opacity: "0.5",
                  }}
                >
                  {tech.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
