import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram, FaTiktok } from "react-icons/fa";
// import xfix from "../Assets/image/x7.png";

const CustomerSupport = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <h4 className="pb-3 text-lightBlue text-2xl font-bold">Support</h4>
      </div>
      <div className="container-lg flex md:flex-row justify-around">
        <div className="w-full md:w-1/5 pt-4">
          <h4 className=" text-red-600 font-bold text-2xl">Contact Info</h4>
          <div className="">
            <p className="text-lightBlue my-3">
              With our experience in the industry, we promise to give you
              uptimum and reliable support always.
            </p>
            <p className="text-lightBlue">
              1614, Oko-Awo Street Lagos, Nigeria.
            </p>
            <p className="font-bold  text-lightBlue">
              xfix@mailservice.com <br />
              +2348100112233
            </p>
          </div>
        </div>
        <div className="p-5 w-full md:w-2/5">
          <h4 className="text-darkBlue font-bold text-2xl">
            Send Us a Message
          </h4>
          <form className="">
            <label class="block my-2 text-xs">
              <span class="block text-xs font-medium text-slate-700">
                Full name
              </span>
              <input
                type="text"
                className="text-xs w-full rounded-none border-darkBlue"
              />
            </label>
            <label class="block my-2 text-xs">
              <span class="block text-xs font-medium text-slate-700">
                Email address
              </span>
              <input
                type="mail"
                className="text-xs w-full rounded-none border-darkBlue"
              />
            </label>
            <label class="block my-2 text-xs">
              <span class="block text-xs font-medium text-slate-700">
                Message
              </span>
              <textarea
                type="text"
                className="text-xs w-full rounded-none border border-darkBlue"
                rows={6}
              ></textarea>
            </label>
            <div className="flex float-left flex-row justify-start w-1/3">
              <button className="blue-btn text-sm">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="container-fluid flex flex-row flex-wrap justify-between
             text-darkBlue text-sm font-bold border-b border-gray-600 px-3"
      ></div>
      <div className="flex flex-row justify-center space-x-5 py-4">
        <FaInstagram color="#bc2a8d" fontSize="1.5em" />
        <BsFacebook color="#006AFF" fontSize="1.5em" />
        <BsTwitter color="#1DA1F2" fontSize="1.5em" />
        <FaTiktok fontSize="1.5em" />
      </div>
      <div className="flex flex-row justify-center text-darkBlue text-sm pb-5">
        <p>&copy;XFix, Inc. 2022. We love our customers!</p>
      </div>
    </div>
  );
};

export default CustomerSupport;
