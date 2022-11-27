import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ArtisanCard from "./ArtisanCard";

const Location = () => {

  const artisans =[
    {
      rating: '4.5/5',
      name: 'John Bryan',
      category: 'Car Repair',
      location: 'Oshodi-Apapa',
    }, 
    {
      rating: '5/5',
      name: 'Elvis Jack',
      category: 'Electrical',
      location: 'Akoka,Yaba',
    },
    {
      rating: '4.7/5',
      name: 'Amber Dan',
      category: 'Plumbing',
      location: 'Ikeja, Lagos',
    },
    {
      rating: '4.8/5',
      name: 'Eban Orji',
      category: 'Delivery',
      location: 'Anywhere in Lagos',
    },
  ]
  return (
    <>
      <div className="text-white bg-darkBlue py-3">
        <div className="flex flex-row text-white mx-5">
          <h4 className="font-medium text-lg">New Order</h4>
        </div>
      </div>
      <div className="container flex flex-row text- py-3">
        <h5>Please enter your preferred location</h5>
      </div>
      <form className="container ">
        <label class="block my-3 text-xs">
          <span class="block text-xs font-medium text-slate-700">Location</span>
          <input type="text" className="text-xs w-full" placeholder="Oshodi" />
        </label>
        <label class="block my-2 text-xs">
          <span class="block text-xs font-medium text-slate-700">
            Artisans in this location
          </span>
          <div class="dropdown">
            <div
              id="dropdownMenuButton2"
              className="container my-5 rounded-md flex flex-row shadow-md drop-shadow-lg font-semibold justify-between "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="text-darkBlue text-start">
                <h5 className="mb-2 text-md ml-3">Artisans</h5>
              </div>
              <MdOutlineKeyboardArrowDown color="darkBlue" fontSize="1.8em" />
            </div>
            <ul
              class="container dropdown-menu max-h-48 overflow-auto"
              aria-labelledby="dropdownMenuButton2"
            >
             {
              artisans.map((artisan) => {
                return (
                  <ArtisanCard
                  rating={artisan.rating}
                  name={artisan.name}
                  category={artisan.category}
                  location={artisan.location}
                  />
                )
              })
             }
            </ul>
          </div>
        </label>
        <div className="flex flex-row space-x-2">
          <Link
            to="/neworder"
            className="flex flex-row text-decoration-none w-1/3"
          >
            <button className="bg-darkBlue text-sm">Back</button>
          </Link>
          <Link
            to="/orderform"
            className="flex flex-row text-decoration-none w-1/3"
          >
            <button className="bg-darkBlue text-sm">Next</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Location;
