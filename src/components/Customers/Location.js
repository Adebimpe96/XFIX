import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Location =() => {


    return(
        <>
         <div className="text-white darkBlue py-3">
        <div className="container flex flex-row text-white">
        <h4>New Order</h4>
        </div>
        </div>
        <div className="container flex flex-row text- py-3">
        <h5>Please enter your preferred location</h5>
        </div>
        <form className="container ">
          <label class="block my-3 text-xs">
            <span class="block text-xs font-medium text-slate-700">
              Location
            </span>
            <input
              type="text"
              className="text-xs w-full"
              placeholder="Oshodi"
            />
          </label>
          <label class="block my-2 text-xs">
            <span class="block text-xs font-medium text-slate-700">
              Artisans in this location
            </span>
            <div class="dropdown">
  <div id="dropdownMenuButton2" 
    className="container my-5 rounded-md flex flex-row shadow-md drop-shadow-lg font-semibold justify-between "
    data-bs-toggle="dropdown" aria-expanded="false">      
    <div className="text-darkBlue text-start"><h5 className="mb-2 text-md ml-3">Artisans</h5></div>
   <MdOutlineKeyboardArrowDown color="darkBlue" fontSize='1.8em' />
 
  </div>
  <ul class="container dropdown-menu backdrop-blur-xl bg-white/30 max-h-48 overflow-auto" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item " href="#">
        <div className="container bg-slate-100 rounded-md">
           <div className="flex flex-row justify-between">
           <h4>#899499</h4>
           <p className="text-darkBlue font-medium">#10000</p>
           </div>
            <p>This is a text</p>
            <p>This is a text</p>
        </div>
        </a></li>
        <li><a class="dropdown-item" href="#">
        <div className="container bg-slate-100 rounded-md">
            <div className="flex flex-row justify-between">
           <h4>#899499</h4>
           <p className="text-darkBlue font-medium">#10000</p>
           </div>
            <p>This is a text</p>
             <p>This is a text</p>
        </div>
        </a></li>
  </ul>
</div>
          </label>
         <div className="flex flex-row space-x-2">
         <Link to='/neworder' className="flex flex-row text-decoration-none w-1/3">
            <button className="blue-btn text-sm">
              Back
            </button>
          </Link>
          <Link to='/orderform' className="flex flex-row text-decoration-none w-1/3">
            <button className="blue-btn text-sm">
              Next
            </button>
          </Link>
         </div>
        </form>
        </>
    )
}

export default Location;