import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
const [dark,setDark] = useState(false)
const [cart,setCart] = useState([])
const [name,setName] = useState('')


const goToTop = ()=>{
    window.scrollTo(0,0)
}

const fetchCart = ()=>{
    fetch("https://device-dynasty-server-side.vercel.app/cart")
    .then(res=>res.json())
    .then(data=>{
        setCart(data)
    })
}



document.querySelector("html").setAttribute("data-theme", `${dark ? "dark" : "light"}`); 

const register = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const login = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}
const facebookLogin = () => {
    setLoading(true)
    return signInWithPopup(auth,facebookProvider)
}
const logout = ()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        fetchCart()
        setLoading(false)
    })
    return ()=> unsubscribe()
},[])
    const info = {
        goToTop,
        fetchCart,
        name,
        setName,
     cart,
     setCart,
      user,
      dark,
      setDark,
      loading,
      register,
      login,
      googleLogin,
      facebookLogin,
      logout
    };


    return (
       <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;