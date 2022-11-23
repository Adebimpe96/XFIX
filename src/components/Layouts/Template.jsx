import React from "react";
import { Outlet } from "react-router-dom";
import "../Layouts/template.css";
import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
function Template() {
  document.title = `xfix-template`;
  return (
    <div className="template-container h-screen flex justify-centers">
      <div className="leftsidebar border-2 h-full ">
        <Sidebar />
      </div>
      <div className="rights h-full">
        <div className="outlets">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Template;
