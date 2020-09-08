import React from 'react'
import './Checkout.css'
import { useStateValue } from '../Context/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            
            
           {basket?.length===0 ?(
               <div>
                    <div className="checkout_header">
               <h2>Shopping Cart</h2>
               </div>
               <hr></hr>
               <div className="cart">
                   <img className="checkout_img" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"/>
                   <h2>Your Amazon Basket is empty</h2>
               </div>
               </div>
              
           ):(
               <div>
                   <div className="checkout_header">
               <h2>Shopping Cart</h2>
               <p>Price</p> 
               </div>
               <hr></hr>
                   {basket?.map(item=>(
                       <CheckoutProduct
                        id= {item.id}
                        title={item.title}
                        image={item.image}
                        price= {item.price}
                        rating={item.rating}

                       />
                   ))}
   
               </div>
           )}

           <Subtotal/>
        </div>
    )
}

export default Checkout
