import React from "react";
import { useState } from "react";
import Register from "../register/Register";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { useRef } from "react";

const Login = ({ handleSubmitAccount }) => {
  const [email, setEmail] = useState({ string: "", hasError: false });
  const [password, setPassword] = useState({ string: "", hasErrorPass: false });
  console.log(password);
  const refEmail = useRef();

  const handleBlurUsername = (e) => {
    let hasError = false;
    const valueEmail = e.target.value;
    const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (!regexEmail.test(valueEmail)) {
      hasError = true;
    }
    setEmail((currentValue) => ({
      ...currentValue,
      hasError,
    }));
  };

  const handleBlurPassword = (e) => {
    let hasErrorPass = false;
    const valuePassword = e.target.value;
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if ( !regexPassword.test(valuePassword)) {
       hasErrorPass = true;
    }
    setPassword((currentValue) => ({
      ...currentValue,
      hasErrorPass,
    }));
    
  };

  return (
    <FormContainer>
      <FormContent onSubmit={handleSubmitAccount}>
        <TitleDiv>
          <h1>Login</h1>
        </TitleDiv>
        <LoginForm>
          <FormInput>
            <h5>Email</h5>
            <div style={{ display: "flex", borderBottom: "2px solid gray" }}>
              <BsPerson style={{ display: "block", margin: "12px auto" }} />
              <input
                type={`text`}
                placeholder={`Type your username`}
                name={`email`}
                onChange={(e) => {
                  setEmail({ ...email, string: e.target.value });
                }}
                value={email.string}
                onBlur={handleBlurUsername}
                ref={refEmail}
              />
            </div>
            {email.hasError && (
              <ErrorMessage>Please enter a valid username.</ErrorMessage>
            )}
          </FormInput>
          <FormInput>
            <h5>Password</h5>
            <div style={{ display: "flex", borderBottom: "2px solid gray" }}>
              <RiLockPasswordLine
                style={{ display: "block", margin: "12px auto" }}
              />
              <input
                type={`password`}
                placeholder={`Type your password`}
                name={`password`}
                value={password.string}
                onChange={(e) => {
                  setPassword({ ...password, string: e.target.value });
                }}
                onBlur={handleBlurPassword}
              />
            </div>
            {password.hasErrorPass && (
              <ErrorMessage>
              Password is not correct.
              </ErrorMessage>
            )}
            <div
              style={{
                display: "block",
                margin: "4px auto",
                padding: "4px",
                textAlign: "center",
              }}
            >
              <a href="/" style={{ color: "black", textDecoration: "none" }}>
                Forgot password?
              </a>
            </div>
          </FormInput>
          <LoginButton type={`submit`}>
            <h3>Login</h3>
          </LoginButton>
        </LoginForm>

        <div
          style={{
            display: "block",
            margin: "84px 0px auto",
            textAlign: "center",
          }}
        >
          <p>Or Sign Up Using</p>
        </div>

        <div
          style={{
            display: "block",
            margin: "8px 0px auto",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          <FaFacebook style={{ margin: "0px 8px" }} />
          <AiFillTwitterCircle style={{ margin: "0px 8px" }} />
          <SiYoutubemusic style={{ margin: "0px 8px" }} />
        </div>

        <div
          style={{
            display: "block",
            margin: "8px 0px auto",
            textAlign: "center",
          }}
        >
          <p>Or</p>
        </div>
        <div
          style={{
            display: "block",
            margin: "8px 0px auto",
            textAlign: "center",
          }}
        >
          <a
            href="/register"
            style={{
              fontWeight: "500",
              textDecoration: "none",
              color: "black",
            }}
          > <p style={{fontWeight:'400'}}>Create account</p>
          </a>
        </div>
      </FormContent>
    </FormContainer>
  );
};

export default Login;

const FormContainer = styled.div`
  padding-top: 48px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const FormContent = styled.form`
  height: 500px;
  width: 30%;
  display: block;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 12px;
  background: white;
  @media screen and (max-width: 1080px) {
    width: 40%;
  }
  @media screen and (max-width: 800px) {
    width: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;
const TitleDiv = styled.div`
  display: block;
  text-align: center;
  margin: 8px 0px;
  padding: 4px 0px;
`;
const LoginForm = styled.div`
  height: 200px;
  width: 80%;
  display: block;
  margin: 4px auto;
`;
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
`;
const LoginButton = styled.button`
  display: block;
  margin: 52px auto;
  height: 40px;
  width: 70%;
  border: none;
  border-radius: 12px;
  text-align: center;
  background: radial-gradient(
    circle,
    rgba(226, 111, 228, 100) 12%,
    rgba(120, 61, 231, 1) 100%
  );

  h3 {
    font-weight: 600;
    color: white;
  }

  &:hover {
    cursor: pointer;
  }
`;
const ErrorMessage = styled.span`
  color: red;
  display: block;
  margin: 0 auto;
  font-size: 14px;
  text-align: center;
`;
