import React from 'react'
import LoanProgram from './LoanProgram';
import AdminAddLoan from './AdminAddLoan'
import ViewManager from './ViewManager'
import AddManager from './AddManager'
import AdminClients from './AdminClients'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import EditLoanProgram from './EditLoanProgram'



function Admin() {
    return (
        <div  >
           

           <Router>

<ul class="nav nav-tabs  "  style={{background:"#ecc6ec"}}>
  <li class="nav-item mx-5">
  <Link to={'/LoanProgram'} className="nav-link  "   style={{color:"#3b123b"}}>Loan Programs</Link> 
   </li>
  <li class="nav-item mx-5">
  <Link to={'/ViewManager'} className=" nav-link " style={{color:"#3b123b"}}>View Managers</Link>
  </li>
  <li class="nav-item mx-5">
  <Link to={'/AdminAddLoan'} className=" nav-link " style={{color:"#3b123b"}}>Add LoanProgram</Link> 
  </li>
 <li class="nav-item mx-5">
 <Link to={'/AddManager'} className=" nav-link" style={{color:"#3b123b"}}>Add Manager</Link>
  </li> 
  <li class="nav-item mx-5">
  <Link to={'/AdminClients'} className="  nav-link" style={{color:"#3b123b"}}>Show User Status</Link>
  </li> 
</ul>
<Switch>
<Route path='/EditLoanProgram/:id' component={EditLoanProgram}/>
  <Route  path='/LoanProgram' component={LoanProgram}/>
  <Route path='/ViewManager' component={ViewManager}/>
  <Route path='/AdminAddLoan' component={AdminAddLoan}/>
  <Route   path='/AddManager' component={AddManager}/>
  <Route path='/AdminClients' component={AdminClients}/> 
  <Route path='/Admin/Admin' component={LoanProgram}/> 
  
</Switch>
      
</Router>
            
              
           
            </div>
      
    )
}

export default Admin
