import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/confirm");
  };
  return (
    <div className="md:container md:mx-auto book">
      <div className="row flex text-center justify-center my-3">
        <h4 className="font-bold text-white md:text-3xl ">Book Appointment</h4>
      </div>
      <div className="container justify-center m-auto form rounded-sm ">
        <form className="p-5 m-auto px-auto align-middle mt-3 c-form">
          <h5 className="text-darkBlue font-bold">
            Please fill in your details correctly
          </h5>
          <label class="block my-2 text-xs">
            <span class="block text-xs font-medium text-slate-700">
              Full name
            </span>
            <input
              type="text"
              className="text-xs w-full"
              placeholder="Richard Fred"
            />
          </label>
          <label class="block my-2 text-xs">
            <span class="block text-xs font-medium text-slate-700">
              Home address
            </span>
            <input
              type="text"
              className="text-xs w-full"
              placeholder="Block 1, Ikorodu"
            />
          </label>
          <label class="block my-2 text-xs">
            <span class="block text-xs font-medium text-slate-700">
              Whatsapp contact
            </span>
            <input
              type="tel"
              className="text-xs w-full"
              placeholder="+234800000000"
            />
          </label>
          <label class="block my-2 text-xs">
            <span class="block text-xs font-medium text-slate-700">
              Phone number
            </span>
            <input
              type="tel"
              className="text-xs w-full"
              placeholder="+234800000000"
            />
          </label>
          <label class="block my-2 text-xs">
            <span class="block text-xs font-medium text-slate-700">Issue</span>
            <input
              type="text"
              className="text-xs w-full"
              placeholder="Message"
            />
          </label>
          <div className="flex float-right flex-row justify-end w-1/3">
            <button className="blue-btn text-xs" onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
