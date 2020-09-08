import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { getBasketTotal } from '../Context/reducer'; 

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>Subtotal ({basket.length} items): <strong>{`${value}`}</strong></p>
                        <small className='subtotal_gift'>
                            <input type='checkbox'/>This order contain a gift
                        </small>
                    </> 
                )
                }
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator= {true} 
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
