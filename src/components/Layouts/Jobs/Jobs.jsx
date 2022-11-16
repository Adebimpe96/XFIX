import '../Jobs/jobs.css';
import avatar1 from '../../Assets/image/avatar1.jpg';
import avatar2 from '../../Assets/image/avatar3.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
function Jobs() {
  const navigate = useNavigate();
  const handleAccept=()=>{
      alert("Job accepted")
      navigate("/jobs")
      // AIzaSyD1euCUwy2PjdUfcaQVf0UI92JYIW4pIE8

      // 4/0AfgeXvsyzrgMe4M63_5EIhoPFmdiuAnZ10rkr5ZkXO1hZhbzETPC__Jjx2_O5mrGFg_Vwg
};
const handleDecline=()=>{
  alert("Job declined. See the next available job")
  navigate("/jobs")
};
  
  const requests=[
    {
        id:1,
        image:avatar1,
        name:'Dami',
        address: '10, Ikija street, Ikorodu.',
        time:'09:00am'
    },
    {
        id:2,
        image:avatar2,
        name:'Tosin',
        address: '8, Palm Avenue, Mushin.',
        time:'11:00am'
    },
    {
        id:3,
        image:avatar1,
        name:'Zaynab',
        address: '1, Balogun street, Oshodi.',
        time:'10:00am'
    },
    {
        id:4,
        image:avatar2,
        name:'Adeola',
        address: '15, Olosha street, Oshodi.',
        time:'01:00pm'
    },
    {
        id:5,
        image:avatar1,
        name:'Helen',
        address: '16, Olorunsogo street, Ikeja.',
        time:'08:00am'
    },
]
  return (

    <div className='jobs flex justify-center items-center'>
      <div className="job-container flex justify-between items-center">
        <div className="left-job h-full rounded-2xl">
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
}

export default Jobs