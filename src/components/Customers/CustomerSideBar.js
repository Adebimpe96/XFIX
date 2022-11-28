import logo from "../Assets/image/x.png";
import "../Layouts/sidebar.css";
import { NavLink } from "react-router-dom";
import service from "../../services/services";

function CustomerSidebar() {
  const routes = [
    {
      id: 1,
      icon: "fa-solid fa-border-all",
      text: "Dashboard",
      url: "/custdashboard",
    },
    {
      id: 2,
      icon: "fa-solid fa-clock-rotate-left",
      text: "History",
      url: "/custhistory",
    },

    {
      id: 3,
      icon: "fa-solid fa-users-gear",
      text: "Support",
      url: "/custsupport",
    },
  ];

  return (
    <div className="w-1/4 h-screen sidemain">
      <div className="image">
        <img src={logo} alt="logo" className="w-20 h-12 object-cover" />
      </div>
      <div className="sidebar-content">
        <ul>
          {routes.map((route) => (
            <NavLink
              key={route.id}
              className=" text-blue-900 w-full h-40  font-bold text-2xl"
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
          <i className="fa-solid fa-power-off text-red-700"></i>
          <NavLink
            className="ml-3 text-blue-900"
            to="/custlogin"
            onClick={() => service.removeToken()}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CustomerSidebar;
