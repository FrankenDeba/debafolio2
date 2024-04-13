import "./MenuItem.css";

function MenuItem({
  menuItem,
}: {
  menuItem: { title: string; link: string; newLink: boolean };
}) {
  const { link, title, newLink } = menuItem;
  return (
    <div className="menu_item_cont">
      <a href={link} target={newLink ? "_blank" : ""} rel="noopener noreferrer">
        <p>{title}</p>
      </a>
    </div>
  );
}

export default MenuItem;
