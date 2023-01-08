import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import data from "./components/data/data";
import Header from "./components/header/Header";
import Switch from "./components/switch/Switch";
import { auth } from "./components/fisebase-config/Firebase-config"
import { signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { productItems } = data;
  const [items, setItems] = useState([]);
  const [email, setEmail] = useState({ string: "", hasError: false });
  const [password, setPassword] = useState({ string: "", hasErrorPass: false });
  const [user,setUser] =useState({})
  const navigate = useNavigate()

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email.string,
        password.string
        );
        navigate('/')
    } catch (error) {
        alert('email or password is not correct, please try again.')
      }

    
};

  useEffect(() => {
    onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser)
  })
   },[])
 
  const handleSubmitAccount = (e) => {
    e.preventDefault();
    const dataAccount = new FormData(e.target)
  //  console.log(Object.fromEntries(dataAccount.entries()))
    setEmail({...email, string:''})
    setPassword({...password, string:''})
  };


  const handleAddProduct = (product) => {
    const productsExist = items.find((item) => item.id === product.id);
    if (productsExist) {
      console.log(productsExist.quantity);
      setItems(
        items.map((item) =>
          item.id === product.id
            ? { ...productsExist, quantity: productsExist.quantity + 1 }
            : item
        )
      );
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productsExist = items.find((item) => item.id === product.id);
    if (productsExist.quantity === 1) {
      setItems(items.filter((item) => item.id !== product.id));
    } else {
      setItems(
        items.map((item) =>
          item.id === product.id
            ? { ...productsExist, quantity: productsExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div>
      <Header items={items} user={user}/>
      <Switch
        productItems={productItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        items={items}
        handleSubmitAccount={handleSubmitAccount}
        email= {email}
        setEmail={setEmail}
        password = {password}
        setPassword={setPassword}
        login={login}
        user={user}
      />
    </div>

  );
};

export default App;
