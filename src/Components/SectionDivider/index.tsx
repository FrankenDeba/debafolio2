import "./SectionDivider.css";
import Fire from "../../assets/fire.svg";
import NB from "../../assets/notebook.svg";

function SectionDivider({ title, col }: { title: string; col: string }) {
  return (
    <div className="divider">
      <div className="divider_left fire-filter">
        <img src={Fire} />
      </div>
      <p
        style={{
          backgroundColor: col,
        }}
      >
        {title}
      </p>
      <div className="divider_right notebook-filter">
        <img src={NB} />
      </div>
    </div>
  );
}

export default SectionDivider;
