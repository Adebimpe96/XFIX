import React from "react";
import { Outlet } from "react-router-dom";
import "../Layouts/template.css";
import CustomerSideBar from "./CustomerSideBar";

// import { Outlet } from "react-router-dom";
function CustomerTemplate() {
  document.title = `xfix-template`;
  return (
    <div className="template-container h-screen flex justify-centers">
      <div className="leftsidebar border-2 h-full ">
        <CustomerSideBar />
      </div>
      <div className="rights h-full">
        <div className="outlets">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CustomerTemplate;
