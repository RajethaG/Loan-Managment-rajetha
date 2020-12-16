import React from 'react'
import UserLoanProgram from '../Components/UserLoanProgram'
import Calculator from '../EMI/Calculator'
import{useLocation} from'react-router-dom'
import Manager from './Manager'
import ClientStatusView from './ClientStatusView'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import InterviewDate from './InterviewDate'
import FinalVerification from './FinalVerification'
function ClientManager() {
    const search=useLocation().search;
const id=new URLSearchParams(search).get('id');
const Name=new URLSearchParams(search).get('Name');
    return (
        <div >
              <Router>

<ul class="nav nav-tabs  "  style={{background:"#ecc6ec"}}>
  <li class="nav-item  mx-5">
  <Link   to={'/Manager'}  className="  nav-link " style={{color:"#3b123b"}}>View Applicants</Link>  
 </li>
  <li class="nav-item mx-5">
  <Link   id="pay" to={'/UserLoanProgram'}  className="  nav-link "  style={{color:"#3b123b"}}>Loan Programs</Link> 
  </li>
  <li class="nav-item mx-5">
  <Link to={'/ClientStatusView'} className="  nav-link " style={{color:"#3b123b"}} >Status View</Link> 
  </li>
 <li class="nav-item mx-5">
  <Link to={'/Calculator'} className="nav-link" style={{color:"#3b123b"}}>EMI Calculator</Link> 
  </li> 
  
  
</ul>
<Switch>
  <Route  path='/Manager' component={Manager}/>
  <Route path='/UserLoanProgram' component={UserLoanProgram}/>
  <Route path='/ClientStatusView' component={ClientStatusView}/>
  <Route path='/Calculator' component={Calculator}/>
  <Route path='/FinalVerification/:id' component={FinalVerification}/> 
  <Route path='/InterviewDate/:id' component={InterviewDate}/>
  <Route path='/ClientManager/ClientManager' component={UserLoanProgram}/>
 
 
  
</Switch>
      
</Router>
           
             </div>
          
    )
}

export default ClientManager

