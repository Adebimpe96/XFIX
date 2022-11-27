import './artisan.css';
import { MdNotificationsNone } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';
import artisan from '../Assets/image/jobber.png';
import avatarr from '../Assets/image/avatar.png';
import ArtisanSideBar from './ArtisanSideBar';
import Calendar from './Calendar';


const Artisan = () =>{

    return(
        <div className='artisan'>
            <div className='flex flex-row space-x-16'>
            <ArtisanSideBar />

        <div className='relative -right-48'>
        <div className='grid grid-cols-3 '>
            <div className='container col-span-2 relative backdrop-blur-sm bg-white/30 rounded-md p-5 my-6'>
                <div className='flex flex-col justify-start text-white my-3'>
                    <h3 className='text-sm'>Appointment for Today</h3>
                    <h2 className='text-2xl font-semibold'>3</h2>
                </div>
                <div className='flex flex-row space-x-5'>
                <div className='rounded-md backdrop-blur-sm bg-white/30 px-5 text-darkBlue my-auto py-4 '>
                    <h3 className='text-xs'>New Customer</h3>
                    <h2 className='text-2xl'>3</h2>
                    <p className='inline-flex bg-green-100 text-green-600 rounded-lg text-sm px-2 py-1 my-auto absolute -right-2 bottom-3'>3%
                     <BiTrendingUp className='ml-2 my-auto' /></p>
                </div>
                <div className='relative rounded-md backdrop-blur-lg bg-white/30 px-5 text-darkBlue my-auto py-4'>
                    <h3 className='text-xs'>Old Customer</h3>
                    <h2 className='text-2xl'>5</h2>  
                    <p className='inline-flex bg-red-100 text-red-600 rounded-lg text-sm px-2 py-1 my-auto
                     absolute right-2 bottom-3'>1%
                     <BiTrendingUp className='ml-2 my-auto' /></p>
                </div>
                <img src={artisan} alt='' width={240} className='absolute -right-16 -top-4'/>
                </div>
            </div>
            <div className='absolute top-16 -right-10 inline-flex -mt-20'>
                <MdNotificationsNone fontSize='2.0em' color='white' className='my-auto' />
                <img src={avatarr} alt=''className='rounded-full p-10 my-auto' />
            </div>
           <Calendar />

        </div>
        </div>
            </div>
        </div>
    )
}

export default Artisan;