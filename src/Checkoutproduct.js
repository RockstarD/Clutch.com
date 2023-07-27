import React from 'react'
import "./Checkproduct.css"
import { useStateValue } from './StateProvider'

function Checkoutproduct({id, title, image, price, rating}) {
    // eslint-disable-next-line
    const [{basket}, dsipatch]=useStateValue();
    const removeFromBasket=()=>{

    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt='hehe'/>
        <div className='checkoutproduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
        <small>₹</small>
    <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
            {Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))}
        </div>
        <button onClick={removeFromBasket}>Unload</button>
        </div>
    </div>
  )
}

export default Checkoutproduct