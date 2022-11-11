import React, { useEffect } from 'react'

function List({people}) {
    useEffect(()=>{

    }, [])
  return (
    <>
    {people.map((person)=>{
        const {id, name, age, image} = person;
        return(
            <article key={id}>
                <img src={image} alt={name} style={{width: '50px', height:'50px' }}/>

                <div>
                    <h4>{name}</h4>
                    <h4>{age} years</h4>
                </div>
            </article>
            
        );
    })}
    </>
  )
}

export default List