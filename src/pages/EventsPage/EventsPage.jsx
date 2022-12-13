import React from 'react'
import "./EventsPage.css"
import imgE from "../../images/Mcbook.png"

const EventsPage = () => {
  return (
    <div className='eventsbk-image'>
        <div className='events-title'>
          <h3>Events Near You</h3>
          <a href='/newevent'><h6>Create New Event</h6></a>
        </div>
        <div className='events-box-elements'>
            <div className='events-box-one'>
                <div>
                  <img src={imgE} alt="img" width="200" />
                  <p>Description:</p>
                  <button>Share</button>
                </div>
            </div>  
        </div>
   </div>
  )
}

export default EventsPage;