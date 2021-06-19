import React from 'react';
import AuthProvider from './context/AuthContest';
import SingupMethod from './SingupMethod';



function App() {
  
  return( 
    <AuthProvider>
        <div className='container'>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
          <SingupMethod></SingupMethod>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos eius reiciendis quae animi nihil reprehenderit, commodi quia maxime laboriosam eum cumque exercitationem quod recusandae ea. Quas sed doloribus temporibus?</p>
          </div>
          <div className="col-lg-2"></div>
        </div>
        </div>
        </AuthProvider>
  )
}

export default App;
