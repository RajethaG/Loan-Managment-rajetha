import React, { useState } from 'react'  
import axios from 'axios';  
import{useLocation} from'react-router-dom'
function MakeLoan(props) {  
  const search=useLocation().search;
  const valuess=new URLSearchParams(search).get('id');
  const [data, setdata] = useState({LoanId:'',Occupation:'',AnnualIncome:'',LoanAmount:'',LoanDuration:'',AccountNo:'',valuess,EMI:''});  
  const apiUrl = "https://localhost:44357/api/loan/HomeLoan";  
  const MakeLoanByuser = (e) => {  
    e.preventDefault(); 

    debugger;  
    const data1 = {LoanId:data.LoanId,Occupation:data.Occupation,AnnualIncome:data.AnnualIncome,LoanAmount:data.LoanAmount,Duration:data.LoanDuration,AccountNo:valuess,EMI:data.EMI};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
        alert("Request SuccessFull");
         
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container">  
      <div class="row">  
       
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
               <form onSubmit={MakeLoanByuser} class="user">  
                <h5>  <img src="https://tse4.mm.bing.net/th?id=OIP.cIibXePYCV93ERsSHoWslgAAAA&pid=Api&P=0&w=40&h=40" className="mr-1"  style={{color:"#3b123b"}}></img>Make Loan</h5>
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="number" name="LoanId" onChange={onChange} value={data.LoanAccountNo} class="form-control" id="exampleFirstName" required  placeholder="LoanId" />  
                    </div>
                
                  <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="text" name="Occupation" onChange={onChange} value={data.Occupation} class="form-control" id="exampleInputEmail"   required placeholder="Occupation" />  
                  </div>
                  </div>
                
                 <div class="form-group row">  
                   
                    <div class="col-sm-6 ">  
                      <input type="number" name="AnnualIncome" onChange={onChange} value={data.AnnualIncome} class="form-control" id="exampleInputPassword" required placeholder="AnnualIncome in Rs" />  
                    </div> 
                   

                   
                   
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="number" name="LoanAmount" onChange={onChange} value={data.LoanAmount} class="form-control" id="exampleRepeatPassword"  required placeholder="Loan Amount in Rs" />  
                    </div>
                    </div> 
           
                    <div class="form-group row"> 
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="number" name="LoanDuration" onChange={onChange} value={data.LoanDuration} class="form-control"  required id="exampleRepeatPassword" placeholder="Duration" />  
                    </div> 
                  
                   
                   
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="number" name="EMI" onChange={onChange} value={data.EMI} class="form-control" id="exampleRepeatPassword" placeholder="EMI" />  
                    </div>  
                    </div>
                    <div class="form-group row"> 
                    <div class="col-sm-6  offset-md-3 mb-3 mb-sm-0">  
                      <input type="number" name="AccountNo" readOnly class="form-control" id="exampleRepeatPassword" placeholder={valuess} />  
                    </div>   
                    </div>
                  
                
             
                 
                   <div class="col-sm-4 offset-md-4  mb-3 mb-sm-0" >  <button type="submit" class="btn  text-white  btn-block" style={{ background: "#993399"}} >  
                   Submit
                </button>  
                  </div>
                   
                </form> 
              </div>
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default MakeLoan