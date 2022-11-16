import React from 'react'
import Product from './Product'
import {map} from "lodash"
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from "../Hooks/useStore";


const Products = observer (() => {

  const {
    rootStore: { productsStore },
  } = useStore();

  useEffect(() => {
    productsStore.fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=''>
        <div className='grid md:grid-cols-3 gap-4 lg:grid-cols-3 sm:grid-cols-2 '>
            {map(productsStore.getProducts, (p,index)=>(
                    <Product product={p} key={index} />
                ))}
        </div>
    </div>
  )
})

export default Products