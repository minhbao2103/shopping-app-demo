import React from 'react'
import styled from 'styled-components'

const Cart = ({ items,handleRemoveProduct,handleAddProduct }) => {
      const totalPrice = items.reduce((price, item) => price + ( item.quantity * item.price ) , 0 )

  return (
    <ProductContainer>
    <ProductNotification>
    {items.length === 0 && <div> no items add...</div>}
    </ProductNotification>

         <div><h3 style={{borderBottom:'2px solid #d8d8d8',
                          paddingBottom:'8px'}}
                          >CART ITEMS</h3></div>
    <ProductItemContent>

        {items.map((item,index) => {
          return <ProductItem key={item.id}>
          <img src={item.image} alt={`item.name`}/>
          <p>{item.name}</p>
          <button onClick={() => handleAddProduct(item)}>+</button>
          <button onClick={() => handleRemoveProduct(item)}>-</button>

          <div>
           Price: ${item.quantity * item.price}
          </div>
          </ProductItem>
        })}
    </ProductItemContent>
  <TotalPrice> Total price: $ 
        {totalPrice}
  </TotalPrice>
    </ProductContainer>
  )
}

export default Cart

const ProductContainer = styled.div`
  text-align: center;
  padding: 12px 0;
  margin: 8px 0;
  display: block;
  overflow: auto;
  margin-left: auto;
  margin-right: auto;
  height: 600px;
  width: 50%;
  border : 2px solid #D8D8D8;
  
  @media screen and (max-width: 1000px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
`

const ProductNotification = styled.div`
  text-align: center;
`

const ProductItem = styled.div`
  display: flex;
  padding: 4px 0;
  height: auto;
  justify-content: space-between;
 
  @media screen and (max-width: 400px) {
    padding: 4px 0;

    p {
    width: 140px;
   }

   img {
    height: 120px;
    width: 140px
  }
   
  button {
    width: 40px;
    height: 24px;
  }
  
  }

  img {
    height: 120px;
    width: 160px;
    background: #eee;
  box-shadow: 0 8px 8px -4px #C0C0C0;
  }

  p {
    width: 180px;
  }

  button {
    width: 40px;
    height: 24px;
    font-weight: 500;
  }
`
const ProductItemContent = styled.div`
 
`

const TotalPrice = styled.div`
  background: #d8d8d8;
  padding: 4px 0;
  font-size: 18px;
`