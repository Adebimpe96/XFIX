import { AiOutlinePlus } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

const CustomerDashBoard = () => {
  return (
    <>
      <div className="text-lightBlue py-3">
        {/* <Link to="/" className="container flex flex-row text-decoration-none">
          <h4 className="font-normal ">Home</h4>
        </Link> */}
        <div className="container flex flex-row justify-between">
          <div className="text-start">
            <h4 className="mb-2 text-2xl font-thin">Welcome, Username</h4>
          </div>
          <div className="text-end">
            <MdOutlinePersonOutline fontSize="1.7em" />
          </div>
        </div>
      </div>
      <div className="flex flex-row border-b-2 border-b-black font-semibold justify-between">
        <div className="text-darkBlue col text-start">
          <h4 className="mb-2 text-2xl ml-3">Recent orders</h4>
        </div>
        <div className="text-darkBlue col text-end">
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
      <div className="flex flex-row border-b-2 border-b-black font-semibold justify-between">
        <div className="text-darkBlue col text-start">
          <h4 className="mb-2 text-2xl ml-3">New orders</h4>
        </div>
        <div className="text-darkBlue col text-end">
          <AiOutlinePlus />
        </div>
      </div>
    </>
  );
};

export default CustomerDashBoard;
