import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import "./Seller.css"

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"


const Seller = () => {
  const [productName, setProductName] = useState("")
  const [picture, setPicture] = useState("")
  const [price, setPrice] = useState("")
  const {user} = useContext(AuthContext)

  const navigate = useNavigate()

  const registerProduct = async (e) => {
    try{
      e.preventDefault()
    axios.post(`${API_URL}/api/product`, {
      productName,
      picture,
      price,
      user: user._id
    })
    navigate("/marketplace")
    }catch (err) {
      console.log(err)
    }
   }

  return (
    <div className='back-seller-color'>
        <div className="container-group">
    
                <h2>Sell Your Item</h2>
                
                <form>
                    <div className="seller-group">      
                    <input className='input-group' type="text"
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} required></input>
                    <span className="highlight-group"></span>
                    <span className="bar-group"></span>
                    <label className='seller-label-goup'>Product Name</label>
                    </div>

                    <div className="seller-group">      
                    <input
                     type="text"
                     value={picture}
                     onChange={(e) => setPicture(e.target.value)} 
                     required></input>
                    </div>
                    
                    <div className="seller-group">      
                    <input className='input-group' type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} required></input>
                    <span className="highlight-group"></span>
                    <span className="bar-group"></span>
                    <label className='seller-label-goup'>Price</label>
                    </div>

                    <div className='submit-group-seller'>
                        <input onClick={registerProduct} type="submit"></input>
                    </div>
                    
                </form>
                    
                <p className="footer-group">
                <a href="/marketplace" target="_blank">Return to Seller</a>
                </p>
            
            </div>
     </div>
   
  )
}

export default Seller;