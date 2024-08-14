import React from 'react'
import { useProductContext } from '../Context.tsx/ProductContext'
import Product from './Product';
const FeatureProducts:React.FC = () => {
    const context = useProductContext();
    if(!context) {//handle the case where the context might be undefined.
        return <p>Loding...</p>
    }
   const {isLoading, featureProducts}=context;
   console.log("this my featuredata",featureProducts);
   
   if(isLoading)
   {
    return <p>Loding...</p>
   }
  
  return (
    <>
      <div className='my-32'>
       <div className='ml-12 my-4 space-y-2'>
       <h1 className='font-semibold text-4xl font-poppins text-primary  '>CHECK NOW!</h1>
        <p className=' text-gray-600'>Our Feature Services </p>
       </div>
        <div className=' grid grid-cols-3 space-x-5'>
        {featureProducts.map((cur)=>{
           return <Product  key={cur.id} {...cur} />   //component
        })}
        </div>
      </div>
    </>
  )
}

export default FeatureProducts
