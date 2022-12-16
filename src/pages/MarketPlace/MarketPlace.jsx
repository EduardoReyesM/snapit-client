import React, {useState, useEffect} from 'react'
import "./MarketPlace.css"
import axios from 'axios'

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"


const MarketPlace = () => {
  const [markets, setMarkets] = useState([]);
  const [product, setProduct] = useState([])
  //function para tener los events del servidor
  const getMarkets = () => {
    axios.get(`${API_URL}/api/product`)
      .then((response) => {
      setMarkets(response.data)
    })
    .catch((err) => console.log(err))
  }
  useEffect(() => {
     getMarkets()
  }, [])

  const deleteProduct = async (post) => {
    try {
    } catch(err) {
      console.log(err);
    } 
  }
  
  return (
    <div className='MarketP'>
        <div className='market-title'>
          <h3>Marketplace</h3>
        </div>
        <div className='Sell-items-market'>
        <a href='/sellonline'><h6>sell your items</h6></a>
        </div>
        <div className='market-box-elements'>
          {markets.map(vender => {
            return (
              <div className='markets-box-one'>
              <div className='inside-market-box'>
                  <img className='margin-market-t' src={vender.picture} alt="img" width="180" />
                  <p>${vender.price}</p>
                  <p>Description:{vender.description}</p>
                  <button onClick={deleteProduct} className='margin-market-b'>Delete</button>
              </div>
           </div>
            )
          })}
            
        </div>
      
    </div>
  )
}

export default MarketPlace;