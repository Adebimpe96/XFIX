import "../Dashboard/dashboard.css";
import avatar from "../../Assets/image/avatar.png";
import avatar1 from "../../Assets/image/avatar1.jpg";
import avatar2 from "../../Assets/image/avatar3.jpg";
import decorate from "../../Assets/image/decorate.png";
function Dashboard({ user }) {
  const requests = [
    {
      id: 1,
      image: avatar1,
      name: "Dami",
      address: "10, Ikija street, Ikorodu.",
    },
    {
      id: 2,
      image: avatar2,
      name: "Tosin",
      address: "8, Palm Avenue, Mushin.",
    },
  ];
  const appointments = [
    {
      id: 1,
      day: 12,
      month_year: "Nov, 2022 10:00am",
      image: avatar1,
      name: "Zaynab",
      address: "1, Balogun street, Oshodi.",
      description: "To fix a water pipe in my bathroom and toilet.",
    },
    {
      id: 2,
      image: avatar2,
      name: "Tosin",
      address: "8, Palm Avenue street, Mushin.",
      day: 13,
      month_year: "Nov, 2022 2:00pm",
      description: "To repair my kichen carbinets and room door.",
    },
  ];
  return (
    <div className="dashboards">
      <div className="notification flex justify-end items-center">
        <div className="username-display">
          <h3 className="font-bold text-xl text-blue-900">
            Hello, {user?.email}
          </h3>
        </div>
        <i className="fa-regular fa-bell text-2xl text-slate-400 mt-4"></i>
      </div>

      <div className="sub-container flex justify-between items-center">
        <div className="requests">
          <div className="main-header flex items-center justify-between">
            <h3 className="r_title">Incoming requests</h3>
          </div>
          <div className="cards flex justify-between items-center">
            <div className="card-content">
              {requests.map((requests, key) => (
                <div
                  key={key}
                  className="card mt-6 rounded-2xl flex justify-center"
                >
                  <div>
                    {/* <img
                      src={requests.image}
                      alt={requests.name}
                      className="request-img"
                    /> */}
                  </div>
                  <div className="request-details m-4 ">
                    <p className="text-2xl r_name font-bold">{requests.name}</p>
                    <p>{requests.address}</p>
                  </div>
                  {/* <div>
                    {" "}
                    <img src={decorate} alt="decorate" className="decorate" />
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dashboard_appointment">
          <div className="main-header flex items-center justify-between">
            <h3 className="a_title">Next appointments</h3>
          </div>
          <div className="appointment-content p-6">
            {appointments.map((appointments) => (
              <div
                key={appointments.id}
                className="a_card mt-6 rounded-2xl flex justify-center"
              >
                <div className="appointment-details flex justify-between items-center m-4 ">
                  <p className="a_name font-bold day">{appointments.day}</p>
                  <p className="year">{appointments.month_year}</p>

                  <div>
                    <img
                      src={appointments.image}
                      alt="user"
                      className="a_img"
                    />
                    <div className="">
                      <p className="text-2xl a_name font-bold">
                        {appointments.name}
                      </p>
                      <p className="text-blue-900 a_address">
                        {appointments.address}
                      </p>
                      {/* <div className='a_description mr-20'> 
                    <p>Job Description:{appointments.description}</p>
                </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
