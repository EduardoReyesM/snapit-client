import axios from 'axios'
import React, {useState} from 'react'
import "./NewEvent.css"
import { useNavigate } from 'react-router-dom'
import {useContext} from "react"
import {AuthContext} from "../../context/auth.context"

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

const NewEvent = () => {
  const [product, setProduct] = useState("")
  const [description, setDiscription] = useState("")
  const [price, setPrice] = useState("")
  const [picture, setPicture] = useState("")
  const [user, setUser] = useState("")

  const navigate = useNavigate();

  const newEventSubmit = async (e) =>{
      // const {user} = useContext(AuthContext);
    e.preventDefault();
   const newIvento = await axios.post(`${API_URL}/api/events`, {
    product, 
    description,
    price,
    product, 
    user });
   navigate(`/events/${newIvento._id}`);
  }
 
  return (
    <div>
        <div className='event-bk-color'>
                <div className="container-eventer" >
        
                    <h2>Create a Event</h2>
                    
                    <form onSubmit={newEventSubmit}>
                      <div className="eventer-edit-group"> 
                         <h4
                           value={user}
                           onChange={(e) => setUser(e.target.value)}>user:</h4>     
                         <input type="text" placeholder='Image' 
                           name="picture"
                           value={picture}
                           onChange={(e) => setPicture(e.target.value)}
                           required></input>
                        </div>
                        <div>
                            <textarea name="description" id="" cols="30" rows="5" 
                              value={description}
                              onChange={(e) => setDiscription(e.target.value)}/>
                        </div>
                        <br />
                        <div className="eventer-edit-group">      
                        <input className='input-eventer' type="text" required></input>
                        <span className="highlight-eventer"></span>
                        <span className="bar-eventer"></span>
                        <label className='label-eventer'
                         value={product}
                         onChange={(e) => setProduct(e.target.value)}>Product Name</label>
                        </div>
                        
                        <div className="eventer-edit-group">      
                        <input className='input-eventer' type="text" required></input>
                        <span className="highlight-eventer"></span>
                        <span className="bar-eventer"></span>
                        <label className='label-eventer'
                         value={price}
                         onChange={(e) => setPrice(e.target.value)}>Price</label>
                        </div>

                        <div className='submit-group-eventer'>
                            <input type="submit"></input>
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