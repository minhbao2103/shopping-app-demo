import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Products from '../products/Products'
import Login from '../login/Login'
import Cart from '../cart/Cart'
const Switch = ({productItems,items,handleAddProduct,handleRemoveProduct}) => {
  return (
    
        <Routes>
           <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}></Route>

           <Route path='/login' element={<Login />}></Route>

           <Route path='/cart' element={<Cart  items={items} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}></Route>
        </Routes>
  
  )
}

export default Switch