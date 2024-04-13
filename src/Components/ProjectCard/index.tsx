import Prof from "../../assets/debaProfile.webp";
import UsedTechsCont from "../UsedTechsCont";
import "./ProjectCard.css";

type ProjDataType = {
  desc: {
    head: string;
    body: string;
  };
  link: string;
  code: string;
  bgCol: string;
  projImg: any;
};

function ProjectCard({ data, index }: { data: ProjDataType; index: number }) {
  const { bgCol, desc, link, code, projImg } = data;
  return (
    <div
      className={`project__card ${index % 2 === 0 ? "" : "rev"}`}
      style={{
        backgroundColor: bgCol,
        boxShadow: `0, 0, 10px ${bgCol}`,
        // flexDirection: "row-reverse",
      }}
    >
      {/* <div
        className="bgProj"
        style={
          {
            //   border: "2px solid steelblue",
            //   backgroundImage: "./debaProfile.webp",
            //   backgroundImage: `url("../../assets/debaProfile.webp")`,
          }
        }
      > */}
      <div className="proj_img">
        <img src={projImg} />
      </div>
      <div className="desc_and_links">
        <div className="proj_desc">
          <h2>{desc.head}</h2>
          {desc.body}
        </div>
        <div className="proj_btn_cont">
          <button>
            <a href={link} target="_blank" rel="noopener norefer">
              🌐 Live Link
            </a>
          </button>
          <button>
            <a href={code} target="_blank" rel="noopener norefer">
              👨‍💻 Code
            </a>
          </button>
        </div>
      </div>
      {/* <img className="proj_img_layer2" src={Prof} /> */}
      {/* </div> */}
    </div>
  );
}

export default ProjectCard;
