import Menu from "../Menu";
// import MenuItem from "../MenuItem";
import star from "../../star.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav_cont">
      <div>
        <img src={star} className={"svg-filter2"} />
        <h1>Debashis</h1>
        <h1>Debnath</h1>
      </div>
      <Menu />
    </nav>
  );
}

export default NavBar;
