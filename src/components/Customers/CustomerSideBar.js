import xfix from '../Assets/icon/XFix.png';
import { Link } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineHistory, MdOutlineSupportAgent, MdOutlineLogout } from 'react-icons/md';


const CustomerSideBar =() => {
 
  

    return (
        <>
      <div className='container flex flex-col mx-auto'>
          <div className='py-5'><img src={xfix} alt='' className="py-3" /></div>
        <div className='space-y-10'>
            <Link to='/custdashboard' className="flex flex-row space-x-5 text-decoration-none text-gray-500 hover:text-darkBlue hover:border-r-4 border-darkBlue">
                <MdOutlineDashboard fontSize='1.6em' className="" />
                <h3 className="text-2xl my-auto">Dashboard</h3>
            </Link>
            <Link className="flex flex-row space-x-5 text-decoration-none text-gray-500 hover:text-darkBlue hover:border-r-4 border-darkBlue">
                <MdOutlineHistory fontSize='1.6em' />
                <h3 className="text-2xl my-auto">History</h3>
            </Link>
            <Link to='/support' className="flex flex-row space-x-5 text-decoration-none text-gray-500 hover:text-darkBlue hover:border-r-4 border-darkBlue">
                <MdOutlineSupportAgent fontSize='1.6em' />
                <h3 className="text-2xl my-auto">Support</h3>
            </Link>
            <Link className="flex flex-row red space-x-5 py-5 text-decoration-none">
                <MdOutlineLogout fontSize='1.6em' />
                <h3 className="text-2xl my-auto">Logout</h3>
            </Link>
        </div>
      </div>
            </>
    )
}

export default CustomerSideBar; 