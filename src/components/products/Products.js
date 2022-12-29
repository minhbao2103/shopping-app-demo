import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Products = ({productItems,handleAddProduct}) => {


  return (
    <Container>
        <ContentContainer>
            {productItems.map((productItem,index) => (
                <ContentProductItem key={index}>
                    <Logo src={productItem.image} alt="" />
                    <h3>{productItem.name}</h3>
                    <p>Price: ${productItem.price}</p>
                    <button onClick={() => handleAddProduct(productItem)}>Add to cart</button>
                </ContentProductItem>
            ) )}
        </ContentContainer>
    </Container>
  )
}

export default Products

const Container = styled.div`
    height: auto;
    width: 100%;
`
const ContentContainer =styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media screen and (max-width: 710px) {
    margin-left: 140px;
  }
  @media screen and (max-width: 510px) {
    margin-left: 60px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 24px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 28px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 16px;
  }
  @media screen and (max-width: 270px) {
    margin-left: 8px;
  }
`
const ContentProductItem = styled.div`
    height:440px;
    width: 360px;
    border:  none;
    box-shadow: 2px 2px 2px 2px #E0E0E0;
    padding: 8px;
    margin: 8px 4px;
    &:hover{
        cursor: pointer;
        transform: scale(0.98);
        transition: all 0.2s linear;
    }

    h3 {
        color: red;
        padding: 2px;
    }

    p{
        padding: 2px;
    }

    button {
        color: white;
        height: 32px;
        width: 100%;
        border: none;
        border-radius: 8px;
        background: #17B169;
        margin-top: 16px;
        font-weight: bold;
        &:hover{
            cursor: pointer;
        }

        @media screen and (max-width: 400px) {
        margin-top:4px;
        }      
    }

    @media screen and (max-width: 400px) {
    height:420px;
    width: 320px;
  } 
`
const Logo = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    user-drag: none;
`