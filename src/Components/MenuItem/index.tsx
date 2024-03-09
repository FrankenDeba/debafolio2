import "./MenuItem.css";

function MenuItem({ menuItem }: { menuItem: { title: string; link: string } }) {
  const { link, title } = menuItem;
  return (
    <div className="menu_item_cont">
      <a href={link}>
        <p>{title}</p>
      </a>
    </div>
  );
}

export default MenuItem;
