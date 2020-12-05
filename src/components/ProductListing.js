import React, { useState } from 'react'
import FilteredComponnet from './FilteredComponnet'
import './ProductListing.css'
import SingleProduct from './SingleProduct'
function ProductListing(props) {
const [filteredProducts,setfilteredProducts] = useState("")
    const filterdData =  filteredProducts && (props.data.filter((i)=> i.tag === filteredProducts))
    


// console.log(filterByVendor)
console.log(props.data.map(i=>(i.tag)))
    return (
        <div>
        <div className="productfilters">
    <h6>Total Products available {props.data.length}</h6>
    {filterdData &&

    <h6> Found <span style={{color:"green",fontSize:"16px"}}>{filterdData.length}</span> Products</h6>

    }
        <h5>Filters</h5>
            <div className="filteroptions">
            {/* <button value = "" onClick ={ (e => setfilteredProducts(e.target.value))}>All Products</button>

            <button value = "Denim" onClick ={ (e => setfilteredProducts(e.target.value))}>Denim</button>
            <button  value = "T-shirt" onClick ={ (e => setfilteredProducts(e.target.value))}>T-Shirt</button>
            <button  value = "Sweat-Shirts" onClick ={ (e => setfilteredProducts(e.target.value))}>Sweat-Shirts</button>
            <button  value = "shirt" onClick ={ (e => setfilteredProducts(e.target.value))}>Shirt</button>

            <button  value = "Polo Tee Shirts" onClick ={ (e => setfilteredProducts(e.target.value))}>Polo Tee Shirts</button>
            
            <button  value = "jacket" onClick ={ (e => setfilteredProducts(e.target.value))}>Jackets</button> */}
                   
<FilteredComponnet setfilteredProducts={setfilteredProducts} />
     
          
            </div>
        
     

        </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      {filterdData.length>0 ?  
      filterdData.map(i=>(<SingleProduct  key ={i.id}name={i.name} vendor={i.vendor} price={i.price} id={i.id} sizes={i.options} imageUrl={i.image_src}/>))
      : props.data.map(i=>(<SingleProduct  key ={i.id}name={i.name} vendor={i.vendor} price={i.price} id={i.id} sizes={i.options} imageUrl={i.image_src}/>))}

      </div>
           
    
        
        </div>
  
    )
}

export default ProductListing
