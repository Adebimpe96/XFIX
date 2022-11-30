import "../Jobs/jobs.css";
import requests from "../../data";
import { useNavigate } from "react-router-dom";
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
    alert("Job accepted. Kindly reach out to the customer now.");
    navigate("/jobs");
  };
  const handleDecline = () => {
    alert("Job declined. See the next available job");
    navigate("/jobs");
  };

  return (
    <div className=" container-lg jobs flex justify-center items-center h-screen">
      <div className="job-container flex justify-between items-center">
        <div className="left-job h-full rounded-2xl">
          {requests.map((requests, key) => (
            <div
              key={key}
              onClick={() =>
                setInfo(
                  <>
                    <div className="info-name">
                      customer Name: {requests.name}
                    </div>
                    <div className="info-address">
                      Address: {requests.address}
                    </div>
                    <div className="info-details">
                      Job description:{requests.details}
                    </div>
                    <div className="reachout flex justify-center items-center gap-3">
                      <button className="call_btn">Call</button>
                      <button className="msg_btn"> Message</button>
                    </div>
                  </>
                )
              }
              className="mt-4 flex justify-center cursor-pointer request-map"
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
                  <p className="text-2xl r_name font-bold hover:text-blue-400">
                    {requests.name}
                  </p>
                  <p>{requests.address}</p>
                </div>
                <div className="r_time ">
                  <p className="">{requests.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ----------------------------------------------------------------------------------------- */}
        <div className="right-job w-1/2 border-2 rounded-2xl">
          {!info ? (
            <>
              <div className="first flex item-center justify-center h-full">
                <p className="font-bold text-blue-900 text-2xl">
                  Select user profile to reach out to the customer.
                </p>
              </div>
            </>
          ) : null}

          {info ? (
            <>
              <div className="second">
                {info}
                <div className="buttons flex justify-center items-center gap-2">
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
