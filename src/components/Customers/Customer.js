import "./customer.css";

import Icon from '../Assets/icon/plane.png';
import Book from './Book';
import Form from './Form';
import avatar from '../Assets/image/avatar.png';
import avatar1 from '../Assets/image/avatar1.jpg';
import Header from "./Header";
import CustomerSideBar from "./CustomerSideBar";


const Customers =() => {
    
    const artisans =[
        {
            name: 'Eng. Leo',
            image: avatar,
        },
        {
            name: 'Eng. Joe',
            image: avatar1,
        },
        {
            name: 'Eng. Fred',
            image: avatar,
        },
        {
            name: 'Eng. Bryan',
            image: avatar,
        },
    ]

    return(
         <div>
            <CustomerSideBar />
         </div>

          );
        
}

export default Customers;
