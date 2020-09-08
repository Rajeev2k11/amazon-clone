import React from 'react'
import './Product.css'
import {useStateValue} from '../Context/StateProvider'

export default function Product({id, title, price, rating, image}) {

    const [{}, dispatch] = useStateValue();
    const addTobasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id: id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div className="product">
            <div className="product_Info">
                <p>{title}</p>  
            </div>
            <div className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className="product_rating">
                {Array(rating).fill().map((_)=>(<p>⭐</p>))}
            </div>
            <img src="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6-5.jpg" />
            <button onClick={addTobasket} className="btn">Add to Cart</button>
        </div>
    )
}
