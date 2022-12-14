import { MdEdit, MdElectricalServices } from "react-icons/md";
import { Link } from "react-router-dom";

const OrderDetails =() =>{

    return(
        <>
        <div className="text-white bg-darkBlue py-3 align-middle">
        <div className="flex flex-row mx-5 text-white">
          <h4 className="font-medium text-lg">Order Details</h4>
        </div>
      </div>
      <div className='mx-5 py-3'><h4 className='text-2xl font-medium text-darkBlue'>Confirm your order</h4></div>
      <div className="container rounded-md shadow-lg space-y-5 p-5">
        <div>
            <div className="flex flex-row justify-between">
                <h5 className="text-md font-medium">Category</h5>
                <Link to='/orderform' className="text-decoration-none">
                <h5 className="inline-flex my-auto text-xfixYellow font-medium">Edit <MdEdit className="mx-1"  /></h5>    
                </Link> 
            </div>
            <div className="flex flex-row space-x-5 p-2 border-b-2 border-gray-200">
                <div className="bg-gradient-to-b from-xfixYellow to-xfixYellow/60 p-4 rounded-md">
                    <MdElectricalServices color="white" fontSize='3em' /></div>
                <h5 className="my-auto font-medium text-darkBlue">Electrical</h5>
            </div>
        </div>
        <div className="border-b-2 border-slate-300">
        <div className="flex flex-row justify-between">
                <h5 className="text-md font-medium">Description</h5>
                <Link to='/orderform' className="text-decoration-none">
                <h5 className="inline-flex my-auto text-xfixYellow font-medium">Edit <MdEdit className="mx-1"  /></h5>    
                </Link> 
            </div>
            <div>
                <p className="text-sm py-1 pr-1">Gradients fade out to transparent by default, without requiring you to
                 add to-transparent explicitly. Tailwind intelligently calculates the right “transparent” value 
                 to use based on the starting color to avoid a bug in Safari 
                that causes fading to simply the transparent keyword to fade through gray, which just looks awful.</p>
            </div>
        </div>

        <div className="border-b-2 border-slate-300">
        <div className="flex flex-row justify-between">
                <h5 className="text-md font-medium">Address</h5>
                <Link to='/orderform' className="text-decoration-none">
                <h5 className="inline-flex my-auto text-xfixYellow font-medium">Edit <MdEdit className="mx-1"  /></h5>    
                </Link> 
            </div>
            <div>
                <p className="text-sm py-1 pr-1">2134 Oshodi-Isolo, Lagos</p>
            </div>
        </div>
      </div>
      <Link to='/orderstatus' className="container flex flex-row justify-center text-decoration-none py-2 my-5 bg-xfixYellow rounded-lg">
        <button type="button" className=" text-2xl font-medium">Confirm</button>
      </Link>
        </>
    )
}

export default OrderDetails;