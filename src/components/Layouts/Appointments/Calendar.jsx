import today from "../../Assets/icon/today.png";
import next from "../../Assets/icon/next.png";
import past from "../../Assets/icon/past1.png";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Calendar = () => {
  return (
    <div className="col-span-3 relative backdrop-blur-sm bg-white/30 rounded-md h-1/3 w-5">
      <div className="flex flex-row font-semibold justify-between">
        <div className=" text-white col text-start">
          <h4 className="flex flex-row mb-2 text-2xl ml-3">
            <MdOutlineArrowBackIos color="#899499" className="my-auto mx-3" />
            2022 Nov
            <MdOutlineArrowForwardIos
              color="#899499"
              className="my-auto mx-3"
            />
          </h4>
        </div>
        <div className="text-white col text-end my-auto">
          <h4 className="mb-2 text-sm mr-3 my-auto font-light">
            This Month's Appointment
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-darkBlue font-light text-center">
        <div className="text-darkBlue">Sunday</div>
        <div className="text-darkBlue">Monday</div>
        <div className="text-darkBlue">Tuesday</div>
        <div className="text-darkBlue">Wednesday</div>
        <div className="text-darkBlue">Thursday</div>
        <div className="text-darkBlue">Friday</div>
        <div className="text-darkBlue">Saturday</div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-darkBlue font-semibold text-start p-2">
        <div className="bg-white rounded-md w-32 mb-1 py-5">1</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">2</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">3</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">4</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">5</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">6</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">7</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">8</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">9</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">10</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">11</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">12</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">13</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">14</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">15</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">16</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">17</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">18</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">19</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">10</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">21</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">22</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">23</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">24</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">25</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">26</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">27</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">28</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">29</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">30</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5">31</div>
        <div className="bg-white rounded-md w-32 mb-1 py-5 text-gray-400">
          1
        </div>
        <div className="bg-white rounded-md w-32 mb-1 py-5 text-gray-400">
          2
        </div>
        <div className="bg-white rounded-md w-32 mb-1 py-5 text-gray-400">
          3
        </div>
        <div className="bg-white rounded-md w-32 mb-1 py-5 text-gray-400">
          4
        </div>
      </div>

      <div className="flex flex-row font-semibold justify-between m-3 space-x-5">
        <div className="bg-lightGray col text-start rounded-md p-2 w-full">
          <div className="flex flex-row justify-start py-3">
            <p className="font-normal">
              <span className="font-semibold mx-3 py-5">Today</span> Nov 22
            </p>
          </div>
          <div className="flex flex-row font-semibold  space-x-10">
            <div className="red">
              <h4 className="mb-2 text-sm ml-3">11:00am</h4>
            </div>
            <div className="text-darkBlue">
              <h4 className="mb-2 text-sm text-start">Collins</h4>
            </div>
          </div>
          <div className="flex flex-row font-semibold  space-x-10">
            <div className="red">
              <h4 className="mb-2 text-sm ml-3">03:00pm</h4>
            </div>
            <div className="text-darkBlue">
              <h4 className="mb-2 text-sm text-start">Dami</h4>
            </div>
          </div>
          <div className="flex flex-row font-semibold  space-x-10">
            <div className="red">
              <h4 className="mb-2 text-sm ml-3">02:00pm</h4>
            </div>
            <div className="text-darkBlue">
              <h4 className="mb-2 text-sm text-start">Fred</h4>
            </div>
          </div>
        </div>

        <div className="bg-lightGray col text-end rounded-md p-2 w-full">
          <div className="flex flex-row justify-start py-3">
            <p className="px-1">Legend</p>
          </div>
          <div className="flex flex-row space-x-10">
            <div className="red col">
              <img src={today} alt="" />
            </div>
            <div className="text-darkBlue col">
              <h4 className="mb-2 text-sm mr-3">Today's Appointment</h4>
            </div>
          </div>
          <div className="flex flex-row space-x-10">
            <div className="red col">
              <img src={past} alt="" />
            </div>
            <div className="text-darkBlue col">
              <h4 className="mb-2 text-sm mr-3">Past Appointment</h4>
            </div>
          </div>
          <div className="flex flex-row space-x-10">
            <div className="red col">
              <img src={next} alt="" />
            </div>
            <div className="text-darkBlue col">
              <h4 className="mb-2 text-sm mr-3">Next Appointment</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
