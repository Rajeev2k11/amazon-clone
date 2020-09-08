import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../Context/StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    };
    return (
        <div className="checkout_product">
             <img className="checkoutproduct_image" src={image} alt=""/>
             <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <div className="checkoutproduct_Rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
             </div>
             <p className="checkoutproduct_price">
                  <small>$</small>  
                  <strong>{price}</strong> 
                </p>
            
        </div>
    )
}

export default CheckoutProduct
