
import { Link } from 'react-router-dom';
import '../Authentication/side.css';
import Login from './Login';
// import back from './image/art.jpg';

const LoginPage=()=>{

    return(
<div>
    {/* <Header/> */}
    <div className="content">
        <div className="left">
            <div className="left-content">
                <h3 className='ml-6 font-bold'> Your sure plug for home service professionals<span className='text-blue-700 font-bold'>.</span><span className='text-red-800 font-bold'>.</span><span className='text-yellow-500 font-bold'>.</span></h3>
                <div className='flex flex-col space-y-4 justify-between'>
               
                {/* <button className='w-full bg-blue-600 rounded-full '> <FaGoogle className='text-white text-lg'/>Sign in with Google</button> */}
                {/* <button  className='w-full bg-red-600 rounded-full'><FaFacebookF className='icon'/>Sign in with Facebook</button> */}
                    </div>
                    <p className='m-4 text-red-600'>Don't have an account?  <Link to="/signup">Sign up</Link></p>
               
               
            </div>

        </div>
        <div className="right">
            <div className="right-content">
                <Login/>
            </div>
        </div>
    </div>


</div>


    )
}

export default LoginPage;