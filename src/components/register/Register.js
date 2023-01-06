import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";

const Register = () => {
  const registerRef = useRef()
  console.log(registerRef);
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [register, setRegister] = useState(initialValue);
  const handleRegister = (e) => {
    e.preventDefault();
    const dataAccount = new FormData(e.target)
    console.log(Object.fromEntries(dataAccount.entries()))
  };
  return (
    <FormContainer>
      <FormContent onSubmit={handleRegister} >
        <TitleH1>
          <span>B</span>
          <span>ô</span>
          <span>n</span>
          <span>g</span>
          <span> </span>
          <span>S</span>
          <span>t</span>
          <span>o</span>
          <span>r</span>
          <span>e</span>
        </TitleH1>
        <p style={{ margin: "0px auto 12px auto", padding: "4px" }}>
          Create a Account
        </p>
        <NameForm>
          <FormInput1>
            <input
              placeholder="First name"
              type={`text`}
              name={`firstName`}
              value={register.firstName}
              onChange={(e) => setRegister({...register, firstName: e.target.value})}
            />
          </FormInput1>
          <FormInput1>
            <input
              placeholder="Last name"
              type={`text`}
              name={`lastName`}
              value={register.lastName}
              onChange={(e) => setRegister({...register, lastName: e.target.value})}
            />
          </FormInput1>
        </NameForm>

        <FormRegister>
          <FormInput2>
            <input
              placeholder="bongstore123@gmail.com"
              type={`text`}
              name={`email`}
              value={register.email}
              onChange={(e) => setRegister({...register,  email: e.target.value})}
            />
          </FormInput2>
          <FormInput2>
            <input
              placeholder="Password"
              type={`password`}
              name={`password`}
              value={register.password}
              onChange={(e) => setRegister({...register,  password: e.target.value})}
            />
          </FormInput2>
          <FormInput2>
            <input
              placeholder="Confirm password"
              type={`password`}
              name={`confirmPassword`}
              value={register.confirmPassword}
              onChange={(e) => setRegister({...register,  confirmPassword: e.target.value})}
            />
          </FormInput2>
        </FormRegister>
        <SubmitButton type="submit">Register</SubmitButton>
      </FormContent>
    </FormContainer>
  );
};

export default Register;

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
  text-align: center;
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

const TitleH1 = styled.div`
  display: block;
  text-align: center;
  margin: 8px 0px;
  font-size: 24px;

  span:first-child {
    color: blue;
  }
  span:nth-child(2) {
    color: orange;
  }
  span:nth-child(3) {
    color: red;
  }
  span:nth-child(4) {
    color: green;
  }
  span:nth-child(6) {
    color: blue;
  }
  span:nth-child(7) {
    color: orange;
  }
  span:nth-child(8) {
    color: red;
  }
  span:nth-child(9) {
    color: green;
  }
  span:nth-child(10) {
    color: orange;
  }
`;
const NameForm = styled.div`
  display: flex;
  justify-content: space-around;
`;
const FormRegister = styled.div`
  display: block;
  margin: 0 auto;
`;
const FormInput1 = styled.div`
  height: 32px;
  width: 140px;
  display: block;
  margin: 0px auto;
  border-bottom: 2px solid black;

  input {
    height: 100%;
    width: 100%;
    padding: 2px 8px;
    border-radius: 6px;
    outline: none;
    border: none;
  }
`;

const FormInput2 = styled.div`
  height: 32px;
  width: 240px;
  display: block;
  margin: 42px auto;

  input {
    height: 100%;
    width: 100%;
    padding: 2px 8px;
    border-radius: 6px;
    outline: none;
    border: 1px solid black;
  }
`;
const SubmitButton = styled.button`
  width: 240px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 6px;
  background: radial-gradient(
    circle,
    rgba(226, 111, 228, 100) 12%,
    rgba(120, 61, 231, 1) 100%
  );

  &:hover {
    cursor: pointer;
  }
`;
