import "../Jobs/jobs.css";
import requests from "../../data";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Jobs() {
  const [info, setInfo] = useState("");

  useEffect(() => {
    const fetchInfo = () => {
      if (info !== "") {
        requests.filter((x) => {
          return (x.id = info);
        });
      }
    };
    fetchInfo();
  }, [info]);

  const navigate = useNavigate();
  const handleAccept = () => {
    alert("Job accepted");
    navigate("/jobs");
  };
  const handleDecline = () => {
    alert("Job declined. See the next available job");
    navigate("/jobs");
  };

  return (
    <div className="jobs flex justify-center items-center h-screen">
      <div className="job-container flex justify-between items-center">
        <div className="left-job h-full rounded-2xl">
          {/* <h3 className='text-blue-900'> No Jobs yet</h3>
          <img src={emptyJob} alt="emptyjob" className='emptyjob'/>  */}
          {requests.map((requests, key) => (
            <NavLink
              key={key}
              onClick={() => setInfo(requests.name)}
              className="mt-4 flex justify-center"
              to="#"
            >
              <div className="">
                <img
                  src={requests.image}
                  alt={requests.name}
                  className="request-img"
                />
              </div>
              <div className="request-link flex justify-around items-center">
                <div className="request-details">
                  <p className="text-2xl r_name font-bold">{requests.name}</p>
                  <p>{requests.address}</p>
                </div>
                <div className="r_time">
                  <p className="">{requests.time}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* ----------------------------------------------------------------------------------------- */}
        <div className="right-job w-1/2 border-2 rounded-2xl">
          {!info ? (
            <>
              <div className="first flex item-center justify-center py-4">
                Select user profile to view details
              </div>
            </>
          ) : null}

          {info ? (
            <>
              <div className="second">
                {info}
                <div className="buttons flex justify-center items-center gap-4">
                  <button
                    className="accept_btn active:bg-pink-700"
                    onClick={handleAccept}
                  >
                    Accept
                  </button>
                  <button className="decline_btn" onClick={handleDecline}>
                    Decline
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
