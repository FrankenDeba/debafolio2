import "./MenuBtn.css";

function ThreeDash() {
  return <div className="three_dash"></div>;
}

function MenuBtn({
  handleMenuClick,
  isClicked,
}: {
  handleMenuClick: () => void;
  isClicked: boolean;
}) {
  return (
    <div className="menu_btn">
      <p onClick={handleMenuClick}>{isClicked ? "X" : <ThreeDash />}</p>
    </div>
  );
}

export default MenuBtn;
