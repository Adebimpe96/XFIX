import React from "react";
import { Outlet } from "react-router-dom";
import "../Layouts/template.css";
import Sidebar from "./Sidebar";
function Template() {
  document.title = `xfix-template`;
  return (
    <div className="template-container h-screen flex justify-center">
      <div className="leftsidebar border-2 w-1/5 h-full ">
        <Sidebar />
      </div>
      <div className={"rights w-4/5 h-full"}>
        <div className="outlets">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Template;
