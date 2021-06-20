import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext'

 function Dashboard() {
     const [error,setError]=useState("")
     const {currentUser,logout}=useAuth();
     const history =useHistory()

    const handleLogOut=async()=>{
        setError('')
        try {
            await logout();
            history.push("/login")
        } catch (error) {
            setError('cannot logout')
        }
    }
    return (
        <div className='mt-5'>
        <div>
         <div class="card" style={{width:"60rem;"}}>
      
         <div class="card-body">
         <h2 className="text-center mb-4">Log In</h2>
         {
           error && <div class="alert alert-danger" role="alert">
           {error}
         </div>
          }
         {
           currentUser && <strong>email:{currentUser.email}</strong>
          }
      </div>
      </div>
      <div className="w-100 text-center mt-1">
       <span style={{cursor:'pointer', color:'blue', borderBottom:'1px solid blue'}} onClick={handleLogOut}>Log out</span>
      </div>
      </div>
 
         </div>
    )
}

export default Dashboard