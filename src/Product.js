import React from 'react'
import "./product.css"
import { useStateValue } from './StateProvider';
function Product({id,title, image, price, rating}) {
const[{basket}, dispatch]=useStateValue();
const addToBasket=()=>{
  // add itme to basket
  dispatch({
      type: "ADD_TO_BASKET",
      id,
      title,
      image,
      price,
      rating,
  })
};

  return (
    <div className='product'>
        <div className='product_info'>
        <p className='product_title'>{title}</p>
        <p className='product_price'>
        <small>₹</small>
        <strong>{price}</strong>
        </p>
        <div className='product_rating'>
            {Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))}
        </div>
        </div>
        <img src={image} alt='hehe'/>
        <button onClick={addToBasket}>Add to Truck</button>
    </div>
  );
}

export default Product