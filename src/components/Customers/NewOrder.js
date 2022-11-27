import { HiArrowNarrowLeft} from 'react-icons/hi';
import { MdElectricalServices, MdCarRepair } from 'react-icons/md';
import { GiTeePipe, GiPaintRoller, GiHammerNails } from 'react-icons/gi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const NewOrder = () => {
 
    return(
        <>
        <div className="text-white darkBlue py-3">
        <div className="container flex flex-row text-decoration-none text-white space-x-4">
        <Link to='/custdashboard'>
        <HiArrowNarrowLeft fontSize='1.7em' color='white' className='my-auto' />
        </Link>
        <h4 className='my-auto'>New Order</h4>
        </div>
        </div>
        <div className='container py-5'><h4>Choose category</h4></div>
        <div className='container grid grid-cols-3 gap-2 px-3'>
            <Link className='text-center text-decoration-none text-darkBlue'>
                <div className='container py-5 flex justify-center bg-slate-100 rounded-lg shadow-sm'>
                    <MdElectricalServices fontSize='2.5em' color='black' /></div>
                <h5 className='py-2'>Electrical</h5>
            </Link>
            <Link className='text-center text-decoration-none text-darkBlue'>
                <div className='container py-5 flex justify-center bg-slate-100 rounded-lg shadow-sm'><GiTeePipe fontSize='2.5em' color='black' /></div>
                <h5 className='py-2'>Plumbing</h5>
            </Link>
            <Link className='text-center text-decoration-none text-darkBlue'>
                <div className='container py-5 flex justify-center bg-slate-100 rounded-lg shadow-sm'><MdCarRepair fontSize='2.5em' color='black' /></div>
                <h5 className='py-2'>Car Repair</h5>
            </Link>
            <Link className='text-center text-decoration-none text-darkBlue'>
                <div className='container py-5 flex justify-center bg-slate-100 rounded-lg shadow-sm'><GiPaintRoller fontSize='2.5em' color='black' /></div>
                <h5 className='py-2'>Painting</h5>
            </Link>
            <Link className='text-center text-decoration-none text-darkBlue'>
                <div className='container py-5 flex justify-center bg-slate-100 rounded-lg shadow-sm'><CiDeliveryTruck fontSize='2.5em' color='black' /></div>
                <h5 className='py-2'>Delivery</h5>
            </Link>
            <Link className='text-center text-decoration-none text-darkBlue'>
                <div className='container py-5 flex justify-center bg-slate-100 rounded-lg shadow-sm'><GiHammerNails fontSize='2.5em' color='black' /></div>
                <h5 className='py-2'>Carpentry</h5>
            </Link>
        </div>
        <Link to='/location' className=' text-decoration-none'>
        <button type='button' className='flex mx-auto justify-center py-2 my-5
         bg-darkBlue text-center shadow-md rounded-md w-1/2 text-white text-2xl'>
            Next
        </button>
        </Link>
       
        </>
    )
}

export default NewOrder;