import React from 'react'
import "./NewEvent.css"

const NewEvent = () => {
  return (
    <div>
        <div className='event-bk-color'>
                <div class="container-eventer">
        
                    <h2>Create a Event</h2>
                    
                    <form>
                      <div class="eventer-edit-group">      
                         <input type="file" required></input>
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <br />
                        <div class="eventer-edit-group">      
                        <input className='input-eventer' type="text" required></input>
                        <span class="highlight-eventer"></span>
                        <span class="bar-eventer"></span>
                        <label className='label-eventer'>Product Name</label>
                        </div>
                        
                        <div class="eventer-edit-group">      
                        <input className='input-eventer' type="text" required></input>
                        <span class="highlight-eventer"></span>
                        <span class="bar-eventer"></span>
                        <label className='label-eventer'>Price</label>
                        </div>

                        <div className='submit-group-eventer'>
                            <input type="submit"></input>
                        </div>
                        
                    </form>
                        
                    <p class="footer-eventer">
                    <a href="/events" target="_blank">Return to Events</a>
                    </p>
                
                </div>
         </div>
    </div>
  )
}

export default NewEvent;