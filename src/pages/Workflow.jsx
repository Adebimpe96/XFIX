import React from 'react'

function Workflow() {
    const sectionACardData = [
        {
          icon: "fa-solid fa-user-gear",
          title: "Select type of worker",
          body: "Simply select the type of skilled worker needed, along with the job description",
        },
        {
          icon: "fa-solid fa-clock-rotate-left",
          title: "View matches",
          body: "A list of workers that are available  will be displayed",
        },
        {
          icon: "fa-solid fa-users",
          title: "Choose the best",
          body: "View ratings, reviews, skill & experience in workers profiles before confirming the best worker for your job",
        },
      ];
  return (
    <>
    
    <div className="work-flow flex  flex-col justify-center items-center px-20 mt-2 ">
        <h2 className="font-sans text-9xl">How Xfix works</h2>
        <div className="cards  h-full mt-3">
          <div className="card-area flex justify-center items-center gap-3 rounded-2xl ">
          {sectionACardData.map((elem, key) => (
              <div className="px-3 text-center bg-blue-400 hover:bg-black cursor-pointer h-full " key={key}>
                <div className="icon">
                  <i className={`${elem.icon}`}></i>
                </div>
                <div className="title my-3">{elem.title}</div>
                <div className="body">{elem.body}</div>
              </div>
            ))}
          </div>
        </div>
       </div>
    </>
  )
}

export default Workflow