import { useState } from "react";
import MenuItem from "../MenuItem";
import "./Menu.css";
import MenuBtn from "../MenuBtn";

function Menu() {
  const [isClicked, setIsClicked] = useState(false);

  const menus = [
    { title: "Resume", link: "#", newLink: true },
    { title: "Experiences", link: "#experiences", newLink: false },
    { title: "Linkedin", link: "#", newLink: true },
    { title: "Github", link: "#", newLink: true },
  ];

  function handleMenuClick() {
    setIsClicked((cl) => !cl);
  }

  return (
    <div className="menu_cont">
      <MenuBtn handleMenuClick={handleMenuClick} isClicked={isClicked} />
      {isClicked && (
        <div className="menu_items_holder">
          {menus.map((menuItem) => (
            <MenuItem menuItem={menuItem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
