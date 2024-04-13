import "./Experience.css";
import { useState } from "react";
import TexturePaper from "../TexturePaper";
import UsedTechsCont from "../UsedTechsCont";

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
            <img src={logo} alt="infa" />
          </div>
          <div className="desc_cont">
            <h1 className="company-name">{companyName}</h1>
            <h2>{role}</h2>
            <p className="year_cont">{year}</p>
            <TexturePaper>
              <>
                <p className="desc_para">🚀 {desc}</p>
                {/* <ul>
                  {points?.map((p: string) => (
                    <li>{p}</li>
                  ))}
                </ul> */}
              </>
            </TexturePaper>
          </div>
          <UsedTechsCont technologies={technologies} />
        </div>
      </div>
    </div>
  );
}

export default Experience;
