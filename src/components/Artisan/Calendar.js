import today from '../Assets/icon/today.png';
import next from '../Assets/icon/next.png';
import past from '../Assets/icon/past1.png';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import icon from '../Assets/icon/cal.png';
const Calendar = () => {

    return(
        <div className='col-span-3 relative backdrop-blur-sm bg-white/30 rounded-md'>
        <div className="flex flex-row font-semibold justify-between">
            <div className=" text-white col text-start"><h4 className="flex flex-row mb-2 text-2xl ml-3">
                <MdOutlineArrowBackIos color='#899499' className='my-auto mx-3'/>
                2022 Nov
                <MdOutlineArrowForwardIos color='#899499' className='my-auto mx-3'/>
            </h4></div>
            <div className="inline-flex text-white col text-end my-auto px-3">
                <h4 className="mb-2 text-sm my-auto mx-3 font-light">
                This Month's Appointment </h4>
                <img src={icon} alt='' className='my-auto' />
                </div>
        </div>
        <div className='grid grid-cols-7 gap-1 text-darkBlue font-light text-center'>
            <div className='text-darkBlue'>Sunday</div>
            <div className='text-darkBlue'>Monday</div>
            <div className='text-darkBlue'>Tuesday</div>
            <div className='text-darkBlue'>Wednesday</div>
            <div className='text-darkBlue'>Thursday</div>
            <div className='text-darkBlue'>Friday</div>
            <div className='text-darkBlue'>Saturday</div>
            </div>
        <div className='grid grid-cols-7 gap-1 text-darkBlue font-semibold text-start p-2'>
            <div className='bg-white rounded-md cal-item mb-1'>1</div>
            <div className='bg-white rounded-md cal-item mb-1'>2</div>
            <div className='bg-white rounded-md cal-item mb-1'>3</div>
            <div className='bg-white rounded-md cal-item mb-1'>4</div>

            <div className='bg-white rounded-md cal-item mb-1 px-2'>
                5
                <div className='bg-gray-500 rounded-sm flex flex-row justify-between p-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>The Johnson's House</p>
                </div>
            </div>

            <div className='bg-white rounded-md cal-item mb-1'>6</div>
            <div className='bg-white rounded-md cal-item mb-1'>7</div>
            <div className='bg-white rounded-md cal-item mb-1'>8</div>
            <div className='bg-white rounded-md cal-item mb-1'>9</div>
            <div className='bg-white rounded-md cal-item mb-1'>10</div>
            <div className='bg-white rounded-md cal-item mb-1 px-2'>11
            <div className='bg-gradient-to-b from-solidRed to-solidBlue rounded-sm flex flex-row justify-between p-0.5 my-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>Collins</p>
                </div>
                <div className='bg-gradient-to-b from-solidRed to-solidBlue rounded-sm flex flex-row justify-between p-0.5 my-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>Dami</p>
                </div>
                <div className='bg-gradient-to-b from-solidRed to-solidBlue rounded-sm flex flex-row justify-between p-0.5 my-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>Bridget</p>
                </div>
            </div>
            <div className='bg-white rounded-md cal-item mb-1'>12</div>
            <div className='bg-white rounded-md cal-item mb-1'>13</div>
            <div className='bg-white rounded-md cal-item mb-1'>14</div>
            <div className='bg-white rounded-md cal-item mb-1'>15</div>
            <div className='bg-white rounded-md cal-item mb-1'>16</div>
            <div className='bg-white rounded-md cal-item mb-1 px-2'>17
            <div className='bg-solidBlue rounded-sm flex flex-row justify-between p-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>The Johnson's House</p>
                </div>
            </div>
            <div className='bg-white rounded-md cal-item mb-1'>18</div>
            <div className='bg-white rounded-md cal-item mb-1'>19</div>
            <div className='bg-white rounded-md cal-item mb-1'>10</div>
            <div className='bg-white rounded-md cal-item mb-1 px-2'>21
            <div className='bg-solidBlue rounded-sm flex flex-row justify-between p-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>The Johnson's House</p>
                </div>
            </div>
            <div className='bg-white rounded-md cal-item mb-1'>22</div>
            <div className='bg-white rounded-md cal-item mb-1'>23</div>
            <div className='bg-white rounded-md cal-item mb-1'>24</div>
            <div className='bg-white rounded-md cal-item mb-1 px-2'>25
            <div className='bg-solidBlue rounded-sm flex flex-row justify-between p-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>The Johnson's House</p>
                </div>
            </div>
            <div className='bg-white rounded-md cal-item mb-1'>26</div>
            <div className='bg-white rounded-md cal-item mb-1'>27</div>
            <div className='bg-white rounded-md cal-item mb-1 px-2'>28
                  <div className='bg-solidBlue rounded-sm flex flex-row justify-between p-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>The Johnson's House</p>
                </div>
                  <div className='bg-solidBlue rounded-sm flex flex-row justify-between p-0.5 my-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>The Johnson's House</p>
                </div>
            </div>
            <div className='bg-white rounded-md cal-item mb-1'>29</div>
            <div className='bg-white rounded-md cal-item mb-1'>30</div>
            <div className='bg-white rounded-md cal-item mb-1 px-2'>31
                  <div className='bg-solidBlue rounded-sm flex flex-row justify-between p-0.5'>
                    <p className='text-[8px] text-white font-thin'>1:00pm</p>
                    <p className='text-[8px] text-white font-thin'>The Johnson's House</p>
                </div>
                 
            </div>
            <div className='bg-white rounded-md cal-item mb-1 text-gray-400'>1</div>
            <div className='bg-white rounded-md cal-item mb-1 text-gray-400'>2</div>
            <div className='bg-white rounded-md cal-item mb-1 text-gray-400'>3</div>
            <div className='bg-white rounded-md cal-item mb-1 text-gray-400'>4</div>
        </div>
      
        <div className="flex flex-row font-semibold justify-between m-3 space-x-5">
            <div className="bg-lightGray col text-start rounded-md p-2 w-full">
                <div className='flex flex-row justify-start py-3'>
                <p className='font-normal'><span className='font-semibold mx-3 py-5'>Today</span> Nov 22</p>
                </div>
                <div className="flex flex-row font-semibold  space-x-10">
                 <div className="red"><h4 className="mb-2 text-sm ml-3">11:00am</h4></div>
                 <div className="text-darkBlue"><h4 className="mb-2 text-sm text-start">Collins</h4></div>
                </div>
                <div className="flex flex-row font-semibold  space-x-10">
                 <div className="red"><h4 className="mb-2 text-sm ml-3">03:00pm</h4></div>
                 <div className="text-darkBlue"><h4 className="mb-2 text-sm text-start">Dami</h4></div>
                </div>
                <div className="flex flex-row font-semibold  space-x-10">
                 <div className="red"><h4 className="mb-2 text-sm ml-3">02:00pm</h4></div>
                 <div className="text-darkBlue"><h4 className="mb-2 text-sm text-start">Fred</h4></div>
                </div>
                </div>

            <div className="bg-lightGray col text-end rounded-md p-2 w-full">
                <div className='flex flex-row justify-start py-3'>
                    <p className='px-1'>Legend</p>
                </div>
                <div className="flex flex-row space-x-10">
                 <div className="red col"><img src={today} alt='' /></div>
                 <div className="text-darkBlue col"><h4 className="mb-2 text-sm mr-3">Today's Appointment</h4></div>
                </div>
                <div className="flex flex-row space-x-10">
                 <div className="red col"><img src={past} alt='' /></div>
                 <div className="text-darkBlue col"><h4 className="mb-2 text-sm mr-3">Past Appointment</h4></div>
                </div>
                <div className="flex flex-row space-x-10">
                 <div className="red col"><img src={next} alt='' /></div>
                 <div className="text-darkBlue col"><h4 className="mb-2 text-sm mr-3">Next Appointment</h4></div>
                </div>
                </div>
        </div>
            </div>
    )
}

export default Calendar;