import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Products from '../products/Products'
import Login from '../login/Login'
import Cart from '../cart/Cart'
import Register from '../register/Register'
const Switch = ({productItems,items,handleAddProduct,handleRemoveProduct,handleSubmitAccount}) => {
  return (
    
        <Routes>
           <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}></Route>

           <Route path='/login' element={<Login handleSubmitAccount={handleSubmitAccount} />}></Route>
           <Route path='/register' element={<Register />}></Route>
           <Route path='/cart' element={<Cart  items={items} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}></Route>
        </Routes>
  
  )
}

export default Switch