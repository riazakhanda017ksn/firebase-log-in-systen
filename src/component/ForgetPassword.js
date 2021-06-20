import React, { useRef } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext'

 function ForgetPassword() {
     const emailRef=useRef();
     const {resetPassword}=useAuth()
     const [error,setError] =useState("")
     const [loading,setLoading] =useState(false)
     const [message,setMessage] =useState("")
     const handleSubmit = async(e)=>{
         e.preventDefault()

         try {
             setMessage("")
             setLoading(true)
             setError("");
             await resetPassword(emailRef.current.value);
             setMessage('check your inbox for further instructor')
         } catch (error) {
             setError('failed to reset password')
         }
         setLoading(false)
     }
    return (
        <div className='mt-5'>
        <div>
         <div class="card" style={{width:"60rem;"}}>
         <h2 className="text-center mb-4">Password Reset</h2>
         {
           error && <div class="alert alert-danger" role="alert">
           {error}
         </div>
          }
         {
           message && <div class="alert alert-success" role="alert">
           {message}
         </div>
          }
         <div class="card-body">
         <form onSubmit={handleSubmit}>
         <label for="formGroupExampleInput" class="form-label">Email</label>
         <input type="email" name="email" id="email" ref={emailRef} className='form-control' required/> <br />

         <button className='btn btn-outline-info' disabled={loading} type='submit'>Reset password</button>
     </form>
     <div className="w-100 mt-3 text-center"> <Link to='/forget-password'>Log In</Link></div>
   </div>
     </div>
     <div className="w-100 mt-2 text-center">Not registered yet? <Link to='/signup'>Sign Up</Link></div>
 </div>
 
         </div>
    )
}

export default ForgetPassword