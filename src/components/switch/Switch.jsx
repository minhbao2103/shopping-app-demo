import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Products from '../products/Products'
import Login from '../login/Login'
import Cart from '../cart/Cart'

const Switch = ({productItems,items,handleAddProduct,handleRemoveProduct,handleSubmitAccount,email,password, setEmail,setPassword,login,user}) => {
  return (
    
        <Routes>
           <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}></Route>

           <Route path='/login' element={<Login handleSubmitAccount={handleSubmitAccount} email={email} setEmail={setEmail} password={password} setPassword={setPassword} login={login} user={user}/>}></Route>
           {/* <Route path='/register' element={<Register />}></Route> */}
           <Route path='/cart' element={<Cart  items={items} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}></Route>
        </Routes>
  
  )
}

export default Switch