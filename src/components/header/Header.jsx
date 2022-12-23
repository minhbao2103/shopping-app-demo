import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
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

            <TitleContent>
            <StyledLink to="/login">Login</StyledLink>
            </TitleContent>

            <TitleContent>
            <StyledLink to="/cart" ><AiOutlineShoppingCart /></StyledLink>
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
    background: #D8D8D8;
    z-index: 10;
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
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
