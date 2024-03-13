import {  createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase";


 export  const AuthContext = createContext()
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider()


const Provider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
 
    // create user
    // const registration = (email, password) =>{
    //     setLoading(true)
    //   return  createUserWithEmailAndPassword(auth,email,password)
    // }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const signin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sing in
    const googleSignin = () =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    // update name
    const updateName = (name, photoUrl) => {
        setLoading(true)
      return  updateProfile(auth.currentUser , { displayName: name, photoURL: photoUrl })
    }

    // logout 
    const logOut = () => {
        setLoading(true)
      return  signOut(auth)
    }


    // manage user 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const value = {
        user,
        loading,
        createUser,
        signin,
        googleSignin,
        updateName,
        logOut,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;