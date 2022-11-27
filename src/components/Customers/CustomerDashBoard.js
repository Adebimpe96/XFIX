import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const CustomerDashBoard =() =>{


    return(
        <>
            <div></div>
            <div className="flex flex-row border-b-2 border-b-black font-semibold justify-between">
                <div className="text-darkBlue col text-start"><h4 className="mb-2 text-2xl ml-3">Recent orders</h4></div>
                <div className="text-darkBlue col text-end"><MdOutlineKeyboardArrowDown /></div>
            </div>
            <div className="flex flex-row border-b-2 border-b-black font-semibold justify-between">
                <div className="text-darkBlue col text-start"><h4 className="mb-2 text-2xl ml-3">New orders</h4></div>
                <div className="text-darkBlue col text-end"><AiOutlinePlus /></div>
            </div>
        </>
    )
}

export default CustomerDashBoard;