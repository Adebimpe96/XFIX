import '../body.css';
import background from '../components/Assets/image/pictures.jpg'
function Body() {
  return (
    <> 
    <div className=" w-full h-full flex justify-around pt-10 px-8 shadow-sm items-center">
    <div className="w-1/2 ">
       <div className="m-10">
       <p className='font-sky-500'>ARTISAN'S MARKET PLACE</p>
      <h3 className='text-6xl text-blue-900 font-semibold'>The sure place to get the <span className='text-red-500'>quick fix</span> you need in your home.</h3>
    <div className="button flex ">
      <button className='button_pry2'>Hire a professional</button>
      <button className='button_pry3'>Get a job</button>
    </div>
       </div>
       </div>
       <div className=" w-1/2">
        <img src={background} alt="background" className='h-full object-cover' />
       </div> 
       </div>
    </>
  
  )
}

export default Body









