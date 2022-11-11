// import { Button } from '@mui/material';
// import { Stack } from '@mui/system';
// import { Link } from "react-router-dom";

const Signups =()=>{

    return(
            <>
            <div className="form block shadow-sm">
            <h2 className="text-blue-800">Welcome to Xfix!</h2>
                    <p className="text-sky-500 mt-4">Create an account with xfix.</p>
            <form action="" method="post" className=""> 

                <label htmlFor="name" className="">Full Name</label>
                <input type="text" name="fname" id="fname" className="form-input"/>
                 <label htmlFor="name" className="">Email</label>
                <input type="email" name="email" id="email" className="form-input" />
                <label htmlFor="phone" className="">Phone number</label>
                <div className="phone flex justify-around">
                <input type="text" name="" id="" placeholder="+234" className="bg-transparent text-sky-700 w-20 mr-2 "  />
                <input type="number" name="" id="" className="w-full form-input"/>
                </div>
                <label htmlFor="password" className="">Password</label>
                <input type="password" name="password" id="password" className="form-input" />
                <label htmlFor="address" className="">Address</label>
                <input type="text" name="address" id="address" className="form-input" />
                <button type="submit" className="w-full h-10 bg-blue-700 text-white hover:rounded-tr-2lg mt-6 hover:bg-red-600 hover:text-white active:bg-sky-400">Register</button>
                 </form>
                </div>
            </>

        // <div className="signup">
        //     <div className="signup-text">
        //     <h3>Get started with Xfix.</h3>
        //     <h5>Create your account</h5>
        //     </div>
            
        // <form>
        // <label htmlFor="fname">First name</label> <br />
        // <input type="text" placeholder='First name'/>
        // <label htmlFor="lname">Last name</label>
        // <input type="text" placeholder=' Last name'/>
        // <label htmlFor="email">Email</label>
        // <input type="email" placeholder='Enter a valid email' />
    
        // <input type="text" placeholder='+234'/>
        // <label htmlFor="phoneNo">Phone number</label>
        // <input type="text" placeholder='Enter your phone no'/>
        // <label htmlFor="password">Password</label>
        // <input type="password" placeholder='Enter your password'/>
        // <label htmlFor="password">Confirm password</label>
        // <input type="password" placeholder='confirm your password'/>
        // <label htmlFor="location">Select your location</label> <br />
        // <select name="location" id="location">
        //     <option  disabled="disabled">Select one location</option>
        //     <option value="2">Lekki</option>
        //     <option value="3">Ajah</option>
        //     <option value="4">Ikeja</option>
        //     <option value="5">Yaba</option>
        //     <option value="6">Oshodi</option>
        // </select>
        // <Stack>
        // <Button variant="contained" size='medium' color='primary'>Register</Button>
                
        // </Stack>
        // </form>
        //     <div className="form-area"></div>
        //</div>

   )
}

export default Signups;