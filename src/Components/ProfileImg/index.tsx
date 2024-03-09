import "./ProfileImg.css";
import Profile from "../../debaProfile.webp";

function ProfileImg() {
  return (
    <div className="profile_pic_cont">
      {/* <div className="border-1"></div> */}
      <div className="bord_cont1">
        <div className="bord_cont2">
          <img src={Profile} className="img_cont" />
        </div>
      </div>
      {/* <div className="border-2"></div> */}
      {/* </div>  */}
    </div>
  );
}

export default ProfileImg;
