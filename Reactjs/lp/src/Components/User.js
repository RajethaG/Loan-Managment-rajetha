import React  from 'react'   
import{useLocation} from'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Edit from './Edit'
import Balance from './Balance'
import Loan from './Loan'
import UserLoanProgram from './UserLoanProgram'
import LoadStatus from './LoadStatus'
import Calculator from '../EMI/Calculator'
import Login from './Login'

function User() {  
 
    const search=useLocation().search;
    const valuess=new URLSearchParams(search).get('id');

    const Name=new URLSearchParams(search).get('Name');
  

         
        
  return (  

        
         
         <Router>

<ul class="nav nav-tabs"   style={{background:"#ecc6ec"}}>
  <li class="nav-item mx-5">
  <Link   to={'/HomeLoan' +'?id='+valuess} className="nav-link" style={{color:"#3b123b"}}>Apply Loan</Link>  
 
  </li> 
  <li class="nav-item mx-5">
  <Link to={'/Edit/'+valuess} className="nav-link" style={{color:"#3b123b"}}>Update Profile</Link>
  </li>
  
  <li class="nav-item mx-5">
  <Link to={'/UserLoanProgram'} className="nav-link" style={{color:"#3b123b"}}>LoanPrograms</Link> 
  </li>
  <li class="nav-item mx-5">
  <Link to={'/LoadStatus'  +'?id='+valuess +'&Name='+Name} className="nav-link" style={{color:"#3b123b"}}>LoadStatus</Link> 
  </li>
 <li class="nav-item mx-5">
  <Link to={'/Calculator'} className="nav-link" style={{color:"#3b123b"}}>EMI Calculator</Link> 
  </li> 
  <li class="nav-item mx-5">
  <Link   id="pay" to={'/Balance' +'?id=' +valuess}  style={{color:"#3b123b"}}  className="nav-link"   style={{display:"none"}} >Pay Loan</Link> 
  </li>


</ul>


<Switch>
  <Route path='/HomeLoan' component={Loan}/>
  <Route path='/Edit/:id' component={Edit}/>
  <Route path='/Balance' component={Balance}/>
  <Route path='/UserLoanProgram' component={UserLoanProgram}/>
  <Route path='/LoadStatus' component={LoadStatus}/>
  <Route path='/Calculator' component={Calculator}/>
  <Route path='/User' component={UserLoanProgram}/>
  <Route path='/Login' component={Login}/>
  

  
</Switch>
      
</Router>
       

 
    )  
}  
  
export default User


























