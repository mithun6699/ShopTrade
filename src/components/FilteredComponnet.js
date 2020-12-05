import React from 'react'
function FilteredComponnet({setfilteredProducts}) {
    return (
        <div
            style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-around",
            padding: "5px"
        }}>
           
            <button value="" onClick ={(e => setfilteredProducts(e.target.value))}>All Products</button>

            <button value="Denim" onClick ={(e => setfilteredProducts(e.target.value))}>Denim</button>
            <button value="T-shirt" onClick ={(e => setfilteredProducts(e.target.value))}>T-Shirt</button>
            <button
                value="Sweat-Shirts"
                onClick
                ={(e => setfilteredProducts(e.target.value))}>Sweat-Shirts</button>
            <button value="shirt" onClick ={(e => setfilteredProducts(e.target.value))}>Shirt</button>

            <button
                value="Polo Tee Shirts"
                onClick
                ={(e => setfilteredProducts(e.target.value))}>Polo Tee Shirts</button>

            <button value="jacket" onClick ={(e => setfilteredProducts(e.target.value))}>Jackets</button>
        </div>
    )
}

export default FilteredComponnet
