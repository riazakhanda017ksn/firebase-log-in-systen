import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Dashboard from './Dashboard';
import ForgetPassword from './ForgetPassword';
import Login from './Login';
import SingupMethod from './SingupMethod';



function App() {
  
  return( 
    
        <div className='container'>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
          <Router>
            <Switch>
              <Route exact path="/dashboard">
              <Dashboard></Dashboard>
              </Route>
              <Route exact path="/signup">
              <SingupMethod></SingupMethod>
              </Route>
              <Route exact path="/login">
              <Login></Login>
              </Route>
              <Route exact path="/forget-password">
              <ForgetPassword></ForgetPassword>
              </Route>
            </Switch>
          </Router>
          
          </div>
          <div className="col-lg-2"></div>
        </div>
        </div>
      
  )
}

export default App;
