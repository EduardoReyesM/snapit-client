import React from 'react'
import "./Seller.css"

const Seller = () => {
  return (
    <div className='back-seller-color'>
        <div class="container-group">
    
                <h2>Sell Your Items</h2>
                
                <form>
                    <div class="seller-group">      
                    <input className='input-group' type="text" required></input>
                    <span class="highlight-group"></span>
                    <span class="bar-group"></span>
                    <label className='seller-label-goup'>Product Name</label>
                    </div>

                    <div class="seller-group">      
                    <input type="file" required></input>
                    </div>
                    
                    <div class="seller-group">      
                    <input className='input-group' type="text" required></input>
                    <span class="highlight-group"></span>
                    <span class="bar-group"></span>
                    <label className='seller-label-goup'>Price</label>
                    </div>

                    <div className='submit-group-seller'>
                        <input type="submit"></input>
                    </div>
                    
                </form>
                    
                <p class="footer-group">
                <a href="/marketplace" target="_blank">Return to Seller</a>
                </p>
            
            </div>
     </div>
   
  )
}

export default Seller;