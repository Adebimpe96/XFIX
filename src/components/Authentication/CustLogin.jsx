import { Link } from "react-router-dom";
import "../Authentication/side.css";
import Login from "./CustLoginpage";

const CustLogin = () => {
  return (
    <div>
      <div className="content">
        <div className="left">
          <div className="left-content">
            <h3 className="ml-6 font-bold">
              {" "}
              Your sure plug for home service professionals
              <span className="text-blue-700 font-bold">.</span>
              <span className="text-red-800 font-bold">.</span>
              <span className="text-yellow-500 font-bold">.</span>
            </h3>
            <div className="flex flex-col justify-between items-center"></div>
            <p className=" text-red-700">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustLogin;
