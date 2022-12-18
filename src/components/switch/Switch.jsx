import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Products from '../products/Products'
import Login from '../login/Login'
import Cart from '../cart/Cart'
const Switch = ({productItems}) => {
  return (
    
        <Routes>
           <Route path='/' element={<Products productItems={productItems} />}></Route>

           <Route path='/login' element={<Login />}></Route>

           <Route path='/cart' element={<Cart />}></Route>
        </Routes>
  
  )
}

export default Switch