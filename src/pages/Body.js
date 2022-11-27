import { Link } from "react-router-dom";
import LightSpeed from "react-awesome-reveal";
import background from "../components/Assets/image/pictures.jpg";
function Body() {
  return (
    <>
      <div className=" w-full h-full flex justify-around pt-10 px-8 shadow-sm items-center">
        <div className="w-1/2 ">
          <LightSpeed left>
            <div className="m-10">
              <p className="font-sky-500">ARTISAN'S MARKET PLACE</p>
              <h3 className="text-6xl text-blue-900 font-semibold">
                The sure place to get the{" "}
                <span className="text-red-500">quick fix</span> you need in your
                home.
              </h3>
              <div className="btn-link flex ">
                <Link className="button_pry2 " to="/signup">
                  Hire a professional
                </Link>
                <Link className="button_pry3" to="/artsignup">
                  Get a job
                </Link>
              </div>
            </div>
          </LightSpeed>
        </div>
        <div className=" w-1/2">
          <img
            src={background}
            alt="background"
            className="h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Body;
