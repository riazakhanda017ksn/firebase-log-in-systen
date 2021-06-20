import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const {login}=useAuth()
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const history =useHistory()

    ///handle_submit
    const handleSubmit =async(e) =>{
        e.preventDefault()
        try {
           setLoading(true);
           setError("")
           await login(emailRef.current.value, passwordRef.current.value)
           history.push("/dashboard")
        } catch (error) {
            setError("failed to Log In")
        }
        setLoading(false)
    }
    return (
        <div className='mt-5'>
        <div>
         <div class="card" style={{width:"60rem;"}}>
         <h2 className="text-center mb-4">Log In</h2>
         {
           error && <div class="alert alert-danger" role="alert">
           {error}
         </div>
          }
         <div class="card-body">
         <form onSubmit={handleSubmit}>
         <label for="formGroupExampleInput" class="form-label">Email</label>
         <input type="email" name="email" id="email" ref={emailRef} className='form-control' required/> <br />
         <label for="formGroupExampleInput" class="form-label">Password</label>
         <input type="password" name="password" id="password" ref={passwordRef} className='form-control' required/> <br />
         <button className='btn btn-outline-info' disabled={loading} type='submit'>Log In</button>
     </form>
     <div className="w-100 mt-3 text-center"> <Link to='/forget-password'>Forget Password?</Link></div>
   </div>
     </div>
     <div className="w-100 mt-2 text-center">Not registered yet? <Link to='/signup'>Sign Up</Link></div>
 </div>
 
         </div>
    )
}

export default Login