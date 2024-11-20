import React from 'react'
import { useFilterContext } from "../Context.tsx/FilterContext";
import Product from './Product';
const ProductList = () => {
  const {filterProducts}=useFilterContext();

  console.log(" this is final product ", filterProducts)
  return (
    
    <div className=' grid grid-cols-3 gap-8 mt-12'>
      {filterProducts.map((cur:any)=>{
        return  <Product  key={cur.id} {...cur} />  //  {...cur} -- it is used to pass all properties of the cur object as props to the Product component.
      })}
    </div>
  )
}

export default ProductList
