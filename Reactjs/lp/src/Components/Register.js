import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';
function Register() {  
  const [data, setdata] = useState({ AccountNo:'',Name:'',DOB:'',Gender:'',Religion:'',PAN:'',PermanentAddress:'',CurrentAddress:'',Phone:'',Email:'',Password:''});  
  const apiUrl = "https://localhost:44357/api/login/Register";  
  const Registration = (e) => {  

    debugger;  
    const data1 = {AccountNo:data.AccountNo,Name:data.Name,DOB:data.DOB,Gender:data.Gender,Religion:data.Religion,PAN:data.PAN,PermanentAddress:data.PermanentAddress,CurrentAddress:data.CurrentAddress,Phone:data.Phone,Email:data.Email,Password:data.Password };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
        alert('Invalid User');  
      else  
        alert('Registered Successfully') 
      })  
  }  

  const { register, handleSubmit, errors } = useForm();
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
   }  
   
  return (  
    <div class="container">  
      <div class="row">  
       
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5  col-md-10" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
               
                  <h5 style={{color:"#3b123b"}}   ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-text-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
</svg>SIGN UP</h5>  
                </div>  
                <form onSubmit={handleSubmit(Registration)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="AccountNo" onChange={onChange} value={data.AccountNo} class="form-control" id="exampleFirstName"    required    placeholder="AccountNo"   ref={register({ maxLength: 10, minLength: 10,pattern: /^[0-9]+$/i })} />
                      {errors.AccountNo && errors.AccountNo.type === "required" &&  ( <p  style={{color:"red"}}>This is required</p>)} 
                      {errors.AccountNo && errors.AccountNo.type === "minLength" && ( <p style={{color:"red"}}>10 digit account number is required</p>)} 
                      {errors.AccountNo && errors.AccountNo.type === "maxLength" && ( <p style={{color:"red"}}>10 digit account number is required</p>)} 

                      {errors.AccountNo && errors.AccountNo.type === "pattern" && ( <p style={{color:"red"}}> Only numbers should be inserted</p>)}
  
                    </div> 
                    <div class="col-sm-6">  
                      <input type="text" name="Name" onChange={onChange} value={data.Name} class="form-control" id="exampleLastName"   required placeholder="Name"  ref={register({ maxLength: 20, minLength: 6,pattern: /^[A-Za-z]+$/i })} />  
                      {errors.Name && errors.Name.type === "required" &&  ( <p  style={{color:"red"}}>This is required</p>)} 
                      {errors.Name && errors.Name.type === "minLength" && ( <p style={{color:"red"}}>Min length is 5</p>)} 
                      {errors.Name && errors.Name.type === "maxLength" && ( <p style={{color:"red"}}>max Length is 20</p>)} 
                      {errors.Name && errors.Name.type === "pattern" && ( <p style={{color:"red"}}> Only letters can be inserted</p>)}
                   
                    </div>  
                  </div>  
                  <div class="form-group row">  
                  
                  <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="date" name="DOB" onChange={onChange} value={data.DOB}   class="form-control" id="exampleInputEmail"   required placeholder="DOB" />  
                  </div>
                
                    <div class="col-sm-6 ">  
                      <input type="text" name="Gender" onChange={onChange} value={data.Gender} class="form-control" id="exampleInputPassword" required placeholder="Gender" />  
                    </div> 
                    </div>  

                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Religion" onChange={onChange} value={data.Religion} class="form-control" id="exampleRepeatPassword"  required placeholder="Religion" />  
                    </div>  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="PAN" onChange={onChange} value={data.PAN} class="form-control" id="exampleRepeatPassword"  required placeholder="PAN" required placeholder="PAN"  ref={register({ maxLength:10,minLength: 10,pattern: /^[A-Za-z]+[0-9]+$/i })}/>  
                      {errors.PAN && errors.PAN.type === "required" &&  ( <p  style={{color:"red"}}>This is required</p>)} 
                      {errors.PAN && errors.PAN.type === "minLength" && ( <p style={{color:"red"}}>Length should be 10</p>)} 
                   
                    </div>
                    </div> 
                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <textarea rows={2} type="text" name="CurrentAddress" onChange={onChange} value={data.CurrentAddress} class="form-control"  required id="exampleRepeatPassword" placeholder="CurrentAddress" />  
                    </div> 
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <textarea rows={2} type="text" name="PermanentAddress" onChange={onChange} value={data.PermanentAddress} class="form-control"   required id="exampleRepeatPassword" placeholder="PermanentAddress" />  
                    </div>  
                    </div>
                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Phone" onChange={onChange} value={data.Phone} class="form-control"  required id="exampleRepeatPassword" placeholder="Phone"  ref={register({ maxLength:10,minLength:10,pattern: /^[0-9]+$/i })} />  
                      {errors.Phone && errors.Phone.type === "maxLength" &&  ( <p  style={{color:"red"}}> length should be 10 </p>)} 
                      {errors.Phone && errors.Phone.type === "minLength" && ( <p style={{color:"red"}}>length should be 10</p>)} 
                      {errors.Phone && errors.Phone.type === "pattern" && ( <p style={{color:"red"}}> Only numbers should be inserted</p>)}

                    </div>  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" required id="exampleRepeatPassword"  placeholder="Email" />  
                    </div>  
                    </div>
                    <div class="form-group row">  
                    <div class="col-sm-6  offset-sm-3  mb-3 mb-sm-0">  
                      <input type="password" name="Password" onChange={onChange} value={data.Password} required class="form-control" id="exampleRepeatPassword" placeholder="Password"  ref={register({ maxLength:10,minLength: 5, pattern: /^[A-Za-z]+[0-9]+[@.*]+$/i })}/>  
                      {errors.Password && errors.Password.type === "maxLength" &&  ( <p  style={{color:"red"}}>maximum length should be 10 </p>)} 
                      {errors.Password && errors.Password.type === "minLength" && ( <p style={{color:"red"}}>minimum length should be 5</p>)} 
                      {errors.Password && errors.Password.type === "pattern" && ( <p style={{color:"red"}}>password should contain alphabets numbers and special characters</p>)} 
                    </div>  
                   </div>
                   <div class="col-sm-3 offset-md-4 "  >  <button type="submit"  style={{ background: "#993399"}}   className="btn text-white">  
                    Create User  
                </button>  
                </div>
                
                  
                

          
                
               

                   
                
               
                  <hr />  
                </form>  
                <hr />  
              </div>
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Register  