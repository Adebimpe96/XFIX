import {Link} from 'react-router-dom';
import ArtSidesignup from './ArtSidesignup';


function ArtisanSignUp() {
  return (
   
        <div>
    <div className="content">
        <div className="left">
            <div className="left-content">
                <h3 className='ml-4 font-bold'> Connect with our large community of individuals who needs your service <span className='text-blue-700 font-bold'>.</span><span className='text-red-800 font-bold'>.</span><span className='text-yellow-500 font-bold'>.</span></h3>
                    <p className='mr-4 text-red-700'>Already have an account?  <Link to="/loginpage" className='hover:text-blue-700'>Sign in</Link></p>
                    {/* <p className='text-sky-400'>Are you an individual looking to get jobs done quickly at your convenience? <Link to='/signup' className='text-blue-700 hover:text-red-700'>Register here.</Link> </p> */}
               
               
            </div>

        </div>
        <div className="right">
            <div className="right-content">
                <ArtSidesignup/>
            </div>
        </div>
    </div>
    </div>
  )
};

export default ArtisanSignUp

