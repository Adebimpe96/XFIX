import { Link } from "react-router-dom";
import "../Authentication/side.css";
import Login from "./CustLoginpage";

const ArtLogin = () => {
  return (
    <div>
      <div className="content">
        <div className="left">
          <div className="left-content">
            <h3 className="ml-2 font-bold">
              {" "}
              Your sure plug for quick on-demand jobs.
              <span className="text-blue-700 font-bold">.</span>
              <span className="text-red-800 font-bold">.</span>
              <span className="text-yellow-500 font-bold">.</span>
            </h3>
            <div className="flex flex-col space-y-4 justify-between"></div>
            <p className="m-4 text-red-600">
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

export default ArtLogin;
