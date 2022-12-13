import React from 'react'
import "./ExplorePage.css"
import {Link} from "react-router-dom"

const ExplorePage = () => {
  return (
    <div className='Explore-foto'>
            <div className='Explore-row-left'>
                 <Link  to="/events" className='Explore-Link-events'>Events</Link>
                 <Link to="/marketplace" className='Explore-Link-marketplace'>Marketplace</Link>
            </div>
            <div className="Explore-feed">
                 
                  <div className='Explore-feedBck'>
                          <h2>Feed</h2>
                          <h3>username:</h3>
                          <img src="" alt="img" />
                          <p>Description:</p>
                          <br />
                        <div>
                             <p>Comments:</p>
                              <inputs />
                        </div> 
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