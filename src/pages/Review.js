import React, {useState}from 'react';
import reviews from '../components/data';
import '../review.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
    const [list, setList] = useState(0);
    const{name, job, image, text} = reviews[list]
    const checkList =(number)=>{
        if (number > reviews.length - 1){
            return 0;
        }
        if (number < 0){
            return reviews.length - 1;
        }
        return number
    };

    const prevPerson=()=>{
        setList((list)=>{
            let newList = list -1
            return checkList(newList)
        });
    };
    const nextPerson=()=>{
        setList((list)=>{
            let newList= list + 1
            return checkList(newList)
        });
    };
    const randomPerson = ()=>{
        let randomNumber = Math.floor(Math.random() * reviews.length);
        if (randomNumber ===list){
            randomNumber= list + 1;
        }
        setList(checkList(randomNumber))
    }
  return (
      <main>
      <section className='container'>
      <div className="title">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
      </div>
      <article className='review'>
         <div className="img-container">
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
         </div>
         <h4 className='author'>{name}</h4>
         <p className='job'>{job}</p>
         <p className="info">{text}</p>
        <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
         <FaChevronLeft/>
         </button>
         <button className="next-btn" onClick={nextPerson}>
         <FaChevronRight/>
         </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
         Surprise me
         </button>
      </article>
    </section>
    {/* <Button variant='contained'>Submit</Button> */}
    </main>
  )
}

export default Review