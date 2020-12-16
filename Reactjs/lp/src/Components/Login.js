import React, { useState} from 'react'   
import axios from 'axios';  
import { Link } from 'react-router-dom'; 
function Login(props) {  
    const [user, setuser] = useState({ Email: '', Password: ''});  
    const apiUrl = "https://localhost:44357/api/login/loginuser";    
    const Login = (e) => {  
    
            e.preventDefault();    
            debugger;   
            const data = { Email:user.Email, Password: user.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result);

                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               
          
            
               const user =result.data.UserDetails;  
               
                console.log("user"+result.data.message);  
               
              
                if (result.data.status == '201')  {
                  
              
                  props.history.push('/Admin/Admin') 
                 

                  

                } else if (result.data.status == '204')  {
             
                 props.history.push('/User'+'?id='+result.data.UserDetails.AccountNo+'&Name='+result.data.UserDetails.Email)   
                
                    
                } else if (result.data.status == '202')  {
               console.log(serializedState.Id);
          
                    props.history.push('/ClientManager/ClientManager'+'?id='+result.data.UserDetails.Id+'&Name='+result.data.UserDetails.Email)   
                    
                  } 

                

                else  if(result.data.status=='404'){
                  alert("Invalid username and password");
                }  
                else

                alert('Incorrect Password or Username');    
            })        
          };    
          const logout=()=>{
           
            document.getElementById("login").style.display="none"
            document.getElementById("logout").style.display="block"
            document.getElementById("about").style.display="none"
            document.getElementById("contact").style.display="none"
            document.getElementById("service").style.display="none"
           }
         
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setuser({...user, [e.target.name]: e.target.value});    
              }    
    return (  
        
        <div >  
        <div class="row justify-content-center" >  
          <div class="col-xl-5 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5  opacity-5">  
              <div class="card-body p-0">  
                <div class="row">  
                  <div class="col-lg-10">  
                    <div class="p-5">  
                      <div className="text-center">  
                      
                        <h1 class="h5 text-dark mb-4 p-1"   style={{color:"#3b123b"}}  > <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg> LOGIN</h1>  
                      </div>  
                      <form onSubmit={Login} class="user" >  
                        <div class="form-group" > 
                        <div>
                         
                          <input type="text" class="form-control" value={user.Email} onChange={ onChange }  required name="Email" id="Email" placeholder="Enter UserName"/>  
                        </div>
                        
                        </div>  
                        <div class="form-group">  
                        
                          <input type="password" class="form-control" value={user.Password} required onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Enter Password"/>  
                         
                        </div>  
        
                        <button type="submit" className="btn    text-white mb-1" style={{textAlign:"center", background: "#993399"}}  onClick={logout}><span>LOGIN</span> </button>   &nbsp;                      
                            <Link to='/Register' className="btn  text-white mb-1" style={{background: "#993399",color:"white"}} >REGISTER</Link>
           
                      </form>  
                    
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login