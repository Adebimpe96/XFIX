import group from '../Assets/image/Group 2609212.png';
import hero from '../Assets/image/Rectangle 39920.png';

const Location = () => {

    return(
        <div className='container-lg '> 
            <div className="flex flex-col space-y-2 md:flex-row location">
                <div className='container text-start'>
                    <div><img src={group} alt=""  className='w-1/4vw p-4'/></div>
                    <div className='p-2'>
                        <h5 className='font-semibold'>Turn on location services</h5>
                        <p className='text-xs my-2'>
                        Get recommendation of great services! Turn on your location so we 
                        can show you what's nearby.
                        </p>
                    </div>
                    <div className='text-xs flex'>
                        <button className='rounded-md p-2 text-white font-semibold mx-2 outline outline-offset-2 outline-1 blue-btn '>SEARCH NEAR ME</button>
                        <button className='rounded-md py-1 px-2 border-2 font-bold '>
                            NOT NOW</button>
                    </div>
                </div>
            
                    <img src={hero} alt="" className='object-cover max-w-md' />
            
            </div>
        </div>
    )
}

export default Location;