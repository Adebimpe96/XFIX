import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Authentication
import SignUp from "./components/Authentication/SignUp";
import ArtisanSignUp from "./components/Authentication/ArtisanSignUp";
import ArtLogin from "./components/Authentication/ArtLogin";
//layouts
import Body from "./pages/Body";
import Sidebar from "./components/Layouts/Sidebar";
import Template from "./components/Layouts/Template";

//pages
import CustDashboard from "./pages/CustDashboard";
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
import Customers from "./components/Customers/Customer";
import Confirm from "./components/Customers/Confirmation";
import HistoryPage from "./components/Customers/HistoryPage";
import CustomerSupport from "./components/Customers/CustomerSupport";
import Header from "./components/Customers/Header";
import CustLogin from "./components/Authentication/CustLogin";
import ProtectedRoute from "./components/Authentication/protectedRoute";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="body" element={<Body />} />
          <Route path="booking" element={<Customers />} />
          <Route path="customerhistory" element={<HistoryPage />} />
          <Route path="customersupport" element={<CustomerSupport />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="custlogin" element={<CustLogin />} />
          <Route path="artlogin" element={<ArtLogin setUser={setUser} />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="artsignup" element={<ArtisanSignUp />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="custdashboard" element={<CustDashboard />} />
          <Route path="artdashboard" element={<ArtDashboard user={user} />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="*" element={<Error />} />
          <Route path="bodies" element={<Bodies />} />
          <Route path="header" element={<Header />} />
          <Route path="template" element={<Template />} />

          {/* Template Children routes */}
          <Route element={<Template />}>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
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
