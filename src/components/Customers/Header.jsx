import "../Customers/header.css";
import { Link } from "react-router-dom";
import logo from "../Assets/image/x.png";
const Header = () => {
  return (
    <>
      <div className="customer_header w-full h-10 px-5 flex justify-between shadow-transparent">
        <img src={logo} alt="logo" className="w-40 h-30 object-cover" />
        <div className="link w-1/3 flex">
          <ul className="w-full flex justify-between items-center text-white font-bold">
            <Link to="/booking" className="">
              Home
            </Link>
            <Link to="/booking" className="">
              Appointment
            </Link>
            <Link to="/customerhistory">History </Link>
            <Link to="/customersupport">Support </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
