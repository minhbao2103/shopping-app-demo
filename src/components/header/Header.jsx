import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from "react-icons/ai"


const Header = ({items,user}) => {
    console.log(user);
  return (
    <HeaderContainer>
        <BongHome>
            <TitleHome>
            <StyledLink to="/" >Bông Store</StyledLink>
            </TitleHome>
        </BongHome>

        <HeaderContent>
            <TitleContent>
            <StyledLink to="/" >Products</StyledLink>
            </TitleContent>

            <TitleContent style={{width:'140px',whiteSpace:'no-wrap',overflow:'hidden',  textOverflow:'ellipsis' }}>
            <StyledLink to="/login"> {user ? user.email : 'Login'}</StyledLink>
            </TitleContent>

            <TitleContent>
            <StyledLink to="/cart" ><AiOutlineShoppingCart />
                {items.lenght === 0 
                ? <span></span> 
                : <span style={{border:' 1px solid black',borderRadius:'50%', }}
                ><span style={{display:'inline-block', height:'24px', width:'24px',textAlign:'center',color:'red'}}>{items.length}</span></span>} 
            </StyledLink>
            </TitleContent>

        </HeaderContent>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    max-height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    background: #6f77e2;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const BongHome = styled.div`
    line-height: 80px;
    top: 0;
    width: 180px;
    max-height: 80px;
    margin: 0px 24px;

    @media screen and (max-width: 550px) {
        width: 160px;
        margin: 0px 8px;
    }
`
const HeaderContent = styled.div`
    line-height: 80px;
    top: 0;
    max-height: 80px;
    width: 360px;
    display: flex;
    justify-content: space-between;
    margin: 0px 24px;

    @media screen and (max-width: 550px) {
       width:220px;
       margin: 0px 8px;
    }
`
const TitleHome = styled.h1`

    @media screen and (max-width: 550px) {
        font-size: 20px;
        padding-left: 12px;
        margin: 0px 12px;
    }
 
`

const TitleContent = styled.h3`
       padding: 0 12px;

    @media screen and (max-width: 550px) {
        font-size: 16px;
        padding: 0px 4px;
        width: 100px;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

