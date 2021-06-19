import React, { useRef, useState } from "react";
import { useAuth } from "./context/AuthContest";

export default function SingupMethod() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const {signup,currentUser}=useAuth
    const [error,setError]=useState()
    const [loading,setLoading]=useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    if(passwordRef.current.value !== confirmPasswordRef.current.value){
        return setError('password do not match')
    }
    try {
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
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
        {currentUser && currentUser.email}
        {error && <div class="alert alert-secondary" role="alert">
   {error}
</div>}
        <div class="card-body">
        <form onSubmit={handleSubmit}>
        <label for="formGroupExampleInput" class="form-label">Email</label>
        <input type="email" name="email" id="email" ref={emailRef} className='form-control' required/> <br />
        <label for="formGroupExampleInput" class="form-label">Password</label>
        <input type="password" name="password" id="password" ref={passwordRef} className='form-control' required/> <br />
        <label for="formGroupExampleInput" class="form-label">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" ref={confirmPasswordRef} className='form-control' required /> <br />
        <button className='btn btn-outline-info' disabled={loading} type='submit'>Sing Up</button>
    </form>
  </div>
    </div>
    <div className="w-100 mt-2 text-center">Already have an account</div>
</div>

        </div>
    );
};

