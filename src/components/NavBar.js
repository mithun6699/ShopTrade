import React from 'react'
import './NavBar.css'
import logo from  '../images/logo.svg'
import cartimage from '../images/cart-image.svg'
import profile from  '../images/profile.svg'
import search from '../images/search.png'
import { Link } from 'react-router-dom'
import { useStatevalue } from '../StateProvider'
function NavBar() {
    const [{cart}] = useStatevalue()

    return (
        <div className="navbar">
            <Link to='/'>
            <div className="navbar__logo">
            <img className="navbar__right__search" src={logo} alt=""/>

            </div></Link>
           
            <div className="navbar__center">
                <h5>Shop</h5>
                <h5> About Us</h5>
                <h5>Our Stores</h5>
                <h5>Contact Us</h5>
            </div>
            <div className="navbar__right">
                <div className="navbar__right__icons">
                <p>Search</p>
                <img className="navbar__right__search" src={search} alt=""/>
                <img className="navbar__right__profile" src={profile} alt=""/>
                <div className="cartDetails">
                    <Link to="/cart">
                    <img className="navbar__right__cart"src={cartimage} alt="" />
                    </Link>
              
                <p>{cart.length}</p>
                </div>
            
    
                </div>
             
            </div>
         
        </div>
    )
}

export default NavBar
