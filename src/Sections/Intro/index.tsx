import IntroText from "../../Components/IntroText";
import ProfileImg from "../../Components/ProfileImg";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro_sec">
      <ProfileImg />
      <IntroText />
    </div>
  );
}

export default Intro;
