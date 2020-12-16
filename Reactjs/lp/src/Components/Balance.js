import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import{useLocation} from'react-router-dom'
function PayLoan() {  
    const search=useLocation().search;
    const valuess=new URLSearchParams(search).get('id');
    const [user, setuser] = useState({ LoanAccountNo:'',LoanAmount:''}); 
    const [users, setusers] = useState({ LoanAccountNo:'',LoanAmount:''});  
  
    const EMIPAY= (e) => {  
    
            e.preventDefault();    
            debugger;   
            const data = {LoanAccountNo:user.LoanAccountNo, LoanAmount:user.LoanAmount};    
            console.log(user.LoanAccountNo);
            console.log(data.LoanAmount);
            axios.put( 'https://localhost:44357/api/loan/Homeloanbyusermessage?id='+valuess+'&amount='+user.LoanAmount)    

            .then((result) => {    
                debugger;  
                console.log(user.amount)
                console.log(result);
                setusers({LoanAccountNo:result.data.AccountNo,LoanAmount:result.data.LoanAmount})
                console.log(result.data.LoanAmount); 
                console.log(users)

                
                })        
          };    
          
          const onChange = (e) => {  
            e.persist();  
            debugger;  
            setuser({ ...user, [e.target.name]: e.target.value });  
          }     
    return (  
      <div class="row justify-content-center">  
          <div class="col-xl-5 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                  
                  <div class="col-lg-10">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h5  style={{color:"#3b123b",marginBottom:"30px"}}>Available Balance</h5>  
                      </div>  
                     
                       <h1>{users.LoanAmount}</h1>
                            
                      <form onSubmit={EMIPAY} class="user" > 
                      <div class="col-sm-12 mb-3">  
                      <input type="number" name="LoanAmount" onChange={onChange} value={user.LoanAmount} class="form-control  pl-1 mb-3" id="exampleFirstName" required  placeholder="Amount in RS" />  
                    </div> 
                       
                        <button type="submit" className="btn  text-white mb-1" style={{textAlign:"center", background: "#993399"}} ><span>Pay</span></button>    
                       </form>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default PayLoan