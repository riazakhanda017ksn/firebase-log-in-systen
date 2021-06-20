import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'

const AuthContext =React.createContext()

export function AuthProvider({children}) {
    const [loading,setLoading]=useState(true)

    const [currentUser,setCurrentUser]=useState()

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    };
    const login=(email,password)=>{
        return auth.signInWithEmailAndPassword(email, password)
    };
    const logout=()=>{
      return  auth.signOut()
    };
    const resetPassword=(email)=>{
    return auth.sendPasswordResetEmail(email)
    };
    useEffect(()=>{
     const unsubscribe =auth.onAuthStateChanged((user)=>{
       setCurrentUser(user)
       setLoading(false)
     })
     return unsubscribe
    },[])

    const value={
        currentUser,
        signup,
        login,
        logout,
        resetPassword
    }
    return (
     <AuthContext.Provider value={value}>
     {children}
     </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}


