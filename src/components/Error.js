import {Link} from 'react-router-dom';
import Navbar from './Layouts/Navbar';
function Error() {
  return (
    <div  >
      <Navbar/>
      <div className='error'>
        <h3>OOPS!</h3>
        <p>Looks like the page you'are looking for has withered awaybut we are here to help you get a fresh start</p>
    <Link to='/' className='link'>Back to home</Link>
    </div>
    </div>
  )
}

export default Error