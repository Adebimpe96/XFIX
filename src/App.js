import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// Authentication
import SignUp from "./components/Authentication/SignUp";
import ArtisanSignUp from "./components/Authentication/ArtisanSignUp";
import ArtLogin from "./components/Authentication/ArtLogin";
//layouts
import Body from "./pages/Body";
import Sidebar from "./components/Layouts/Sidebar";
import Template from "./components/Layouts/Template";

//pages
import CustomerDashBoard from "./pages/CustomerDashBoard";
import ArtDashboard from "./pages/ArtDashboard";
import Navbar from "./components/Layouts/Navbar";
import LandingPage from "./pages/LandingPage";
import Error from "./components/Error";
import Dashboard from "./components/Layouts/Dashboard/Dashboard";
import Jobs from "./components/Layouts/Jobs/Jobs";
import Appointment from "./components/Layouts/Appointments/Appointment";
import History from "./components/Layouts/History/History";
import Support from "./components/Layouts/Support/Support";
import Bodies from "./components/Bodies";
import HistoryPage from "./components/Customers/HistoryPage";
import CustomerSupport from "./components/Customers/CustomerSupport";
import Header from "./components/Customers/Header";
import NewOrder from "./components/Customers/NewOrder";
import CustomerTemplate from "./components/Customers/CustomerTemplate";
import Location from "./components/Customers/Location";
import OrderForm from "./components/Customers/OrderForm";
import CustLogin from "./components/Authentication/CustLogin";
import OrderDetails from "./components/Customers/OrderDetails";
import OrderStatus from "./components/Customers/OrderStatus";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="body" element={<Body />} />
          <Route path="custlogin" element={<CustLogin />} />
          <Route path="artlogin" element={<ArtLogin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="artsignup" element={<ArtisanSignUp />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="artdashboard" element={<ArtDashboard />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="*" element={<Error />} />
          <Route path="bodies" element={<Bodies />} />
          <Route path="header" element={<Header />} />
          <Route path="orderstatus" element={<OrderStatus />} />
          {/*Customer Side bar children routes */}
          <Route element={<CustomerTemplate />}>
            <Route path="custdashboard" element={<CustomerDashBoard />} />
            <Route path="neworder" element={<NewOrder />} />
            <Route path="location" element={<Location />} />
            <Route path="orderform" element={<OrderForm />} />
            <Route path="custhistory" element={<HistoryPage />} />
            <Route path="custsupport" element={<CustomerSupport />} />
            <Route path="orderdetails" element={<OrderDetails />} />
          </Route>

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
