import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" 



const firebaseConfig = {
    apiKey: "AIzaSyDeWVAaxTDE_Qlf2CAjw7Iw6ciy_Npyjd0",
    authDomain: "authentication-user-7a7e5.firebaseapp.com",
    projectId: "authentication-user-7a7e5" ,
    storageBucket: "authentication-user-7a7e5.appspot.com"  ,
    messagingSenderId: "446018146874" ,
    appId:"1:446018146874:web:27f8fe39dac2a3a0755b03" ,
    measurementId: "G-TVGT5V8B7H"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
