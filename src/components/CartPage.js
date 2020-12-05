import React from 'react'
import { getCartTotal } from '../reducer'
import { useStatevalue } from '../StateProvider'
import './CartPage.css'
function CartPage() {
    const [{cart}] = useStatevalue()


    return (
        <div className="cartpage" >

            <div className="cartpage__items__left">
            <h1 className="cartpage__heading">Cart Page Details</h1>

            {cart.map(eachitem=>(
                <div style={{display:"flex"}}>
                <img style={{height:"60px",padding:"5px"}} src={eachitem.image} alt=""/>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",padding:"8px"}}>
               <h6>{eachitem.name}</h6>
                <h6> $ {eachitem.price}</h6>
                </div>
               
                </div>
            ))}
            </div>
            <div className="cartpage__items__right">
                <div style={{padding:"25px",border:"2px solid black"}}>
                <h1>Total Cart Price</h1>
    <h1>$ {getCartTotal(cart)}</h1>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button className="cartpage__items__right__payment_btn">Payment</button>

    </div>
                </div>

           
            </div>
         
        </div>
    )
}

export default CartPage
