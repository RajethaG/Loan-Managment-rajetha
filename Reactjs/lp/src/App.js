import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import Admin from './Admin/Admin'
import  User from './Components/User'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import ClientManager from './ClientManager/ClientManager';
import Aboutus from './StaticPages/Aboutus'
import Home from './Components/Home'
import Calculator from './EMI/Calculator'
import UserLoanProgram from './Components/UserLoanProgram'
import ContactUs  from './StaticPages/ContactUs'
import Services from './StaticPages/Services'
import News from './StaticPages/News'
function App() {
  const login=()=>{
    document.getElementById("login").style.display="block"
    document.getElementById("logout").style.display="none"
    document.getElementById("about").style.display="block"
    document.getElementById("contact").style.display="block"
    document.getElementById("service").style.display="block"
    
}
 
 
  return (
    <div className="App">
   
       <Router>      
    
        <nav className="navbar navbar-expand-lg  navbar-dark"  style={{background:"#800080"}}>    
        <Link class="navbar-brand" to={'/'} >OPP Loans</Link>
          <div className="  collapse navbar-collapse " >      
          <ul className=" mr-5 navbar-nav " >   
              <li className="nav-item " >      
                <Link to={'/Aboutus'} className="nav-link mt-2 text-white"  id="about" >About Us</Link>      
              </li> 
              <li className="nav-item " >      
                <Link to={'/ContactUs'} className="nav-link mt-2 text-white"  id="contact" >Contact Us</Link>      
              </li> 
              <li className="nav-item " >      
                <Link to={'/Services'} className="nav-link mt-2 text-white"  id="service" >Services</Link>      
              </li> 
             
              </ul>
              <ul className="ml-auto mr-5 navbar-nav " >   
              <li className="nav-item " id="logout"   style={{display:"none"}}>      
                <Link   to={'/'} className="nav-link mt-2 text-white"   onClick={login}>Logout</Link>      
              </li>
              <li className="nav-item" id="login">      
                <Link to={'/login'} className="nav-link mt-2 text-white "   >Login</Link>      
              </li>  
               
              
             
           </ul>      
          </div>  

        </nav> 
        

        <Switch>        
          <Route path='/login' component={Login} />     
          <Route path='/Register' component={Register} /> 
          <Route path='/User' component={User}/>
          <Route path='/Admin/Admin' component={Admin} />  
          <Route  path='/ClientManager/ClientManager' component={ClientManager}/>
          <Route exact path='/' component={Home}/>  
          <Route path='/Aboutus' component={Aboutus}/>
          <Route path='/Calculator' component={Calculator}/>
          <Route path='/UserLoanProgram' component={UserLoanProgram}/>
          <Route path='/ContactUs' component={ContactUs}/>
          <Route path='/Services' component={Services}/>
          <Route path='/News' component={News}/>
         
      
         
         
        </Switch>      

      
    </Router>   
     
    </div>
  );
}

export default App;
