import "./customer.css";
import { GoLocation } from "react-icons/go";
import { TiLocationArrow } from "react-icons/ti";
import Carousel from "./Carousel";
import Location from "./Location";
import Book from "./Book";
import Form from "./Form";
const Customers = () => {
  return (
    <div className="header flex text-center justify-center flex-col">
      <div className=" my-6">
        <h3 className="font-semibold text-center text-blue-800">
          Book Appointment
        </h3>
        <p className="mt-4">Discover and hire an electrician near you</p>
      </div>
      <label className="relative flex mx-auto w-80 md:w-64">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-1 flex items-center pl-2">
          <GoLocation />
        </span>
        <input
          className="ps-5 placeholder:italic
        placeholder:text-slate-400 block
            bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
            focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Ikorodu"
          type="text"
          name="search"
        />
        <span className="absolute inset-y-0 right-2 flex items-center pl-2">
          <TiLocationArrow />
        </span>
      </label>
      <Carousel />
      <Location />
      <Book />
      <Book />
      <Book />
      <Book />
      <Form />
    </div>
  );
};

export default Customers;
