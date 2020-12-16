import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';

function CreateLoanProgram(props) {  
const [data, setdata] = useState({ LoanType: '', Interest: '',Description: ''})  
  const apiUrl = "https://localhost:44357/api/loan/CreateLoanProgram";  
  const AddLoanProgram = (e) => {  
    debugger;  
    const data1 = {  LoanType:data.LoanType, Interest:data.Interest, Description:data.Description};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid information');  
        else  
         props.history.push('/LoanProgram')  
      })  
  }  
  const { register, handleSubmit, errors } = useForm();

  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container col-md-4 mt-5">  
      <div class="row">  
        
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-2" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
              <div class="text-center">  
              
                  <h5 style={{color:"#3b123b",marginBottom:"30px"}}>Add a Loan Program</h5>  
                </div>
                <form onSubmit={handleSubmit(AddLoanProgram)} class="user">  
                  <div class="form-group">  
                  <formgroup row>
                    <div>  
                   <input  type="text" name="LoanType"   required onChange={onChange} value={data.LoanType} class="form-control" id="exampleName" placeholder="Loan Type"   ref={register({ maxLength: 20, minLength: 6,pattern: /^[A-Za-z]+$/i })}  />
                      {errors.LoanType && errors.LoanType.type === "required" &&  ( <p  style={{color:"red"}}>This is required</p>)} 
                      {errors.LoanType && errors.LoanType.type === "minLength" && ( <p style={{color:"red"}}>Min length is 5</p>)} 
                      {errors.LoanType && errors.LoanType.type === "maxLength" && ( <p style={{color:"red"}}>max Length is 20</p>)} 
                      {errors.LoanType && errors.LoanType.type === "pattern" && ( <p style={{color:"red"}}> Only letters can be inserted</p>)}
                      
                    </div>  
                    </formgroup>
                           <br/>
                           
                           <formgroup row>
                    <div>
                  
                      <input type="number" name="Interest"  required onChange={onChange} value={data.Interest} class="form-control" id="exampleQuantity" placeholder="Interest" />  
                    </div> 
                    </formgroup> 
                      
                    <br/>

                  
                  <formgroup row>
                 
                    <textarea rows={2} type="text" name="Description"   required  onChange={onChange} value={data.Description} class="form-control" id="exampleInputMobile" placeholder="Description" />  
                  <div>  
                  </div>  
                    <br/>
                    </formgroup>
                 
                  <button type="submit"  style={{ background: "#993399"}}  class="btn  text-white mb-1">  
                    Add  
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
  
export default CreateLoanProgram