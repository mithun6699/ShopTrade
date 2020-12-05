import React, {useState} from 'react'
import {useStatevalue} from '../StateProvider'
import './singleproduct.css'
function SingleProduct({
    name,
    vendor,
    imageUrl,
    price,
    id,
    sizes
}) {
    const [showaddCart,
        setshowaddCart] = useState(false)
    const [
        {
            cart
        },
        dispatch] = useStatevalue()
    const addtoCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                name: name,
                image: imageUrl,
                price: price
            }
        })
    }
    return (
        <div className="singleproduct">

            <div
                onMouseOver={() => setshowaddCart(!showaddCart)}
                onMouseOut={() => setshowaddCart(!showaddCart)}>
                <img className="singleproduct__productimage" src={imageUrl} alt=""/>

                <div className="singleproduct__addtocart">
                    <button onClick={addtoCart}>Add to Cart</button>
                    {showaddCart && <div>
                        <p>Available Sizes:
                        </p>
                        {sizes.map(size => <h5 className="singleproduct__sizes">{size.value}</h5>)}
                    </div>}

                </div>
                <h6 >{vendor}
                </h6>
                <p className="productname">{name}</p>
                <p>${price}
                    <span
                        style={{
                        textDecorationLine: "line-through",
                        color: "grey"
                    }}>1200</span>
                    <span style={{
                        color: "red"
                    }}>(50% OFF)</span>
                </p>
            </div>
        </div>

    )
}

export default SingleProduct
