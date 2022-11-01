import React from 'react'
import Product from './Product'
import {map} from "lodash"


const Products = () => {
  return (
    <div className=''>
        <div className='grid md:grid-cols-3 gap-4 lg:grid-cols-3 sm:grid-cols-2 '>
            {map([1,2,3,4,5,6], (p,index)=>(
                    <Product key={index} />
                ))}
        </div>
    </div>
  )
}

export default Products