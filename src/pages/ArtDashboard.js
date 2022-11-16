import background from "../components/Assets/image/mechanic.jpg";
import notification from "../components/Assets/image/notification.png";
import avatar from "../components/Assets/image/avatar.png";
import "../pages/art.css";
import Sidebar from "../components/Layouts/Sidebar";
function ArtDashboard() {
  return (
    <div className="h-full">
      <div className="sidebar ">
        <Sidebar />
      </div>
      <div className="flex justify-end items-start relative">
        <img
          src={background}
          alt=""
          className="object-contain h-full bg-black opacity-60"
        />
        <div className=" absolute flex  avatar">
          <img
            src={notification}
            alt="notification"
            className="object-contain cursor-pointer pr-7"
          />
          <img
            src={avatar}
            alt="avatar"
            className=" object-contain cursor-pointer"
          />
        </div>
      </div>

      <div className="contain">
        <p>hello</p>
      </div>
    </div>
  );
}

export default ArtDashboard;
