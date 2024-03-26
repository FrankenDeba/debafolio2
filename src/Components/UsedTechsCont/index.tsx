import "./UsedTechsCont.css";

function UsedTechsCont({ technologies }: { technologies: any }) {
  return (
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
  );
}

export default UsedTechsCont;
