import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

const AuthContest = React.createContext()

export  function useAuth(){
  return useContext(AuthContest)
}

export default function AuthProvider({children}){
    const[currentUser,setCurrentUser]=useState()
    // const [loading,setLoading]=useState(true)

    function signup (email,password){
        return auth.createUserWithEmailAndPassword(email, password)
      }
      useEffect(()=>{
     const unsubscribe=auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
        })
        return unsubscribe
    },[])
    const value ={
        currentUser,
        signup
    }
    return (
        <AuthContest.Provider value={value}>
            {children}
        </AuthContest.Provider>
    );
};

