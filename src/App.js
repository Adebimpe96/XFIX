// // import Header from "./components/Header";
// import { useEffect, useState } from "react";
// import { gapi } from "gapi-script";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Layouts/Navbar";
import LandingPage from "./pages/LandingPage";
import Error from "./components/Error";

// Authentication
import LoginPage from "./components/Authentication/LoginPage";
import SignUp from "./components/Authentication/SignUp";

//layouts
import Body from "./pages/Body";
import Sidebar from "./components/Layouts/Sidebar";
import Template from "./components/Layouts/Template";

//pages
import CustDashboard from "./pages/CustDashboard";
import ArtDashboard from "./pages/ArtDashboard";
import ArtisanSignUp from "./components/Authentication/ArtisanSignUp";
import Workflow from "./pages/Workflow";
import Request from "./pages/Card";
import Dashboard from "./components/Layouts/Dashboard/Dashboard";
import Jobs from "./components/Layouts/Jobs/Jobs";
import Appointment from "./components/Layouts/Appointments/Appointment";
import History from "./components/Layouts/History/History";
import Support from "./components/Layouts/Support/Support";

function App() {
  // const calendarID = process.env.REACT_APP_CALENDAR_ID;
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  // const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  // const [events, setEvents] = useState([]);

  // const getEvents = (calendarID, apiKey) => {
  //   function initiate() {
  //     gapi.client
  //       .init({
  //         apiKey: apiKey,
  //       })

  //       .then(function () {
  //         return gapi.client.request({
  //           path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
  //         });
  //       })

  //       .then(
  //         (response) => {
  //           let events = response.result.items;
  //           return events;
  //         },
  //         function (err) {
  //           return [false, err];
  //         }
  //       );
  //   }

  //   gapi.load("client", initiate);
  // };
  // useEffect(() => {
  //   const events = getEvents(calendarID, apiKey);
  //   setEvents(events);
  // }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="body" element={<Body />} />

          <Route path="loginpage" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="artsignup" element={<ArtisanSignUp />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="custdashboard" element={<CustDashboard />} />
          <Route path="artdashboard" element={<ArtDashboard />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="*" element={<Error />} />
          <Route path="workflow" element={<Workflow />} />
          <Route path="request" element={<Request />} />
          <Route path="template" element={<Template />} />

          {/* Template Children routes */}
          <Route element={<Template />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/support" element={<Support />} />
            <Route path="/history" element={<History />} />
          </Route>
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
