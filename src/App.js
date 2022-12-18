import React from 'react'
import data from './components/data/data'
import Header from './components/header/Header'

import { BrowserRouter as Router } from 'react-router-dom'
import Switch from './components/switch/Switch'

const App = () => {
  const {productItems} = data

  return (
    <Router>
      <Header />
      <Switch productItems= {productItems}/>
    </Router>
  )
}

export default App

// 25phut