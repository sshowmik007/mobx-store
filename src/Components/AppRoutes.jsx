import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp';
import AllProducts from './AllProducts';
const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate replace to ="/products"/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default AppRoutes