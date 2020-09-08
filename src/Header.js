import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketRounded"
import Topbar from './Components/Topbar'
import './Header'
import {useStateValue} from './Context/StateProvider'

function Header() {

    const [{basket}]= useStateValue();
    return (

        <>
            <nav className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="company logo"/>
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to="/" className="header_Link">
                    <div className="header_option">
                        <span className="header_optionLine1">Hello, Sign in</span>
                        <span className="header_optionLine2">Account & Lists</span>
                    </div>  
                </Link>

                <Link to="/" className="header_Link">
                    <div className="header_option">
                        <span className="header_optionLine1">Returns</span>
                        <span className="header_optionLine2">& Orders</span>
                    </div>  
                </Link>

                <Link to="/" className="header_Link">
                    <div className="header_option">
                        <span className="header_optionLine1">Try</span>
                        <span className="header_optionLine2">Prime</span>
                    </div>  
                </Link>

                <Link to="/checkout" className="header_Link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionLine1 header_basketCount">{basket?.length}</span>
                    </div>  
                </Link>
            
            </div>
            
            
        </nav>
        <Topbar/>
        
        </>
       
        

    )
}

export default Header
