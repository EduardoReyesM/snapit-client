import axios from 'axios'
import React, {useState} from 'react'
import "./NewEvent.css"
import { useNavigate } from 'react-router-dom'
import {useContext} from "react"
import {AuthContext} from "../../context/auth.context"

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

const NewEvent = () => {
  const [description, setDiscription] = useState("")
  const [picture, setPicture] = useState("")
  const [name, setName] = useState("")
  const {user} = useContext(AuthContext);

  const navigate = useNavigate();

  const registerEvent = async (e) => {
    try{
      e.preventDefault()
   const newEvent =  axios.post(`${API_URL}/api/event`, {
      description, 
      picture,
      name,
      user: user._id})

       navigate("/events")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
        <div className='event-bk-color'>
                <div className="container-eventer" >
        
                    <h2>Create a Event</h2>
                    
                    <form onSubmit="">
                      <div className="eventer-edit-group"> 
     
                         <input className='input-image-event' type="text" placeholder='Image' 
                           name="picture"
                           value={picture}
                           onChange={(e) => setPicture(e.target.value)}
                           required></input>
                        </div>
                        <div>
                            <textarea className='textarea-event' name="description" id="" cols="30" rows="5" 
                              value={description}
                              onChange={(e) => setDiscription(e.target.value)}/>
                        </div>
                        <br />
                        <div className="eventer-edit-group">      
                        <input className='input-eventer' 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} required></input>
                        <span className="highlight-eventer"></span>
                        <span className="bar-eventer"></span>
                        <label className='label-eventer'>Event Name</label>
                        </div>
                        

                        <div className='submit-group-eventer'>
                            <input onClick={registerEvent} type="submit"></input>
                        </div>
                        
                    </form>
                        
                    <p className="footer-eventer">
                    <a href="/events" target="_blank">Return to Events</a>
                    </p>
                
                </div>
         </div>
    </div>
  )
}

export default NewEvent;