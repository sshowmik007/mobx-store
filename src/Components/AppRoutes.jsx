import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp';
import AllProducts from './AllProducts';
import ProductView from './ProductView';
import Checkout from './Checkout';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate replace to ="/products"/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path="/products/:productId" element={<ProductView />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  )
}

export default AppRoutes