import React from 'react'
import "./Checkout.css"
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './StateProvider'
function Checkout() {
    const [{basket}]=useStateValue();
  return (
    <div className='checkout'>
        <img className='checkout_ad' src="/ad.jpg" alt='hehe'></img>
    {basket?.length===0?(
        <div>
            <h2>Your Truck is ready to be Loaded</h2>
        </div>
    ):(
        <div>
            <h2>Your Truck</h2>
            {/* list of checkot products */}
            {basket.map(item=>(
                <Checkoutproduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
        </div>
    )}
    </div>
  )
}

export default Checkout