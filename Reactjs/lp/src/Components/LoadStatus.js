import React from 'react'
import {Link} from 'react-router-dom'
import{useLocation} from'react-router-dom'
import { useState} from 'react'  
import axios from 'axios';  

function User() {
  const search=useLocation().search;
     const valuess=new URLSearchParams(search).get('id');
  
     const Name=new URLSearchParams(search).get('Name');
     const [user] = useState({ LoanAccountNo:'',FinalStatus:'',InterviewDate:'' ,LoanAmount:''}); 
     const [users, setusers] = useState({ LoanAccountNo:'', FinalStatus:'',InterviewDate:''});  
    
       const Login = (e) => {  

      
               e.preventDefault();    
               debugger;   
             const data = {LoanAccountNo:user.LoanAccountNo, FinalStatus:user.FinalStatus ,InterviewDate:user.InterviewDate,LoanAmount:user.LoanAmount};    
               document.getElementById("loanid").style.display="block"
               document.getElementById("status").style.display="block"
               axios.get('https://localhost:44357/api/loan/Homeloanbyusermessage?id=' + valuess)    
  
               .then((result) => {    
                   debugger;  
                   console.log(result);
                 console.log(result.data);   
                  setusers( { LoanAccountNo:result.data.LoanAccountNo,FinalStatus:result.data.FinalStatus,InterviewDate:result.data.InterviewDate,LoanAmount:result.data.LoanAmount})
                 
               if(result.data.FinalStatus==="accepted  " && result.data.LoanAmount>0){
                console.log(result.data.FinalStatus);
  
  
  
                 document.getElementById("pay").style.display="block"

  
                 }
               else if(result.data.LoanAmount<=0){
                   alert("Congratulations for completion of loan");
                    }
                })        
         };    
            return (
        <div class="card mt-5" >
 
   
                <p  id="loanid"   style={{display:"none"}}>LoanID:{users.LoanAccountNo}</p>
                 < p id="status"   style={{display:"none"}}>Status:{users.FinalStatus}</p>
              
                     
              <form onSubmit={Login} class="user" > 
              <button type="submit" className="btn  text-white"  style={{ background: "#993399",textAlign:"center"}} >LoanStatus</button>                          
                         
                     
                            
                      </form>                  
                   </div>  
            
         
           
         
    )
}

export default User


