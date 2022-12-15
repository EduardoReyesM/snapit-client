import React, {useState, useEffect} from 'react'
import "./MarketPlace.css"
import axios from 'axios'

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"


const MarketPlace = () => {
  const [markets, setMarkets] = useState();
  //function para tener los events del servidor
  const getMarkets = () => {
    axios.get(`${API_URL}/api/marketplace`)
      .then((response) => {
      setMarkets(response.data)
    })
    .catch((err) => console.log(err))
  }
  useEffect(() => {
     getMarkets()
  }, [])
  
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