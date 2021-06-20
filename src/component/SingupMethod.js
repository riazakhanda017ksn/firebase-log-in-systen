import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";



export default function SingupMethod() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const {signup}=useAuth()
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const history=useHistory()

   const handleSubmit=async(e)=>{
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
    }
    try {
        setLoading(true)
        setError('')
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push('/dashboard')
        console.log('signup',signup);
    } catch{
        setError('Failed to create create an Account')
    }
    setLoading(false)
    }

    return (
        <div className='mt-5'>
       <div>
        <div class="card" style={{width:"60rem;"}}>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <div class="alert alert-danger" role="alert">
         {error}
      </div>
      }
        <div class="card-body">
        <form onSubmit={handleSubmit}>
        <label for="formGroupExampleInput" class="form-label">Email</label>
        <input type="email" name="email" id="email" ref={emailRef} className='form-control' required/> <br />
        <label for="formGroupExampleInput" class="form-label">Password</label>
        <input type="password" name="password" id="password" ref={passwordRef} className='form-control' required/> <br />
        <label for="formGroupExampleInput" class="form-label">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" ref={passwordConfirmRef} className='form-control' required /> <br />
        <button className='btn btn-outline-info' disabled={loading} type='submit'>Sing Up</button>
    </form>
  </div>
    </div>
    <div className="w-100 mt-2 text-center">Already have an account? <Link to='/login'>Log In</Link></div>
</div>

        </div>
    );
};

