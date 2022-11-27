import { Link } from "react-router-dom";

const RecentOrder =(props) =>{

    return (
        <li className="shadow-lg rounded-md m-2 p-3">
        <Link className="dropdown-item p-3" to="">
          <div className="">
            <div className="flex flex-row justify-between">
              <h4>#899499</h4>
              <p className="text-darkBlue font-medium">#10000</p>
            </div>
            <p className="text-muted font-normal">29/11/2021 - 9:00am</p>
            <p>Category : {props.category}</p>
          </div>
        </Link>
      </li>
    )
}

export default RecentOrder;