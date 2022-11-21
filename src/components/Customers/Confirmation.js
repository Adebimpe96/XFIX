import { VscVerified } from 'react-icons/vsc';
import avatar from '../Assets/image/avatar.png';

const Confirm = () => {


    return(
        <div>
            <div className='flex flex-col justify-center text-center mx-auto border-b-2 py-3 px-9'>
                <h3 className='font-bold py-2'>Book Appointment</h3>
                <p className='pb-2'>Confirm your order details</p>
            </div>
               <div className='container-lg py-4 '>
              <div className='flex flex-row text-center justify-center pt-3'>
              <h5 className=' font-bold line'>Electrician</h5>
              </div>
         <div className='flex flex-col md:flex-row sm:text-center justify-between p-4'>
            <div className='flex md:flex-row flex-col'>
                <div className='px-4 flex justify-center text-center'>
                <img src={avatar} alt="" width={100} />
                </div>
                <div className='flex flex-col md:text-left text-sm my-auto'>
                <h5 className='inline-flex font-bold'>Eng Richard<VscVerified className='ms-1' /></h5>
                <p>Block 1, Ikorodu</p>
                <p>350m away</p>
                </div>
                
            </div>

            <div className='flex flex-row my-auto'>
               <button className='red text-xs border-2 p-1 rounded-lg border-red-200'>Change electrician</button>
            </div>
        </div>
       </div>

            <div className='container-lg outline-none border-none  justify-center justify-items-center align-middle text-center m-auto '>
            <div className=' flex flex-col md:flex-row mx-auto '>
            <form className="container mx-auto shadow-none mt-3 w-full">
                <h5 className='font-bold pb-5 line'>Order details</h5>
                <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Full name</span>
                <input type="text" className='text-xs w-full'  placeholder='Richard Fred' />
            </label>
            <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Home address</span>
                <input type="text"  className='text-xs w-full' placeholder='Block 1, Ikorodu' />
            </label>
            <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Whatsapp contact</span>
                <input type="tel"  className='text-xs w-full' placeholder='+234800000000' />
            </label>
            <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Phone number</span>
                <input type="tel"  className='text-xs w-full' placeholder='+234800000000' />
            </label>
            <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Issue</span>
                <input type="text" className='text-xs w-full' placeholder='Message'/>
            </label>
            <div className='inline-flex space-x-10 mx-auto text-center mt-8'>
                <button className='w-full text-xs border rounded-sm px-3 bg-transparent blue-txt '>Cancel</button>
                <button className='w-full blue-btn text-xs rounded-sm px-3'>Proceed</button>
            </div>
            </form>
            <div className='flex flex-col md:flex-row mt-auto mb-5'>
               <button className='w-64 md:w-full mx-auto red text-xs border-2 px-2 py-1 rounded-lg border-red-200'>Edit details</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Confirm;