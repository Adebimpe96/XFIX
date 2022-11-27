import { AiOutlinePlus } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

const CDashboard = () => {
  return (
    <>
      <div className="container text-lightBlue py-3">
        <Link to="/" className="container flex flex-row text-decoration-none">
          <h4 className="font-normal ">Home</h4>
        </Link>
        <div className="container flex flex-row justify-between">
          <div className="text-start">
            <h4 className="mb-2 text-2xl font-thin">Welcome, Username</h4>
          </div>
          <div className="text-end">
            <MdOutlinePersonOutline fontSize="1.7em" />
          </div>
        </div>
      </div>

      <div class="dropdown">
        <div
          id="dropdownMenuButton2"
          className="container my-5 py-5 rounded-md flex flex-row shadow-md drop-shadow-lg font-semibold justify-between items-center "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="text-darkBlue text-start">
            <h4 className="mb-2 text-2xl ml-3">Recent orders</h4>
          </div>
          <MdOutlineKeyboardArrowDown color="darkBlue" fontSize="1.8em" />
        </div>
        <ul
          class="container dropdown-menu backdrop-blur-xl bg-white/30 max-h-48 overflow-auto"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <Link className="dropdown-item " to="">
              <div className="container bg-slate-100 rounded-md">
                <div className="flex flex-row justify-between">
                  <h4>#899499</h4>
                  <p className="text-darkBlue font-medium">#10000</p>
                </div>
                <p>This is a text</p>
                <p>This is a text</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="">
              <div className="container bg-slate-100 rounded-md">
                <div className="flex flex-row justify-between">
                  <h4>#899499</h4>
                  <p className="text-darkBlue font-medium">#10000</p>
                </div>
                <p>This is a text</p>
                <p>This is a text</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="">
              <div className="container bg-slate-100 rounded-md">
                <div className="flex flex-row justify-between">
                  <h4>#899499</h4>
                  <p className="text-darkBlue font-medium">#10000</p>
                </div>
                <p>This is a text</p>
                <p>This is a text</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="container my-5 py-5 rounded-md flex flex-row shadow-md drop-shadow-lg font-semibold justify-between">
        <div className="text-darkBlue text-start">
          <h4 className="mb-2 text-2xl ml-3">New orders</h4>
        </div>
        <Link to="/neworder" className="text-darkBlue text-end">
          <AiOutlinePlus fontSize="1.8em" color="darkBlue" />
        </Link>
      </div>
    </>
  );
};

export default CDashboard;
