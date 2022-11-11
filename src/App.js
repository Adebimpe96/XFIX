// import Header from "./components/Header";
import Navbar from "./components/Layouts/Navbar";
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Error from "./components/Error";
import LoginPage from "./components/Authentication/LoginPage";
import SignUp from "./components/Authentication/SignUp";
import CustDashboard from "./pages/CustDashboard";
import ArtDashboard from "./pages/ArtDashboard";
import Body from "./pages/Body";
import Service from "./pages/Service";
import Footer from "./components/Layouts/Footer";
import Modal from "./components/Modal";
import Review from "./pages/Review";
import ArtisanSignUp from "./components/Authentication/ArtisanSignUp";
// import {Bars3Icon} from '@heroicons/react/24/outline'
function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="body" element={<Body/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="loginpage" element={<LoginPage/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="artsignup" element={<ArtisanSignUp/>}/>
      <Route path="navbar" element= {<Navbar/>}/> 
      <Route path = "custdashboard" element={<CustDashboard/>}/>
      <Route path = "artdashboard" element={<ArtDashboard/>}/>
      <Route path = "*" element={<Error/>}/>
      <Route path = "modal" element={<Modal/>}/>
      <Route path = "review" element={<Review/>}/>
      <Route path = "footer" element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
     </div>
  );
}
export default App;


//     <div className="w-full h-20 border-2 px-8 bg-gray-200 flex justify-end md:bg-yellow-300 ">

//       <nav className="w-1/3 flex justify-between">
//       <Bars3Icon/>
//         <ul className=" flex justify-between items-center text-blue-900">
//         <li >
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">Products</a>
//         </li>
//          </ul>
//          <button className=" w-40 h-10 bg-blue-400 rounded-full hover:bg-blue-300 hover:text-white active:bg-sky-200">Get started</button>
//       </nav>
      
      /* <div className="w-20 h-20 border-2 bg-yellow-500 ">
        
      </div>
      <div className="w-20 h-20 border-2 bg-blue-500 "></div>
    </div>
    <div className="grid grid-cols-3 gap-4 ">
    <p className="font-black text-lg">Hello world</p>
    <p className="font-black text-xl">Hello world</p>
    <p className="font-black text-2xl">Hello world</p>
    <p className="font-black text-6xl">Hello world</p> */
    // </div>
    // </>