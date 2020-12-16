import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';

function AddAdmin() {  
  const [data, setdata] = useState({ Id:'',Name:'',DOB:'',Address:'',Phone:'',Email:'',Password:''});  
  const apiUrl = "https://localhost:44357/api/admin/ClientManagerView";  
  const AddClients = (e) => {  

    debugger;  
    const data1 = {Id:data.Id,Name:data.Name,DOB:data.DOB,Address:data.Address,Phone:data.Phone,Email:data.Email,Password:data.Password };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
        alert('Added Successfully! ');
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
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h5 style={{color:"#3b123b",marginBottom:"30px"}}>Create a New Clients</h5>  
                </div>  
                <form onSubmit={handleSubmit(AddClients)} class="user">  
                  <div class="form-group row"> 
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Name" onChange={onChange} value={data.Name} class="form-control" id="exampleLastName"   required placeholder="Name"  ref={register({ maxLength: 20, minLength: 6,pattern: /^[A-Za-z]+$/i })}  /> 
                      {errors.Name && errors.Name.type === "required" &&  ( <p  style={{color:"red"}}>This is required</p>)} 
                      {errors.Name && errors.Name.type === "minLength" && ( <p style={{color:"red"}}>Min length is 5</p>)} 
                      {errors.Name && errors.Name.type === "maxLength" && ( <p style={{color:"red"}}>max Length is 20</p>)} 
                      {errors.Name && errors.Name.type === "pattern" && ( <p style={{color:"red"}}> Only letters can be inserted</p>)}
                    
                    </div>  
              
                 
                  
                  <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="date" name="DOB" onChange={onChange} value={data.DOB} class="form-control" id="exampleInputEmail"   required placeholder="DOB" />  
                  </div>
                  </div>
                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Address" onChange={onChange} value={data.Address} class="form-control"  required id="exampleRepeatPassword" placeholder="Address" />  
                    </div> 
                
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Phone" onChange={onChange} value={data.Phone} class="form-control"  required id="exampleRepeatPassword" placeholder="Phone"  ref={register({ maxLength:10,minLength: 10 })} /> 
                      {errors.Phone && errors.Phone.type === "minLength" && ( <p style={{color:"red"}}>Length should be 10</p>)} 
                    
                    
                    </div>
                    </div>
                    <div class="form-group row"> 
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="email" name="Email" onChange={onChange} value={data.Email} class="form-control" required id="exampleRepeatPassword"  placeholder="Email" />  
                    </div> 
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="password" name="Password" onChange={onChange} value={data.Password}   required class="form-control" id="exampleRepeatPassword" placeholder="Password"   ref={register({ maxLength:10,minLength: 5})}/>
                      {errors.Password && errors.Password.type === "maxLength" &&  ( <p  style={{color:"red"}}>maximum length should be 10 </p>)} 
                      {errors.Password && errors.Password.type === "minLength" && ( <p style={{color:"red"}}>minimum length should be 5</p>)} 
                   
  
                    </div>  
                   </div>
                   <div >  <button  className="btn text-white"  style={{ background: "#993399"}}  type="submit" >  
                   Add Clients
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
  
export default AddAdmin