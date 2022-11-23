import { MdOutlineEngineering } from 'react-icons/md'

const CustomerHistory = (props) => {

    return(
        <div className="container-lg px-5">
            
            <div className="flex flex-row">
                <h4 className="red font-semibold py-4 ps-3">{props.date}</h4>
            </div>
            <div className="flex flex-rowfont-semibold justify-between border-b-2">
            <div className=' flex md:flex-row flex-col py-3 my-auto'>
               <div className='mx-2'>
               <MdOutlineEngineering className='text-5xl rounded-full bg-slate-200 p-2'/>
               </div>
                <div className='my-auto'>
                <h5 className='inline-flex'>Faulty Lampholder</h5>
                <p>7 Oct, 11:30am</p>
                </div>
            </div><div className="red col text-end my-auto"><h6 className="mb-2 mr-3">Cancelled</h6></div>
            </div>
            <div className="flex flex-rowfont-semibold justify-between border-b-2 border-red-400">
            <div className=' flex md:flex-row flex-col py-3 my-auto'>
               <div className='mx-2'>
               <MdOutlineEngineering className='text-5xl rounded-full bg-slate-200 p-2'/>
               </div>
                <div className='my-auto'>
                <h5 className='inline-flex'>Faulty Lampholder</h5>
                <p>7 Oct, 11:30am</p>
                </div>
            </div><div className="col text-end my-auto text-green-700"><h6 className="mb-2 mr-3">Successful</h6></div>
            </div>
        </div>
    )
}

export default CustomerHistory;