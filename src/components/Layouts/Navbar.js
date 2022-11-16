import logo from "../Assets/image/x.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar w-full h-20 px-5 flex justify-between shadow-transparent">
      <img src={logo} alt="logo" className="w-40 h-30 object-cover" />
      <div className="link w-1/3 flex">
        <ul className="w-full flex justify-between items-center text-blue-900">
          <Link to="/signup" className="button_pry1">
            Get started{" "}
          </Link>
          <Link to="/login">Login </Link>
          <Link to="service">Services </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
//  const [showLinks, setShowLinks] = useState(false);
//  const linksContainerRef= useRef(null);
//  const linksRef = useRef(null);
//  useEffect(()=>{
//   const linksHeight = linksRef.current.getBoundingClientRect().height;
// if (showLinks){
//   linksContainerRef.current.style.height= `${linksHeight}px`
// }else{
//   linksContainerRef.current.style.height ='0px'
// };
//  }, [showLinks]);
//  <nav>
//   <div className="nav-center">
//   <div className="nav-header">
//     <div className="logo">
//       <img src={logo} alt= "logo" />
//     </div>
//   {/* <h2 className='header-title'>Xfix</h2> */}
//   <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
//   <FaBars/>
//   </button>
//   </div>
//      <div className= 'links-container' ref={linksContainerRef}>
//       <ul className="links" ref={linksRef}>
//          {links.map((link)=>{
//           const{id, url, text,style} = link;
//           return(
//             <li key={id}>
//               <NavLink to={url} className={style}>{text} </NavLink>
//             </li>
//           )
//          })}
//       </ul>
//   </div>

//   </div>
//   </nav>
