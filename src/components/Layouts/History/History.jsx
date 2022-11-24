import "../History/history.css";
import CustomerHistory from "../../Customers/CustomerHistory";
import avatar from "../../Assets/image/avatar.png";
function History() {
  return (
    <div>
      <div className="notification flex justify-end items-center">
        <i class="fa-regular fa-bell text-2xl text-slate-400 mt-4"></i>
        <img src={avatar} alt="" className="ml-3 avatar mt-4" />
      </div>
      <div className="history">
        <CustomerHistory />
      </div>
    </div>
  );
}

export default History;
