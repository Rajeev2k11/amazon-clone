import React from 'react'
import { Link } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./Topbar.css"

function Topbar() {
    return (
        <nav className="topbar">

            {/* location icon start */}
            <Link to="/" className="topbar_Link">
                <div className="topbar_option">
                    <div className="topbar_Location">
                        <LocationOnIcon/>
                        <div>
                            <span className="topbar_optionLine1">Hello</span>
                            <div className="topbar_optionLineTwo">Select your address</div>
                        </div>
                    </div>
                </div>   
            </Link>

            {/* topbar links */}
            
            <div className="topbar_nav">
                <Link to="/" className="tobar_Link">
                    <span className="topbar_optionLine2">Mobiles</span>
                </Link>

                <Link to="/" className="tobar_Link">
                <span className="topbar_optionLine2">Best Sellers</span>
                </Link>

                <Link to="/" className="tobar_Link">
                <span className="topbar_optionLine2">Today's Deals</span>
                </Link>

                <Link to="/" className="tobar_Link">
                <span className="topbar_optionLine2">Computers</span>
                </Link>

                <Link to="/" className="tobar_Link">
                <span className="topbar_optionLine2">Pantry</span>
                </Link>

                <Link to="/" className="tobar_Link">
                <span className="topbar_optionLine2">Books</span>
                </Link>

                <Link to="/" className="tobar_Link">
                <span className="topbar_optionLine2">Gift Ideas</span>
                </Link>

                <Link to="/" className="tobar_Link">
                <span className="topbar_optionLine2">New Releases</span>
                </Link>

                <Link to="/" className="tobar_Link">
                <span className="topbar_optionLine2">Customer Service</span>
                </Link>
            </div>
        </nav>
        
    )
}

export default Topbar
