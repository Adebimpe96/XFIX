const Form = () => {

    return(
        <div className="container-lg book">
            <div className="row flex text-center my-3">
                <h4 className="text-white font-bold md:text-3xl drop-shadow-md">Book Appointment</h4>
            </div>
            <div className="container justify-center m-auto form rounded-md p-5">
            <form className="-auto px-auto align-middle ">
                <h5 className="text-darkBlue font-bold">Please fill in your details correctly</h5>
                <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Full name</span>
                <input type="text" className='text-xs w-full'  placeholder='Richard Fred' />
            </label>
            <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Home address</span>
                <input type="text"  className='text-xs w-full' placeholder='Block 1, Ikorodu' />
            </label>
            <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Whatsapp contact</span>
                <input type="tel"  className='text-xs w-full' placeholder='+234800000000' />
            </label>
            <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Phone number</span>
                <input type="tel"  className='text-xs w-full' placeholder='+234800000000' />
            </label>
            <label class="block my-2 text-xs">
                <span class="block text-xs font-medium text-slate-700">Issue</span>
                <input type="text" className='text-xs w-full' placeholder='Message'/>
            </label>
            <div className="flex float-right flex-row text-center w-1/2 md:w-1/5">
            <button className="blue-btn text-xs">Submit</button>
            </div>

            </form>
            </div>
            </div>
    )
}

export default Form;