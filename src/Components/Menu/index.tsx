import { useState } from "react";
import MenuItem from "../MenuItem";
import "./Menu.css";
import MenuBtn from "../MenuBtn";

function Menu() {
  const [isClicked, setIsClicked] = useState(false);

  const menus = [
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1vp-3YLx5eQhq1dQOi8KNzpqtsvifjGOv/view?usp=drive_link",
      newLink: true,
    },
    { title: "Experiences", link: "#experiences", newLink: false },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/er-debashis-debnath/",
      newLink: true,
    },
    { title: "Github", link: "https://github.com/FrankenDeba", newLink: true },
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
