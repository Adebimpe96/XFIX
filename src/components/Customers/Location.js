import group from '../Assets/image/Group 2609212.png';
import hero from '../Assets/image/Rectangle 39920.png';
import Icon2 from '../Assets/icon/Vector.png';

const Location = () => {

    return(
        <div className='container-lg'> 
            <div className="flex flex-col space-y-2 md:flex-row rounded-lg shadow-md">
                <div className='container-lg text-start'>
                    <div><img src={group} alt=""  className='w-1/6'/></div>
                    <div className='px-2 pt-4 '>
                        <div className='inline-flex space-x-3'>
                        <h5 className='font-semibold my-auto'>Turn on location services</h5>
                       <div className='gradient rounded-full p-2'><img src={Icon2} alt='' className='w-4'/></div>
                        </div>
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
            
                    <img src={hero} alt="" className='object-cover max-w-md rounded-r-lg' />
            </div>
        </div>
    )
}

export default Location;