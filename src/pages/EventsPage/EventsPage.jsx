import React, {useState, useEffect} from 'react'
import "./EventsPage.css"
import axios from 'axios'

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

  const EventsPage = () => {
    //listas de events creados
  const [events, setEvents] = useState([]);
  //function para tener los events del servidor
  const getEvents = () => {
    axios.get(`${API_URL}/api/event`)
      .then((response) => {
      setEvents(response.data)
    })
    .catch((err) => console.log(err))
  }
  useEffect(() => {
     getEvents()
  }, [])
  return (
    <div className='eventsbk-image'>
          <div className='events-title'>
          <h3>Events Near You</h3>
          <a href='/newevent'><h6>Create New Event</h6></a>
        </div>
        <div className='events-box-elements'>
        <div className='events-box-one'>
          {events.map(evento => {
            return (
            <div className='events-box-one'>
               <div className='cada-evento'>
                <img src={evento.picture} alt="img" width="140" />
                 <p>Description:{evento.description}</p>
                 <button>Delete</button> 
                </div>          
            </div> 
            )
          })}
           </div> 
              
        </div>
   </div>
  )
}

export default EventsPage;