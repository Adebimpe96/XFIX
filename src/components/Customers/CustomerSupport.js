import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import insta from "../Assets/icon/insta.png";

function CustomerSupport() {
  return (
    <div>
      <div className="support- flex justify-between items-center">
        <h4 className="text-white text-2xl p-5 font-bold">Support</h4>
      </div>
      <div className="container-lg flex flex-col md:flex-row justify-around py-4">
        <div className="p-5 w-full md:w-1/5">
          <h4 className="red font-bold text-2xl">Contact Info</h4>
          <div className="">
            <p className="text-lightBlue my-3">
              With over 8 years experience in the industry, adipiscing elit.
              Tortor vel posuere
            </p>
            <p className="text-lightBlue">
              0012, Chiranci Street Kano, Nigeria electro@mailservice.com
              +2348100112233
            </p>
          </div>
        </div>
        <div className="p-5 w-full md:w-2/5">
          <h4 className="text-darkBlue font-bold text-2xl">
            Send Us a Message
          </h4>
          <form className="">
            <label className="block my-2 text-xs">
              <span className="block text-xs font-medium text-slate-700">
                Full name
              </span>
              <input
                type="text"
                className="text-xs w-full rounded-none border-darkBlue"
              />
            </label>
            <label className="block my-2 text-xs">
              <span className="block text-xs font-medium text-slate-700">
                Email address
              </span>
              <input
                type="mail"
                className="text-xs w-full rounded-none border-darkBlue"
              />
            </label>
            <label className="block my-2 text-xs">
              <span className="block text-xs font-medium text-slate-700">
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
      >
        <div className="inline-flex space-x-20 mb-2">
          <h5 className="">Mobile app</h5>
          <h5 className="">Community</h5>
        </div>
        <div className=" mb-2">{/* <img src={xfix} alt="" /> */}</div>
        <div className="inline-flex space-x-20 mb-2">
          <h5 className="">Help desk</h5>
          <h5 className="">Resources</h5>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-5 py-4">
        <img src={insta} alt="instagram" className="insta" />
        <BsFacebook color="#006AFF" fontSize="1.5em" />
        <BsTwitter color="#1DA1F2" fontSize="1.5em" />
        <FaTiktok fontSize="1.5em" />
      </div>
      <div className="flex flex-row justify-center text-darkBlue text-sm pb-5">
        <p>&copy;XFix, Inc. 2022. We love our customers!</p>
      </div>
    </div>
  );
}

export default CustomerSupport;
