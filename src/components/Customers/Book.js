import { VscVerified } from 'react-icons/vsc';
import { FaStar } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md'
import avatar from '../Assets/image/avatar.png';

const Book = (props) => {

    return(
       <div className='md:container md:mx-auto'>
         <div className='flex flex-col md:flex-row justify-center md:justify-between shadow-md p-4'>
            <div className=' flex md:flex-row flex-col'>
                <div className='px-4 flex justify-center text-center'><img src={props.img} alt="" className='rounded-full' width={100} /></div>
                <div className='text-center md:text-start'>
                <h5 className='inline-flex font-bold'>{props.name}<VscVerified className='ms-1' /></h5>
                <p>Block 1, Ikorodu</p>
                <div className='inline-flex my-auto space-x-2'>
                    <div className='inline-flex my-auto'><FaStar className='rating' />
                    <FaStar className='rating' />
                    <FaStar className='rating' />
                    <FaStar className='rating' />
                    <FaStar className='rating' /></div>
                <p className='my-auto'>5.0</p>
                    </div>
                <p className='red text-xs'>222 reviews</p>
                </div>
                
            </div>

            <div className='flex flex-row my-auto space-x-5 justify-center'>
                <p>350m away</p>
                <MdKeyboardArrowRight className='my-auto'/>
            </div>
        </div>
       </div>
    )
}

export default Book;