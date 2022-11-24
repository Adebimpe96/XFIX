import { RiDashboardLine, RiHistoryLine } from 'react-icons/ri';
import { MdOutlineEngineering } from 'react-icons/md';
import { AiOutlinePoweroff } from 'react-icons/ai';
import xfix from '../Assets/icon/XFix.png';
import support from '../Assets/icon/sup.png';
import faq from '../Assets/icon/qa.png';
import appointment from '../Assets/icon/appoint.png';

const ArtisanSideBar =() =>{

    return (
        <div className="sidebar bg-white max-h-full">
            <div className='px-10 py-5'>
                <img src={xfix} alt='' />
            </div>
            <div className='flex flex-col py-10 bg-white text-gray-400  space-y-10 space-x-10'>
            <div className="sidebar-item inline-flex space-x-5 pr-3 hover:text-darkBlue hover:border-r-4 rounded-sm border-darkBlue">
                <RiDashboardLine className='ml-10' fontSize='1.5em' />
                <p className='font-semibold '>Dashboard</p>
            </div>
            <div className="sidebar-item inline-flex space-x-5 pr-3 hover:text-darkBlue hover:border-r-4 rounded-sm border-darkBlue">
                <MdOutlineEngineering fontSize='1.5em' />
                <p className='font-semibold '>Jobs</p>
            </div>
            <div className="sidebar-item inline-flex space-x-5 pr-3 hover:text-darkBlue hover:border-r-4 rounded-sm border-darkBlue">
                <img src={appointment} alt='' />
                <p className='font-semibold '>Appointment</p>
            </div>
            <div className="sidebar-item inline-flex space-x-5 pr-3 hover:text-darkBlue hover:border-r-4 rounded-sm border-darkBlue">
                <RiHistoryLine fontSize='1.5em' />
                <p className='font-semibold'>History</p>
            </div>
            <div className="sidebar-item inline-flex space-x-5 pr-3 hover:text-darkBlue hover:border-r-4 rounded-sm border-darkBlue">
            <img src={support} alt='' />
            <p className='font-semibold'>Support</p>
            </div>
            <div className="sidebar-item inline-flex space-x-5 pr-3 hover:text-darkBlue hover:border-r-4 rounded-sm border-darkBlue">
            <img src={faq} alt='' />
            <p className='font-semibold'>FAQs</p>
            </div>
            </div>
            <div className='inline-flex red px-8 space-x-5 font-semibold'>
                <AiOutlinePoweroff fontSize='1.5em' className='my-auto'/>
                <p className=''>Logout</p>
            </div>
            </div>
    )
}

export default ArtisanSideBar;