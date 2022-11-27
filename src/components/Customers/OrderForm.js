import { Link } from "react-router-dom";

const OrderForm =()=> {

    return(
        <>
            <div className="text-white darkBlue py-3">
        <div className="container flex flex-row text-white">
        <h4>New Order</h4>
        </div>
        </div>
        <div className="container justify-center rounded-sm ">
        <form className="container">
          <h5 className="text-darkBlue font-bold py-3">
            Please fill in your details correctly
          </h5>
          <label class="block my-2 text-sm">
            <span class="block text-sm font-medium text-slate-700">
              Full name
            </span>
            <input
              type="text"
              className="text-sm "
              placeholder="Richard Fred"
            />
          </label>
          <label class="block my-2 text-sm">
            <span class="block text-sm font-medium text-slate-700">
              Home address
            </span>
            <input
              type="text"
              className="text-sm "
              placeholder="Block 1, Ikorodu"
            />
          </label>
          <label class="block my-2 text-sm">
            <span class="block text-sm font-medium text-slate-700">
              Phone number
            </span>
            <input
              type="tel"
              className="text-sm "
              placeholder="+234800000000"
            />
          </label>
          <label class="block my-2 text-sm">
            <span class="block text-sm font-medium text-slate-700">Description</span>
            <span class="block text-sm font-medium text-slate-400 py-2">Maximum 200 characters</span>
          <textarea rows={6}  className='outline-none border w-4/5 rounded-md p-1' placeholder="Enter text here...">
          </textarea>
          </label>

          <label className="inline-flex space-x-2">
          <input
              type="checkbox"
              className="text-sm "
            />
            <span class="text-sm font-medium text-slate-700 my-auto">Urgent</span>
          </label>
          
          <label class="block my-2 text-sm">
            <span class="block text-sm font-medium text-slate-700">
              Book for a later date
            </span>
            <input
              type="date"
              className="text-sm "
            />
          </label>
          <div className="flex flex-row space-x-2 py-3">
         <Link to='/location' className="flex flex-row text-decoration-none w-1/3">
            <button className="blue-btn text-sm">
              Back
            </button>
          </Link>
          <Link to='/orderdetails' className="flex flex-row text-decoration-none w-1/3">
            <button className="blue-btn text-sm">
              Next
            </button>
          </Link>
         </div>
        </form>
      </div>
        </>
    )
}

export default OrderForm;