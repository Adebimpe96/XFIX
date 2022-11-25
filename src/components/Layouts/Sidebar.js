import logo from "../Assets/image/x.png";
import "../Layouts/sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("authenticated");
    navigate("/");
  };
  const routes = [
    {
      id: 1,
      icon: "fa-solid fa-border-all",
      text: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 2,
      icon: "fa-solid fa-screwdriver-wrench",
      text: "Jobs",
      url: "/jobs",
    },
    {
      id: 3,
      icon: "fa-solid fa-calendar-days",
      text: "Appointment",
      url: "/appointment",
    },
    {
      id: 4,
      icon: "fa-solid fa-clock-rotate-left",
      text: "History",
      url: "/history",
    },
    {
      id: 5,
      icon: "fa-solid fa-users-gear",
      text: "Support",
      url: "/support",
    },
  ];

  return (
    <div className="w-1/4 h-screen sidemain">
      <div className="image">
        <img src={logo} alt="logo" className="w-20 h-10 object-cover" />
      </div>
      <div className="sidebar-content">
        <ul>
          {/* Artisan links      */}
          {routes.map((route) => (
            <NavLink
              key={route.id}
              className="text-blue-900 w-full h-40  "
              to={route.url}
            >
              <div className="flex gap-2 items-center my-10 text-xl">
                <i className={`${route.icon}`}></i>
                <li>{route.text}</li>
              </div>
            </NavLink>
          ))}
        </ul>

        <div className="logout flex justify-center items-center text-xl">
          <i class="fa-solid fa-power-off text-red-700"></i>
          <NavLink
            className="ml-3 text-blue-900"
            to="/logout"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
