import React from 'react'
import "./MarketPlace.css"
import {Link} from "react-router-dom"

const MarketPlace = () => {
   
  
  return (
    <div className='MarketP'>
        <div className='market-title'>
          <h3>Marketplace</h3>
        </div>
        <div className='Sell-items-market'>
        <a href='/sellonline'><h6>sell your items</h6></a>
        </div>
        <div className='market-box-elements'>
            <div className='markets-box-one'>
              <div>
                  <img src="" alt="img" width="100" />
                  <p>$</p>
                  <p>Description:</p>
                  <button>Share</button>
              </div>
           </div>
        </div>
      
    </div>
  )
}

export default MarketPlace;