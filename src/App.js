import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'

import data from './components/data/data'
import Header from './components/header/Header'
import Switch from './components/switch/Switch'

const App = () => {
  const {productItems} = data

  const [items,setItems] = useState([])

  const handleAddProduct = (product) => {
    const productsExist = items.find((item) => item.id === product.id)
    if(productsExist) {
      console.log(productsExist.quantity)
      setItems(items.map((item) => item.id === product.id 
              ? {...productsExist, quantity: productsExist.quantity + 1 }
              : item
      ))
    
    }else {
      setItems([...items, {...product, quantity: 1}])
      }
  }

  const handleRemoveProduct = (product) => {
    const productsExist = items.find((item) => item.id === product.id)
    if(productsExist.quantity === 1) {
        setItems(items.filter((item) => item.id !== product.id))
    }else {
      setItems(
        items.map((item) => item.id === product.id ? {...productsExist, quantity: productsExist.quantity - 1} : item)
      )
    }
  }

  return (
    <Router>
      <Header items={items} />
      <Switch productItems= {productItems} handleAddProduct={handleAddProduct}  handleRemoveProduct={handleRemoveProduct} items={items}/>
    </Router>
  )
}

export default App

