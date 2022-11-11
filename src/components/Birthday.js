import React, {useState} from 'react'
import {data} from './data'
import List from './List'

function Birthday() {
    const [people, setPeople] = useState(data)
   
  return (
   <main>
<h3>{people.length} birthdays today</h3>
<List people={people}/>
<button onClick={()=>setPeople([])}> Clear all</button>

     {/* Get a <span className='fix'>quick fix with our</span> {' '} <span style={{ color: 'darkblue', fontWeight: 'bold' }}>
        {/* <Typewriter
            words={['reliable', 'trusted', 'efficient!']}
            loop={5}
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> */}
        {/* </span> professionals who are just few minutes from your doorstep. */} 
        {/* style={{backgroundImage: `url(${image})`}} */}
   </main>
  )
}

export default Birthday