import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {error,setError} = useState("");
    const onSubmit = (details)=>{
        if(details.email==="admin@example.com" && details.password ==="1234"){
            localStorage.setItem('authenticated', true)
            console.log(details)
            alert("Signin Successfully")
            navigate("/landingpage")
        }else{
            setError("Invalid signin details");
        }
    };
   
    return ( 
        <div className="container-md">
            <div className="login-content">
                <h3 className="text-blue-800">Welcome back!</h3>
                <p className="text-sky-500">Sign in to continue</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label> Email</label> &nbsp;
                    <input type="email"  {...register("email", {required:true, maxLength:40})}  /> <br/>
                    {errors.email && <p style={{color:'red'}}>Please check the email</p>} 
                    <label> Password </label> &nbsp;
                    <input type="password"  {...register("password", {required:true})} /> <br/>
                    <button className="signin-button active:bg-sky-300 hover:bg-red-700 text-white" onSubmit={handleSubmit()}>Sign in</button>
                    <p style={{textAlign:"center", color:"red", fontSize:"1.3rem"}}>{error}</p>
                     <p  className="my-2 cursor-pointer">Forgot Password?</p>
                     </form>
                     </div>
                     
                    <p className="text-sky-600 cursor-pointer">Privacy Policy and Terms of service </p>
                    
                     </div>
     );
};
export default Login;