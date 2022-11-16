import React from 'react'
import demo1 from '../assets/demo1.jpeg'
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"

const Product = observer(props => {
  return (
    <div>
        {/* image Card */}
        <div class=" items-center justify-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="w-full h-48 object-contain rounded-t-lg" src={props.product.image} alt="Images" />    
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.product.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.product.description}</p>
                <div>

                <b>${props.product.price}</b>
                </div>

            <div>
               <Link
                to={`/products/${props.product.id}`}>
                <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </a>
              </Link>

              </div>

            </div>
        </div>

    </div>
  )
})

export default Product