import React from 'react'

function ArtSidesignup() {
  return (
    <div>
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
                {/* <label htmlFor="location">Location</label> <br /> */}
                <label htmlFor="address" className="">Address</label>
                <input type="text" name="address" id="address" className="form-input" />
                <button type="submit" className="w-full h-10 bg-blue-700 text-white hover:rounded-tr-2lg mt-6 hover:bg-red-600 hover:text-white active:bg-sky-400">Register</button>
                 </form>
                </div>
                </div>
  )
}

export default ArtSidesignup