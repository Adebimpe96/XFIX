import '../Jobs/jobs.css';
// import avatar1 from '../../Assets/image/avatar1.jpg';
// import avatar2 from '../../Assets/image/avatar3.jpg';
// import emptyJob from '../../Assets/image/empty.jpg'
import requests from '../../data';
import { NavLink, useNavigate } from 'react-router-dom';

function Jobs() {
  const navigate = useNavigate();
  const handleAccept=()=>{
      alert("Job accepted")
      navigate("/jobs")
};
const handleDecline=()=>{
  alert("Job declined. See the next available job")
  navigate("/jobs")
};

  return (

    <div className='jobs flex justify-center items-center'>
      <div className="job-container flex justify-between items-center">
        <div className="left-job h-full rounded-2xl">
 
          {/* <h3 className='text-blue-900'> No Jobs yet</h3>
          <img src={emptyJob} alt="emptyjob" className='emptyjob'/>  */}
        {requests.map((requests) => (
            <NavLink key={requests.id} className="mt-4 flex justify-center" to="#">
               <div className=''>
                <img src={requests.image} alt={requests.name} className="request-img"/>
                </div>
                <div className="request-link flex justify-around items-center">
               <div className='request-details'> 
               <p className='text-2xl r_name font-bold'>{requests.name}</p>
                <p>{requests.address}</p>
                </div>
                <div className="r_time">
                <p className=''>{requests.time}</p>
                </div>
                </div>
              
            </NavLink>
          ))}
        </div>
        <div className="right-job  w-1/2  border-2 rounded-2xl">
          <div className="buttons flex justify-center items-center gap-4">
          <button className='accept_btn active:bg-pink-700' onClick={handleAccept}>Accept</button>
          <button className='decline_btn'onClick={handleDecline}>Decline</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Jobs

