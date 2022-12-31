import React from 'react'
import styled from 'styled-components'
import {BsPerson} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {SiYoutubemusic} from 'react-icons/si'

const Login = () => {
  return (
   <FormContent>
    <TitleDiv><h1>Login</h1></TitleDiv>
      <LoginForm>
    <FormInput>
      <h5>UserName</h5>
      <div style={{display:'flex',borderBottom:'2px solid gray'}}>
      <BsPerson style={{display:'block', margin:'12px auto'}}/>
      <input type={`text`} placeholder={`vui long nhap tai khoan`}/>
      </div>
    </FormInput>
    <FormInput>
     <h5>Password</h5>
     <div style={{display:'flex',borderBottom:'2px solid gray'}}>
      <RiLockPasswordLine style={{display:'block', margin:'12px auto'}}/>
      <input type={`text`} placeholder={`vui long nhap tai khoan`}/>
      </div>
      <div style={{display:'block',margin:'8px auto',padding:'4px',textAlign:'center'}}>
        <a href='/' style={{color:'black',textDecoration:'none'}} >Forgot password?</a>
      </div>
    </FormInput>
      </LoginForm>
    <LoginButton><h3>Login</h3></LoginButton>

    <div style={{display:'block',margin:'24px 0px auto',textAlign:'center'}}
        ><p>Or Sign Up Using</p></div>

    <div style={{display:'block',margin:'8px 0px auto',textAlign:'center', fontSize:'24px'}}
        >
          <FaFacebook style={{margin:'0px 8px'}}/>
          <AiFillTwitterCircle style={{margin:'0px 8px'}}/>
          <SiYoutubemusic style={{margin:'0px 8px'}}/>
        </div>

    <div style={{display:'block',margin:'8px 0px auto',textAlign:'center'}}
        ><p>Or</p></div>
     <div style={{display:'block',margin:'8px 0px auto',textAlign:'center'}}
        ><a href='/' style={{fontWeight:'500', textDecoration:'none',color:'black'}}>SIGN UP</a></div>
   </FormContent>
  )
}

export default Login

const FormContent = styled.form`
  height: 500px;
  width: 30%;
  display: block;
  margin: 48px auto;
  border: 1px solid black;
  border-radius: 12px;
`
const TitleDiv = styled.div`
  display: block;
  text-align: center;
  margin: 8px 0px;
  padding: 4px 0px;
`
const LoginForm = styled.div`
  height: 200px;
  width: 80%;
  display: block;
  margin: 4px auto;
`
const FormInput = styled.div`
  height: 80px;
  width: 90%;
  display: block;
  margin: 12px auto;

  h5 {
    padding: 4px;
    font-weight: 500;
  }
  input {
    height: 42px;
    width: 90%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    border: none;
    outline: none;
  }
`
const LoginButton = styled.button`
  display: block;
  margin: 4px auto;
  height: 40px;
  width: 70%;
  border:none;
  border-radius: 12px;
  text-align: center;
  background: radial-gradient(circle, rgba(226,111,228,100) 12%, rgba(120,61,231,1) 100%);

  h3 {
    font-weight: 600;
    color: white;
  }

  &:hover {
    cursor: pointer;
  }
`