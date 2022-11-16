import Loading from './Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import '../pages/card.css';
import Requests from './Requests';

function Card() {
    const [requests, setRequests ] = useState([]);
    const [loading, setLoading] = useState(true)
    
    const removeRequest = (id) => {
        const newrequests = requests.filter((request) => request.id !== id)
        setRequests(newrequests)
      }
      
  const fetchRequests = async () => {
    setLoading(true)
    try {
      const response = await fetch('')
      const tours = await response.json()
      setLoading(false)
      setRequests(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchRequests()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (requests.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no request left</h2>
          <button className='btn' onClick={() => fetchRequests()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <div>
        <div className="cards">
            <h3 className='request'>Incoming requests</h3>
            <div className="single-request">
<Requests request={requests} removerequest={removeRequest}/>
            </div>
        </div>
    </div>
  )
}

export default Card