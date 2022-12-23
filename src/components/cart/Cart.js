import React from 'react'

const Cart = ({ items,handleRemoveProduct,handleAddProduct }) => {
const totalPrice = items.reduce((price, item) => price + item.quantity * item.price , 0 )



  return (
    <div>
    <div>
    {items.length === 0 && <div> no items add...</div>}
    </div>

    <div>
        {items.map((item,index) => {
          return <div key={item.id}>
          <img style={{height:'320px'}}src={item.image} alt={`item.name`}/>
          <button onClick={() => handleAddProduct(item)}>Add</button>
          <button onClick={() => handleRemoveProduct(item)}>Xoa</button>

          <div>
           Price: ${item.quantity * item.price}
          </div>
          </div>
        })}
    </div>
  <div> total price: $ 
        {totalPrice}
  </div>
    </div>
  )
}

export default Cart