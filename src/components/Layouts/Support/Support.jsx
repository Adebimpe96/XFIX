import React from "react";
import "../Support/support.css";

function Support() {
  return (
    <div className="">
      <div className="support flex justify-around items-center">
        <div className="support-content w-1/2  border-2">
          <h3 className="">Support</h3>
          <h4>Ask the administrator</h4>
          <p>
            You can chat with us here, we are available 24/7.
            <br />
            You can also reach us via mail at{" "}
            <span className="text-blue-700 font-bold">xfix@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Support;
