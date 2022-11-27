import { MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import cardimg from '../Assets/image/avatar.png';
const ArtisanCard =(props) => {


    return (
        <div className="flex flex-col shadow-lg rounded-md space-y-3 mx-3">
  <div className="flex flex-row border-b-2 border-gray-200 p-3">
      <img src={cardimg} alt="..." className='p-1'/>
    <div className="">
      <div className="mx-2">
        <div className='inline-flex space-x-2'>
            <MdStar color='yellow' fontSize='1.5em'/>
            <p className='my-auto'>{props.rating}</p>
             </div>
        <p className="">{props.name}</p>
        <p className=""><small class="text-muted">{props.category}</small></p>
        <p className="">{props.location}</p>
      </div>
    </div>
  </div>
  <Link className='flex flex-row justify-center text-decoration-none py-2'>
    <p className='font-medium text-md text-green-800'>Order</p></Link>
</div>
    )
}


export default ArtisanCard;