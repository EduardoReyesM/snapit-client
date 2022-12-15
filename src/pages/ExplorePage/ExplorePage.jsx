import React, {useState, useEffect, useContext} from 'react'
import "./ExplorePage.css"
import {Link} from "react-router-dom"
import axios from 'axios'
import { AuthContext } from '../../context/auth.context'


const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

const ExplorePage = () => {
  //listas de los post creados
  const [posts, setPosts] = useState([])
  // function para tener los posts del servidor
  // usando context provider para ver si esta log in
  // const {isLoggedIn} = useContext(AuthContext);

  const getPosts = () => {
    axios.get(`${API_URL}/api/post`)
    .then((response) => {
      setPosts(response.data)
    })
    .catch((err) => console.log(err));
  }  
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className='Explore-foto'>
            <div className='Explore-row-left'>
                 <Link  to="/events" className='Explore-Link-events'>Events</Link>
                 <Link to="/marketplace" className='Explore-Link-marketplace'>Marketplace</Link>
            </div>
            <div className="Explore-feed">
            <div className='Explore-feedBck'>
                <h2>Feed</h2>
                {posts.map((post) => {
                  return <div>

                          <h3>username:{post.name}</h3>
                          <img src={post.picture} alt="img" width="100px"/>
                          <p>Description: {post.description}</p>
                          <br />
                        <div>
                             <p>Comments:</p>
                        </div>    
                  </div>
                })} 
                  
                         
                  </div>
                     <div className='ExpoloeB'>
                          <p>Dont Miss on the Action & Share your Moments</p>
                          <Link to={"/signup"} className="Explore-L"> Sign Up</Link>
                          <Link to={"/login"} className="Explore-L"> Log In</Link>
                    </div>
             </div>
    </div>
  )
}

export default ExplorePage;